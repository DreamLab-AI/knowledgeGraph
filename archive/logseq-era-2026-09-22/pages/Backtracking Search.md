public:: true

# Backtracking Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bf659218b418f3a2eba6042b54bc468482c57550461042c5c434ab8991b43204",
  "@type": "Page",
  "vc:slug": "backtracking-search",
  "title": "Backtracking Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:search-algorithm",
      "vc:label": "Search Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:constraint-solver",
      "vc:label": "Constraint Solver"
    },
    {
      "@id": "urn:visionflow:linked:constraint-propagation",
      "vc:label": "Constraint Propagation"
    },
    {
      "@id": "urn:visionflow:linked:depth-first-search",
      "vc:label": "Depth-First Search"
    },
    {
      "@id": "urn:visionflow:linked:constraint-satisfaction",
      "vc:label": "Constraint Satisfaction"
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
  "@id": "urn:ngm:class:backtracking-search",
  "@type": "Class",
  "label": "Backtracking Search",
  "definition": "A depth-first search strategy for combinatorial problems that incrementally extends a partial assignment one variable at a time, checks it against the problem's constraints, and on any violation abandons the current branch by undoing the most recent choice and trying an alternative. Because it prunes every extension of an inconsistent partial assignment, it explores a small fraction of the full assignment space, and with constraint propagation and intelligent variable ordering it forms the core complete algorithm of constraint solvers and SAT solvers.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:search-algorithm",
    "label": "Search Algorithm"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:constraint-solver",
        "label": "Constraint Solver"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:constraint-propagation",
        "label": "Constraint Propagation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:depth-first-search",
        "label": "Depth-First Search"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
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
  - "A depth-first search strategy for combinatorial problems that incrementally extends a partial assignment one variable at a time, checks it against the problem's constraints, and on any violation abandons the current branch by undoing the most recent choice and trying an alternative. Because it prunes every extension of an inconsistent partial assignment, it explores a small fraction of the full assignment space, and with constraint propagation and intelligent variable ordering it forms the core complete algorithm of constraint solvers and SAT solvers."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BacktrackingSearch
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Search Algorithm]]
  - part-of:: [[Constraint Solver]]
  - uses:: [[Constraint Propagation]]
  - related-to:: [[Depth-First Search]]

- ### Content

  ## Definition

  **Backtracking search** is the fundamental complete algorithm for [[Constraint Satisfaction]] and related combinatorial problems. It builds a solution incrementally: pick an unassigned variable, tentatively assign it a value from its domain, and recurse. Whenever the partial assignment violates a constraint — or later inference proves it cannot be extended — the algorithm *backtracks*: it undoes the most recent choice and tries the next value, abandoning the entire subtree of assignments below the failed choice in one step.

  This is [[Depth-First Search]] over a tree of partial assignments rather than explicit problem states, which gives it two decisive practical properties: memory linear in the number of variables, and pruning that discards exponentially many complete assignments each time a shallow inconsistency is found. Its worst case remains exponential — the underlying problems are NP-complete — but on structured real-world instances the pruned tree is a vanishingly small fraction of the d^n assignment space.

  Plain chronological backtracking is rarely used alone. Modern solvers interleave it with [[Constraint Propagation]] (the MAC strategy re-establishes arc consistency after each assignment), choose variables with fail-first heuristics such as minimum-remaining-values and dom/wdeg, order values least-constraining-first, and replace chronological undoing with backjumping and conflict-driven nogood learning. The same skeleton, specialised to Boolean variables, becomes the DPLL procedure at the heart of CDCL SAT solvers.

  ## Technical Details

  - **Recursive scheme**: `backtrack(assignment)` — if complete, return it; select variable X (heuristic); for each value v in order: if consistent, assign, propagate, recurse; on failure unassign and continue; return failure when values are exhausted.
  - **Inference levels**: forward checking prunes only neighbours of the just-assigned variable; full look-ahead / MAC propagates network-wide and dominates on hard instances.
  - **Intelligent backtracking**: backjumping returns directly to the culprit decision identified by a conflict set; conflict-driven clause/nogood learning records the reason so the same dead end is never re-explored.
  - **Restarts and randomisation**: heavy-tailed run-time distributions make randomised value ordering with geometric or Luby restarts standard in both CP and SAT solvers.
  - **Canonical applications**: N-queens, Sudoku and crossword generation as teaching cases; industrially, scheduling, rostering, configuration, register allocation, and the DPLL/CDCL core of SAT-based verification.

  ## Current Landscape

  - **CP-SAT sweeps the 2025 benchmarks**: Google OR-Tools CP-SAT — whose complete-search core is conflict-driven backtracking over a CDCL SAT engine — won gold in every category (Fixed, Free, Parallel, Local Search) at the MiniZinc Challenge 2025 held at the CP 2025 conference, its ninth consecutive year of dominance.
  - **Lazy clause generation (LCG) is the state of the art**: the strongest modern constraint solvers (Chuffed, and the 2025 modular LCG solver Huub presented at CP 2025) fuse backtracking-with-propagation and SAT-style nogood learning; conflict-driven clause learning plus restarts (Luby/geometric) remain the decisive additions over plain chronological backtracking.
  - **SAT Competition 2025**: Kissat continued to lead the field of CDCL solvers, whose DPLL/CDCL core is specialised backtracking over Boolean variables — the industrial backbone of hardware and software verification.
  - **Neurosymbolic revival**: 2025 work training LLMs to emit and execute code for backtracking-based reasoning engines (SAT/CP/Prolog) shows the classical complete-search skeleton being wrapped as a verifiable tool for language-model reasoning, e.g. best-of-N decoding with symbolic verification.

  **Sources**:
  - https://www.minizinc.org/challenge/2025/results/
  - https://alexeyignatiev.github.io/assets/pdf/disz-cp25-preprint.pdf
  - https://satcompetition.github.io/2025/
  - https://cp2025.a4cp.org/competitions.html

- ### Provenance
  - sources:: https://www.minizinc.org/challenge/2025/results/, https://cp2025.a4cp.org/competitions.html
