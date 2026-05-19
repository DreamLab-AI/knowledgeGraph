schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#TrainingDatasetMetadata
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:training-dataset-metadata
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-ac2773f0dedc"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#TrainingDatasetMetadata"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1001"
    },
    {
      "vc:key": "maturity",
      "vc:value": "emerging"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Training Dataset Metadata"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:training-dataset-metadata"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:training-dataset-metadata"
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
    "@id": "urn:visionflow:page:58ad47761f710e84368e70a7bd8fee20ddfdce06c718f31dc1faa17b6727d03a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "artificial-intelligence"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:58ad47761f710e84368e70a7bd8fee20ddfdce06c718f31dc1faa17b6727d03a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
