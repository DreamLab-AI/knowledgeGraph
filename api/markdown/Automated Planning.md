public:: true

# Automated Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:daa9d05954005c86cdf630549096652bd9aff459c8eb09aee4ed817b23d1b5e2",
  "@type": "Page",
  "vc:slug": "automated-planning",
  "title": "Automated Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-systems",
      "vc:label": "Autonomous Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:planning-and-scheduling",
      "vc:label": "Planning and Scheduling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Automated Planning"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automated-planning",
  "@type": "Class",
  "label": "Automated Planning",
  "definition": "Automated Planning is a field of artificial intelligence concerned with the computational synthesis of action sequences (plans) that transform an initial world state into a desired goal state, using formal representations of states, actions, and constraints alongside algorithmic search and reasoning techniques.",
  "domain": "ai",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:planning-and-scheduling",
    "label": "Planning and Scheduling"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:state-space-search",
        "label": "State Space Search"
      },
      {
        "@id": "urn:ngm:class:hierarchical-task-network",
        "label": "Hierarchical Task Network"
      },
      {
        "@id": "urn:ngm:class:pddl",
        "label": "PDDL"
      },
      {
        "@id": "urn:ngm:class:plan-space-search",
        "label": "Plan Space Search"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:formal-logic",
        "label": "Formal Logic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-system",
        "label": "Autonomous System"
      },
      {
        "@id": "urn:ngm:class:task-automation",
        "label": "Task Automation"
      },
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      },
      {
        "@id": "urn:ngm:class:heuristic-function",
        "label": "Heuristic Function"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:strips",
        "label": "STRIPS"
      },
      {
        "@id": "urn:ngm:class:graphplan",
        "label": "GraphPlan"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sat-solver",
        "label": "SAT Solver"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-robot",
        "label": "Autonomous Robot"
      },
      {
        "@id": "urn:ngm:class:logistics-optimisation",
        "label": "Logistics Optimisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reactive-planning",
        "label": "Reactive Planning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:scheduling",
        "label": "Scheduling"
      },
      {
        "@id": "urn:ngm:class:temporal-reasoning",
        "label": "Temporal Reasoning"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ai-planning",
      "label": "AI Planning"
    },
    {
      "@id": "urn:ngm:class:automated-plan-synthesis",
      "label": "Automated Plan Synthesis"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:automated-planning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:daa9d05954005c86cdf630549096652bd9aff459c8eb09aee4ed817b23d1b5e2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Systems]]",
      "resolved": "urn:visionflow:linked:autonomous-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Planning and Scheduling]]",
      "resolved": "urn:visionflow:owl:class:planning-and-scheduling",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Automated Planning is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AutomatedPlanning
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Planning and Scheduling]]
  - enables:: [[Autonomous Systems]]
  - bridges-to:: [[Autonomous Robot]] (domain: rb)

- ### Content

  ### Definition
  Automated planning is the computational study of deliberation processes that generate action sequences to achieve specified goals. It involves representing states, actions, and goals formally, then using algorithmic techniques to synthesize plans that transform initial states into goal states while respecting domain constraints and optimizing objectives.

  ### Representation Components
  **States:**
  - Propositional/first-order logic
  - State variables
  - Fluents (changing properties)

  **Actions:**
  - Preconditions (when applicable)
  - Effects (state changes)
  - Costs/durations

  **Goals:**
  - Desired state properties
  - Optimization criteria

  ### Planning Languages
  - STRIPS (Stanford Research Institute Problem Solver)
  - ADL (Action Description Language)
  - PDDL (Planning Domain Definition Language)
  - RDDL (Relational Dynamic Influence Diagram Language)

  ### Planning Techniques
  **Graph-based:**
  - Planning graphs
  - GraphPlan algorithm

  **State-space Search:**
  - Forward search (progression)
  - Backward search (regression)
  - Heuristic search (Fast Forward, A*)

  **Plan-space Search:**
  - Partial-order planning
  - Hierarchical task networks (HTN)

  **SAT-based Planning:**
  - Encode as satisfiability problem
  - Use SAT solvers

  ### Applications
  - Autonomous robot missions
  - Space mission planning (NASA Deep Space 1)
  - Manufacturing process planning
  - Video game AI
  - Logistics and transportation
  - Automated software configuration

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
