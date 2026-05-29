public:: true

# Gaussian Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gaussian-process",
  "@type": "Page",
  "vc:slug": "gaussian-process",
  "title": "Gaussian Process",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gaussian-process",
  "@type": "Class",
  "label": "Gaussian Process",
  "definition": "A Gaussian Process (GP) is a non-parametric Bayesian model that places a probability distribution over functions, fully specified by a mean function and a covariance (kernel) function, such that any finite collection of function values follows a joint Gaussian distribution. GPs provide principled uncertainty quantification alongside predictions and serve as flexible surrogate models in scientific computing and optimisation.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:gaussian-process-regression", "label": "Gaussian Process Regression"},
      {"@id": "urn:ngm:class:kernel-methods", "label": "Kernel Methods"},
      {"@id": "urn:ngm:class:hamiltonian-monte-carlo", "label": "Hamiltonian Monte Carlo"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:gaussian-distribution", "label": "Gaussian Distribution"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Gaussian Process]] is a collection of random variables, any finite subset of which has a joint Gaussian distribution, defined by a mean function m(x) and a kernel (covariance) function k(x, x') that encodes assumptions about function smoothness and structure; inference proceeds by conditioning the GP prior on observed data to obtain a posterior distribution over functions.

- ### Relationships
  - [[Gaussian Process]] is the generative model underlying [[Gaussian Process Regression]] and leverages [[Kernel Methods]] to encode inductive biases; it is used in [[Bayesian Optimisation]] as a surrogate for expensive black-box functions, naturally paired with [[Hamiltonian Monte Carlo]] for posterior hyperparameter inference, and draws on [[Gaussian Distribution]] for its closed-form predictive equations.

- ### Content
  - Gaussian Processes have roots in geostatistics, where they were known as Kriging, developed by Danie Krige and formalised by Georges Matheron in the 1960s for spatial interpolation of ore grades. The machine learning community adopted GPs through David MacKay's work in the 1990s and the landmark textbook "Gaussian Processes for Machine Learning" by Rasmussen and Williams (2006), which established the standard notation and derivations. The appeal is a fully probabilistic treatment of regression and classification without specifying a parametric function form.
  - A GP model is specified by selecting a mean function (often zero) and a covariance kernel such as the squared-exponential (RBF), Matern, or periodic kernel. Given training data (X, y), the posterior predictive distribution at new inputs X* is obtained analytically by solving a linear system involving the kernel matrix K(X, X). Hyperparameters (lengthscale, noise variance, signal variance) are typically learned by maximising the marginal likelihood, which balances data fit and model complexity automatically — an elegant expression of Occam's razor.
  - GPs matter because they provide calibrated uncertainty estimates: the predictive variance tells a practitioner not just the expected output but how confident the model is. This is critical in safety-sensitive domains such as drug discovery, materials science, and autonomous vehicle path planning. In Bayesian optimisation, the GP posterior guides acquisition functions (Expected Improvement, UCB) to efficiently explore–exploit the objective surface, enabling hyperparameter tuning and experiment design with far fewer evaluations than grid or random search.
  - In 2024–2025, the main research directions are scaling GPs to large datasets through sparse inducing-point approximations (sparse GPs, SVGP), deep kernel learning that uses neural networks as feature extractors fed into a GP final layer, and multi-output/multi-fidelity GPs for scientific simulation surrogates. Libraries such as GPflow, GPyTorch, and BoTorch have made GPU-accelerated GP inference accessible to practitioners. Heteroscedastic and non-stationary GP variants are gaining traction in spatiotemporal modelling for climate and epidemiology.

