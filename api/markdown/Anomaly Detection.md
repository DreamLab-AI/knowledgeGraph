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
  "definition": "Anomaly detection is a machine learning and statistical discipline concerned with identifying observations, sequences, or structural patterns that deviate significantly from a learned or assumed norm, signalling potential faults, threats, or novel phenomena. It operates across three principal modes: point anomaly detection (a single observation is outlying relative to the full dataset), contextual anomaly detection (an observation is anomalous given its local context, such as a transaction at an unusual time of day), and collective anomaly detection (a subsequence or group of observations is jointly anomalous relative to expected behaviour). The field draws on statistical modelling, machine learning, and signal processing to serve applications ranging from fraud detection and network intrusion detection to industrial fault monitoring, medical diagnostics, and log analysis.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:point-anomaly-detection", "label": "Point Anomaly Detection"},
      {"@id": "urn:ngm:class:contextual-anomaly-detection", "label": "Contextual Anomaly Detection"},
      {"@id": "urn:ngm:class:collective-anomaly-detection", "label": "Collective Anomaly Detection"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:statistical-modelling", "label": "Statistical Modelling"},
      {"@id": "urn:ngm:class:threshold-calibration", "label": "Threshold Calibration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:predictive-maintenance", "label": "Predictive Maintenance"},
      {"@id": "urn:ngm:class:intrusion-detection-system", "label": "Intrusion Detection System"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:pattern-recognition", "label": "Pattern Recognition"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:autoencoder", "label": "Autoencoder"},
      {"@id": "urn:ngm:class:isolation-forest", "label": "Isolation Forest"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"},
      {"@id": "urn:ngm:class:data-preprocessing", "label": "Data Preprocessing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:classification", "label": "Classification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:time-series-forecasting", "label": "Time Series Forecasting"},
      {"@id": "urn:ngm:class:outlier-detection", "label": "Outlier Detection"},
      {"@id": "urn:ngm:class:change-point-detection", "label": "Change Point Detection"},
      {"@id": "urn:ngm:class:concept-drift", "label": "Concept Drift"},
      {"@id": "urn:ngm:class:model-monitoring", "label": "Model Monitoring"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"},
      {"@id": "urn:ngm:class:iot-sensor-data", "label": "IoT Sensor Data"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:outlier-detection", "label": "Outlier Detection"},
    {"@id": "urn:ngm:class:novelty-detection", "label": "Novelty Detection"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Anomaly detection is a branch of [[Machine Learning]] and [[Statistical Modelling]] concerned with identifying observations, sequences, or structural patterns that deviate significantly from a learned or assumed norm. It operates across three principal modes: point anomalies (a single data point is outlying), contextual anomalies (a value is anomalous within its local context), and collective anomalies (a subsequence is jointly anomalous). The field bridges [[Pattern Recognition]], [[Data Mining]], and domain-specific signal analysis to serve security, quality assurance, and monitoring tasks where abnormal events carry high operational significance.

- ### Overview
  - Anomaly detection addresses the fundamental challenge of separating signal from noise in datasets where abnormal events are rare, ill-defined, or previously unseen. Unlike standard [[Classification]] tasks, anomalies cannot always be enumerated in advance, which forces most practical systems to learn a model of normal behaviour rather than a model of anomalies directly.
  - The field is mature in certain application areas (financial fraud, network intrusion) and continues to evolve rapidly in others (large language model output monitoring, foundation model behavioural auditing).
  - Three core supervision paradigms exist:
    - **Supervised** — trained on labelled normal and anomalous examples; highest precision when labels are available and anomaly types are stable.
    - **Semi-supervised** — trained on normal data only, flagging departures from the learned manifold; handles novel anomaly types naturally.
    - **Unsupervised** — no labels required; uses density, proximity, or reconstruction-based scoring; suited to exploratory and streaming settings.
  - Evaluation relies on [[Precision-Recall Curve]] and area-under-PR rather than accuracy, due to the severe class imbalance inherent in anomaly datasets.

- ### Key Components
  - #### Anomaly Types
    - **Point anomaly** — a single observation deviates from the global data distribution (e.g., an unusually large transaction amount).
    - **Contextual anomaly** — an observation is anomalous in context but not globally (e.g., a temperature reading normal for summer but anomalous in winter).
    - **Collective anomaly** — a contiguous or correlated group of observations is anomalous as a sequence (e.g., a network packet burst).
  - #### Statistical and Classical Methods
    - [[Z-score]] and Grubbs test — parametric point-anomaly detection assuming Gaussian distributions.
    - [[Gaussian Mixture Model]] — density estimation over multi-modal distributions; anomalies assigned low likelihood.
    - [[DBSCAN]] — density-based clustering; points in low-density regions flagged as outliers.
    - [[Isolation Forest]] — ensemble of random trees that isolate anomalies in fewer splits due to their sparsity.
    - [[Local Outlier Factor]] (LOF) — proximity-based; compares a point's density to its neighbours' densities.
    - One-Class SVM — learns a hypersphere around normal data in kernel space; rejects points outside the boundary.
  - #### Deep Learning Methods
    - [[Autoencoder]] — neural network trained to reconstruct normal data; anomalies exhibit high reconstruction error.
    - [[Variational Autoencoder]] — probabilistic extension providing reconstruction likelihood scores.
    - Normalising Flows — learn exact density models; anomalies receive low log-likelihood.
    - [[LSTM]] / Temporal Convolutional Network — model sequential dependencies in [[Time Series]] data; deviations from predicted next-step values flag anomalies.
    - [[Graph Neural Network]] — detect structural anomalies in relational data such as network traffic graphs or social graphs.
    - Transformer-based anomaly detection — attention mechanisms capture long-range temporal dependencies; relevant for [[Time Series Forecasting]] tasks.
  - #### Operational Concerns
    - **Threshold calibration** — choosing the anomaly score cut-off to balance false-positive rate (alert fatigue) against sensitivity; often requires domain expert tuning.
    - **[[Concept Drift]]** — the distribution of normal behaviour evolves over time, necessitating online adaptation or periodic retraining; closely coupled to [[Model Monitoring]].
    - **Interpretability** — operators require explanations of why a sample was flagged; SHAP values and attention visualisations are common post-hoc approaches.
    - **Label scarcity** — annotated anomalies are rare; active learning and semi-supervised strategies mitigate this.

- ### Applications
  - #### Financial Services
    - [[Fraud Detection]] — flagging unusual card transactions, account takeovers, or money-laundering patterns in payment streams.
    - Market surveillance — detecting spoofing, wash trading, and unusual price movements in equity and cryptocurrency markets.
  - #### Cybersecurity
    - [[Intrusion Detection System]] — identifying malicious network traffic, lateral movement, and command-and-control communications deviating from baseline.
    - Insider threat detection — user behaviour analytics (UBA) flags employees accessing resources outside their normal patterns.
    - Log analysis — clustering and sequence modelling over system logs to surface unusual process chains or authentication events.
  - #### Industrial & IoT
    - [[Predictive Maintenance]] — detecting early-stage degradation in rotating machinery via vibration, temperature, or acoustic signals, reducing unplanned downtime.
    - [[IoT Sensor Data]] monitoring — real-time anomaly scoring over high-frequency sensor streams from manufacturing lines, smart grids, or building management systems.
    - Quality control — vision-based anomaly detection on production lines to flag surface defects without exhaustive defect catalogues.
  - #### Healthcare
    - Clinical deterioration detection — early warning systems monitoring vital sign streams in ICUs, flagging physiological deterioration before clinical intervention is required.
    - Medical imaging — one-class models trained on healthy tissue distributions detect tumours, lesions, or rare pathologies as reconstruction outliers.
    - Genomics — flagging unusual mutation patterns or copy-number variants deviating from population-level baselines.
  - #### AI System Monitoring
    - [[Model Monitoring]] — detecting distribution shift in model input features or output predictions in deployed ML pipelines.
    - LLM output auditing — anomaly scoring over generated text to flag unexpected, hallucinated, or policy-violating outputs.
    - Data pipeline integrity — detecting corrupted or malformed records in [[Data Preprocessing]] workflows before they reach training or inference.

- ### Relationships
  - hasPart:: [[Point Anomaly Detection]]
  - hasPart:: [[Contextual Anomaly Detection]]
  - hasPart:: [[Collective Anomaly Detection]]
  - requires:: [[Statistical Modelling]]
  - requires:: [[Threshold Calibration]]
  - enables:: [[Fraud Detection]]
  - enables:: [[Cybersecurity]]
  - enables:: [[Predictive Maintenance]]
  - enables:: [[Intrusion Detection System]]
  - uses:: [[Machine Learning]]
  - uses:: [[Pattern Recognition]]
  - uses:: [[Deep Learning]]
  - uses:: [[Autoencoder]]
  - uses:: [[Isolation Forest]]
  - dependsOn:: [[Feature Engineering]]
  - dependsOn:: [[Data Preprocessing]]
  - contrastsWith:: [[Supervised Learning]]
  - contrastsWith:: [[Classification]]
  - relatedTo:: [[Time Series Forecasting]]
  - relatedTo:: [[Outlier Detection]]
  - relatedTo:: [[Change Point Detection]]
  - relatedTo:: [[Concept Drift]]
  - relatedTo:: [[Model Monitoring]]
  - bridges-to:: [[Network Security]]
  - bridges-to:: [[IoT Sensor Data]]

- ### Standards & Context
  - No single ISO or IEEE standard governs anomaly detection as a practice, but it is addressed within broader frameworks:
    - **ISO/IEC 27035** — information security incident management; anomaly detection is a key enabling technology.
    - **NIST SP 800-94** — Guide to Intrusion Detection and Prevention Systems; covers network-based anomaly detection.
    - **IEC 62443** — industrial automation and control systems security; anomaly detection features in zone monitoring requirements.
    - **MITRE ATT&CK** — adversary tactic and technique taxonomy widely used to frame what behaviours anomaly detectors should surface in [[Cybersecurity]] contexts.
  - Key research venues: IEEE Symposium on Security and Privacy, ACM KDD, NeurIPS, ICML, ICDM.
  - Benchmarks: KDD Cup 1999 (network intrusion), MVTec AD (industrial visual inspection), NAB (Numenta Anomaly Benchmark for time series).

- ### Provenance
  - sources:: IEEE TNNLS survey on deep anomaly detection; NIST SP 800-94; Chandola et al. (2009) ACM Computing Surveys
  - updated:: 2026-06-13
