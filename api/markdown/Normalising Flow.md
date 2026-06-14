public:: true

# Normalising Flow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:745ddc90819e39c2f986c40990044d9709fdabce59edd451e0d6c3357ac036cf",
  "@type": "Page",
  "vc:slug": "normalising-flow",
  "title": "Normalising Flow",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probabilistic-model",
      "vc:label": "Probabilistic Model"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Normalising Flow"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:normalising-flow",
  "@type": "Class",
  "label": "Normalising Flow",
  "definition": "A normalising flow is a class of deep generative models that learns a bijective mapping between a simple tractable base distribution (typically a standard multivariate Gaussian) and a complex target data distribution through a composition of invertible, differentiable transformations. Because each transformation is invertible, the change-of-variables formula yields an exact closed-form expression for the data log-likelihood, enabling both efficient sampling and precise density estimation. This exact likelihood property distinguishes normalising flows from latent variable models such as variational autoencoders and implicit models such as generative adversarial networks. Architectures are distinguished by how they design transformations whose Jacobian determinants can be computed efficiently, either through triangular Jacobians (autoregressive flows, coupling layers) or via continuous-time dynamics (neural ODEs).",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:normalizing-flow",
      "label": "Normalizing Flow"
    },
    {
      "@id": "urn:ngm:class:flow-based-generative-model",
      "label": "Flow-Based Generative Model"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:invertible-neural-network",
        "label": "Invertible Neural Network"
      },
      {
        "@id": "urn:ngm:class:change-of-variables",
        "label": "Change of Variables"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:autoregressive-model",
        "label": "Autoregressive Model"
      },
      {
        "@id": "urn:ngm:class:coupling-layer",
        "label": "Coupling Layer"
      },
      {
        "@id": "urn:ngm:class:jacobian-determinant",
        "label": "Jacobian Determinant"
      },
      {
        "@id": "urn:ngm:class:neural-ode",
        "label": "Neural ODE"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:density-estimation",
        "label": "Density Estimation"
      },
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:data-augmentation",
        "label": "Data Augmentation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:latent-variable-model",
        "label": "Latent Variable Model"
      },
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
      },
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      },
      {
        "@id": "urn:ngm:class:computational-fluid-dynamics",
        "label": "Computational Fluid Dynamics"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:normalising-flow:d53fec1a692e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:745ddc90819e39c2f986c40990044d9709fdabce59edd451e0d6c3357ac036cf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probabilistic Model]]",
      "resolved": "urn:visionflow:linked:probabilistic-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A **Normalising Flow** (also spelled Normalizing Flow) is a class of [[Generative Model]] that constructs a bijective, differentiable mapping between a simple [[Probabilistic Model]] (the base distribution, typically a standard Gaussian) and a complex data distribution. By composing a sequence of [[Invertible Neural Network]] transformations and applying the [[Change of Variables]] formula, the model obtains an exact expression for the log-likelihood of observed data, enabling both precise [[Density Estimation]] and efficient sampling. This distinguishes normalising flows from approximate inference approaches such as the [[Variational Autoencoder]] and from implicit models such as the [[Generative Adversarial Network]].

- ### Overview
  - Normalising flows occupy a unique niche in the generative modelling landscape: they are the only major family that offers **exact likelihood computation** without requiring approximations, auxiliary networks, or adversarial training.
  - The core idea rests on a classical mathematical result. If a random variable **z** is drawn from a tractable base density p_z and transformed by a bijection **f**, the density of **x = f(z)** is:
    - p_x(x) = p_z(f⁻¹(x)) · |det J_{f⁻¹}(x)|
    - where J denotes the [[Jacobian Determinant]] of the inverse mapping.
  - Because the log-likelihood is exact and differentiable, the model can be trained directly by [[Maximum Likelihood Estimation]] via stochastic gradient descent, using the same objective as any standard probabilistic model.
  - The practical engineering challenge is designing bijections that are (a) expressive enough to capture complex distributions and (b) efficient to compute in both the forward and inverse directions, including their Jacobian determinants.
  - Why this matters:
    - Exact densities are essential for [[Anomaly Detection]], [[Bayesian Inference]], and scientific simulation tasks where probabilistic fidelity is non-negotiable.
    - The invertibility property means latent codes can be extracted from data without an approximate encoder, making flows natural for [[Representation Learning]] and [[Variational Inference]] as flexible posteriors.
    - Flows compose well with other model families and can serve as expressive priors or posteriors inside more complex probabilistic pipelines.

- ### Key Mechanisms
  - #### Coupling Layers
    - A [[Coupling Layer]] (introduced by NICE and popularised by RealNVP) partitions the input vector into two halves; one half is passed through unchanged while the other is transformed by an elementwise function conditioned on the first half.
    - Because only the second half is transformed, the Jacobian is triangular and its determinant is the product of diagonal entries — computable in O(d) time.
    - The split-and-condition design means any arbitrarily complex neural network can parameterise the scale and shift functions without restricting Jacobian tractability.
    - Architectures: NICE, RealNVP, Glow (which adds 1×1 invertible convolutions to mix channels between coupling layers).
  - #### Autoregressive Flows
    - [[Autoregressive Model]] structure ensures a triangular Jacobian by design: each output dimension x_i is a function only of x_{<i} and a learned parameter, so the Jacobian is lower triangular with diagonal entries that are easy to compute.
    - Masked Autoregressive Flow (MAF) and Inverse Autoregressive Flow (IAF) are dual formulations: MAF supports fast density evaluation but slow sampling; IAF supports fast sampling but slow density evaluation.
    - Parallel WaveNet and WaveGlow use IAF-style flows for real-time audio synthesis.
    - Neural Spline Flows replace affine conditioners with monotone rational-quadratic splines, dramatically increasing expressivity per layer.
  - #### Continuous-Time Flows (Neural ODEs)
    - [[Neural ODE]] based flows (FFJORD — Free-Form Jacobian of Reversible Dynamics) model the transformation as the solution to a neural ODE, allowing arbitrary network architectures.
    - The log-determinant is computed via Hutchinson's trace estimator applied to the divergence of the ODE vector field, which is unbiased and scalable.
    - This eliminates architectural constraints at the cost of higher computational overhead at training time.
  - #### Residual Flows
    - i-ResNets and Residual Flows parameterise each transformation as an invertible residual block, using Lipschitz-constrained networks to guarantee invertibility.
    - Log-determinants are estimated via a power series expansion of log det(I + J), truncated for efficiency.
  - #### Equivariant and Geometric Flows
    - Recent work extends flows to non-Euclidean spaces including spheres, tori, and Riemannian manifolds, enabling density estimation on molecular geometries and directional data.
    - Equivariant flows respect symmetries (e.g. rotation, permutation) in the data, important for molecular property prediction and physics simulation.

- ### Applications and Use Cases
  - #### Density Estimation and Generative Modelling
    - Flows produce state-of-the-art results on tabular data density estimation benchmarks, where exact likelihoods enable rigorous model comparison.
    - Image synthesis: Glow demonstrated high-quality image generation with semantically meaningful latent interpolation, exploiting the exact latent-code extraction property.
  - #### Anomaly Detection
    - Because flows assign an exact likelihood to every input, regions of low probability under the learned model flag anomalous inputs. Applied in network intrusion detection, medical imaging outlier detection, and manufacturing quality control.
    - The [[Anomaly Detection]] use case is a direct consequence of exact [[Density Estimation]] capability.
  - #### Variational Inference
    - Flows replace the fixed Gaussian posterior in [[Variational Autoencoder]] frameworks, enabling arbitrarily flexible approximate posteriors that close the gap between approximate and true inference.
    - Normalising Flows Posterior (NFP) and Importance Weighted Autoencoders both exploit flow posteriors.
  - #### Scientific Simulation
    - Physics-informed flows (e.g. BOLTZMANN GENERATORS) learn Boltzmann equilibrium distributions directly, enabling unbiased sampling of molecular configurations without lengthy MD simulation.
    - Applications span protein folding energy landscapes, quantum many-body systems, and lattice QCD.
    - Connections to [[Scientific Computing]] and [[Computational Fluid Dynamics]] arise from the continuous-time flow interpretation.
  - #### Audio and Speech Synthesis
    - WaveGlow (NVIDIA) uses a flow model to synthesise raw audio waveforms from mel-spectrograms in real time, with quality competitive with autoregressive models but orders of magnitude faster at inference.
    - FloWaveNet and WaveFlow further optimise flow architectures for streaming audio production.
  - #### Reinforcement Learning and Control
    - Flows parameterise complex, multimodal policies in [[Reinforcement Learning]], capturing diverse action distributions that unimodal Gaussians cannot represent.
    - Used in offline RL (Diffuser and flow-based behaviour cloning) and in model-based planning.
  - #### Data Augmentation
    - Exact sampling from the learned distribution provides unlimited synthetic training data for downstream classifiers, a form of [[Data Augmentation]] that preserves statistical fidelity.

- ### Relationships
  - subClassOf:: [[Generative Model]]
  - partOf:: [[Deep Learning]]
  - requires:: [[Probabilistic Model]]
  - requires:: [[Invertible Neural Network]]
  - requires:: [[Change of Variables]]
  - uses:: [[Autoregressive Model]]
  - uses:: [[Coupling Layer]]
  - uses:: [[Jacobian Determinant]]
  - uses:: [[Neural ODE]]
  - enables:: [[Density Estimation]]
  - enables:: [[Variational Inference]]
  - enables:: [[Anomaly Detection]]
  - enables:: [[Data Augmentation]]
  - contrastsWith:: [[Generative Adversarial Network]]
  - contrastsWith:: [[Variational Autoencoder]]
  - contrastsWith:: [[Diffusion Model]]
  - relatedTo:: [[Bayesian Inference]]
  - relatedTo:: [[Latent Variable Model]]
  - relatedTo:: [[Maximum Likelihood Estimation]]
  - relatedTo:: [[Information Theory]]
  - relatedTo:: [[Representation Learning]]
  - bridges-to:: [[Scientific Computing]]
  - bridges-to:: [[Computational Fluid Dynamics]]

- ### Architectures and Landmark Models
  - **NICE** (Non-linear Independent Components Estimation, Dinh et al. 2014) — introduced additive coupling layers; first modern normalising flow.
  - **RealNVP** (Dinh et al. 2016) — affine coupling layers; tractable Jacobian; demonstrated high-quality image generation.
  - **Glow** (Kingma & Dhariwal, 2018) — added learned 1×1 convolutions; clean invertible architecture; used for face attribute manipulation.
  - **MAF / IAF** (Papamakarios et al. 2017; Kingma et al. 2016) — autoregressive flows with fast density / fast sampling trade-off.
  - **Neural Spline Flows** (Durkan et al. 2019) — monotone rational-quadratic splines as conditioners; significantly more expressive than affine layers.
  - **FFJORD** (Grathwohl et al. 2018) — continuous-time ODE-based flow; unrestricted Jacobian structure via trace estimation.
  - **i-ResNet / Residual Flow** (Behrmann et al. 2019; Chen et al. 2019) — Lipschitz-constrained residual blocks as invertible layers.
  - **WaveGlow** (Prenger et al. 2019) — flow-based vocoder; real-time audio synthesis.
  - **Boltzmann Generators** (Noé et al. 2019) — scientific application to molecular sampling.

- ### Theoretical Properties
  - **Universal approximation**: under mild conditions a sufficiently deep normalising flow can approximate any absolutely continuous probability distribution to arbitrary accuracy.
  - **Manifold hypothesis tension**: standard flows assume the data lies in the full ambient space; when data lies on a lower-dimensional manifold, the model assigns zero mass off-manifold, which can cause numerical instabilities. Manifold flows and patch-based approaches address this.
  - **Mode coverage**: flows trained by maximum likelihood must cover all modes of the data distribution (no mode dropping), unlike GANs, but may assign mass to unlikely regions (mode averaging behaviour).
  - **Posterior collapse immunity**: flows as VAE posteriors avoid the posterior collapse pathology common with fixed Gaussian posteriors.

- ### Standards and Context
  - No formal standards body governs normalising flows specifically; they fall under the broader landscape of [[Deep Learning]] and [[Probabilistic Model]] research.
  - Key benchmark datasets: UCI tabular datasets (Power, Gas, Hepmass, Miniboone, BSDS300), MNIST, CIFAR-10, ImageNet for image flows; bespoke molecular datasets for scientific flows.
  - Major frameworks: PyTorch (nflows, FrEIA, Zuko libraries), JAX (Distrax, Flowjax), and TensorFlow Probability all provide modular flow primitives.
  - Closely connected to the [[Information Theory]] concept of information gain and the connection between normalising flows and [[Optimal Transport]] has been explored in the Wasserstein Flow literature.

- ### Provenance
  - sources:: Papamakarios et al. "Normalizing Flows for Probabilistic Modeling and Inference" (JMLR 2021); Kobyzev et al. "Normalizing Flows: An Introduction and Review of Current Methods" (TPAMI 2021); original architecture papers (NICE, RealNVP, Glow, FFJORD)
  - updated:: 2026-06-13
