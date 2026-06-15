public:: true

elevatedFrom:: [[json]]
# JSON Data Interchange Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ea91b9bc96df05281051ab901705227f7550e6087e4a3c9913e8a399c3ec9b55",
  "@type": "Page",
  "vc:slug": "json-data-interchange-format",
  "title": "JSON Data Interchange Format",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "json"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format",
  "@type": "Class",
  "label": "JSON Data Interchange Format",
  "definition": "JSON (JavaScript Object Notation) is a lightweight, human-readable, language-agnostic data-interchange format standardised as ECMA-404 and RFC 8259, built on two universal data structures: a collection of name/value pairs (objects) and an ordered list of values (arrays). Originally derived from JavaScript object-literal syntax by Douglas Crockford in the early 2000s, JSON has become the dominant wire format for REST APIs, configuration files, inter-service messaging, and AI pipeline payloads due to its minimal syntactic overhead, broad parser availability across every major programming language, and native mapping to in-memory data structures. Its strict subset relationship to JavaScript and its legibility to both humans and machines distinguishes it from predecessor formats such as XML while enabling seamless extension into semantic-web formats such as JSON-LD.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-schema",
        "label": "JSON Schema"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:web-api",
        "label": "Web API"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:unicode",
        "label": "Unicode"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:api-standard",
        "label": "API Standard"
      },
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      },
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      },
      {
        "@id": "urn:ngm:class:yaml",
        "label": "YAML"
      },
      {
        "@id": "urn:ngm:class:protocol-buffers",
        "label": "Protocol Buffers"
      },
      {
        "@id": "urn:ngm:class:messagepack",
        "label": "MessagePack"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:serialisation",
        "label": "Serialisation"
      },
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      },
      {
        "@id": "urn:ngm:class:javascript",
        "label": "JavaScript"
      },
      {
        "@id": "urn:ngm:class:serialisation-format",
        "label": "Data Serialisation Format"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:javascript-object-notation",
      "label": "JavaScript Object Notation"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:json:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ea91b9bc96df05281051ab901705227f7550e6087e4a3c9913e8a399c3ec9b55"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - JSON (JavaScript Object Notation) is a lightweight, language-agnostic [[Data Interchange]] format standardised under [[ECMA-404]] and [[RFC 8259]], representing structured data as human-readable text using two primitive constructs: name/value pair collections ([[JSON Object]]) and ordered value sequences ([[JSON Array]]). Its design goal — minimal syntax, maximal portability — has made it the backbone of [[REST API]] communication, [[Configuration Management]], and the input/output envelope for virtually every modern [[Web API]] and [[AI]] pipeline. JSON's strict, unambiguous grammar and native compatibility with [[JavaScript]] enabled a rapid global adoption that displaced [[XML]] as the dominant web data format through the 2010s and into the present decade.

- ### Overview
  - JSON emerged from Douglas Crockford's observation (circa 2001–2002) that a subset of [[JavaScript]] object-literal and array syntax constituted a complete, portable data format without requiring a formal grammar invention. The format describes four primitive types (string, number, boolean, null) and two collection types (object and array), supporting arbitrary nesting.
  - The formal standards are:
    - **ECMA-404** (2013, updated 2017) — the primary JSON specification published by Ecma International; intentionally minimal to allow independent implementation.
    - **RFC 8259** (2017, obsoletes RFC 7159) — the IETF standard mandating [[UTF-8 Encoding]] as the only permitted encoding and restricting duplicate object keys.
  - JSON's dominance stems from three factors: near-zero parsing complexity enabling fast, correct parsers in every language; direct mapping to native [[Serialisation]] structures (dictionaries, lists) in Python, JavaScript, Go, Java, Ruby, etc.; and complete [[Unicode]] support through UTF-8.
  - Its principal limitation is the absence of a built-in type system, schema mechanism, or semantic meaning — gaps addressed by companion standards such as [[JSON Schema]] (structural validation) and [[JSON-LD]] (semantic context).

- ### Key Components
  - **JSON Object** — an unordered set of name/value pairs enclosed in curly braces `{}`. Names must be strings (quoted); values may be any JSON type. Conceptually maps to [[Hash Map]] or [[Dictionary]] structures.
    - Example: `{"name": "Alice", "age": 30, "active": true}`
  - **JSON Array** — an ordered sequence of values enclosed in square brackets `[]`. Values may be heterogeneous JSON types, including nested objects and arrays.
    - Example: `[1, "two", null, {"three": 3}]`
  - **Primitive Types**
    - *String* — a sequence of [[Unicode]] characters delimited by double quotes, with six defined escape sequences (`\"`, `\\`, `\/`, `\b`, `\f`, `\n`, `\r`, `\t`) and `\uXXXX` for arbitrary code points.
    - *Number* — IEEE-754 double-precision floating-point representation; no distinction between integer and float at the syntax level.
    - *Boolean* — the literals `true` and `false`.
    - *Null* — the literal `null`, representing absence of a value.
  - **[[JSON Schema]]** — a separate vocabulary (draft under IETF) for describing the expected structure and types of JSON documents; enables validation, documentation, and code generation. Closely related to [[OpenAPI Specification]].
  - **[[JSON-LD]]** — JSON for Linking Data; extends JSON by adding a `@context` keyword that maps JSON keys to IRIs, enabling JSON documents to carry [[RDF]] semantics, bridging JSON into the [[Semantic Web]] and [[Knowledge Graph]] ecosystem.
  - **[[JSON Patch]] / [[JSON Merge Patch]]** — RFC 6902 / RFC 7396 standards for expressing incremental changes to JSON documents, enabling efficient [[API]] update operations without full-document replacement.
  - **[[NDJSON]] (Newline-Delimited JSON)** — convention for streaming multiple JSON objects separated by newlines, widely used in [[Log Management]], [[Event Streaming]], and bulk [[Data Pipeline]] scenarios.

- ### Applications and Use Cases
  - **[[REST API]] Payloads** — the universal request/response body format for HTTP-based services; virtually every public [[Web API]] (GitHub, Stripe, Twitter/X, AWS, GCP) uses JSON as its primary interchange format.
  - **[[Configuration Management]]** — used natively by Node.js (`package.json`), [[VS Code]] settings, [[Docker Compose]] (partially), and thousands of developer tools; human-editable yet machine-parseable.
  - **[[AI]] and [[Machine Learning]] Pipelines** — model inference APIs (OpenAI, Anthropic, Hugging Face), [[Large Language Model]] request/response envelopes, [[RAG]] retrieval payloads, and agent tool-call schemas all use JSON.
  - **[[Microservices Architecture]]** — the default [[Message Format]] in lightweight inter-service HTTP calls; JSON's overhead is acceptable for most latency budgets and its debuggability is valued in development.
  - **[[NoSQL Database]] Storage** — document-oriented databases ([[MongoDB]], [[CouchDB]], [[Firestore]], [[DynamoDB]]) store documents natively as JSON or BSON (Binary JSON), making JSON the query and result language.
  - **[[Linked Data]] and [[Knowledge Graph]] Construction** — [[JSON-LD]] extends JSON to encode RDF triples, enabling the publication of machine-readable semantic data (e.g., [[Schema.org]] annotations, [[Wikidata]] JSON exports, this knowledge graph's own page blocks).
  - **[[Blockchain]] and [[Smart Contract]] Interfaces** — ABI definitions for [[Ethereum]] smart contracts are JSON; transaction metadata and off-chain NFT attributes are stored as JSON.
  - **[[Event Streaming]] and [[Message Queue]]** — [[Apache Kafka]], [[AWS SNS/SQS]], [[Azure Event Hub]] payloads are frequently JSON-encoded; [[CloudEvents]] specification mandates JSON as a supported content mode.
  - **[[OpenAPI Specification]]** — the industry-standard description format for REST APIs is itself written in JSON (or YAML), and all described request/response bodies are expressed as [[JSON Schema]] sub-documents.

- ### Relationships
  - hasPart:: [[JSON Object]]
  - hasPart:: [[JSON Array]]
  - hasPart:: [[JSON Schema]]
  - enables:: [[JSON-LD]]
  - enables:: [[REST API]]
  - enables:: [[Knowledge Graph]]
  - enables:: [[Web API]]
  - implements:: [[ECMA-404]]
  - implements:: [[RFC 8259]]
  - uses:: [[UTF-8 Encoding]]
  - uses:: [[Unicode]]
  - supports:: [[API Standard]]
  - supports:: [[Microservices Architecture]]
  - supports:: [[Configuration Management]]
  - contrastsWith:: [[XML]]
  - contrastsWith:: [[YAML]]
  - contrastsWith:: [[Protocol Buffers]]
  - contrastsWith:: [[MessagePack]]
  - bridgesTo:: [[Linked Data]]
  - bridgesTo:: [[Ontology]]
  - bridgesTo:: [[RDF]]
  - bridgesTo:: [[Semantic Web]]
  - relatedTo:: [[Data Interchange]]
  - relatedTo:: [[Serialisation]]
  - relatedTo:: [[Data Format]]
  - relatedTo:: [[JavaScript]]

- ### Standards and Context
  - **ECMA-404 (2013, 2nd edition 2017)** — Ecma International's definitive JSON grammar. Deliberately short (~10 pages) to be implementable without ambiguity. Defines no semantic meaning, only syntactic structure.
  - **RFC 8259 (December 2017)** — Internet Engineering Task Force standard, superseding RFC 7159 (2014) and RFC 4627 (2006). Key additions over ECMA-404: mandates UTF-8 as the sole encoding for interchange; recommends against duplicate object keys; specifies MIME type `application/json`.
  - **[[JSON Schema]] (Internet-Draft)** — community-driven IETF drafts (currently Draft 2020-12 is most widely implemented) providing vocabulary for structural validation, annotation, and hypermedia. Underpins [[OpenAPI Specification]] v3.x.
  - **[[JSON-LD]] 1.1 (W3C Recommendation, 2020)** — adds `@context`, `@id`, `@type`, `@graph` and other keywords enabling any JSON document to express [[RDF]] triples, align with [[OWL2]] ontologies, and participate in the [[Semantic Web]] stack.
  - **[[JSON Patch]] — RFC 6902 (2013)** — defines a JSON document structure describing changes to a target JSON document: `add`, `remove`, `replace`, `move`, `copy`, `test` operations.
  - **[[NDJSON]] / JSON Lines** — informal but widely-implemented streaming convention; each line is a valid complete JSON value terminated by `\n`.
  - **[[CBOR]] (RFC 7049/8949)** — Concise Binary Object Representation; a binary encoding of the JSON data model designed to reduce size while preserving JSON semantics; used in [[IoT]], [[COSE]], and [[CBOR Object Signing and Encryption]] contexts.
  - **[[BSON]]** — Binary JSON used internally by [[MongoDB]]; extends the JSON type set with binary data, dates, and ObjectID; not a general interchange format but part of the JSON-derived ecosystem.
  - Governance body: Ecma International TC39 maintains ECMA-404 alongside the JavaScript specification. IETF JSON Working Group (now concluded) produced the RFC series. JSON Schema is governed by an open community organisation at json-schema.org.

- ### Comparison with Related Formats
  - **vs [[XML]]** — JSON is syntactically far more compact; XML carries explicit element namespaces, attributes, and processing instructions enabling richer document semantics, but at the cost of verbosity and a steeper parser stack. JSON has largely displaced XML for API payloads; XML retains dominance in document-centric domains (DocBook, OOXML, SVG) and enterprise messaging (SOAP, XSLT pipelines).
  - **vs [[YAML]]** — YAML is a superset of JSON (since YAML 1.2) and adds multi-line strings, anchors/aliases, and comment support, making it preferred for human-authored configuration. JSON's strict quoting and lack of comments make it safer for machine generation. YAML parsers have historically been a significant source of security vulnerabilities (arbitrary code execution via custom types).
  - **vs [[Protocol Buffers]]** — Google's protobuf uses a compact binary encoding with a mandatory schema (`.proto` file); wire size is smaller than JSON and parsing is faster, but the binary representation is not human-readable and requires schema distribution. Preferred for high-throughput internal [[gRPC]] services; JSON remains dominant for public-facing APIs.
  - **vs [[MessagePack]]** — a schemaless binary format that maps directly onto JSON's type model but encodes values more compactly. Used in environments where bandwidth or storage is constrained (e.g., [[Redis]] data structures, some [[WebSocket]] protocols).
  - **vs [[CBOR]]** — similar motivation to MessagePack but standardised through IETF and used in constrained-device ([[IoT]]) and cryptographic contexts; retains full JSON data model semantics.

- ### Provenance
  - sources:: ECMA-404 specification; RFC 8259 (IETF); JSON.org (Douglas Crockford); W3C JSON-LD 1.1 Recommendation; IETF JSON Schema drafts
  - updated:: 2026-06-13
