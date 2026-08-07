public:: true

# JSON-LD Serialisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2874d0fce9ece53c27a5bd4f49c3c3854f2b49eadf52cc684f086c35cc995c6",
  "@type": "Page",
  "vc:slug": "json-ld-serialisation",
  "title": "JSON-LD Serialisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:serialisation-format", "vc:label": "Serialisation Format"},
    {"@id": "urn:visionflow:linked:linked-data", "vc:label": "Linked Data"},
    {"@id": "urn:visionflow:linked:rdf", "vc:label": "RDF"},
    {"@id": "urn:visionflow:linked:w3c-recommendation", "vc:label": "W3C Recommendation"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-ld",
  "@type": "Class",
  "label": "JSON-LD Serialisation",
  "definition": "A W3C-standardised serialisation of linked data in ordinary JSON, in which an @context maps plain JSON keys to IRIs so that documents remain idiomatic JSON for developers while being losslessly convertible to RDF graphs. JSON-LD 1.1 (W3C Recommendation, 2020) provides @id, @type, framing, and compaction/expansion algorithms, and is the interchange syntax used by schema.org markup, Verifiable Credentials, DID documents, ActivityPub, and agent-to-agent protocols.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:serialisation-format",
    "label": "Serialisation Format"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:json", "label": "JSON"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:w3c-recommendation", "label": "W3C Recommendation"},
      {"@id": "urn:ngm:class:schema-org", "label": "Schema.org"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:semantic-web", "label": "Semantic Web"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A W3C-standardised serialisation of linked data in ordinary JSON, in which an @context maps plain JSON keys to IRIs so that documents remain idiomatic JSON for developers while being losslessly convertible to RDF graphs. JSON-LD 1.1 (W3C Recommendation, 2020) provides @id, @type, framing, and compaction/expansion algorithms, and is the interchange syntax used by schema.org markup, Verifiable Credentials, DID documents, ActivityPub, and agent-to-agent protocols."

- ### Semantic Classification
  - owl-class:: standards:JSONLDSerialisation
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Serialisation Format]]
  - implements:: [[Linked Data]]
  - uses:: [[JSON]]
  - related-to:: [[RDF]]

- ### Content

  ## Definition

  **JSON-LD** (JavaScript Object Notation for Linked Data) is a serialisation that lets ordinary JSON documents carry [[Linked Data]] semantics. Its central device is the `@context`: a mapping, embedded or referenced by URL, that binds short JSON keys to full IRIs and datatypes. With a context applied, a plain-looking document — `{"name": "Ada"}` — becomes a set of unambiguous, globally identified statements, interoperable with any other system that shares or maps the same vocabularies. Keywords such as `@id` (node identity), `@type` (class membership), and `@graph` (named graphs) complete the mapping from JSON trees to [[RDF]] graphs.

  The design goal, pursued by the W3C JSON-LD Working Group and standardised as JSON-LD 1.0 (2014) and 1.1 (2020), was to bring the semantic web to working developers on their own terms: no new syntax to learn, existing JSON toolchains untouched, and semantics added incrementally — often just by linking a context. The specification family defines deterministic algorithms for expansion (making all IRIs explicit), compaction (re-shortening against a context), flattening, and framing (reshaping a graph into a desired JSON layout), which give JSON-LD its round-trip guarantees.

  Adoption is broad. Search engines consume [[Schema.org]] structured data predominantly as JSON-LD script blocks, making it the most widely deployed RDF syntax on the web. W3C Verifiable Credentials and DID documents, the ActivityPub/ActivityStreams social web, cultural-heritage APIs (IIIF), and emerging agent-interoperability protocols all specify JSON-LD as their data model's concrete syntax. This corpus itself stores its page and class metadata as JSON-LD blocks.

  ## Technical Details

  - **Specifications**: JSON-LD 1.1 (W3C Recommendation, 16 July 2020), with companion API and framing recommendations; media type `application/ld+json`.
  - **Document forms**: expanded, compacted, flattened, and framed forms are interconvertible; canonicalisation (RDF Dataset Canonicalization, RDFC-1.0) supports hashing and signing for credentials.
  - **RDF alignment**: a JSON-LD document denotes an RDF dataset; conversion to and from N-Quads, Turtle, and TriG is lossless for the supported feature set.
  - **1.1 additions**: scoped contexts, `@nest`, `@included`, JSON literals, and improved container maps for indexing by id, type, or language.
  - **Implementations**: jsonld.js, PyLD, Titanium (Java), Ruby JSON-LD, and RDF library integrations (rdflib, Jena, RDF4J); processors are conformance-tested against the W3C test suite.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
