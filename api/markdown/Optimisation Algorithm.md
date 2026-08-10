public:: true
alias:: Optimization Algorithm

# Optimisation Algorithm
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:optimisation-algorithm", "@type":"Page", "title":"Optimisation Algorithm", "vc:slug":"optimisation-algorithm", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:optimisation-algorithm",
  "@type":"Class",
  "label":"Optimisation Algorithm",
  "definition":"An optimisation algorithm is a systematic procedure for finding the values of decision variables that minimise or maximise an objective function, optionally subject to constraints. It spans first-order gradient methods, second-order Newton-type methods, derivative-free and metaheuristic search, and convex programming solvers, each trading convergence speed, robustness, and assumptions about the objective. In machine learning, optimisation algorithms drive model training by iteratively reducing a loss function, making them the engine that turns data and architecture into fitted parameters.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:mathematical-optimisation","label":"Mathematical Optimisation"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:stochastic-gradient-descent","label":"Stochastic Gradient Descent"},
      {"@id":"urn:ngm:class:adam-optimiser","label":"Adam Optimiser"},
      {"@id":"urn:ngm:class:learning-rate-schedule","label":"Learning Rate Schedule"},
      {"@id":"urn:ngm:class:momentum","label":"Momentum"},
      {"@id":"urn:ngm:class:weight-decay","label":"Weight Decay"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:mathematical-optimisation","label":"Mathematical Optimisation"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:loss-function","label":"Loss Function"},
      {"@id":"urn:ngm:class:objective-function","label":"Objective Function"},
      {"@id":"urn:ngm:class:gradient","label":"Gradient"},
      {"@id":"urn:ngm:class:automatic-differentiation","label":"Automatic Differentiation"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"},
      {"@id":"urn:ngm:class:loss-function","label":"Loss Function"},
      {"@id":"urn:ngm:class:objective-function","label":"Objective Function"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:model-training","label":"Model Training"},
      {"@id":"urn:ngm:class:hyperparameter-optimisation","label":"Hyperparameter Optimisation"},
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"},
      {"@id":"urn:ngm:class:machine-learning-discipline-model","label":"Machine Learning Model"},
      {"@id":"urn:ngm:class:neural-network-architecture","label":"Neural Network Architecture"},
      {"@id":"urn:ngm:class:reinforcement-learning","label":"Reinforcement Learning"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:convex-optimisation","label":"Convex Optimisation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:statistics","label":"Statistics"},
      {"@id":"urn:ngm:class:mini-batch","label":"Mini-Batch"},
      {"@id":"urn:ngm:class:regularisation","label":"Regularisation"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:evolutionary-algorithm","label":"Evolutionary Algorithm"},
      {"@id":"urn:ngm:class:bayesian-optimisation","label":"Bayesian Optimisation"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"},
      {"@id":"urn:ngm:class:operations-research","label":"Operations Research"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:simulated-annealing","label":"Simulated Annealing"},
      {"@id":"urn:ngm:class:genetic-algorithm","label":"Genetic Algorithm"},
      {"@id":"urn:ngm:class:hyperparameter-tuning","label":"Hyperparameter Tuning"},
      {"@id":"urn:ngm:class:convergence","label":"Convergence"},
      {"@id":"urn:ngm:class:hyperparameter","label":"Hyperparameter"},
      {"@id":"urn:ngm:class:generalisation","label":"Generalisation"},
      {"@id":"urn:ngm:class:overfitting","label":"Overfitting"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:numerical-optimiser","label":"Numerical Optimiser"},
    {"@id":"urn:ngm:class:training-algorithm","label":"Training Algorithm"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An [[Optimisation Algorithm]] is a systematic procedure for finding decision-variable values that minimise or maximise an [[Objective Function]], possibly under constraints.
	- It is a concrete instance of [[Mathematical Optimisation]], spanning gradient, Newton-type, and derivative-free methods.
	- In machine learning it drives [[Model Training]] by iteratively reducing a [[Loss Function]].
- ### Overview
	- Optimisation algorithms turn an objective and a feasible region into a sequence of candidate points that converge towards an optimum. The right choice depends on the structure of the problem: convexity, smoothness, dimensionality, and whether gradients are available.
	- First-order methods such as [[Gradient Descent]] and its stochastic variant use only the objective and its gradient, scaling to the millions of parameters typical of deep networks. Second-order methods exploit curvature for faster local convergence at higher per-step cost.
	- When the objective is non-differentiable, noisy, or combinatorial, derivative-free metaheuristics, including [[Genetic Algorithm|genetic algorithms]] and [[Simulated Annealing]], explore the space stochastically.
	- Convex optimisation provides strong guarantees: any local optimum is global, and efficient solvers exist for problems cast in convex form.
- ### Key aspects
	- Convergence rate and computational cost per iteration.
	- Sensitivity to step size, conditioning, and initialisation.
	- Handling of constraints via projection, penalties, or duality.
	- Global versus local optimality guarantees.
- ### Applications
	- Training neural networks and statistical models.
	- [[Hyperparameter Optimisation]] and architecture search.
	- Operations research, logistics, and resource allocation.
	- Engineering design and control.
- ### Relationships
	- hasPart:: [[Gradient Descent]]
	- hasPart:: [[Stochastic Gradient Descent]]
	- hasPart:: [[Adam Optimiser]]
	- hasPart:: [[Learning Rate Schedule]]
	- hasPart:: [[Momentum]]
	- hasPart:: [[Weight Decay]]
	- partOf:: [[Mathematical Optimisation]]
	- dependsOn:: [[Loss Function]]
	- dependsOn:: [[Objective Function]]
	- dependsOn:: [[Gradient]]
	- dependsOn:: [[Automatic Differentiation]]
	- requires:: [[Gradient Descent]]
	- requires:: [[Backpropagation]]
	- requires:: [[Loss Function]]
	- requires:: [[Objective Function]]
	- enables:: [[Model Training]]
	- enables:: [[Hyperparameter Optimisation]]
	- enables:: [[Deep Learning]]
	- enables:: [[Machine Learning Model]]
	- enables:: [[Neural Network Architecture]]
	- enables:: [[Reinforcement Learning]]
	- implements:: [[Convex Optimisation]]
	- uses:: [[Statistics]]
	- uses:: [[Mini-Batch]]
	- uses:: [[Regularisation]]
	- contrastsWith:: [[Evolutionary Algorithm]]
	- contrastsWith:: [[Bayesian Optimisation]]
	- bridgesTo:: [[Numerical Methods]]
	- bridgesTo:: [[Operations Research]]
	- relatedTo:: [[Simulated Annealing]]
	- relatedTo:: [[Genetic Algorithm]]
	- relatedTo:: [[Hyperparameter Tuning]]
	- relatedTo:: [[Convergence]]
	- relatedTo:: [[Hyperparameter]]
	- relatedTo:: [[Generalisation]]
	- relatedTo:: [[Overfitting]]
- ### Current Landscape (2026)
  - The biggest shift since 2024 is the displacement of AdamW as the default for large-scale training by Muon (MomentUm Orthogonalised by Newton-Schulz), introduced by Keller Jordan in late 2024, which orthogonalises the momentum matrix via cheap Newton-Schulz iterations rather than an SVD.
  - Moonshot AI's "Muon is Scalable for LLM Training" (arXiv 2502.16982, Feb 2025) added weight decay and per-parameter RMS update scaling, reporting roughly 2x compute efficiency (~52% of AdamW FLOPs to match loss) and validating it on the 3B/16B-active Moonlight MoE trained on 5.7T tokens.
  - Moonshot's Kimi K2 (arXiv 2507.20534, July 2025) introduced MuonClip, pairing Muon with a QK-Clip mechanism that rescales query/key projections to cap exploding attention logits; it pre-trained a 1T-parameter (32B-active) MoE on 15.5T tokens with zero loss spikes.
  - Essential AI's "Practical Efficiency of Muon" (arXiv 2505.02222, May 2025) showed Muon expands AdamW's compute-time Pareto frontier especially at large batch sizes (10-15% fewer tokens up to 16M-token batches) and transfers cleanly under maximal-update parameterisation (muP).
  - Adoption is now industry-scale: NVIDIA added Muon support to Megatron with optimised Newton-Schulz kernels on GB300 NVL72 (2026), citing Kimi K2 and GLM-5 as production models trained with it, while variants such as SOAP (Vyas et al., 2025) and AdaMuon (July 2025) continue to appear.
  - The AlgoPerf benchmark results (Kasimbeg et al., 2025) formalised the competitive field, with Shampoo winning the external-tuning track and Schedule-Free AdamW (Defazio et al.) winning the self-tuning track, reflecting a move toward preconditioned and hyperparameter-light methods.
  - Open challenges as of 2026 include numerical stability and communication cost of matrix orthogonalisation under FSDP/ZeRO sharding, extending second-order gains reliably beyond 2D matrices (embeddings, norms, heads still use AdamW), and demonstrating that these token-efficiency wins hold across post-training, diffusion and non-transformer regimes.

- ### References
  - 1. Liu et al. / Moonshot AI (2025). Muon is Scalable for LLM Training. https://arxiv.org/abs/2502.16982
  - 2. Moonshot AI (2025). Kimi K2: Open Agentic Intelligence (MuonClip / QK-Clip). https://arxiv.org/abs/2507.20534
  - 3. Essential AI (2025). Practical Efficiency of Muon for Pretraining. https://arxiv.org/html/2505.02222v1
  - 4. NVIDIA (2026). Advancing Emerging Optimizers for Accelerated LLM Training with NVIDIA Megatron. https://developer.nvidia.com/blog/advancing-emerging-optimizers-for-accelerated-llm-training-with-nvidia-megatron/
  - 5. AdaMuon: Adaptive Muon Optimizer (2025). https://arxiv.org/html/2507.11005v1
  - 6. Benchmarking Optimizers for Large Language Model Pretraining (2025). https://arxiv.org/html/2509.01440v1

- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
