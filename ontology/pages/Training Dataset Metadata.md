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
  "definition": "Training dataset metadata is structured descriptive information about the data used to train a machine learning model, including its provenance, size, collection method, class distribution, known biases, and licensing terms. This metadata is a core component of AI model cards and datasheets, enabling reproducibility, fairness auditing, and regulatory accountability. Thorough dataset metadata underpins model transparency and responsible AI governance.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:ai-model-card", "label": "AI Model Card"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:data-versioning", "label": "Data Versioning"},
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"},
      {"@id": "urn:ngm:class:metadata-schema", "label": "Metadata Schema"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-transparency", "label": "Model Transparency"},
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"},
      {"@id": "urn:ngm:class:model-evaluation-results", "label": "Model Evaluation Results"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:provenance-standard", "label": "Provenance Standard"},
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"},
      {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}
    ]
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
  Training dataset metadata documents the origins, composition, and limitations of the data used to train a model. Fields typically include dataset name and version, collection date range, geographic or demographic scope, labelling methodology, inter-annotator agreement, and known class imbalances.

  Accurate metadata enables downstream teams to assess whether a model is appropriate for a given deployment context. Regulators under the EU AI Act and equivalent frameworks increasingly mandate structured dataset documentation as part of technical file requirements for high-risk AI systems.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
