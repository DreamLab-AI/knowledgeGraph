public:: true

# STRIPS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7f0f0914868763ca46487e48f2dcb90bac3751175c0d4536a8e0b91c4aff52d5",
  "@type": "Page",
  "vc:slug": "strips",
  "title": "STRIPS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:knowledge-representation",
      "vc:label": "Knowledge Representation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1009"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "STRIPS"
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
  "@id": "urn:ngm:class:strips",
  "@type": "Class",
  "label": "STRIPS",
  "definition": "STRIPS (Stanford Research Institute Problem Solver) is a classical automated planning formalism that represents world states as conjunctions of propositions and defines actions via precondition, add-list, and delete-list operators. It introduced the core abstraction underlying modern planning languages such as PDDL and remains foundational to symbolic AI planning.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:strips:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7f0f0914868763ca46487e48f2dcb90bac3751175c0d4536a8e0b91c4aff52d5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:owl:class:knowledge-representation",
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
  - STRIPS (Stanford Research Institute Problem Solver) is a classical automated planning formalism that represents world states as conjunctions of propositions and defines actions via precondition, add-list, and delete-list operators. It introduced the core abstraction underlying modern planning languages such as PDDL and remains foundational to symbolic AI planning.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Strips
  - owl-role:: Concept

- ### Relationships
  - Enables [[Automated Planning]] as its primary application domain
  - Uses [[Knowledge Representation]] (propositional logic for state and action encoding)
  - Bridges to [[Path Planning]] (STRIPS-style operators underpin robot motion planning)
  - Related to [[Reinforcement Learning]] as a complementary sequential decision-making paradigm

- ### Content

  ### Definition
  STRIPS (Stanford Research Institute Problem Solver) is a classical automated planning language and algorithm developed in the 1970s. It represents states as conjunctions of propositions (facts), actions as operators with preconditions and effects, and uses means-ends analysis to construct plans by backward chaining from goals to achievable states.

  ### STRIPS Representation
  **State:**
  - Set of ground atomic formulas
  - Closed-world assumption
  - Example: {On(A,B), On(B,Table), Clear(A)}

  **Operators (Actions):**
  - Name and parameters
  - Preconditions: must be true to execute
  - Add list: facts made true
  - Delete list: facts made false

  ### Classic Example: Blocks World
  ```
  Action: Move(block, from, to)
  Preconditions:
  - On(block, from)
  - Clear(block)
  - Clear(to)
  Add effects:
  - On(block, to)
  - Clear(from)
  Delete effects:
  - On(block, from)
  - Clear(to)
  ```

  ### STRIPS Algorithm
  1. Start with initial state and goal
  2. Find unsatisfied goal condition
  3. Find operator that achieves it
  4. Recursively plan for operator's preconditions
  5. Execute operator
  6. Repeat until all goals satisfied

  ### Limitations
  - Propositional representation only
  - No time or resources
  - Deterministic actions
  - Complete observability
  - Static world during planning

  ### Historical Significance
  - Foundation for modern planning
  - Influenced PDDL standard
  - Basis for many planning competitions
  - Led to hierarchical and temporal extensions

  ### Successors
  - ADL (richer representation)
  - PDDL (standardized language)
  - HTN (hierarchical planning)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
