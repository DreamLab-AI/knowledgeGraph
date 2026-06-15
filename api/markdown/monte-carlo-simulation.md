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