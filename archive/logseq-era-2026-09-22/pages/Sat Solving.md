public:: true

# Sat Solving
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:sat-solving",
  "@type": "Page",
  "title": "Sat Solving",
  "vc:slug": "sat-solving",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sat-solving",
  "@type": "Class",
  "label": "Sat Solving",
  "definition": "SAT solving is the algorithmic process of determining whether a propositional logic formula, typically in conjunctive normal form, has a satisfying truth assignment — the Boolean satisfiability problem. Although SAT is the canonical NP-complete problem, modern conflict-driven clause-learning solvers routinely decide instances with millions of variables and clauses, making SAT a practical engine for many computational tasks. SAT solving uses systematic search with unit propagation, clause learning, and intelligent backtracking. It underpins formal verification, automated planning, and constraint solving, and is closely related to satisfiability-modulo-theories reasoning.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:automated-reasoning",
      "label": "Automated Reasoning"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:propositional-logic",
        "label": "Propositional Logic"
      },
      {
        "@id": "urn:ngm:class:logic",
        "label": "Logic"
      },
      {
        "@id": "urn:ngm:class:heuristic-search",
        "label": "Heuristic Search"
      },
      {
        "@id": "urn:ngm:class:search-algorithm",
        "label": "Search Algorithm"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:constraint-solver",
        "label": "Constraint Solver"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction-problem",
        "label": "Constraint Satisfaction Problem"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:model-checking",
        "label": "Model Checking"
      },
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:theorem-proving",
        "label": "Theorem Proving"
      },
      {
        "@id": "urn:ngm:class:verification",
        "label": "Verification"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:optimisation-algorithm",
        "label": "Optimization Algorithm"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      },
      {
        "@id": "urn:ngm:class:electronic-design-automation",
        "label": "Electronic Design Automation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
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
  - [[Sat Solving]] decides whether a [[Propositional Logic]] formula is satisfiable using [[Heuristic Search]] and [[Search Algorithm]] techniques, acting as a [[Constraint Solver]] that enables [[Formal Verification]], [[Model Checking]], and [[Automated Planning]] within [[Automated Reasoning]].

- ### Overview
  - SAT solving tackles the Boolean satisfiability problem — the first problem proven NP-complete — yet engineering advances have made it one of the most successful practical reasoning technologies.
  - Conflict-driven clause-learning (CDCL) solvers combine systematic search with unit propagation, learning new clauses from conflicts and backjumping non-chronologically, allowing them to scale to industrial instances.
  - SAT serves as a universal back-end: many problems in verification, planning, and combinatorics are encoded into propositional formulae and decided by off-the-shelf solvers.

- ### Mechanisms
  - Unit propagation: forced assignments are propagated to prune the search space rapidly.
  - Clause learning: conflicts are analysed to derive new constraints that prevent repeating failures.
  - Non-chronological backtracking: solvers backjump to the relevant decision rather than undoing one step at a time.
  - Encoding: practical problems are translated into conjunctive normal form for the solver to decide.

- ### Applications
  - Formal verification and model checking of hardware and software.
  - Automated planning by encoding plans as satisfiability instances.
  - Combinatorial design, configuration, and constraint solving via SMT extensions.

- ### Relationships
  - uses:: [[Propositional Logic]]
  - uses:: [[Logic]]
  - uses:: [[Heuristic Search]]
  - uses:: [[Search Algorithm]]
  - hasPart:: [[Constraint Solver]]
  - hasPart:: [[Constraint Satisfaction Problem]]
  - enables:: [[Formal Verification]]
  - enables:: [[Model Checking]]
  - enables:: [[Automated Planning]]
  - supports:: [[Theorem Proving]]
  - supports:: [[Verification]]
  - implements:: [[Automated Reasoning]]
  - requires:: [[Optimisation Algorithm]]
  - relatedTo:: [[Planning]]
  - relatedTo:: [[Electronic Design Automation]]
  - partOf:: [[Automated Reasoning]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
