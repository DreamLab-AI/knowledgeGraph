public:: true

# Training Dataset Metadata
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:58ad47761f710e84368e70a7bd8fee20ddfdce06c718f31dc1faa17b6727d03a",
  "@type": "Page",
  "vc:slug": "training-dataset-metadata",
  "title": "Training Dataset Metadata",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:model-architecture",
      "vc:label": "ModelArchitecture"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Training Dataset Metadata"
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
  "@id": "urn:ngm:class:training-dataset-metadata",
  "@type": "Class",
  "label": "Training Dataset Metadata",
  "definition": "A training dataset metadata component in the Artificial Intelligence domain that required by AiModelCard.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Category)"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:training-dataset-metadata:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:58ad47761f710e84368e70a7bd8fee20ddfdce06c718f31dc1faa17b6727d03a"
  },
  "vc:resolutions": [
    {
      "raw": "[[ModelArchitecture]]",
      "resolved": "urn:visionflow:owl:class:model-architecture",
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
  - A training dataset metadata component in the Artificial Intelligence domain that required by AiModelCard.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TrainingDatasetMetadata
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[ModelArchitecture]]

- ### Content
  TrainingDatasetMetadata — content pending enrichment.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
