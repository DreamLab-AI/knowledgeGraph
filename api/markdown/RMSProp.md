public:: true

# RMSProp
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fdc56f5402d831948931ac49024ed829092e49bbbc04e537a7c112f8ffae0088",
  "@type": "Page",
  "vc:slug": "rmsprop",
  "title": "RMSProp",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:optimisation-algorithm",
      "vc:label": "Optimisation Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:adaptive-learning-rate",
      "vc:label": "Adaptive Learning Rate"
    },
    {
      "@id": "urn:visionflow:linked:adam-optimiser",
      "vc:label": "Adam Optimiser"
    },
    {
      "@id": "urn:visionflow:linked:stochastic-gradient-descent",
      "vc:label": "Stochastic Gradient Descent"
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
  "@id": "urn:ngm:class:rmsprop",
  "@type": "Class",
  "label": "RMSProp",
  "definition": "A stochastic gradient descent variant, proposed by Geoffrey Hinton in his 2012 Coursera lectures, that divides each parameter's update by the root of an exponentially weighted moving average of its squared gradients, giving every parameter its own adaptive step size; it cured AdaGrad's vanishing learning rate, made recurrent networks practical to train, and supplied the second-moment machinery later absorbed into Adam.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:optimisation-algorithm",
    "label": "Optimisation Algorithm"
  },
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:adaptive-learning-rate",
        "label": "Adaptive Learning Rate"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:adam-optimiser",
        "label": "Adam Optimiser"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:momentum",
        "label": "Momentum"
      },
      {
        "@id": "urn:ngm:class:learning-rate",
        "label": "Learning Rate"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
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
  - "A stochastic gradient descent variant, proposed by Geoffrey Hinton in his 2012 Coursera lectures, that divides each parameter's update by the root of an exponentially weighted moving average of its squared gradients, giving every parameter its own adaptive step size; it cured AdaGrad's vanishing learning rate, made recurrent networks practical to train, and supplied the second-moment machinery later absorbed into Adam."

- ### Semantic Classification
  - owl-class:: machine-learning:RMSProp
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Optimisation Algorithm]]
  - implements:: [[Adaptive Learning Rate]]
  - contrasts-with:: [[Adam Optimiser]]
  - uses:: [[Stochastic Gradient Descent]]

- ### Content

  ## Definition

  **RMSProp** (Root Mean Square Propagation) is an [[Adaptive Learning Rate]] optimiser introduced by Geoffrey Hinton in Lecture 6e of his 2012 Coursera course "Neural Networks for Machine Learning" — famously never published as a paper, yet cited thousands of times via the lecture slides. It addresses a specific defect of AdaGrad: because AdaGrad divides by the accumulated sum of all past squared gradients, its effective step size shrinks monotonically and training stalls on long non-convex optimisation runs. RMSProp replaces the growing sum with an exponentially weighted moving average, so the denominator tracks the *recent* gradient magnitude and the effective learning rate can rise again when the loss surface flattens.

  Concretely, for each parameter it maintains vₜ = γ·vₜ₋₁ + (1−γ)·gₜ² (typically γ = 0.9) and applies the update θₜ₊₁ = θₜ − η·gₜ/√(vₜ + ε). Dividing by the running RMS of the gradient normalises the update magnitude per parameter: steep, high-curvature directions are damped while shallow directions keep making progress. This per-dimension conditioning was decisive for training recurrent neural networks, whose loss landscapes mix cliffs with plateaus, and RMSProp became the workhorse of early deep reinforcement learning — DeepMind's original DQN Atari agent (2013–2015) was trained with it.

  RMSProp's second-moment estimate is one of the two ingredients of the [[Adam Optimiser]], which adds a first-moment ([[Momentum]]-style) average and bias correction. In practice Adam has displaced RMSProp as the general-purpose default, but RMSProp survives in reinforcement learning codebases, in Keras/TensorFlow legacy configurations, and as the conceptually cleanest illustration of second-moment gradient scaling.

  ## Technical Details

  **Update rule** (per parameter, gradient gₜ):
  - vₜ = γ·vₜ₋₁ + (1 − γ)·gₜ²
  - θₜ₊₁ = θₜ − (η / √(vₜ + ε)) · gₜ

  **Standard hyperparameters**: decay γ = 0.9; learning rate η = 10⁻³ (Hinton's suggested default); ε = 10⁻⁸–10⁻⁶ for numerical stability. Framework implementations (PyTorch `torch.optim.RMSprop`, Keras `RMSprop`) add optional momentum and a centred variant that subtracts the squared mean gradient to approximate the gradient variance.

  **Comparison with neighbours**:
  - vs **AdaGrad**: moving average instead of cumulative sum — no vanishing step size on non-convex problems.
  - vs **[[Adam Optimiser]]**: Adam ≈ RMSProp + momentum + bias correction; Adam's bias correction matters early in training, and its momentum term usually speeds convergence, which is why Adam superseded it as the default.
  - vs plain **[[Stochastic Gradient Descent]]**: RMSProp needs far less learning-rate tuning across layers, at the cost of per-parameter state memory and, on some vision benchmarks, slightly worse final generalisation than well-tuned SGD with momentum.

  ## Current Landscape

  Although RMSProp dates to Hinton's 2012 lectures and was never formally published, its theoretical footing has firmed up considerably in recent years, closing a long-standing gap between practice and proof.

  - **Convergence guarantees (2019–2025)**: RMSProp's convergence for smooth *non-convex* objectives is now established. Results include an O(log T / √T)-style rate for stochastic RMSProp (De et al.), and a 2022 analysis (published PMC 2024) proving convergence at rate O(log T / T) using time-varying decay βₜ = (1 − 1/t)ᵖ without extra assumptions.
  - **Sharper rates (2025)**: a JMLR 2025 paper establishes an O(√d / T^{1/4}) rate (measured in ℓ₁ norm) for classical RMSProp and its momentum extension *without* the bounded-gradient assumption, matching state-of-the-art AdaGrad-style analyses.
  - **Practical status**: Adam (≈ RMSProp + first-moment momentum + bias correction) remains the general-purpose default; RMSProp persists in reinforcement-learning codebases and legacy Keras/TensorFlow configurations, and as the cleanest pedagogical instance of second-moment gradient scaling.
  - **Framework parity**: current PyTorch (`torch.optim.RMSprop`) and Keras implementations retain the optional momentum and centred variants, so the algorithm remains a first-class, maintained optimiser rather than a deprecated one.

  **Sources**:
  - https://www.jmlr.org/papers/volume26/24-0523/24-0523.pdf
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11655782/
  - https://openreview.net/pdf/aea0ecd7eed57e6ae8bb1de2bb022c25a9edbf2d.pdf
