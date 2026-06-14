public:: true

# Planning and Scheduling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6d1992256d81b28caea7eb0c25094b5c33485612cbabe35b23f7ae544fa1d9a",
  "@type": "Page",
  "vc:slug": "planning-and-scheduling",
  "title": "Planning and Scheduling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:constraint-satisfaction",
      "vc:label": "Constraint Satisfaction"
    },
    {
      "@id": "urn:visionflow:linked:optimization",
      "vc:label": "Optimization"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:resource-management",
      "vc:label": "Resource Management"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:search-algorithms",
      "vc:label": "Search Algorithms"
    },
    {
      "@id": "urn:visionflow:owl:class:strips",
      "vc:label": "STRIPS"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1007"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Planning and Scheduling"
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
  "@id": "urn:ngm:class:planning-and-scheduling",
  "@type": "Class",
  "label": "Planning and Scheduling",
  "definition": "Planning and Scheduling is an AI subfield concerned with generating sequences of actions (plans) and allocating resources across time (schedules) to achieve goals while satisfying temporal, resource, and precedence constraints. It encompasses classical, temporal, contingent, and probabilistic planning paradigms, as well as job-shop, project, and vehicle-routing scheduling approaches.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-research-area",
    "label": "AI Research Area"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:classical-planning",
        "label": "Classical Planning"
      },
      {
        "@id": "urn:ngm:class:temporal-planning",
        "label": "Temporal Planning"
      },
      {
        "@id": "urn:ngm:class:contingent-planning",
        "label": "Contingent Planning"
      },
      {
        "@id": "urn:ngm:class:job-shop-scheduling",
        "label": "Job Shop Scheduling"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      },
      {
        "@id": "urn:ngm:class:search-algorithms",
        "label": "Search Algorithms"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:resource-management",
        "label": "Resource Management"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:autonomous-systems",
        "label": "Autonomous Systems"
      },
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:optimization",
        "label": "Optimization"
      },
      {
        "@id": "urn:ngm:class:state-space-search",
        "label": "State Space Search"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:strips",
        "label": "STRIPS"
      },
      {
        "@id": "urn:ngm:class:pddl",
        "label": "PDDL"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:manufacturing-automation",
        "label": "Manufacturing Automation"
      },
      {
        "@id": "urn:ngm:class:mission-planning",
        "label": "Mission Planning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reactive-control",
        "label": "Reactive Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      },
      {
        "@id": "urn:ngm:class:logistics",
        "label": "Logistics"
      },
      {
        "@id": "urn:ngm:class:project-management",
        "label": "Project Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:heuristic-search",
        "label": "Heuristic Search"
      },
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:automated-planning",
      "label": "Automated Planning"
    },
    {
      "@id": "urn:ngm:class:ai-planning",
      "label": "AI Planning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:planning-and-scheduling:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6d1992256d81b28caea7eb0c25094b5c33485612cbabe35b23f7ae544fa1d9a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Constraint Satisfaction]]",
      "resolved": "urn:visionflow:linked:constraint-satisfaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Optimization]]",
      "resolved": "urn:visionflow:linked:optimization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Resource Management]]",
      "resolved": "urn:visionflow:owl:class:resource-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Search Algorithms]]",
      "resolved": "urn:visionflow:owl:class:search-algorithms",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[STRIPS]]",
      "resolved": "urn:visionflow:owl:class:strips",
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
  - Planning and Scheduling is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:PlanningAndScheduling
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - enables:: [[Resource Management]]

- ### Content

  - #### Inverse Relationships (Inferred by Reasoner)
    - Automated Planning is-subclass-of Planning and Scheduling
  - skos:related:: [[Search Algorithms]]
  - skos:related:: [[Constraint Satisfaction]]
  - skos:related:: [[Optimization]]
  - uses:: [[STRIPS]]
  - enables:: [[Robotics]]
  - enables:: [[Resource Management]]

  ### Definition
  Planning and scheduling are AI techniques for generating sequences of actions to achieve goals while satisfying temporal and resource constraints. Planning focuses on determining what actions to take and in what order, while scheduling allocates resources and determines precise timing to optimize objectives such as makespan, cost, or efficiency.

  ### Planning Types
  **Classical Planning:**
  - Deterministic environments
  - Complete information
  - Static world assumptions

  **Temporal Planning:**
  - Actions with durations
  - Concurrent action execution
  - Temporal constraints

  **Contingent Planning:**
  - Partial observability
  - Conditional branches
  - Sensing actions

  **Probabilistic Planning:**
  - Stochastic outcomes
  - MDPs and POMDPs
  - Expectation-based decisions

  ### Scheduling Approaches
  - Job shop scheduling
  - Resource-constrained project scheduling
  - Vehicle routing and logistics
  - Production scheduling
  - CPU/task scheduling

  ### Key Challenges
  - Computational complexity (NP-hard)
  - Dynamic replanning
  - Multi-objective optimization
  - Uncertainty handling
  - Scalability to large problems

  ### Applications
  - Manufacturing and production
  - Supply chain management
  - Robotics task planning
  - Space mission planning
  - Autonomous vehicle coordination
  - Cloud computing resource allocation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
