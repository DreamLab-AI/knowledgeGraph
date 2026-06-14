public:: true

# Decision Making
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f73f72fc78aeafdfd6e7be9915174cecbcacf1c5e6044e55b7ac550ac8b3f62d",
  "@type": "Page",
  "vc:slug": "decision-making",
  "title": "Decision Making",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:behavioural-economics",
      "vc:label": "Behavioural Economics"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decision Making"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decision-making",
  "@type": "Class",
  "label": "Decision Making",
  "definition": "Decision making is the cognitive and computational process of selecting a course of action from a set of available alternatives by evaluating options against objectives, constraints, and uncertainty. It spans normative models of rational choice (expected utility, Bayesian reasoning), descriptive behavioural accounts that document systematic biases, and computational frameworks such as Markov Decision Processes and reinforcement learning that formalise sequential choice under uncertainty. In artificial intelligence, decision making underpins agent planning, autonomous systems, and large-scale optimisation, bridging probability theory, control theory, and game theory into operational policies.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:utility-theory", "label": "Utility Theory"},
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:markov-decision-process", "label": "Markov Decision Process"},
      {"@id": "urn:ngm:class:multi-criteria-decision-analysis", "label": "Multi-Criteria Decision Analysis"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:uncertainty-quantification", "label": "Uncertainty Quantification"},
      {"@id": "urn:ngm:class:objective-function", "label": "Objective Function"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:planning", "label": "Planning"},
      {"@id": "urn:ngm:class:policy-optimisation", "label": "Policy Optimisation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:probability-theory", "label": "Probability Theory"},
      {"@id": "urn:ngm:class:optimisation", "label": "Optimisation"},
      {"@id": "urn:ngm:class:game-theory", "label": "Game Theory"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:heuristics", "label": "Heuristics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:behavioural-economics", "label": "Behavioural Economics"},
      {"@id": "urn:ngm:class:bounded-rationality", "label": "Bounded Rationality"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:supply-chain-management", "label": "Supply Chain Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cognitive-process", "label": "Cognitive Process"},
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"},
      {"@id": "urn:ngm:class:control-theory", "label": "Control Theory"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:choice-theory", "label": "Choice Theory"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decision-making:8de65c884945",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f73f72fc78aeafdfd6e7be9915174cecbcacf1c5e6044e55b7ac550ac8b3f62d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Behavioural Economics]]",
      "resolved": "urn:visionflow:linked:behavioural-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Decision making is the cognitive and computational process of selecting a course of action from a set of available alternatives by evaluating options against objectives, constraints, and uncertainty. It integrates normative frameworks such as [[Utility Theory]] and [[Bayesian Inference]] with descriptive insights from [[Behavioural Economics]], and is formalised in AI through [[Markov Decision Process]] models and [[Reinforcement Learning]]. Effective decision making underpins [[Autonomous Agent]] behaviour, [[Planning]], and [[Policy Optimisation]] across disciplines from cognitive science to operations research and artificial intelligence.

- ### Overview
  - Decision making is one of the most studied phenomena across multiple disciplines: psychology, economics, operations research, computer science, and neuroscience.
  - At its core, a decision problem consists of:
    - A **decision maker** (human or agent) with goals or preferences.
    - A **set of alternatives** (possible actions or choices).
    - **Outcomes** that result from selecting each alternative, possibly stochastic.
    - An **objective** or utility function used to evaluate outcomes.
  - Normative decision theory specifies how rational agents *should* decide; descriptive theory documents how humans *actually* decide; prescriptive methods bridge the gap to improve real-world choices.
  - In AI, decision making is operationalised through sequential frameworks that account for state, action, transition dynamics, and reward signals, enabling agents to act autonomously in complex environments.

- ### Key Frameworks and Mechanisms
  - **Expected Utility Theory**
    - Classical normative model: agents choose the action that maximises expected utility over probability-weighted outcomes.
    - Foundations laid by von Neumann and Morgenstern; extended by Savage's subjective expected utility for personal beliefs.
    - Related to [[Probability Theory]] and [[Utility Theory]].
  - **Bayesian Decision Theory**
    - Integrates [[Bayesian Inference]] with utility maximisation.
    - Prior beliefs updated via Bayes' rule as evidence arrives; posterior used to select optimal action.
    - Provides coherent treatment of [[Uncertainty Quantification]].
  - **Markov Decision Processes (MDPs)**
    - Formal model for sequential decision making under uncertainty: states, actions, transition probabilities, reward function, discount factor.
    - Solved by dynamic programming (value iteration, policy iteration) or [[Reinforcement Learning]] when the model is unknown.
    - See [[Markov Decision Process]].
  - **Multi-Criteria Decision Analysis (MCDA)**
    - Handles multiple, often conflicting, objectives using weighted scoring, analytic hierarchy process, or Pareto dominance.
    - Widely used in [[Governance]], engineering, and [[Risk Assessment]].
    - Related to [[Multi-Criteria Decision Analysis]].
  - **Game Theory**
    - Decision making in strategic settings where outcomes depend on choices of multiple agents.
    - Covers Nash equilibria, mechanism design, and cooperative solutions.
    - See [[Game Theory]].
  - **Heuristics and Bounded Rationality**
    - Kahneman and Tversky's prospect theory, availability heuristic, anchoring, and framing effects show systematic departures from rational choice.
    - [[Bounded Rationality]] (Simon) recognises cognitive and computational limits; heuristics offer satisficing solutions.
    - [[Behavioural Economics]] applies these findings to market and policy design.
  - **Optimisation-Based Approaches**
    - Linear programming, mixed-integer programming, and stochastic programming frame decision problems as explicit mathematical optimisations.
    - Connects to [[Optimisation]] and [[Operations Research]].
  - **Reinforcement Learning (RL)**
    - Learns decision policies from interaction with an environment through trial, reward, and policy gradient or value-function methods.
    - Model-free RL bypasses the need for an explicit [[Markov Decision Process]] specification.
    - See [[Reinforcement Learning]] and [[Machine Learning]].

- ### Cognitive and Psychological Dimensions
  - Dual-process theory (System 1 / System 2, Kahneman) distinguishes fast, intuitive responses from slow, deliberative reasoning.
  - Cognitive biases — confirmation bias, sunk cost fallacy, availability heuristic — systematically distort choice; documented by [[Behavioural Economics]] and [[Cognitive Science]].
  - Emotional and motivational factors mediate decision quality; neuroscience implicates prefrontal cortex in executive control.
  - Group decision making introduces social dynamics, consensus mechanisms, and collective intelligence considerations; relevant to [[Distributed Collaboration]].

- ### Applications and Use Cases
  - **Autonomous Agents and Robotics**
    - [[Autonomous Agent]] systems (self-driving cars, robotic manipulators) use MDP solvers or learned policies to navigate complex, uncertain environments in real time.
    - Related to [[Planning]] and [[Control Theory]].
  - **Clinical and Medical Decision Support**
    - Diagnostic algorithms, treatment protocol selection, triage systems leverage [[Bayesian Inference]] and [[Machine Learning]] to support clinician judgement.
    - Connects to [[Risk Assessment]] and healthcare governance.
  - **Financial and Economic Applications**
    - Portfolio allocation, credit scoring, algorithmic trading use [[Utility Theory]], stochastic optimisation, and ML-based predictions.
    - Governed by financial regulation frameworks; see [[Finance]] and [[Governance]].
  - **Supply Chain and Operations**
    - Inventory control, logistics routing, demand forecasting use stochastic models and optimisation under uncertainty.
    - Bridges to [[Supply Chain Management]].
  - **AI Ethics and Responsible AI**
    - Automated decision systems increasingly require transparency, fairness constraints, and accountability mechanisms.
    - Connects to [[AI Ethics]], [[Governance]], and emerging regulatory frameworks such as the EU AI Act.
  - **Natural Language Processing and Large Language Models**
    - Instruction-following, chain-of-thought reasoning, and tool-use in LLMs can be framed as sequential decision problems; RLHF aligns model decisions with human preferences.
    - Related to [[Reinforcement Learning]] and [[Machine Learning]].
  - **Spatial Computing and Mixed Reality**
    - Scene understanding and context-aware UI adaptation in [[Spatial Computing]] require real-time decision policies driven by sensor inputs and user intent.
  - **Governance and Policy**
    - Policy makers use decision analysis frameworks to evaluate interventions under uncertainty; cost-benefit analysis is a canonical application.
    - Supported by [[Multi-Criteria Decision Analysis]] and [[Risk Assessment]].

- ### Relationships
  - hasPart:: [[Utility Theory]], [[Bayesian Inference]], [[Markov Decision Process]], [[Multi-Criteria Decision Analysis]]
  - requires:: [[Uncertainty Quantification]], [[Objective Function]], [[Knowledge Representation]]
  - enables:: [[Autonomous Agent]], [[Planning]], [[Policy Optimisation]]
  - dependsOn:: [[Probability Theory]], [[Optimisation]], [[Game Theory]]
  - uses:: [[Reinforcement Learning]], [[Machine Learning]], [[Heuristics]]
  - contrastsWith:: [[Behavioural Economics]], [[Bounded Rationality]]
  - bridges-to:: [[Governance]], [[AI Ethics]], [[Supply Chain Management]]
  - relatedTo:: [[Cognitive Science]], [[Control Theory]], [[Risk Assessment]]
  - sameAs:: [[Choice Theory]]

- ### Standards and Context
  - **ISO 31000** (Risk Management) provides a framework that embeds decision analysis within enterprise risk governance.
  - **IEEE P7001** and related transparency standards address explainability requirements for automated decision systems.
  - The **EU AI Act** (2024) classifies high-risk automated decision systems and mandates human oversight provisions.
  - **NIST AI RMF** (AI Risk Management Framework) provides voluntary guidance on trustworthy AI decision systems in the United States.
  - Academic foundations: Operations Research Society, Decision Analysis Society (INFORMS), and the Society for Judgment and Decision Making maintain reference standards and publication venues.
  - Ontological grounding: W3C PROV-O captures provenance of decision processes; OWL2 enables formal class hierarchies for decision types in knowledge graphs.

- ### Provenance
  - sources:: Kahneman (2011) Thinking, Fast and Slow; Puterman (1994) Markov Decision Processes; Keeney & Raiffa (1976) Decisions with Multiple Objectives; Sutton & Barto (2018) Reinforcement Learning: An Introduction
  - updated:: 2026-06-13
