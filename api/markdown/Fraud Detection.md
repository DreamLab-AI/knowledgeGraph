public:: true

# fraud detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0515c3530385ed70aab8811467b5cd73ad2007389384959e3d232f8a1fabf60",
  "@type": "Page",
  "vc:slug": "fraud-detection",
  "title": "fraud detection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fraud-detection",
  "@type": "Class",
  "label": "Fraud Detection",
  "definition": "Fraud detection is the real-time or near-real-time identification of deceptive or unauthorised activities—such as payment fraud, account takeover, and identity theft—using statistical models, machine learning classifiers, and rule-based engines applied to transactional and behavioural data. The field operates under severe class-imbalance constraints, where fraudulent events are rare relative to legitimate activity, demanding specialised sampling strategies and evaluation metrics such as precision-recall curves and F1 scores. Explainability of model decisions is increasingly mandated by financial regulators to support human review of adverse determinations.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:explainable-ai", "label": "Explainable AI"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Fraud detection is the real-time or near-real-time identification of deceptive or unauthorised activities—such as payment fraud, account takeover, and identity theft—using statistical models, machine learning classifiers, and rule-based engines applied to transactional and behavioural data. The field operates under severe class-imbalance constraints, where fraudulent events are rare relative to legitimate activity, demanding specialised sampling strategies and evaluation metrics such as precision-recall curves and F1 scores. Explainability of model decisions is increasingly mandated by financial regulators to support human review of adverse determinations.

- ### Semantic Classification
  - owl-class:: fraud-detection:Fraud Detection
  - owl-role:: Concept

- ### Relationships
  - uses [[Anomaly Detection]]
  - uses [[Machine Learning Discipline]]
  - uses [[Supervised Learning]]
  - enables [[Anti-Money Laundering]]
  - enables [[Risk Management]]
  - relatedTo [[Explainable AI]]

- ### Content
  Fraud detection systems operate across diverse domains—card payment networks, online banking, insurance claims, e-commerce, and telecommunications—each with domain-specific feature engineering requirements. In payment fraud, features include transaction velocity, geographic distance from prior transactions, merchant category codes, and device fingerprints. Graph Neural Networks are used to model networks of accounts, devices, and merchants, surfacing ring fraud and synthetic identity schemes that are invisible to row-level models.

  Anomaly Detection approaches, including autoencoders and isolation forests, handle unsupervised detection where labelled fraud examples are scarce. Supervised Learning with gradient-boosted trees (XGBoost, LightGBM) remains dominant in production due to interpretability and speed. Deep learning models, including LSTM networks over transaction sequences, capture temporal patterns indicative of account compromise.

  Anti-Money Laundering (AML) pipelines extend fraud detection by incorporating transaction monitoring across longer time horizons, counterparty screening against sanctions lists, and suspicious activity report generation. Regulatory frameworks in many jurisdictions require explainable adverse decisions, driving adoption of Explainable AI techniques such as SHAP values and LIME alongside fraud detection models. Risk Management functions consume fraud model outputs to calibrate customer onboarding, credit scoring, and operational loss provisioning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
