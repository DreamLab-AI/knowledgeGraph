schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SchemaRegistry
legacy_uri:: urn:visionclaw:concept:spatial-computing:schema-registry
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-2fd3f49877b3"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SchemaRegistry"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10028"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Schema Registry"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:schema-registry"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:schema-registry"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8c7a6dacdcfae343414c5fbf7b4c9e8c25aa2064d081b19da74b0265d2a0ccd6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:schema-registry",
  "@type": "OntologyClass",
  "label": "Schema Registry",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:data-management",
      "vc:label": "Data Management"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:8c7a6dacdcfae343414c5fbf7b4c9e8c25aa2064d081b19da74b0265d2a0ccd6"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8c7a6dacdcfae343414c5fbf7b4c9e8c25aa2064d081b19da74b0265d2a0ccd6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A centralized service that stores, validates, and manages data schemas for event streaming and API contracts, ensuring compatibility and evolution of data formats across distributed metaverse systems and microservices.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:schema-evolution",
      "vc:label": "Schema Evolution"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8c7a6dacdcfae343414c5fbf7b4c9e8c25aa2064d081b19da74b0265d2a0ccd6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
