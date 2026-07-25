public:: true

# Bounded Rationality

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bounded-rationality",
  "@type": "Page",
  "title": "Bounded Rationality",
  "vc:slug": "bounded-rationality",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bounded-rationality",
  "@type": "Class",
  "label": "Bounded Rationality",
  "definition": "Bounded rationality is the principle that decision-makers are constrained by limited information, finite cognitive resources and time pressure, and therefore seek satisfactory rather than optimal outcomes. It contrasts with the idealised fully rational agent of classical economics and informs models of human and artificial decision behaviour. The concept grounds heuristics, satisficing and resource-rational approaches to reasoning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decision-making",
      "label": "Decision Making"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:expected-utility-theory",
        "label": "Expected Utility Theory"
      },
      {
        "@id": "urn:ngm:class:rational-choice-theory",
        "label": "Rational Choice Theory"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
      },
      {
        "@id": "urn:ngm:class:decision-support",
        "label": "Decision Support"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:information-asymmetry",
        "label": "Information Asymmetry"
      },
      {
        "@id": "urn:ngm:class:heuristics",
        "label": "Heuristics"
      },
      {
        "@id": "urn:ngm:class:satisficing",
        "label": "Satisficing"
      },
      {
        "@id": "urn:ngm:class:aspiration-level",
        "label": "Aspiration Level"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      },
      {
        "@id": "urn:ngm:class:llm-alignment",
        "label": "LLM Alignment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      },
      {
        "@id": "urn:ngm:class:prospect-theory",
        "label": "Prospect Theory"
      },
      {
        "@id": "urn:ngm:class:dual-process-theory",
        "label": "Dual-Process Theory"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cognitive-constraints",
        "label": "Cognitive Constraints"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Bounded rationality is the theoretical framework, originating with Nobel laureate Herbert A. Simon in the 1950s, that characterises decision-making as constrained by three interacting limitations: finite cognitive capacity, restricted access to information, and the time pressure under which choices must be made. Rather than computing globally optimal solutions as the classical homo economicus model of [[Rational Choice Theory]] demands, real agents — human or artificial — employ [[Heuristics]] and [[Satisficing]] strategies that seek outcomes meeting an acceptable aspiration threshold rather than maximising an objective function. The concept sits within the broader domain of [[Decision Making]], directly informs [[Behavioural Economics]], [[Cognitive Science]], [[Reinforcement Learning]], and [[Agent-Based Modelling]], and contrasts fundamentally with [[Optimisation]]-centric models such as [[Expected Utility Theory]]. Bounded rationality explains why individuals rely on availability, representativeness, and anchoring heuristics; why markets exhibit anomalies unexplained by efficient-market hypotheses; and why organisations develop standard operating procedures and routines as cognitive prostheses. In artificial intelligence, the concept underpins resource-rational computation — the observation that cognitive systems should allocate processing effort in proportion to the value of information gained — motivating approximate inference, anytime algorithms, and [[Reinforcement Learning]] agents that satisfice under computational budgets. Contemporary research extends the framework to [[Large Language Models]] as bounded rational agents whose biases arise from training data priors and token-budget constraints, and applies satisficing alignment methods (e.g. SITAlign, 2025) to keep model outputs within acceptable thresholds on secondary criteria while maximising primary objectives. The concept also provides the intellectual bridge linking [[Cognitive Science]] to [[Behavioural Economics]], [[Autonomous Agent]] design, [[Planning]] under uncertainty, [[AI Ethics]] debates around explainable AI and human oversight, and [[Governance]] frameworks that account for human error in high-stakes automated systems.

- ### Semantic Classification
  - owl-class:: ai:BoundedRationality
  - owl-role:: Concept | CognitivePrinciple | DecisionParadigm
  - owl-inferred:: ai:HeuristicReasoning, ai:SatisficingStrategy, ai:ResourceRationalAgent
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]
  - implemented-in-layer:: [[CognitiveScienceLayer]]

- ### Relationships
  - is-subclass-of:: [[Decision Making]], [[Behavioural Economics]], [[Cognitive Science]]
  - has-part:: [[Heuristics]], [[Satisficing]], [[Information Asymmetry]], [[Aspiration Level]], [[Fast and Frugal Heuristics]], [[Adaptive Toolbox]], [[Cognitive Constraints]]
  - requires:: [[Reasoning]], [[Cognitive Science]], [[Uncertainty Quantification]], [[Probability Theory]]
  - enables:: [[Agent-Based Modelling]], [[Reinforcement Learning]], [[Planning]], [[LLM Alignment]], [[Autonomous Agent]], [[Decision Support Systems]], [[Nudge Theory]]
  - implements:: [[Satisficing]], [[Fast and Frugal Heuristics]], [[Resource-Rational Computation]], [[Approximate Inference]]
  - depends-on:: [[Cognitive Constraints]], [[Uncertainty Quantification]], [[Probability Theory]], [[Working Memory]]
  - supports:: [[Behavioural Economics]], [[Decision Support]], [[AI Ethics]], [[Autonomous Agent]], [[Public Policy]], [[AI Alignment]]
  - uses:: [[Reasoning]], [[Game Theory]], [[Probability Theory]], [[Markov Decision Process]], [[Utility Theory]], [[Monte Carlo Tree Search]]
  - contrasts-with:: [[Optimisation]], [[Expected Utility Theory]], [[Rational Choice Theory]], [[Bayesian Decision Theory]], [[Homo Economicus]]
  - related-to:: [[Cognitive Science]], [[Economics]], [[Artificial Intelligence]], [[Markov Decision Process]], [[Prospect Theory]], [[Dual-Process Theory]], [[Utility Theory]], [[Risk Assessment]], [[Reinforcement Learning]], [[Machine Learning]], [[Knowledge Representation]], [[Operations Research]], [[Neuroscience]], [[Large Language Models]]
  - bridges-to:: [[Behavioural Economics]], [[Governance]], [[AI Safety]], [[AI Ethics]], [[Human-Computer Interaction]], [[Choice Architecture]]
  - standardized-by:: [[ISO 31000]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:hasPart ai:Heuristics))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:hasPart ai:Satisficing))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:hasPart ai:InformationAsymmetry))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:hasPart ai:AspirationLevel))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:hasPart ai:CognitiveConstraints))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:hasPart ai:FastAndFrugalHeuristics))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:hasPart ai:AdaptiveToolbox))

  ## Dependency Relationships
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:requires ai:Reasoning))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:requires ai:CognitiveScience))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:requires ai:UncertaintyQuantification))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:dependsOn ai:CognitiveConstraints))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:dependsOn ai:ProbabilityTheory))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:uses ai:GameTheory))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:uses ai:MarkovDecisionProcess))

  ## Capability Relationships
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:enables ai:AgentBasedModelling))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:enables ai:ReinforcementLearning))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:enables ai:Planning))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:enables ai:LLMAlignment))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:enables ai:AutonomousAgent))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:supports ai:BehaviouralEconomics))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:supports ai:AIEthics))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:supports ai:DecisionSupport))

  ## Implementation Relationships
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:implements ai:Satisficing))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:implements ai:FastAndFrugalHeuristics))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:implements ai:ResourceRationalComputation))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:partOf ai:DecisionMaking))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:partOf ai:BehaviouralEconomics))

  ## Reduction Relationships
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:reducesTo ai:Heuristics))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:reducesTo ai:Satisficing))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:contrastsWith ai:Optimisation))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:contrastsWith ai:ExpectedUtilityTheory))
      SubClassOf(ai:BoundedRationality
        ObjectSomeValuesFrom(ai:contrastsWith ai:RationalChoiceTheory))

  ## About
    Bounded rationality is one of the most influential ideas in twentieth-century social science, introduced by Herbert A. Simon in his 1955 paper "A Behavioral Model of Rational Choice" and elaborated in his 1957 book *Models of Man*. Simon argued that classical rationality — the assumption that agents possess complete information, unlimited computational power, and consistent preference orderings — describes no actual decision-maker. Instead, real agents operate within a "scissors" of external environmental constraints and internal cognitive limitations. From this insight Simon derived the key concept of satisficing (a portmanteau of "satisfying" and "sufficing"): agents search through alternatives until they find one that exceeds an aspiration level, then stop. This strategy is computationally tractable and empirically descriptive, whereas global optimisation is frequently intractable even for modern computers.

    The concept generated two powerful research lineages. The first, led by Daniel Kahneman, Amos Tversky, and later Richard Thaler, documented the heuristics-and-biases programme: cataloguing how cognitive shortcuts produce systematic, predictable errors — the availability heuristic, anchoring, framing effects, and loss aversion — thereby founding [[Behavioural Economics]]. The second lineage, associated with Gerd Gigerenzen's ABC Research Group in Berlin, takes a more ecologically rational view: the same heuristics that appear biased in laboratory tasks may be highly effective in naturalistic environments with limited data, because they avoid overfitting and exploit environmental regularities. Both lineages connect directly to [[Cognitive Science]], [[Dual-Process Theory]] (Kahneman's System 1/System 2 distinction), and computational models of cognition.

    In artificial intelligence, bounded rationality has evolved into the concept of resource-rational computation (Griffiths, Lieder, Goodman, 2015–2020): cognitive systems should allocate limited computational resources in proportion to the expected value of information. This bridges [[Reinforcement Learning]] (where agents must balance exploration and exploitation under time constraints), [[Planning]] (anytime algorithms, beam search, Monte Carlo Tree Search), [[Agent-Based Modelling]] (simulating markets and organisations where agents use simple rules), and increasingly [[Large Language Models]], whose finite context windows, token-budget constraints, and training-data priors make them bounded rational agents in a formal sense. A 2025 ArXiv paper (Almutairi & Almatrodi) empirically investigated trust in AI under Simon's framework; a concurrent 2025 paper (SITAlign) directly applied the satisficing principle to LLM alignment, showing that maximising a primary objective while enforcing acceptable thresholds on secondary criteria outperforms Pareto-optimisation approaches.

  ## Components / Architecture
    The bounded rationality framework comprises several interacting components:

    - **Cognitive Constraints**: limits on working memory capacity (Miller's 7 ± 2 chunks), attention bandwidth, and sequential processing speed that prevent exhaustive search
    - **[[Information Asymmetry]]**: incomplete, noisy, or costly-to-acquire information that makes computing true expected utilities impossible
    - **[[Aspiration Level]]**: an endogenous threshold, itself adaptive, set by prior experience, social comparison, or explicit goal-setting, above which alternatives are acceptable
    - **[[Heuristics]]** (the adaptive toolbox): a set of simple, fast decision rules — recognition heuristic, take-the-best, tallying — that are ecologically rational in specific environments; includes both fast-and-frugal heuristics (Gigerenzen) and System 1 intuitions (Kahneman)
    - **[[Satisficing]]**: the stopping rule — search terminates when an option exceeds the aspiration level; replaces maximisation with a threshold criterion
    - **Environmental Structure**: the statistical regularities of the environment that heuristics exploit; ecological rationality matches heuristics to environments
    - **Adaptive Toolbox**: the repertoire of heuristics selected from the toolbox based on environmental cues, enabling flexible decision-making across contexts
    - **Aspiration Adaptation**: dynamic updating of the aspiration level in response to success (raising it) or repeated failure (lowering it), producing searching trajectories that converge to acceptable outcomes

  ## Use Cases / Major Families

    **Behavioural Economics and Public Policy**
    Bounded rationality underpins nudge theory (Thaler & Sunstein, 2008), which designs choice architectures to steer decisions toward better outcomes by accounting for predictable cognitive limitations rather than assuming rational actors. Pension auto-enrolment (UK Pensions Act 2008), calorie labelling, and opt-out organ donation policies (UK since 2020) all exploit bounded rationality insights. The UK Government Behavioural Insights Team (BIT, "Nudge Unit"), established 2010, applies these principles systematically to public policy.

    **Organisational Decision-Making**
    Simon's original motivation was understanding how firms actually make decisions: managers use standard operating procedures, rules of thumb, and routinised search rather than comprehensive optimisation. This informs organisational theory, business strategy, and operations management, including supply chain risk management under the EU Deforestation Regulation and similar compliance frameworks that impose aspiration-level constraints on supply chain actors.

    **Agent-Based Modelling**
    Bounded rationality is the dominant agent model in [[Agent-Based Modelling]] of financial markets, urban systems, and epidemiology. Agents following simple heuristic rules generate emergent macro-phenomena — price bubbles, segregation patterns, epidemic waves — that rational-actor models fail to replicate. The Santa Fe Institute's sugarscape model and the Bank of England's MIDAS agent-based model of financial stability both employ bounded rational agents.

    **Reinforcement Learning and AI Planning**
    The resource-rational framework formalises bounded rationality within AI: [[Reinforcement Learning]] agents face the explore/exploit dilemma under bounded compute; planning algorithms like beam search, Monte Carlo Tree Search (MCTS used in AlphaGo), and branch-and-bound all implement satisficing under resource constraints. [[Markov Decision Process]] solvers use approximate dynamic programming because exact solution is computationally intractable.

    **Large Language Models and Alignment**
    LLMs operate under explicit bounded rationality: finite context windows truncate available information; token generation budgets limit reasoning depth; training-data priors create aspiration-level-like biases toward familiar outputs. The 2025 SITAlign framework (ArXiv:2505.23729) implements satisficing alignment: maximise helpfulness subject to harmlessness ≥ threshold, avoiding the Pareto frontier trade-offs that complicate multi-objective RLHF. Henry Han's 2026 SSRN paper frames LLM biases as system-level properties of bounded rational agents, proposing governance mechanisms that treat bias as an architectural feature to be constrained rather than eliminated.

    **Human–Computer Interaction and Decision Support**
    Decision support systems (DSS), recommender systems, and explanation systems are explicitly designed to extend bounded human rationality: providing curated information, highlighting salient alternatives, and structuring the search process. EU AI Act Article 13 (transparency) and Article 14 (human oversight) both assume bounded rational human operators who cannot process unlimited information.

    **Clinical Decision-Making**
    Medical triage, diagnostic protocols, and treatment pathway design exploit bounded rationality by providing fast-and-frugal decision trees that outperform logistic regression in emergency settings (Gigerenzen, 2014). NHS clinical guidelines implement aspiration-level thresholds (e.g., blood pressure ≥ 140/90 triggers treatment) rather than continuous optimisation.

  ## Academic Context
    Bounded rationality was introduced by Herbert A. Simon in a series of foundational works beginning in 1947. Simon's *Administrative Behavior* (1947) presented the first formal critique of the rational actor model in organisational contexts; *A Behavioral Model of Rational Choice* (1955, Quarterly Journal of Economics) introduced the terms "bounded rationality" and "satisficing"; *Models of Man* (1957) synthesised the framework; and *The Sciences of the Artificial* (1969, 3rd ed. 1996) extended bounded rationality to design thinking and AI. Simon received the Nobel Prize in Economic Sciences in 1978 for his decision-making research.

    The heuristics-and-biases programme was launched by Amos Tversky and Daniel Kahneman with their 1974 Science paper "Judgment Under Uncertainty: Heuristics and Biases," followed by Kahneman and Tversky's Prospect Theory (Econometrica, 1979), which became the most cited paper in economics. Kahneman received the Nobel Prize in Economics in 2002 (Tversky had died in 1996). Richard Thaler continued this line, collaborating with Cass Sunstein on Nudge (2008) and receiving the Nobel Prize in 2017.

    The competing ecological rationality programme was developed by Gerd Gigerenzen and the ABC (Adaptive Behaviour and Cognition) Research Group at the Max Planck Institute. Key works include *Simple Heuristics That Make Us Smart* (Gigerenzen, Todd & ABC Group, 1999), *Rationality for Mortals* (2008), and *Risk Savvy* (2014). Gigerenzen argues heuristics are not biases but adaptations.

    The resource-rational computation framework (Griffiths, Lieder, Goodman) bridges bounded rationality and Bayesian cognitive science, formalising how optimal use of limited computational resources explains human cognition; key papers include Lieder & Griffiths (2020, Psychological Review) "Resource-Rational Analysis: Understanding Human Cognition as the Optimal Use of Limited Computational Resources."

    In AI and operations research, bounded rationality connects to satisficing search (Simon, 1956), anytime algorithms (Dean & Boddy, 1988), and bounded optimality (Russell & Subramanian, 1995). The multi-agent systems community uses bounded rational agents in mechanism design and algorithmic game theory.

  ## Current Landscape (2026)
    Bounded rationality has experienced renewed prominence in the AI era as researchers recognise that LLMs and other AI systems exhibit bounded rational characteristics intrinsically. As of 2026, key developments include:

    - **LLM alignment**: SITAlign (2025) applies satisficing to alignment, treating helpfulness as a primary objective and harmlessness/bias as threshold constraints, outperforming Pareto RLHF approaches in empirical tests on Anthropic's Constitutional AI benchmarks
    - **Governance of AI biases**: Henry Han's 2026 SSRN framework proposes treating LLM biases as system-level properties of bounded rational agents, calling for regulatory treatment analogous to financial risk management rather than individual error correction
    - **Human–AI teaming**: A 2025 Sage Journals study (Almutairi & Almatrodi) empirically confirmed that human decision-makers under Simon's bounded rationality framework significantly increase trust in AI recommendations when AI presents uncertainty quantification alongside point estimates
    - **Behavioural AI safety**: UK AI Safety Institute (AISI) research (2025) examines how bounded rationality in human overseers creates systematic blind spots in AI oversight, informing the design of human-in-the-loop systems under the EU AI Act
    - **Irrationality in AI**: Springer Nature AI Review (2025) surveyed the state of the art of (ir)rationality in AI systems, cataloguing how transformer architectures exhibit analogues of classical bounded rationality biases including framing effects, anchoring, and availability heuristics
    - **Public sector applications**: The Dutch childcare benefits scandal (2019–2024) became a canonical case study of how algorithmic systems operating under bounded rationality assumptions embedded in their training data produced catastrophic outcomes when deployed in public administration, informing the EU AI Act's high-risk classification of public-sector automated decision systems

  ## UK Context
    The UK has been a global leader in translating bounded rationality research into public policy. The Behavioural Insights Team (BIT), established within the Cabinet Office in 2010 under the coalition government and privatised in 2014 as a social purpose company, pioneered the application of bounded rationality and nudge theory at governmental scale. BIT's work on pension auto-enrolment, tax compliance letters, and NHS appointment reminder systems produced measurable, cost-effective behaviour change.

    UK academic contributions span multiple institutions. At the University of Warwick, Nick Chater's group studies the foundations of rationality and applies bounded rationality to language, cognition, and AI. At UCL, David Lagnado and the Causal Cognition Laboratory investigate how humans construct causal models under uncertainty, directly extending Simon's framework. At the University of Cambridge, the Winton Centre for Risk and Evidence Communication applies bounded rationality to medical risk communication and public health. At the University of Sheffield, the Behavioural Science Group studies heuristic decision-making in industrial and policy contexts.

    Northern England has particular strengths: the University of Manchester's Alliance Manchester Business School has a Decision and Cognitive Sciences research group applying bounded rationality to managerial decision-making and supply chain behaviour. The University of Leeds hosts research on bounded rationality in transportation planning and infrastructure investment. Newcastle University's Business School applies the framework to healthcare management and public administration. Sheffield Hallam University has applied bounded rationality models to sports performance analytics and athlete decision-making.

    The NHS constitutes a major application domain: clinical pathway design, NICE technology appraisals (which use health economic models that implicitly apply aspiration-level thresholds via QALY per £20,000-£30,000 cost-effectiveness thresholds), and NHS Scotland's realistic medicine programme all embed bounded rationality principles. The UK National Data Strategy and the Centre for Data Ethics and Innovation have explicitly referenced bounded rationality in guidance on automated decision systems in public services.

  ## Future Directions (2026–2030)
    - **Formal bounded rationality in LLM architectures**: Designing transformer attention and memory mechanisms to explicitly model and exploit bounded rationality, enabling more faithful simulation of human decision behaviour and more robust alignment
    - **Resource-rational AI agents**: Extending the resource-rational framework beyond cognition to full AI pipelines — agents that budget compute, attention, and API calls as scarce resources, implementing satisficing rather than exhaustive search
    - **Computational neuroscience synthesis**: Bridging bounded rationality with neuroscientific accounts of prefrontal cortex resource allocation, dopaminergic reward signals, and neural satisficing, potentially enabling neuromorphic AI architectures that are intrinsically bounded rational
    - **Governance and regulatory embedding**: The EU AI Act review (2028) is expected to require formal bounded rationality assessments for high-risk AI systems, acknowledging that human oversight is itself bounded rational and designing review processes accordingly
    - **Ecological rationality in multi-agent systems**: Applying Gigerenzen's ecological rationality to multi-agent AI systems and market design — identifying which heuristics are well-adapted to which computational environments — to produce more robust and interpretable agent behaviours
    - **Educational AI**: Applying bounded rationality models to personalised learning systems that adapt to cognitive load, attention, and fatigue, dynamically adjusting information presentation to match learner's current cognitive budget
    - **Climate and sustainability policy**: Applying bounded rationality and nudge theory at scale to climate behaviour change interventions, building on UK Climate Change Committee modelling that accounts for the gap between rational optimal abatement and actual household behaviour

  ## Research & Literature
    1. Simon, H. A. (1955). A behavioral model of rational choice. *Quarterly Journal of Economics*, 69(1), 99–118. https://doi.org/10.2307/1884852
    2. Simon, H. A. (1957). *Models of Man: Social and Rational*. Wiley.
    3. Simon, H. A. (1996). *The Sciences of the Artificial* (3rd ed.). MIT Press.
    4. Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. *Science*, 185(4157), 1124–1131. https://doi.org/10.1126/science.185.4157.1124
    5. Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2), 263–291. https://doi.org/10.2307/1914185
    6. Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
    7. Gigerenzen, G., Todd, P. M., & ABC Research Group. (1999). *Simple Heuristics That Make Us Smart*. Oxford University Press.
    8. Gigerenzen, G. (2008). *Rationality for Mortals: How People Cope with Uncertainty*. Oxford University Press.
    9. Gigerenzen, G. (2014). *Risk Savvy: How to Make Good Decisions*. Viking.
    10. Thaler, R. H., & Sunstein, C. R. (2008). *Nudge: Improving Decisions About Health, Wealth and Happiness*. Yale University Press.
    11. Thaler, R. H., & Shefrin, H. M. (1981). An economic theory of self-control. *Journal of Political Economy*, 89(2), 392–406.
    12. Lieder, F., & Griffiths, T. L. (2020). Resource-rational analysis: Understanding human cognition as the optimal use of limited computational resources. *Psychological Review*, 127(1), 1–43. https://doi.org/10.1037/rev0000165
    13. Griffiths, T. L., Lieder, F., & Goodman, N. D. (2015). Rational use of cognitive resources: Levels of analysis between the computational and the algorithmic. *Topics in Cognitive Science*, 7(2), 217–229.
    14. Russell, S., & Subramanian, D. (1995). Provably bounded-optimal agents. *Journal of Artificial Intelligence Research*, 2, 575–609.
    15. Chater, N., & Oaksford, M. (1999). Ten years of the rational analysis of cognition. *Trends in Cognitive Sciences*, 3(2), 57–65.
    16. Almutairi, W., & Almatrodi, I. (2025). Trust under bounded rationality: Exploring human-AI interaction in decision-making through large language models. *SAGE Open*, 15(2). https://doi.org/10.1177/21582440251380135
    17. Han, H. (2026). LLMs as bounded rational agents: Governing bias as a system property. *SSRN Working Paper*. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5541298
    18. ArXiv (2025). Bounded rationality for LLMs: Satisficing alignment at inference-time. https://arxiv.org/abs/2505.23729
    19. Springer Nature AI Review. (2025). (Ir)rationality in AI: State of the art, research challenges and open questions. https://link.springer.com/article/10.1007/s10462-025-11341-4
    20. Dean, T., & Boddy, M. (1988). An analysis of time-dependent planning. *AAAI*, 49–54.
    21. Simon, H. A. (1956). Rational choice and the structure of the environment. *Psychological Review*, 63(2), 129–138.
    22. Conlisk, J. (1996). Why bounded rationality? *Journal of Economic Literature*, 34(2), 669–700.
    23. Sent, E. M. (2004). Behavioural economics: How psychology made its (limited) way back into economics. *History of Political Economy*, 36(4), 735–760.
    24. Dolan, P., Hallsworth, M., Halpern, D., King, D., & Vlaev, I. (2010). MINDSPACE: Influencing behaviour through public policy. Institute for Government / Cabinet Office. https://www.instituteforgovernment.org.uk/publication/mindspace
    25. Behavioural Insights Team. (2012). *Applying Behavioural Insights to Reduce Fraud, Error and Debt*. BIT / Cabinet Office.
    26. EBSCO Research Starters. (2024). Bounded rationality. https://www.ebsco.com/research-starters/social-sciences-and-humanities/bounded-rationality
    27. ResearchGate. (2024). Conceptual review of Herbert Simon's decision-making theories and its applicability in contemporary organisations. https://www.researchgate.net/publication/387024064
    28. Ortmann, A., & Gigerenzen, G. (1997). Reasoning in Edgeworth's world: Clever individuals or trusting interactions? *Games and Economic Behaviour*, 18(1), 141–153.

  ## Key Terminology
    - **Bounded Rationality**: decision-making under cognitive, informational, and temporal constraints that preclude global optimisation
    - **Satisficing**: selecting the first alternative that exceeds an aspiration threshold rather than maximising over all alternatives
    - **Aspiration Level**: the endogenously determined threshold above which an alternative is deemed acceptable; adapts over time
    - **Heuristic**: a simple, fast decision rule that performs well in specific environments by exploiting environmental regularities
    - **Fast and Frugal Heuristics**: Gigerenzen's class of heuristics that use minimal information and stopping rules, adapted to specific task environments
    - **Ecological Rationality**: the fitness of a heuristic to its environment; a heuristic is ecologically rational if it exploits the statistical structure of its environment
    - **Resource-Rational Computation**: the principle that cognitive systems should allocate limited computational resources to maximise expected value of information
    - **Nudge**: a choice architecture intervention that steers behaviour toward better outcomes without restricting options, exploiting bounded rationality
    - **Adaptive Toolbox**: Gigerenzen's metaphor for the repertoire of heuristics from which agents select context-appropriately
    - **Dual-Process Theory**: Kahneman's System 1 (fast, automatic, heuristic) / System 2 (slow, deliberate, rule-based) account of cognition that operationalises bounded rationality psychologically

- ### Provenance
  - sources:: Simon (1955) QJE; Kahneman & Tversky (1974) Science; Gigerenzen et al. (1999) Simple Heuristics; Lieder & Griffiths (2020) Psychological Review; Almutairi & Almatrodi (2025) SAGE Open https://journals.sagepub.com/doi/10.1177/21582440251380135; ArXiv (2025) https://arxiv.org/abs/2505.23729; Springer (2025) https://link.springer.com/article/10.1007/s10462-025-11341-4; EBSCO (2024) https://www.ebsco.com/research-starters/social-sciences-and-humanities/bounded-rationality; BIT MINDSPACE (2010) https://www.instituteforgovernment.org.uk/publication/mindspace
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
