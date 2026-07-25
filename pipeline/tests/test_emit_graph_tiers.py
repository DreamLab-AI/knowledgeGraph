#!/usr/bin/env python3
"""Golden + behavioural tests for pipeline.emit_graph_tiers.

Run:
    PYTHONPATH=<pytest-libs> python -m pytest pipeline/tests/test_emit_graph_tiers.py -q

Covers:
  * NGG1 byte layout is byte-exact against FORMAT-NGG1.md §7 (writes the
    writer-golden fixture pipeline/tests/fixtures/ngg1-3n2e.bin).
  * An independent struct reader round-trips the layout (stride 24, CSR, strings).
  * objectProperty top-k=8 cap by target degree; backbone uncapped; remainder
    counted.
  * stats.json / overview.json correctness on a synthetic corpus (declared vs
    resolvable, uncategorised, degree preserved across tiers, 6+34 taxonomy).
"""

from __future__ import annotations

import json
import struct
from pathlib import Path

import pytest

from pipeline.emit_graph_tiers import (
    CATEGORY_NONE,
    CATEGORY_ORDER,
    DOMAIN_SLUGS,
    EDGE_RELATION,
    EDGE_SUBCLASS,
    FLAG_DOMAIN_ROOT,
    FLAG_INDIVIDUAL,
    GNode,
    NGG1_NODE_STRIDE,
    RELATION_TOPK,
    bake_positions,
    build_csr,
    build_graph_model,
    emit_graph_tiers,
    pack_ngg1,
)
from pipeline.jsonld_parser import (
    OntologyEntity,
    PageData,
    RelationSet,
    WikilinkRef,
)

FIXTURE_DIR = Path(__file__).parent / "fixtures"


# ─────────────────────── independent struct reader ───────────────────────

def parse_ngg1(buf: bytes) -> dict:
    """A deliberately independent NGG1 parser (does not share code with the
    writer) so the golden test cross-checks the byte layout, not just a
    round-trip of shared logic."""
    magic = struct.unpack_from("<I", buf, 0)[0]
    assert magic == 0x3147474E, f"bad magic 0x{magic:08x}"
    (version, _pad, node_count, edge_count,
     off_nodes, off_adj, off_et, off_str) = struct.unpack_from("<HHIIIIII", buf, 4)
    assert version == 1

    nodes = []
    for i in range(node_count):
        o = off_nodes + i * NGG1_NODE_STRIDE
        gid, x, y, dom, cat, flags, deg = struct.unpack_from("<IffHHB3xI", buf, o)
        nodes.append(dict(gid=gid, x=x, y=y, domain=dom, category=cat,
                          flags=flags, degree=deg))

    row_ptr = list(struct.unpack_from("<%dI" % (node_count + 1), buf, off_adj))
    col_off = off_adj + (node_count + 1) * 4
    col_idx = list(struct.unpack_from("<%dI" % edge_count, buf, col_off)) if edge_count else []
    edge_type = list(buf[off_et:off_et + edge_count])

    count, blob_len = struct.unpack_from("<II", buf, off_str)
    offs = list(struct.unpack_from("<%dI" % count, buf, off_str + 8)) if count else []
    blob_start = off_str + 8 + count * 4
    blob = buf[blob_start:blob_start + blob_len]

    def s(i: int) -> str:
        start = offs[i]
        end = offs[i + 1] if i + 1 < count else blob_len
        return blob[start:end].decode("utf-8")

    labels = [s(i * 2) for i in range(node_count)]
    iris = [s(i * 2 + 1) for i in range(node_count)]
    return dict(
        version=version, node_count=node_count, edge_count=edge_count,
        off_nodes=off_nodes, off_adjacency=off_adj, off_edge_types=off_et,
        off_strings=off_str, nodes=nodes, row_ptr=row_ptr, col_idx=col_idx,
        edge_type=edge_type, labels=labels, iris=iris, string_count=count,
        blob_len=blob_len,
    )


# ─────────────────────── the FORMAT-NGG1 §7 golden ────────────────────────

# The 183-byte worked example, assembled from the hex dump in FORMAT-NGG1.md §7.
# Each fragment is clean, space-free, uppercase hex.
GOLDEN_HEX = "".join([
    # ── header (32 bytes) ──
    "4E474731",  # magic 'NGG1'
    "01000000",  # version=1, pad
    "03000000",  # node_count=3
    "02000000",  # edge_count=2
    "20000000",  # off_nodes=32
    "68000000",  # off_adjacency=104
    "80000000",  # off_edge_types=128
    "84000000",  # off_strings=132
    # ── n0: id0, (0,0), dom0, cat0, flags0x01, deg1 ──
    "00000000", "00000000", "00000000", "0000", "0000", "01", "000000", "01000000",
    # ── n1: id1, (1.0,0), dom0, cat1, flags0, deg2 ──
    "01000000", "0000803F", "00000000", "0000", "0100", "00", "000000", "02000000",
    # ── n2: id2, (0,1.0), dom0, cat1, flags0, deg1 ──
    "02000000", "00000000", "0000803F", "0000", "0100", "00", "000000", "01000000",
    # ── adjacency: row_ptr[4] then col_idx[2] ──
    "00000000", "00000000", "02000000", "02000000",  # row_ptr = [0,0,2,2]
    "00000000", "02000000",                          # col_idx = [0,2]
    # ── edge types [0,1] + 2 pad ──
    "00", "01", "0000",
    # ── string table ──
    "06000000",  # count=6
    "13000000",  # blob_len=19
    "00000000", "02000000", "06000000", "08000000", "0C000000", "0F000000",  # offsets
    "41496E673A304D4C6E673A314E4C506E673A32",  # "AI"+"ng:0"+"ML"+"ng:1"+"NLP"+"ng:2"
])


def _golden_nodes_edges():
    nodes = [
        GNode(gid=0, label="AI", iri="ng:0", entity_type="Class",
              domain_id=0, category_id=0, flags=FLAG_DOMAIN_ROOT, degree=1,
              x=0.0, y=0.0, is_domain_root=True),
        GNode(gid=1, label="ML", iri="ng:1", entity_type="Class",
              domain_id=0, category_id=1, flags=0x00, degree=2, x=1.0, y=0.0),
        GNode(gid=2, label="NLP", iri="ng:2", entity_type="Class",
              domain_id=0, category_id=1, flags=0x00, degree=1, x=0.0, y=1.0),
    ]
    # ML(n1) subClassOf AI(n0) [backbone], ML(n1) objectProperty NLP(n2) [relation]
    edges = [(1, 0, EDGE_SUBCLASS), (1, 2, EDGE_RELATION)]
    return nodes, edges


def test_golden_183_bytes_byte_exact():
    nodes, edges = _golden_nodes_edges()
    row_ptr, col_idx, edge_type = build_csr(len(nodes), edges)
    assert row_ptr == [0, 0, 2, 2]
    assert col_idx == [0, 2]
    assert edge_type == [0, 1]

    data = pack_ngg1(nodes, row_ptr, col_idx, edge_type)
    expected = bytes.fromhex(GOLDEN_HEX)

    assert len(expected) == 183
    assert len(data) == 183, f"length {len(data)} != 183"
    assert data == expected, "writer output diverged from FORMAT-NGG1 §7 golden"

    # Persist the writer-golden fixture (byte-identical to the reader golden at
    # modern/src/lib/__fixtures__/ngg1-3n2e.bin — FORMAT-NGG1 §7).
    FIXTURE_DIR.mkdir(parents=True, exist_ok=True)
    (FIXTURE_DIR / "ngg1-3n2e.bin").write_bytes(data)


def test_golden_roundtrip_assertions():
    """The exact assertions listed in FORMAT-NGG1 §7 'Round-trip assertions'."""
    nodes, edges = _golden_nodes_edges()
    row_ptr, col_idx, edge_type = build_csr(len(nodes), edges)
    p = parse_ngg1(pack_ngg1(nodes, row_ptr, col_idx, edge_type))

    assert p["version"] == 1
    assert p["node_count"] == 3
    assert p["edge_count"] == 2
    assert p["off_nodes"] == 32
    assert p["off_adjacency"] == 104
    assert p["off_edge_types"] == 128
    assert p["off_strings"] == 132
    for off in ("off_nodes", "off_adjacency", "off_edge_types", "off_strings"):
        assert p[off] % 4 == 0
    assert p["row_ptr"][p["node_count"]] == p["edge_count"] == 2
    assert p["row_ptr"] == sorted(p["row_ptr"])  # non-decreasing
    # stride 24: n1.x == 1.0, n2.y == 1.0, n1.degree == 2
    assert p["nodes"][1]["x"] == pytest.approx(1.0)
    assert p["nodes"][2]["y"] == pytest.approx(1.0)
    assert p["nodes"][1]["degree"] == 2
    # strings[2], strings[3]
    assert p["labels"][1] == "ML"
    assert p["iris"][1] == "ng:1"
    # ego of n1 radius 1: nodes {1,0,2}, edge types {0,1}
    assert set(p["edge_type"]) == {0, 1}
    assert p["col_idx"] == [0, 2]


def test_fixture_matches_documented_bytes():
    """Fixture on disk (once written) is byte-identical to the documented golden."""
    nodes, edges = _golden_nodes_edges()
    row_ptr, col_idx, edge_type = build_csr(len(nodes), edges)
    data = pack_ngg1(nodes, row_ptr, col_idx, edge_type)
    FIXTURE_DIR.mkdir(parents=True, exist_ok=True)
    (FIXTURE_DIR / "ngg1-3n2e.bin").write_bytes(data)
    assert (FIXTURE_DIR / "ngg1-3n2e.bin").read_bytes() == bytes.fromhex(GOLDEN_HEX)


# ───────────────────── objectProperty top-k cap behaviour ────────────────

def test_relation_topk_cap_by_target_degree():
    """A hub with 12 objectProperty relations ships only the top-8 by target
    degree; backbone is never capped; remainder is counted."""
    hub = GNode(gid=100, label="Hub", iri="ng:hub", entity_type="Class",
                domain_id=0, category_id=0, flags=0, degree=13)
    # 12 targets with strictly increasing degree j (T11 most connected).
    targets = [
        GNode(gid=j, label=f"T{j}", iri=f"ng:t{j}", entity_type="Class",
              domain_id=0, category_id=0, flags=0, degree=j)
        for j in range(12)
    ]
    nodes = [hub] + targets  # local index: hub=0, T0=1 … T11=12

    full_edges = [(hub.gid, t.gid, EDGE_RELATION) for t in targets]
    full_edges.append((hub.gid, targets[0].gid, EDGE_SUBCLASS))  # one backbone edge

    from pipeline.emit_graph_tiers import _build_tier
    data, scope = _build_tier(nodes, full_edges, topk=RELATION_TOPK)
    p = parse_ngg1(data)

    # Hub is local 0; read its adjacency row.
    r0, r1 = p["row_ptr"][0], p["row_ptr"][1]
    row_types = p["edge_type"][r0:r1]
    row_targets = p["col_idx"][r0:r1]

    assert scope["relationsCapped"] == 4          # 12 - 8
    assert scope["relations"] == RELATION_TOPK     # 8 shipped
    assert scope["backbone"] == 1                  # backbone uncapped
    assert scope["shipped"] == 9

    # Row ordering: backbone (type 0) first, then relations by descending degree.
    assert row_types[0] == EDGE_SUBCLASS
    assert row_types[1:] == [EDGE_RELATION] * 8

    # local index of T_j is j+1. Kept relations = the 8 highest-degree = T11..T4.
    kept_local = row_targets[1:]
    expected_kept = [ (j) + 1 for j in [11, 10, 9, 8, 7, 6, 5, 4] ]
    assert kept_local == expected_kept

    # full/uncapped tier ships all 12 relations.
    data_full, scope_full = _build_tier(nodes, full_edges, topk=None)
    assert scope_full["relations"] == 12
    assert scope_full["relationsCapped"] == 0


def test_build_csr_grouping():
    edges = [(2, 0, 1), (0, 1, 0), (2, 3, 1), (0, 3, 1)]
    row_ptr, col_idx, edge_type = build_csr(4, edges)
    assert row_ptr == [0, 2, 2, 4, 4]
    # source 0 owns slots 0-1, source 2 owns 2-3, in input order
    assert col_idx[0:2] == [1, 3]
    assert col_idx[2:4] == [0, 3]


# ───────────────────── synthetic corpus (end to end) ─────────────────────

def _page(slug, label, domain, entity_type="Class", subclass=(), instance=(),
          relations=None, public=True):
    iri = f"urn:ngm:class:{slug}" if entity_type == "Class" else f"urn:ngm:individual:{slug}"
    rs = RelationSet()
    for attr, targets in (relations or {}).items():
        setattr(rs, attr, [WikilinkRef(iri=t, label=t) for t in targets])
    oc = OntologyEntity(
        iri=iri, label=label, entity_type=entity_type, domain=domain,
        definition=f"def {label}",
        sub_class_of=[WikilinkRef(iri=s, label=s) for s in subclass],
        instance_of=[WikilinkRef(iri=s, label=s) for s in instance],
        relations=rs,
    )
    return PageData(
        path=Path(f"{slug}.md"), page_iri=f"urn:visionflow:page:{slug}",
        slug=slug, title=label, is_public=public, schema_version=2,
        ontology_class=oc,
    )


def _source_page(slug, title, public=True):
    """A public Logseq reading page with NO ontology entity block. Counts toward
    the `pages` reading-unit tally but mints no class/individual node — the
    fixture that proves pages ≠ classes (INV-5 honesty)."""
    return PageData(
        path=Path(f"{slug}.md"), page_iri=f"urn:visionflow:page:{slug}",
        slug=slug, title=title, is_public=public, schema_version=2,
        ontology_class=None,
    )


def _synthetic_corpus():
    ai = "artificial-intelligence"
    bc = "blockchain"
    ai_iri = "urn:ngm:class:artificial-intelligence"
    tech_iri = "urn:ngm:class:ai-technique"
    pages = [
        # AI domain root + one category root
        _page("artificial-intelligence", "Artificial Intelligence", ai),
        _page("ai-technique", "AI Technique", ai, subclass=[ai_iri]),
        # categorised leaves under ai-technique
        _page("transformers", "Transformers", ai, subclass=[tech_iri],
              relations={"uses": ["urn:ngm:class:attention",
                                   "urn:ngm:class:does-not-exist"],  # dangling → declared not resolvable
                         "bridges_to": ["urn:ngm:class:zk-rollup"]}),  # cross-domain bridge
        _page("attention", "Attention", ai, subclass=[tech_iri]),
        # uncategorised leaf: parent is the domain root only (no category)
        _page("mystery-method", "Mystery Method", ai, subclass=[ai_iri]),
        # an Individual (instanceOf a class) → backbone via rdf:type
        _page("gpt-x", "GPT-X", ai, entity_type="Individual",
              instance=[tech_iri]),
        # a second domain so full.bin is multi-domain and the bridge resolves
        _page("blockchain", "Blockchain", bc),
        _page("zk-rollup", "ZK Rollup", bc,
              subclass=["urn:ngm:class:blockchain"]),
        # a non-public page (ignored) + a public page with no ontology (page-only)
        _page("secret", "Secret", ai, public=False),
        # a public reading page with no ontology entity: a `pages` reading unit
        # that mints no node — separates the pages count from the class count.
        _source_page("about-this-corpus", "About This Corpus"),
    ]
    return pages


def test_build_graph_model_counts():
    model = build_graph_model(_synthetic_corpus())
    # nodes: 8 public pages with ontology_class (secret + page-only excluded)
    assert len(model.nodes) == 8
    assert model.individuals == 1
    assert model.classes == 7
    # `pages` is a SEPARATE reading-unit lens (INV-5): 8 public entity pages +
    # 1 public page-only source page = 9 distinct source pages; `secret` (private)
    # is excluded. Deliberately ≠ classes (7) ≠ nodes (8) — no conflation.
    assert model.pages_public == 9
    # the individual carries the ABox flag the colour layer tints on
    gpt = next(n for n in model.nodes if n.iri.endswith("/gpt-x"))
    assert gpt.entity_type == "Individual"
    assert gpt.flags & FLAG_INDIVIDUAL
    # sibling classes never carry it
    assert not (next(n for n in model.nodes if n.iri.endswith("/transformers")).flags & FLAG_INDIVIDUAL)
    # uncategorised: mystery-method (subClassOf domain root) + zk-rollup
    # (subClassOf blockchain domain root); gpt-x is categorised via instanceOf
    # ai-technique; the two domain roots + category root are excluded.
    assert model.uncategorised == 2
    # declared relations = uses(2) + bridges_to(1) = 3; resolvable = attention + zk-rollup = 2
    assert model.declared_relations == 3
    assert model.resolvable_relations == 2
    # dangling target lowered resolvable below declared
    assert (model.declared_backbone + model.declared_relations) > \
           (model.resolvable_backbone + model.resolvable_relations)
    # bridge flag set on transformers (bridges_to zk-rollup resolves cross-domain)
    from pipeline.emit_graph_tiers import FLAG_BRIDGE
    tf = next(n for n in model.nodes if n.iri.endswith("/transformers"))
    assert tf.flags & FLAG_BRIDGE


def test_emit_end_to_end(tmp_path):
    pages = _synthetic_corpus()
    summary = emit_graph_tiers(pages, tmp_path)
    graph_dir = tmp_path / "data" / "graph"

    # ── files present ──
    assert (graph_dir / "overview.json").exists()
    assert (graph_dir / "full.bin").exists()
    assert (graph_dir / "stats.json").exists()
    for slug in DOMAIN_SLUGS:
        assert (graph_dir / f"domain-{slug}.bin").exists()

    # ── overview.json: 6 domains + 34 categories with positions ──
    overview = json.loads((graph_dir / "overview.json").read_text())
    assert len(overview["domains"]) == 6
    assert len(overview["categories"]) == 34
    assert overview["categories"][0]["id"] == 0
    # positions baked (not all zero)
    assert any(d["x"] != 0.0 or d["y"] != 0.0 for d in overview["domains"])
    # AI domain member count includes its nodes
    ai_dom = next(d for d in overview["domains"] if d["slug"] == "artificial-intelligence")
    assert ai_dom["memberCount"] >= 5
    ai_tech = next(c for c in overview["categories"] if c["slug"] == "ai-technique")
    assert ai_tech["memberCount"] == 3  # transformers + attention + gpt-x (instanceOf)

    # ── overview.json consumer contract (modern GraphPage OverviewJson) ──
    # This is the shape buildOverviewInput actually reads; the earlier
    # domains/categories-only emit rendered the T0 landing view with zero nodes.
    assert len(overview["nodes"]) == 6 + 34, "nodes = 6 domains + 34 categories"
    # node order frozen: domains 0..5, categories 6..39 (edge indices depend on it)
    for di in range(6):
        assert overview["nodes"][di]["domain"] == di
        assert overview["nodes"][di]["flags"] & FLAG_DOMAIN_ROOT
    for ci in range(34):
        nd = overview["nodes"][6 + ci]
        assert nd["id"] == 6 + ci
        for key in ("label", "iri", "domain", "degree", "flags", "x", "y"):
            assert key in nd
    # edges index into nodes[]: 34 backbone (category → its domain) FIRST, then
    # bridge relations (category → category) for deliberately multi-parented
    # classes. Overlap is a design property of this corpus, so the taxonomy is a
    # lattice rather than a tree — see build_graph_model.
    backbone = [e for e in overview["edges"] if e["type"] == EDGE_SUBCLASS]
    bridge_edges = [e for e in overview["edges"] if e["type"] == EDGE_RELATION]
    assert len(backbone) == 34, "one backbone edge per category"
    # backbone stays at indices 0..33 so an index-sensitive reader is unaffected
    assert overview["edges"][:34] == backbone
    for e in backbone:
        assert 0 <= e["source"] < len(overview["nodes"])
        assert 0 <= e["target"] < 6  # every category points at a domain node
    for e in bridge_edges:
        # both endpoints are category nodes (6..39); a bridge never targets a domain
        assert 6 <= e["source"] < len(overview["nodes"])
        assert 6 <= e["target"] < len(overview["nodes"])
        assert e["source"] != e["target"]
        assert e["weight"] >= 1
    # taxonomy: 34 category labels indexed by category id (T2 side-panel names)
    assert len(overview["taxonomy"]) == 34
    assert overview["taxonomy"][0] == CATEGORY_ORDER[0][1]
    # did:nostr provenance chip has a data source (PRD §9a.4). attributedTo stays
    # a STRING — the frozen SPA (OverviewJson.attributedTo?: string, rendered
    # verbatim in NodeSidePanel) would print "[object Object]" for an object.
    assert overview["attributedTo"] == "did:nostr:jjohare"
    assert isinstance(overview["attributedTo"], str)
    # Structured attribution rides alongside as `provenance` (PRD §1 / §9a.4a):
    # did + human-readable label + honest synthetic corpusNature framing.
    assert overview["provenance"] == {
        "did": "did:nostr:jjohare",
        "label": "DreamLab AI",
        "corpusNature": "synthetic-ai-generated-human-directed",
    }

    # ── stats.json correctness ──
    stats = json.loads((graph_dir / "stats.json").read_text())
    assert stats["nodes"] == 8
    assert stats["individuals"] == 1
    assert stats["classes"] == 7
    # honest, independently-computed reading-unit count (INV-5 / PRD §7):
    # 9 distinct public source pages, NOT the 7-class or 8-node figure.
    assert stats["pages"] == 9
    assert stats["uncategorised"] == 2
    assert stats["domains"] == 6
    assert stats["categories"] == 34
    assert stats["edges"]["declared"] > stats["edges"]["resolvable"]
    assert "full" in stats["scopes"]
    assert stats["scopes"]["full"]["nodes"] == 8
    assert stats["attributedTo"] == "did:nostr:jjohare"  # provenance chip source
    assert isinstance(stats["attributedTo"], str)
    # structured attribution mirrored in stats.json (PRD §1 / §9a.4a)
    assert stats["provenance"] == {
        "did": "did:nostr:jjohare",
        "label": "DreamLab AI",
        "corpusNature": "synthetic-ai-generated-human-directed",
    }
    # synthetic-corpus banner rendered from DATA, not hardcoded copy (PRD §1 / §7)
    assert stats["corpus"]["nature"] == "synthetic"
    assert isinstance(stats["corpus"]["description"], str)
    assert stats["corpus"]["description"]  # non-empty honest framing

    # ── full.bin round-trips; degree preserved; strings paired ──
    p = parse_ngg1((graph_dir / "full.bin").read_bytes())
    assert p["node_count"] == 8
    # every node's degree is the full-graph incident degree from the model
    model = build_graph_model(pages)
    deg_by_iri = {n.iri: n.degree for n in model.nodes}
    for i in range(p["node_count"]):
        assert p["nodes"][i]["degree"] == deg_by_iri[p["iris"][i]]
    # label/iri pairing sane
    for i in range(p["node_count"]):
        assert p["iris"][i].startswith("https://narrativegoldmine.com/")

    # ── domain tier: degree preserved even though relations may be capped ──
    ai_bin = parse_ngg1((graph_dir / "domain-artificial-intelligence.bin").read_bytes())
    # AI tier holds the AI-domain nodes only (roots + leaves + individual)
    assert ai_bin["node_count"] == 6
    # the cross-domain bridge (transformers→zk-rollup) is NOT in the AI tier
    # (zk-rollup is blockchain); it survives only in full.bin.
    ai_iris = set(ai_bin["iris"])
    assert not any("zk-rollup" in s for s in ai_iris)


def test_bake_positions_deterministic():
    model = build_graph_model(_synthetic_corpus())
    bake_positions(model.nodes)
    first = [(n.x, n.y) for n in model.nodes]
    # rebuild + rebake → identical (no RNG in the seed layout)
    model2 = build_graph_model(_synthetic_corpus())
    bake_positions(model2.nodes)
    second = [(n.x, n.y) for n in model2.nodes]
    assert first == second


def test_taxonomy_shape():
    assert len(DOMAIN_SLUGS) == 6
    assert len(CATEGORY_ORDER) == 34
    # category ids are contiguous per domain in DOMAIN_SLUGS order
    domain_of_cat = [dom for (_s, _l, dom) in CATEGORY_ORDER]
    assert domain_of_cat == sorted(domain_of_cat)
    assert CATEGORY_NONE == 0xFFFF
