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
  "definition": "JSON-LD 1.1 is a W3C Recommendation that extends JSON-LD 1.0 with features including scoped contexts, type-scoped contexts, and propagation control, enabling richer mapping of JSON document terms to IRIs within RDF-based knowledge systems. It provides a framing algorithm for reshaping a flat graph into a tree, and supports compaction and expansion algorithms that allow any conformant document to be normalised to a canonical form. JSON-LD 1.1 underpins interoperable semantic data exchange on the Web and is the serialisation format used by the Verifiable Credentials and Activity Streams standards.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format-ld", "label": "JSON-LD"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard-standards", "label": "Semantic Web Standards"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


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
