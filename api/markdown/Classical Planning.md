public:: true

# Classical Planning

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:classical-planning",
  "@type": "Page",
  "title": "Classical Planning",
  "vc:slug": "classical-planning",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:classical-planning",
  "@type": "Class",
  "label": "Classical Planning",
  "definition": "Classical planning is a branch of automated planning that computes a sequence of deterministic actions transforming a fully observable initial state into a state satisfying a goal condition. It assumes a single agent, discrete states, instantaneous actions with deterministic effects, and complete knowledge of the world. Problems are typically expressed in formalisms such as STRIPS or PDDL and solved by heuristic state-space search.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:automated-planning",
      "label": "Automated Planning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:state-space-search",
        "label": "State Space Search"
      },
      {
        "@id": "urn:ngm:class:heuristic-search",
        "label": "Heuristic Search"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:game-playing",
        "label": "Game Playing"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:pathfinding",
        "label": "Pathfinding"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
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
  - [[Classical Planning]] computes deterministic action sequences that move a system from a known initial state to a goal, drawing on [[Automated Planning]], [[State Space Search]] and [[Knowledge Representation]] under closed-world assumptions.
- ### Overview
  - Classical planning sits at the symbolic end of [[Artificial Intelligence]], formalising the deliberation problem as search over discrete world states. The canonical model assumes determinism, full observability, a single agent, and atomic actions described by preconditions and effects. The Planning Domain Definition Language (PDDL) and its ancestor STRIPS are the dominant encodings.
  - A planner takes a domain (action schemata) and a problem (objects, initial state, goal) and returns a plan: a totally or partially ordered set of actions. Practical performance hinges on domain-independent heuristics derived automatically from the problem structure.
- ### Key aspects
  - State representation as sets of ground predicates (the closed-world assumption fills in the rest as false).
  - Action schemata with preconditions and add/delete effects.
  - Goal conditions expressed as conjunctions (or richer logical formulae) over predicates.
  - Domain-independent heuristics such as the delete-relaxation (h_max, h_add, h_FF) and landmark heuristics.
  - Plan validity checking and optimal versus satisficing planning.
- ### Mechanisms
  - Forward state-space search from the initial state guided by [[Heuristic Search]].
  - Backward (regression) search from the goal.
  - Plan-space and partial-order planning that delay commitment to action ordering.
  - Compilation to SAT or CSP and solving with general-purpose solvers via [[Constraint Satisfaction]].
- ### Applications
  - Autonomous [[Robotics]] task sequencing and [[Motion Planning]] at the symbolic layer.
  - [[Game Playing]] and puzzle solving where action effects are deterministic.
  - Logistics, manufacturing scheduling, and spacecraft operations.
  - Workflow and process automation built on declarative goal specifications.
- ### Relationships
  - partOf:: [[Automated Planning]]
  - contrastsWith:: [[Reinforcement Learning]]
  - contrastsWith:: [[Markov Decision Process]]
  - hasPart:: [[State Space Search]]
  - hasPart:: [[Heuristic Search]]
  - uses:: [[Knowledge Representation]]
  - uses:: [[Graph Search]]
  - requires:: [[Constraint Satisfaction]]
  - enables:: [[Agent]]
  - enables:: [[Robotics]]
  - supports:: [[Game Playing]]
  - supports:: [[Motion Planning]]
  - relatedTo:: [[Optimisation]]
  - relatedTo:: [[Pathfinding]]
  - relatedTo:: [[Artificial Intelligence]]
- ### Provenance
  - source:: GapMaterialisation
  - updated:: 2026-06-15
