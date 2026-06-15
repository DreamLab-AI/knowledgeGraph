public:: true

# Capability Forecasting

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:capability-forecasting",
  "@type": "Page",
  "title": "Capability Forecasting",
  "vc:slug": "capability-forecasting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:capability-forecasting",
  "@type": "Class",
  "label": "Capability Forecasting",
  "definition": "Capability forecasting is the practice of predicting the future capabilities of AI systems before they are built or deployed, typically by extrapolating from scaling laws, benchmark trends, and historical progress. It aims to anticipate when models will reach particular performance thresholds so that safety, governance, and deployment decisions can be made proactively. Forecasts are inherently uncertain because of emergent behaviour and discontinuous jumps in capability.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance",
      "label": "AI Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards",
        "label": "Evaluation benchmarks and leaderboards"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      },
      {
        "@id": "urn:ngm:class:capability-evaluation",
        "label": "Capability Evaluation"
      },
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:alignment",
        "label": "Alignment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Capability forecasting is the practice of predicting the future capabilities of AI systems before they are built or deployed, typically by extrapolating from scaling laws, benchmark trends, and historical progress. It aims to anticipate when models will reach particular performance thresholds so that safety, governance, and deployment decisions can be made proactively. Forecasts are inherently uncertain because of emergent behaviour and discontinuous jumps in capability.
  - [[AI Governance]] [[Scaling Laws]] [[Model Evaluation]] [[AI Safety]]
- ### Overview
  - Capability forecasting treats AI progress as partly predictable, exploiting smooth scaling relationships between compute, data, and loss.
  - It supports anticipatory governance by estimating when risky capabilities might appear.
  - Emergent abilities and benchmark saturation complicate forecasts, so practitioners couple quantitative extrapolation with expert judgement.
- ### Key aspects
  - Scaling-law extrapolation projects loss and downstream performance from compute and data trends.
  - Benchmark trend analysis tracks how task performance improves across model generations.
  - Threshold estimation predicts when specific dangerous or transformative capabilities emerge.
  - Uncertainty quantification communicates the confidence and failure modes of a forecast.
- ### Applications
  - Informing AI safety and deployment timelines for frontier models.
  - Guiding regulatory and governance interventions ahead of capability jumps.
  - Prioritising evaluation and red-teaming effort for anticipated capabilities.
- ### Relationships
  - partOf:: [[AI Governance]]
  - uses:: [[Scaling Laws]]
  - uses:: [[Model Evaluation]]
  - requires:: [[Scaling Laws]]
  - requires:: [[Evaluation benchmarks and leaderboards]]
  - supports:: [[AI Safety]]
  - supports:: [[Risk Assessment]]
  - enables:: [[Risk Assessment]]
  - enables:: [[AI Safety]]
  - relatedTo:: [[Emergent Capabilities]]
  - relatedTo:: [[Capability Evaluation]]
  - relatedTo:: [[Foundation Model]]
  - relatedTo:: [[Alignment]]
  - contrastsWith:: [[Emergent Capabilities]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
