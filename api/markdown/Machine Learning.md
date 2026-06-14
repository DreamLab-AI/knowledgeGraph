public:: true

# Machine Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:machine-learning",
  "@type": "Page",
  "title": "Machine Learning",
  "vc:slug": "machine-learning",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:machine-learning",
  "@type": "Class",
  "label": "Machine Learning",
  "definition": "Machine Learning is a sub-field of Artificial Intelligence in which computational systems learn to improve their performance on tasks by identifying statistical patterns in data rather than by following explicitly programmed rules. A model is exposed to a training dataset, an optimisation algorithm adjusts its parameters to minimise a loss function, and the resulting parameters generalise to unseen inputs. The discipline encompasses supervised learning from labelled examples, unsupervised learning from unlabelled structure, and reinforcement learning from reward signals in interactive environments. Foundational to modern AI stacks, machine learning underpins capabilities ranging from image recognition and natural language processing to recommendation systems and autonomous decision-making.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}],
  "sameAs": [
    {"@id": "urn:ngm:class:statistical-learning", "label": "Statistical Learning"},
    {"@id": "urn:ngm:class:ml", "label": "ML"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:unsupervised-learning", "label": "Unsupervised Learning"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:optimisation-algorithm", "label": "Optimisation Algorithm"},
      {"@id": "urn:ngm:class:computational-infrastructure", "label": "Computational Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"},
      {"@id": "urn:ngm:class:predictive-analytics", "label": "Predictive Analytics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decision-support", "label": "Decision Support"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:intelligent-automation", "label": "Intelligent Automation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:symbolic-ai", "label": "Symbolic AI"},
      {"@id": "urn:ngm:class:expert-system", "label": "Expert System"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-iec-23053-2022", "label": "ISO-IEC 23053 2022"},
      {"@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:supply-chain-optimisation", "label": "Supply Chain Optimisation"},
      {"@id": "urn:ngm:class:smart-grid", "label": "Smart Grid"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "GapFillAuthored"
  }
}
```

- ### Definition
  - [[Machine Learning]] is a core sub-field of [[Artificial Intelligence]] concerned with developing algorithms that improve automatically through experience on data.
  - Rather than explicit rule specification, a [[Machine Learning]] system extracts statistical regularities from a [[Training Data]] corpus and encodes them in learned parameters.
  - The discipline spans classical [[Statistical Learning]] methods — linear models, kernel machines, decision trees — through to [[Deep Learning]] architectures composed of many parametric layers.
  - Generalisation from training distributions to unseen inputs is the central scientific challenge, addressed through regularisation, [[Bayesian Inference]], and structural inductive biases.
  - The learned representations power downstream capabilities including [[Natural Language Processing]], [[Computer Vision]], and [[Recommendation System|Recommendation Systems]].

- ### Overview
  - Machine learning emerged in the mid-twentieth century at the intersection of statistics, computational neuroscience, and cybernetics, with Arthur Samuel coining the term in 1959.
  - The modern era is defined by the convergence of large-scale [[Training Data]], specialised [[Computational Infrastructure]] (GPUs/TPUs), and [[Deep Learning]] architectures that learn hierarchical representations end-to-end.
  - Three canonical learning paradigms partition the field:
    - **Supervised Learning** — a model maps inputs to outputs using labelled training pairs; encompasses classification and regression.
    - **Unsupervised Learning** — a model discovers latent structure from unlabelled data; encompasses clustering, density estimation, and dimensionality reduction.
    - **Reinforcement Learning** — an agent learns a policy by maximising cumulative reward signals from interactions with an environment.
  - [[Transfer Learning]] and [[Federated Learning]] extend these paradigms to low-data and privacy-sensitive settings respectively.
  - The discipline sits at the heart of the modern [[Artificial Intelligence]] stack, with [[Generative AI]] representing the most visible recent application surface.

- ### Key Components

  - #### Data
    - [[Training Data]] quality, quantity, and representativeness are primary determinants of model performance.
    - [[Feature Engineering]] transforms raw inputs into informative representations; deep models partially automate this via learned embeddings.
    - [[Data Pipeline|Data Pipelines]] handle ingestion, cleaning, transformation, and versioning of training and evaluation corpora.
    - Held-out validation and test splits guard against overfitting and measure generalisation.

  - #### Model Families
    - [[Neural Network|Neural Networks]] — parametric function approximators composed of differentiable operations; backbone of [[Deep Learning]].
    - Kernel methods (SVMs, Gaussian Processes) — geometry-aware models with strong theoretical guarantees.
    - Ensemble methods (random forests, gradient boosting) — combine many weak learners for robust predictions.
    - Probabilistic graphical models — encode structured independence assumptions; support [[Bayesian Inference]].
    - [[Generative AI|Generative Models]] — learn data distributions to enable synthesis; includes VAEs, diffusion models, and autoregressive language models.

  - #### Optimisation
    - [[Gradient Descent]] and its stochastic variants (SGD, Adam) minimise a loss function by iteratively updating parameters in the direction of steepest descent.
    - [[Bayesian Optimisation]] guides hyperparameter search efficiently when evaluations are expensive.
    - [[Optimisation Algorithm|Optimisation Algorithms]] are coupled with learning-rate schedules, momentum, and adaptive step-size methods for stable convergence.

  - #### Evaluation
    - Metrics are task-specific: accuracy, F1, AUC-ROC for classification; RMSE, MAE for regression; BLEU/ROUGE for text generation; mAP for detection.
    - Benchmark datasets (ImageNet, GLUE, SuperGLUE, BIG-Bench) provide standardised comparison surfaces.
    - Cross-validation, confidence intervals, and statistical significance tests support rigorous evaluation.

- ### Mechanisms

  - #### Supervised Learning
    - The model is trained on pairs (x, y) to approximate a mapping f: x → y.
    - Regression predicts continuous targets; classification assigns discrete class labels.
    - Loss functions — cross-entropy, mean squared error — measure divergence between predictions and ground truth.
    - Regularisation (L1/L2, dropout, early stopping) constrains model complexity to improve generalisation.

  - #### Unsupervised Learning
    - Clustering (k-means, DBSCAN) assigns data points to cohesive groups without label supervision.
    - Dimensionality reduction (PCA, t-SNE, UMAP) projects high-dimensional data into lower-dimensional representations preserving structure.
    - Generative modelling learns the data distribution p(x) to enable sampling and density estimation.
    - Self-supervised objectives (masked prediction, contrastive learning) construct pseudo-labels from the data itself, enabling large-scale pre-training.

  - #### Reinforcement Learning
    - An agent observes state s, selects action a, receives reward r, and transitions to next state s'.
    - Policy gradient methods (PPO, A3C) directly optimise the policy; value-based methods (DQN) estimate the expected return.
    - Model-based RL learns a world model to plan; model-free RL learns from raw trial-and-error.
    - [[Reinforcement Learning]] is foundational to RLHF, the technique that aligns large language models with human preferences.

  - #### Deep Learning
    - [[Deep Learning]] stacks multiple non-linear transformations (layers) to learn hierarchical feature representations.
    - Convolutional Neural Networks (CNNs) exploit spatial locality for image tasks.
    - Transformer architectures use attention mechanisms to model long-range dependencies; dominant in [[Natural Language Processing]] and vision.
    - [[Transfer Learning]] pre-trains large models on broad corpora, then fine-tunes on downstream tasks with limited data.

- ### Applications

  - #### Natural Language Processing
    - [[Natural Language Processing]] tasks — translation, summarisation, question answering, sentiment analysis — are now dominated by transformer-based models trained on web-scale text.
    - Large language models (LLMs) are the primary driver of [[Generative AI]] products and enterprise [[Intelligent Automation]].

  - #### Computer Vision
    - [[Computer Vision]] tasks — image classification, object detection, semantic segmentation, depth estimation — underpin [[Autonomous Systems]], medical imaging, and industrial inspection.
    - Vision transformers (ViTs) and hybrid CNN-transformer architectures achieve state-of-the-art results.

  - #### Recommendation and Personalisation
    - [[Recommendation System|Recommendation Systems]] leverage collaborative filtering, content-based methods, and deep retrieval models to personalise content across e-commerce, streaming, and social media.

  - #### Robotics
    - [[Robotics]] uses machine learning for perception, motion planning, manipulation, and sim-to-real transfer.
    - [[Reinforcement Learning]] trains robot policies in simulation before deployment on physical hardware.

  - #### Scientific Discovery
    - ML accelerates drug discovery, materials science, climate modelling, and genomics by learning patterns in high-dimensional experimental datasets.

  - #### Infrastructure and Operations
    - ML powers anomaly detection in [[Network Security]], predictive maintenance in industrial systems, and load forecasting in [[Smart Grid]] networks.
    - [[Supply Chain Optimisation]] uses ML for demand forecasting, routing, and inventory management.

- ### Relationships
  - partOf:: [[Artificial Intelligence]]
  - hasPart:: [[Supervised Learning]]
  - hasPart:: [[Unsupervised Learning]]
  - hasPart:: [[Reinforcement Learning]]
  - hasPart:: [[Deep Learning]]
  - hasPart:: [[Transfer Learning]]
  - hasPart:: [[Federated Learning]]
  - requires:: [[Training Data]]
  - requires:: [[Optimisation Algorithm]]
  - requires:: [[Computational Infrastructure]]
  - enables:: [[Natural Language Processing]]
  - enables:: [[Computer Vision]]
  - enables:: [[Generative AI]]
  - enables:: [[Recommendation System]]
  - enables:: [[Predictive Analytics]]
  - enables:: [[Autonomous Systems]]
  - uses:: [[Neural Network]]
  - uses:: [[Gradient Descent]]
  - uses:: [[Probabilistic Model]]
  - uses:: [[Bayesian Inference]]
  - supports:: [[Decision Support]]
  - supports:: [[Robotics]]
  - supports:: [[Intelligent Automation]]
  - dependsOn:: [[Data Pipeline]]
  - dependsOn:: [[Feature Engineering]]
  - contrastsWith:: [[Rule-Based System]]
  - contrastsWith:: [[Symbolic AI]]
  - contrastsWith:: [[Expert System]]
  - standardizedBy:: [[ISO/IEC 23053:2022]]
  - standardizedBy:: [[NIST AI RMF]]
  - bridgesTo:: [[Data Governance]]
  - bridgesTo:: [[Supply Chain Optimisation]]
  - bridgesTo:: [[Smart Grid]]

- ### Standards & Context
  - [[ISO/IEC 23053:2022]] defines a framework for AI systems using machine learning, providing terminology and taxonomic structure for supervised, unsupervised, and reinforcement learning paradigms.
  - [[ISO/IEC 42001:2023]] covers AI management systems and references machine learning as the primary AI implementation technology.
  - [[NIST AI RMF]] (AI Risk Management Framework) addresses risks arising from ML models including bias, robustness failures, and distributional shift.
  - The [[OECD]] Principles on AI establish human oversight, transparency, and accountability norms specifically applicable to ML-based systems.
  - Ethics and [[Data Governance]] frameworks (GDPR, the EU AI Act) impose data minimisation, explainability, and auditability requirements on ML deployments.
  - Leading research venues include [[ICML]], NeurIPS, and ICLR, which collectively set research directions and disseminate benchmark results.
  - [[Bayesian Optimisation]] is a widely-used ML sub-technique for automated hyperparameter search across model families.

- ### Provenance
  - sources:: ISO/IEC 23053:2022; NIST AI RMF 1.0; Bishop, *Pattern Recognition and Machine Learning* (2006); Goodfellow et al., *Deep Learning* (2016); LeCun, Bengio & Hinton, *Deep Learning* (Nature, 2015)
  - updated:: 2026-06-13
