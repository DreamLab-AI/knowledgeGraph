JSON-LD (JSON for Linking Data) is a W3C Recommendation (first published 2014, revised 1.1 in 2020) that defines a lightweight Linked Data serialisation syntax layered on top of JSON. A @context document maps compact JSON keys to full RDF IRIs, enabling any conformant JSON document to be interpreted as an RDF graph without abandoning existing JSON tooling. JSON-LD is the canonical syntax for W3C Verifiable Credentials, Schema.org structured data embedded in HTML, and the ActivityPub social protocol, making it the most widely deployed Linked Data technology on the open web.

### Overview

- JSON-LD bridges the pragmatic world of web development (where JSON is the de-facto data exchange format) and the formal world of the [[Semantic Web]] (where data must carry unambiguous, machine-readable meaning).
- Before JSON-LD, developers faced an uncomfortable choice: use JSON and lose semantic precision, or adopt RDF syntaxes such as [[Turtle]] or [[RDF/XML]] that were unfamiliar to most web engineers.
- The core insight of JSON-LD is that the `@context` mechanism can be added to any existing JSON document, retrofitting Linked Data semantics without breaking compatibility with existing JSON parsers and libraries.
- The specification was first published as a W3C Recommendation in January 2014 (JSON-LD 1.0), then significantly revised in July 2020 (JSON-LD 1.1), with accompanying Processing Algorithms and API, and a Framing specification.
- The [[World Wide Web Consortium]] JSON-LD Working Group produced these specifications in collaboration with the JSON-LD Community Group.
- Adoption is enormous: Schema.org JSON-LD appears in hundreds of millions of web pages; all major search engines (Google, Bing, Yahoo) parse it to generate rich search result snippets.

### Key Components

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
  - Essential for cryptographic signing: the canonical form is hashed before a signature is applied, as required by [[Data Integrity]] (formerly Linked Data Proofs) and [[Verifiable Credential]].
- **@graph**
  - Allows multiple top-level node objects in a single document, forming a named [[RDF]] graph.
  - Used in Verifiable Credential proofs where the credential graph and the proof graph are kept separate.

### Applications and Use Cases

- **Schema.org Structured Data**
  - Web publishers embed JSON-LD `<script type="application/ld+json">` blocks in HTML `<head>` sections to expose structured metadata to search engines.
  - [[Schema.org]] provides the vocabulary (Product, Article, Event, Recipe, JobPosting, etc.); JSON-LD provides the syntax.
  - Google Search uses this data to generate rich snippets, knowledge panels, and job listings in search results, making it a commercially significant SEO technology.
- **Verifiable Credentials**
  - The [[World Wide Web Consortium]] Verifiable Credentials Data Model 1.1 (and 2.0) mandates JSON-LD as the primary serialisation format for interoperable credential exchange.
  - Credential types (DriverLicenseCredential, UniversityDegreeCredential) are defined in JSON-LD context documents, ensuring that the same credential can be interpreted consistently across different issuers, holders, and verifiers.
  - The `@context` field in a credential document is a normative requirement, not optional decoration.
- **Decentralised Identity**
  - [[Decentralised Identifier]] (DIDs) and DID Documents use JSON-LD to express verification methods, service endpoints, and capability delegations in a semantically precise, interoperable form.
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

### Standards and Context

- **JSON-LD 1.0** — W3C Recommendation, January 2014. Introduced the core @context mechanism, the expansion/compaction/flattening algorithms, and the RDF serialisation mapping.
- **JSON-LD 1.1** — W3C Recommendation, July 2020. Added scoped contexts, type-scoped contexts, property-based value indexing, nested nodes, and the `@protected` keyword to prevent term redefinition.
- **JSON-LD 1.1 Processing Algorithms and API** — companion spec defining the normative algorithms and the JavaScript-style API for implementations.
- **JSON-LD 1.1 Framing** — companion spec defining the framing algorithm for reshaping JSON-LD documents into application-specific tree forms.
- **RDF Dataset Normalisation (URDNA2015)** — [[World Wide Web Consortium]] working draft specifying the canonical blank-node labelling algorithm used before cryptographic signing. Implemented as `rdf-dataset-normalization` (npm) and `pyld` (Python).
- **Governing body**: [[World Wide Web Consortium]] JSON-LD Working Group (2018–2020), succeeded by the JSON-LD Community Group for ongoing maintenance.
- **Key vocabularies relying on JSON-LD**: [[Schema.org]], Activity Streams 2.0, [[Verifiable Credential]] contexts (`https://www.w3.org/2018/credentials/v1`), DID Core contexts.
- **Reference implementations**: `jsonld.js` (JavaScript/Node.js, maintained by the Digital Bazaar team), `pyld` (Python), `titanium-json-ld` (Java), `json-ld-api` (Ruby), `JsonLdProcessor` in .NET.
- **Domain remap note**: the original file classified JSON-LD under "blockchain". JSON-LD is a general-purpose W3C data standard; remapped to "data" as the most accurate domain in the permitted set. Its use in [[Verifiable Credential]] and [[Decentralised Identity]] provides a legitimate connection to blockchain/DID ecosystems, expressed via bridgesTo relations.

### Provenance

## Merged from JSON-LD Serialisation (needs reconciliation)
A W3C-standardised serialisation of linked data in ordinary JSON, in which an @context maps plain JSON keys to IRIs so that documents remain idiomatic JSON for developers while being losslessly convertible to RDF graphs. JSON-LD 1.1 (W3C Recommendation, 2020) provides @id, @type, framing, and compaction/expansion algorithms, and is the interchange syntax used by schema.org markup, Verifiable Credentials, DID documents, ActivityPub, and agent-to-agent protocols.

### Semantic Classification

### Content

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

  ## Current Landscape

- **JSON-LD 1.1** has been a W3C Recommendation since **16 July 2020** (authored by Gregg Kellogg, Pierre-Antoine Champin and Dave Longley), together with its companion API and Framing recommendations; the registered media type is `application/ld+json`.
- It is the concrete syntax of the **W3C Verifiable Credentials Data Model 2.0**, whose canonical context `https://www.w3.org/ns/credentials/v2` (context files published under w3.org/2025/credentials) expresses credentials as JSON-LD 1.1, cementing JSON-LD's role in the fast-growing digital-identity and Data Integrity proof stack.
- RDF Dataset Canonicalization (**RDFC-1.0**) underpins hashing and signing of JSON-LD credentials, a dependency of the Verifiable Credential Data Integrity work advancing at W3C into 2026.
- As the predominant carrier of **Schema.org** structured data in `<script type="application/ld+json">` blocks, JSON-LD remains the most widely deployed RDF syntax on the web, and is also the specified data model syntax for DID documents, ActivityPub/ActivityStreams and IIIF.

  **Sources**:

- https://www.w3.org/TR/json-ld11/
- https://www.w3.org/TR/vc-overview-1.1/
- https://www.w3.org/2025/credentials/

### Provenance

