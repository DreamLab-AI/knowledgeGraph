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