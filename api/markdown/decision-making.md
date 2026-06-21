- ### Definition
  - Decision making is the cognitive and computational process of selecting a course of action from a set of available alternatives by evaluating options against objectives, constraints, and uncertainty, integrating normative frameworks from [[Decision Theory]] and [[Utility Theory]] with descriptive insights from [[Behavioural Economics]] and [[Cognitive Science]], and operationalising these in AI through [[Markov Decision Process]] models, [[Reinforcement Learning]], [[Bayesian Inference]], and [[Deep Learning]] architectures. At its core, a decision problem specifies a set of alternatives, an uncertain state space, a probability distribution over outcomes, and an [[Objective Function]] encoding preferences; normative decision theory prescribes how a [[Autonomous Agent]] with coherent [[Utility Theory|utility]] should choose, while descriptive accounts document the systematic departures — cognitive biases, framing effects, and motivational distortions — captured by [[Bounded Rationality]] theory and [[Behavioural Economics]]. In computational settings, sequential decision making is formalised through [[Markov Decision Process]] tuples that couple state transition dynamics with [[Reward Function|reward functions]], solved via dynamic programming or [[Reinforcement Learning]] when the model is unknown; in multi-agent contexts [[Game Theory]] extends single-agent choice to strategic settings where outcomes depend on the actions of multiple rational agents. The field bridges [[Probability Theory]], [[Control Theory]], [[Operations Research]], and [[Knowledge Representation]] to create operational policies for autonomous systems, clinical decision support, financial analytics, supply-chain [[Optimisation]], and [[Governance]] of high-stakes AI systems, forming the backbone of [[Policy Optimisation]] in modern [[Large Language Models]] trained via reinforcement learning from human feedback.

- ### Semantic Classification
  - owl-class:: ai:DecisionMaking
  - owl-role:: Concept | CognitivePhenomenon | ComputationalFramework | ExecutableProtocol
  - owl-inferred:: ai:RationalAgentProcess, ai:SequentialOptimisation, ai:CognitiveProcess
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Decision Theory]], [[Operations Research]], [[Cognitive Science]]
  - has-part:: [[Utility Theory]], [[Bayesian Inference]], [[Markov Decision Process]], [[Multi-Criteria Decision Analysis]], [[Heuristics]], [[Value Function]]
  - requires:: [[Uncertainty Quantification]], [[Objective Function]], [[Knowledge Representation]], [[Probability Theory]]
  - enables:: [[Autonomous Agent]], [[Planning]], [[Policy Optimisation]], [[Governance]], [[Risk Assessment]]
  - implements:: [[Decision Theory]], [[Utility Theory]], [[Bayesian Inference]]
  - depends-on:: [[Probability Theory]], [[Optimisation]], [[Game Theory]], [[Decision Theory]]
  - supports:: [[AI Ethics]], [[AI Safety Research]], [[Risk Management]], [[Supply Chain Management]]
  - uses:: [[Reinforcement Learning]], [[Machine Learning]], [[Neural Network]], [[Deep Learning]], [[Heuristics]]
  - contrasts-with:: [[Behavioural Economics]], [[Bounded Rationality]]
  - related-to:: [[Cognitive Science]], [[Control Theory]], [[Operations Research]], [[Natural Language Processing]], [[Spatial Computing]], [[Large Language Models]], [[Transformer Architecture]]
  - standardized-by:: [[ISO 31000]], [[EU AI Act]], [[NIST AI RMF]]
  - sameAs:: [[Choice Theory]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:hasPart ai:UtilityTheory))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:hasPart ai:BayesianInference))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:hasPart ai:MarkovDecisionProcess))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:hasPart ai:MultiCriteriaDecisionAnalysis))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:hasPart ai:Heuristics))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:hasPart ai:ValueFunction))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:hasPart ai:RewardFunction))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:requires ai:UncertaintyQuantification))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:requires ai:ObjectiveFunction))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:requires ai:KnowledgeRepresentation))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:requires ai:ProbabilityTheory))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:dependsOn ai:GameTheory))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:dependsOn ai:Optimisation))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:dependsOn ai:DecisionTheory))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:enables ai:AutonomousAgent))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:enables ai:Planning))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:enables ai:PolicyOptimisation))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:enables ai:Governance))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:enables ai:RiskAssessment))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:supports ai:AIEthics))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:supports ai:AISafetyResearch))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:uses ai:ReinforcementLearning))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:uses ai:MachineLearning))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:uses ai:NeuralNetwork))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:uses ai:DeepLearning))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:implements ai:UtilityTheory))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:implements ai:BayesianInference))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:reducesTo ai:Optimisation))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:reducesTo ai:PolicyOptimisation))
      SubClassOf(ai:DecisionMaking
        ObjectSomeValuesFrom(ai:reducesTo ai:MarkovDecisionProcess))
      ```

  - ## About
    - Decision making is one of the most pervasive and cross-disciplinary phenomena in science, studied simultaneously from the vantage points of psychology, economics, mathematics, neuroscience, computer science, and philosophy. Its unifying structure is simple to state: an agent confronts a set of alternatives, some description of an uncertain world, and a function measuring how much the agent values each possible outcome — and must select the best alternative given this structure. The normative branch of [[Decision Theory]] specifies what "best" means for a rational, coherent agent under the von Neumann–Morgenstern axioms; the descriptive branch, rooted in [[Behavioural Economics]] and [[Cognitive Science]], documents the manifold ways human agents systematically depart from this ideal. The prescriptive tradition, spanning [[Operations Research]] and management science, seeks practical tools to improve real-world decisions without demanding perfect rationality from human actors.
    - In artificial intelligence, the formalisation of decision making centres on the Markov Decision Process (MDP), introduced by Richard Bellman (1957) and extended by Howard (1960). The MDP tuple (S, A, T, R, γ) — states, actions, transition dynamics, reward function, and discount factor — provides the mathematical substrate for sequential decision making under uncertainty. Solving an MDP yields a [[Policy Optimisation|policy]] π : S → A that maximises cumulative discounted reward. When transition dynamics are unknown, [[Reinforcement Learning]] algorithms learn the policy from interaction, giving rise to the Q-learning, actor-critic, and policy-gradient families that underpin modern AI systems. Large-scale deployments of RL-based decision making include AlphaGo (DeepMind, 2016), AlphaFold (protein folding, 2020), and the RLHF-trained [[Large Language Models]] that power Claude, GPT-4, and Gemini (2023–2026).
    - The societal stakes of automated decision making have intensified regulatory attention. The EU AI Act (fully applicable August 2026) classifies automated decision systems affecting fundamental rights as high-risk, mandating human oversight, transparency documentation, and conformity assessments. In the United Kingdom, the MHRA launched a National Commission into the Regulation of AI in Healthcare in September 2025, with a regulatory framework expected in 2026. NHS AI Governance Policy (2025) requires clinical risk standards, explainability, and human oversight for any AI system influencing clinical decisions, reflecting the growing imperative to align computational decision making with ethical and governance frameworks captured by [[AI Ethics]], [[AI Safety Research]], and [[Risk Management]].

  - ## Components / Architecture
    - **Decision Problem Specification**
      - Decision maker with preferences encoded as a [[Utility Theory|utility function]] or a [[Reward Function]]
      - Alternative action set A (finite, countable, or continuous)
      - State space S describing configurations of the world
      - Outcome function mapping (action, state) pairs to consequences
      - [[Uncertainty Quantification]] over states, typically as probability distributions
    - **Normative Frameworks**
      - Expected utility maximisation: choose a* = argmax_a Σ_s P(s) · U(outcome(a,s))
      - [[Bayesian Inference]]: prior beliefs updated to posterior via Bayes' theorem; posterior informs choice
      - [[Multi-Criteria Decision Analysis]]: extend single-objective utility to multi-attribute utility theory (MAUT), analytic hierarchy process (AHP), and Pareto dominance methods
      - [[Game Theory]]: Nash equilibrium, mechanism design, and correlated equilibrium for multi-agent settings
    - **Sequential Decision Models**
      - [[Markov Decision Process]]: (S, A, T, R, γ) with value iteration and policy iteration solvers
      - Partially Observable MDP (POMDP): agent receives observations o ∈ O, not full state s; belief state maintained via [[Bayesian Inference]]
      - Stochastic games: multi-agent extension of MDP with coupled transition dynamics
    - **Computational Decision Algorithms**
      - Dynamic programming (Bellman equation, value/policy iteration)
      - Model-free [[Reinforcement Learning]]: Q-learning, SARSA, deep Q-networks (DQN)
      - Policy gradient methods: REINFORCE, PPO, SAC — learn stochastic policy directly
      - Planning algorithms: Monte Carlo Tree Search (MCTS), A* with [[Objective Function]]
      - LLM-based agents: chain-of-thought planning, tool-use decision chains in [[Transformer Architecture]] models
    - **Descriptive and Heuristic Models**
      - Dual-process theory (Kahneman System 1 / System 2)
      - Prospect theory (Kahneman–Tversky): probability weighting, loss aversion, reference dependence
      - [[Heuristics]]: availability, representativeness, anchoring-and-adjustment (Tversky–Kahneman 1974)
      - [[Bounded Rationality]] (Simon): satisficing policies that terminate search when a threshold utility is found

  - ## Formal Analysis
    - The Bellman optimality equation for MDPs provides the core fixed-point characterisation of optimal decision making in sequential settings. For a finite MDP with discount factor γ ∈ [0,1):
    - V*(s) = max_a [ R(s,a) + γ · Σ_{s'} T(s,a,s') · V*(s') ]
    - This equation shows that optimal decision making at any state s consists of choosing the action a that maximises the sum of immediate reward R(s,a) and the discounted expected value of successor states. Value iteration (Bellman, 1957) solves this by successive approximation; policy iteration (Howard, 1960) alternates policy evaluation and greedy improvement, converging in polynomial time for finite state/action spaces.
    - The relationship between decision making and [[Bayesian Inference]] is captured by Bayesian decision theory: given a prior p(θ), likelihood p(x|θ), and utility U(a,θ), the optimal Bayesian action is a* = argmax_a ∫ U(a,θ) p(θ|x) dθ. This formulation unifies belief updating ([[Bayesian Inference]]) with action selection ([[Utility Theory]]), making [[Uncertainty Quantification]] a first-class component of rational choice.
    - In multi-agent settings, [[Game Theory]] extends single-agent decision making. A Nash equilibrium (Nash, 1950) is a strategy profile σ* such that no agent can improve its expected utility by unilaterally deviating: for all agents i, U_i(σ*_i, σ*_{-i}) ≥ U_i(σ_i, σ*_{-i}). Mechanism design (Myerson, 1981) inverts the problem: design the game structure so that rational agent decisions aggregate to a socially desirable outcome, with applications in auction theory, voting protocols, and AI alignment.

  - ## Major Frameworks and Variants
    - **Expected Utility Theory (EUT)**: The classical normative standard. Axioms: completeness, transitivity, continuity, and independence. Von Neumann and Morgenstern (1944) prove that any preference ordering satisfying these axioms is representable by a utility function over lotteries.
    - **Subjective Expected Utility (SEU)**: Savage (1954) extends EUT to subjective probability, allowing agents to act on personal beliefs rather than objective frequencies; foundation of modern [[Bayesian Inference]]-based decision making.
    - **Prospect Theory**: Kahneman and Tversky (1979) show that humans use probability weighting functions (overweighting small probabilities) and reference-dependent value functions with loss aversion (losses loom larger than equivalent gains), explaining the Allais paradox and related anomalies.
    - **Cumulative Prospect Theory**: Tversky and Kahneman (1992) generalise to cumulative probability weighting, achieving stochastic dominance consistency.
    - **Markov Decision Processes**: Bellman (1957), Howard (1960). The canonical sequential framework. Extended to POMDPs by Aström (1965) and Sondik (1971).
    - **Multi-Criteria Decision Analysis (MCDA)**: Encompasses MAUT, AHP, ELECTRE, PROMETHEE, TOPSIS. Handles incommensurable objectives without forcing a single [[Utility Theory|utility]] aggregation.
    - **Reinforcement Learning as Decision Making**: Watkins and Dayan (1992) Q-learning, Sutton et al. policy gradient theorem (2000), Mnih et al. DQN (2015), Schulman et al. PPO (2017). RL operationalises MDP solving from data rather than from a known model.
    - **Robust Decision Making (RDM)**: Walker et al. (2013); uses scenario discovery and satisficing rather than probability-weighted optimisation; appropriate when deep uncertainty makes prior specification unreliable.

  - ## Use Cases / Major Families
    - **Autonomous Agents and Robotics**: Self-driving vehicles (Waymo, Mobileye), robotic manipulation (Boston Dynamics, Figure), drone navigation. All use MDP/[[Reinforcement Learning]] frameworks with real-time [[Planning]] and [[Policy Optimisation]]. As of 2025–2026, LLM-based agentic systems (OpenAI Operator, Google Agentic AI, Anthropic Claude Agents) extend decision making to web browsing, code writing, and enterprise workflow automation.
    - **Clinical and Medical Decision Support**: Diagnostic algorithm deployment in NHS hospitals (UK AI Governance Policy 2025), triage prioritisation, radiology AI (Annalise.ai, Qure.ai). Clinical risk standards DCB0129 and DCB0160 apply. Human oversight mandatory for high-risk decisions under MHRA guidelines.
    - **Financial and Economic Applications**: Algorithmic trading (high-frequency and statistical arbitrage), credit scoring, portfolio optimisation. Black-Litterman model fuses [[Bayesian Inference]] with mean-variance optimisation; RL increasingly used for execution optimisation.
    - **Supply-Chain and Operations Management**: Stochastic inventory control, demand forecasting, logistics route optimisation. University of Manchester research group active in MCDA for energy policy. [[Supply Chain Management]] connects to [[Risk Management]] under disruption scenarios (post-COVID supply chain resilience).
    - **Natural Language Processing and LLM Alignment**: Chain-of-thought reasoning, tool-use agents, RLHF fine-tuning. [[Reinforcement Learning]] from human feedback (RLHF) and Direct Preference Optimisation (DPO) frame LLM alignment as a decision-making problem where model outputs are chosen to maximise human-evaluated [[Reward Function|reward]]. 74% of enterprises expected to use agentic AI at least moderately by 2027 (InsightMark 2026).
    - **Policy and Governance**: Cost-benefit analysis, multi-criteria evaluation of policy interventions, regulatory impact assessment. NICE DSU at University of Sheffield applies MCDA to health technology assessment. ISO 31000 embeds decision analysis within enterprise risk governance.

  - ## Academic Context
    - Decision making has simultaneous founding lineages. In economics: von Neumann and Morgenstern (1944) axiomatised utility; Savage (1954) introduced subjective probability; Arrow (1951) proved the impossibility of aggregating individual preferences into a social welfare function without dictatorship. In psychology: Simon (1955, 1956) introduced [[Bounded Rationality]] and satisficing; Kahneman and Tversky (1974, 1979) documented cognitive biases and prospect theory. In operations research: Bellman (1957) developed dynamic programming; Howard (1960) formulated policy iteration for MDPs. In AI: Russell and Norvig (1995, 2020) consolidated decision making within the rational agent framework; Sutton and Barto (1998, 2018) provided the standard textbook for [[Reinforcement Learning]].
    - Key journals: Management Science, Operations Research, Journal of Mathematical Economics, Artificial Intelligence, Journal of the ACM, Psychological Review, Nature Human Behaviour. Key conferences: IJCAI, NeurIPS, ICML, AAMAS (multi-agent), ACM FAccT (fairness and decision systems).
    - Professional bodies: INFORMS Decision Analysis Society, Society for Judgment and Decision Making (SJDM), Operations Research Society (UK).

  - ## Current Landscape (2026)
    - The dominant trend in AI decision making as of 2026 is the rise of agentic LLM systems. The global AI agents market reached approximately $10.91 billion in 2026 (InsightMark Research 2026), driven by enterprise adoption of autonomous decision-making workflows. Systems such as OpenAI Operator, Anthropic Claude Agents, and Google Gemini Ultra Agents now execute multi-step decision chains over web browsers, databases, and enterprise APIs without per-step human oversight. 69% of executives cited improved decision-making as the top benefit of agentic AI deployment in 2025–2026 surveys.
    - The RLHF paradigm that grounds LLM decision making evolved substantially in 2025–2026: online iterative RLHF with continuous feedback collection replaced static preference datasets; Direct Preference Optimisation (DPO) offered a stable offline alternative. Anthropic published an updated 80-page constitutional AI constitution (January 2026) articulating the philosophical foundations for Claude's decision making under value uncertainty.
    - Regulatory pressure sharpened: the EU AI Act became fully applicable on 2 August 2026, mandating human oversight, risk management documentation, and conformity assessments for high-risk automated decision systems. The MHRA (UK) National Commission on AI in Healthcare (launched September 2025) is preparing a regulatory framework expected mid-2026, with NHS AI Governance Policy (v2.0, May 2025) already requiring explicit human oversight for all AI-influenced clinical decisions.
    - Research frontier: uncertainty-aware decision making in foundation models, causal reasoning for robust out-of-distribution decisions (CRAwDAD framework, 2025), hierarchical LLM planning (HiPlan, 2025), and value-alignment under deep uncertainty (Admissibility Alignment framework, 2026).

  - ## UK Context
    - The United Kingdom has significant academic strength in decision making research across multiple institutions. The University of Sheffield NICE Decision Support Unit is a leading centre for [[Multi-Criteria Decision Analysis]] in health technology assessment, developing MCDA methods for NICE's value frameworks. The University of Manchester has active research programmes in MCDA for energy policy and [[Operations Research]]. LSE's Centre for Philosophy of Natural and Social Science (CPNSS) conducts foundational research on rational choice and [[Decision Theory]]. Oxford University's Institute for Ethics in AI (2026 paper: "Legal Alignment for Safe and Ethical AI") addresses decision-making alignment in frontier AI systems.
    - In Northern England, the industrial context is equally substantial. Manchester's logistics and supply-chain sector (one of the UK's largest distribution hubs) applies stochastic decision models for inventory control and fleet routing. Leeds' NHS Teaching Hospitals and Leeds Digital Health cluster are active adopters of AI-assisted clinical decision support under NHS DTAC (Digital Technology Assessment Criteria). Sheffield's Advanced Manufacturing Research Centre (AMRC) applies real-time MDP-based decision making to robotic manufacturing lines. Newcastle University's Digital Institute has research on decision systems for smart-city infrastructure.
    - The UK Government's AI Opportunities Action Plan (2025) and the DSIT AI Safety Institute (Bletchley Park successor) both reference decision system safety as a priority, with the UK AI Act expected to diverge from the EU approach by emphasising innovation-friendly oversight rather than pre-market conformity assessment.

  - ## Future Directions (2026–2030)
    - **Foundation Model Decision Agents**: Scaling of agentic LLMs to trillion-parameter models with persistent memory, multi-modal perception, and tool-use will redefine autonomous decision making. Hierarchical planning integrating symbolic and neural components (HiPlan, MCTS + LLM hybrid) is the near-term frontier.
    - **Causal Decision Making**: Moving beyond correlation-based predictions to causal models (Pearl's do-calculus) will enable more robust out-of-distribution generalisation in clinical and policy decision systems.
    - **Uncertainty-Aware Neural Decision Systems**: Conformal prediction, Bayesian neural networks, and calibrated ensemble methods will provide the [[Uncertainty Quantification]] necessary for safety-critical deployment.
    - **Value-Aligned Sequential Decision Making**: Aligning MDP reward functions with complex human values (multi-stakeholder utility, distributional fairness, intertemporal equity) remains an open problem, central to [[AI Safety Research]] and [[AI Ethics]].
    - **Human-AI Collaborative Decision Making**: Moving beyond automation towards genuine complementarity — systems that improve human decision quality without replacing human agency — is the emerging paradigm. A 2025–2026 systematic review of 627 articles on AI-human collaborative decision making (Springer Group Decision and Negotiation) synthesises this direction.
    - **Regulatory Technology for Decision Audit**: Explainability tools (SHAP, LIME, concept bottleneck models) will evolve into formal audit trails required by EU and UK regulations, making decision provenance a first-class property of deployed systems.

  - ## Research & Literature
    - 1. von Neumann, J. and Morgenstern, O. (1944). *Theory of Games and Economic Behavior*. Princeton University Press.
    - 2. Bellman, R. (1957). *Dynamic Programming*. Princeton University Press.
    - 3. Savage, L.J. (1954). *The Foundations of Statistics*. Wiley.
    - 4. Howard, R.A. (1960). Dynamic Programming and Markov Processes. MIT Press.
    - 5. Simon, H.A. (1955). A Behavioral Model of Rational Choice. *Quarterly Journal of Economics*, 69(1), 99–118.
    - 6. Kahneman, D. and Tversky, A. (1979). Prospect Theory: An Analysis of Decision under Risk. *Econometrica*, 47(2), 263–291.
    - 7. Tversky, A. and Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases. *Science*, 185(4157), 1124–1131.
    - 8. Tversky, A. and Kahneman, D. (1992). Advances in Prospect Theory: Cumulative Representation of Uncertainty. *Journal of Risk and Uncertainty*, 5(4), 297–323.
    - 9. Puterman, M.L. (1994). *Markov Decision Processes: Discrete Stochastic Dynamic Programming*. Wiley.
    - 10. Sutton, R.S. and Barto, A.G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.
    - 11. Keeney, R.L. and Raiffa, H. (1976). *Decisions with Multiple Objectives: Preferences and Value Trade-Offs*. Wiley.
    - 12. Russell, S. and Norvig, P. (2020). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.
    - 13. Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
    - 14. Nash, J.F. (1950). Equilibrium Points in n-Person Games. *Proceedings of the National Academy of Sciences*, 36(1), 48–49.
    - 15. Mnih, V. et al. (2015). Human-Level Control through Deep Reinforcement Learning. *Nature*, 518, 529–533.
    - 16. Schulman, J. et al. (2017). Proximal Policy Optimization Algorithms. arXiv:1707.06347.
    - 17. Christiano, P. et al. (2017). Deep Reinforcement Learning from Human Preferences. *NeurIPS*.
    - 18. Ouyang, L. et al. (2022). Training Language Models to Follow Instructions with Human Feedback (InstructGPT). *NeurIPS*.
    - 19. Walker, W. et al. (2013). Defining Uncertainty: A Conceptual Basis for Uncertainty Management in Model-Based Decision Support. *Integrated Assessment*, 4(1), 5–17.
    - 20. Arrow, K.J. (1951). *Social Choice and Individual Values*. Yale University Press.
    - 21. Myerson, R.B. (1981). Optimal Auction Design. *Mathematics of Operations Research*, 6(1), 58–73.
    - 22. Watkins, C.J.C.H. and Dayan, P. (1992). Q-learning. *Machine Learning*, 8(3–4), 279–292.
    - 23. Aström, K.J. (1965). Optimal Control of Markov Decision Processes with Incomplete State Estimation. *Journal of Mathematical Analysis and Applications*, 10(1), 174–205.
    - 24. Ngo, R. et al. (2024). A Decision Theoretic Framework for Measuring AI Reliance. *ACM FAccT 2024*. https://dl.acm.org/doi/10.1145/3630106.3658901
    - 25. InsightMark Research (2026). LLM Agent Statistics 2026. https://insightmarkresearch.com/insights/llm-agent-statistics-2026
    - 26. European Commission (2024). EU AI Act. Official Journal of the EU. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
    - 27. MHRA (2025). National Commission into the Regulation of AI in Healthcare. UK Government. https://www.gov.uk/government/groups/national-commission-into-the-regulation-of-ai-in-healthcare
    - 28. University of Sheffield NICE DSU. Multiple Criteria Decision Analysis for Health Technology Assessment. https://sheffield.ac.uk/nice-dsu/methods-development/multiple-criteria-decision-analysis

  - ## Key Terminology
    - **Alternative**: A candidate action or choice available to the decision maker
    - **Decision Policy (π)**: A mapping from states to actions; the output of solving an MDP
    - **Expected Utility**: The probability-weighted average of utilities across all possible outcomes of an action
    - **Value Function V(s)**: The expected cumulative discounted reward achievable from state s under an optimal policy
    - **Markov Property**: The assumption that the future state depends only on the current state and action, not on history
    - **POMDP**: Partially Observable MDP; the agent receives observations rather than full state information
    - **Satisficing**: Herbert Simon's term for accepting the first option that meets a threshold utility, rather than globally optimising
    - **Prospect Theory**: Kahneman–Tversky descriptive model of risky choice with probability weighting and loss aversion
    - **RLHF**: Reinforcement Learning from Human Feedback; training a reward model from human preference labels, then using it for RL fine-tuning of LLMs
    - **MCDA**: Multi-Criteria Decision Analysis; methods for evaluating alternatives against multiple, potentially conflicting criteria

- ### Provenance
  - sources:: von Neumann & Morgenstern (1944); Bellman (1957); Kahneman & Tversky (1979); Sutton & Barto (2018); EU AI Act (2024); InsightMark Research (2026) https://insightmarkresearch.com/insights/llm-agent-statistics-2026; Ngo et al. ACM FAccT 2024 https://dl.acm.org/doi/10.1145/3630106.3658901; MHRA National Commission 2025 https://www.gov.uk/government/groups/national-commission-into-the-regulation-of-ai-in-healthcare; Sheffield NICE DSU https://sheffield.ac.uk/nice-dsu/methods-development/multiple-criteria-decision-analysis
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm