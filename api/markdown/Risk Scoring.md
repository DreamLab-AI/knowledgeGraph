public:: true

# Risk Scoring

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:risk-scoring",
  "@type": "Page",
  "title": "Risk Scoring",
  "vc:slug": "risk-scoring",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-scoring",
  "@type": "Class",
  "label": "Risk Scoring",
  "definition": "Risk scoring is the quantitative practice of assigning a numerical value to an entity, transaction or event to express the likelihood and potential severity of an adverse outcome such as credit default, fraud or money laundering. Scores are derived from statistical and machine-learning models trained on historical data and behavioural features, producing a calibrated probability or rank that informs automated and human decisions. In finance it underpins lending, underwriting, transaction monitoring and regulatory compliance workflows.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:risk-management",
      "label": "Risk Management"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:decision-tree",
        "label": "Decision Tree"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:kyc",
        "label": "KYC"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
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
- Risk scoring assigns a calibrated numerical value expressing the probability and severity of an adverse outcome, drawing on [[Machine Learning]], [[Predictive Analytics]] and [[Feature Engineering]] applied to historical and behavioural [[Data]].
- It operationalises [[Risk Management]] by turning qualitative judgement into reproducible, auditable scores.
- ### Overview
- A risk score condenses many predictive signals into a single ordinal or probabilistic value, enabling consistent ranking and threshold-based decisions across large populations.
- Models range from interpretable scorecards and [[Decision Tree]] ensembles to deep networks, balancing predictive power against the explainability demanded by [[Regulatory Compliance]].
- Scores are continuously recalibrated against realised outcomes to control drift and maintain accuracy.
- ### Key aspects
- Feature selection and engineering that capture predictive behaviour without introducing prohibited or biased attributes.
- Model calibration so that scores map faithfully to observed probabilities.
- Threshold setting that trades off false positives against missed risk in line with appetite.
- Explainability and reason codes required for adverse-action notices and audit.
- Monitoring for population drift, fairness and stability over time.
- ### Applications
- Credit decisioning, lending and underwriting.
- Transaction monitoring for [[Fraud Detection]] and [[Anti-Money Laundering]].
- Customer due diligence and [[KYC]] tiering.
- Insurance pricing and claims triage.
- ### Relationships
- uses:: [[Machine Learning]]
- uses:: [[Predictive Analytics]]
- uses:: [[Feature Engineering]]
- requires:: [[Risk Assessment]]
- requires:: [[Anomaly Detection]]
- hasPart:: [[Decision Tree]]
- enables:: [[Fraud Detection]]
- enables:: [[KYC]]
- supports:: [[Anti-Money Laundering]]
- implements:: [[Risk Management]]
- relatedTo:: [[Compliance]]
- relatedTo:: [[Regulatory Compliance]]
- dependsOn:: [[Data]]
- ### Provenance
- updated:: 2026-06-15
