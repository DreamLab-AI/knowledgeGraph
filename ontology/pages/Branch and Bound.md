public:: true

# Branch and Bound
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8304581e2d82259b0dabfcc1db0228de6e5a124227a616826832a41291a58b29",
  "@type": "Page",
  "vc:slug": "branch-and-bound",
  "title": "Branch and Bound",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:search-algorithm",
      "vc:label": "Search Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:combinatorial-optimisation",
      "vc:label": "Combinatorial Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:constraint-solver",
      "vc:label": "Constraint Solver"
    },
    {
      "@id": "urn:visionflow:linked:constraint-satisfaction",
      "vc:label": "Constraint Satisfaction"
    },
    {
      "@id": "urn:visionflow:linked:dynamic-programming",
      "vc:label": "Dynamic Programming"
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
  "@id": "urn:ngm:class:branch-and-bound",
  "@type": "Class",
  "label": "Branch and Bound",
  "definition": "An exact algorithmic paradigm for combinatorial optimisation that systematically explores a tree of candidate solution subsets, using bounds from relaxations of the problem to prune any branch that provably cannot contain a solution better than the best one found so far. Introduced by Land and Doig in 1960 for integer programming, branch and bound guarantees optimality while often avoiding exhaustive enumeration, and remains the backbone of modern mixed-integer programming and constraint solvers.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:search-algorithm",
    "label": "Search Algorithm"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
      },
      {
        "@id": "urn:ngm:class:constraint-solver",
        "label": "Constraint Solver"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:dynamic-programming",
        "label": "Dynamic Programming"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
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
  - "An exact algorithmic paradigm for combinatorial optimisation that systematically explores a tree of candidate solution subsets, using bounds from relaxations of the problem to prune any branch that provably cannot contain a solution better than the best one found so far. Introduced by Land and Doig in 1960 for integer programming, branch and bound guarantees optimality while often avoiding exhaustive enumeration, and remains the backbone of modern mixed-integer programming and constraint solvers."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BranchAndBound
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Search Algorithm]]
  - part-of:: [[Combinatorial Optimisation]], [[Constraint Solver]]
  - contrasts-with:: [[Dynamic Programming]]

- ### Content

  ## Definition

  **Branch and bound** organises the search for an optimal discrete solution as a tree. *Branching* partitions the current set of candidate solutions into smaller subsets — for instance, fixing an integer variable to lie below or above a fractional value. *Bounding* computes, for each subset, an optimistic bound on the best objective value it could contain, typically by solving a cheap relaxation (linear programming relaxation, Lagrangian relaxation, or a problem-specific bound). Any node whose bound is no better than the *incumbent* — the best complete solution found so far — is pruned, along with the entire subtree beneath it.

  The method is exact: when the tree is exhausted, the incumbent is provably optimal, and at any point the gap between incumbent and best outstanding bound certifies how far from optimal the current answer can be. Its practical performance therefore hinges on bound tightness, branching variable selection, and node exploration order (best-first, depth-first, or hybrids), which is where decades of solver engineering — and, recently, learned branching policies — concentrate.

  In this graph, branch and bound is a core component of [[Combinatorial Optimisation]] and of practical [[Constraint Solver]] engines, where it generalises backtracking search over [[Constraint Satisfaction]] problems to optimisation by treating the objective as a progressively tightening constraint. It contrasts with [[Dynamic Programming]], which exploits overlapping subproblem structure rather than pruning by bounds, and the two are frequently combined.

  ## Technical Details

  - **Canonical applications**: mixed-integer linear programming (MILP), travelling salesman (Held-Karp bounds), knapsack, job-shop scheduling, and MAP inference in graphical models.
  - **Branch and cut / branch and price**: modern MILP solvers (CPLEX, Gurobi, SCIP, CBC) interleave cutting planes and column generation with the branch-and-bound tree; presolve, heuristics for early incumbents, and conflict learning further shrink the tree.
  - **Search strategies**: best-first order minimises nodes expanded but is memory-hungry; depth-first finds incumbents quickly with O(depth) memory; solvers typically dive for incumbents then switch strategy.
  - **Complexity**: worst case remains exponential — the paradigm does not evade NP-hardness — but strong bounds routinely reduce practical instances from astronomically many candidates to thousands of explored nodes.
  - **Parallelism**: subtrees are naturally independent, enabling parallel and distributed tree search, though load balancing and sharing of incumbents/pseudo-costs are non-trivial.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
