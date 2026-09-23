
Mental shortcuts or simple decision rules that trade completeness and guaranteed optimality for speed and low cognitive or computational cost. In psychology, heuristics such as availability, representativeness, and anchoring explain how humans judge under uncertainty; in computer science, heuristic functions guide search and optimisation algorithms towards good solutions when exhaustive evaluation is intractable. Heuristics are adaptive in the environments they evolved for but produce systematic biases outside them.

- ### Semantic Classification

- ### Content

  ## Definition

  **Heuristics** are simple, efficient rules — learned, evolved, or engineered — that produce satisfactory decisions quickly without evaluating every alternative. The concept sits at the intersection of psychology, economics, and artificial intelligence. Herbert Simon introduced heuristics as the operational core of [[Bounded Rationality]]: because real agents have limited time, information, and computation, they *satisfice* using rules of thumb rather than optimise as classical [[Decision Theory]] prescribes.

  The heuristics-and-biases programme of Tversky and Kahneman (1974) catalogued the shortcuts humans actually use — availability (judging frequency by ease of recall), representativeness (judging probability by similarity to a prototype), and anchoring-and-adjustment — and showed each produces predictable, systematic errors. Gerd Gigerenzer's competing fast-and-frugal programme reframed the same shortcuts as *ecologically rational*: rules such as take-the-best or the recognition heuristic can match or beat complex models when information is scarce, a phenomenon later formalised as the bias–variance trade-off.

  In artificial intelligence, a heuristic is an evaluation function that estimates the promise of a search state. A* search relies on admissible heuristics for optimality guarantees; combinatorial optimisation uses metaheuristics (simulated annealing, genetic algorithms, tabu search) when exact solutions are intractable. The two traditions converge in modern cognitive science, which treats human heuristics as resource-rational approximations to Bayesian inference.

  ## Technical Details

  Key distinctions in the study of heuristics:

  - **Admissible vs. inadmissible** (AI search): an admissible heuristic never overestimates the true cost to the goal, preserving optimality of A*; inadmissible heuristics trade optimality for speed.
  - **Descriptive vs. prescriptive** (psychology): the heuristics-and-biases tradition documents deviations from normative models, whilst fast-and-frugal research prescribes simple rules for specific environments.
  - **Effort–accuracy trade-off**: heuristics reduce computation by ignoring information; whether this hurts accuracy depends on the statistical structure of the environment (less-is-more effects occur when cue validities are skewed and samples small).
  - **Applications**: triage rules in medicine, one-reason decision rules in finance, branch-and-bound pruning, and reward shaping in reinforcement learning all deploy heuristics deliberately.

  ## Current Landscape

  - Heuristics research has migrated into AI evaluation: a large-scale benchmark of 30 cognitive biases across 20 state-of-the-art large language models (30,000 generated tests, published 2024–2025) reported evidence of all 30 tested biases in at least some models, including anchoring, availability, and framing effects.
  - A 2024 replication of Jacowitz and Kahneman's classic anchoring paradigm across four LLMs (GPT-4, GPT-3.5, Gemini Pro, Claude 2) measured a mean anchoring index of 0.37, comparable to the human benchmark of 0.49 — machine judgement inherits human shortcut behaviour from training data.
  - Findings presented at EMNLP 2025 indicate that reasoning models with long chain-of-thought are measurably less prone to the anchoring effect, suggesting deliberative computation partially substitutes for explicit debiasing.
  - Mitigation is an active front: frameworks such as BiasBuster (16,800 evaluation prompts) and awareness-reminder prompting reduce measured bias in high-stakes decision tasks, echoing the psychology literature's debiasing programme.

  **Sources**:
  - https://arxiv.org/html/2410.15413v2
  - https://arxiv.org/html/2410.02820v3
  - https://www.sciencedirect.com/science/article/pii/S2214635024000868
  - https://aclanthology.org/anthology-files/anthology-files/pdf/findings/2025.findings-emnlp.240.pdf

- ### Provenance

