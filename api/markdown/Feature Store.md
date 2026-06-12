public:: true

# Feature Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:40d82aa13ba8fa6765dc7fc05465aff283505e13525d5a5398d1cc4d7549cfcb",
  "@type": "Page",
  "vc:slug": "feature-store",
  "title": "Feature Store",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-engineering",
      "vc:label": "Data Engineering"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Feature Store"
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
  "@id": "urn:ngm:class:feature-store",
  "@type": "Class",
  "label": "Feature Store",
  "definition": "A centralised repository for storing, managing, versioning, and serving machine learning features at scale. It ensures point-in-time consistency between training and online inference, prevents training-serving skew, and enables cross-team feature reuse so that features computed once can be shared across multiple models and pipelines.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    },
    {
      "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
      "label": "Machine Learning Pipeline"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:machine-learning-discipline-pipeline", "label": "Machine Learning Pipeline"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"},
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:feature-store:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:40d82aa13ba8fa6765dc7fc05465aff283505e13525d5a5398d1cc4d7549cfcb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Engineering]]",
      "resolved": "urn:visionflow:linked:data-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps]]",
      "resolved": "urn:visionflow:linked:mlops",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
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
  - Centralized repository for storing, managing, and serving machine learning features, ensuring consistency between training and inference while enabling feature reuse across models.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FeatureStore
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]], [[Digital Twin]]

- ### Content
  A Feature Store acts as the central hub of an ML platform, bridging the gap between data engineering and model development. It typically exposes two interfaces: an offline store (backed by a data lake or warehouse) for batch training jobs, and an online store (backed by a low-latency key-value database) for real-time inference. By materialising and versioning feature transformations centrally, teams avoid duplicating transformation logic across notebooks and services, which is the primary source of training-serving skew.

  Modern feature stores also support time-travel queries, allowing models to be trained on the exact feature values that would have been available at a given historical timestamp — a critical safeguard for financial, fraud-detection, and forecasting applications.

- ### Provenance
  - sources:: [[MLOps]], [[Data Engineering]]
  - migration-date:: 2026-04-26T00:00:00Z
