Machine Learning is a sub-field of Artificial Intelligence in which computational systems learn to improve their performance on tasks by identifying statistical patterns in data rather than by following explicitly programmed rules. A model is exposed to a training dataset, an optimisation algorithm adjusts its parameters to minimise a loss function, and the resulting parameters generalise to unseen inputs. The discipline encompasses supervised learning from labelled examples, unsupervised learning from unlabelled structure, and reinforcement learning from reward signals in interactive environments. Foundational to modern AI stacks, machine learning underpins capabilities ranging from image recognition and natural language processing to recommendation systems and autonomous decision-making.

### Overview

- Machine learning emerged in the mid-twentieth century at the intersection of statistics, computational neuroscience, and cybernetics, with Arthur Samuel coining the term in 1959.
- The modern era is defined by the convergence of large-scale [[Training Data]], specialised [[Computational Infrastructure]] (GPUs/TPUs), and [[Deep Learning]] architectures that learn hierarchical representations end-to-end.
- Three canonical learning paradigms partition the field:
  - **Supervised Learning** — a model maps inputs to outputs using labelled training pairs; encompasses classification and regression.
  - **Unsupervised Learning** — a model discovers latent structure from unlabelled data; encompasses clustering, density estimation, and dimensionality reduction.
  - **Reinforcement Learning** — an agent learns a policy by maximising cumulative reward signals from interactions with an environment.
- [[Transfer Learning]] and [[Federated Learning]] extend these paradigms to low-data and privacy-sensitive settings respectively.
- The discipline sits at the heart of the modern [[Artificial Intelligence]] stack, with [[Generative AI]] representing the most visible recent application surface.

### Key Components

#### Data

- [[Training Data]] quality, quantity, and representativeness are primary determinants of model performance.
- [[Feature Engineering]] transforms raw inputs into informative representations; deep models partially automate this via learned embeddings.
- [[Data Pipeline|Data Pipelines]] handle ingestion, cleaning, transformation, and versioning of training and evaluation corpora.
- Held-out validation and test splits guard against overfitting and measure generalisation.

#### Model Families

- [[Neural Network|Neural Networks]] — parametric function approximators composed of differentiable operations; backbone of [[Deep Learning]].
- Kernel methods (SVMs, Gaussian Processes) — geometry-aware models with strong theoretical guarantees.
- Ensemble methods (random forests, gradient boosting) — combine many weak learners for robust predictions.
- Probabilistic graphical models — encode structured independence assumptions; support [[Bayesian Inference]].
- [[Generative AI|Generative Models]] — learn data distributions to enable synthesis; includes VAEs, diffusion models, and autoregressive language models.

#### Optimisation

- [[Gradient Descent]] and its stochastic variants (SGD, Adam) minimise a loss function by iteratively updating parameters in the direction of steepest descent.
- [[Bayesian Optimisation]] guides hyperparameter search efficiently when evaluations are expensive.
- [[Optimisation Algorithm|Optimisation Algorithms]] are coupled with learning-rate schedules, momentum, and adaptive step-size methods for stable convergence.

#### Evaluation

- Metrics are task-specific: accuracy, F1, AUC-ROC for classification; RMSE, MAE for regression; BLEU/ROUGE for text generation; mAP for detection.
- Benchmark datasets (ImageNet, GLUE, SuperGLUE, BIG-Bench) provide standardised comparison surfaces.
- Cross-validation, confidence intervals, and statistical significance tests support rigorous evaluation.

### Mechanisms

#### Supervised Learning

- The model is trained on pairs (x, y) to approximate a mapping f: x → y.
- Regression predicts continuous targets; classification assigns discrete class labels.
- Loss functions — cross-entropy, mean squared error — measure divergence between predictions and ground truth.
- Regularisation (L1/L2, dropout, early stopping) constrains model complexity to improve generalisation.

#### Unsupervised Learning

- Clustering (k-means, DBSCAN) assigns data points to cohesive groups without label supervision.
- Dimensionality reduction (PCA, t-SNE, UMAP) projects high-dimensional data into lower-dimensional representations preserving structure.
- Generative modelling learns the data distribution p(x) to enable sampling and density estimation.
- Self-supervised objectives (masked prediction, contrastive learning) construct pseudo-labels from the data itself, enabling large-scale pre-training.

#### Reinforcement Learning

- An agent observes state s, selects action a, receives reward r, and transitions to next state s'.
- Policy gradient methods (PPO, A3C) directly optimise the policy; value-based methods (DQN) estimate the expected return.
- Model-based RL learns a world model to plan; model-free RL learns from raw trial-and-error.
- [[Reinforcement Learning]] is foundational to RLHF, the technique that aligns large language models with human preferences.

#### Deep Learning

- [[Deep Learning]] stacks multiple non-linear transformations (layers) to learn hierarchical feature representations.
- Convolutional Neural Networks (CNNs) exploit spatial locality for image tasks.
- Transformer architectures use attention mechanisms to model long-range dependencies; dominant in [[Natural Language Processing]] and vision.
- [[Transfer Learning]] pre-trains large models on broad corpora, then fine-tunes on downstream tasks with limited data.

### Applications

#### Natural Language Processing

- [[Natural Language Processing]] tasks — translation, summarisation, question answering, sentiment analysis — are now dominated by transformer-based models trained on web-scale text.
- Large language models (LLMs) are the primary driver of [[Generative AI]] products and enterprise [[Intelligent Automation]].

#### Computer Vision

- [[Computer Vision]] tasks — image classification, object detection, semantic segmentation, depth estimation — underpin [[Autonomous Systems]], medical imaging, and industrial inspection.
- Vision transformers (ViTs) and hybrid CNN-transformer architectures achieve state-of-the-art results.

#### Recommendation and Personalisation

- [[Recommendation System|Recommendation Systems]] leverage collaborative filtering, content-based methods, and deep retrieval models to personalise content across e-commerce, streaming, and social media.

#### Robotics

- [[Robotics]] uses machine learning for perception, motion planning, manipulation, and sim-to-real transfer.
- [[Reinforcement Learning]] trains robot policies in simulation before deployment on physical hardware.

#### Scientific Discovery

- ML accelerates drug discovery, materials science, climate modelling, and genomics by learning patterns in high-dimensional experimental datasets.

#### Infrastructure and Operations

- ML powers anomaly detection in [[Network Security]], predictive maintenance in industrial systems, and load forecasting in [[Smart Grid]] networks.
- [[Supply Chain Optimisation]] uses ML for demand forecasting, routing, and inventory management.

### Standards & Context

- [[ISO/IEC 23053:2022]] defines a framework for AI systems using machine learning, providing terminology and taxonomic structure for supervised, unsupervised, and reinforcement learning paradigms.
- [[ISO/IEC 42001:2023]] covers AI management systems and references machine learning as the primary AI implementation technology.
- [[NIST AI Risk Management Framework]] (AI Risk Management Framework) addresses risks arising from ML models including bias, robustness failures, and distributional shift.
- The [[OECD]] Principles on AI establish human oversight, transparency, and accountability norms specifically applicable to ML-based systems.
- Ethics and [[Data Governance]] frameworks (GDPR, the EU AI Act) impose data minimisation, explainability, and auditability requirements on ML deployments.
- Leading research venues include [[ICML]], NeurIPS, and ICLR, which collectively set research directions and disseminate benchmark results.
- [[Bayesian Optimisation]] is a widely-used ML sub-technique for automated hyperparameter search across model families.

### Current Landscape (2026)

- The field has pivoted from raw pretraining scaling towards inference-time (test-time) compute and explicit reasoning: frontier "reasoning" models such as GPT-5.1/5.2, Google's Gemini 3.1 Pro and Anthropic's top model now dynamically adjust reasoning effort, with Stanford HAI's 2026 AI Index reporting SWE-bench Verified performance rising from roughly 60% in 2024 to near 100% in 2025 and MLE-bench agent success climbing from about 17% to 64.4% by early 2026.
- Benchmarks that were previously well above machine capability have saturated: leading models now meet or exceed human baselines on GPQA Diamond (PhD-level science), MMMU (multimodal) and competition maths (AIME/MathArena), with the top 15 models clustered above 87% on MMLU-Pro as of early 2026.
- Industry produced over 90% of notable frontier models in 2025, and US and Chinese labs have repeatedly traded the lead — DeepSeek-R1 briefly matched top US systems in February 2025, and as of March 2026 the gap between the leading US and Chinese models was as little as 2.7%.
- The frontier is broadening beyond text into agentic tool-use (still brittle over 20+ step long-horizon tasks), World Foundation Models, physical/robotics foundation models, and a rise of small and specialised foundation models plus neurosymbolic/causal hybrids that pair deep learning with deterministic rules.
- Regulation matured sharply: the EU AI Act became broadly applicable on 2 August 2026 with the AI Office holding GPAI enforcement powers, GPAI systemic-risk obligations (10^25 FLOP presumption) live since August 2025 under a July 2025 Code of Practice, and Foundation Model Transparency Index penalties triggering 2 August 2026; standards such as ISO/IEC 42001 and the NIST AI RMF are now widely cited by organisations.
- Safety and governance frameworks tightened, with Google DeepMind publishing a third iteration of its Frontier Safety Framework (17 April 2026) adding Critical Capability Levels for harmful manipulation and misaligned ML R&D acceleration.
- Open challenges as of 2026 remain acute: hallucination rates across 26 top models range from 22% to 94%, documented AI incidents rose to 362 in 2025 (up from 233), safety collapses under adversarial jailbreaks, average transparency scores fell to 40, and regulators struggle to cover agentic runtime behaviour and inference-time compute that existing pretraining-focused thresholds do not capture.

### References

- 1. Stanford HAI (2026). The 2026 AI Index Report — Technical Performance & Responsible AI. https://hai.stanford.edu/ai-index/2026-ai-index-report
- 2. European Commission (2026). AI Act — Regulatory framework for AI (Regulation (EU) 2024/1689). https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- 3. Google DeepMind (2026). Strengthening our Frontier Safety Framework (third iteration, updated 17 April 2026). https://deepmind.google/blog/strengthening-our-frontier-safety-framework/
- 4. Bommasani et al. (2025). The 2025 Foundation Model Transparency Index. https://arxiv.org/html/2512.10169v1
- 5. Pistillo et al. (2025). Governing AI Beyond the Pretraining Frontier. https://arxiv.org/html/2502.15719v1

### Provenance

## Merged from Machine Learning Discipline (needs reconciliation)
Machine Learning is the branch of artificial intelligence in which systems learn predictive or generative models directly from data, without being explicitly programmed with domain rules. It encompasses supervised, unsupervised, and reinforcement learning paradigms, and forms the foundation for deep learning, natural language processing, and computer vision applications. Practical machine learning involves data preparation, feature engineering, model selection, training, evaluation, and deployment within a production pipeline.

### Semantic Classification

### Content

- Machine learning (ML) is a process that enables computational systems to understand data and gain knowledge from experience without being explicitly programmed. Machine learning systems improve their performance through exposure to data and learn patterns to make predictions or decisions based on statistical patterns in the data.

  **Source**: ISO/IEC 22989:2022, Clause 3.1.8 - Authority Score: 0.95

### Paradigms of Scientific Discovery

- Bishop discusses the five paradigms of scientific discovery, drawing on the work of Jim Gray.
  - **Empirical Paradigm:** Observation and experimentation (e.g., a cave dweller dropping rocks).
  - **Theoretical Paradigm:** Describing nature through mathematical equations (e.g., Newton's laws, Maxwell's equations, Schrödinger's equation).
  - **Simulation Paradigm:** Using digital computers to solve complex equations (e.g., weather forecasting).
  - **Data-Intensive Paradigm:**  Utilising large datasets and machine learning (e.g., particle physics at CERN).
  - **Fifth Paradigm:** Training machine learning systems using simulation data to create emulators, which are much faster than traditional simulations.

## Microsoft AI for Science

- Chris Bishop is Microsoft Technical Fellow and Director of Microsoft Research AI for Science. ([Microsoft Research Podcast](https://www.microsoft.com/en-us/research/podcast/ai-frontiers-a-deep-dive-into-deep-learning-with-ashley-llorens-and-chris-bishop/))
  - Factors include data availability (both experimental and synthetic), the potential for real-world impact at scale, and bottlenecks in existing processes.
  - Microsoft focuses on the molecular level, given the enormous space of potential molecules for drugs, materials, and more.

    ## Academic Context

- Machine learning represents a fundamental paradigm shift in computational systems, enabling algorithms to improve performance through data exposure rather than explicit programming[2][4]
- Formally defined as a subset of artificial intelligence that uses statistical methods and computational techniques to identify patterns and optimise model parameters[1][3]
- Distinguishes itself from traditional programming by allowing systems to adapt and modify behaviour based on experience with data, independent of programmer assumptions[4]
- Grounded in statistical inference and symbolic logic, with modern implementations increasingly relying on statistical models rather than rule-based systems[4]
- The intersection of machine learning with ontologies and knowledge representation has emerged as a particularly innovative research space[5]
- Ontologies provide formal specifications of concepts, relationships, and properties that enable machines to process information with greater semantic expressiveness[2][3]
- Machine learning systems utilise ontological frameworks to extract, code, and analyse structured and unstructured information more effectively[5]

  ## Current Landscape (2025)

- Industry adoption and implementations
- Machine learning has become embedded across consumer-facing systems including voice assistants (Siri, Alexa), autonomous vehicles (Tesla), and customer service platforms (Cogito)[4]
- Applications span predictive analytics, precision medicine, and differential diagnosis in clinical settings[5]
- Systems now routinely update their knowledge bases through experience with data, enabling continuous improvement without explicit reprogramming[4]
- Technical capabilities and limitations
- Machines can gather inputs, process them through statistical models, and synthesise information to generate hypotheses and classify knowledge[4]
- Pattern recognition and generalisation capabilities allow learned patterns to apply to previously unseen data[1]
- Performance improvements occur iteratively through training processes and exposure to training datasets[1]
- Effectiveness depends significantly on data quality, quantity, and representativeness—systems struggle with vague or vacuous naming conventions and sparse datasets[1]
- Standards and frameworks
- ISO/IEC 22989:2022 provides formal definitions emphasising learning from experience without explicit programming
- ISO/IEC 23053:2022 focuses on model parameter optimisation through computational techniques
- NIST frameworks address machine learning lifecycle ontologies for capturing and structuring ML system information[6]

  ## Research & Literature

- Key academic papers and sources
- Doan, P. et al. (2003). Ontology Matching: A Machine Learning Approach. Proceedings of the International Semantic Web Conference. Demonstrates GLUE system using machine learning to create semantic mappings between ontologies, focusing on taxonomy correspondences[1]
- Feilmayr, C. & Wöß, W. (2016). An analysis of ontologies and their success factors for application to business. Data & Knowledge Engineering, 101, 1-23. Refines ontology definitions emphasising formal, explicit specifications of shared conceptualisations with high semantic expressiveness[2]
- Gruber, T. R. (1993). A translation approach to portable ontology specifications. Knowledge Acquisition, 5(2), 199-220. Foundational work distinguishing ontologies from taxonomies and establishing that ontologies require axioms constraining possible interpretations[2]
- Ongoing research directions
- Natural language processing integration with ontologies for extracting structured information from electronic health records and medical texts[5]
- Word and node embedding algorithms supplementing NLP capabilities in clinical and research contexts[5]
- Hybrid approaches combining ontological frameworks with machine learning for improved semantic understanding[5]
- Experimental frameworks exploring AI-human co-evolution structures, though these remain nascent in academic discourse[2]

  ## UK Context

- British contributions to machine learning research remain substantial, though the search results do not identify specific North England innovation hubs with particular relevance to machine learning ontologies
- UK academic institutions contribute significantly to ontology research and knowledge representation frameworks
- Clinical applications of machine learning with ontological support are being implemented across NHS systems for precision medicine and diagnostic support[5]

  ## Future Directions

- Emerging trends and developments
- Machines increasingly receiving "prebuilt knowledge" based on common sense and general knowledge repositories (OpenCyc, WordNet), enhancing diagnostic and analytical capabilities[4]
- Greater ability to suggest medical diagnoses, analyse market trends, and perform complex customer service functions through improved ontological representations[4]
- Continued convergence of semantic technologies with machine learning systems for more sophisticated information processing[5]
- Anticipated challenges
- Ontologies require continuous refinement as new evidence and data inputs modify understanding of domains—static ontologies become obsolete[4]
- Balancing formal semantic expressiveness with computational efficiency remains an ongoing challenge[2]
- Ensuring machine learning systems maintain interpretability and alignment with human understanding as complexity increases[5]
- Research priorities
- Developing robust frameworks for ontology maintenance and evolution within machine learning pipelines[4]
- Advancing hybrid approaches that combine symbolic logic with statistical models for improved reasoning[4]
- Establishing standardised practices for knowledge representation in clinical and enterprise machine learning applications[5]

  ## References

  1. Doan, P., Madhavan, J., Domingos, P., & Halevy, A. (2003). Ontology Matching: A Machine Learning Approach. In Proceedings of the International Semantic Web Conference. Available at: https://homes.cs.washington.edu/~pedrod/papers/hois.pdf

  2. Gruber, T. R. (1993). A translation approach to portable ontology specifications. Knowledge Acquisition, 5(2), 199-220.

  3. Feilmayr, C. & Wöß, W. (2016). An analysis of ontologies and their success factors for application to business. Data & Knowledge Engineering, 101, 1-23.

  4. Bowles, M. (2024). Taxonomy vs Ontology: Machine Learning Breakthroughs. Dataversity. Available at: https://www.dataversity.net/articles/taxonomy-vs-ontology-machine-learning-breakthroughs/

  5. Hripcsak, G. & Albers, D. J. (2020). Ontologies, Knowledge Representation, and Machine Learning for Clinical Research. Yearbook of Medical Informatics, 29(1), 159-162. DOI: 10.1055/s-0040-1701991

  6. National Institute of Standards and Technology (NIST). An Introduction to Machine Learning Lifecycle Ontology and its Applications. Available at: https://www.nist.gov/publications/introduction-machine-learning-lifecycle-ontology-and-its-applications

<!-- Merged from MachineLearning.md: MetaverseDomain -->

### Provenance

