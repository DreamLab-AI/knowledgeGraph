#!/usr/bin/env python3
"""Convert parsed JSON-LD corpus to OWL2 DL Turtle format.

Produces valid RDF Turtle loadable in Protégé, Jena, WebVOWL, and ROBOT.
Supports v2 schema (Class/Individual, nested relations, urn:ngm: IRIs).
"""

import re
import sys
from pathlib import Path

try:
    from rdflib import Graph, Namespace, Literal, URIRef, BNode
    from rdflib.namespace import RDF, RDFS, OWL, XSD, DCTERMS, PROV, SKOS
except ImportError:
    print("ERROR: rdflib required. Install with: pip install rdflib>=7.0.0", file=sys.stderr)
    sys.exit(1)

from .jsonld_parser import PageData, OntologyEntity, parse_corpus

VC = Namespace("https://narrativegoldmine.com/ns/v1#")
NGM = Namespace("https://narrativegoldmine.com/class/")
NGMI = Namespace("https://narrativegoldmine.com/individual/")

# Domain root slugs (6 top-level domains)
DOMAIN_ROOT_SLUGS = frozenset({
    "artificial-intelligence", "spatial-computing", "blockchain",
    "infrastructure", "distributed-collaboration", "robotics",
})

# Intermediate taxonomy category slugs (34 categories)
CATEGORY_SLUGS = frozenset({
    "ai-technique", "ai-model-architecture", "ai-application",
    "ai-governance-and-ethics", "cat-ai-infrastructure", "ai-research-area",
    "sc-display-and-rendering", "sc-interaction", "sc-content-and-assets",
    "sc-platform-and-environment", "sc-standards-and-interop", "sc-governance-and-safety",
    "bc-protocol-and-consensus", "bc-cryptographic-primitive", "bc-token-and-asset",
    "bc-defi-and-economics", "bc-network-component", "bc-governance-and-regulation",
    "infra-computing-and-cloud", "infra-network-and-comms", "infra-security-and-identity",
    "infra-data-management", "infra-legal-and-regulatory", "infra-software-engineering",
    "robo-perception", "robo-actuation-and-control", "robo-robot-type",
    "robo-navigation-and-planning", "robo-safety-and-standards", "robo-human-robot-interaction",
    "dc-communication", "dc-workspace-tools", "dc-telepresence", "dc-protocol-and-infra",
})

# Union: all slugs that are taxonomic (category or domain root)
TAXONOMIC_SLUGS = DOMAIN_ROOT_SLUGS | CATEGORY_SLUGS


def _iri_to_uriref(iri: str) -> URIRef:
    if iri == "owl:Thing":
        return OWL.Thing
    if iri.startswith("urn:ngm:class:"):
        return URIRef(iri.replace("urn:ngm:class:", "https://narrativegoldmine.com/class/"))
    if iri.startswith("urn:ngm:individual:"):
        return URIRef(iri.replace("urn:ngm:individual:", "https://narrativegoldmine.com/individual/"))
    if iri.startswith("urn:visionflow:owl:class:"):
        return URIRef(iri.replace("urn:visionflow:owl:class:", "https://narrativegoldmine.com/class/"))
    if iri.startswith("urn:visionflow:linked:"):
        return URIRef(iri.replace("urn:visionflow:linked:", "https://narrativegoldmine.com/linked/"))
    if iri.startswith("urn:visionflow:page:"):
        return URIRef(iri.replace("urn:visionflow:page:", "https://narrativegoldmine.com/page/"))
    if iri.startswith("http"):
        return URIRef(iri)
    return URIRef(f"https://narrativegoldmine.com/class/{iri}")


def _slug_from_uri(uri) -> str:
    s = str(uri)
    return s.rsplit("/", 1)[-1] if "/" in s else s


_ACRONYMS = {
    "ai": "AI", "api": "API", "rag": "RAG", "bip": "BIP", "erc": "ERC",
    "w3c": "W3C", "nft": "NFT", "defi": "DeFi", "llm": "LLM", "av1": "AV1",
    "brdf": "BRDF", "iot": "IoT", "crdt": "CRDT", "dao": "DAO", "xr": "XR",
    "ar": "AR", "vr": "VR", "cbdc": "CBDC", "p2p": "P2P", "sdk": "SDK",
    "url": "URL", "did": "DID", "zk": "ZK", "ml": "ML", "nlp": "NLP",
}


def _label_from_slug(slug: str) -> str:
    parts = slug.split("-")
    return " ".join(_ACRONYMS.get(p, p.capitalize()) for p in parts)


def build_graph(pages: list[PageData], public_only: bool = True,
                emit_domain_disjointness: bool = True) -> Graph:
    g = Graph()
    g.bind("owl", OWL)
    g.bind("rdfs", RDFS)
    g.bind("xsd", XSD)
    g.bind("dc", DCTERMS)
    g.bind("prov", PROV)
    g.bind("vc", VC)
    g.bind("ngm", NGM)
    g.bind("ngmi", NGMI)
    g.bind("skos", SKOS)

    ontology_uri = URIRef("https://narrativegoldmine.com/ontology")
    g.add((ontology_uri, RDF.type, OWL.Ontology))
    g.add((ontology_uri, RDFS.label, Literal("NarrativeGoldmine Ontology", lang="en")))
    g.add((ontology_uri, OWL.versionInfo, Literal("3.1.0")))
    g.add((ontology_uri, DCTERMS.creator, Literal("Dr John O'Hare")))

    # Declarations for imported external vocabulary so the ontology is
    # self-contained and OWL 2 EL profile-conformant (ROBOT/Whelk require
    # every used term to be declared). skos:broader and dcterms:creator are
    # treated as annotation properties; skos:Concept anchors the single-ref
    # tail stubs as a declared class.
    g.add((SKOS.Concept, RDF.type, OWL.Class))
    g.add((SKOS.Concept, RDFS.label, Literal("Concept", lang="en")))
    g.add((SKOS.broader, RDF.type, OWL.AnnotationProperty))
    g.add((DCTERMS.creator, RDF.type, OWL.AnnotationProperty))

    # ------------------------------------------------------------------ #
    # OWL Object Property declarations — domain, range, inverseOf,       #
    # and property characteristics (Transitive, Symmetric).              #
    # owl:Thing is used as domain/range throughout so the properties     #
    # apply uniformly across Class and Individual entities.              #
    # ------------------------------------------------------------------ #

    # hasPart / isPartOf
    # (owl:inverseOf omitted — inverse object properties are not in OWL 2 EL)
    g.add((VC.hasPart, RDF.type, OWL.ObjectProperty))
    g.add((VC.hasPart, RDFS.label, Literal("hasPart", lang="en")))
    g.add((VC.hasPart, RDFS.domain, OWL.Thing))
    g.add((VC.hasPart, RDFS.range, OWL.Thing))

    g.add((VC.isPartOf, RDF.type, OWL.ObjectProperty))
    g.add((VC.isPartOf, RDFS.label, Literal("isPartOf", lang="en")))
    g.add((VC.isPartOf, RDFS.domain, OWL.Thing))
    g.add((VC.isPartOf, RDFS.range, OWL.Thing))

    # requires  (Transitive: A requires B, B requires C ⇒ A requires C)
    g.add((VC.requires, RDF.type, OWL.ObjectProperty))
    g.add((VC.requires, RDF.type, OWL.TransitiveProperty))
    g.add((VC.requires, RDFS.label, Literal("requires", lang="en")))
    g.add((VC.requires, RDFS.domain, OWL.Thing))
    g.add((VC.requires, RDFS.range, OWL.Thing))

    # enables / enabledBy
    # (owl:inverseOf omitted — inverse object properties are not in OWL 2 EL)
    g.add((VC.enables, RDF.type, OWL.ObjectProperty))
    g.add((VC.enables, RDFS.label, Literal("enables", lang="en")))
    g.add((VC.enables, RDFS.domain, OWL.Thing))
    g.add((VC.enables, RDFS.range, OWL.Thing))

    g.add((VC.enabledBy, RDF.type, OWL.ObjectProperty))
    g.add((VC.enabledBy, RDFS.label, Literal("enabledBy", lang="en")))
    g.add((VC.enabledBy, RDFS.domain, OWL.Thing))
    g.add((VC.enabledBy, RDFS.range, OWL.Thing))

    # dependsOn  (Transitive: A dependsOn B, B dependsOn C ⇒ A dependsOn C)
    g.add((VC.dependsOn, RDF.type, OWL.ObjectProperty))
    g.add((VC.dependsOn, RDF.type, OWL.TransitiveProperty))
    g.add((VC.dependsOn, RDFS.label, Literal("dependsOn", lang="en")))
    g.add((VC.dependsOn, RDFS.domain, OWL.Thing))
    g.add((VC.dependsOn, RDFS.range, OWL.Thing))

    # implements  (an implementation realises a specification)
    g.add((VC.implements, RDF.type, OWL.ObjectProperty))
    g.add((VC.implements, RDFS.label, Literal("implements", lang="en")))
    g.add((VC.implements, RDFS.domain, OWL.Thing))
    g.add((VC.implements, RDFS.range, OWL.Thing))

    # uses
    g.add((VC.uses, RDF.type, OWL.ObjectProperty))
    g.add((VC.uses, RDFS.label, Literal("uses", lang="en")))
    g.add((VC.uses, RDFS.domain, OWL.Thing))
    g.add((VC.uses, RDFS.range, OWL.Thing))

    # supports
    g.add((VC.supports, RDF.type, OWL.ObjectProperty))
    g.add((VC.supports, RDFS.label, Literal("supports", lang="en")))
    g.add((VC.supports, RDFS.domain, OWL.Thing))
    g.add((VC.supports, RDFS.range, OWL.Thing))

    # standardizedBy  (range ideally StandardsOrganization; owl:Thing for flexibility)
    g.add((VC.standardizedBy, RDF.type, OWL.ObjectProperty))
    g.add((VC.standardizedBy, RDFS.label, Literal("standardizedBy", lang="en")))
    g.add((VC.standardizedBy, RDFS.domain, OWL.Thing))
    g.add((VC.standardizedBy, RDFS.range, OWL.Thing))

    # contrastsWith / bridgesTo / relatedTo
    # (owl:SymmetricProperty omitted — symmetric object properties require
    #  inverses, which are not in OWL 2 EL; modelled as plain associative links)
    g.add((VC.contrastsWith, RDF.type, OWL.ObjectProperty))
    g.add((VC.contrastsWith, RDFS.label, Literal("contrastsWith", lang="en")))
    g.add((VC.contrastsWith, RDFS.domain, OWL.Thing))
    g.add((VC.contrastsWith, RDFS.range, OWL.Thing))

    g.add((VC.bridgesTo, RDF.type, OWL.ObjectProperty))
    g.add((VC.bridgesTo, RDFS.label, Literal("bridgesTo", lang="en")))
    g.add((VC.bridgesTo, RDFS.domain, OWL.Thing))
    g.add((VC.bridgesTo, RDFS.range, OWL.Thing))

    g.add((VC.relatedTo, RDF.type, OWL.ObjectProperty))
    g.add((VC.relatedTo, RDFS.label, Literal("relatedTo", lang="en")))
    g.add((VC.relatedTo, RDFS.domain, OWL.Thing))
    g.add((VC.relatedTo, RDFS.range, OWL.Thing))

    # requires is a sub-property of dependsOn (both transitive)
    g.add((VC.requires, RDFS.subPropertyOf, VC.dependsOn))

    # uses, supports, implements share a common "utilises" super-property
    g.add((VC.utilises, RDF.type, OWL.ObjectProperty))
    g.add((VC.utilises, RDFS.label, Literal("utilises", lang="en")))
    g.add((VC.utilises, RDFS.domain, OWL.Thing))
    g.add((VC.utilises, RDFS.range, OWL.Thing))
    g.add((VC.uses, RDFS.subPropertyOf, VC.utilises))
    g.add((VC.supports, RDFS.subPropertyOf, VC.utilises))
    g.add((VC.implements, RDFS.subPropertyOf, VC.utilises))

    g.add((VC.sourceDomain, RDF.type, OWL.AnnotationProperty))
    g.add((VC.qualityScore, RDF.type, OWL.AnnotationProperty))
    g.add((VC.slug, RDF.type, OWL.AnnotationProperty))

    # Maturity levels as named individuals (prevents string-matching bugs)
    g.add((VC.hasMaturity, RDF.type, OWL.ObjectProperty))
    g.add((VC.hasMaturity, RDFS.label, Literal("hasMaturity", lang="en")))
    maturity_class = URIRef("https://narrativegoldmine.com/class/MaturityLevel")
    g.add((maturity_class, RDF.type, OWL.Class))
    g.add((maturity_class, RDFS.label, Literal("Maturity Level", lang="en")))
    g.add((VC.hasMaturity, RDFS.range, maturity_class))
    maturity_levels = {
        "established": "Established",
        "emerging": "Emerging",
        "draft": "Draft",
        "stub": "Stub",
        "deprecated": "Deprecated",
    }
    for slug, label in maturity_levels.items():
        mat_uri = URIRef(f"https://narrativegoldmine.com/individual/maturity-{slug}")
        g.add((mat_uri, RDF.type, OWL.NamedIndividual))
        g.add((mat_uri, RDF.type, maturity_class))
        g.add((mat_uri, RDFS.label, Literal(label, lang="en")))

    for page in pages:
        if public_only and not page.is_public:
            continue

        oc = page.ontology_class
        if oc is None:
            continue

        entity_uri = _iri_to_uriref(oc.iri)
        entity_slug = _slug_from_uri(entity_uri)

        if oc.entity_type == "Individual":
            g.add((entity_uri, RDF.type, OWL.NamedIndividual))
            for cls_ref in oc.instance_of:
                cls_uri = _iri_to_uriref(cls_ref.iri)
                g.add((entity_uri, RDF.type, cls_uri))
            for cls_ref in oc.sub_class_of:
                cls_uri = _iri_to_uriref(cls_ref.iri)
                g.add((entity_uri, RDF.type, cls_uri))
        else:
            g.add((entity_uri, RDF.type, OWL.Class))
            # Intermediate categories and domain roots are also SKOS Concepts
            if entity_slug in TAXONOMIC_SLUGS:
                g.add((entity_uri, RDF.type, SKOS.Concept))
            for parent in oc.sub_class_of:
                parent_uri = _iri_to_uriref(parent.iri)
                parent_slug = _slug_from_uri(parent_uri)
                if parent_slug in TAXONOMIC_SLUGS:
                    g.add((entity_uri, SKOS.broader, parent_uri))
                    g.add((entity_uri, RDFS.subClassOf, parent_uri))
                else:
                    g.add((entity_uri, RDFS.subClassOf, parent_uri))

        g.add((entity_uri, RDFS.label, Literal(oc.label, lang="en")))

        if oc.definition:
            g.add((entity_uri, RDFS.comment, Literal(oc.definition, lang="en")))

        g.add((entity_uri, VC.sourceDomain, Literal(oc.domain)))
        g.add((entity_uri, VC.qualityScore, Literal(oc.quality_score, datatype=XSD.float)))
        mat_slug = oc.maturity.lower().strip() if oc.maturity else "draft"
        if mat_slug not in ("established", "emerging", "draft", "stub", "deprecated"):
            mat_slug = "draft"
        g.add((entity_uri, VC.hasMaturity,
               URIRef(f"https://narrativegoldmine.com/individual/maturity-{mat_slug}")))
        g.add((entity_uri, VC.slug, Literal(page.slug)))

        rel_map = {
            "has_part": VC.hasPart,
            "requires": VC.requires,
            "enables": VC.enables,
            "depends_on": VC.dependsOn,
            "implements": VC.implements,
            "contrasts_with": VC.contrastsWith,
            "bridges_to": VC.bridgesTo,
            "uses": VC.uses,
            "related_to": VC.relatedTo,
            "supports": VC.supports,
            "standardized_by": VC.standardizedBy,
            "part_of": VC.isPartOf,
        }
        for attr_name, prop_uri in rel_map.items():
            refs = getattr(oc.relations, attr_name, [])
            for ref in refs:
                target_uri = _iri_to_uriref(ref.iri)
                g.add((entity_uri, prop_uri, target_uri))

    # ------------------------------------------------------------------ #
    # OWL Existential Restrictions for high-confidence structural edges.  #
    # Whelk (EL++) uses these for automatic subsumption.                  #
    # Pattern: C subClassOf (P some D) means "every C must have at       #
    # least one P-relationship to some D".                                #
    # We emit these only for requires/hasPart edges where BOTH endpoints #
    # are declared classes (no dangling references).                      #
    # ------------------------------------------------------------------ #
    declared_uris = set()
    for page in pages:
        if page.ontology_class and (not public_only or page.is_public):
            declared_uris.add(_iri_to_uriref(page.ontology_class.iri))

    restriction_props = {
        "requires": VC.requires,
        "has_part": VC.hasPart,
    }
    for page in pages:
        if public_only and not page.is_public:
            continue
        oc = page.ontology_class
        if oc is None or oc.entity_type == "Individual":
            continue
        entity_uri = _iri_to_uriref(oc.iri)
        for attr_name, prop_uri in restriction_props.items():
            refs = getattr(oc.relations, attr_name, [])
            for ref in refs:
                target_uri = _iri_to_uriref(ref.iri)
                if target_uri in declared_uris:
                    restriction = BNode()
                    g.add((restriction, RDF.type, OWL.Restriction))
                    g.add((restriction, OWL.onProperty, prop_uri))
                    g.add((restriction, OWL.someValuesFrom, target_uri))
                    g.add((entity_uri, RDFS.subClassOf, restriction))

    # ------------------------------------------------------------------ #
    # Single-ref tail policy: every NGM class IRI that is referenced by   #
    # an object property (relatedTo, uses, …) but never declared as a     #
    # page becomes a skos:Concept stub rather than a dangling owl:Class.  #
    # This keeps the OWL hierarchy well-founded for EL reasoning while     #
    # preserving the associative links into the long tail of concepts.    #
    # subClassOf targets are excluded — those must be real classes and    #
    # have already been remapped onto declared parents at source.         #
    # ------------------------------------------------------------------ #
    object_props = {
        VC.hasPart, VC.isPartOf, VC.requires, VC.enables, VC.enabledBy,
        VC.dependsOn, VC.implements, VC.contrastsWith, VC.bridgesTo,
        VC.uses, VC.relatedTo, VC.supports, VC.standardizedBy,
    }
    ngm_prefix = str(NGM)
    tail_targets: set[URIRef] = set()
    for prop in object_props:
        for target in g.objects(None, prop):
            if (isinstance(target, URIRef)
                    and str(target).startswith(ngm_prefix)
                    and target not in declared_uris):
                tail_targets.add(target)
    for target in tail_targets:
        g.add((target, RDF.type, SKOS.Concept))
        g.add((target, RDFS.label,
               Literal(_label_from_slug(_slug_from_uri(target)), lang="en")))

    # ------------------------------------------------------------------ #
    # Domain-root disjointness: the 6 top-level domains as pairwise      #
    # disjoint (owl:AllDisjointClasses).                                  #
    #                                                                     #
    # ENABLED BY DEFAULT (emit_domain_disjointness=True).                 #
    # History: this axiom once made 5,881/5,951 classes (98.8%)           #
    # unsatisfiable because many classes sat under >1 disjoint domain via #
    # subClassOf and EL's `∃R.⊥ ≡ ⊥` propagated the clash across the      #
    # 8,842 existential restrictions. The source taxonomy was since       #
    # single-domain-normalised (903 clashes from 370 pages remediated;    #
    # cross-domain links moved to vc:bridgesTo; 9 subClassOf cycles       #
    # broken) so ELK now classifies with 0 unsatisfiable classes. Pass    #
    # emit_domain_disjointness=False for a lenient overlap-tolerant build.#
    # See analysis/disjointness-seed-classes.md.                          #
    # ------------------------------------------------------------------ #
    if emit_domain_disjointness:
        domain_root_uris = [_iri_to_uriref(f"urn:ngm:class:{s}") for s in sorted(DOMAIN_ROOT_SLUGS)]
        disjoint_bnode = BNode()
        g.add((disjoint_bnode, RDF.type, OWL.AllDisjointClasses))
        members = BNode()
        g.add((disjoint_bnode, OWL.members, members))
        for i, uri in enumerate(domain_root_uris):
            g.add((members, RDF.first, uri))
            if i < len(domain_root_uris) - 1:
                next_node = BNode()
                g.add((members, RDF.rest, next_node))
                members = next_node
            else:
                g.add((members, RDF.rest, RDF.nil))

    return g


def main():
    pages_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("mainKnowledgeGraph/pages")
    output = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("/tmp/ontology.ttl")

    pages = parse_corpus(pages_dir)
    g = build_graph(pages, public_only=True)

    output.parent.mkdir(parents=True, exist_ok=True)
    g.serialize(destination=str(output), format="turtle")

    print(f"Turtle: {len(g)} triples → {output}")


if __name__ == "__main__":
    main()
