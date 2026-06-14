public:: true

# json-ld 1.1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ac56a97b2e4fb216d31cf97f8af50000e5e0727f47f25363f1e20e2ecc0e111e",
  "@type": "Page",
  "vc:slug": "json-ld-1-1",
  "title": "json-ld 1.1",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-ld-1-1",
  "@type": "Class",
  "label": "JSON-LD 1.1",
  "definition": "JSON-LD 1.1 is a W3C Recommendation (published July 2020) that extends JSON-LD 1.0 with scoped contexts, type-scoped and property-scoped contexts, propagation control, and the @protected keyword, enabling richer and safer mapping of JSON document terms to IRIs within RDF-based knowledge systems. It standardises compaction, expansion, flattening, and framing algorithms that allow any conformant document to be normalised to a canonical RDF graph without custom mapping code. JSON-LD 1.1 serves as the primary serialisation format for Verifiable Credentials, ActivityPub, the Solid ecosystem, and numerous Linked Data Platform implementations. The specification is maintained by the W3C JSON-LD Working Group and is defined across three companion documents covering syntax, processing algorithms, and the framing API.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linked-data",
      "label": "Linked Data"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:iri", "label": "IRI"},
      {"@id": "urn:ngm:class:json", "label": "JSON"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:semantic-interoperability", "label": "Semantic Interoperability"},
      {"@id": "urn:ngm:class:linked-data-platform", "label": "Linked Data Platform"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:decentralised-identifiers", "label": "Decentralised Identifiers"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:context-document", "label": "Context Document"},
      {"@id": "urn:ngm:class:rdf-dataset", "label": "RDF Dataset"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web Linked Data Standard"},
      {"@id": "urn:ngm:class:owl2", "label": "OWL2"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:world-wide-web-consortium", "label": "World Wide Web Consortium"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:turtle-rdf-serialisation", "label": "Turtle"},
      {"@id": "urn:ngm:class:rdf-xml", "label": "RDF/XML"},
      {"@id": "urn:ngm:class:n-triples", "label": "N-Triples"},
      {"@id": "urn:ngm:class:json-schema", "label": "JSON Schema"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"},
      {"@id": "urn:ngm:class:activitypub", "label": "ActivityPub"},
      {"@id": "urn:ngm:class:solid-protocol", "label": "Solid Protocol"},
      {"@id": "urn:ngm:class:schema-org", "label": "Schema.org"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:decentralised-identifiers", "label": "Decentralised Identifiers"},
      {"@id": "urn:ngm:class:knowledge-graph-embedding", "label": "Knowledge Graph Embedding"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:json-linked-data-1-1", "label": "JSON Linked Data 1.1"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - JSON-LD 1.1 is a [[W3C]] Recommendation published in July 2020 that extends [[JSON-LD]] 1.0 with scoped contexts, propagation control, and the `@protected` keyword, enabling richer and safer mapping of JSON document terms to [[IRI]] identifiers within [[RDF]]-based knowledge systems. By making ordinary [[JSON]] documents simultaneously machine-readable as [[Linked Data]], the specification eliminates bespoke mapping code between JSON APIs and [[RDF Triple Store]]s. It underpins modern decentralised-web standards including [[Verifiable Credentials]], [[ActivityPub]], and the [[Solid Protocol]], and is a foundational serialisation layer for large-scale [[Knowledge Graph]] construction.

- ### Overview
  - JSON-LD 1.1 defines a concrete syntax for expressing [[RDF]] graphs using the familiar JSON notation, making semantic data accessible to the vast majority of developers who already work with JSON.
  - The specification resolves the principal tension between JSON's tree structure and RDF's graph structure through a set of standardised algorithms — expansion, compaction, flattening, and framing — that allow any conformant document to be losslessly converted between forms.
  - Compared with RDF serialisations such as [[Turtle]], [[RDF/XML]], and [[N-Triples]], JSON-LD is unique in that a valid JSON-LD document is simultaneously valid JSON, requiring no new parser infrastructure.
  - The [[World Wide Web Consortium]] (W3C) published JSON-LD 1.1 as a full Recommendation on 16 July 2020, superseding JSON-LD 1.0 (2014). The specification comprises three normative documents:
    - **JSON-LD 1.1** — the core syntax
    - **JSON-LD 1.1 Processing Algorithms and API** — the algorithmic layer
    - **JSON-LD 1.1 Framing** — the framing algorithm and API
  - Broad adoption in the [[Schema.org]] ecosystem (used by Google, Bing, and Yandex for structured data), the [[Verifiable Credentials Data Model]], and [[ActivityPub]] (the protocol underlying Mastodon and the Fediverse) demonstrates its maturity as an interoperability standard.

- ### Key Components
  - **Context (`@context`)** — maps short human-readable terms to globally unique [[IRI]]s; can be an inline object, a URL reference to a remote context document, or an array combining both.
  - **Scoped Contexts** — a major 1.1 addition; contexts can be scoped to a specific `@type` (type-scoped) or to the values of a specific property (property-scoped), avoiding pollution of the global term map.
  - **`@protected` keyword** — prevents terms defined in a context from being redefined by embedded or remote contexts, improving security and predictability in multi-party documents such as [[Verifiable Credentials]].
  - **Propagation control** — the `@propagate: false` flag on a scoped context limits its effect to the node in which it is declared, preventing unintended bleeding into sibling or parent nodes.
  - **`@version` declaration** — asserting `"@version": 1.1` in a context signals to processors that 1.1 rules must be applied, enabling safe co-existence with 1.0 documents.
  - **Compaction algorithm** — takes an expanded [[RDF]] representation and applies a context to produce a compact, human-readable JSON document with short term names.
  - **Expansion algorithm** — the inverse; takes a compact document and a context and produces a fully expanded form using absolute IRIs, enabling canonical comparison across documents.
  - **Framing algorithm** — reshapes a flat, expanded [[RDF Dataset]] into a user-defined tree structure, critical for constructing application-specific JSON views of [[Knowledge Graph]] subgraphs.
  - **Flattening algorithm** — produces a canonical flat list of nodes from any nested JSON-LD document, simplifying graph traversal.
  - **Named graphs** — the `@graph` keyword allows multiple named [[RDF]] graphs to coexist in a single document, enabling dataset-level provenance.
  - **`@included`** — a 1.1 addition that allows related nodes to be included inline without being part of the primary node's properties.
  - **`@nest`** — allows syntactic nesting in the JSON without creating corresponding graph structure, useful for grouping UI-related keys away from semantic properties.

- ### Algorithms & Processing
  - The JSON-LD 1.1 Processing Algorithms and API specification defines a JavaScript/WebIDL API (`JsonLdProcessor`) with asynchronous methods: `compact()`, `expand()`, `flatten()`, `frame()`, and `toRdf()` / `fromRdf()`.
  - Processing is intentionally deterministic: given the same input document and options, any conformant processor must produce identical output, enabling interoperability across implementations in different programming languages.
  - Popular conformant implementations include `jsonld.js` (JavaScript/Node.js), `pyld` (Python), `titanium-json-ld` (Java), and `ruby-json-ld` (Ruby).
  - The `toRdf()` method serialises a JSON-LD 1.1 document to an [[RDF Dataset]], typically as [[N-Quads]], suitable for ingestion into any [[SPARQL]] endpoint or [[RDF Triple Store]].
  - The `fromRdf()` method serialises an [[RDF Dataset]] back to expanded JSON-LD, completing the round-trip.

- ### Applications and Use Cases
  - **Verifiable Credentials** — the [[Verifiable Credentials Data Model]] (W3C Recommendation) mandates JSON-LD 1.1 as one of its two serialisation formats, with contexts defining credential types and proof mechanisms for [[Decentralised Identifiers]] (DIDs).
  - **ActivityPub / Fediverse** — [[ActivityPub]] uses [[Activity Streams 2.0]], itself defined as a JSON-LD 1.1 vocabulary; every Mastodon post, Like, and Follow is a JSON-LD document.
  - **Solid ecosystem** — the [[Solid Protocol]] uses JSON-LD 1.1 for [[Linked Data Platform]] resources, enabling pod-based personal data stores with structured semantics.
  - **Schema.org structured data** — [[Schema.org]] vocabularies are published as JSON-LD contexts; major search engines index JSON-LD `<script>` tags in HTML pages to populate [[Knowledge Graph]]s used in rich snippets.
  - **Knowledge graph pipelines** — JSON-LD sits between REST/GraphQL JSON APIs and backend [[RDF Triple Store]]s, removing the need for custom ETL mapping code; libraries like `rdflib` and `Apache Jena` read JSON-LD natively.
  - **Decentralised Identity** — [[Decentralised Identifiers]] (DID) documents are serialised in JSON-LD 1.1, with scoped contexts enabling type-specific property resolution for each DID method.
  - **Ontology authoring** — JSON-LD 1.1 with `@type: owl:Class` and related constructs can express lightweight [[OWL2]] assertions, as used in this knowledge graph pipeline.
  - **Healthcare data interoperability** — [[FHIR]] (HL7 Fast Healthcare Interoperability Resources) supports a JSON-LD representation aligned with its RDF profile.
  - **Cultural heritage / digital humanities** — [[CIDOC-CRM]], the standard conceptual reference model for cultural heritage documentation, is distributed with a JSON-LD context for museum data exchange.

- ### Relationships
  - requires:: [[RDF]]
  - requires:: [[IRI]]
  - requires:: [[JSON]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Semantic Interoperability]]
  - enables:: [[Linked Data Platform]]
  - enables:: [[Verifiable Credentials]]
  - enables:: [[Decentralised Identifiers]]
  - uses:: [[JSON-LD]]
  - uses:: [[Context Document]]
  - uses:: [[RDF Dataset]]
  - implements:: [[Semantic Web]]
  - implements:: [[OWL2]]
  - standardizedBy:: [[World Wide Web Consortium]]
  - contrastsWith:: [[Turtle]]
  - contrastsWith:: [[RDF/XML]]
  - contrastsWith:: [[N-Triples]]
  - contrastsWith:: [[JSON Schema]]
  - relatedTo:: [[SPARQL]]
  - relatedTo:: [[ActivityPub]]
  - relatedTo:: [[Solid Protocol]]
  - relatedTo:: [[Schema.org]]
  - bridges-to:: [[Verifiable Credentials]]
  - bridges-to:: [[Decentralised Identifiers]]
  - bridges-to:: [[Knowledge Graph Embedding]]

- ### Standards & Context
  - **W3C JSON-LD Working Group** — the standards body that produced all three normative JSON-LD 1.1 documents; the group formally closed after publication, with errata maintained by the [[World Wide Web Consortium]].
  - **W3C Recommendation date** — 16 July 2020 for all three companion specifications.
  - **Predecessor** — JSON-LD 1.0 (W3C Recommendation, 16 January 2014), which lacks scoped contexts, `@protected`, and propagation control.
  - **Companion standards**:
    - [[RDF]] 1.1 Concepts and Abstract Syntax (W3C Recommendation, 2014)
    - [[Turtle]] — Terse RDF Triple Language
    - [[N-Triples]] — line-based RDF serialisation (also used as the N-Quads dataset serialisation)
    - [[SPARQL]] 1.1 Query Language — the standard query language for [[RDF Triple Store]]s
  - **Relationship to [[OWL2]]** — JSON-LD 1.1 documents can assert OWL2 axioms when combined with the `owl:` prefix in context; this enables lightweight ontology authoring without specialised tooling.
  - **Conformance levels** — the specification defines JSON-LD document conformance and JSON-LD processor conformance separately; a document may be conformant even if a processor does not implement optional features (e.g. remote context loading with custom document loaders).
  - **Security considerations** — remote context loading introduces a server-side request forgery (SSRF) risk; the `@protected` keyword and context caching are standard mitigations. Credential issuers in the [[Verifiable Credentials]] ecosystem are advised to host contexts at stable, cacheable URLs.
  - **Test suite** — the W3C maintains a public conformance test suite at `https://w3c.github.io/json-ld-api/tests/` covering all algorithms and edge cases.
  - **IANA media type** — `application/ld+json` (registered with IANA); the `profile` link relation parameter can specify the processing mode.

- ### Comparison with Related Formats
  - [[Turtle]] is terser for hand-authored RDF but not valid JSON, requiring a dedicated parser.
  - [[RDF/XML]] is verbose and error-prone; JSON-LD's readability advantage is substantial.
  - [[JSON Schema]] validates JSON structure but carries no semantic meaning; JSON-LD 1.1 and [[JSON Schema]] are complementary (a JSON-LD document can simultaneously be valid against a JSON Schema).
  - [[YAML-LD]] is an emerging W3C community report that maps YAML syntax onto JSON-LD semantics, extending the approach to YAML documents.
  - [[HDT]] (Header–Dictionary–Triples) provides a compressed binary RDF format for large graphs where JSON-LD verbosity is prohibitive.

- ### Provenance
  - sources:: W3C JSON-LD 1.1 Recommendation (July 2020); JSON-LD 1.1 Processing Algorithms and API; JSON-LD 1.1 Framing; Verifiable Credentials Data Model W3C Recommendation; ActivityPub W3C Recommendation; Solid Protocol CG specification.
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
