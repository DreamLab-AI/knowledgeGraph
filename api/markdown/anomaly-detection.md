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