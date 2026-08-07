public:: true

# Reactive Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9fcac2fd1a1853851611cef6b69da352f680d89b0b7c061bc9362ffa9408894a",
  "@type": "Page",
  "vc:slug": "reactive-planning",
  "title": "Reactive Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-planning",
      "vc:label": "Automated Planning"
    },
    {
      "@id": "urn:visionflow:linked:classical-planning",
      "vc:label": "Classical Planning"
    },
    {
      "@id": "urn:visionflow:linked:behaviour-tree",
      "vc:label": "Behaviour Tree"
    },
    {
      "@id": "urn:visionflow:linked:subsumption-architecture",
      "vc:label": "Subsumption Architecture"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reactive-planning",
  "@type": "Class",
  "label": "Reactive Planning",
  "definition": "An approach to agent control that selects actions directly from the current perceived situation rather than constructing and executing a complete plan in advance, trading long-horizon optimality for immediate responsiveness so that agents can act robustly in dynamic, uncertain, or partially observable environments where deliberative plans would be invalidated before they finish executing.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:automated-planning",
    "label": "Automated Planning"
  },
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:subsumption-architecture",
        "label": "Subsumption Architecture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:behaviour-tree",
        "label": "Behaviour Tree"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:classical-planning",
        "label": "Classical Planning"
      },
      {
        "@id": "urn:ngm:class:task-and-motion-planning",
        "label": "Task and Motion Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:real-time-systems",
        "label": "Real Time Systems"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "An approach to agent control that selects actions directly from the current perceived situation rather than constructing and executing a complete plan in advance, trading long-horizon optimality for immediate responsiveness so that agents can act robustly in dynamic, uncertain, or partially observable environments where deliberative plans would be invalidated before they finish executing."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ReactivePlanning
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Automated Planning]]
  - contrasts-with:: [[Classical Planning]]
  - implements:: [[Subsumption Architecture]]
  - uses:: [[Behaviour Tree]]

- ### Content

  ## Definition

  **Reactive planning** is a family of agent-control techniques in which behaviour is computed moment-to-moment from the current world state, rather than derived from a complete symbolic plan produced before execution begins. Where [[Classical Planning]] searches offline for a sequence of actions guaranteed to reach a goal from a known initial state, a reactive planner maintains a mapping — explicit or compiled — from situations to actions, and re-evaluates that mapping on every control cycle. The approach emerged in the late 1980s from criticism of deliberative robotics, most influentially Rodney Brooks's [[Subsumption Architecture]], which showed that layered condition-action behaviours could produce robust navigation with no world model at all.

  The defining trade-off is responsiveness versus foresight. Reactive planners tolerate sensor noise, exogenous change, and plan-invalidating surprises because they never commit to a stale plan; the cost is that purely reactive systems can be short-sighted, cycling or stalling on problems that require multi-step lookahead. Modern practice therefore favours hybrid architectures: a deliberative layer produces goals or coarse plans whilst a reactive layer — often a [[Behaviour Tree]], teleo-reactive programme, or finite-state controller — handles execution, recovery, and safety within tight real-time budgets.

  In this graph, reactive planning sits as the standard counterpoint to deliberative methods: [[Automated Planning]], [[Classical Planning]], and [[Task and Motion Planning]] each contrast with it when discussing how agents cope with dynamic environments.

  ## Technical Details

  Representative mechanisms include:

  - **Condition-action rules**: prioritised production rules evaluated each cycle; the highest-priority rule whose condition holds fires (e.g. Nilsson's teleo-reactive programmes).
  - **Behaviour trees**: hierarchical composition of tasks with sequence, fallback, and decorator nodes, ticked at fixed frequency; dominant in game AI and increasingly in ROS-based robotics via BehaviorTree.CPP.
  - **Subsumption layers**: fixed-topology networks of augmented finite-state machines in which higher layers suppress or inhibit lower ones.
  - **Universal plans / policies**: precomputed mappings from every reachable state to an action, as produced by reinforcement learning or symbolic policy synthesis — reactive at execution time even when computed deliberatively.

  Reactive execution layers must satisfy hard latency bounds, which links the topic to [[Real Time Systems]]: control loops typically run at 10–1000 Hz, and action selection must complete within a single tick. The standard weaknesses — local minima, oscillation, and inability to reason about resource use over long horizons — are mitigated in practice by layering reactive skills beneath a slower deliberative planner, an arrangement now conventional in autonomous driving stacks, drone autopilots, and manipulation pipelines that pair [[Motion Planning]] with reactive collision avoidance.

  ## Current Landscape

  - **Behaviour trees are the ROS 2 default**: `BehaviorTree.CPP` has become the de facto standard for reactive task execution in the ROS 2 ecosystem, largely through its integration into the Nav2 navigation stack, cementing tick-based reactive control as mainstream robotics practice.
  - **LLMs as reactive-plan generators (2024–2025)**: a wave of work uses large language models to *generate* behaviour trees from natural-language instructions — including fine-tuned lightweight (≤7B) models that emit BehaviorTree.CPP-compatible trees (arXiv:2403.12761) and in-context "LLM-as-BT-Planner" frameworks for robotic assembly (arXiv:2409.10444) — combining a deliberative language layer with a reactive execution layer.
  - **Interpretable hybrid control (Aug 2025)**: frameworks pairing GPT-4o interpretation with a tick-based behaviour-tree core report ~94% end-to-end command-to-execution accuracy across human-robot interaction scenarios, illustrating the now-standard "slow deliberation, fast reaction" split on real aerial and legged robots.
  - **Enduring rationale**: the classic reactive-planning virtues — robustness to sensor noise and exogenous change, and bounded per-tick latency — remain the reason these architectures dominate over purely deliberative planning in dynamic, safety-critical settings.

  **Sources**:
  - https://arxiv.org/html/2403.12761v2
  - https://arxiv.org/html/2409.10444v3
  - https://www.emergentmind.com/papers/2508.09621
