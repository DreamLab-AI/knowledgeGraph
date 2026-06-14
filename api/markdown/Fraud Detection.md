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
  "definition": "Fraud detection is the automated or semi-automated identification of deceptive, unauthorised, or anomalous activities—such as payment fraud, account takeover, synthetic identity creation, and insurance claim manipulation—using statistical models, machine learning classifiers, graph analytics, and rule-based engines applied to transactional, behavioural, and network data. The field operates under severe class-imbalance constraints where fraudulent events are rare relative to legitimate activity, demanding specialised sampling strategies such as SMOTE and evaluation metrics including precision-recall curves and F1 scores. Modern production systems combine ensemble methods such as gradient-boosted trees for rapid inference with deep learning approaches including graph neural networks and LSTM sequence models to capture both point-in-time anomalies and temporal patterns indicative of coordinated fraud schemes. Explainability of model decisions is increasingly mandated by financial regulators to support human review of adverse determinations and compliance with consumer protection law.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:anomaly-detection",
      "label": "Anomaly Detection"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:graph-neural-networks", "label": "Graph Neural Networks"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:behavioural-biometrics", "label": "Behavioural Biometrics"},
      {"@id": "urn:ngm:class:data-stream-processing", "label": "Data Stream Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"},
      {"@id": "urn:ngm:class:data-labelling", "label": "Data Labelling"},
      {"@id": "urn:ngm:class:real-time-data-pipelines", "label": "Real-Time Data Pipelines"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"},
      {"@id": "urn:ngm:class:explainable-ai", "label": "Explainable AI"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:intrusion-detection-systems", "label": "Intrusion Detection Systems"},
      {"@id": "urn:ngm:class:threat-intelligence", "label": "Threat Intelligence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer"},
      {"@id": "urn:ngm:class:credit-risk", "label": "Credit Risk"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:fraud-analytics", "label": "Fraud Analytics"},
    {"@id": "urn:ngm:class:financial-crime-detection", "label": "Financial Crime Detection"}
  ],
  "quality": 0.72,
  "qualityScore": 0.72,
  "maturity": "established",
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Fraud detection is the automated or semi-automated identification of deceptive, unauthorised, or anomalous activities in financial, digital, and commercial systems, employing [[Anomaly Detection]], [[Machine Learning]], [[Graph Neural Networks]], and rule-based engines applied to transactional, behavioural, and network data. It operates under severe class-imbalance constraints—fraudulent events represent a small fraction of all transactions—requiring specialised sampling strategies and evaluation frameworks such as precision-recall analysis. Modern systems combine [[Supervised Learning]] ensemble methods for rapid real-time inference with deep sequence models to surface temporal patterns indicative of account compromise or coordinated fraud rings. Regulatory mandates increasingly require [[Explainable AI]] techniques to justify adverse decisions affecting consumers.

- ### Overview
  - Fraud detection spans a broad set of financial and digital risk disciplines concerned with detecting, preventing, and investigating deceptive activities before or after they cause harm.
  - It is foundational to the operation of payment networks, online banking platforms, insurance systems, e-commerce marketplaces, and telecommunications providers, each presenting distinct feature engineering challenges.
  - The detection problem is characterised by:
    - Severe class imbalance — legitimate transactions vastly outnumber fraudulent ones
    - Concept drift — fraud patterns evolve rapidly as adversaries adapt to countermeasures
    - Low-latency requirements — decisions on card transactions may need to complete within 100–300 milliseconds
    - Adversarial dynamics — fraudsters actively probe detection systems to find blind spots
  - Economic significance is high: payment card fraud, account takeover, and synthetic identity fraud represent large categories of financial loss for banks, insurers, merchants, and consumers globally.
  - The field has matured from simple rule-based systems in the 1990s through statistical score-card models to modern ensemble and deep learning pipelines, and is now integrating [[Federated Learning]] and [[Blockchain Analytics]] for cross-institution cooperation.

- ### Key Components
  - #### Data Sources and Feature Engineering
    - Transaction-level features: amount, merchant category code, time of day, geographic location, transaction velocity
    - Device and network signals: device fingerprints, IP geolocation, browser user-agent, session duration
    - Behavioural signals: keystroke dynamics, mouse movement, navigation patterns — see [[Behavioural Biometrics]]
    - Graph-structured data: networks of accounts, devices, IP addresses, and merchants enabling ring-fraud detection
    - Historical aggregates: rolling-window statistics over hours, days, and months per customer
    - [[Feature Engineering]] is a critical bottleneck; domain expertise determines which signals separate fraud from legitimate activity
  - #### Detection Approaches
    - **Rule-based systems**: velocity rules, spend-limit thresholds, country-block lists; fast and interpretable but brittle to novel patterns
    - **Statistical scoring**: logistic regression, scorecard models; foundation of legacy banking fraud systems
    - **Gradient-boosted trees**: XGBoost, LightGBM — dominant in production for tabular transactional data due to speed, accuracy, and relative interpretability
    - **[[Anomaly Detection]]**: autoencoders, isolation forests, one-class SVM — used when labelled fraud examples are scarce or entirely absent
    - **[[Supervised Learning]]** classifiers: trained on labelled fraud/non-fraud pairs; require high-quality [[Data Labelling]]
    - **Sequence models**: LSTM and Transformer architectures over ordered transaction histories, capturing temporal dependencies indicative of progressive account compromise
    - **[[Graph Neural Networks]]**: model multi-relational networks of accounts, beneficiaries, and devices to detect synthetic identity clusters and money-mule networks invisible to row-level models
  - #### Class Imbalance Handling
    - Oversampling of minority class: SMOTE (Synthetic Minority Over-sampling Technique) and variants
    - Undersampling of majority class: random undersampling, Tomek links
    - Cost-sensitive learning: asymmetric loss functions penalising false negatives more heavily
    - Evaluation: precision-recall area under curve (PR-AUC) preferred over ROC-AUC in high-imbalance settings
  - #### Real-Time Inference
    - Low-latency scoring engines consuming events from [[Data Stream Processing]] platforms such as Apache Kafka and Apache Flink
    - Feature stores providing pre-computed aggregates for sub-millisecond feature retrieval
    - Model serving via REST or gRPC endpoints with strict SLA requirements
    - [[Real-Time Data Pipelines]] integrate event streams, feature stores, model servers, and decisioning engines

- ### Applications and Use Cases
  - #### Payment Fraud
    - Card-present and card-not-present fraud detection at point of sale and e-commerce checkout
    - 3-D Secure authentication risk scoring — issuer-side decision on step-up authentication requirement
    - Chargeback prediction and dispute management
    - Cross-border transaction risk assessment
  - #### Account Takeover and Identity Fraud
    - Login anomaly detection: new device, new location, impossible travel heuristics
    - Credential stuffing detection via login velocity and bot-signal analysis
    - Synthetic identity detection: fictitious identities assembled from real and fabricated data components — addressed through [[Know Your Customer]] enrichment and graph linkage analysis
    - [[Digital Identity]] verification integration to confirm claimed identities at onboarding
  - #### Anti-Money Laundering
    - [[Anti-Money Laundering]] transaction monitoring: structuring detection, layering pattern recognition over multi-hop payment networks
    - Customer risk scoring and enhanced due diligence triggers
    - Sanctions screening and politically exposed persons (PEP) list matching using [[Natural Language Processing]]
    - Suspicious Activity Report (SAR) narrative generation assistance
  - #### Insurance and Healthcare
    - Insurance claim anomaly detection: duplicate claims, provider billing fraud, staged accidents
    - Healthcare billing fraud: CPT code pattern analysis, outlier provider detection
  - #### E-commerce and Digital Platforms
    - Seller fraud and counterfeit goods detection on marketplace platforms
    - Promo abuse and coupon fraud detection
    - Ad fraud detection: invalid traffic, click fraud, impression fraud
  - #### Cryptocurrency and [[Blockchain Analytics]]
    - On-chain transaction graph analysis for address clustering and entity attribution
    - Exchange-level deposit/withdrawal anomaly detection
    - Ransomware wallet tracking and sanctions compliance

- ### Relationships
  - uses:: [[Anomaly Detection]]
  - uses:: [[Machine Learning]]
  - uses:: [[Supervised Learning]]
  - uses:: [[Graph Neural Networks]]
  - uses:: [[Natural Language Processing]]
  - uses:: [[Behavioural Biometrics]]
  - uses:: [[Data Stream Processing]]
  - enables:: [[Anti-Money Laundering]]
  - enables:: [[Risk Management]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Identity Verification]]
  - requires:: [[Feature Engineering]]
  - requires:: [[Data Labelling]]
  - requires:: [[Real-Time Data Pipelines]]
  - dependsOn:: [[Anomaly Detection]]
  - dependsOn:: [[Explainable AI]]
  - contrastsWith:: [[Intrusion Detection Systems]]
  - contrastsWith:: [[Threat Intelligence]]
  - relatedTo:: [[Cybersecurity]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Know Your Customer]]
  - relatedTo:: [[Credit Risk]]
  - bridges-to:: [[Blockchain Analytics]]
  - bridges-to:: [[Federated Learning]]

- ### Standards and Regulatory Context
  - #### Financial Regulation
    - **PSD2 (EU Payment Services Directive 2)**: mandates Strong Customer Authentication (SCA) and provides regulatory technical standards for transaction risk analysis exemptions, directly governing payment fraud detection in the EU
    - **Bank Secrecy Act (BSA) / Anti-Money Laundering Act 2020 (US)**: requires transaction monitoring programmes generating SAR filings; regulators expect firms to use advanced analytics
    - **FCA Consumer Duty (UK)**: requires firms to prevent foreseeable harm, including fraud-related harm, influencing how fraud models must be operated and explained
    - **GDPR and UK GDPR**: restrict use of personal data in automated decision-making; adversely affected individuals have the right to human review, driving [[Explainable AI]] adoption
  - #### Industry Standards
    - **PCI DSS (Payment Card Industry Data Security Standard)**: governs security of cardholder data environments; compliance is a prerequisite for operating card fraud detection infrastructure
    - **ISO 20022**: next-generation financial messaging standard enriching payment data available for fraud analytics
    - **FATF Recommendations**: international AML/CFT standards influencing national transaction monitoring requirements globally
  - #### Explainability Requirements
    - Regulators including the US OCC and EU EBA have issued guidance expecting financial institutions to be able to explain automated model decisions affecting customers
    - SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) are the de facto standard tools for post-hoc explanation of fraud model outputs
    - Model risk management frameworks (SR 11-7 in the US) require validation of all models used in fraud detection

- ### Challenges and Emerging Directions
  - **Concept drift**: fraud patterns evolve continuously as adversaries adapt; models require frequent retraining and monitoring pipelines
  - **Federated learning**: [[Federated Learning]] enables cross-institution fraud pattern sharing without exposing raw transaction data, addressing data-sharing constraints between competing financial institutions
  - **Adversarial robustness**: fraudsters use adversarial machine learning techniques to probe and evade deployed models
  - **Synthetic data**: generative models are used to augment training data for rare fraud types, raising model validation challenges
  - **Multi-modal fusion**: integrating text (messages, documents), images (identity documents, receipts), and structured transaction data within unified detection pipelines
  - **Graph foundation models**: pre-trained graph models for financial networks, enabling transfer learning across institutions with limited labelled fraud data
  - **Privacy-preserving computation**: homomorphic encryption and secure multi-party computation enabling collaborative fraud analytics across institution boundaries without data exposure

- ### Provenance
  - sources:: ISO 20022 messaging standard; PCI DSS v4.0; EU PSD2 RTS on SCA; FATF Recommendations 2023; UK FCA Consumer Duty; GDPR Article 22; US OCC Model Risk Guidance SR 11-7
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
