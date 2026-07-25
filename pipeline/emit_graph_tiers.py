#!/usr/bin/env python3
"""emit_graph_tiers — compile the parsed corpus into the NGG1 graph tiers.

Implements ADR-NG-001 §2 (Decision A): replace the 39 MB WebVOWL monolith with
tiered, zero-copy binary artifacts under ``www/data/graph/``:

    overview.json       T0 — 6 domain roots + 34 taxonomy categories, member
                        counts, pre-baked force-layout positions (~40 nodes).
    domain-<slug>.bin   T1 ×6 — every class of one domain; full subClassOf
                        backbone; objectProperty relations capped per-node
                        top-k=8 by target degree, remainder counted.
    full.bin            uncapped whole graph (CSR) for the "load everything"
                        power path on /data.
    stats.json          pipeline-derived truth (DDD INV-5): pages, classes,
                        individuals, edges declared/resolvable/shipped per
                        scope, dataset date, pipeline version.

Binary layout is the frozen NGG1 contract — publishing-tools/WasmVOWL/
FORMAT-NGG1.md. Node stride is 24 bytes (the brief's "20" is arithmetically
impossible; resolved once in the format doc). This writer and the Rust/TS
readers MUST agree byte-for-byte; the golden fixture at
pipeline/tests/fixtures/ngg1-3n2e.bin pins it.

Ubiquitous language (DDD-NG-001 §2): Domain, Category, Backbone (subClassOf,
edge_type 0), Relation (objectProperty, edge_type 1), Scope, Tier, Artifact.
"""

from __future__ import annotations

import json
import math
import random
import struct
from collections import defaultdict
from dataclasses import dataclass, field
from datetime import date, timezone
from pathlib import Path
from typing import Iterable, Optional

from .jsonld_parser import PageData, parse_corpus
from .jsonld_to_webvowl import _remap_iri

# ─────────────────────────── pipeline identity ───────────────────────────

PIPELINE_VERSION = "ng-1.0.0"

# did:nostr provenance for the whole published corpus (PRD-NG-001 §9a.4 headline
# provenance chip). Single-sourced here so overview.json + stats.json carry the
# attribution the SPA's ProvenanceInfo / did:nostr chip reads. Matches the
# frontend AUTHOR_DID constant (site/pageMeta.ts) and the SiteChrome footer.
#
# ATTRIBUTED_TO is emitted as a *string* — the frozen SPA contract types
# `attributedTo?: string` (OverviewJson / StatsJson / ProvenanceInfo) and
# NodeSidePanel renders it verbatim; an object there would render "[object
# Object]". The structured attribution the corpus-honesty directive requires
# (did + label + corpusNature, PRD §1 / §9a.4a) ships alongside as the
# `provenance` object, a key the SPA ignores until it opts to read it.
ATTRIBUTED_TO = "did:nostr:jjohare"
ATTRIBUTED_LABEL = "DreamLab AI"

# Corpus-honesty framing (PRD-NG-001 §1, operator directive 2026-07-23 — binding).
# The corpus is mostly AI-generated synthetic content produced under human
# direction, by design. did:nostr provenance attests *traceable machine
# generation under human direction*, NOT human authorship. Emitting this into the
# data (not SPA copy) is the source of truth for the provenance chip's framing
# and the Home/`/about` synthetic-corpus banner (PRD §7: no hand-typed framing).
CORPUS_NATURE = "synthetic-ai-generated-human-directed"
CORPUS_DESCRIPTION = (
    "Mostly AI-generated synthetic content, produced under human direction, by "
    "design — this corpus exists to exercise and demonstrate the VisionFlow "
    "pipeline and VisionClaw engine on a medium-scale ontology (~7.4k classes, "
    "~100k relations). Provenance (did:nostr, generatedAtTime, URNs) attests "
    "traceable generation under human direction, not human authorship."
)

# Structured attribution/provenance object (PRD §1 corpus-honesty + §9a.4a).
# Shipped into overview.json AND stats.json under `provenance` so the SPA renders
# the honest attribution + synthetic framing from DATA, never hardcoded copy.
PROVENANCE = {
    "did": ATTRIBUTED_TO,
    "label": ATTRIBUTED_LABEL,
    "corpusNature": CORPUS_NATURE,
}

# Synthetic-corpus banner block (PRD §1). Rendered by the SPA from stats.json
# data so the "AI-generated synthetic corpus" statement is pipeline-sourced.
CORPUS = {
    "nature": "synthetic",
    "description": CORPUS_DESCRIPTION,
}

# Namespace base for the synthetic domain/category root IRIs the overview emits
# when a tier has no authored root page for that domain/category.
NGM_NS_BASE = "https://narrativegoldmine.com/ns"

# ───────────────────────── caps (contract mirror) ────────────────────────
# These mirror INVARIANTS in modern/src/types/scope.ts. That TypeScript module
# is the single source of truth for the renderer; Python cannot import it, so
# the values are duplicated here with the same names. MAX_NODES / MAX_EDGES are
# the on-screen ceilings enforced client-side at scope construction — the .bin
# artifacts may legitimately exceed MAX_EDGES (the client sub-selects). Only
# MAX_NODES bounds a domain tier's node table.
MAX_NODES = 1500
MAX_EDGES = 4000
# Per-node objectProperty ship cap for domain tiers (ADR §2).
RELATION_TOPK = 8

# ─────────────────────────── canonical domains ───────────────────────────
# Fixed order = domain id (FORMAT-NGG1 §6; DOMAIN_SLUGS in scope.ts).
DOMAIN_SLUGS = [
    "artificial-intelligence",
    "blockchain",
    "spatial-computing",
    "robotics",
    "distributed-collaboration",
    "infrastructure",
]
DOMAIN_LABELS = {
    "artificial-intelligence": "Artificial Intelligence",
    "blockchain": "Blockchain",
    "spatial-computing": "Spatial Computing",
    "robotics": "Robotics",
    "distributed-collaboration": "Distributed Collaboration",
    "infrastructure": "Infrastructure",
}
DOMAIN_INDEX = {slug: i for i, slug in enumerate(DOMAIN_SLUGS)}

# Short-form / legacy domain vocabulary → canonical domain (validate.py carries
# these aliases in the corpus). Anything unmapped resolves to DOMAIN_NONE.
DOMAIN_ALIASES = {
    "ai": "artificial-intelligence",
    "machine-learning": "artificial-intelligence",
    "metaverse": "spatial-computing",
    "distributed-systems": "infrastructure",
    "supply-chain": "infrastructure",
    "data": "infrastructure",
    "governance": "infrastructure",
    "security": "infrastructure",
    "standards": "infrastructure",
    "finance": "blockchain",
}

DOMAIN_NONE = 0xFFFF  # node with no resolvable domain (counted in stats)
CATEGORY_NONE = 0xFFFF  # uncategorised sentinel (FORMAT-NGG1 §3, ADR §9)

# ────────────────────── 34 intermediate categories ───────────────────────
# Copied from scripts/taxonomy_backbone.py (the corpus authoring backbone) and
# re-ordered into DOMAIN_SLUGS order so category id ranges are contiguous per
# domain. Position in CATEGORY_ORDER == category id == index into overview.json's
# taxonomy array (FORMAT-NGG1 §6).
_TAXONOMY = {
    "artificial-intelligence": {
        "ai-technique": "AI Technique",
        "ai-model-architecture": "AI Model Architecture",
        "ai-application": "AI Application",
        "ai-governance-and-ethics": "AI Governance and Ethics",
        "cat-ai-infrastructure": "AI Infrastructure",
        "ai-research-area": "AI Research Area",
    },
    "blockchain": {
        "bc-protocol-and-consensus": "Protocol and Consensus",
        "bc-cryptographic-primitive": "Cryptographic Primitive",
        "bc-token-and-asset": "Token and Asset",
        "bc-defi-and-economics": "DeFi and Economics",
        "bc-network-component": "Network Component",
        "bc-governance-and-regulation": "Governance and Regulation",
    },
    "spatial-computing": {
        "sc-display-and-rendering": "Display and Rendering",
        "sc-interaction": "Interaction Technology",
        "sc-content-and-assets": "Content and Assets",
        "sc-platform-and-environment": "Platform and Environment",
        "sc-standards-and-interop": "Standards and Interoperability",
        "sc-governance-and-safety": "Governance and Safety",
    },
    "robotics": {
        "robo-perception": "Perception and Sensing",
        "robo-actuation-and-control": "Actuation and Control",
        "robo-robot-type": "Robot Type",
        "robo-navigation-and-planning": "Navigation and Planning",
        "robo-safety-and-standards": "Safety and Standards",
        "robo-human-robot-interaction": "Human-Robot Interaction",
    },
    "distributed-collaboration": {
        "dc-communication": "Communication Technology",
        "dc-workspace-tools": "Workspace Tools",
        "dc-telepresence": "Telepresence",
        "dc-protocol-and-infra": "Protocol and Infrastructure",
    },
    "infrastructure": {
        "infra-computing-and-cloud": "Computing and Cloud",
        "infra-network-and-comms": "Network and Communication",
        "infra-security-and-identity": "Security and Identity",
        "infra-data-management": "Data Management",
        "infra-legal-and-regulatory": "Legal and Regulatory",
        "infra-software-engineering": "Software Engineering",
    },
}

# CATEGORY_ORDER[i] = (slug, label, domain_id); i == category id.
CATEGORY_ORDER: list[tuple[str, str, int]] = []
for _dslug in DOMAIN_SLUGS:
    for _cslug, _clabel in _TAXONOMY[_dslug].items():
        CATEGORY_ORDER.append((_cslug, _clabel, DOMAIN_INDEX[_dslug]))
CATEGORY_INDEX = {slug: i for i, (slug, _, _) in enumerate(CATEGORY_ORDER)}
DOMAIN_SLUG_SET = set(DOMAIN_SLUGS)

# ─────────────────────── edge-type / flag constants ──────────────────────
EDGE_SUBCLASS = 0  # backbone
EDGE_RELATION = 1  # objectProperty

FLAG_DOMAIN_ROOT = 0x01
FLAG_CATEGORY_ROOT = 0x02
FLAG_HAS_PAGE = 0x04
FLAG_BRIDGE = 0x08
# ABox marker — bit 4, previously unused in the FORMAT-NGG1 §5 table (the six
# builders mask specific bits, so setting a spare bit is byte-compatible with
# the frozen contract and every existing reader). The colour layer reads it to
# render OWL individuals as a darker fill than their sibling classes
# (mirrored client-side: modern/src/components/Canvas/palette.ts FLAG_INDIVIDUAL).
FLAG_INDIVIDUAL = 0x10

# The 12 objectProperty relation attributes on RelationSet (all edge_type 1).
RELATION_ATTRS = [
    "has_part", "requires", "enables", "depends_on", "implements",
    "contrasts_with", "bridges_to", "uses", "related_to", "supports",
    "standardized_by", "part_of",
]

# ─────────────────────────── NGG1 binary writer ──────────────────────────

NGG1_MAGIC_BYTES = b"NGG1"          # LE u32 0x3147474E
NGG1_VERSION = 1
NGG1_HEADER_SIZE = 32
NGG1_NODE_STRIDE = 24
# node record: <u32 id, f32 x, f32 y, u16 domain, u16 category, u8 flags, 3x pad, u32 degree>
_NODE_STRUCT = struct.Struct("<IffHHB3xI")
assert _NODE_STRUCT.size == NGG1_NODE_STRIDE, _NODE_STRUCT.size


@dataclass
class GNode:
    """One graph node (Class or Individual). ``local`` index is assigned per
    tier; ``gid`` is the stable external id (u32) shared across tiers."""
    gid: int
    label: str
    iri: str
    entity_type: str          # "Class" | "Individual"
    domain_id: int            # index into DOMAIN_SLUGS, or DOMAIN_NONE
    category_id: int          # index into CATEGORY_ORDER, or CATEGORY_NONE
    flags: int
    degree: int = 0           # full-graph incident degree (ranking key)
    x: float = 0.0
    y: float = 0.0
    is_domain_root: bool = False
    is_category_root: bool = False


def _pad4(n: int) -> int:
    return (4 - (n & 3)) & 3


def build_csr(num_nodes: int, edges: list[tuple[int, int, int]]) -> tuple[list[int], list[int], list[int]]:
    """CSR from directed (src_local, tgt_local, edge_type) triples.

    Edges are grouped by source; within a source they are ordered backbone
    (type 0) before relation (type 1), then by descending target degree is the
    caller's responsibility (edges arrive pre-sorted). Returns
    (row_ptr[num_nodes+1], col_idx[E], edge_type[E]).
    """
    counts = [0] * num_nodes
    for src, _tgt, _t in edges:
        counts[src] += 1
    row_ptr = [0] * (num_nodes + 1)
    for i in range(num_nodes):
        row_ptr[i + 1] = row_ptr[i] + counts[i]
    col_idx = [0] * len(edges)
    edge_type = [0] * len(edges)
    cursor = row_ptr[:num_nodes]  # writable copy of start offsets
    for src, tgt, t in edges:
        p = cursor[src]
        col_idx[p] = tgt
        edge_type[p] = t
        cursor[src] = p + 1
    return row_ptr, col_idx, edge_type


def pack_ngg1(nodes: list[GNode], row_ptr: list[int], col_idx: list[int], edge_type: list[int]) -> bytes:
    """Serialise a tier to NGG1 bytes. ``nodes`` are in local-index order;
    ``col_idx`` values are local indices; strings pair label,iri per node."""
    node_count = len(nodes)
    edge_count = len(col_idx)
    assert len(row_ptr) == node_count + 1
    assert len(edge_type) == edge_count
    assert row_ptr[-1] == edge_count

    off_nodes = NGG1_HEADER_SIZE
    off_adjacency = off_nodes + node_count * NGG1_NODE_STRIDE
    off_edge_types = off_adjacency + (node_count + 1) * 4 + edge_count * 4
    edge_types_padded = edge_count + _pad4(edge_count)
    off_strings = off_edge_types + edge_types_padded

    out = bytearray()
    # ── header (32 bytes) ──
    out += NGG1_MAGIC_BYTES
    out += struct.pack(
        "<HHIIIIII",
        NGG1_VERSION, 0,               # version, pad
        node_count, edge_count,
        off_nodes, off_adjacency, off_edge_types, off_strings,
    )
    # ── section 1: node table ──
    for n in nodes:
        out += _NODE_STRUCT.pack(
            n.gid & 0xFFFFFFFF,
            float(n.x), float(n.y),
            n.domain_id & 0xFFFF, n.category_id & 0xFFFF,
            n.flags & 0xFF,
            n.degree & 0xFFFFFFFF,
        )
    # ── section 2: CSR adjacency (row_ptr then col_idx) ──
    out += struct.pack("<%dI" % (node_count + 1), *row_ptr)
    if edge_count:
        out += struct.pack("<%dI" % edge_count, *col_idx)
    # ── section 3: edge types (u8, padded to 4) ──
    out += bytes(edge_type)
    out += b"\x00" * _pad4(edge_count)
    # ── section 4: string table ──
    blob = bytearray()
    offsets: list[int] = []
    for n in nodes:
        offsets.append(len(blob))
        blob += n.label.encode("utf-8")
        offsets.append(len(blob))
        blob += n.iri.encode("utf-8")
    count = len(offsets)  # == 2 * node_count
    out += struct.pack("<II", count, len(blob))
    if count:
        out += struct.pack("<%dI" % count, *offsets)
    out += bytes(blob)

    assert len(out) == off_strings + 8 + count * 4 + len(blob)
    return bytes(out)


# ─────────────────────────── layout (positions) ──────────────────────────

def force_layout(n: int, edges: list[tuple[int, int]], iters: int = 200,
                 seed: int = 42, area: float = 1_000_000.0) -> list[tuple[float, float]]:
    """Deterministic Fruchterman-Reingold spring-electrical layout. Pure Python,
    O(n²) per iteration — used only for the ~40-node overview graph (ADR §2:
    pre-baked positions)."""
    if n == 0:
        return []
    if n == 1:
        return [(0.0, 0.0)]
    rng = random.Random(seed)
    r0 = math.sqrt(area) / 4.0
    pos = [
        (r0 * math.cos(2 * math.pi * i / n) + rng.uniform(-2.0, 2.0),
         r0 * math.sin(2 * math.pi * i / n) + rng.uniform(-2.0, 2.0))
        for i in range(n)
    ]
    k = math.sqrt(area / n)
    t = math.sqrt(area) / 10.0
    for _ in range(iters):
        disp = [[0.0, 0.0] for _ in range(n)]
        for i in range(n):
            xi, yi = pos[i]
            for j in range(i + 1, n):
                dx = xi - pos[j][0]
                dy = yi - pos[j][1]
                d = math.hypot(dx, dy) or 0.01
                f = (k * k) / d
                ux, uy = dx / d, dy / d
                disp[i][0] += ux * f
                disp[i][1] += uy * f
                disp[j][0] -= ux * f
                disp[j][1] -= uy * f
        for a, b in edges:
            dx = pos[a][0] - pos[b][0]
            dy = pos[a][1] - pos[b][1]
            d = math.hypot(dx, dy) or 0.01
            f = (d * d) / k
            ux, uy = dx / d, dy / d
            disp[a][0] -= ux * f
            disp[a][1] -= uy * f
            disp[b][0] += ux * f
            disp[b][1] += uy * f
        for i in range(n):
            dl = math.hypot(disp[i][0], disp[i][1]) or 0.01
            lim = min(dl, t)
            pos[i] = (pos[i][0] + disp[i][0] / dl * lim,
                      pos[i][1] + disp[i][1] / dl * lim)
        t *= 0.95
    return [(round(x, 3), round(y, 3)) for x, y in pos]


# Deterministic radial-cluster seed for domain / full tiers. The worker refines
# these — they only need to be a sane, reproducible warm start (ADR §3).
_DOMAIN_RING_R = 900.0
_CAT_RING_R = 240.0
_LEAF_RING_R = 95.0


def bake_positions(nodes: list[GNode]) -> None:
    """Assign deterministic seed x,y to every node in place: domains on an outer
    ring, categories ringed around their domain centre, leaves ringed around
    their category. Single-domain tiers place the domain at the origin."""
    by_domain: dict[int, list[GNode]] = defaultdict(list)
    for nd in nodes:
        by_domain[nd.domain_id].append(nd)
    doms = sorted(by_domain.keys())
    ndoms = len(doms)
    for di, d in enumerate(doms):
        if ndoms == 1:
            cx = cy = 0.0
        else:
            ang = 2 * math.pi * di / ndoms
            cx = _DOMAIN_RING_R * math.cos(ang)
            cy = _DOMAIN_RING_R * math.sin(ang)
        dnodes = by_domain[d]
        by_cat: dict[int, list[GNode]] = defaultdict(list)
        for nd in dnodes:
            if nd.is_domain_root:
                nd.x, nd.y = cx, cy
            else:
                by_cat[nd.category_id].append(nd)
        cats = sorted(by_cat.keys(), key=lambda c: (c == CATEGORY_NONE, c))
        ncats = max(1, len(cats))
        for ci, c in enumerate(cats):
            cang = 2 * math.pi * ci / ncats
            ccx = cx + _CAT_RING_R * math.cos(cang)
            ccy = cy + _CAT_RING_R * math.sin(cang)
            members = sorted(by_cat[c], key=lambda nd: nd.gid)
            m = len(members)
            for mi, nd in enumerate(members):
                if nd.is_category_root:
                    nd.x, nd.y = ccx, ccy
                else:
                    mang = 2 * math.pi * mi / max(1, m)
                    nd.x = ccx + _LEAF_RING_R * math.cos(mang)
                    nd.y = ccy + _LEAF_RING_R * math.sin(mang)


# ─────────────────────────── corpus → graph model ────────────────────────

def _slug_of(iri: str) -> str:
    if ":" in iri and "/" not in iri:
        return iri.rsplit(":", 1)[-1]
    return iri.rsplit("/", 1)[-1] if "/" in iri else iri


def _resolve_domain(dom: Optional[str]) -> int:
    d = (dom or "").strip().lower()
    d = DOMAIN_ALIASES.get(d, d)
    return DOMAIN_INDEX.get(d, DOMAIN_NONE)


@dataclass
class GraphModel:
    """The full resolved graph: nodes (local index == gid) + typed edges +
    per-scope statistics inputs."""
    nodes: list[GNode]
    edges: list[tuple[int, int, int]]        # (src_gid, tgt_gid, edge_type), full/uncapped
    declared_backbone: int = 0
    declared_relations: int = 0
    resolvable_backbone: int = 0
    resolvable_relations: int = 0
    pages_public: int = 0
    classes: int = 0
    individuals: int = 0
    uncategorised: int = 0
    domainless: int = 0
    multi_parent: int = 0
    # Classes whose parents reach more than one category or domain. The tiers
    # keep only the nearest category per node, so these are the memberships the
    # binary format cannot carry — see build_graph_model.
    bridges: list = field(default_factory=list)


def _build_category_resolver(public_pages: list[PageData]):
    """Resolve a class's category by walking subClassOf/instanceOf ancestry.

    Category inheritance used to read direct parents only, so a class two or
    more hops below a category root fell to CATEGORY_NONE even though its
    ancestry named a category unambiguously. On the 7,457-class corpus that
    mislabelled 4,033 classes as uncategorised — 89.7% of the reported total.

    Breadth-first so the NEAREST category ancestor wins; parents are visited in
    declared order, which keeps the choice deterministic across runs (the NGG1
    tiers are byte-compared in CI, so a set-ordered walk would break the golden
    fixture). Cycles are guarded by `seen`, and MAX_DEPTH bounds a pathological
    chain — the deepest real path in the corpus needs 7.
    """
    MAX_DEPTH = 12
    parents_of: dict[str, tuple[str, ...]] = {}
    for p in public_pages:
        oc = p.ontology_class
        parents_of[_slug_of(oc.iri)] = tuple(
            _slug_of(r.iri) for r in (*oc.sub_class_of, *oc.instance_of)
        )

    memo: dict[str, int] = {}

    def resolve(slug: str) -> int:
        if slug in memo:
            return memo[slug]
        seen: set[str] = {slug}
        frontier = parents_of.get(slug, ())
        depth = 0
        found = CATEGORY_NONE
        while frontier and depth < MAX_DEPTH:
            nxt: list[str] = []
            for ps in frontier:
                cid = CATEGORY_INDEX.get(ps)
                if cid is not None:
                    found = cid
                    break
                if ps in seen:
                    continue
                seen.add(ps)
                nxt.extend(parents_of.get(ps, ()))
            if found != CATEGORY_NONE:
                break
            frontier = tuple(nxt)
            depth += 1
        memo[slug] = found
        return found

    return resolve


def build_graph_model(pages: list[PageData]) -> GraphModel:
    """Resolve parsed pages into nodes + typed edges. Mirrors jsonld_to_webvowl's
    declared-target filter: an edge ships only when its target is itself a
    declared public node."""
    public_pages = [p for p in pages if p.is_public and p.ontology_class]
    # INV-5 honesty (fixes D2 "count integrity"): `pages` is the reading-unit
    # count — DISTINCT public source Pages. Per the DDD ubiquitous language a
    # Page is a public Logseq markdown reading unit, NOT an OWL entity; the
    # class/individual tallies below are a *separate* lens minted from the
    # JSON-LD entity blocks. Reporting the OWL-class count under the "pages"
    # label (the old `sum(is_public)` happened to equal the class count in a
    # 1:1 corpus) was the conflation. Deduped by page identity so a page is
    # never double-counted; page-only sources (no entity block) still count.
    pages_public = len({(p.page_iri or str(p.path)) for p in pages if p.is_public})

    resolve_category = _build_category_resolver(public_pages)
    page_by_slug = {_slug_of(p.ontology_class.iri): p.ontology_class for p in public_pages}

    # 1. Nodes, keyed by canonical (remapped) IRI.
    node_by_canon: dict[str, GNode] = {}
    build_info: list[tuple[GNode, PageData]] = []
    for p in public_pages:
        oc = p.ontology_class
        canon = _remap_iri(oc.iri)
        if canon in node_by_canon:
            continue  # IRI uniqueness guaranteed upstream; be defensive anyway
        own_slug = _slug_of(oc.iri)
        is_domain_root = own_slug in DOMAIN_SLUG_SET
        is_category_root = own_slug in CATEGORY_INDEX
        domain_id = _resolve_domain(oc.domain)
        if is_category_root:
            category_id = CATEGORY_INDEX[own_slug]
        elif is_domain_root:
            category_id = CATEGORY_NONE
        else:
            # A Class inherits its category from its nearest category-bearing
            # subClassOf ancestor; an Individual from its instanceOf class.
            # Walks the full ancestry, not just direct parents — see
            # _build_category_resolver.
            category_id = resolve_category(own_slug)
        flags = FLAG_HAS_PAGE
        if is_domain_root:
            flags |= FLAG_DOMAIN_ROOT
        if is_category_root:
            flags |= FLAG_CATEGORY_ROOT
        if oc.entity_type == "Individual":
            flags |= FLAG_INDIVIDUAL
        node = GNode(
            gid=-1, label=oc.label or own_slug, iri=canon,
            entity_type=oc.entity_type, domain_id=domain_id,
            category_id=category_id, flags=flags,
            is_domain_root=is_domain_root, is_category_root=is_category_root,
        )
        node_by_canon[canon] = node
        build_info.append((node, p))

    # 2. Stable gid = index in canonical-IRI sort order; local == gid in full.bin.
    ordered = sorted(node_by_canon.values(), key=lambda n: n.iri)
    for i, n in enumerate(ordered):
        n.gid = i

    # 3. Edges (declared → resolvable), plus bridge-flag detection.
    edge_set: set[tuple[int, int, int]] = set()
    edges: list[tuple[int, int, int]] = []
    declared_backbone = declared_relations = 0
    resolvable_backbone = resolvable_relations = 0

    def add_edge(src: GNode, tgt_iri: str, etype: int) -> bool:
        nonlocal resolvable_backbone, resolvable_relations
        tgt = node_by_canon.get(_remap_iri(tgt_iri))
        if tgt is None or tgt is src:
            return False
        key = (src.gid, tgt.gid, etype)
        if key in edge_set:
            return True
        edge_set.add(key)
        edges.append(key)
        if etype == EDGE_SUBCLASS:
            resolvable_backbone += 1
        else:
            resolvable_relations += 1
        return True

    for node, p in build_info:
        oc = p.ontology_class
        # backbone: Class→subClassOf parents; Individual→instanceOf (fallback subClassOf)
        if oc.entity_type == "Individual":
            backbone_refs = oc.instance_of or oc.sub_class_of
        else:
            backbone_refs = oc.sub_class_of
        for ref in backbone_refs:
            declared_backbone += 1
            add_edge(node, ref.iri, EDGE_SUBCLASS)
        # relations: objectProperty
        has_bridge = False
        for attr in RELATION_ATTRS:
            for ref in getattr(oc.relations, attr, []):
                declared_relations += 1
                shipped = add_edge(node, ref.iri, EDGE_RELATION)
                if attr == "bridges_to" and shipped:
                    has_bridge = True
        if has_bridge:
            node.flags |= FLAG_BRIDGE

    # 4. Full-graph incident degree (ranking key), over resolvable edges.
    degree = [0] * len(ordered)
    for src, tgt, _t in edges:
        degree[src] += 1
        degree[tgt] += 1
    for n in ordered:
        n.degree = degree[n.gid]

    classes = sum(1 for n in ordered if n.entity_type != "Individual")
    individuals = sum(1 for n in ordered if n.entity_type == "Individual")
    uncategorised = sum(
        1 for n in ordered
        if n.category_id == CATEGORY_NONE and not n.is_domain_root and not n.is_category_root
    )
    domainless = sum(1 for n in ordered if n.domain_id == DOMAIN_NONE)

    # ── bridging (deliberate multi-parenting) ──
    # Overlap between domains is a design property of this corpus, not an
    # accident: 1,401 classes carry more than one subClassOf parent. The NGG1 node
    # record holds a single u16 category (FORMAT-NGG1 §3), so the tiers keep
    # only the nearest one and the remaining memberships are dropped on the
    # floor. Recording them here keeps the design visible in the published data
    # instead of losing it silently at build time.
    bridges: list[dict] = []
    for p in public_pages:
        oc = p.ontology_class
        if len(oc.sub_class_of) < 2:
            continue
        cats, doms = [], []
        for r in oc.sub_class_of:
            ps = _slug_of(r.iri)
            cid = CATEGORY_INDEX.get(ps)
            if cid is None:
                cid = resolve_category(ps)
            if cid != CATEGORY_NONE and cid not in cats:
                cats.append(cid)
            parent = page_by_slug.get(ps)
            if parent is not None:
                did = _resolve_domain(parent.domain)
                if did != DOMAIN_NONE and did not in doms:
                    doms.append(did)
        if len(cats) > 1 or len(doms) > 1:
            bridges.append({
                "iri": _remap_iri(oc.iri),
                "label": oc.label,
                "categories": cats,
                "domains": doms,
                "parents": [r.label for r in oc.sub_class_of],
            })

    return GraphModel(
        nodes=ordered, edges=edges,
        declared_backbone=declared_backbone, declared_relations=declared_relations,
        resolvable_backbone=resolvable_backbone, resolvable_relations=resolvable_relations,
        pages_public=pages_public, classes=classes, individuals=individuals,
        uncategorised=uncategorised, domainless=domainless,
        multi_parent=sum(1 for p in public_pages if len(p.ontology_class.sub_class_of) > 1),
        bridges=bridges,
    )


# ───────────────────────────── tier emission ─────────────────────────────

def _order_source_edges(src_local: int, out_edges: list[tuple[int, int]],
                        degree_of_local, topk: Optional[int]) -> tuple[list[tuple[int, int, int]], int]:
    """Order & (optionally) cap one source node's out-edges. ``out_edges`` are
    (tgt_local, edge_type). Backbone kept whole; relations sorted by descending
    target degree and capped at ``topk`` (None = uncapped). Deterministic tie
    break on target local index. Returns (ordered triples, relations_dropped)."""
    backbone = [(src_local, t, et) for (t, et) in out_edges if et == EDGE_SUBCLASS]
    backbone.sort(key=lambda e: e[1])
    relations = [(t, et) for (t, et) in out_edges if et == EDGE_RELATION]
    relations.sort(key=lambda e: (-degree_of_local(e[0]), e[0]))
    dropped = 0
    if topk is not None and len(relations) > topk:
        dropped = len(relations) - topk
        relations = relations[:topk]
    rel_triples = [(src_local, t, et) for (t, et) in relations]
    return backbone + rel_triples, dropped


def _build_tier(nodes: list[GNode], full_edges: list[tuple[int, int, int]],
                topk: Optional[int]) -> tuple[bytes, dict]:
    """Build one tier's NGG1 bytes + scope stats from a node subset. ``nodes``
    order becomes local index order; edges are induced (both endpoints in set),
    relations capped per-node at ``topk``."""
    gid_to_local = {n.gid: i for i, n in enumerate(nodes)}
    degree_by_gid = {n.gid: n.degree for n in nodes}
    # induced adjacency in local terms
    out_by_src: dict[int, list[tuple[int, int]]] = defaultdict(list)
    induced_backbone = induced_relations = 0
    for src_gid, tgt_gid, et in full_edges:
        si = gid_to_local.get(src_gid)
        ti = gid_to_local.get(tgt_gid)
        if si is None or ti is None:
            continue
        out_by_src[si].append((ti, et))
        if et == EDGE_SUBCLASS:
            induced_backbone += 1
        else:
            induced_relations += 1

    def degree_of_local(local_i: int) -> int:
        return degree_by_gid.get(nodes[local_i].gid, 0)

    ordered_edges: list[tuple[int, int, int]] = []
    relations_dropped = 0
    for si in range(len(nodes)):
        oe = out_by_src.get(si)
        if not oe:
            continue
        triples, dropped = _order_source_edges(si, oe, degree_of_local, topk)
        ordered_edges.extend(triples)
        relations_dropped += dropped

    row_ptr, col_idx, edge_type = build_csr(len(nodes), ordered_edges)
    data = pack_ngg1(nodes, row_ptr, col_idx, edge_type)
    shipped_backbone = sum(1 for t in edge_type if t == EDGE_SUBCLASS)
    shipped_relations = sum(1 for t in edge_type if t == EDGE_RELATION)
    stats = {
        "nodes": len(nodes),
        "backbone": shipped_backbone,
        "relations": shipped_relations,
        "shipped": len(edge_type),
        "relationsCapped": relations_dropped,
        "bytes": len(data),
    }
    return data, stats


def _build_overview(model: GraphModel) -> dict:
    """T0 overview.json: 6 domains + 34 categories with member counts and
    pre-baked force-layout positions."""
    # member counts
    domain_members = [0] * len(DOMAIN_SLUGS)
    category_members = [0] * len(CATEGORY_ORDER)
    for n in model.nodes:
        if 0 <= n.domain_id < len(DOMAIN_SLUGS):
            domain_members[n.domain_id] += 1
        if n.category_id != CATEGORY_NONE and not n.is_category_root:
            category_members[n.category_id] += 1

    # structural graph for the layout: 6 domains (0..5) + 34 categories (6..39),
    # each category subClassOf its domain.
    ndom = len(DOMAIN_SLUGS)
    ncat = len(CATEGORY_ORDER)
    layout_edges = [(ndom + ci, dom_id) for ci, (_s, _l, dom_id) in enumerate(CATEGORY_ORDER)]

    # Bridge edges: category pairs co-occurring in a class's parent set. The
    # corpus bridges deliberately, so the taxonomy is a lattice rather than a
    # tree — emitting only category→domain edges drew it as a tree and hid that.
    # Aggregated into weighted pairs (weight = number of classes bridging the
    # pair) so 313 bridging classes become a readable number of edges rather
    # than 313 overlapping lines.
    bridge_weight: dict[tuple[int, int], int] = defaultdict(int)
    for b in model.bridges:
        cats = sorted(b["categories"])
        for i in range(len(cats)):
            for j in range(i + 1, len(cats)):
                bridge_weight[(cats[i], cats[j])] += 1
    bridge_pairs = sorted(bridge_weight.items())

    # Bridges participate in the layout: two categories bridged by many classes
    # should settle near each other. Without this the baked positions would
    # contradict the edges drawn over them.
    layout_edges += [(ndom + a, ndom + b) for (a, b), _w in bridge_pairs]
    pos = force_layout(ndom + ncat, layout_edges, iters=200, seed=42)

    # Real authored root pages, when they exist, supply the true IRI / label /
    # flags (so the overview's "Read" affordance and provenance are honest); a
    # domain/category with no authored root falls back to a synthetic IRI.
    domain_root_by_id: dict[int, GNode] = {}
    category_root_by_id: dict[int, GNode] = {}
    for n in model.nodes:
        if n.is_domain_root and 0 <= n.domain_id < len(DOMAIN_SLUGS):
            domain_root_by_id.setdefault(n.domain_id, n)
        if n.is_category_root and n.category_id != CATEGORY_NONE:
            category_root_by_id.setdefault(n.category_id, n)

    domains = []
    for di, slug in enumerate(DOMAIN_SLUGS):
        cat_count = sum(1 for (_s, _l, dom) in CATEGORY_ORDER if dom == di)
        x, y = pos[di]
        domains.append({
            "id": di, "slug": slug, "label": DOMAIN_LABELS[slug],
            "x": x, "y": y,
            "memberCount": domain_members[di], "categoryCount": cat_count,
        })
    categories = []
    for ci, (slug, label, dom_id) in enumerate(CATEGORY_ORDER):
        x, y = pos[ndom + ci]
        categories.append({
            "id": ci, "slug": slug, "label": label, "domain": dom_id,
            "x": x, "y": y, "memberCount": category_members[ci],
        })

    # ── consumer contract (modern/src/pages/GraphPage.tsx OverviewJson) ──
    # The SPA's buildOverviewInput reads `nodes[]` (id,label,iri,domain,degree,
    # flags,x,y), `edges[]` (source/target as indices INTO nodes, type), the
    # `taxonomy[]` category-label array (T2 side-panel category names) and
    # `attributedTo` (did:nostr chip). Node order is frozen: the 6 domains at
    # indices 0..5, then the 34 categories at 6..39 — so edge indices and the
    # baked `pos` array align. degree carries member count so hubs render larger.
    nodes = []
    for di, slug in enumerate(DOMAIN_SLUGS):
        root = domain_root_by_id.get(di)
        x, y = pos[di]
        nodes.append({
            "id": di,
            "label": (root.label if root else DOMAIN_LABELS[slug]),
            "iri": (root.iri if root else f"{NGM_NS_BASE}/domain/{slug}"),
            "domain": di,
            "degree": domain_members[di],
            "flags": FLAG_DOMAIN_ROOT | (FLAG_HAS_PAGE if root else 0),
            "x": x, "y": y,
        })
    for ci, (slug, label, dom_id) in enumerate(CATEGORY_ORDER):
        root = category_root_by_id.get(ci)
        x, y = pos[ndom + ci]
        nodes.append({
            "id": ndom + ci,
            "label": (root.label if root else label),
            "iri": (root.iri if root else f"{NGM_NS_BASE}/category/{slug}"),
            "domain": dom_id,
            "category": ci,
            "degree": category_members[ci],
            "flags": FLAG_CATEGORY_ROOT | (FLAG_HAS_PAGE if root else 0),
            "x": x, "y": y,
        })
    # each category subClassOf its domain — backbone edges, indices into nodes[].
    edges = [
        {"source": ndom + ci, "target": dom_id, "type": EDGE_SUBCLASS}
        for ci, (_s, _l, dom_id) in enumerate(CATEGORY_ORDER)
    ]
    # then the bridges, category→category, as relations. `weight` is additive to
    # the frozen {source,target,type} shape, so a consumer that ignores it is
    # unaffected; one that reads it can scale line opacity by bridge strength.
    # Backbone edges stay first so an index-sensitive reader sees them unmoved.
    edges += [
        {"source": ndom + a, "target": ndom + b, "type": EDGE_RELATION, "weight": w}
        for (a, b), w in bridge_pairs
    ]
    taxonomy = [label for (_s, label, _d) in CATEGORY_ORDER]

    return {
        "version": NGG1_VERSION,
        "pipelineVersion": PIPELINE_VERSION,
        "generatedAt": date.today().isoformat(),
        # String form — the frozen SPA contract reads/renders this directly.
        "attributedTo": ATTRIBUTED_TO,
        # Structured attribution (PRD §1 corpus-honesty / §9a.4a): did + label +
        # corpusNature, so the provenance chip framing comes from data.
        "provenance": PROVENANCE,
        "taxonomy": taxonomy,
        "nodes": nodes,
        "edges": edges,
        # Retained (richer, back-compatible) domain/category summaries for any
        # non-SPA consumer + the pipeline's own tests.
        "domains": domains,
        "categories": categories,
    }


def emit_graph_tiers(pages: list[PageData], output_dir: Path) -> dict:
    """Emit all graph-tier artifacts under ``output_dir/data/graph/`` and return
    a small summary dict for the build log."""
    model = build_graph_model(pages)
    graph_dir = Path(output_dir) / "data" / "graph"
    graph_dir.mkdir(parents=True, exist_ok=True)

    # ── overview.json (T0) ──
    overview = _build_overview(model)
    (graph_dir / "overview.json").write_text(json.dumps(overview), encoding="utf-8")

    scope_stats: dict[str, dict] = {}

    # ── full.bin (uncapped) ──
    bake_positions(model.nodes)
    full_bytes, full_scope = _build_tier(model.nodes, model.edges, topk=None)
    (graph_dir / "full.bin").write_bytes(full_bytes)
    scope_stats["full"] = full_scope

    # ── domain-<slug>.bin ×6 (capped) ──
    by_domain: dict[int, list[GNode]] = defaultdict(list)
    for n in model.nodes:
        if n.domain_id != DOMAIN_NONE:
            by_domain[n.domain_id].append(n)
    for di, slug in enumerate(DOMAIN_SLUGS):
        dnodes = sorted(by_domain.get(di, []), key=lambda n: n.gid)
        truncated = 0
        if len(dnodes) > MAX_NODES:
            # Retain structural anchors (domain + category roots) unconditionally,
            # then fill remaining slots by descending degree (ADR §2 ranking key).
            roots = [n for n in dnodes if n.is_domain_root or n.is_category_root]
            rest = [n for n in dnodes if not (n.is_domain_root or n.is_category_root)]
            keep_rest = sorted(rest, key=lambda n: (-n.degree, n.gid))[:max(0, MAX_NODES - len(roots))]
            truncated = len(dnodes) - len(roots) - len(keep_rest)
            dnodes = sorted(roots + keep_rest, key=lambda n: n.gid)
        bake_positions(dnodes)
        data, dscope = _build_tier(dnodes, model.edges, topk=RELATION_TOPK)
        (graph_dir / f"domain-{slug}.bin").write_bytes(data)
        dscope["nodesTruncated"] = truncated
        scope_stats[f"domain-{slug}"] = dscope

    # ── stats.json (DDD INV-5) ──
    stats = {
        "pipelineVersion": PIPELINE_VERSION,
        # String form — frozen SPA StatsJson.attributedTo?: string.
        "attributedTo": ATTRIBUTED_TO,
        # Structured attribution + synthetic-corpus framing (PRD §1). The SPA
        # renders the honest banner from `corpus` and the chip from `provenance`,
        # both pipeline-derived — no hand-typed counts or framing (PRD §7).
        "provenance": PROVENANCE,
        "corpus": CORPUS,
        "datasetDate": date.today().isoformat(),
        "pages": model.pages_public,
        "classes": model.classes,
        "individuals": model.individuals,
        "nodes": len(model.nodes),
        "domains": len(DOMAIN_SLUGS),
        "categories": len(CATEGORY_ORDER),
        "uncategorised": model.uncategorised,
        "domainless": model.domainless,
        # Deliberate overlap. multiParent counts classes with >1 subClassOf;
        # crossCategory/crossDomain count those whose parents span more than one
        # taxonomy category or domain root. The NGG1 node record carries a
        # single category, so crossCategory classes are the ones whose extra
        # memberships exist only in bridges.json.
        "bridging": {
            "multiParent": model.multi_parent,
            "crossCategory": sum(1 for b in model.bridges if len(b["categories"]) > 1),
            "crossDomain": sum(1 for b in model.bridges if len(b["domains"]) > 1),
        },
        "edges": {
            "declared": model.declared_backbone + model.declared_relations,
            "declaredBackbone": model.declared_backbone,
            "declaredRelations": model.declared_relations,
            "resolvable": model.resolvable_backbone + model.resolvable_relations,
            "backbone": model.resolvable_backbone,
            "relations": model.resolvable_relations,
        },
        "scopes": scope_stats,
    }
    (graph_dir / "stats.json").write_text(json.dumps(stats, indent=2), encoding="utf-8")

    # bridges.json — the cross-category/cross-domain memberships NGG1 drops.
    # Category and domain values are indices into overview.json's taxonomy and
    # domains arrays, matching the node record encoding.
    (graph_dir / "bridges.json").write_text(json.dumps({
        "pipelineVersion": PIPELINE_VERSION,
        "note": (
            "Classes bridging more than one taxonomy category or domain. Overlap "
            "is a design property of this corpus. The NGG1 node record carries a "
            "single u16 category (FORMAT-NGG1 3), so tiers keep the nearest one; "
            "the full membership is here. Indices match overview.json."
        ),
        "count": len(model.bridges),
        "bridges": model.bridges,
    }, indent=2), encoding="utf-8")

    return {
        "nodes": len(model.nodes),
        "edges": len(model.edges),
        "classes": model.classes,
        "individuals": model.individuals,
        "graph_dir": str(graph_dir),
    }


def main():
    import sys
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mainKnowledgeGraph/pages")
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("www")
    pages = parse_corpus(pages_dir)
    summary = emit_graph_tiers(pages, output)
    print(f"Graph tiers: {summary['nodes']} nodes, {summary['edges']} edges → {summary['graph_dir']}")


if __name__ == "__main__":
    main()
