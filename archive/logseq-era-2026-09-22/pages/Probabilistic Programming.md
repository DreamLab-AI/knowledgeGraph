public:: true

# Probabilistic Programming
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:probabilistic-programming", "@type":"Page", "title":"Probabilistic Programming", "vc:slug":"probabilistic-programming", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:probabilistic-programming",
  "@type":"Class",
  "label":"Probabilistic Programming",
  "definition":"Probabilistic programming is a paradigm in which statistical models are expressed as programs that include random variables and conditioning statements, with inference performed automatically by the language runtime. It lets practitioners specify generative models declaratively while delegating the mechanics of Bayesian inference, such as sampling or variational optimisation, to the system. This separation of model specification from inference enables rapid iteration on complex probabilistic models across science and machine learning.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:probabilistic-model","label":"Probabilistic Model"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:bayesian-inference","label":"Bayesian Inference"},
      {"@id":"urn:ngm:class:uncertainty-quantification","label":"Uncertainty Quantification"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:variational-inference","label":"Variational Inference"},
      {"@id":"urn:ngm:class:markov-chain-monte-carlo","label":"Markov Chain Monte Carlo"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:generative-model","label":"Generative Model"},
      {"@id":"urn:ngm:class:statistical-modelling","label":"Statistical Modelling"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:probabilistic-model","label":"Probabilistic Model"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:normalising-flows","label":"Normalising Flows"},
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:inference","label":"Inference"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:bayesian-inference","label":"Bayesian Inference"},
      {"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"},
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Probabilistic programming expresses a [[Probabilistic Model]] as a program with random variables and conditioning, while the runtime carries out [[Bayesian Inference]] automatically. It packages techniques such as [[Markov Chain Monte Carlo]] and [[Variational Inference]] so that modellers focus on the [[Generative Model]] rather than the inference machinery.

- ### Overview
  - The central promise of probabilistic programming is to make Bayesian modelling as accessible as ordinary programming: the user writes down how data could have been generated, and the system infers the posterior distribution over unknown quantities given observations.
  - By decoupling model specification from inference algorithms, these systems let researchers experiment with model structure quickly and obtain calibrated estimates of uncertainty rather than single point predictions.
  - Modern probabilistic programming languages integrate with automatic differentiation and tensor libraries, allowing deep generative models that blend neural networks with explicit probabilistic structure.

- ### Key aspects
  - Random variables and probability distributions are first-class language constructs.
  - Conditioning statements assert observed data, defining the posterior to be inferred.
  - Inference engines such as Hamiltonian Monte Carlo and stochastic variational inference run automatically over the model.
  - Automatic differentiation enables gradient-based inference and scalable optimisation.

- ### Applications
  - Bayesian data analysis and hierarchical modelling in the sciences and econometrics.
  - Uncertainty-aware machine-learning models for risk-sensitive decision making.
  - Generative modelling that combines structured priors with deep neural components.
  - Cognitive and behavioural modelling where interpretable latent structure matters.

- ### Relationships
  - subClassOf:: [[Probabilistic Model]]
  - partOf:: [[Machine Learning]]
  - enables:: [[Bayesian Inference]]
  - enables:: [[Uncertainty Quantification]]
  - implements:: [[Variational Inference]]
  - implements:: [[Markov Chain Monte Carlo]]
  - supports:: [[Generative Model]]
  - supports:: [[Statistical Modelling]]
  - uses:: [[Probabilistic Model]]
  - bridgesTo:: [[Normalising Flows]]
  - bridgesTo:: [[Deep Learning]]
  - dependsOn:: [[Inference]]
  - relatedTo:: [[Bayesian Inference]]
  - relatedTo:: [[Representation Learning]]
  - relatedTo:: [[Gradient Descent]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
