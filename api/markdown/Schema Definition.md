public:: true

# Schema Definition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:schema-definition",
  "@type": "Page",
  "vc:slug": "schema-definition",
  "title": "Schema Definition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:schema-definition",
  "@type": "Class",
  "label": "Schema Definition",
  "definition": "A Schema Definition is a formal, machine-readable specification of the structure, data types, constraints, and relationships that govern a dataset, message format, document, or knowledge representation, serving as a contract between data producers and consumers. Schema languages include W3C XML Schema Definition (XSD), JSON Schema (for JSON documents), OWL/RDFS (for ontologies over RDF graphs), SHACL and ShEx (for RDF graph shape constraints), Protocol Buffers and Apache Avro (for binary-serialised messages), OpenAPI (for REST API request/response bodies), and GraphQL SDL (for graph API types). A schema definition enables automated validation, code generation, documentation, and inter-system interoperability; in knowledge-graph contexts, the schema defines classes, properties, cardinality constraints, and axioms that allow OWL-based reasoning over the graph.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-format-standard",
      "label": "Data Format Standard"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-schema",
        "label": "JSON Schema"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:api-contract",
        "label": "API Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:xml-schema-definition",
        "label": "XML Schema Definition"
      },
      {
        "@id": "urn:ngm:class:protocol-buffers",
        "label": "Protocol Buffers"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web Linked Data Standard"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      },
      {
        "@id": "urn:ngm:class:owl-class-hierarchy",
        "label": "OWL Class Hierarchy"
      },
      {
        "@id": "urn:ngm:class:contract-testing",
        "label": "Contract Testing"
      },
      {
        "@id": "urn:ngm:class:schema-registry",
        "label": "Schema Registry"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-type",
        "label": "Data Type"
      },
      {
        "@id": "urn:ngm:class:namespace",
        "label": "Namespace"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-schema",
      "label": "Data Schema"
    },
    {
      "@id": "urn:ngm:class:formal-schema",
      "label": "Formal Schema"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A Schema Definition is a formal specification that declares the structural contract for a data artefact — its field names, data types, cardinality constraints, and relational axioms — enabling automated validation, code generation, and [[Linked Data]] interoperability, and forming the foundational layer of [[Knowledge Graph]] construction and [[Ontology]] design.

- ### Relationships
  - Schema Definition is a specialisation of [[Data Format Standard]] and the architectural foundation for both operational data exchange and semantic knowledge representation. In operational systems, JSON Schema and OpenAPI schema objects govern REST API payloads, whilst Protocol Buffers/Avro schemas govern streaming and RPC message shapes. In semantic-web contexts, [[RDF]] class and property declarations form the schema layer, enriched by [[OWL Class Hierarchy]] axioms for reasoning and SHACL shapes for validation. [[JSON-LD]] connects JSON Schema to RDF by providing `@context` mappings. [[SPARQL]] query endpoints rely on schema knowledge to optimise query plans. Schema Definitions collectively make [[Linked Data]] and [[Semantic Web Linked Data Standard]] infrastructure interoperable across organisations.

- ### Content
  - Schema languages occupy a spectrum from structural (JSON Schema, XSD) to semantic (OWL, RDFS) to constraint-based (SHACL, ShEx). Structural schemas specify the shape and type of data — which fields exist, whether they are optional, what their primitive types are — and generate validation errors for conformance failures. Semantic schemas (ontologies) additionally define class hierarchies, property domains and ranges, and logical axioms (transitivity, symmetry, functional constraints) that enable automated inference: if A is a subclass of B and C is an instance of A, a reasoner can infer C is also an instance of B.

  - In software engineering, schema definitions serve as the authoritative source of truth for code generation tooling (protoc, openapi-generator, json-schema-to-typescript), API documentation, and contract testing frameworks. The schema-first design approach — specifying the schema before writing implementation code — promotes API stability, facilitates consumer-driven contract testing, and enables teams to evolve systems independently as long as schema compatibility is maintained.

  - In knowledge graph engineering, the schema — also called a TBox (Terminological Box) in description logic terminology — defines the vocabulary and structural rules governing the ABox (Assertional Box) of individual facts. Expressive schema languages such as OWL 2 DL support reasoning services: classification (computing the implicit subsumption hierarchy), consistency checking (detecting contradictory axioms), and instance retrieval (finding all individuals satisfying a complex class expression). These reasoning capabilities distinguish knowledge graphs from plain databases and enable automatic knowledge discovery.

  - Schema governance — versioning, deprecation, compatibility rules — is an operationally critical concern in any distributed data system. Backwards-compatible schema evolution (adding optional fields, broadening type ranges) allows rolling upgrades; breaking changes (removing fields, tightening constraints) require coordinated migration. Schema registries (Confluent Schema Registry, AWS Glue Schema Registry) enforce compatibility policies on schema updates and provide a centralised catalogue for data consumers to discover and validate message shapes at runtime.

