
A process reward model is a reward model that scores the individual intermediate steps of a model's reasoning trajectory rather than only its final answer. By supervising each step of a chain of thought, it provides dense, step-level feedback that guides search and reinforcement learning toward sound reasoning processes. Process reward models contrast with outcome reward models, which assign a single reward based solely on the final result.

- ### Overview
  - Provides dense, step-level rewards instead of a single outcome reward.
  - Guides tree search and reinforcement learning toward valid reasoning chains.
  - Improves robustness against shortcut answers that are correct for wrong reasons.
- ### Mechanisms
  - Step-level annotation of reasoning trajectories.
  - Dense reward signal across each chain-of-thought step.
  - Contrast with outcome reward models scoring only the final answer.
  - Use in best-of-N search, reranking, and policy optimisation.
- ### Applications
  - Mathematical and multi-step reasoning models.
  - Verifier-guided decoding and search.
  - Reinforcement learning from human or AI feedback on reasoning.
  - Reducing reward hacking in long-horizon tasks.
- ### Provenance

