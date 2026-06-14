public:: true

# Experiment Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ca24087b3836a9cf4e3a2a523ab3c1f24e74909d2e08a03b4692b8b91d86995f",
  "@type": "Page",
  "vc:slug": "experiment-tracking",
  "title": "Experiment Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:model-training",
      "vc:label": "Model Training"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:open-source",
      "vc:label": "Open Source"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    },
    {
      "@id": "urn:visionflow:linked:https-mlflow-org-docs-latest-tracking-html",
      "vc:label": "https://mlflow.org/docs/latest/tracking.html"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-mlops",
      "vc:label": "https://en.wikipedia.org/wiki/MLOps"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Experiment Tracking"
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
  "@id": "urn:ngm:class:empirical-experimental-design-tracking",
  "@type": "Class",
  "label": "Experiment Tracking",
  "definition": "Experiment tracking is the practice of recording the configuration, code, data, and results of machine learning experiments so they can be compared and reproduced, enabling teams to audit, iterate, and roll back to prior model states. It is a core discipline within MLOps.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:mlops",
    "label": "MLOps"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:hyperparameter-logging",
        "label": "Hyperparameter Logging"
      },
      {
        "@id": "urn:ngm:class:metric-logging",
        "label": "Metric Logging"
      },
      {
        "@id": "urn:ngm:class:artifact-versioning",
        "label": "Artifact Versioning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Data Versioning"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:model-comparison",
        "label": "Model Comparison"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:continuous-training",
        "label": "Continuous Training"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:scientific-method",
        "label": "Scientific Method"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:mlflow",
        "label": "MLflow"
      },
      {
        "@id": "urn:ngm:class:weights-and-biases",
        "label": "Weights and Biases"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:collaborative-research",
        "label": "Collaborative Research"
      },
      {
        "@id": "urn:ngm:class:model-governance",
        "label": "Model Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ad-hoc-experimentation",
        "label": "Ad-hoc Experimentation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      },
      {
        "@id": "urn:ngm:class:ci-cd-pipeline",
        "label": "CI/CD Pipeline"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ml-experiment-management",
      "label": "ML Experiment Management"
    },
    {
      "@id": "urn:ngm:class:run-tracking",
      "label": "Run Tracking"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:experiment-tracking:1fe14f0aed73",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ca24087b3836a9cf4e3a2a523ab3c1f24e74909d2e08a03b4692b8b91d86995f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Model Training]]",
      "resolved": "urn:visionflow:linked:model-training",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Source]]",
      "resolved": "urn:visionflow:linked:open-source",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps]]",
      "resolved": "urn:visionflow:linked:mlops",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://mlflow.org/docs/latest/tracking.html]]",
      "resolved": "urn:visionflow:linked:https-mlflow-org-docs-latest-tracking-html",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/MLOps]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-mlops",
      "kind": "StubLink"
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
  - Experiment tracking is the practice of recording the configuration, code, data, and results of machine learning experiments so they can be compared and reproduced. It is a part of MLOps.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ExperimentTracking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[MLOps]]
  - bridges-to:: [[Open Source]]
  - requires:: [[Model Training]]
  - enables:: [[Machine Learning Discipline]]

- ### Content
  - Experiment tracking systems log the parameters, metrics, model versions, and artefacts produced during training runs. This record allows teams to compare runs, understand which changes improved results, and reproduce earlier work.
  - Tracking is often integrated into training scripts so that data is captured automatically. It supports collaboration by giving teams a shared view of progress and a history of how a model was developed.

- ### Provenance
  - sources:: [[https://mlflow.org/docs/latest/tracking.html]], [[https://en.wikipedia.org/wiki/MLOps]]
  - migration-date:: 2026-05-29T00:00:00Z
