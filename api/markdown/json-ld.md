- ### Definition
  - JSON-LD (JSON for Linking Data) is a W3C Recommendation that defines a lightweight serialisation syntax for expressing Linked Data using the JSON data format. It adds a @context document that maps JSON keys to RDF IRIs, enabling any JSON document to be treated as an RDF graph whilst remaining valid JSON parseable by standard libraries. JSON-LD is a primary serialisation format for Verifiable Credentials, Schema.org structured data markup, and activity streams (ActivityPub), bridging the gap between pragmatic web development and formal semantic web standards.

- ### Semantic Classification
  - owl-class:: json-ld:JSON-LD
  - owl-role:: Concept

- ### Relationships
  - implements [[Linked Data]]
  - implements [[RDF]]
  - enables [[Ontology]]
  - enables [[Semantic Web]]
  - relatedTo [[JSON Schema]]
  - relatedTo [[SPARQL]]

- ### Content
  - JSON-LD 1.1 (W3C Recommendation, July 2020) introduces several enhancements over the initial 1.0 specification, including scoped contexts, type-scoped contexts, property-based value indexing, and improved support for nested nodes. The processing model is defined by a set of algorithms (expansion, compaction, flattening, framing) that transform between different JSON-LD forms, all of which are RDF-equivalent. The specification uses the notion of a context to bind compact term definitions to full IRIs: `"name": {"@id": "http://schema.org/name"}` tells a processor that the `name` key in JSON corresponds to the Schema.org name property.
  - In the decentralised identity ecosystem, JSON-LD is used in two distinct roles: as the basis for Verifiable Credential (VC) contexts that define the semantic meaning of credential properties (ensuring that "issuer" in one system means the same as "issuer" in another), and within Linked Data Proofs (now Data Integrity) where a proof graph is appended to a JSON-LD document to provide a cryptographic signature. JSON-LD canonicalisation (URDNA2015) produces a deterministic N-Quads serialisation that is stable under reordering and suitable for hashing before signing.
  - Google, Bing, and other search engines consume JSON-LD embedded in HTML `<script type="application/ld+json">` tags to understand page content and generate rich snippets. Schema.org provides the vocabulary; JSON-LD provides the syntax. This widespread adoption makes JSON-LD arguably the most practically significant Linked Data technology for the open web. Tools including the JSON-LD Playground (json-ld.org/playground) and the pyLD / jsonld.js libraries facilitate development and testing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z