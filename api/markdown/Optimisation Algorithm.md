
An optimisation algorithm is a systematic procedure for finding the values of decision variables that minimise or maximise an objective function, optionally subject to constraints. It spans first-order gradient methods, second-order Newton-type methods, derivative-free and metaheuristic search, and convex programming solvers, each trading convergence speed, robustness, and assumptions about the objective. In machine learning, optimisation algorithms drive model training by iteratively reducing a loss function, making them the engine that turns data and architecture into fitted parameters.

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

