public:: true

# Arc Consistency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d8a6b071a9668d992f68479cd6f3c1662fa2105acba4827552f4423d8368762",
  "@type": "Page",
  "vc:slug": "arc-consistency",
  "title": "Arc Consistency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:constraint-propagation",
      "vc:label": "Constraint Propagation"
    },
    {
      "@id": "urn:visionflow:linked:constraint-satisfaction",
      "vc:label": "Constraint Satisfaction"
    },
    {
      "@id": "urn:visionflow:linked:backtracking-search",
      "vc:label": "Backtracking Search"
    },
    {
      "@id": "urn:visionflow:linked:constraint",
      "vc:label": "Constraint"
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
  "@id": "urn:ngm:class:arc-consistency",
  "@type": "Class",
  "label": "Arc Consistency",
  "definition": "A local consistency property of binary constraint networks in which, for every value in one variable's domain, each constraint linking it to another variable admits at least one compatible supporting value in that variable's domain. Enforcing it — classically with the AC-3 algorithm — deletes unsupported values until a fixed point, providing the most widely used level of constraint propagation and the pruning backbone of practical constraint solvers.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:constraint-propagation",
    "label": "Constraint Propagation"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:backtracking-search",
        "label": "Backtracking Search"
      },
      {
        "@id": "urn:ngm:class:constraint",
        "label": "Constraint"
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
  - "A local consistency property of binary constraint networks in which, for every value in one variable's domain, each constraint linking it to another variable admits at least one compatible supporting value in that variable's domain. Enforcing it — classically with the AC-3 algorithm — deletes unsupported values until a fixed point, providing the most widely used level of constraint propagation and the pruning backbone of practical constraint solvers."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ArcConsistency
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Constraint Propagation]]
  - part-of:: [[Constraint Satisfaction]]
  - related-to:: [[Backtracking Search]]

- ### Content

  ## Definition

  **Arc consistency** is the best-known local consistency notion in [[Constraint Satisfaction]]. Viewing a binary constraint network as a graph, each directed edge (arc) from variable X to variable Y under constraint C(X,Y) is *consistent* when every value x in X's domain has at least one *support* — a value y in Y's domain such that (x, y) satisfies the constraint. A network is arc consistent when every arc is consistent in both directions. Values without support cannot appear in any solution, so they can be deleted outright.

  Enforcing arc consistency is the canonical form of [[Constraint Propagation]]: deleting a value from one domain may strip the last support from values elsewhere, so arcs are revisited until nothing changes. Mackworth's AC-3 (1977) maintains a queue of arcs to recheck and runs in O(ed³) time for e constraints and maximum domain size d; refinements such as AC-4, AC-6 and AC-2001/3.1 record supports explicitly to reach the optimal O(ed²). If any domain empties during enforcement, the problem (or the current search branch) is provably unsatisfiable.

  Arc consistency alone rarely solves a problem — it is a filtering step, not a decision procedure — but combined with [[Backtracking Search]] it is transformative. The MAC (maintaining arc consistency) strategy re-establishes arc consistency after every tentative assignment, and is the default architecture of modern constraint solvers. On some tractable classes, such as tree-structured networks, arc consistency followed by a backtrack-free sweep suffices to find a solution.

  ## Technical Details

  - **Formal statement**: arc (X, Y) is consistent iff ∀x ∈ D(X) ∃y ∈ D(Y) with (x, y) ∈ C(X,Y); the network property requires this for every constraint in both directions.
  - **AC-3 sketch**: initialise a work-list with all arcs; pop an arc, revise D(X) by deleting unsupported values; if D(X) changed, push every arc (Z, X) for neighbours Z ≠ Y; stop at fixed point or on domain wipe-out.
  - **Generalisations**: generalised arc consistency (GAC, also called domain consistency) extends the same support requirement to n-ary constraints, and is what dedicated global-constraint propagators such as `allDifferent` filtering enforce.
  - **Strength hierarchy**: node consistency < arc consistency < path consistency < k-consistency; stronger levels prune more but cost more, and arc consistency is the empirical sweet spot for general-purpose solving.
  - **Classic illustration**: in the Waltz line-labelling and map-colouring examples familiar from Russell and Norvig, arc consistency alone eliminates most of the search space, which is why AC-3 is the standard textbook entry point to constraint reasoning.

  ## Current Landscape

  - **CP-SAT's continued dominance**: Google OR-Tools CP-SAT — a hybrid CP/ILP/MaxSAT engine built on a CDCL SAT core — swept every gold medal at the 15th MiniZinc Challenge 2025 (held at the CP 2025 conference), taking the Fixed, Free, Parallel and Local Search categories, extending an unbroken run of golds since 2017.
  - **Lazy clause generation as the frontier**: modern solvers pair arc-consistency-style propagators with SAT clause learning (LCG). The 2025 CP conference work on Huub (a modular LCG solver) showed SAT-based search competitive with or beating Chuffed and matching CP-SAT on several MiniZinc Challenge benchmarks, confirming that propagation plus nogood learning is the dominant architecture.
  - **Global-constraint propagation**: generalised arc consistency (domain consistency) for global constraints such as `allDifferent` remains the practical workhorse, with dedicated filtering algorithms rather than binary decomposition; the 2025 solver field (Choco-solver, PicatSAT, Pumpkin, iZplus, SICStus) all ship optimised GAC propagators.
  - **Next competition**: the MiniZinc Challenge 2026 solver-submission deadline is set for 19 June 2026, keeping arc-consistency-based propagation under active benchmarking pressure.

  **Sources**:
  - https://www.minizinc.org/challenge/2025/results/
  - https://www.minizinc.org/challenge/
  - https://alexeyignatiev.github.io/assets/pdf/disz-cp25-preprint.pdf
  - https://cp2025.a4cp.org/competitions.html
