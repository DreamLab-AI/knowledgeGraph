public:: true

# True Negative

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:true-negative",
  "@type": "Page",
  "title": "True Negative",
  "vc:slug": "true-negative",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:true-negative",
  "@type": "Class",
  "label": "True Negative",
  "definition": "A true negative is an outcome in binary classification where the model correctly predicts the negative class for an instance that is genuinely negative. It is one of the four cells of the confusion matrix and contributes to metrics such as specificity and accuracy. Counting true negatives is essential for evaluating how well a classifier avoids false alarms on negative cases.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:confusion-matrix",
      "label": "Confusion Matrix"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:confusion-matrix",
      "label": "Confusion Matrix"
    },
    "hasPart": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:evaluation-metric",
        "label": "Evaluation Metric"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:true-positive",
        "label": "True Positive"
      },
      {
        "@id": "urn:ngm:class:false-positive",
        "label": "False Positive"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:specificity",
        "label": "Specificity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sensitivity",
        "label": "Sensitivity"
      },
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      },
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
      },
      {
        "@id": "urn:ngm:class:threshold-selection",
        "label": "Threshold Selection"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:statistical-inference",
        "label": "Statistical Inference"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A true negative is a cell of the [[Confusion Matrix]] used in [[Classification]] evaluation.
  - It contrasts with the [[False Positive]] and the [[True Positive]].
  - It is the numerator in [[Specificity]] and contributes to overall [[Model Evaluation]].
- ### Overview
  - When the ground truth is negative and the prediction is negative, the case is a true negative, representing a correctly rejected instance.
  - Alongside true positives, false positives and false negatives it fully characterises a binary classifier's behaviour.
  - Specificity is the proportion of actual negatives correctly identified, so true negatives directly measure resistance to false alarms.
- ### Key aspects
  - Correct rejection of a genuinely negative instance.
  - One of four confusion-matrix outcomes for binary tasks.
  - Denominator component of specificity and accuracy.
  - Sensitive to the chosen decision threshold.
- ### Applications
  - Assessing screening tests that should not over-flag healthy cases.
  - Measuring spam filters that correctly pass legitimate mail.
  - Quantifying anomaly detectors' false-alarm resistance.
- ### Relationships
  - partOf:: [[Confusion Matrix]]
  - hasPart:: [[Classification]]
  - uses:: [[Model Evaluation]]
  - uses:: [[Evaluation Metric]]
  - contrastsWith:: [[True Positive]]
  - contrastsWith:: [[False Positive]]
  - enables:: [[Specificity]]
  - supports:: [[Supervised Learning]]
  - relatedTo:: [[Sensitivity]]
  - relatedTo:: [[Precision]]
  - relatedTo:: [[Recall]]
  - relatedTo:: [[Threshold Selection]]
  - bridgesTo:: [[Statistical Inference]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
