public:: true

# Constraint Propagation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:067f5ef59b9df0655f212fd6aa5ccc53bc948d297465a459d2c0266176c1546c",
  "@type": "Page",
  "vc:slug": "constraint-propagation",
  "title": "Constraint Propagation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:constraint-satisfaction",
      "vc:label": "Constraint Satisfaction"
    },
    {
      "@id": "urn:visionflow:linked:constraint-solver",
      "vc:label": "Constraint Solver"
    },
    {
      "@id": "urn:visionflow:linked:arc-consistency",
      "vc:label": "Arc Consistency"
    },
    {
      "@id": "urn:visionflow:linked:backtracking-search",
      "vc:label": "Backtracking Search"
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
  "@id": "urn:ngm:class:constraint-propagation",
  "@type": "Class",
  "label": "Constraint Propagation",
  "definition": "An inference technique in constraint satisfaction that repeatedly applies local consistency rules to shrink the domains of variables, eliminating values that cannot participate in any solution before or during search. By propagating the logical consequences of each constraint through the constraint network, it prunes the search space dramatically, often exposes infeasibility early without any backtracking, and turns otherwise intractable combinatorial problems into practically solvable ones.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:constraint-satisfaction",
    "label": "Constraint Satisfaction"
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
        "@id": "urn:ngm:class:arc-consistency",
        "label": "Arc Consistency"
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
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "An inference technique in constraint satisfaction that repeatedly applies local consistency rules to shrink the domains of variables, eliminating values that cannot participate in any solution before or during search. By propagating the logical consequences of each constraint through the constraint network, it prunes the search space dramatically, often exposes infeasibility early without any backtracking, and turns otherwise intractable combinatorial problems into practically solvable ones."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ConstraintPropagation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Constraint Satisfaction]]
  - part-of:: [[Constraint Solver]]
  - uses:: [[Arc Consistency]]
  - related-to:: [[Backtracking Search]]

- ### Content

  ## Definition

  **Constraint propagation** is the workhorse inference mechanism of constraint programming. Given a constraint satisfaction problem — variables, finite domains, and constraints restricting which value combinations are permitted — propagation enforces a chosen level of *local consistency* by removing domain values that some constraint proves impossible. Each removal can trigger further removals in neighbouring variables, so the effect cascades through the constraint network until a fixed point is reached where no rule can delete anything more.

  The technique sits between pure deduction and search. It is sound (it never removes a value that appears in a solution) but usually incomplete: reaching the fixed point rarely solves the problem outright, so solvers interleave propagation with [[Backtracking Search]], propagating again after every tentative assignment. This propagate-and-branch loop is what makes modern constraint solvers effective on scheduling, configuration, timetabling and design problems where naive enumeration would be hopeless.

  Different consistency levels trade pruning power against cost. Node consistency checks unary constraints; [[Arc Consistency]] (the most widely used level) checks binary constraints between pairs of variables; path consistency and stronger k-consistency variants examine larger variable subsets. Global constraints such as `allDifferent` come with dedicated propagators — for example Régin's matching-based filtering — that achieve far more pruning than decomposing them into binary constraints ever could.

  ## Technical Details

  - **Fixed-point computation**: propagators are applied until quiescence; the result is unique regardless of application order (confluence), which lets solvers schedule propagators by cost, running cheap ones first.
  - **AC-3 and successors**: the classic AC-3 algorithm enforces arc consistency in O(ed³) time for e constraints and domain size d; AC-4, AC-6 and AC-2001 improve the bound to O(ed²) with support bookkeeping.
  - **Propagation during search**: maintaining arc consistency (MAC) after each assignment is standard in solvers such as Gecode, Choco, OR-Tools CP-SAT and MiniZinc backends.
  - **Beyond finite domains**: interval propagation applies the same idea to continuous variables in numerical and geometric constraint solving, which underpins parametric CAD and constraint-based design systems.
  - **Failure detection**: when propagation wipes out a variable's domain the current branch is provably infeasible, giving solvers early, cheap backtrack triggers and powerful nogood learning signals.
