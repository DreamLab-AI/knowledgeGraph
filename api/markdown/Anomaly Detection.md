public:: true

# anomaly detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4da08aa825f42afd5e35f6ba90108e56ca4416e0109fa552ab28d74993e55b19",
  "@type": "Page",
  "vc:slug": "anomaly-detection",
  "title": "anomaly detection",
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
  "@id": "urn:ngm:class:anomaly-detection",
  "@type": "Class",
  "label": "Anomaly Detection",
  "definition": "Anomaly detection is a machine learning and statistical discipline concerned with identifying observations, sequences, or structural patterns that deviate significantly from a learned or assumed norm, signalling potential faults, threats, or novel phenomena. It operates in three modes: point anomaly detection (a single observation is outlying), contextual anomaly detection (an observation is anomalous given its context, e.g. a transaction at an unusual time), and collective anomaly detection (a group of observations is anomalous relative to each other). Applications span fraud detection, network intrusion detection, industrial fault monitoring, and medical diagnostics.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:pattern-recognition", "label": "Pattern Recognition"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:time-series-forecasting", "label": "Time Series Forecasting"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Anomaly detection is a machine learning and statistical discipline concerned with identifying observations, sequences, or structural patterns that deviate significantly from a learned or assumed norm, signalling potential faults, threats, or novel phenomena. It operates in three modes: point anomaly detection (a single observation is outlying), contextual anomaly detection (an observation is anomalous given its context, e.g. a transaction at an unusual time), and collective anomaly detection (a group of observations is anomalous relative to each other). Applications span fraud detection, network intrusion detection, industrial fault monitoring, and medical diagnostics.

- ### Semantic Classification
  - owl-class:: anomaly-detection:Anomaly Detection
  - owl-role:: Concept

- ### Relationships
  - enables [[Fraud Detection]]
  - enables [[Cybersecurity]]
  - uses [[Machine Learning Discipline]]
  - uses [[Pattern Recognition]]
  - relatedTo [[Time Series Forecasting]]

- ### Content
  - Anomaly detection methods differ substantially by supervision level. Supervised approaches train a classifier on labelled normal and anomalous examples; they achieve high precision when labelled anomalies are abundant but fail to generalise to novel anomaly types. Semi-supervised methods learn only from normal data, flagging departures from the learned manifold using techniques such as One-Class SVM, isolation forests, or autoencoder reconstruction error. Unsupervised methods — including density estimation (DBSCAN, Gaussian mixture models), proximity-based scoring, and deep generative model likelihoods — require no labels at all and are suited to exploratory settings.
  - Deep learning has substantially advanced the field. Autoencoders detect anomalies as samples with high reconstruction error; variational autoencoders provide probabilistic reconstruction likelihoods; and normalising flows model exact data densities. For sequential data, LSTM-based models capture temporal dependencies and flag deviations from expected next-step predictions. Graph neural networks detect structural anomalies in network traffic and social graph data, where the relational structure is as informative as node attributes.
  - Practical deployments face the challenge of imbalanced class distributions (anomalies are rare), concept drift (normal behaviour evolves over time requiring model retraining or online adaptation), and interpretability requirements (operators need to understand why an alert was raised). Threshold calibration is critical: false positive rates must be kept low enough to avoid alert fatigue while maintaining sensitivity. Evaluation typically uses precision-recall curves rather than accuracy due to class imbalance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
