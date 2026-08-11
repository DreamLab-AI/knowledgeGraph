public:: true

# Simulated Annealing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e4672b148839cbc277de5b799c3b4c115eddd35dc07ceba9b2ffe4ac6611648a",
  "@type": "Page",
  "vc:slug": "simulated-annealing",
  "title": "Simulated Annealing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:heuristic-methods",
      "vc:label": "Heuristic Methods"
    },
    {
      "@id": "urn:visionflow:linked:local-search",
      "vc:label": "Local Search"
    },
    {
      "@id": "urn:visionflow:linked:combinatorial-optimisation",
      "vc:label": "Combinatorial Optimisation"
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
  "@id": "urn:ngm:class:simulated-annealing",
  "@type": "Class",
  "label": "Simulated Annealing",
  "definition": "A stochastic metaheuristic for global optimisation, inspired by the annealing of metals, that explores a solution space via local moves while accepting worsening solutions with a probability governed by a gradually decreasing temperature parameter, allowing early escape from local optima and increasingly greedy refinement as the temperature cools; widely applied to combinatorial problems such as travelling salesman routing, chip placement, scheduling and logistics.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:heuristic-methods",
    "label": "Heuristic Methods"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:local-search",
        "label": "Local Search"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
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
  - "A stochastic metaheuristic for global optimisation, inspired by the annealing of metals, that explores a solution space via local moves while accepting worsening solutions with a probability governed by a gradually decreasing temperature parameter, allowing early escape from local optima and increasingly greedy refinement as the temperature cools; widely applied to combinatorial problems such as travelling salesman routing, chip placement, scheduling and logistics."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SimulatedAnnealing
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Heuristic Methods]]
  - uses:: [[Local Search]]
  - related-to:: [[Combinatorial Optimisation]]

- ### Content

  ## Definition

  **Simulated annealing** (SA) is a probabilistic optimisation technique introduced by Kirkpatrick, Gelatt and Vecchi in 1983, drawing on the Metropolis-Hastings algorithm from statistical mechanics. The metaphor comes from metallurgy: a metal cooled slowly settles into a low-energy crystalline state, whereas rapid quenching freezes in defects. SA treats an objective function as an energy landscape and a candidate solution as the system state. At each step a neighbouring solution is proposed via a [[Local Search]] move; improvements are always accepted, while a worsening move of magnitude ΔE is accepted with probability exp(−ΔE/T), where T is the current temperature.

  The temperature starts high — making the walk nearly random and able to cross barriers between basins of attraction — and is lowered according to a cooling schedule (geometric decay T ← αT with α ≈ 0.9–0.99 is the common practical choice). As T → 0 the acceptance rule becomes strictly greedy and the search converges into a local, and with sufficiently slow cooling provably global, optimum. This controlled tolerance of uphill moves is what distinguishes SA from plain hill climbing, which stalls in the first local optimum it reaches, and it requires no gradient information, making SA applicable to discrete, non-differentiable and black-box objectives.

  Within this graph SA sits among the heuristic methods for [[Combinatorial Optimisation]], alongside population-based approaches such as genetic algorithms: where a genetic algorithm maintains and recombines a population of solutions, SA follows a single trajectory whose randomness is annealed away over time.

  ## Technical Details

  A practical SA implementation specifies four components: a solution representation, a neighbourhood move operator (for the travelling salesman problem, typically 2-opt edge swaps), a cooling schedule with an initial temperature calibrated so that 60–90% of early moves are accepted, and a termination criterion (final temperature, iteration budget or acceptance stagnation). Theoretical results by Geman and Geman show convergence to the global optimum under logarithmic cooling, but such schedules are impractically slow; engineering practice trades guarantees for speed, often adding restarts or reheating when the search stagnates. SA remains a strong baseline in VLSI placement and routing, timetabling, protein-structure search and logistics, and is the classical reference point for quantum annealing hardware, which exploits quantum tunnelling rather than thermal fluctuation to traverse the same kinds of energy landscapes.

  ## Current Landscape

  - **Still the benchmark to beat**: 2024-2025 quantum and physics-inspired optimisation studies continue to use classical simulated annealing (e.g. the `dwave-neal` implementation) as the reference baseline against D-Wave quantum annealers on Max-Cut and QUBO/Ising problems.
  - **Hardware annealers vs classical SA**: a 2025 benchmark of Fujitsu's Digital Annealer across 2,125 Max-Cut instances (up to ~53,000 variables) found dedicated annealing hardware competitive with, but not decisively beating, the best classical heuristics.
  - **Physics-inspired successors**: a 2024 Nature *Communications Physics* study reported ballistic simulated bifurcation achieving nearly a 50-fold reduction in time-to-solution versus a D-Wave Advantage system on chimera-graph Max-Cut, positioning such "quantum-inspired" solvers as the natural baseline.
  - **Mixed quantum-annealing evidence**: on 127-qubit Ising instances (2024), D-Wave quantum annealing outperformed short-depth QAOA on gate-model hardware, yet classical SA still sampled optimal solutions across all tested quadratic problems — reinforcing SA's enduring role as a robust general-purpose optimiser.

  **Sources**:
  - https://arxiv.org/html/2507.22117v1
  - https://www.nature.com/articles/s42005-024-01705-7
  - https://www.nature.com/articles/s41534-024-00825-w
