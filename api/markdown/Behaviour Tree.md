public:: true

# Behaviour Tree
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:behaviour-tree",
  "@type": "Page",
  "vc:slug": "behaviour-tree",
  "title": "Behaviour Tree",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:behaviour-tree",
  "@type": "Class",
  "label": "Behaviour Tree",
  "definition": "A Behaviour Tree (BT) is a hierarchical, directed acyclic graph structure used to model the decision-making logic of autonomous agents, non-player characters (NPCs), and robots. Internal nodes represent control-flow composites — Sequence, Selector, Parallel, and Decorator — while leaf nodes represent atomic Actions or Conditions; execution propagates through the tree and each node returns Success, Failure, or Running to its parent. Behaviour Trees superseded Finite State Machines (FSMs) in many game and robotics contexts because they offer superior modularity, reusability, and comprehensibility: sub-trees encapsulate coherent behaviours that can be composed without explicit inter-state transition wiring. First popularised in the game-development community circa 2005 and later formalised in robotics frameworks such as BehaviorTree.CPP, BTs are now a standard control architecture in both real-time interactive media and autonomous robotic systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:sequence-node", "label": "Sequence Node"},
      {"@id": "urn:ngm:class:selector-node", "label": "Selector Node"},
      {"@id": "urn:ngm:class:decorator-node", "label": "Decorator Node"},
      {"@id": "urn:ngm:class:blackboard", "label": "Blackboard"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:task-planning", "label": "Task Planning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"},
      {"@id": "urn:ngm:class:npc-interaction", "label": "NPC Interaction"},
      {"@id": "urn:ngm:class:robot-mission-execution", "label": "Robot Mission Execution"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:pathfinding-algorithm", "label": "Pathfinding Algorithm"},
      {"@id": "urn:ngm:class:ai-agents", "label": "AI Agents"},
      {"@id": "urn:ngm:class:goal-oriented-action-planning", "label": "Goal-Oriented Action Planning"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"},
      {"@id": "urn:ngm:class:game-development", "label": "Game Development"},
      {"@id": "urn:ngm:class:robot-operating-system", "label": "Robot Operating System"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:state-machine", "label": "State Machine"},
      {"@id": "urn:ngm:class:finite-state-machine", "label": "Finite State Machine"},
      {"@id": "urn:ngm:class:hierarchical-task-network", "label": "Hierarchical Task Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:intelligent-npc", "label": "Intelligent NPC"},
      {"@id": "urn:ngm:class:ai-game-agent", "label": "AI Game Agent"},
      {"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"},
      {"@id": "urn:ngm:class:teleo-reactive-program", "label": "Teleo-Reactive Program"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:behavior-tree", "label": "Behavior Tree"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A Behaviour Tree is a hierarchical control structure composed of composite and leaf nodes that governs the decision-making and action selection of [[Autonomous Agent]] systems, most prominently in [[Game Development]] and robotics, offering modularity and readability advantages over flat [[State Machine]] architectures.

- ### Relationships
  - Behaviour Trees are closely related to [[State Machine]] models, which they frequently replace in character AI contexts because BTs avoid the combinatorial explosion of explicit transitions. They directly enable [[Intelligent NPC]] behaviour and [[NPC Interaction]] richness in [[Game Engine]] environments. BTs routinely delegate locomotion to [[Pathfinding Algorithm]] subroutines and call upon [[AI Agents]] or [[AI Game Agent]] implementations at their leaf nodes. [[Autonomous Agent]] architectures in robotics, including [[Robot Operating System]] (ROS) nodes, adopt BTs as their primary mission execution layer.

- ### Content
  - The Behaviour Tree formalism treats agent logic as a tree of tasks evaluated on each tick of the simulation loop. Control-flow nodes determine how child nodes are executed: a Sequence node executes children left-to-right and fails as soon as one child fails (logical AND semantics); a Selector node tries children in order and succeeds as soon as one child succeeds (logical OR semantics); a Parallel node executes all children simultaneously and returns based on a configurable success/failure threshold. Decorator nodes modify a single child's return value or execution policy (e.g. Inverter, Repeater, Timeout).

  - In game development, Behaviour Trees became the dominant NPC AI architecture after their adoption in titles such as Halo 2 and later the Unreal Engine's built-in BT system. The key advantage over FSMs is that behaviours can be composed hierarchically without explicit transition matrices — a patrol sub-tree, a combat sub-tree, and a flee sub-tree can be plugged into a Selector root without each sub-tree knowing about the others. This composability dramatically reduces authoring time when iterating on complex creature or character AI.

  - In robotics and autonomous systems, Behaviour Trees are used alongside task planners and motion planners. Frameworks such as BehaviorTree.CPP (C++) and py_trees (Python) provide production-quality implementations with blackboard memory shared between nodes, asynchronous action execution, and XML/JSON serialisation for visual editing. Research has shown formal correspondences between BTs and Teleo-Reactive Programs, and BTs can be synthesised automatically from planning algorithms, further integrating them into the broader [[Automated Planning]] landscape.

  - Limitations of classic BTs include the need for careful tree design to avoid polling overhead and the absence of native support for long-horizon planning. Hybrid architectures that combine a high-level planner (e.g. GOAP — Goal-Oriented Action Planning) with a BT execution layer address these shortcomings and are widely used in commercial titles and service robots.

