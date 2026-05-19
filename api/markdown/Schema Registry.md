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
  "definition": "A centralized service that stores, validates, and manages data schemas for event streaming and API contracts, ensuring compatibility and evolution of data formats across distributed metaverse systems and microservices.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:schema-evolution",
        "label": "Schema Evolution"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
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
