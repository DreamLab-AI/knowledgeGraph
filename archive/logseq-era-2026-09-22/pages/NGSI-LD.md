public:: true

# NGSI-LD
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:848bea5bfac9304a89a4c5c6bd4f11984a6e368a9b052e85ac489107b9deac20",
  "@type": "Page",
  "vc:slug": "ngsi-ld",
  "title": "NGSI-LD",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:linked-data",
      "vc:label": "Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:data-aggregation",
      "vc:label": "Data Aggregation"
    },
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NGSI-LD"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ngsi-ld",
  "@type": "Class",
  "label": "NGSI-LD",
  "definition": "NGSI-LD is an ETSI standard information model and API for representing context information as linked data using entities, properties and relationships. It is widely used in smart city and Internet of Things platforms.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linked-data",
      "label": "Linked Data"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-aggregation",
        "label": "Data Aggregation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ngsi-ld:e4882ea1eef2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:848bea5bfac9304a89a4c5c6bd4f11984a6e368a9b052e85ac489107b9deac20"
  },
  "vc:resolutions": [
    {
      "raw": "[[Linked Data]]",
      "resolved": "urn:visionflow:linked:linked-data",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Aggregation]]",
      "resolved": "urn:visionflow:linked:data-aggregation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Internet of Things]]",
      "resolved": "urn:visionflow:linked:internet-of-things",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - NGSI-LD is an ETSI standard information model and API for representing context information as linked data using entities, properties and relationships. It is widely used in smart city and Internet of Things platforms.

- ### Semantic Classification
  - owl-class:: iot:NGSILD
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Linked Data]]
  - bridges-to:: [[Internet of Things]]
  - requires:: [[Linked Data]]
  - enables:: [[Data Aggregation]]

- ### Content
  - NGSI-LD defines a graph based data model in which entities carry typed properties and relationships, aligned with JSON-LD and RDF semantics. The accompanying API specifies operations for creating, querying and subscribing to context data across distributed sources.
  - Standardised by ETSI and adopted by the FIWARE community, NGSI-LD provides interoperability for context brokers in smart city and industrial IoT deployments. Its linked data foundation lets applications combine local context with external vocabularies and knowledge graphs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
