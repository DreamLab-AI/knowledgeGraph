public:: true

# Bias And Fairness

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bias-and-fairness",
  "@type": "Page",
  "title": "Bias And Fairness",
  "vc:slug": "bias-and-fairness",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bias-and-fairness",
  "@type": "Class",
  "label": "Bias And Fairness",
  "definition": "Bias and Fairness is the area of responsible AI concerned with detecting, measuring, and mitigating systematic disparities in how machine learning systems treat individuals and groups. It addresses biases that enter through training data, model design, and deployment context, and it formalises competing notions of fairness such as demographic parity, equalised odds, and individual fairness. The goal is to ensure that automated decisions do not unjustifiably disadvantage protected populations.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:responsible-ai",
      "label": "Responsible AI"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      },
      {
        "@id": "urn:ngm:class:bias",
        "label": "Bias"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:dataset",
        "label": "Dataset"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-ai-collaboration",
        "label": "Human-AI Collaboration"
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
  - [[Bias And Fairness]] detects and mitigates systematic disparity in machine learning, building on [[Algorithmic Bias]], [[Fairness]], [[Model Evaluation]] and [[Responsible AI]].
- ### Overview
  - Bias and fairness concerns the ways in which automated systems can reproduce or amplify societal inequities. Bias enters at every stage: skewed or unrepresentative training [[Dataset]]s, proxy variables correlated with protected attributes, modelling choices, and feedback loops in deployment.
  - Fairness is not a single objective; multiple mathematical criteria exist and several are mutually incompatible, forcing explicit, contestable value judgements about which disparities matter and to whom.
- ### Key aspects
  - Sources of bias: historical, representation, measurement, and aggregation bias.
  - Group fairness criteria: demographic parity, equalised odds, predictive parity.
  - Individual fairness: similar individuals receive similar outcomes.
  - Impossibility results showing fairness criteria cannot all hold simultaneously.
  - Protected attributes and the legal frameworks governing discrimination.
- ### Mechanisms
  - Pre-processing: reweighting, resampling, and representation repair of data.
  - In-processing: fairness-constrained or adversarial training objectives.
  - Post-processing: threshold adjustment per group to equalise error rates.
  - Auditing and disparate-impact testing through [[Model Evaluation]].
- ### Applications
  - Fair credit scoring, hiring, and lending decisions.
  - Equitable healthcare risk models and clinical decision support.
  - Content moderation and recommendation systems.
  - Regulatory compliance under [[AI Governance]] regimes.
- ### Relationships
  - relatedTo:: [[Algorithmic Bias]]
  - relatedTo:: [[Fairness]]
  - relatedTo:: [[Bias]]
  - relatedTo:: [[AI Ethics]]
  - partOf:: [[Responsible AI]]
  - requires:: [[Model Evaluation]]
  - requires:: [[Data Quality]]
  - enables:: [[Explainability]]
  - enables:: [[Transparency]]
  - supports:: [[Accountability]]
  - supports:: [[AI Governance]]
  - dependsOn:: [[Dataset]]
  - uses:: [[Model Evaluation]]
  - bridgesTo:: [[Human-AI Collaboration]]
- ### Provenance
  - source:: GapMaterialisation
  - updated:: 2026-06-15
