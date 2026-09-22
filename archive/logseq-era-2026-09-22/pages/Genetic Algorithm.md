public:: true

# Genetic Algorithm
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:genetic-algorithm", "@type":"Page", "title":"Genetic Algorithm", "vc:slug":"genetic-algorithm", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:genetic-algorithm",
  "@type":"Class",
  "label":"Genetic Algorithm",
  "definition":"A genetic algorithm is a population-based metaheuristic for optimisation and search inspired by Darwinian natural selection, in which candidate solutions are encoded as chromosomes and evolved across generations through selection, crossover, and mutation. A fitness function ranks individuals so that fitter solutions are preferentially recombined, gradually steering the population towards high-quality regions of the search space without requiring gradient information. Genetic algorithms are well suited to combinatorial, non-convex, and black-box problems where the objective is rugged, discontinuous, or expensive to differentiate.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:evolutionary-algorithm","label":"Evolutionary Algorithm"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:crossover","label":"Crossover"},
      {"@id":"urn:ngm:class:mutation","label":"Mutation"},
      {"@id":"urn:ngm:class:selection","label":"Selection"},
      {"@id":"urn:ngm:class:fitness-function","label":"Fitness Function"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:evolutionary-algorithm","label":"Evolutionary Algorithm"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:search-algorithm","label":"Search Algorithm"},
      {"@id":"urn:ngm:class:optimisation-algorithm","label":"Optimisation Algorithm"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:population","label":"Population"},
      {"@id":"urn:ngm:class:fitness-function","label":"Fitness Function"},
      {"@id":"urn:ngm:class:sampling","label":"Sampling"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:hyperparameter-optimisation","label":"Hyperparameter Optimisation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:swarm-intelligence","label":"Swarm Intelligence"},
      {"@id":"urn:ngm:class:simulated-annealing","label":"Simulated Annealing"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:simulated-annealing","label":"Simulated Annealing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Genetic Algorithm]] is a population-based [[Evolutionary Algorithm]] for optimisation and search inspired by natural selection.
	- Candidate solutions are encoded as chromosomes and evolved through [[Selection]], [[Crossover]], and [[Mutation]].
	- A [[Fitness Function]] ranks individuals so fitter solutions propagate, without needing gradient information.
- ### Overview
	- Genetic algorithms maintain a population of encoded candidate solutions and iterate a generational loop: evaluate fitness, select parents, recombine them via crossover, perturb offspring via mutation, and form the next generation.
	- Because they treat the objective as a black box, they apply to problems where gradients are unavailable, the landscape is rugged or discontinuous, or the search space is combinatorial. The diversity maintained by the population helps avoid premature convergence to local optima.
	- Design choices, encoding scheme, selection pressure, crossover and mutation operators and rates, elitism, and population size, govern the balance between exploration and exploitation.
- ### Mechanisms
	- Selection: tournament, roulette-wheel, or rank-based choice of parents weighted by fitness.
	- Crossover: recombination of parental chromosomes to form offspring.
	- Mutation: random perturbation that injects diversity and enables escape from local optima.
	- Elitism: preservation of the best individuals across generations.
- ### Applications
	- Combinatorial optimisation such as scheduling, routing, and packing.
	- Neural architecture search and [[Hyperparameter Optimisation]].
	- Engineering design and parameter tuning for simulations.
	- Feature selection and symbolic regression.
- ### Relationships
	- hasPart:: [[Crossover]]
	- hasPart:: [[Mutation]]
	- hasPart:: [[Selection]]
	- hasPart:: [[Fitness Function]]
	- partOf:: [[Evolutionary Algorithm]]
	- implements:: [[Search Algorithm]]
	- implements:: [[Optimisation Algorithm]]
	- uses:: [[Population]]
	- uses:: [[Fitness Function]]
	- uses:: [[Sampling]]
	- enables:: [[Hyperparameter Optimisation]]
	- relatedTo:: [[Swarm Intelligence]]
	- relatedTo:: [[Simulated Annealing]]
	- contrastsWith:: [[Gradient Descent]]
	- contrastsWith:: [[Simulated Annealing]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
