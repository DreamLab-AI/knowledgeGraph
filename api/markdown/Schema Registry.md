public:: true

# Schema Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8c7a6dacdcfae343414c5fbf7b4c9e8c25aa2064d081b19da74b0265d2a0ccd6",
  "@type": "Page",
  "vc:slug": "schema-registry",
  "title": "Schema Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:schema-evolution",
      "vc:label": "Schema Evolution"
    },
    {
      "@id": "urn:visionflow:owl:class:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10028"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Schema Registry"
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
  "@id": "urn:ngm:class:schema-registry",
  "@type": "Class",
  "label": "Schema Registry",
  "definition": "A centralized service that stores, validates, and manages data schemas for event streaming and API contracts, ensuring compatibility and controlled evolution of data formats across distributed microservices and event-driven architectures.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:sc-standards-and-interop",
    "label": "Standards and Interoperability"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:schema-versioning",
        "label": "Schema Versioning"
      },
      {
        "@id": "urn:ngm:class:compatibility-checker",
        "label": "Compatibility Checker"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:event-streaming-platform",
        "label": "Event Streaming Platform"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:serialization-format",
        "label": "Serialization Format"
      },
      {
        "@id": "urn:ngm:class:api-contract",
        "label": "API Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:schema-evolution",
        "label": "Schema Evolution"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:consumer-producer-decoupling",
        "label": "Consumer-Producer Decoupling"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:avro",
        "label": "Apache Avro"
      },
      {
        "@id": "urn:ngm:class:protobuf",
        "label": "Protocol Buffers"
      },
      {
        "@id": "urn:ngm:class:json-schema",
        "label": "JSON Schema"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:backward-compatibility",
        "label": "Backward Compatibility"
      },
      {
        "@id": "urn:ngm:class:forward-compatibility",
        "label": "Forward Compatibility"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:apache-kafka",
        "label": "Apache Kafka"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:document-store",
        "label": "Document Store"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:etl",
        "label": "ETL"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:schema-store",
      "label": "Schema Store"
    },
    {
      "@id": "urn:ngm:class:metadata-registry",
      "label": "Metadata Registry"
    }
  ],
  "quality": 0.70,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:schema-registry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8c7a6dacdcfae343414c5fbf7b4c9e8c25aa2064d081b19da74b0265d2a0ccd6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Schema Evolution]]",
      "resolved": "urn:visionflow:linked:schema-evolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:owl:class:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
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
  - A centralized service that stores, validates, and manages data schemas for event streaming and API contracts, ensuring compatibility and evolution of data formats across distributed metaverse systems and microservices.

- ### Semantic Classification
  - owl-class:: spatial-computing:SchemaRegistry
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Management]]
  - enables:: [[Schema Evolution]]

- ### Content

  - #### Key Features
		- Schema versioning and compatibility checks
		- Avro, JSON Schema, Protobuf support
		- Backward/forward compatibility rules
		- Producer-consumer contract enforcement
		- Schema evolution without breaking changes
  - #### Implementations
		- Confluent Schema Registry for Kafka
		- AWS Glue Schema Registry
		- Apicurio Registry open source
		- Azure Schema Registry
		- Google Cloud Pub/Sub schemas

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
