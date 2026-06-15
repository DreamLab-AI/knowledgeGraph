public:: true

# json schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:74a768d7036d710fd0ea30187617badf67dd205c711c24e8cc659c277accb9e3",
  "@type": "Page",
  "vc:slug": "json-schema",
  "title": "json schema",
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
  "@id": "urn:ngm:class:json-data-interchange-format-schema",
  "@type": "Class",
  "label": "JSON Schema",
  "definition": "JSON Schema is an IETF-standardised declarative vocabulary for annotating and validating the structure, data types, required fields, and value constraints of JSON documents. It defines a set of keywords — including type, properties, required, additionalProperties, format, pattern, minimum, maximum, and combiners such as allOf, anyOf, and oneOf — that together constitute a machine-readable contract between data producers and consumers. Originally developed as a series of Internet-Drafts, the 2020-12 dialect is the most widely implemented stable revision. JSON Schema underpins REST API documentation via OpenAPI, event-driven API documentation via AsyncAPI, configuration validation in Kubernetes CRDs and Helm charts, and verifiable credential subject validation in decentralised identity ecosystems.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON Data Interchange Format"
      },
      {
        "@id": "urn:ngm:class:schema-validation",
        "label": "Schema Validation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:credential-schema",
        "label": "Credential Schema"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF Standard"
      },
      {
        "@id": "urn:ngm:class:constraint-specification",
        "label": "Declarative Constraint Specification"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:controlled-vocabulary",
        "label": "Keyword Vocabulary"
      },
      {
        "@id": "urn:ngm:class:regular-expression",
        "label": "Regular Expression"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:openapi",
        "label": "OpenAPI"
      },
      {
        "@id": "urn:ngm:class:asyncapi",
        "label": "AsyncAPI"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:xml-schema-definition",
        "label": "XML Schema Definition"
      },
      {
        "@id": "urn:ngm:class:apache-avro",
        "label": "Apache Avro"
      },
      {
        "@id": "urn:ngm:class:protocol-buffers",
        "label": "Protocol Buffers"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:data-format",
        "label": "Data Format"
      },
      {
        "@id": "urn:ngm:class:open-api-specification",
        "label": "OpenAPI Specification"
      },
      {
        "@id": "urn:ngm:class:graphql-schema",
        "label": "GraphQL Schema"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:infrastructure-as-code",
        "label": "Infrastructure as Code"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:json-validation-schema",
      "label": "JSON Validation Schema"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - JSON Schema is an [[IETF]] standardised declarative vocabulary for annotating and validating the structure, data types, required fields, and value constraints of [[JSON]] documents. It provides a machine-readable contract mechanism enabling [[API Contract Testing]] between data producers and consumers, using composable keywords such as `type`, `properties`, `required`, `additionalProperties`, `pattern`, and logical combiners including `allOf`, `anyOf`, and `oneOf`. Widely adopted through [[OpenAPI Specification]], [[AsyncAPI]], [[Verifiable Credentials]], and [[Kubernetes]] CRD validation, JSON Schema has become the de facto standard for structured data description and validation across web and infrastructure ecosystems.

- ### Overview
  - JSON Schema defines a vocabulary — expressed as a JSON document — that constrains the shape of other JSON documents. A schema specifies which properties are required, their permitted types, acceptable value ranges, and how sub-schemas can be combined.
  - The specification is maintained by the JSON Schema organisation and published as IETF Internet-Drafts. The 2020-12 dialect (draft-bhutton) is the most broadly implemented; prior dialects include draft-07 and draft-2019-09, which remain common in tooling.
  - The vocabulary separates concerns into annotation keywords (for documentation and UI generation), assertion keywords (for validation), and applicator keywords (for schema composition and conditional logic). This layered design allows a single schema to serve documentation, validation, and [[Code Generation]] simultaneously.
  - Because a schema is itself a valid JSON document, schemas can be stored, versioned, retrieved via HTTP, and referenced using `$ref` and `$id` URI resolution — enabling modular schema libraries and registry-based distribution.

- ### Key Components
  - **Core keywords**
    - `$schema` — declares the dialect URI governing keyword interpretation
    - `$id` — assigns a canonical URI to a schema, enabling cross-schema reference via [[URI Reference]]
    - `$ref` — includes another schema by URI, forming compositional trees
    - `$defs` / `definitions` — declares reusable sub-schemas within a document
  - **Type assertions**
    - `type` — restricts to one of `string`, `number`, `integer`, `boolean`, `array`, `object`, or `null`
    - `enum` — restricts to a fixed set of values
    - `const` — restricts to a single constant value
  - **Object keywords**
    - `properties` — maps property names to sub-schemas
    - `required` — lists mandatory property names
    - `additionalProperties` — controls whether extra properties are permitted or must match a sub-schema
    - `patternProperties` — maps [[Regular Expression]] patterns to sub-schemas for matching property names
    - `unevaluatedProperties` — fills gaps left by applicator keywords; 2020-12 addition
  - **Array keywords**
    - `items` — sub-schema applied to all array elements (2020-12 single-schema form)
    - `prefixItems` — positional sub-schemas for tuple validation (2020-12)
    - `minItems` / `maxItems` — array length bounds
    - `uniqueItems` — enforces element uniqueness
  - **String keywords**
    - `pattern` — constrains string content via [[Regular Expression]]
    - `format` — semantic annotation (e.g., `date-time`, `email`, `uri`, `ipv4`)
    - `minLength` / `maxLength` — character count bounds
  - **Numeric keywords**
    - `minimum` / `maximum` / `exclusiveMinimum` / `exclusiveMaximum`
    - `multipleOf` — divisibility constraint
  - **Applicator keywords**
    - `allOf` — instance must satisfy all sub-schemas (intersection)
    - `anyOf` — instance must satisfy at least one sub-schema (union)
    - `oneOf` — instance must satisfy exactly one sub-schema (XOR)
    - `not` — instance must fail the sub-schema
    - `if` / `then` / `else` — conditional validation branches
  - **Annotation keywords**
    - `title`, `description` — human-readable labels; consumed by [[Form Generation]] and [[Code Generation]] tools
    - `default` — suggested default value
    - `examples` — illustrative instance values
    - `deprecated` — marks a property as superseded
    - `readOnly` / `writeOnly` — direction annotations for [[REST API]] semantics

- ### Applications and Use Cases
  - **REST API description** — [[OpenAPI Specification]] (v3.x) embeds JSON Schema as the schema object for request bodies, response payloads, and parameters. Every major API gateway and developer portal renders schemas into human-readable documentation.
  - **Event-driven APIs** — [[AsyncAPI]] applies the same schema vocabulary to message payloads in [[Kafka]], [[AMQP]], [[MQTT]], and WebSocket systems, extending the REST-centric model to event streaming.
  - **Configuration validation** — [[Kubernetes]] Custom Resource Definition (CRD) validation uses a structural JSON Schema subset; [[Helm]] chart values files use schemas to validate user-supplied configuration at install time.
  - **Verifiable Credentials** — The [[W3C]] [[Verifiable Credentials]] data model uses JSON Schema (alongside [[JSON-LD]] contexts) to validate credential subject properties, ensuring interoperability between issuers and verifiers in [[Decentralised Identity]] ecosystems.
  - **Code and form generation** — Tools such as `quicktype`, `json-schema-to-typescript`, and React JSON Schema Form consume schemas to emit typed data-transfer objects or complete UI forms, enabling schema-driven [[Full-Stack Development]].
  - **Data contract enforcement** — Platform engineering teams use JSON Schema as [[Data Contract]] artefacts — stored in schema registries — to enforce backward-compatible evolution of [[Event-Driven Architecture]] payloads.
  - **Infrastructure as Code** — [[Terraform]] provider schemas and VS Code's `settings.json` schema use JSON Schema to provide IDE autocompletion and inline validation, bridging data description into [[Infrastructure as Code]] workflows.
  - **Machine learning pipelines** — Dataset manifests, feature store schemas, and model-card metadata increasingly use JSON Schema for structural validation, providing a lightweight alternative to [[Apache Avro]] in [[MLOps]] contexts.

- ### Relationships
  - requires:: [[JSON]]
  - requires:: [[Schema Validation]]
  - implements:: [[IETF Standard]]
  - implements:: [[Declarative Constraint Specification]]
  - uses:: [[Regular Expression]]
  - uses:: [[URI Reference]]
  - supports:: [[OpenAPI Specification]]
  - supports:: [[AsyncAPI]]
  - supports:: [[Verifiable Credentials]]
  - supports:: [[Kubernetes]]
  - enables:: [[REST API]]
  - enables:: [[Credential Schema]]
  - enables:: [[API Contract Testing]]
  - enables:: [[Code Generation]]
  - enables:: [[Form Generation]]
  - relatedTo:: [[JSON-LD]]
  - relatedTo:: [[Data Format]]
  - relatedTo:: [[GraphQL Schema]]
  - contrastsWith:: [[XML Schema Definition]]
  - contrastsWith:: [[Apache Avro]]
  - contrastsWith:: [[Protocol Buffers]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Infrastructure as Code]]

- ### Standards and Context
  - **IETF Internet-Drafts** — JSON Schema has been developed through a succession of Internet-Drafts under the `json-schema` working group. The dialects in widespread use are:
    - draft-07 (2018) — widely supported baseline; still default in many libraries
    - draft/2019-09 (Hyper-Schema companion) — introduced `unevaluatedProperties` and anchor support
    - draft/2020-12 (December 2020) — restructured `items` into `prefixItems`/`items`; became reference implementation dialect
  - **JSON Schema Organisation** — an independent open-source organisation (json-schema.org) governs specification development, maintains the test suite (`JSON-Schema-Test-Suite`), and hosts the [[OpenAPI]] and [[AsyncAPI]] working group liaisons.
  - **Vocabulary extension** — the 2020-12 dialect formalises custom vocabularies via `$vocabulary`, enabling [[OpenAPI]] and others to declare their keyword extensions as first-class schema citizens.
  - **Schema registries** — Confluent Schema Registry and AWS Glue Schema Registry support JSON Schema alongside [[Apache Avro]] and [[Protocol Buffers]] for [[Event-Driven Architecture]] payload governance.
  - **Security considerations** — recursive `$ref` chains can create infinite loops; conformant validators must implement cycle detection. The `format` keyword is annotation-only by default; validators must explicitly opt in to format assertion to avoid false positives in security-sensitive contexts.
  - **Relationship to [[JSON-LD]]** — JSON Schema validates structure; JSON-LD assigns semantic meaning via linked-data context. The two are complementary and co-used in [[Verifiable Credentials]], where a JSON-LD context expresses semantics while a JSON Schema enforces data shape.
  - **Relationship to [[XML Schema Definition]]** — XSD is the older, more verbose XML-world counterpart; JSON Schema borrows composability ideas from Relax NG while remaining JSON-native and far more concise.

- ### Tooling Ecosystem
  - **JavaScript / Node.js** — `ajv` (Another JSON Validator) is the most-used library; supports all major dialects and custom keywords. `@hyperjump/json-schema` is the reference implementation for 2020-12.
  - **Python** — `jsonschema` library (PyPI) supports draft-07 through 2020-12; `fastjsonschema` offers a JIT-compiled alternative for high-throughput validation.
  - **Java / JVM** — `networknt/json-schema-validator` and `everit-org/json-schema` are the primary libraries; widely used in Spring Boot API validation pipelines.
  - **Go** — `qri-io/jsonschema` and `santhosh-tekuri/jsonschema` provide idiomatic implementations.
  - **Rust** — `jsonschema` crate (PyO3-backed) and `boon` are actively maintained for 2020-12.
  - **IDE integration** — VS Code, JetBrains IDEs, and Neovim LSP clients consume schemas from schemastore.org (SchemaStore) to provide autocompletion and inline validation for thousands of configuration file formats.
  - **Schema Stores** — schemastore.org aggregates community-contributed schemas for tools including GitHub Actions, `package.json`, `tsconfig.json`, Kubernetes manifests, and Helm values files.

- ### Provenance
  - sources:: IETF json-schema Internet-Drafts; json-schema.org; OpenAPI 3.x specification; W3C Verifiable Credentials Data Model
  - updated:: 2026-06-13
