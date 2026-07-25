public:: true

# Satisfiability

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:satisfiability",
  "@type": "Page",
  "title": "Satisfiability",
  "vc:slug": "satisfiability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:satisfiability",
  "@type": "Class",
  "label": "Satisfiability",
  "definition": "Satisfiability is the problem of determining whether there exists an assignment of values to variables that makes a logical formula true, most prominently the Boolean satisfiability problem (SAT). SAT is the canonical NP-complete problem, and modern SAT solvers can decide formulas with millions of variables despite this worst-case hardness. Satisfiability provides a unifying computational substrate for verification, planning, scheduling and many forms of automated reasoning.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:logic",
      "label": "Logic"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      },
      {
        "@id": "urn:ngm:class:logic",
        "label": "Logic"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      },
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:logic",
        "label": "Logic"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:theorem-proving",
        "label": "Theorem Proving"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
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
  - [[Satisfiability]] asks whether a [[Logic]] formula has a satisfying assignment, a problem solved by [[Search Algorithm]] methods and central to [[Constraint Satisfaction]] and [[Formal Verification]].
- ### Overview
  - Decides whether a logical formula can be made true by some variable assignment.
  - Boolean SAT is the canonical NP-complete decision problem.
  - Practical solvers handle very large instances via conflict-driven clause learning.
- ### Key aspects
  - Conjunctive normal form encoding of constraints.
  - Conflict-driven clause learning and backtracking search.
  - Decision versus optimisation framings of feasibility.
  - Reductions that encode diverse problems as SAT instances.
- ### Applications
  - Hardware and software formal verification.
  - Automated planning and scheduling.
  - Combinatorial design and configuration.
  - Encoding for theorem proving and AI reasoning.
- ### Relationships
  - contrastsWith:: [[Optimisation]]
  - relatedTo:: [[Constraint Satisfaction]]
  - relatedTo:: [[Logic]]
  - uses:: [[Search Algorithm]]
  - uses:: [[Graph Search]]
  - enables:: [[Formal Verification]]
  - enables:: [[Planning]]
  - partOf:: [[Logic]]
  - supports:: [[Theorem Proving]]
  - supports:: [[Reasoning]]
  - requires:: [[Knowledge Representation]]
  - bridgesTo:: [[Constraint Satisfaction]]
  - implements:: [[Reasoning]]
- ### Provenance
  - updated:: 2026-06-15
