public:: true

# Normalising Flows
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:normalising-flows",
  "@type": "Page",
  "vc:slug": "normalising-flows",
  "title": "Normalising Flows",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:normalising-flows",
  "@type": "Class",
  "label": "Normalising Flows",
  "definition": "Normalising flows are a class of generative models that learn complex probability distributions by composing a series of invertible, differentiable transformations that map a simple base distribution (typically Gaussian) to the target distribution, with exact log-likelihood computation via the change-of-variables formula and the Jacobian determinant. Both sampling and density evaluation are tractable.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:gaussian-process", "label": "Gaussian Process"},
      {"@id": "urn:ngm:class:variational-autoencoder", "label": "Variational Autoencoder"},
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"},
      {"@id": "urn:ngm:class:neural-ordinary-differential-equation", "label": "Neural Ordinary Differential Equation"},
      {"@id": "urn:ngm:class:flow-matching", "label": "Flow Matching"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:gaussian-distribution", "label": "Gaussian Distribution"},
      {"@id": "urn:ngm:class:change-of-variables", "label": "Change of Variables"},
      {"@id": "urn:ngm:class:jacobian-determinant", "label": "Jacobian Determinant"},
      {"@id": "urn:ngm:class:maximum-likelihood-estimation", "label": "Maximum Likelihood Estimation"},
      {"@id": "urn:ngm:class:autoregressive-model", "label": "Autoregressive Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:density-estimation", "label": "Density Estimation"},
      {"@id": "urn:ngm:class:generative-modelling", "label": "Generative Modelling"},
      {"@id": "urn:ngm:class:latent-variable-model", "label": "Latent Variable Model"},
      {"@id": "urn:ngm:class:posterior-approximation", "label": "Posterior Approximation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:invertible-neural-network", "label": "Invertible Neural Network"},
      {"@id": "urn:ngm:class:differentiable-programming", "label": "Differentiable Programming"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:probabilistic-generative-model", "label": "Probabilistic Generative Model"},
      {"@id": "urn:ngm:class:variational-inference", "label": "Variational Inference"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:markov-chain-monte-carlo", "label": "Markov Chain Monte Carlo"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:scientific-machine-learning", "label": "Scientific Machine Learning"},
      {"@id": "urn:ngm:class:probabilistic-programming", "label": "Probabilistic Programming"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:normalizing-flows", "label": "Normalizing Flows"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Normalising Flows]] are generative models that represent a data distribution as the push-forward of a simple [[Gaussian Distribution]] base measure through a composition of learned invertible transformations, enabling exact likelihood computation, efficient sampling, and latent-space inference all within a single unified framework.

- ### Relationships
  - Normalising flows complement [[Diffusion Model]] and variational approaches ([[Variational Autoencoder]]) as the third major paradigm of deep generative modelling; they use [[Gaussian Distribution]] as their base measure, support [[Bayesian Inference]] through tractable posteriors, and can be used as learned variational families or mass-matrix preconditioners for [[Gaussian Process]] posteriors.

- ### Content
  - The theoretical foundations of normalising flows rest on the change-of-variables formula from probability theory, recognised in statistics for decades but operationalised for deep learning by Rezende and Mohamed (2015) and Dinh et al.'s NICE (2014) and RealNVP (2016) architectures. Early flows used simple coupling layers that partitioned the input and applied element-wise affine transforms, keeping the Jacobian triangular and thus its determinant O(d). This work established the key design constraint: the transformations must be invertible and their Jacobians must be efficiently computable.
  - Modern flow architectures include autoregressive flows (MAF, IAF) where each output dimension conditions on all previous ones — yielding expressive density estimators but slower sampling or evaluation in one direction; continuous normalising flows (CNF/FFJORD) that parameterise the transformation as an ODE and compute the log-determinant via Hutchinson's trace estimator; and Glow, which extends RealNVP with invertible 1x1 convolutions for image generation. The key property distinguishing flows from VAEs and GANs is exact, tractable likelihood: the loss function is the average negative log-likelihood under the flow, computed without approximation.
  - Normalising flows matter for applications requiring reliable density estimates, not just samples. In scientific computing they serve as fast emulators for Bayesian posteriors, replacing expensive MCMC; in particle physics they accelerate simulation of detector responses; in finance they model joint return distributions with correct tail behaviour. For generative tasks, flows pioneered high-fidelity speech synthesis (WaveGlow) and musical audio (Glow-TTS), and they remain competitive in small-to-medium data regimes where the exact likelihood is more useful than raw sample quality.
  - In 2024–2025, normalising flows have been partially eclipsed in image generation by diffusion models but have found a robust niche in scientific machine learning and probabilistic programming. Neural spline flows, using piecewise-rational-quadratic transformations, have become a standard reference architecture. Flow matching (Lipman et al., 2022) and consistency models have emerged as efficient bridges between flows and diffusion, training continuous flows without ODE simulation during training. Integration with JAX (Distrax, Flowjax) enables JIT-compiled, GPU-vectorised inference over thousands of posterior samples simultaneously.

