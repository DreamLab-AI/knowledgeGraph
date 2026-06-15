```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:cognitive-architecture",
  "title": "Cognitive Architecture",
  "vc:slug": "cognitive-architecture",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cognitive-architecture",
  "@type": "Class",
  "label": "Cognitive Architecture",
  "definition": "A cognitive architecture is a formal specification of the fixed computational structures, memory systems, and control mechanisms that together constitute a general-purpose intelligent agent, independent of any particular task or domain. It prescribes how perception, attention, memory retrieval, reasoning, learning, and action selection are integrated into a unified processing cycle, providing a theoretical and engineering framework for building systems that exhibit adaptive, goal-directed behaviour. Classical examples include ACT-R (Adaptive Control of Thought–Rational), SOAR, and LIDA; contemporary variants extend these principles to neural-symbolic hybrids, transformer-based agent frameworks, and large language model scaffolding systems. Cognitive architectures serve simultaneously as psychological theories of the human mind and as blueprints for artificial intelligence systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "quality": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:working-memory",
        "label": "Working Memory"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:planning-and-scheduling",
        "label": "Planning and Scheduling"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:symbolic-reasoning",
        "label": "Symbolic Reasoning"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agents"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:production-rules",
        "label": "Production Rules"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Networks"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:narrow-ai",
        "label": "Narrow AI"
      },
      {
        "@id": "urn:ngm:class:task-specific-model",
        "label": "Task-Specific Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:artificial-general-intelligence",
        "label": "General Intelligence"
      },
      {
        "@id": "urn:ngm:class:computational-neuroscience",
        "label": "Computational Neuroscience"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:brain-computer-interfaces",
        "label": "Brain-Computer Interface"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:intelligent-agent-architecture",
      "label": "Intelligent Agent Architecture"
    },
    {
      "@id": "urn:ngm:class:unified-theory-of-cognition",
      "label": "Unified Theory of Cognition"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **Cognitive Architecture** is a formal specification of the fixed computational structures, memory systems, and control mechanisms that together constitute a general-purpose [[Intelligent Agent]], independent of any particular task or domain. It defines how [[Perception]], attention, [[Working Memory]], [[Long-Term Memory]], [[Reasoning]], learning, and [[Action Selection]] are integrated into a unified processing cycle. Cognitive architectures serve as both empirical theories of [[Cognitive Science]] and engineering blueprints for [[Artificial Intelligence]] systems, providing a principled basis for building agents that exhibit adaptive, goal-directed behaviour across diverse environments. Canonical architectures include [[ACT-R]], [[SOAR]], and [[LIDA]], with modern extensions bridging [[Neural Networks]] and [[Symbolic Reasoning]] into hybrid frameworks.

- ### Overview
  - Cognitive architectures emerged in the 1970s–1980s as an attempt to produce a *unified theory of cognition* — a single computational model explaining the full range of human intelligent behaviour rather than isolated tasks. The key insight was that intelligence is not a collection of independent modules but the product of tightly coupled subsystems sharing common memory structures and a central control cycle.
  - **Why it matters**
    - Provides a principled foundation for designing [[Autonomous Agents]] that generalise across tasks without task-specific reprogramming.
    - Acts as a bridge between [[Computational Neuroscience]] and practical [[Artificial Intelligence]], grounding engineering decisions in cognitive plausibility.
    - Enables systematic comparison and replication of agent behaviours, supporting scientific progress in [[AI Research]].
    - Increasingly relevant to [[Agentic AI]] systems built on [[Large Language Models]], where architectural choices about context windows, tool invocation, and memory retrieval directly mirror classical cognitive architecture decisions.
  - **How it works**
    - A cognitive architecture defines a fixed set of *structural components* (memory stores, processors) and a *control strategy* (the order and conditions under which components activate).
    - During each cognitive cycle: sensory input is encoded into a [[Working Memory]] buffer; [[Production Rules]] or learned associations are matched; a selection mechanism resolves conflicts; an action is executed; and feedback updates long-term stores.
    - The architecture itself does not change between tasks; what changes is the *declarative* and *procedural* knowledge loaded into memory, making the system general-purpose.

- ### Key Components
  - **Memory subsystems**
    - [[Working Memory]] — limited-capacity store holding the current focus of attention and the active problem context; the central workspace for reasoning.
    - [[Declarative Memory]] — long-term store of factual knowledge (episodic and semantic); retrieved via spreading activation or similarity matching.
    - [[Procedural Memory]] — compiled knowledge of *how* to do things, represented as production rules or skill chunks; accessed implicitly.
    - [[Perceptual Buffers]] — transient registers holding the output of [[Perception]] modules (vision, audition, proprioception) before encoding into working memory.
  - **Processing subsystems**
    - [[Production System]] — the core inference engine matching condition–action rules against the contents of working memory and selecting which rule fires.
    - [[Pattern Matching]] — the mechanism by which stored rules or memory chunks are activated by partial cues in the current context.
    - [[Conflict Resolution]] — the priority scheme used when multiple rules match simultaneously; in ACT-R this is utility-based, in SOAR it triggers *impasse resolution*.
    - [[Learning Mechanisms]] — subsystems that update the strength, utility, or content of memory structures from experience; includes chunking (SOAR), ACT-R's base-level activation decay, and reinforcement signals.
  - **Control structures**
    - [[Goal Stack]] — an explicit representation of active goals and subgoals, enabling hierarchical planning and task interruption.
    - [[Cognitive Cycle]] — the fundamental unit of processing (typically 50 ms in ACT-R); perception, retrieval, deliberation, and action are each allocated one cycle.
    - [[Meta-Cognition]] — the capacity of the architecture to monitor and regulate its own processing, detecting failures and switching strategies.

- ### Canonical Architectures
  - **[[ACT-R]]** (Adaptive Control of Thought–Rational)
    - Developed by John Anderson at Carnegie Mellon University; the most empirically validated cognitive architecture, with predictions matched to fMRI brain-imaging data.
    - Uses subsymbolic activation values (base-level learning, spreading activation) to govern memory retrieval latencies, explaining human error and forgetting patterns.
  - **[[SOAR]]** (State, Operator, And Result)
    - Developed by Allen Newell, John Laird, and Paul Rosenbloom; the original instantiation of Newell's *Unified Theory of Cognition*.
    - Resolves all problem-solving through a universal *impasse-subgoal* mechanism; chunking compiles experience into new production rules.
  - **[[LIDA]]** (Learning Intelligent Distribution Agent)
    - Developed by Stan Franklin; inspired by [[Global Workspace Theory]] of consciousness; emphasises attention-based broadcast and multiple specialised codelets.
  - **[[CLARION]]** — dual-process architecture with explicit (symbolic) and implicit (connectionist) subsystems interacting bidirectionally, capturing the role of intuition alongside deliberate reasoning.
  - **[[Sigma]]** — a factor-graph-based architecture from USC ICT aiming to unify cognitive architecture and [[Probabilistic Graphical Models]].
  - **LLM-based cognitive architectures** — emerging frameworks (e.g. [[ReAct]], [[Reflexion]], [[CoALA]]) that use [[Large Language Models]] as the core reasoning engine within an explicit memory-action loop, inheriting classical cognitive architecture concepts while leveraging neural generation.

- ### Applications and Use Cases
  - **Cognitive modelling and psychology**
    - Simulating human performance in memory recall, problem-solving, and learning tasks to generate testable predictions; used in cognitive psychology research and HCI usability studies.
  - **[[Autonomous Robots]]**
    - Providing robots with unified control systems integrating perception, planning, and manipulation; SOAR and ACT-R have been deployed on mobile robots and unmanned vehicles.
  - **[[Intelligent Tutoring Systems]]**
    - ACT-R underlies several ITS platforms (including Carnegie Learning's MATHia) where the architecture models student knowledge states and selects optimal instructional interventions.
  - **[[Human-Computer Interaction]] and UX**
    - Predictive human performance models built on cognitive architectures (CogTool, ACT-R/PM) estimate task completion times and error rates for interface designs without user studies.
  - **[[Agentic AI]] and LLM scaffolding**
    - Modern multi-agent frameworks (AutoGPT, LangChain agents, CrewAI) implicitly implement cognitive architecture concepts: working memory (context window), procedural memory (tool definitions), planning (chain-of-thought), and episodic memory (vector stores). Explicit cognitive architecture design principles are being adopted to make these systems more robust.
  - **[[Defence and Simulation]]**
    - Behaviour modelling of synthetic entities in military simulations (OneSAF, JSAF) uses cognitive architectures to produce realistic human-like decision-making under resource and time constraints.
  - **[[Brain-Computer Interfaces]]**
    - Cognitive architectures provide the computational substrate for BCI systems that must translate neural signals into goal-directed actions, requiring integrated perception–action loops.

- ### Relationships
  - hasPart:: [[Working Memory]]
  - hasPart:: [[Long-Term Memory]]
  - hasPart:: [[Reasoning]]
  - hasPart:: [[Planning and Scheduling]]
  - hasPart:: [[Perception]]
  - hasPart:: [[Action Selection]]
  - enables:: [[Agentic AI]]
  - enables:: [[Symbolic Reasoning]]
  - enables:: [[Autonomous Agents]]
  - enables:: [[Human-Computer Interaction]]
  - requires:: [[Knowledge Representation]]
  - requires:: [[Ontology]]
  - requires:: [[Machine Learning]]
  - uses:: [[Production Rules]]
  - uses:: [[Neural Networks]]
  - uses:: [[Bayesian Inference]]
  - uses:: [[Reinforcement Learning]]
  - contrastsWith:: [[Narrow AI]]
  - contrastsWith:: [[Task-Specific Model]]
  - relatedTo:: [[General Intelligence]]
  - relatedTo:: [[Computational Neuroscience]]
  - relatedTo:: [[Cognitive Science]]
  - relatedTo:: [[Large Language Models]]
  - bridges-to:: [[Robotics]]
  - bridges-to:: [[Brain-Computer Interface]]

- ### Standards and Context
  - **IEEE P7001** — transparency standards for autonomous systems overlap with cognitive architecture auditability requirements, particularly the need for explainable goal-selection and memory retrieval.
  - **DARPA programmes** — Explainable AI (XAI), Lifelong Learning Machines (L2M), and Machine Common Sense (MCS) have funded cognitive architecture research as a route to robust, generalisable AI.
  - **CogSci / ICCM conferences** — the International Conference on Cognitive Modelling is the primary venue for empirical validation of cognitive architectures against human data.
  - **Relationship to [[AGI]]** — cognitive architectures represent one of the oldest and most principled research paths toward artificial general intelligence, contrasting with pure [[Deep Learning]] scaling approaches by emphasising structured memory and explicit goal representations.
  - **Relationship to [[Neuro-symbolic AI]]** — modern cognitive architectures increasingly incorporate [[Neural Networks]] as perception or pattern-matching subsystems while retaining symbolic rule-based control, directly instantiating the neuro-symbolic integration agenda.

- ### Provenance
  - sources:: ACT-R theory (John R. Anderson, Carnegie Mellon); SOAR architecture (Newell, Laird, Rosenbloom); LIDA (Stan Franklin); Unified Theories of Cognition (Newell 1990); CoALA framework (Sumers et al. 2023); DARPA XAI / L2M programme documentation
  - updated:: 2026-06-13
