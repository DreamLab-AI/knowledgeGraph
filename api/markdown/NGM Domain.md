iri:: http://narrativegoldmine.com/infrastructure#NGMDomain
uri:: urn:visionclaw:concept:infrastructure:ngm-domain
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:ngm-domain
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: NGM Domain
content-hash:: sha256-12-5e9c7a2b4d1f
status:: complete
maturity:: established
quality-score:: 0.65
authority-score:: 0.75
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - The NGM Domain is the cross-domain root ontology namespace of the Narrative Gold Mine knowledge graph, encompassing foundational concepts — identity primitives, data governance constructs, semantic web patterns, and integration infrastructure — that do not belong exclusively to any single specialised domain (ai, bc, mv, rb, tc) but are required as shared dependencies by all of them. It corresponds to the `http://narrativegoldmine.com/ontology#` IRI namespace and acts as the backbone against which domain-specific ontologies align their upper-level classes and properties.

- ### Semantic Classification
  - owl-class:: infrastructure:NGMDomain
  - owl-role:: Concept
  - owl-inferred:: infrastructure:OntologyRoot
  - belongs-to-domain:: [[NGM Domain]]
  - implemented-in-layer:: [[OntologyLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Ontology Namespace]], [[Knowledge Graph Domain]]
  - has-part:: [[URI Canonicaliser]], [[Solid Pod]], [[VisionClaw Agentic Container]], [[WebAssembly]], [[DID Nostr Identity]], [[Verifiable Credential Surface]]
  - is-part-of:: [[Narrative Gold Mine Ontology]]
  - requires:: [[RDF Data Model]], [[OWL 2 Web Ontology Language]], [[JSON-LD Context]]
  - enables:: [[Cross-Domain Concept Linking]], [[Semantic Interoperability]], [[Federated Knowledge Graph]]
  - implements:: [[W3C RDF Specification]], [[W3C OWL 2 Specification]], [[W3C JSON-LD 1.1]]
  - bridges-to:: [[AI Domain]] (domain: ai), [[Blockchain Domain]] (domain: bc), [[Metaverse Domain]] (domain: mv), [[Robotics Domain]] (domain: rb), [[Telecollaboration Domain]] (domain: tc)
  - depends-on:: [[Logseq Graph Database]], [[VisionClaw JSON-LD Context]]

- ### Content

  The Narrative Gold Mine (NGM) ontology was conceived as a structured knowledge graph capturing the interdependencies between five rapidly evolving technology domains: artificial intelligence, blockchain and distributed ledgers, metaverse and extended reality, robotics, and telecollaboration. As the ontology matured, it became clear that a substantial class of concepts — identity systems, data sovereignty patterns, semantic linking primitives, and cross-cutting integration infrastructure — belonged to none of these five domains exclusively. The NGM Domain namespace was established to house these foundational concepts, preventing them from being arbitrarily assigned to whichever domain first needed them.

  #### Key Characteristics

  - **Cross-Domain Root**: Every domain-specific ontology imports the NGM namespace as its upper-level alignment target, ensuring that owl:Class hierarchies, object properties, and annotation properties are coherent across domain boundaries.
  - **Infrastructure Concepts**: Core infrastructure that all agent-based systems require — [[URI Canonicaliser]], [[Solid Pod]], [[WebAssembly]], [[DID Nostr Identity]] — resides in the NGM namespace regardless of which domain primarily uses it.
  - **IRI Namespace**: `http://narrativegoldmine.com/ontology#` is the canonical IRI prefix. URN-style identifiers use `urn:visionclaw:concept:infrastructure:` as the slug namespace.
  - **JSON-LD Alignment**: The [[VisionClaw JSON-LD Context]] maps NGM property names to their full IRI equivalents, enabling Logseq page properties to round-trip to valid Linked Data without additional transformation.
  - **Governance**: Changes to the NGM namespace require review against all five domain ontologies to prevent breaking cross-domain concept links, making it the most conservatively versioned part of the knowledge graph.

  #### How It Works

  Within the [[Logseq Graph Database]], NGM Domain concepts appear as markdown pages with `domain:: infrastructure` in their properties. The [[URI Canonicaliser]] uses the preferred-term and domain to mint stable `urn:visionclaw:concept:infrastructure:<slug>` identifiers. These identifiers appear in the `bridges-to::` relationship fields of domain-specific concepts, creating a typed cross-domain link graph. An export pipeline reads these structured properties, resolves WikiLinks to URIs, and generates a valid OWL 2 ontology serialised as JSON-LD, Turtle, or RDF/XML for consumption by reasoners such as HermiT or Pellet.

  The NGM namespace also hosts the metaconcepts that describe the ontology itself: the five domain classes (ai:AIDomain, bc:BlockchainDomain, infrastructure:MetaverseDomain, infrastructure:RoboticsDomain, infrastructure:TelecollaborationDomain) are declared as subclasses of `infrastructure:Domain`, and the relationship types used across the graph (bridges-to, has-part, requires, enables) are declared as `owl:ObjectProperty` instances anchored in the NGM namespace.

  #### Current Landscape

  As of 2026, the NGM knowledge graph contains over 800 pages across the six namespaces (five domain plus NGM root). The QE gap analysis identified the NGM Domain page itself as missing — a foundational self-description that allows other systems (crawlers, reasoners, API clients) to discover the graph's root namespace. Recent additions to the NGM namespace include [[WebAssembly]] (agent execution substrate), [[Solid Pod]] (personal data sovereignty), and [[Nostr Protocol]] (decentralised identity relay), all of which are cross-domain dependencies. The [[VisionClaw Agentic Container]] project consumes NGM concepts at runtime via the [[Model Context Protocol]] tool surface, making the accuracy and completeness of NGM namespace definitions operationally significant.

  #### Cross-Domain Applications

  The NGM Domain acts as the semantic glue across all five specialised domains. A concept such as [[URI Canonicaliser]] is referenced by blockchain credential systems (domain: bc), AI agent identity (domain: ai), and metaverse object addressing (domain: mv) simultaneously. Without the NGM root namespace, these cross-domain references would be ambiguous. The [[Solid Pod]] concept, for example, is used in AI personalisation (agent preference stores), blockchain provenance (linked data receipts), and telecollaboration (shared workspaces), making its placement in the NGM namespace rather than any single domain the correct ontological choice.

  #### Standards and References

  - W3C. (2012). *OWL 2 Web Ontology Language Primer*. https://www.w3.org/TR/owl2-primer/
  - W3C. (2020). *JSON-LD 1.1*. https://www.w3.org/TR/json-ld11/
  - W3C. (2014). *RDF 1.1 Concepts and Abstract Syntax*. https://www.w3.org/TR/rdf11-concepts/
  - Noy, N. F., & McGuinness, D. L. (2001). *Ontology Development 101*. Stanford KSL Technical Report.
  - DreamLab AI. (2026). *VisionClaw Ontology Page Format v1 (ADR-013)*. Internal specification.

- ### Provenance
  - sources:: [[W3C OWL 2 Specification]], [[W3C JSON-LD 1.1]], [[VisionClaw ADR-013]], [[Narrative Gold Mine Ontology]]
  - migration-date:: 2026-04-26T00:00:00Z
