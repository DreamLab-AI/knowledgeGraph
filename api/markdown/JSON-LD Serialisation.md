
A W3C-standardised serialisation of linked data in ordinary JSON, in which an @context maps plain JSON keys to IRIs so that documents remain idiomatic JSON for developers while being losslessly convertible to RDF graphs. JSON-LD 1.1 (W3C Recommendation, 2020) provides @id, @type, framing, and compaction/expansion algorithms, and is the interchange syntax used by schema.org markup, Verifiable Credentials, DID documents, ActivityPub, and agent-to-agent protocols.

- ### Semantic Classification

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

  ## Current Landscape

  - **JSON-LD 1.1** has been a W3C Recommendation since **16 July 2020** (authored by Gregg Kellogg, Pierre-Antoine Champin and Dave Longley), together with its companion API and Framing recommendations; the registered media type is `application/ld+json`.
  - It is the concrete syntax of the **W3C Verifiable Credentials Data Model 2.0**, whose canonical context `https://www.w3.org/ns/credentials/v2` (context files published under w3.org/2025/credentials) expresses credentials as JSON-LD 1.1, cementing JSON-LD's role in the fast-growing digital-identity and Data Integrity proof stack.
  - RDF Dataset Canonicalization (**RDFC-1.0**) underpins hashing and signing of JSON-LD credentials, a dependency of the Verifiable Credential Data Integrity work advancing at W3C into 2026.
  - As the predominant carrier of **Schema.org** structured data in `<script type="application/ld+json">` blocks, JSON-LD remains the most widely deployed RDF syntax on the web, and is also the specified data model syntax for DID documents, ActivityPub/ActivityStreams and IIIF.

  **Sources**:
  - https://www.w3.org/TR/json-ld11/
  - https://www.w3.org/TR/vc-overview-1.1/
  - https://www.w3.org/2025/credentials/

- ### Provenance

