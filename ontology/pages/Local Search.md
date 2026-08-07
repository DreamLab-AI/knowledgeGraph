public:: true

# Local Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a7513705b3afa5ca764443adb21704204372d7fe1f49c7949f917ba4469a0450",
  "@type": "Page",
  "vc:slug": "local-search",
  "title": "Local Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:heuristic-methods",
      "vc:label": "Heuristic Methods"
    },
    {
      "@id": "urn:visionflow:linked:combinatorial-optimisation",
      "vc:label": "Combinatorial Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:constraint-satisfaction",
      "vc:label": "Constraint Satisfaction"
    },
    {
      "@id": "urn:visionflow:linked:simulated-annealing",
      "vc:label": "Simulated Annealing"
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
  "@id": "urn:ngm:class:local-search",
  "@type": "Class",
  "label": "Local Search",
  "definition": "A family of optimisation and constraint-solving methods that iteratively improve a single complete candidate solution by moving to neighbouring solutions under a defined move operator, using strategies such as hill climbing, min-conflicts, tabu lists and randomised restarts to navigate the search landscape; memory-light and anytime by nature, local search scales to problem instances far beyond the reach of systematic tree search, at the cost of completeness guarantees.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:heuristic-methods",
    "label": "Heuristic Methods"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      },
      {
        "@id": "urn:ngm:class:simulated-annealing",
        "label": "Simulated Annealing"
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
  - "A family of optimisation and constraint-solving methods that iteratively improve a single complete candidate solution by moving to neighbouring solutions under a defined move operator, using strategies such as hill climbing, min-conflicts, tabu lists and randomised restarts to navigate the search landscape; memory-light and anytime by nature, local search scales to problem instances far beyond the reach of systematic tree search, at the cost of completeness guarantees."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LocalSearch
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Heuristic Methods]]
  - part-of:: [[Combinatorial Optimisation]]
  - related-to:: [[Constraint Satisfaction]]

- ### Content

  ## Definition

  **Local search** operates on complete assignments rather than partial ones: instead of building a solution variable by variable as backtracking search does, it starts from some full candidate — often random — and repeatedly applies a move operator that perturbs it slightly, keeping moves that improve an evaluation function. The set of solutions reachable in one move defines the neighbourhood, and the induced graph over solutions is the search landscape. The simplest instance, hill climbing, always takes the best improving move and halts at a local optimum; the entire craft of local search lies in escaping or avoiding such optima, plateaux and ridges.

  The classic escape mechanisms give the family its named members. [[Simulated Annealing]] accepts worsening moves with a temperature-controlled probability. Tabu search forbids recently reversed moves for a fixed tenure, forcing the trajectory into new territory. Random-restart hill climbing simply relaunches from fresh starting points, and iterated local search perturbs a local optimum and re-optimises. For [[Constraint Satisfaction]] problems, the min-conflicts heuristic — pick a conflicted variable, assign it the value violating fewest constraints — famously solves the million-queens problem in near-linear time and underpins scheduling systems, while WalkSAT applies the same idea to Boolean satisfiability with an occasional random walk step.

  Because it keeps only one (or a few) states in memory, local search runs in constant space, and it is an anytime algorithm: interrupted at any point, it returns the best solution found so far. The price is incompleteness — it can neither prove optimality nor prove infeasibility, which is why constraint solvers contrast it with systematic search and often hybridise the two (large-neighbourhood search embeds exact solving inside a local-search loop).

  ## Technical Details

  Neighbourhood design dominates performance: 2-opt and Or-opt moves for routing, swap and shift moves for scheduling, and flip moves for satisfiability each balance evaluation cost against landscape smoothness. Incremental (delta) evaluation — recomputing only the change in objective caused by a move — is what makes millions of moves per second feasible. Modern SAT and constraint portfolios interleave local search with clause-learning systematic solvers, and local search also names the analogous idea in continuous optimisation, where gradient descent is its differentiable counterpart. Landscape analysis (autocorrelation, fitness-distance correlation) provides the theoretical vocabulary for predicting when a given neighbourhood will let local search succeed.
