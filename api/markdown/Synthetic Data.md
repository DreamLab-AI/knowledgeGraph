public:: true

# synthetic data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c0b6f26bc4b6472d810c4536bd29644c3be1eaaaf9b88dfe5c5d8d6209f6033",
  "@type": "Page",
  "vc:slug": "synthetic-data",
  "title": "synthetic data",
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
  "@id": "urn:ngm:class:synthetic-data",
  "@type": "Class",
  "label": "Synthetic Data",
  "definition": "Synthetic data is algorithmically generated content that preserves the statistical properties, distributional characteristics, and structural patterns of real-world datasets without containing actual personal or proprietary records. It is produced using techniques such as generative adversarial networks, variational autoencoders, diffusion models, rule-based simulators, and statistical resampling methods. Synthetic data serves to augment scarce or imbalanced training corpora, enable privacy-compliant data sharing under regulations such as GDPR, and stress-test machine-learning pipelines with rare, hazardous, or counterfactual edge-case scenarios. Quality is typically benchmarked via fidelity metrics such as Fréchet Inception Distance, train-on-synthetic-test-on-real accuracy, and statistical divergence measures.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"},
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:variational-autoencoder", "label": "Variational Autoencoder"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:data-augmentation", "label": "Data Augmentation"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:privacy-preserving-machine-learning", "label": "Privacy-Preserving Machine Learning"},
      {"@id": "urn:ngm:class:sim-to-real-transfer", "label": "Sim-to-Real Transfer"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"},
      {"@id": "urn:ngm:class:statistical-distribution", "label": "Statistical Distribution"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:fidelity-evaluation", "label": "Fidelity Evaluation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:autonomous-systems", "label": "Autonomous Systems"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:drug-discovery", "label": "Drug Discovery"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:real-world-data", "label": "Real-World Data"},
      {"@id": "urn:ngm:class:data-anonymisation", "label": "Data Anonymisation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:bias-in-ai", "label": "Bias in AI"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:simulation-environment", "label": "Simulation Environment"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:artificially-generated-data", "label": "Artificially Generated Data"}
  ],
  "quality": 0.73,
  "qualityScore": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Synthetic data is algorithmically generated content that faithfully mirrors the statistical properties, distributional characteristics, and structural patterns of real-world datasets while containing no actual personal or proprietary records. Techniques range from deep [[Generative Adversarial Network]] and [[Diffusion Model]] architectures to [[Variational Autoencoder]] sampling, rule-based simulators, and statistical bootstrapping methods. It underpins [[Privacy-Preserving Machine Learning]] by enabling data sharing and model training without exposing sensitive individuals, and drives [[Sim-to-Real Transfer]] pipelines in robotics and autonomous driving. Quality is benchmarked with metrics such as Fréchet Inception Distance, Maximum Mean Discrepancy, and train-on-synthetic-test-on-real accuracy.

- ### Overview
  - Synthetic data generation has become a central strategy in responsible AI development, addressing the dual constraints of data scarcity and privacy regulation.
  - As real-world datasets grow harder to collect, label, and share under regulations such as GDPR and HIPAA, generated surrogates allow teams to iterate rapidly without legal or ethical blockers.
  - The core idea is that a generative process can be trained (or hand-coded) to produce samples whose joint distribution approximates the true data distribution — yielding a dataset that behaves statistically like the original but contains no real individuals.
  - Unlike [[Data Anonymisation]], which degrades or masks existing records, synthetic data produces entirely new records, offering stronger theoretical privacy guarantees when combined with [[Differential Privacy]].
  - Maturity has grown from niche tabular resampling (SMOTE, Gaussian copulas) to large-scale multimodal generation, with purpose-built frameworks now offered by cloud hyperscalers and specialist vendors.

- ### Key Components
  - **Generative Models**
    - [[Generative Adversarial Network]] (GAN) — adversarial generator-discriminator training; excels at images and time-series.
    - [[Diffusion Model]] — score-based denoising; state-of-the-art fidelity for images, audio, and molecular data.
    - [[Variational Autoencoder]] — latent-space sampling; efficient and interpretable; widely used for tabular and genomic data.
    - [[Large Language Model]] — text and code synthesis; instruction-tuned LLMs generate realistic corpora for NLP pipelines.
    - Rule-based simulators — deterministic physics engines (e.g. [[Simulation Environment]]) for robotics, autonomous driving, and manufacturing.
  - **Fidelity & Privacy Metrics**
    - Statistical fidelity: column-wise distributions, pairwise correlations, [[Statistical Distribution]] divergence (KL, Wasserstein, MMD).
    - Visual fidelity: Fréchet Inception Distance (FID), Inception Score (IS) for image data.
    - Utility: train-on-synthetic-test-on-real (TSTR) accuracy delta versus baseline.
    - Privacy: membership-inference attack success rate; linkage risk; k-anonymity equivalence.
  - **Data Modalities**
    - Tabular / structured records (healthcare, finance, telecoms).
    - Image and video (medical imaging, autonomous driving, surveillance augmentation).
    - Text (conversational AI, document classification, NLP benchmarks).
    - Time-series (sensor streams, financial tick data, wearable biosignals).
    - 3D / point-cloud (LiDAR, CAD, molecular conformation).
  - **Generation Pipelines**
    - A typical [[Data Pipeline]] includes: (1) real-data profiling, (2) generative model training, (3) synthetic sample generation, (4) [[Fidelity Evaluation]], (5) downstream utility testing before deployment.

- ### Applications / Use Cases
  - **Healthcare & Life Sciences**
    - Generating privacy-safe electronic health records to share across institutions without patient consent barriers.
    - Augmenting rare-disease cohorts for clinical machine-learning models.
    - Supporting [[Drug Discovery]] via molecular graph generation (e.g. junction-tree VAEs, diffusion over molecular graphs).
  - **Autonomous Systems & Robotics**
    - Creating vast labelled sensor datasets (camera, LiDAR, radar) from photorealistic [[Simulation Environment]] for [[Autonomous Systems]] training.
    - Enabling [[Sim-to-Real Transfer]] by domain-randomising synthetic environments to reduce the reality gap.
    - Safe testing of edge cases (pedestrian occlusion, adverse weather) that are rare or dangerous to capture in the real world.
  - **Financial Services**
    - Producing synthetic transaction streams for fraud detection model training without leaking customer PII.
    - Stress-testing risk models with synthetic market scenarios, including black-swan events.
    - Enabling open banking data-sharing initiatives under regulatory compliance.
  - **Natural Language Processing**
    - Bootstrapping low-resource language corpora using [[Large Language Model]] paraphrase and back-translation pipelines.
    - Generating adversarial text examples to improve model robustness.
    - Creating synthetic instruction-tuning datasets for fine-tuning smaller models.
  - **Federated & Distributed Learning**
    - Sharing synthetic surrogates in lieu of raw data across organisational boundaries, facilitating [[Federated Learning]] without centralising sensitive records.
  - **Software & Security Testing**
    - Generating realistic but non-PII test databases for QA environments.
    - Producing synthetic network traffic logs for cybersecurity model training.
  - **Spatial Computing & Digital Twins**
    - Feeding [[Digital Twin]] simulations with synthetic sensor streams to model asset behaviour before physical deployment.

- ### Relationships
  - uses:: [[Generative Adversarial Network]]
  - uses:: [[Diffusion Model]]
  - uses:: [[Variational Autoencoder]]
  - uses:: [[Large Language Model]]
  - enables:: [[Federated Learning]]
  - enables:: [[Data Augmentation]]
  - enables:: [[Model Training]]
  - enables:: [[Privacy-Preserving Machine Learning]]
  - enables:: [[Sim-to-Real Transfer]]
  - requires:: [[Generative Model]]
  - requires:: [[Statistical Distribution]]
  - dependsOn:: [[Data Pipeline]]
  - dependsOn:: [[Fidelity Evaluation]]
  - supports:: [[Autonomous Systems]]
  - supports:: [[Robotics]]
  - supports:: [[Drug Discovery]]
  - contrastsWith:: [[Real-World Data]]
  - contrastsWith:: [[Data Anonymisation]]
  - relatedTo:: [[Differential Privacy]]
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Bias in AI]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Simulation Environment]]

- ### Standards & Context
  - **Regulatory Frameworks**
    - GDPR (EU): synthetic data may satisfy the "not personal data" threshold if no real individual can be re-identified, though supervisory authority guidance varies.
    - HIPAA (US): de-identification safe harbours have been interpreted to extend to high-quality synthetic records, subject to expert determination.
    - UK ICO guidance on anonymisation and pseudonymisation covers synthetic approaches as part of [[Data Governance]] best practice.
    - EU AI Act: training data quality and provenance obligations apply; synthetic provenance must be documented.
  - **Benchmarking Standards**
    - SDV (Synthetic Data Vault) — open-source Python library; de-facto standard for tabular benchmarking.
    - SynthEval, MOSTLY AI, Gretel.ai — commercial and open platforms with standardised metric suites.
    - NIST SP 800-188 — draft federal guidance on de-identified and synthetic data for privacy.
  - **Research Venues**
    - NeurIPS, ICML, ICLR — leading venues for generative model advances underpinning synthetic data.
    - IEEE S&P, USENIX Security — membership-inference and privacy-attack research.
    - Synthetic Data for AI workshops at major ML conferences.

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
