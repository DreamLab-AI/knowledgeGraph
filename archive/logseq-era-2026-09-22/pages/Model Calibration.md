public:: true

# Model Calibration

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:model-calibration",
  "@type": "Page",
  "title": "Model Calibration",
  "vc:slug": "model-calibration",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-calibration",
  "@type": "Class",
  "label": "Model Calibration",
  "definition": "Model calibration is the process of ensuring that the probabilities a predictive model outputs reflect the true likelihood of outcomes, so that, for example, events predicted with 70 per cent confidence occur roughly 70 per cent of the time. A well-calibrated model produces reliable confidence estimates, which is essential when predictions inform risk-sensitive decisions. Calibration is assessed with reliability diagrams and metrics such as expected calibration error, and corrected with post-hoc techniques that adjust a model's output probabilities without changing its rankings.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
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
  - [[Model Calibration]] is part of [[Model Evaluation]].
  - It complements [[Uncertainty Quantification]].
  - It supports [[Trustworthy AI]].
  - It applies to any [[Probabilistic Model]].
- ### Overview
  - Calibration distinguishes a confident model from a correct one.
  - Modern deep networks are often overconfident and benefit from recalibration.
  - Reliability diagrams plot predicted confidence against observed accuracy.
  - Post-hoc methods such as temperature scaling adjust the logits of a trained model.
- ### Mechanisms
  - Expected calibration error summarises the gap between confidence and accuracy.
  - Temperature scaling rescales logits with a single learned parameter.
  - Isotonic and Platt-style mappings recalibrate output probabilities.
  - Calibration is preserved or broken across dataset shift.
  - Proper scoring rules align training objectives with calibration.
- ### Applications
  - Medical diagnosis where confidence guides clinician trust.
  - Autonomous systems weighing risk under uncertainty.
  - Fraud and credit scoring requiring meaningful probabilities.
  - Ensemble and selective-prediction pipelines that abstain when uncertain.
- ### Relationships
  - partOf:: [[Model Evaluation]]
  - relatedTo:: [[Uncertainty Quantification]]
  - relatedTo:: [[Probabilistic Model]]
  - relatedTo:: [[Model Evaluation]]
  - relatedTo:: [[Loss Function]]
  - enables:: [[Trustworthy AI]]
  - enables:: [[Decision Making]]
  - bridgesTo:: [[Uncertainty Quantification]]
  - supports:: [[Model Deployment]]
  - supports:: [[Trustworthy AI]]
  - requires:: [[Model Evaluation]]
  - uses:: [[Loss Function]]
  - dependsOn:: [[Probabilistic Model]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
