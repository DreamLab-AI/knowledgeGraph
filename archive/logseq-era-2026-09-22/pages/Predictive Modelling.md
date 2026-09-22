public:: true

# Predictive Modelling

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:predictive-modelling", "@type": "Page", "title": "Predictive Modelling", "vc:slug": "predictive-modelling", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:predictive-modelling",
  "@type": "Class",
  "label": "Predictive Modelling",
  "definition": "Predictive modelling is the practice of building statistical or machine-learning models that estimate unknown or future outcomes from observed input features. It spans data preparation, feature engineering, model training and validation, and is evaluated on its generalisation to unseen data. Predictive modelling powers forecasting, classification and risk assessment across applied domains.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:statistical-modelling",
      "label": "Statistical Modelling"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      },
      {
        "@id": "urn:ngm:class:demand-forecasting",
        "label": "Demand Forecasting"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  - Building [[Machine Learning]] models to estimate unknown or future outcomes.
  - Relies on [[Feature Engineering]] and [[Model Training]].
  - Evaluated by generalisation through validation.
- ### Overview
  - Encompasses supervised methods such as [[Regression]] and [[Classification]].
  - Performance depends on data quality, features and disciplined evaluation.
  - Deployed for forecasting and decision support across sectors.
- ### Key aspects
  - Feature engineering shapes the predictive signal available to a model.
  - Training fits parameters to historical data.
  - Validation guards against overfitting and estimates real-world error.
  - Calibration and monitoring sustain accuracy after deployment.
- ### Applications
  - Demand and time-series forecasting.
  - Risk scoring and anomaly detection.
  - Classification of outcomes from feature data.
- ### Relationships
  - subClassOf:: [[Machine Learning]]
  - partOf:: [[Machine Learning]]
  - uses:: [[Feature Engineering]]
  - uses:: [[Supervised Learning]]
  - requires:: [[Model Training]]
  - enables:: [[Predictive Analytics]]
  - enables:: [[Demand Forecasting]]
  - enables:: [[Risk Assessment]]
  - dependsOn:: [[Regression]]
  - dependsOn:: [[Classification]]
  - supports:: [[Anomaly Detection]]
  - relatedTo:: [[Predictive Analytics]]
  - relatedTo:: [[Machine Learning]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
