public:: true

# json-ld
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f3fbe4cefa1b3dc4b5ee7a353d11b190f9c8a5c3fc4f5cc9d1c28ed33bce2e23",
  "@type": "Page",
  "vc:slug": "json-ld",
  "title": "json-ld",
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
  "@id": "urn:ngm:class:json-data-interchange-format-ld",
  "@type": "Class",
  "label": "JSON-LD",
  "definition": "JSON-LD (JSON for Linking Data) is a W3C Recommendation (first published 2014, revised 1.1 in 2020) that defines a lightweight Linked Data serialisation syntax layered on top of JSON. A @context document maps compact JSON keys to full RDF IRIs, enabling any conformant JSON document to be interpreted as an RDF graph without abandoning existing JSON tooling. JSON-LD is the canonical syntax for W3C Verifiable Credentials, Schema.org structured data embedded in HTML, and the ActivityPub social protocol, making it the most widely deployed Linked Data technology on the open web.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linked-data",
      "label": "Linked Data"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:structured-data", "label": "Structured Data"},
      {"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:iri", "label": "IRI"},
      {"@id": "urn:ngm:class:json-data-interchange-format", "label": "JSON"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:schema-org", "label": "Schema.org"},
      {"@id": "urn:ngm:class:n-quads", "label": "N-Quads"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:w3c", "label": "W3C"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:json-data-interchange-format-schema", "label": "JSON Schema"},
      {"@id": "urn:ngm:class:turtle", "label": "Turtle"},
      {"@id": "urn:ngm:class:rdf-xml", "label": "RDF/XML"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"},
      {"@id": "urn:ngm:class:activity-pub", "label": "ActivityPub"},
      {"@id": "urn:ngm:class:owl", "label": "OWL"},
      {"@id": "urn:ngm:class:shacl", "label": "SHACL"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:search-engine-optimisation", "label": "Search Engine Optimisation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:json-for-linking-data", "label": "JSON for Linking Data"}
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
  - JSON-LD (JSON for Linking Data) is a [[W3C]] Recommendation that defines a lightweight serialisation syntax for expressing [[Linked Data]] using the [[JSON]] data format. A `@context` document maps compact JSON keys to full [[RDF]] IRIs, enabling any conformant JSON document to be interpreted as an [[RDF]] graph without abandoning standard JSON tooling. JSON-LD serves as the canonical syntax for [[Verifiable Credentials]], [[Schema.org]] structured data embedded in HTML pages, and the [[ActivityPub]] federated social protocol, making it the most widely deployed Linked Data technology on the open web.

- ### Overview
  - JSON-LD bridges the pragmatic world of web development (where JSON is the de-facto data exchange format) and the formal world of the [[Semantic Web]] (where data must carry unambiguous, machine-readable meaning).
  - Before JSON-LD, developers faced an uncomfortable choice: use JSON and lose semantic precision, or adopt RDF syntaxes such as [[Turtle]] or [[RDF/XML]] that were unfamiliar to most web engineers.
  - The core insight of JSON-LD is that the `@context` mechanism can be added to any existing JSON document, retrofitting Linked Data semantics without breaking compatibility with existing JSON parsers and libraries.
  - The specification was first published as a W3C Recommendation in January 2014 (JSON-LD 1.0), then significantly revised in July 2020 (JSON-LD 1.1), with accompanying Processing Algorithms and API, and a Framing specification.
  - The [[W3C]] JSON-LD Working Group produced these specifications in collaboration with the JSON-LD Community Group.
  - Adoption is enormous: Schema.org JSON-LD appears in hundreds of millions of web pages; all major search engines (Google, Bing, Yahoo) parse it to generate rich search result snippets.

- ### Key Components
  - **@context**
    - The context is the central mechanism: it maps abbreviated term names to full [[IRI]] references and configures how values are interpreted (as strings, typed literals, language-tagged strings, or nested nodes).
    - Contexts can be embedded inline, referenced by URL, or composed by combining an array of context documents.
    - JSON-LD 1.1 introduced *scoped contexts* (applied to specific types or properties) and *propagation control*, allowing finer-grained term scoping.
  - **@id and @type**
    - `@id` assigns an [[IRI]] identifier to a node, making it referenceable as an RDF subject or object.
    - `@type` maps to `rdf:type`, connecting the node to an [[Ontology]] class such as `schema:Person` or `vc:VerifiableCredential`.
  - **Node Objects and Value Objects**
    - Node objects represent entities (RDF subjects); value objects represent literal RDF values (strings, numbers, dates) with optional datatype or language tags.
    - Nested node objects serialise RDF blank nodes or named nodes within a single JSON document tree.
  - **Processing Algorithms**
    - *Expansion*: removes the context and produces a fully expanded form using absolute IRIs and explicit value objects — canonical for comparison.
    - *Compaction*: applies a context to produce the most compact human-readable form, the inverse of expansion.
    - *Flattening*: restructures a document into a single flat array of node objects, ensuring each node appears exactly once.
    - *Framing*: matches a document against a frame template, reshaping the graph into a particular tree structure suited for an application.
  - **Canonicalisation (URDNA2015 / RDF Dataset Normalisation)**
    - Produces a deterministic [[N-Quads]] serialisation by labelling blank nodes in a canonical way, stable under node reordering.
    - Essential for cryptographic signing: the canonical form is hashed before a signature is applied, as required by [[Data Integrity]] (formerly Linked Data Proofs) and [[Verifiable Credentials]].
  - **@graph**
    - Allows multiple top-level node objects in a single document, forming a named [[RDF]] graph.
    - Used in Verifiable Credential proofs where the credential graph and the proof graph are kept separate.

- ### Applications and Use Cases
  - **Schema.org Structured Data**
    - Web publishers embed JSON-LD `<script type="application/ld+json">` blocks in HTML `<head>` sections to expose structured metadata to search engines.
    - [[Schema.org]] provides the vocabulary (Product, Article, Event, Recipe, JobPosting, etc.); JSON-LD provides the syntax.
    - Google Search uses this data to generate rich snippets, knowledge panels, and job listings in search results, making it a commercially significant SEO technology.
  - **Verifiable Credentials**
    - The [[W3C]] Verifiable Credentials Data Model 1.1 (and 2.0) mandates JSON-LD as the primary serialisation format for interoperable credential exchange.
    - Credential types (DriverLicenseCredential, UniversityDegreeCredential) are defined in JSON-LD context documents, ensuring that the same credential can be interpreted consistently across different issuers, holders, and verifiers.
    - The `@context` field in a credential document is a normative requirement, not optional decoration.
  - **Decentralised Identity**
    - [[Decentralised Identifiers]] (DIDs) and DID Documents use JSON-LD to express verification methods, service endpoints, and capability delegations in a semantically precise, interoperable form.
    - JSON-LD canonicalisation enables deterministic signing of DID Documents and Verifiable Presentations.
  - **ActivityPub and Fediverse**
    - The [[ActivityPub]] protocol (W3C Recommendation, 2018) defines its Activity Streams 2.0 vocabulary using JSON-LD, enabling federation between servers such as Mastodon, PeerTube, and Pixelfed.
    - All actors, notes, likes, and follows on the Fediverse are represented as JSON-LD documents.
  - **Knowledge Graphs**
    - Enterprise [[Knowledge Graph]] systems (Google Knowledge Graph, Wikidata, DBpedia) publish and consume JSON-LD as an interchange format.
    - Wikidata's JSON dumps include JSON-LD representations; schema.org's own vocabulary is published as JSON-LD.
  - **APIs and Hypermedia**
    - JSON-LD combined with Hydra (a vocabulary for hypermedia-driven APIs) enables self-describing REST APIs where clients can discover capabilities at runtime.
    - The ActivityStreams 2.0 API and Solid (Tim Berners-Lee's personal data project) both use JSON-LD as the primary data format.
  - **Ontology Publishing**
    - OWL 2 ontologies can be serialised in JSON-LD using the OWL 2 JSON-LD mapping, enabling web-native ontology publication and consumption by standard JSON tools.

- ### Relationships
  - implements:: [[Linked Data]]
  - implements:: [[RDF]]
  - implements:: [[Semantic Web]]
  - enables:: [[Verifiable Credentials]]
  - enables:: [[Ontology]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Structured Data]]
  - enables:: [[Data Integrity]]
  - requires:: [[IRI]]
  - requires:: [[JSON]]
  - uses:: [[Schema.org]]
  - uses:: [[N-Quads]]
  - standardizedBy:: [[W3C]]
  - contrastsWith:: [[JSON Schema]]
  - contrastsWith:: [[Turtle]]
  - contrastsWith:: [[RDF/XML]]
  - relatedTo:: [[SPARQL]]
  - relatedTo:: [[ActivityPub]]
  - relatedTo:: [[OWL]]
  - relatedTo:: [[SHACL]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Search Engine Optimisation]]

- ### Standards and Context
  - **JSON-LD 1.0** — W3C Recommendation, January 2014. Introduced the core @context mechanism, the expansion/compaction/flattening algorithms, and the RDF serialisation mapping.
  - **JSON-LD 1.1** — W3C Recommendation, July 2020. Added scoped contexts, type-scoped contexts, property-based value indexing, nested nodes, and the `@protected` keyword to prevent term redefinition.
  - **JSON-LD 1.1 Processing Algorithms and API** — companion spec defining the normative algorithms and the JavaScript-style API for implementations.
  - **JSON-LD 1.1 Framing** — companion spec defining the framing algorithm for reshaping JSON-LD documents into application-specific tree forms.
  - **RDF Dataset Normalisation (URDNA2015)** — [[W3C]] working draft specifying the canonical blank-node labelling algorithm used before cryptographic signing. Implemented as `rdf-dataset-normalization` (npm) and `pyld` (Python).
  - **Governing body**: [[W3C]] JSON-LD Working Group (2018–2020), succeeded by the JSON-LD Community Group for ongoing maintenance.
  - **Key vocabularies relying on JSON-LD**: [[Schema.org]], Activity Streams 2.0, [[Verifiable Credentials]] contexts (`https://www.w3.org/2018/credentials/v1`), DID Core contexts.
  - **Reference implementations**: `jsonld.js` (JavaScript/Node.js, maintained by the Digital Bazaar team), `pyld` (Python), `titanium-json-ld` (Java), `json-ld-api` (Ruby), `JsonLdProcessor` in .NET.
  - **Domain remap note**: the original file classified JSON-LD under "blockchain". JSON-LD is a general-purpose W3C data standard; remapped to "data" as the most accurate domain in the permitted set. Its use in [[Verifiable Credentials]] and [[Decentralised Identity]] provides a legitimate connection to blockchain/DID ecosystems, expressed via bridgesTo relations.

- ### Provenance
  - sources:: W3C JSON-LD 1.1 Recommendation (2020), W3C Verifiable Credentials Data Model, Schema.org documentation, ActivityPub W3C Recommendation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
