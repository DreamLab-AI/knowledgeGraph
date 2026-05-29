- ### Definition
  - Fraud detection is the real-time or near-real-time identification of deceptive or unauthorised activities—such as payment fraud, account takeover, and identity theft—using statistical models, machine learning classifiers, and rule-based engines applied to transactional and behavioural data. The field operates under severe class-imbalance constraints, where fraudulent events are rare relative to legitimate activity, demanding specialised sampling strategies and evaluation metrics such as precision-recall curves and F1 scores. Explainability of model decisions is increasingly mandated by financial regulators to support human review of adverse determinations.

- ### Semantic Classification
  - owl-class:: fraud-detection:Fraud Detection
  - owl-role:: Concept

- ### Relationships
  - uses [[Anomaly Detection]]
  - uses [[Machine Learning]]
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