public:: true

# Optimisation Algorithm
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:optimisation-algorithm", "@type":"Page", "title":"Optimisation Algorithm", "vc:slug":"optimisation-algorithm", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:optimisation-algorithm",
  "@type":"Class",
  "label":"Optimisation Algorithm",
  "definition":"An optimisation algorithm is a systematic procedure for finding the values of decision variables that minimise or maximise an objective function, optionally subject to constraints. It spans first-order gradient methods, second-order Newton-type methods, derivative-free and metaheuristic search, and convex programming solvers, each trading convergence speed, robustness, and assumptions about the objective. In machine learning, optimisation algorithms drive model training by iteratively reducing a loss function, making them the engine that turns data and architecture into fitted parameters.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:mathematical-optimisation","label":"Mathematical Optimisation"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:stochastic-gradient-descent","label":"Stochastic Gradient Descent"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:mathematical-optimisation","label":"Mathematical Optimisation"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:loss-function","label":"Loss Function"},
      {"@id":"urn:ngm:class:objective-function","label":"Objective Function"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:model-training","label":"Model Training"},
      {"@id":"urn:ngm:class:hyperparameter-optimisation","label":"Hyperparameter Optimisation"},
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:convex-optimisation","label":"Convex Optimisation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:statistics","label":"Statistics"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:simulated-annealing","label":"Simulated Annealing"},
      {"@id":"urn:ngm:class:genetic-algorithm","label":"Genetic Algorithm"},
      {"@id":"urn:ngm:class:hyperparameter-tuning","label":"Hyperparameter Tuning"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An [[Optimisation Algorithm]] is a systematic procedure for finding decision-variable values that minimise or maximise an [[Objective Function]], possibly under constraints.
	- It is a concrete instance of [[Mathematical Optimisation]], spanning gradient, Newton-type, and derivative-free methods.
	- In machine learning it drives [[Model Training]] by iteratively reducing a [[Loss Function]].
- ### Overview
	- Optimisation algorithms turn an objective and a feasible region into a sequence of candidate points that converge towards an optimum. The right choice depends on the structure of the problem: convexity, smoothness, dimensionality, and whether gradients are available.
	- First-order methods such as [[Gradient Descent]] and its stochastic variant use only the objective and its gradient, scaling to the millions of parameters typical of deep networks. Second-order methods exploit curvature for faster local convergence at higher per-step cost.
	- When the objective is non-differentiable, noisy, or combinatorial, derivative-free metaheuristics, including [[Genetic Algorithm|genetic algorithms]] and [[Simulated Annealing]], explore the space stochastically.
	- Convex optimisation provides strong guarantees: any local optimum is global, and efficient solvers exist for problems cast in convex form.
- ### Key aspects
	- Convergence rate and computational cost per iteration.
	- Sensitivity to step size, conditioning, and initialisation.
	- Handling of constraints via projection, penalties, or duality.
	- Global versus local optimality guarantees.
- ### Applications
	- Training neural networks and statistical models.
	- [[Hyperparameter Optimisation]] and architecture search.
	- Operations research, logistics, and resource allocation.
	- Engineering design and control.
- ### Relationships
	- hasPart:: [[Gradient Descent]]
	- hasPart:: [[Stochastic Gradient Descent]]
	- partOf:: [[Mathematical Optimisation]]
	- dependsOn:: [[Loss Function]]
	- dependsOn:: [[Objective Function]]
	- requires:: [[Gradient Descent]]
	- requires:: [[Backpropagation]]
	- enables:: [[Model Training]]
	- enables:: [[Hyperparameter Optimisation]]
	- enables:: [[Deep Learning]]
	- implements:: [[Convex Optimisation]]
	- uses:: [[Statistics]]
	- relatedTo:: [[Simulated Annealing]]
	- relatedTo:: [[Genetic Algorithm]]
	- relatedTo:: [[Hyperparameter Tuning]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
