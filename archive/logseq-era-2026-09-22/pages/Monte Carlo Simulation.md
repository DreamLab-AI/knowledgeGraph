public:: true

# Monte Carlo Simulation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:monte-carlo-simulation", "@type":"Page", "title":"Monte Carlo Simulation", "vc:slug":"monte-carlo-simulation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:monte-carlo-simulation",
  "@type":"Class",
  "label":"Monte Carlo Simulation",
  "definition":"Monte Carlo simulation is a computational technique that estimates the behaviour of a system or the value of a quantity by repeatedly sampling random inputs from probability distributions and aggregating the resulting outcomes. By running many random trials it approximates expectations, distributions and tail risks that are difficult to derive analytically. It is widely used for numerical integration, risk analysis and uncertainty quantification.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:simulation","label":"Simulation"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:simulation","label":"Simulation"},
      {"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:random-sampling","label":"Random Sampling"},
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:uncertainty-quantification","label":"Uncertainty Quantification"},
      {"@id":"urn:ngm:class:risk-assessment-methodology","label":"Risk Assessment Methodology"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"},
      {"@id":"urn:ngm:class:central-limit-theorem","label":"Central Limit Theorem"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:random-sampling","label":"Random Sampling"},
      {"@id":"urn:ngm:class:variance-reduction","label":"Variance Reduction"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:sensitivity-analysis","label":"Sensitivity Analysis"},
      {"@id":"urn:ngm:class:financial-modelling","label":"Financial Modelling"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:risk-assessment-methodology","label":"Risk Assessment Methodology"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:simulation","label":"Simulation"},
      {"@id":"urn:ngm:class:sensitivity-analysis","label":"Sensitivity Analysis"},
      {"@id":"urn:ngm:class:bayesian-inference","label":"Bayesian Inference"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Monte Carlo simulation, a form of [[Simulation]] and [[Numerical Methods]], estimates outcomes by drawing many samples via [[Random Sampling]] from a [[Probability Distribution]].
  - Aggregating the trials approximates expectations and tail risks, supporting [[Uncertainty Quantification]].

- ### Overview
  - Rather than solving a model analytically, Monte Carlo methods evaluate it on many random inputs and average the results, with accuracy improving as the number of trials grows.
  - The approach is especially valuable for high-dimensional integrals and complex systems where closed-form solutions are intractable.
  - Convergence is governed by the law of large numbers, while the [[Central Limit Theorem]] characterises the error.

- ### Mechanisms
  - Sampling inputs from specified distributions, propagating them through a model and collecting outputs.
  - Estimating means, quantiles and probabilities from the empirical sample.
  - Variance-reduction techniques such as importance sampling and stratification to improve efficiency.
  - Markov chain variants for sampling complex posterior distributions.

- ### Applications
  - Pricing options and stress-testing portfolios in [[Financial Modelling]].
  - Reliability and [[Risk Assessment Methodology]] for engineered systems.
  - Propagating input uncertainty through models in [[Sensitivity Analysis]].
  - Approximate inference in [[Bayesian Inference]].

- ### Relationships
  - subClassOf:: [[Simulation]]
  - partOf:: [[Numerical Methods]]
  - requires:: [[Random Sampling]]
  - requires:: [[Probability Distribution]]
  - enables:: [[Uncertainty Quantification]]
  - enables:: [[Risk Assessment Methodology]]
  - dependsOn:: [[Central Limit Theorem]]
  - uses:: [[Variance Reduction]]
  - supports:: [[Sensitivity Analysis]]
  - supports:: [[Financial Modelling]]
  - contrastsWith:: [[Numerical Methods]]
  - bridgesTo:: [[Risk Assessment Methodology]]
  - relatedTo:: [[Bayesian Inference]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
