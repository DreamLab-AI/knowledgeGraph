public:: true

# Decision Theory

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:decision-theory",
  "@type": "Page",
  "title": "Decision Theory",
  "vc:slug": "decision-theory",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:utility-theory",
      "vc:label": "Utility Theory"
    },
    {
      "@id": "urn:visionflow:linked:game-theory",
      "vc:label": "Game Theory"
    },
    {
      "@id": "urn:visionflow:linked:operations-research",
      "vc:label": "Operations Research"
    },
    {
      "@id": "urn:visionflow:linked:decision-making",
      "vc:label": "Decision Making"
    },
    {
      "@id": "urn:visionflow:linked:markov-decision-process",
      "vc:label": "Markov Decision Process"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety-research",
      "vc:label": "AI Safety Research"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:optimisation",
      "vc:label": "Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:behavioural-economics",
      "vc:label": "Behavioural Economics"
    },
    {
      "@id": "urn:visionflow:linked:bounded-rationality",
      "vc:label": "Bounded Rationality"
    },
    {
      "@id": "urn:visionflow:linked:uncertainty-quantification",
      "vc:label": "Uncertainty Quantification"
    },
    {
      "@id": "urn:visionflow:linked:cognitive-science",
      "vc:label": "Cognitive Science"
    },
    {
      "@id": "urn:visionflow:linked:rational-agent",
      "vc:label": "Rational Agent"
    },
    {
      "@id": "urn:visionflow:linked:planning",
      "vc:label": "Planning"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:objective-function",
      "vc:label": "Objective Function"
    },
    {
      "@id": "urn:visionflow:linked:causal-reasoning",
      "vc:label": "Causal Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:ai-ethics",
      "vc:label": "AI Ethics"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:policy-optimisation",
      "vc:label": "Policy Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    },
    {
      "@id": "urn:visionflow:linked:heuristics",
      "vc:label": "Heuristics"
    },
    {
      "@id": "urn:visionflow:linked:value-function",
      "vc:label": "Value Function"
    },
    {
      "@id": "urn:visionflow:linked:control-theory",
      "vc:label": "Control Theory"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decision-theory",
  "@type": "Class",
  "label": "Decision Theory",
  "definition": "Decision theory is the formal study of how a rational agent should choose among actions whose outcomes are uncertain, combining probabilities over states of the world with utilities over outcomes to select actions that maximise expected utility. Its normative branch prescribes optimal choice under axioms of rationality, while its descriptive branch studies how agents actually decide. It provides the foundational framework for rational action in artificial intelligence, economics, and operations research.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "qualityScore": 0.90,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    },
    {
      "@id": "urn:ngm:class:decision-making",
      "label": "Decision Making"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:utility-theory",
        "label": "Utility Theory"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      },
      {
        "@id": "urn:ngm:class:heuristics",
        "label": "Heuristics"
      },
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:objective-function",
        "label": "Objective Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:causal-reasoning",
        "label": "Causal Reasoning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      },
      {
        "@id": "urn:ngm:class:policy-optimisation",
        "label": "Policy Optimisation"
      },
      {
        "@id": "urn:ngm:class:rational-agent",
        "label": "Rational Agent"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:ai-safety-research",
        "label": "AI Safety Research"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
      },
      {
        "@id": "urn:ngm:class:bounded-rationality",
        "label": "Bounded Rationality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Decision Theory]] is the formal mathematical and philosophical study of how a rational agent ought to choose among alternative courses of action when outcomes are uncertain, combining a probability distribution over states of the world with a [[Utility Theory|utility function]] over outcomes to specify the criterion of expected-utility maximisation as the canonical standard of rational choice. Its normative branch, grounded in the von Neumann–Morgenstern axioms (completeness, transitivity, continuity, independence) and Savage's subjective expected utility framework, prescribes what a coherent agent with well-defined preferences should do; its descriptive branch, encapsulated by Kahneman and Tversky's prospect theory and [[Behavioural Economics]], characterises how real agents with [[Bounded Rationality]] actually choose, revealing systematic deviations including probability weighting, loss aversion, and framing effects; and its prescriptive branch provides practical tools — [[Multi-Criteria Decision Analysis]], [[Bayesian Inference]]-based updating, and robust optimisation — to improve decisions without demanding full rationality. Decision theory serves as the formal foundation for [[Decision Making]] across [[Artificial Intelligence]], [[Operations Research]], and economics, grounding the rational-agent architecture in which a [[Rational Agent]] models the world via [[Probability Theory]], maintains preferences through a utility function, and selects actions via [[Optimisation]]; this framework directly enables the [[Markov Decision Process]] formalism and [[Reinforcement Learning]] objective, making decision theory the conceptual root of modern AI agent design, [[Policy Optimisation]], [[Planning]], and the alignment problem tackled by [[AI Safety Research]]. The field also interfaces with [[Game Theory]] in multi-agent settings, [[Causal Reasoning]] in the distinction between evidential and causal decision theories, and with [[Control Theory]] in continuous-state sequential decision problems, situating it at the crossroads of mathematics, philosophy, economics, and computer science.

- ### Semantic Classification
  - owl-class:: ai:DecisionTheory
  - owl-role:: FormalFramework | NormativeModel | FoundationalConcept | AISubfield
  - owl-inferred:: ai:RationalAgentFramework, ai:OptimisationFramework, ai:EpistemicFoundation
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]], [[Operations Research]], [[Probability Theory]]
  - has-part:: [[Utility Theory]], [[Bayesian Inference]], [[Markov Decision Process]], [[Heuristics]], [[Value Function]]
  - requires:: [[Probability Theory]], [[Uncertainty Quantification]], [[Objective Function]]
  - enables:: [[Decision Making]], [[Markov Decision Process]], [[Planning]], [[Policy Optimisation]], [[Rational Agent]]
  - implements:: [[Utility Theory]], [[Bayesian Inference]], [[Probability Theory]]
  - depends-on:: [[Probability Theory]], [[Utility Theory]], [[Optimisation]]
  - supports:: [[Reinforcement Learning]], [[AI Safety Research]], [[Risk Management]], [[AI Ethics]], [[Machine Learning]]
  - uses:: [[Bayesian Inference]], [[Causal Reasoning]], [[Heuristics]]
  - contrasts-with:: [[Game Theory]], [[Behavioural Economics]], [[Bounded Rationality]]
  - related-to:: [[Operations Research]], [[Cognitive Science]], [[Knowledge Representation]], [[Control Theory]], [[Large Language Models]], [[Autonomous Agent]]
  - standardized-by:: [[Von Neumann-Morgenstern Axioms]], [[Savage Expected Utility]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:hasPart ai:UtilityTheory))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:hasPart ai:BayesianInference))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:hasPart ai:MarkovDecisionProcess))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:hasPart ai:Heuristics))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:hasPart ai:ValueFunction))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:hasPart ai:ExpectedUtilityFunction))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:hasPart ai:SubjectiveExpectedUtility))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:requires ai:ProbabilityTheory))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:requires ai:UncertaintyQuantification))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:requires ai:ObjectiveFunction))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:dependsOn ai:UtilityTheory))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:dependsOn ai:Optimisation))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:enables ai:DecisionMaking))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:enables ai:MarkovDecisionProcess))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:enables ai:Planning))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:enables ai:PolicyOptimisation))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:enables ai:RationalAgent))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:supports ai:ReinforcementLearning))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:supports ai:AISafetyResearch))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:supports ai:RiskManagement))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:uses ai:BayesianInference))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:uses ai:CausalReasoning))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:implements ai:UtilityTheory))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:implements ai:ProbabilityTheory))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:reducesTo ai:Optimisation))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:reducesTo ai:ProbabilityTheory))
      SubClassOf(ai:DecisionTheory
        ObjectSomeValuesFrom(ai:reducesTo ai:UtilityTheory))
      ```

  - ## About
    - Decision theory occupies a foundational position in the architecture of rational thought: it is simultaneously the formal language in which philosophical questions about rational belief and action are posed, the mathematical substrate on which economics and operations research build their models, and the conceptual root from which artificial intelligence inherits its specification of intelligent agency. At its most abstract, decision theory answers a single question — given what I believe and what I value, what should I do? — and the centuries of effort invested in answering this question rigorously have produced a rich taxonomy of frameworks distinguishing between risk (known probabilities over outcomes), uncertainty (unknown probabilities), and ambiguity (inability even to assign probabilities), each demanding a different normative treatment.
    - The lineage of modern decision theory begins with Pascal and Bernoulli's observation (1738) that agents should care about the expected value of outcomes scaled by diminishing marginal utility, not raw expected monetary value. This insight lay dormant until von Neumann and Morgenstern (1944) placed it on axiomatic foundations, proving that any preference ordering satisfying completeness, transitivity, continuity, and the independence axiom can be represented as the maximisation of an expected utility function over lotteries. Savage (1954) extended this to subjective probability, enabling agents to form personal beliefs rather than relying on objective frequencies; his seven sure-thing axioms yield the subjective expected utility (SEU) representation that remains the gold standard of Bayesian rationality. These normative axioms were challenged almost immediately: Allais (1953) demonstrated that even sophisticated subjects violate the independence axiom when presented with specific lottery pairs; Ellsberg (1961) showed systematic ambiguity aversion contradicting subjective probability axioms; and Kahneman and Tversky (1979) built a comprehensive descriptive theory — prospect theory — showing that humans use probability weighting functions, evaluate outcomes relative to a reference point, and exhibit loss aversion (losses weighed roughly twice as heavily as equivalent gains). These descriptive findings constitute the empirical bedrock of [[Behavioural Economics]] and document the departure from [[Rational Agent]] models under real cognitive constraints — what Herbert Simon (1956) termed [[Bounded Rationality]].
    - In artificial intelligence, decision theory entered through the rational agent framework. Russell and Norvig's *Artificial Intelligence: A Modern Approach* (1995, 2020) defines an agent as rational if it selects actions that maximise expected utility, making decision theory the normative specification of AI agency. The [[Markov Decision Process]] provides the computational realisation of sequential decision theory, and [[Reinforcement Learning]] provides the algorithmic machinery for learning optimal policies when the MDP model is unknown. The contemporary debate in AI alignment is, in significant part, a decision-theoretic debate: what utility function should an AI system optimise? How should it behave under value uncertainty? How should it reason about its own decision procedures? The Machine Intelligence Research Institute's work on Timeless Decision Theory (Yudkowsky) and Functional Decision Theory (Levinstein and Soares, 2020) extends classical causal and evidential decision theory to agents that can reason about the logical consequences of their own decision procedures — crucial for AI systems facing Newcomb-like problems where the agent's decision and the predictor's forecast are correlated.

  - ## Components / Architecture
    - **Core Primitives**
      - State space Ω: the set of possible states of the world (uncertain)
      - Action set A: the set of actions available to the decision maker
      - Outcome function f: A × Ω → X mapping each (action, state) pair to a consequence
      - [[Probability Theory|Probability distribution]] P over Ω, encoding beliefs (objective or subjective)
      - [[Utility Theory|Utility function]] U: X → ℝ, encoding preferences over outcomes
      - Expected utility EU(a) = Σ_{ω ∈ Ω} P(ω) · U(f(a,ω))
    - **Normative Branches**
      - **Expected Utility Theory (EUT)**: Select a* = argmax_a EU(a). Requires von Neumann–Morgenstern axioms.
      - **Subjective Expected Utility (SEU)**: P is a personal probability, elicitable from preferences (Savage 1954).
      - **Maximin / Minimax Regret**: Conservative criteria for decision under strict ambiguity (Wald 1950, Savage 1951); avoid worst-case outcomes.
      - **Robust Decision Making**: Find policies satisfying a threshold across a broad scenario ensemble without assigning prior probabilities (Walker et al. 2013).
    - **Descriptive Branch**
      - Prospect theory: value function v(x - r) relative to reference point r; probability weighting w(p); loss aversion λ > 1
      - Cumulative Prospect Theory (Tversky–Kahneman 1992): applies weighting to cumulative probabilities; preserves stochastic dominance
      - [[Heuristics]] and biases: availability, representativeness, anchoring (Tversky–Kahneman 1974)
      - Dual-process theory (Kahneman 2011): System 1 (fast, heuristic) vs System 2 (slow, deliberative)
    - **Philosophical Sub-Theories**
      - **Causal Decision Theory (CDT)**: Choose the action with the highest causally expected utility; back-calculations use interventional (do) conditional. Standard position of most academic decision theorists.
      - **Evidential Decision Theory (EDT)**: Choose the action with the highest evidentially expected utility; back-calculations use observational conditional P(outcome | action chosen). Endorsed by some philosophers; one-boxes in Newcomb's problem.
      - **Functional Decision Theory (FDT)**: Yudkowsky / Levinstein–Soares (2020); evaluate the expected utility of implementing a given decision function; handles logical correlations and self-referential predictor scenarios. Relevant to AI agent design.
      - **Timeless Decision Theory (TDT)**: Predecessor to FDT (Yudkowsky 2010); decide as if choosing the output of an abstract logical computation, treating one's decision as determining similar decisions by correlated agents.
    - **Sequential Decision Theory**
      - [[Markov Decision Process]]: formalises sequential decision theory with state transitions and cumulative reward
      - Bellman equation: V*(s) = max_a [R(s,a) + γ Σ_{s'} T(s,a,s') V*(s')]
      - POMDP: extends MDP to partial observability; [[Bayesian Inference]] updates belief state
      - Value of information: VOI(X) = EU(a* | observe X) - EU(a* | without X); formalises when to gather more information before acting
    - **Multi-Agent Extension**
      - [[Game Theory]]: decision theory for multiple interacting agents with coupled payoffs; Nash equilibrium as fixed-point of best-response correspondences
      - Mechanism design: reverse problem — design game so rational agent decisions implement a socially desired outcome

  - ## Formal Analysis
    - The von Neumann–Morgenstern representation theorem is the cornerstone of normative decision theory. Formally, let L be a set of lotteries (probability distributions over outcomes X). A preference relation ≿ over L satisfies the VNM axioms (completeness, transitivity, continuity, and independence) if and only if there exists a function U: X → ℝ such that for all lotteries L₁, L₂:
    - L₁ ≿ L₂  ⟺  EU(L₁) ≥ EU(L₂)
    - where EU(L) = Σ_x P_L(x) · U(x). The utility function U is unique up to positive affine transformations. This result transforms the question "what is rational choice?" into a mathematical optimisation problem, grounding all subsequent normative decision theory.
    - Savage's (1954) subjective expected utility theorem achieves the same result without assuming objective probabilities. Given a preference relation over acts (functions from states Ω to outcomes X) satisfying his seven axioms (including the "sure-thing principle"), there exist a unique probability measure P on Ω and a utility function U on X such that act f is preferred to act g if and only if ∫ U(f(ω)) dP(ω) > ∫ U(g(ω)) dP(ω). This representation makes beliefs (P) and values (U) jointly elicitable from preferences alone.
    - The Allais paradox (1953) demonstrates that the independence axiom can be systematically violated. Consider:
      - Choice 1: A (£1M certain) vs B (10% chance £5M, 89% £1M, 1% £0)
      - Choice 2: C (11% chance £1M, 89% £0) vs D (10% chance £5M, 90% £0)
    - Most subjects prefer A over B but D over C, violating the independence axiom: if A ≿ B then subtracting a common lottery element (0.89 chance of £1M) from both should preserve the ordering. This failure motivates prospect theory, rank-dependent utility, and other generalisations that weaken or replace the independence axiom.
    - In the AI context, the Newcomb problem (Nozick 1969) is the decision-theoretic touchstone: if a perfect predictor places £1M in a closed box iff it predicts you will take only that box, causal decision theory (always add the open box) and evidential decision theory (take only the closed box, since taking correlates with having been predicted to take it) give conflicting recommendations. FDT resolves this by reasoning about what the optimal decision function would produce, one-boxing and achieving £1M.
    - The value of perfect information (VOPI) characterises how much an agent should be willing to pay to resolve a source of uncertainty before acting: VOPI = E_X[max_a EU(a|X)] - max_a EU(a). This is always non-negative (more information cannot hurt a Bayesian decision maker), providing a principled link between [[Uncertainty Quantification]] and [[Bayesian Inference]] and the economics of information gathering.

  - ## Major Variants and Frameworks
    - **Classical Expected Utility (von Neumann–Morgenstern 1944)**: Normative gold standard for decision under risk (known probabilities). Independence axiom is the distinguishing feature.
    - **Subjective Expected Utility (Savage 1954)**: Extends EUT to decision under uncertainty (unknown probabilities) via subjective probability; foundation of [[Bayesian Inference]]-based AI agency.
    - **Prospect Theory (Kahneman–Tversky 1979)**: Descriptive. Probability weighting function overweights small probabilities; S-shaped value function with loss aversion; reference-point dependence. Explains Allais paradox and many behavioural anomalies.
    - **Cumulative Prospect Theory (Tversky–Kahneman 1992)**: Applies rank-dependent probability weighting to cumulative distributions; stochastically dominant-compatible; standard descriptive model in behavioural finance.
    - **Maximin / Minimax Regret (Wald 1950)**: For strict ambiguity; conservative criteria that select policies with the best worst-case outcome or minimum maximum regret across possible worlds.
    - **Robust Decision Making (Walker et al. 2013)**: Scenario-based satisficing under deep uncertainty; relevant to policy analysis when prior specification is unreliable.
    - **Causal Decision Theory (Lewis 1981; Gibbard and Harper 1978)**: Select action with highest causally expected utility using interventional conditionals (Pearl's do-calculus). The mainstream academic position.
    - **Evidential Decision Theory (Jeffrey 1983)**: Select action with highest evidentially expected utility using observational conditionals. One-boxes in Newcomb; endorsed by some philosophers.
    - **Functional Decision Theory (Levinstein and Soares 2020)**: Select the decision function that yields the highest expected utility when implemented; handles logical correlations. Key for AI alignment research.
    - **Multi-Attribute Utility Theory (Keeney–Raiffa 1976)**: Decomposes utility over multiple incommensurable attributes via additive or multiplicative decompositions; foundation of [[Multi-Criteria Decision Analysis]].
    - **Quantum Decision Theory (Yukalov–Sornette 2014)**: Applies quantum probability formalisms to human decision-making; accounts for order effects and conjunction fallacies not explained by classical models.

  - ## Use Cases / Major Families
    - **AI Agent Design**: Decision theory is the normative specification for every AI system designed as a [[Rational Agent]]. The AIMA architecture (Russell–Norvig) formalises agent design as: sense → update beliefs via [[Bayesian Inference]] → select action via expected-utility maximisation → act. This pipeline is instantiated in autonomous vehicles, robotic systems, and increasingly in [[Large Language Models]] with tool-use capabilities.
    - **Reinforcement Learning Foundations**: The RL objective — maximise expected cumulative discounted reward — is a direct operationalisation of sequential decision theory via [[Markov Decision Process]]. The Bellman optimality equation is the recursive form of the decision-theoretic objective. RLHF translates human preference judgements into a reward model, connecting human decision-theoretic utility to model training.
    - **AI Safety and Alignment**: The alignment problem is fundamentally a decision-theoretic problem: what utility function should an AI system maximise? How should it act under value uncertainty? Coherent Extrapolated Volition (Yudkowsky), Cooperative Inverse Reinforcement Learning (Russell 2019), and Admissibility Alignment (arXiv 2601.01816) are decision-theoretic alignment frameworks. The Machine Intelligence Research Institute (MIRI) has long maintained formal decision theory (TDT, FDT) as a core research agenda for AI safety.
    - **Medical Decision Support**: Decision-theoretic methods formalise clinical decisions as expected-utility problems with uncertain diagnoses and treatment outcomes. NICE's health technology assessment (Sheffield NICE DSU) uses Multi-Attribute Utility Theory to allocate health budgets across interventions. Bayesian decision rules for diagnostic test thresholds (Pauker–Kassirer threshold model) are standard in evidence-based medicine.
    - **Financial Economics**: Portfolio selection (Markowitz 1952) as mean-variance utility maximisation; Black-Litterman model fusing prior beliefs with market equilibrium via [[Bayesian Inference]]; option pricing as decision under risk. Behavioural finance (Thaler, Shiller) documents prospect-theory-consistent patterns in financial markets.
    - **Policy Analysis and Governance**: Cost-benefit analysis is applied decision theory. Multi-criteria analysis for infrastructure investment (HS2 appraisal methodology), environmental policy (carbon pricing), and public health interventions uses decision-theoretic frameworks with explicit [[Uncertainty Quantification]] and sensitivity analysis.
    - **Operations Research**: Linear programming, stochastic programming, and robust optimisation are computational realisations of decision theory for resource allocation problems. The INFORMS Decision Analysis Society is the professional home for OR-based decision theorists.

  - ## Academic Context
    - Decision theory is one of the few fields with genuine interdisciplinary founding: mathematics (von Neumann), economics (Morgenstern, Savage, Arrow), psychology (Simon, Kahneman, Tversky), philosophy (Ramsey, Jeffrey, Lewis), and statistics (de Finetti). The key founding texts are: Bernoulli (1738) on utility; Ramsey (1926) on subjective probability and utility; von Neumann and Morgenstern (1944) on EUT; Savage (1954) on SEU; Arrow (1951) on social choice; Simon (1955, 1956) on [[Bounded Rationality]]; Allais (1953) on EUT violations; Kahneman and Tversky (1979) on prospect theory; and Tversky and Kahneman (1974, 1992) on [[Heuristics]] and cumulative prospect theory.
    - Key journals include: Management Science; Operations Research; Econometrica; Journal of Risk and Uncertainty; Theory and Decision; Philosophical Studies; Mind; British Journal for the Philosophy of Science; Psychological Review; Journal of Mathematical Economics.
    - Key conferences: IJCAI (AI rational agents), NeurIPS/ICML ([[Reinforcement Learning]] theory), ACM FAccT (decision systems fairness), FUR (Foundations of Utility and Risk) biennial conference (decision theorists).
    - Professional bodies: INFORMS Decision Analysis Society (North America), Operational Research Society (UK), Society for Risk Analysis, European Decision Sciences Institute (EDSI).
    - Nobel prizes directly related: John Harsanyi, John Nash, Reinhard Selten (1994, game theory); Robert Aumann, Thomas Schelling (2005, game theory); Daniel Kahneman (2002, descriptive decision theory); Richard Thaler (2017, behavioural economics). Herbert Simon (1978, administrative behaviour and bounded rationality).

  - ## Current Landscape (2026)
    - The most consequential development in decision theory since 2023 is the emergence of LLM-based AI agents as deployed decision-making systems, raising new questions that classical decision theory did not anticipate: How should an agent with uncertain, potentially inconsistent utility representations (learned from RLHF on human preferences) behave? How does value misalignment — the gap between the reward model and true human values — affect the decision-theoretic optimality of agent behaviour? A December 2025 paper (arXiv:2512.15584, "A Decision-Theoretic Approach for Managing Misalignment") provides a formal framework showing that value misalignment breaks equivalences in classical rational deference theory, requiring agents to balance epistemic superiority against objective divergence.
    - The academic debate between causal, evidential, and functional decision theory remained active in 2024–2025. Gallow (2024) argued against decision-instability solutions that conflict with the sure-thing principle; Mohajeri (2024) argued that conditional causal decision theory reduces to evidential decision theory in key domains; and a 2025 blog post ("Is Timeless Decision Theory Necessary?", minihf.com) re-examined whether FDT provides advantages not achievable by standard CDT in realistic AI deployment scenarios.
    - In the statistical decision theory tradition, a 2026 preprint (arXiv:2604.02507, "Reinforcement Learning from Human Feedback: A Statistical Perspective") provides a rigorous statistical treatment of RLHF as a decision-theoretic estimation problem, characterising consistency and sample complexity of reward learning.
    - Research into quantum decision theory (Yukalov–Sornette) continued, with applications to modelling order effects in human judgement and potential applications in quantum computing decision systems.
    - The LSE Centre for Philosophy of Natural and Social Science (CPNSS) maintains an active research programme on Rational Choice and Decision Theory, with connections to the London decision-theory and formal epistemology community. Oxford's Institute for Ethics in AI addresses decision-making normative frameworks in the context of frontier AI systems (2026 paper: "Legal Alignment for Safe and Ethical AI").

  - ## UK Context
    - UK academic presence in decision theory is substantial and spans multiple traditions. At LSE, the Centre for Philosophy of Natural and Social Science (CPNSS) runs an ongoing research programme on Rational Choice and Decision Theory, covering both formal and empirical aspects; it connects to the broader London decision theory community including King's College London philosophy and UCL's philosophy department. At Cambridge, the Faculty of Economics and the Centre for Science and Policy both engage with decision theory in policy contexts, and the Centre for Risk in the Built Environment (CURBE) applies robust decision-making methods to infrastructure policy. At Oxford, the Institute for Ethics in AI (Director: Carissa Véliz) and the Future of Humanity Institute (until 2024 closure; succeeded by AIGI) developed decision-theoretic approaches to AI alignment; the Oxford Martin School continues work on long-run decision making under existential risk.
    - Imperial College London's Business School maintains active research in decision analysis and [[Operations Research]], connecting decision theory to management science and financial modelling. Warwick's Centre for Competitive Advantage in the Global Economy (CAGE) applies decision theory to macroeconomic policy.
    - In the North of England, the University of Sheffield NICE Decision Support Unit (NICE DSU) is internationally recognised for applying [[Multi-Criteria Decision Analysis]] and decision-theoretic health economics to NHS technology assessment — directly influencing which treatments are approved on the NHS. The University of Manchester's Alliance Manchester Business School has a long tradition in [[Operations Research]] and decision analytics, with active research in multi-criteria decision making for energy policy. Leeds Business School applies decision theory to healthcare and supply-chain contexts. Newcastle University's Digital Institute engages with decision system design for smart-city and infrastructure applications.
    - The UK government's DSIT AI Safety Institute (established post-Bletchley, 2023) engages with decision-theoretic alignment research, and the Frontier AI Taskforce's technical work on catastrophic risk draws heavily on decision-theoretic frameworks for expected-loss minimisation under extreme uncertainty.

  - ## Future Directions (2026–2030)
    - **Value-Uncertain Decision Theory**: Formalising how AI systems should act when their own utility representations are uncertain, inconsistent, or only partially specified — a challenge not addressed by classical EUT. Cooperative Inverse Reinforcement Learning (Russell 2019) and related frameworks frame alignment as a game-theoretic decision problem between agent and human.
    - **Causal Decision Theory for Foundation Models**: Integrating Pearl's causal hierarchy (associational, interventional, counterfactual) into the decision-theoretic substrate of LLM agents to support out-of-distribution generalisations. The CRAwDAD framework (arXiv:2511.22854, 2025) is an early step in this direction.
    - **Decision Theory under Logical Uncertainty**: Garrabrant et al.'s logical induction framework and MIRI's ongoing work on decision theory for logically uncertain agents address settings where the agent cannot computationally verify the consequences of its own decisions — relevant to large-scale AI systems reasoning about complex domains.
    - **Multi-Stakeholder Decision Theory**: Extending single-agent utility to collective preference aggregation in a way that avoids Arrow's impossibility theorem while remaining computationally tractable; relevant to AI systems serving diverse user populations with conflicting preferences.
    - **Quantum Decision Theory Applications**: Potential application of quantum probability structures to model human choice in high-dimensional, order-dependent decision settings, and to design quantum-computing-native optimisation procedures.
    - **Regulatory Decision Theory**: As AI governance matures (EU AI Act full applicability August 2026; UK AI Act expected 2027), formalising the decision-theoretic criteria for regulatory approval thresholds — acceptable risk levels, required human oversight triggers, conformity assessment criteria — becomes a technical necessity bridging decision theory with [[AI Ethics]] and [[Risk Management]].

  - ## Research & Literature
    - 1. von Neumann, J. and Morgenstern, O. (1944). *Theory of Games and Economic Behavior*. Princeton University Press.
    - 2. Savage, L.J. (1954). *The Foundations of Statistics*. Wiley.
    - 3. Ramsey, F.P. (1926). Truth and Probability. In: *The Foundations of Mathematics and other Logical Essays*, Routledge.
    - 4. de Finetti, B. (1937). La Prévision: Ses Lois Logiques, Ses Sources Subjectives. *Annales de l'Institut Henri Poincaré*, 7, 1–68.
    - 5. Arrow, K.J. (1951). *Social Choice and Individual Values*. Yale University Press.
    - 6. Simon, H.A. (1956). Rational Choice and the Structure of the Environment. *Psychological Review*, 63(2), 129–138.
    - 7. Allais, M. (1953). Le Comportement de l'Homme Rationnel devant le Risque. *Econometrica*, 21(4), 503–546.
    - 8. Ellsberg, D. (1961). Risk, Ambiguity, and the Savage Axioms. *Quarterly Journal of Economics*, 75(4), 643–669.
    - 9. Kahneman, D. and Tversky, A. (1979). Prospect Theory: An Analysis of Decision under Risk. *Econometrica*, 47(2), 263–291.
    - 10. Tversky, A. and Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases. *Science*, 185(4157), 1124–1131.
    - 11. Tversky, A. and Kahneman, D. (1992). Advances in Prospect Theory: Cumulative Representation of Uncertainty. *Journal of Risk and Uncertainty*, 5(4), 297–323.
    - 12. Keeney, R.L. and Raiffa, H. (1976). *Decisions with Multiple Objectives: Preferences and Value Trade-offs*. Wiley.
    - 13. Jeffrey, R.C. (1983). *The Logic of Decision* (2nd ed.). University of Chicago Press.
    - 14. Lewis, D. (1981). Causal Decision Theory. *Australasian Journal of Philosophy*, 59(1), 5–30.
    - 15. Wald, A. (1950). *Statistical Decision Functions*. Wiley.
    - 16. Nozick, R. (1969). Newcomb's Problem and Two Principles of Choice. In: N. Rescher (ed.), *Essays in Honor of Carl G. Hempel*. Reidel.
    - 17. Yudkowsky, E. (2010). Timeless Decision Theory. Machine Intelligence Research Institute Technical Report. https://intelligence.org/files/TDT.pdf
    - 18. Levinstein, B.A. and Soares, N. (2020). Cheating Death in Damascus. *Journal of Philosophy*, 117(5), 237–266.
    - 19. Russell, S. (2019). *Human Compatible: Artificial Intelligence and the Problem of Control*. Viking.
    - 20. Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
    - 21. Sutton, R.S. and Barto, A.G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.
    - 22. Russell, S. and Norvig, P. (2020). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.
    - 23. Walker, W. et al. (2013). Defining Uncertainty: A Conceptual Basis for Uncertainty Management in Model-Based Decision Support. *Integrated Assessment*, 4(1), 5–17.
    - 24. Ngo, R. et al. (2024). A Decision Theoretic Framework for Measuring AI Reliance. *ACM FAccT 2024*. https://dl.acm.org/doi/10.1145/3630106.3658901
    - 25. [Anon] (2025). A Decision-Theoretic Approach for Managing Misalignment. arXiv:2512.15584.
    - 26. LSE CPNSS. Rational Choice and Decision Theory Research Programme. https://www.lse.ac.uk/cpnss/research/research-projects/rational-choice-decision-theory
    - 27. Oxford AIGI (2026). Legal Alignment for Safe and Ethical AI. https://aigi.ox.ac.uk/wp-content/uploads/2026/01/Kolt-Caputo-et-al.-2026-Legal-Alignment-for-Safe-and-Ethical-AI.pdf
    - 28. Ozbek, S. (2024). Expected Utility without Linearity: Distinguishing Prospect Theory and Cumulative Prospect Theory. *Theory and Decision*. https://link.springer.com/article/10.1007/s11238-025-10091-7

  - ## Key Terminology
    - **Expected Utility (EU)**: The probability-weighted average of utilities across all outcomes of an action; the quantity an optimal agent maximises
    - **Von Neumann–Morgenstern Axioms**: Completeness, transitivity, continuity, independence — the four axioms whose satisfaction guarantees a utility representation
    - **Subjective Expected Utility (SEU)**: Expected utility with a subjective (personal) probability over states; the Bayesian standard
    - **Independence Axiom**: If L₁ ≿ L₂, then for any L₃ and α ∈ (0,1), αL₁ + (1-α)L₃ ≿ αL₂ + (1-α)L₃; violated by Allais paradox
    - **Prospect Theory**: Kahneman–Tversky descriptive model with probability weighting and loss aversion; explains EUT violations
    - **Loss Aversion**: The psychological phenomenon whereby losses are weighted more heavily than equivalent gains (typically λ ≈ 2)
    - **Causal Decision Theory (CDT)**: Choose action with highest causally expected utility using interventional conditionals
    - **Evidential Decision Theory (EDT)**: Choose action with highest evidentially expected utility using observational conditionals
    - **Functional Decision Theory (FDT)**: Choose the decision function with highest expected utility when implemented; handles logical correlations
    - **Value of Information (VOI)**: The maximum an agent should pay to observe a signal before acting; equals EU(act optimally given signal) minus EU(act optimally without signal)
    - **Newcomb's Problem**: A decision-theoretic puzzle where CDT and EDT disagree; the canonical test case for decision theories
    - **Sure-Thing Principle**: Savage's axiom: if action f is preferred to g in every state of the world, then f should be preferred unconditionally
    - **Satisficing**: Simon's alternative to optimising — select the first option exceeding a threshold utility
    - **VOPI (Value of Perfect Information)**: Special case of VOI where the signal perfectly reveals the state of the world; an upper bound on the worth of any information source
    - **Allais Paradox**: A systematic violation of the independence axiom demonstrated by Maurice Allais (1953); showed that EUT is empirically violated even by sophisticated decision makers
    - **Ellsberg Paradox**: Daniel Ellsberg's (1961) demonstration of ambiguity aversion — agents prefer known-risk lotteries over unknown-probability (ambiguous) lotteries, violating subjective probability axioms
    - **Coherence (de Finetti)**: The property of a probability assignment that prevents a Dutch book (guaranteed loss); equivalent to Bayesian consistency under de Finetti's betting argument
    - **Admissibility**: A decision rule is admissible if no other rule is uniformly better across all states of the world; inadmissible rules are dominated and should be discarded
    - **Risk Aversion**: Preference for a certain outcome over a lottery with the same expected monetary value; implies a concave utility function (diminishing marginal utility of wealth)
    - **Ambiguity Aversion**: Preference for known-risk gambles over unknown-probability gambles; not captured by any probability–utility pair and motivates non-expected-utility theories
    - **Mechanism Design**: The inverse problem to decision theory: design the rules of a game so that individually rational decisions by self-interested agents produce a desired social outcome; connects decision theory to [[Game Theory]]
    - **Dutch Book**: A set of bets that guarantee a loss; a decision-maker whose probabilities are incoherent is vulnerable to a Dutch book, providing a pragmatic argument for Bayesian probability

  - ## Standards and Regulatory Context
    - **ISO 31000:2018** (Risk Management) provides a framework within which decision analysis is embedded as a core component of enterprise risk governance, formalising the link between [[Risk Management]] and decision-theoretic expected-loss minimisation.
    - **NIST AI Risk Management Framework (AI RMF 1.0, 2023)** provides voluntary guidance for trustworthy AI systems in the United States, mapping risk identification, assessment, and mitigation to decision-theoretic concepts of probability, impact, and expected harm.
    - **EU AI Act (fully applicable August 2026)**: Classifies automated decision systems affecting fundamental rights as high-risk AI; mandates risk management, human oversight provisions, and conformity assessment — effectively encoding decision-theoretic risk criteria into law. Article 6 and Annex III define the scope.
    - **UK AI Act (anticipated 2027)**: Expected to diverge from the EU approach by adopting a principles-based rather than product-risk classification approach, relying on existing sector regulators (FCA, CQC, MHRA) applying decision-theoretic risk criteria domain by domain.
    - **IEEE P7008** and related standards address the ethics of autonomous and intelligent systems, formalising requirements for value alignment that are grounded in multi-attribute utility theory and decision-theoretic consistency.
    - Academic ontological grounding: W3C PROV-O captures provenance of decision processes; OWL2 formalises class hierarchies for decision types; the DOLCE foundational ontology locates "decision" as a perdurant (process) within its endurant/perdurant taxonomy.

- ### Provenance
  - sources:: von Neumann & Morgenstern (1944); Savage (1954); Kahneman & Tversky (1979); Levinstein & Soares (2020); Russell (2019); LSE CPNSS https://www.lse.ac.uk/cpnss/research/research-projects/rational-choice-decision-theory; Oxford AIGI 2026 https://aigi.ox.ac.uk/wp-content/uploads/2026/01/Kolt-Caputo-et-al.-2026-Legal-Alignment-for-Safe-and-Ethical-AI.pdf; arXiv:2512.15584; arXiv:2604.02507; Ngo et al. ACM FAccT 2024 https://dl.acm.org/doi/10.1145/3630106.3658901; Ozbek (2024) Theory and Decision https://link.springer.com/article/10.1007/s11238-025-10091-7
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
