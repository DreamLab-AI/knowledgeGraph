- ### Definition
  - JSON-LD 1.1 is a W3C Recommendation that extends JSON-LD 1.0 with features including scoped contexts, type-scoped contexts, and propagation control, enabling richer mapping of JSON document terms to IRIs within RDF-based knowledge systems. It provides a framing algorithm for reshaping a flat graph into a tree, and supports compaction and expansion algorithms that allow any conformant document to be normalised to a canonical form. JSON-LD 1.1 underpins interoperable semantic data exchange on the Web and is the serialisation format used by the Verifiable Credentials and Activity Streams standards.

- ### Semantic Classification
  - owl-class:: json-ld-1-1:JSON-LD 1.1
  - owl-role:: Concept

- ### Relationships
  - requires [[RDF]]
  - enables [[Linked Data]]
  - enables [[Knowledge Graph]]
  - uses [[JSON-LD]]
  - relatedTo [[SPARQL]]
  - relatedTo [[Semantic Web Linked Data Standard]]

- ### Content
  - JSON-LD 1.1 is defined by the W3C JSON-LD Working Group and consists of three companion specifications: the core syntax document, a processing algorithm and API document, and a framing document. The context mechanism allows authors to define a mapping between short, human-readable terms and globally unique IRIs, so that a JSON document can simultaneously be valid JSON and a valid RDF graph without any structural transformation required by consuming applications.
  - Key additions in version 1.1 over 1.0 include type-scoped contexts (where a context is activated only when a specific @type is encountered), property-scoped contexts (where a context is scoped to the values of a particular property), and the @protected keyword which prevents context terms from being redefined in nested contexts. The @version keyword is used in a context to assert compatibility with version 1.1 processing rules.
  - In knowledge graph pipelines, JSON-LD 1.1 is commonly used as the serialisation layer sitting between application-level JSON APIs and an RDF triple store, avoiding the need for custom mapping code. Linked Data Platform, Verifiable Credentials Data Model, and ActivityPub all mandate or recommend JSON-LD as their primary representation format, making JSON-LD 1.1 a foundational standard for interoperable web-scale semantic data.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z