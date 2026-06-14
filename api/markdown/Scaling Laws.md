public:: true

# scaling laws
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52b7fa328c8474bd2b3ff81865a009c339287470aaffc604bfba7fa5b10110c1",
  "@type": "Page",
  "vc:slug": "scaling-laws",
  "title": "scaling laws",
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
  "@id": "urn:ngm:class:scaling-laws",
  "@type": "Class",
  "label": "Scaling Laws",
  "definition": "Scaling Laws are empirical power-law relationships describing how the performance of neural networks — typically measured as held-out cross-entropy loss — varies predictably as a function of model parameters (N), training data volume (D), and total compute budget (C). Foundational Kaplan et al. (2020) work established smooth, predictable loss curves across many orders of magnitude, while Hoffmann et al. (2022) Chinchilla analyses refined optimal compute allocation to roughly equal scaling of model size and training tokens. These relationships guide architectural decisions, compute budgeting, and capability forecasting for large foundation models. Scaling laws have since been extended beyond language modelling to vision transformers, multimodal architectures, and reinforcement learning from human feedback.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:compute-budget", "label": "Compute Budget"},
      {"@id": "urn:ngm:class:cross-entropy-loss", "label": "Cross-Entropy Loss"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:pre-training", "label": "Pre-Training"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:capability-forecasting", "label": "Capability Forecasting"},
      {"@id": "urn:ngm:class:compute-optimal-training", "label": "Compute-Optimal Training"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:parameter-count", "label": "Parameter Count"},
      {"@id": "urn:ngm:class:token-count", "label": "Token Count"},
      {"@id": "urn:ngm:class:power-law-exponent", "label": "Power Law Exponent"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:floating-point-operations", "label": "Floating-Point Operations"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:foundation-models", "label": "Foundation Models"},
      {"@id": "urn:ngm:class:ai-infrastructure-planning", "label": "AI Infrastructure Planning"},
      {"@id": "urn:ngm:class:neural-architecture-search", "label": "Neural Architecture Search"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:emergent-abilities", "label": "Emergent Abilities"},
      {"@id": "urn:ngm:class:diminishing-returns", "label": "Diminishing Returns"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:power-law", "label": "Power Law"},
      {"@id": "urn:ngm:class:irreducible-loss", "label": "Irreducible Loss"},
      {"@id": "urn:ngm:class:data-efficiency", "label": "Data Efficiency"},
      {"@id": "urn:ngm:class:model-compression", "label": "Model Compression"},
      {"@id": "urn:ngm:class:empirical-machine-learning", "label": "Empirical Machine Learning"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-hardware", "label": "AI Hardware"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:neural-scaling-laws", "label": "Neural Scaling Laws"},
    {"@id": "urn:ngm:class:compute-scaling-laws", "label": "Compute Scaling Laws"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Scaling Laws are empirical [[Power Law]] relationships governing how the performance of [[Neural Network]]s — principally held-out [[Cross-Entropy Loss]] — changes predictably as a function of three primary axes: the number of [[Parameter Count|model parameters]] (N), the volume of [[Training Data]] (D), and the total [[Compute Budget]] in floating-point operations (C). Originally established for [[Large Language Models]] by Kaplan et al. in 2020, these laws have since been extended to [[Vision Transformers]], [[Multimodal Models]], and [[Reinforcement Learning from Human Feedback]], making them among the most practically powerful empirical tools in [[Machine Learning]] research.

- ### Overview
  - Scaling Laws emerged from systematic empirical investigations showing that neural network loss does not decrease arbitrarily or unpredictably as models grow — it follows smooth, regular curves across many orders of magnitude of scale.
  - The canonical form expresses loss as a power function: L(N) ≈ A/N^α, L(D) ≈ B/D^β, and L(C) ≈ C'/C^γ, where α, β, and γ are empirically estimated exponents typically in the range 0.05–0.3 depending on the domain.
  - Crucially, compute-optimal analyses (the "Chinchilla" paradigm) demonstrated that many earlier flagship models were significantly undertrained: given a fixed compute budget, the optimal strategy allocates compute roughly equally between model size and number of training tokens, rather than maximising parameters alone.
  - Scaling Laws matter because they allow practitioners to predict, rather than merely discover, how good a model will be before committing to expensive training runs — enabling rigorous [[AI Infrastructure Planning]] and [[Capability Forecasting]].
  - The regularity of scaling laws is sometimes disrupted by "grokking" phenomena, phase transitions, and the appearance of [[Emergent Abilities]] — capabilities that arise abruptly and non-linearly at sufficiently large scales — which remain active research frontiers.

- ### Key Mechanisms
  - **Parameter Scaling (N axis)**
    - Loss decreases as a power law of the number of trainable parameters N, holding compute and data fixed.
    - The relationship saturates when model capacity exceeds what the training data can support, leading to [[Overfitting]] or wasted capacity.
    - Used to determine minimum viable model size for a target loss on a given domain.
  - **Data Scaling (D axis)**
    - More [[Training Data]] reduces loss along a parallel power-law curve.
    - Chinchilla-style analyses show D and N must scale together: optimal N ∝ C^0.5 and D ∝ C^0.5 for a given compute budget C.
    - [[Data Efficiency]] becomes critical when high-quality data is scarce — motivating synthetic data generation and [[Data Curation]] techniques.
  - **Compute Scaling (C axis)**
    - Total FLOPs consumed during training ≈ 6ND for a standard [[Transformer Architecture]] training run.
    - The C-optimal frontier identifies (N*, D*) pairs that minimise loss for each compute budget.
    - Used by labs to decide when to invest in additional [[Pre-Training]] versus investing in [[Fine-Tuning]] or [[Post-Training Alignment]].
  - **Irreducible Loss (L∞)**
    - All empirical scaling laws asymptote to an irreducible floor, reflecting the inherent entropy of the data-generating distribution.
    - [[Irreducible Loss]] quantifies the information-theoretic ceiling on compression achievable by the model.
  - **Power Law Exponents**
    - The precise exponents α, β, γ vary by architecture, tokenisation scheme, domain, and training procedure.
    - Estimating these exponents from small-scale "scaling runs" before committing full compute is a standard industrial practice.
    - Architectural improvements (e.g., attention variants, sparse mixtures) can shift the scaling coefficient without changing the exponent.

- ### Applications and Use Cases
  - **Pre-training Budget Allocation**
    - Research labs use compute-optimal formulae derived from scaling laws to allocate GPU-hours between model size and training tokens before launching large training runs.
    - Informs decisions such as the choice between training one large [[Foundation Models|foundation model]] or several smaller specialist models.
  - **Model Selection and Deployment**
    - Scaling law extrapolations guide decisions about whether a planned model will achieve target downstream performance at acceptable inference cost.
    - Supports trade-offs between [[Model Compression]] (distillation, quantisation) and further [[Pre-Training]].
  - **Capability Forecasting**
    - Governments, safety organisations, and AI labs use scaling law projections to anticipate when models may reach capability thresholds relevant to [[AI Safety]] and governance.
    - Informing policy discussions about compute governance, export controls on [[AI Hardware]], and frontier model evaluation requirements.
  - **Architecture Research**
    - [[Neural Architecture Search]] and ablation studies use scaling laws to distinguish genuine architectural gains (shifting the coefficient) from those that merely track overall parameter count.
    - Mixture-of-Experts architectures have been specifically designed to achieve better scaling coefficients by decoupling parameter count from active compute per token.
  - **Domain-Specific Extensions**
    - Vision: [[Vision Transformers]] obey similar N- and D-scaling laws, enabling principled scaling of image recognition and generation systems.
    - Code: Coding models show faster loss decay per parameter than natural language, suggesting domain-specific scaling coefficients.
    - Multimodal: [[Multimodal Models]] exhibit compound scaling laws across modalities, with cross-modal interactions creating more complex Pareto frontiers.
    - Reinforcement Learning: Policy gradient methods and [[Reinforcement Learning from Human Feedback]] show scaling with environment interactions and reward model quality, though the functional forms are less settled.

- ### Relationships
  - dependsOn:: [[Model Training]]
  - dependsOn:: [[Training Data]]
  - dependsOn:: [[Compute Budget]]
  - dependsOn:: [[Cross-Entropy Loss]]
  - enables:: [[Pre-Training]]
  - enables:: [[Large Language Models]]
  - enables:: [[Capability Forecasting]]
  - enables:: [[Compute-Optimal Training]]
  - hasPart:: [[Parameter Count]]
  - hasPart:: [[Token Count]]
  - hasPart:: [[Power Law Exponent]]
  - uses:: [[Transformer Architecture]]
  - uses:: [[Floating-Point Operations]]
  - uses:: [[Neural Network]]
  - supports:: [[Foundation Models]]
  - supports:: [[AI Infrastructure Planning]]
  - supports:: [[Neural Architecture Search]]
  - contrastsWith:: [[Emergent Abilities]]
  - contrastsWith:: [[Diminishing Returns]]
  - relatedTo:: [[Power Law]]
  - relatedTo:: [[Irreducible Loss]]
  - relatedTo:: [[Data Efficiency]]
  - relatedTo:: [[Model Compression]]
  - bridges-to:: [[AI Safety]]
  - bridges-to:: [[AI Hardware]]

- ### Standards and Context
  - No formal standards body governs scaling law methodology; practices are established by community consensus through peer-reviewed publications and replication studies.
  - Influential foundational works include the OpenAI Kaplan et al. (2020) paper ("Scaling Laws for Neural Language Models") and the DeepMind Hoffmann et al. (2022) Chinchilla paper, both of which have been widely replicated and extended.
  - The [[MLCommons]] benchmarking ecosystem indirectly standardises training conditions that underpin reproducible scaling measurements.
  - AI governance bodies (e.g., US NIST AI RMF, EU AI Act compute thresholds) increasingly reference scaling-law-derived capability thresholds when defining frontier model categories subject to enhanced oversight.
  - Academic benchmarks such as [[BIG-Bench]] and [[HELM]] are used to validate scaling law predictions against downstream task performance, bridging empirical loss metrics to practical capability assessments.
  - Debate continues about whether scaling laws are universal physical laws, emergent statistical artefacts of gradient descent, or simply useful approximations that may break down at extreme scale or under distribution shift.

- ### Key Distinctions
  - **Scaling Laws vs [[Emergent Abilities]]**: Scaling laws describe smooth, predictable loss curves; emergent abilities appear as sharp, discontinuous capability jumps on specific benchmarks. These two phenomena may co-exist — emergence may reflect the crossing of loss thresholds that appear sharp only when evaluated on discrete tasks.
  - **Compute-Optimal vs Parameter-Efficient**: Compute-optimal scaling (Chinchilla) maximises performance per FLOP during training; parameter-efficient methods (e.g., [[LoRA]], [[Adapter Tuning]]) maximise performance per parameter at inference, creating a two-phase optimisation landscape.
  - **Scaling vs [[Architecture Search]]**: Scaling laws characterise performance at fixed architecture; architectural innovations that shift the power-law coefficient are orthogonal to, and compound with, scale benefits.

- ### Provenance
  - sources:: Kaplan et al. (2020) "Scaling Laws for Neural Language Models"; Hoffmann et al. (2022) "Training Compute-Optimal Large Language Models"; Zhai et al. (2022) "Scaling Vision Transformers"
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
