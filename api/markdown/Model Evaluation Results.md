public:: true

# Model Evaluation Results
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c52ce19217be2cb5780b86c85a2236d99aa5030c77d4ec30137fc8807b4255fb",
  "@type": "Page",
  "vc:slug": "model-evaluation-results",
  "title": "Model Evaluation Results",
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
      "vc:value": "AI-4008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Evaluation Results"
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
  "@id": "urn:ngm:class:model-evaluation-results",
  "@type": "Class",
  "label": "Model Evaluation Results",
  "definition": "Structured outputs produced during the assessment of a machine learning model's predictive performance, encompassing quantitative metrics such as accuracy, precision, recall, F1 score, and AUC alongside qualitative analyses. These results form the evidentiary basis for model selection, regulatory compliance disclosures, and AI model card documentation.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:ai-model-card", "label": "AI Model Card"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:confusion-matrix", "label": "Confusion Matrix"},
      {"@id": "urn:ngm:class:f1-score", "label": "F1 Score"},
      {"@id": "urn:ngm:class:accuracy", "label": "Accuracy"},
      {"@id": "urn:ngm:class:auc", "label": "AUC"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation benchmarks and leaderboards"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"},
      {"@id": "urn:ngm:class:performance-benchmarks", "label": "Performance Benchmarks"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:model-architecture", "label": "Model Architecture"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:model-evaluation-results:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c52ce19217be2cb5780b86c85a2236d99aa5030c77d4ec30137fc8807b4255fb"
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
  - A model evaluation results component in the Artificial Intelligence domain that required by AiModelCard.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelEvaluationResults
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[ModelArchitecture]]

- ### Content
  Model Evaluation Results are the empirical outputs of assessing a trained machine learning model against held-out test data or standardised benchmarks. They typically include a suite of metrics — accuracy, F1 score, AUC-ROC, confusion matrix entries — as well as confidence intervals, calibration curves, and disaggregated performance breakdowns across population subgroups. These outputs are mandatory inputs for AI Model Cards and regulatory documentation under frameworks such as the EU AI Act.

  Evaluation results must be interpreted in relation to the evaluation protocol: dataset provenance, train/test split methodology, class imbalance handling, and whether the benchmark reflects real-world deployment distribution. Misleading or incomplete results caused by data leakage or cherry-picked benchmarks are a significant source of AI governance failures. Standardised reporting via benchmark leaderboards and reproducibility checklists helps ensure comparability across model families and research groups.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
