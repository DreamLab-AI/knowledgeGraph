public:: true

# Black-Box Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:black-box-model",
  "@type": "Page",
  "title": "Black-Box Model",
  "vc:slug": "black-box-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:black-box-model",
  "@type": "Class",
  "label": "Black-Box Model",
  "definition": "A black-box model is a predictive system whose internal decision logic is opaque or too complex for a human to inspect directly, so it can only be understood through its inputs and outputs. Many high-performing machine-learning systems, such as deep neural networks and large ensembles, are black-box in nature, trading interpretability for accuracy. This opacity motivates post-hoc explanation techniques and contrasts with inherently interpretable white-box models where the reasoning is transparent.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-interpretability",
      "label": "Model Interpretability"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      },
      {
        "@id": "urn:ngm:class:model-transparency",
        "label": "Model Transparency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:model-interpretability",
        "label": "Model Interpretability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:feature-importance",
        "label": "Feature Importance"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:bias",
        "label": "Bias"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:shap",
        "label": "SHAP"
      },
      {
        "@id": "urn:ngm:class:lime",
        "label": "LIME"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
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
  - A black-box model is a predictive system whose internal decision logic is opaque or too complex for a human to inspect directly, so it can only be understood through its inputs and outputs. Many high-performing machine-learning systems, such as deep neural networks and large ensembles, are black-box in nature, trading interpretability for accuracy. This opacity motivates post-hoc explanation techniques and contrasts with inherently interpretable white-box models where the reasoning is transparent.
  - Related concepts: [[Model Interpretability]] [[Explainable AI]] [[Deep Learning]] [[Neural Network]] [[Model Transparency]]
- ### Overview
  - A black-box model can be queried for outputs but offers little visibility into how those outputs are produced.
  - High-capacity learners such as deep networks and large ensembles typically fall into this category.
  - Their opacity raises concerns around trust, accountability and regulatory acceptance.
- ### Key aspects
  - Predictive power often comes at the cost of human-understandable internal logic.
  - Post-hoc explanation methods approximate the model's behaviour after the fact.
  - Opacity complicates debugging, auditing and bias detection.
  - It stands in contrast to inherently interpretable white-box models.
- ### Applications
  - Deep [[Neural Network]] systems used for vision and language tasks.
  - Explanation via [[SHAP]] and [[LIME]] to recover [[Feature Importance]].
  - [[Explainable AI]] programmes targeting [[Model Transparency]].
  - Governance reviews assessing [[Bias]], [[Fairness]] and [[Accountability]].
- ### Relationships
  - subClassOf:: [[Model Interpretability]]
  - contrastsWith:: [[Explainable AI]]
  - contrastsWith:: [[Interpretability]]
  - contrastsWith:: [[Model Transparency]]
  - requires:: [[Explainable AI]]
  - requires:: [[Model Interpretability]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Neural Network]]
  - relatedTo:: [[Feature Importance]]
  - relatedTo:: [[Explainability]]
  - relatedTo:: [[Bias]]
  - relatedTo:: [[Fairness]]
  - bridgesTo:: [[SHAP]]
  - bridgesTo:: [[LIME]]
  - dependsOn:: [[Trust]]
  - dependsOn:: [[Accountability]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
