public:: true

# Belief Desire Intention

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:belief-desire-intention",
  "@type": "Page",
  "title": "Belief Desire Intention",
  "vc:slug": "belief-desire-intention",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:belief-desire-intention",
  "@type": "Class",
  "label": "Belief Desire Intention",
  "definition": "The Belief-Desire-Intention (BDI) model is a framework for designing rational software agents in which mental states are represented as beliefs (what the agent knows about the world), desires (goals the agent wishes to achieve), and intentions (committed plans of action). Originating from Bratman's philosophical work on practical reasoning, BDI has been formalised into agent programming languages such as AgentSpeak and frameworks such as JADE. It underpins many autonomous and multi-agent systems requiring deliberative reasoning.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:agent-architecture", "label": "Agent Architecture"},
      {"@id": "urn:ngm:class:reasoning-engine", "label": "Reasoning Engine"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:rational-agent", "label": "Rational Agent"},
      {"@id": "urn:ngm:class:deliberative-reasoning", "label": "Deliberative Reasoning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:planning", "label": "Planning"},
      {"@id": "urn:ngm:class:goal-directed-behaviour", "label": "Goal-Directed Behaviour"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:reactive-agent", "label": "Reactive Agent"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cognitive-architecture", "label": "Cognitive Architecture"},
      {"@id": "urn:ngm:class:symbolic-ai", "label": "Symbolic AI"},
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:fipa", "label": "FIPA"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Belief Desire Intention]] (BDI) is an [[Agent Architecture]] model representing agent mental states as beliefs, desires, and intentions.
  - **Beliefs** encode the agent's current world model; **desires** are goal states; **intentions** are committed action plans.
  - Originates from Michael Bratman's philosophy of [[Deliberative Reasoning]] and practical rationality.
  - Formalised into languages such as AgentSpeak and platforms like JADE for [[Multi-Agent System]] development.

- ### Overview
  - BDI agents continuously update beliefs from perception, reconsider desires against beliefs, and commit intentions to plan libraries.
  - The deliberation cycle: belief revision → desire generation → intention selection → plan execution.
  - Contrasts with [[Reactive Agent]] architectures that respond to stimuli without maintaining mental state.
  - Standardised through [[FIPA]] agent communication protocols for interoperability.

- ### Key Aspects
  - **Commitment strategy**: how strongly an agent maintains intentions once formed (blind, single-minded, open-minded).
  - **Plan library**: pre-compiled recipes mapping intention types to executable action sequences.
  - **Reconsideration**: periodic or event-driven re-evaluation of whether current intentions remain valid.
  - **Practical reasoning**: balancing responsiveness with commitment to avoid thrashing.

- ### Mechanisms
  - Belief base updated by perception and inter-agent communication.
  - Desire generator produces candidate goals from beliefs using domain rules.
  - Intention selector chooses among competing desires based on utility or priority.
  - Plan executor monitors plan progress and triggers re-planning on failure.

- ### Applications
  - [[Autonomous Agent]] systems for simulation, robotics, and logistics.
  - [[Multi-Agent System]] platforms for distributed negotiation and coordination.
  - [[Robotics]] task execution with recoverable plan hierarchies.
  - [[Distributed Collaboration]] scenarios with multiple competing stakeholder agents.
  - Integration with [[Large Language Model]] reasoning as a structured scaffolding layer.

- ### Relationships
  - uses:: [[Agent Architecture]]
  - uses:: [[Reasoning Engine]]
  - uses:: [[Knowledge Representation]]
  - implements:: [[Rational Agent]]
  - implements:: [[Deliberative Reasoning]]
  - requires:: [[Planning]]
  - requires:: [[Goal-Directed Behaviour]]
  - enables:: [[Multi-Agent System]]
  - enables:: [[Autonomous Agent]]
  - contrastsWith:: [[Reactive Agent]]
  - contrastsWith:: [[Reinforcement Learning]]
  - relatedTo:: [[Cognitive Architecture]]
  - relatedTo:: [[Symbolic AI]]
  - relatedTo:: [[Agentic AI]]
  - standardizedBy:: [[FIPA]]
  - supports:: [[Robotics]]
  - supports:: [[Distributed Collaboration]]
  - bridgesTo:: [[Large Language Model]]

- ### Provenance
  - updated:: 2026-06-15
