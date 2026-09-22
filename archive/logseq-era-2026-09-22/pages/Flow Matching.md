public:: true

# flow matching
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec6c298d55c911a0be64fe22dce5ddcf885b1cdca2584cd9730b08d62bb40dd7",
  "@type": "Page",
  "vc:slug": "flow-matching",
  "title": "flow matching",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:flow-matching",
  "@type": "Class",
  "label": "Flow Matching",
  "definition": "Flow Matching is a generative modelling framework that trains a neural network to parameterise the vector field of a continuous normalising flow by directly regressing on analytically tractable target vector fields defined along conditional flow paths between a source distribution (typically Gaussian noise) and a data distribution. Unlike score-based diffusion models, which require simulating a stochastic differential equation during training, flow matching uses deterministic conditional flow paths that can be computed in closed form via Conditional Flow Matching (CFM), yielding stable and efficient training without ODE simulation at training time. At inference the learned vector field is integrated with an ODE solver to transport samples from noise to data, enabling high-quality generation with fewer neural function evaluations than diffusion alternatives. The framework unifies and generalises prior work on continuous normalising flows, score matching, and diffusion probabilistic models under a single regression objective.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    },
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:normalising-flow",
        "label": "Continuous Normalising Flow"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:ordinary-differential-equation",
        "label": "Ordinary Differential Equation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:image-synthesis",
        "label": "Image Synthesis"
      },
      {
        "@id": "urn:ngm:class:audio-generation",
        "label": "Audio Generation"
      },
      {
        "@id": "urn:ngm:class:protein-structure-prediction",
        "label": "Protein Structure Prediction"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:score-matching",
        "label": "Score Matching"
      },
      {
        "@id": "urn:ngm:class:optimal-transport",
        "label": "Optimal Transport"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:normalising-flow",
        "label": "Normalising Flow"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Denoising Diffusion Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:score-based-generative-model",
        "label": "Score-based Generative Model"
      },
      {
        "@id": "urn:ngm:class:latent-diffusion",
        "label": "Latent Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:rectified-flow",
        "label": "Rectified Flow"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computational-biology",
        "label": "Computational Biology"
      },
      {
        "@id": "urn:ngm:class:drug-discovery",
        "label": "Drug Discovery"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:conditional-flow-matching",
      "label": "Conditional Flow Matching"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Flow Matching is a [[Generative Model]] framework that trains a [[Neural Network]] to parameterise the vector field of a [[Continuous Normalising Flow]] by directly regressing on analytically tractable target vector fields defined along conditional flow paths between a source distribution (typically [[Gaussian Distribution]]) and a data distribution. The key innovation, Conditional Flow Matching (CFM), avoids the expensive ODE simulation required by classical [[Continuous Normalising Flow]] training by conditioning the regression target on individual sample pairs, yielding closed-form conditional vector fields. At inference, the learned vector field is integrated with an [[ODE Solver]] to transport samples from noise to data, enabling high-quality generation in fewer neural function evaluations than [[Diffusion Model]] counterparts. The framework formally subsumes [[Score Matching]] and [[Denoising Diffusion Probabilistic Model]] objectives as special cases.

- ### Overview
  - Flow Matching addresses a fundamental tension in deep generative modelling: [[Continuous Normalising Flow]] models are theoretically attractive because they yield exact likelihoods and deterministic inference, but classical training via maximum likelihood requires solving a high-dimensional ODE at every gradient step, making them prohibitively expensive.
  - The flow matching approach, independently developed by Lipman et al. (2022) and concurrent works on [[Rectified Flow]] and [[Stochastic Interpolant]], replaces the likelihood objective with a simple regression loss: the network is asked to predict, at each time step and each spatial location, the vector field that would move a noise sample towards the corresponding data sample along a pre-specified path.
  - Because the conditional path between a single noise–data pair can be defined analytically (e.g., linear interpolation), the regression target is computable without any ODE simulation. Training therefore scales to large datasets and high-dimensional spaces with the same computational cost as training a standard [[Denoising Diffusion Probabilistic Model]], while inference can be done with a single deterministic ODE integration.
  - Why it matters: Flow matching achieves state-of-the-art sample quality and likelihood on benchmark datasets, trains stably without adversarial dynamics or posterior collapse, supports flexible non-Gaussian paths, and is straightforward to implement on top of existing diffusion model architectures.

- ### Key Mechanisms
  - **Continuous-time ODE formulation**
    - A flow is a time-indexed family of diffeomorphisms mapping source distribution p₀ (noise) to data distribution p₁. The flow is generated by a time-dependent vector field u_t via the ODE ẋ = u_t(x).
    - [[Continuous Normalising Flow]] models learn u_t directly but require ODE simulation during training.
    - Flow matching instead regresses a neural network v_θ(x, t) onto u_t using a simulation-free loss.
  - **Marginal vs conditional flow matching**
    - The marginal vector field u_t(x) exists but is intractable because it requires integrating over all conditioning pairs.
    - The Conditional Flow Matching insight: the expectation of the conditional vector field u_t(x|x₁) over data samples x₁ equals the marginal field u_t(x). Thus minimising the conditional regression loss is equivalent to minimising the marginal objective, without computing the marginal.
    - Conditional target paths are simple: the most common choice is the Gaussian path x_t = (1−t)x₀ + t·x₁ + σ·ε for noise ε, giving a linear vector field target u_t(x|x₁) = x₁ − x₀.
  - **[[Optimal Transport]] paths**
    - Choosing coupling (x₀, x₁) via [[Optimal Transport]] rather than independent sampling yields straighter probability flow paths, reducing the number of ODE integration steps required at inference (OT-CFM variant).
    - Straight paths minimise the total variation of the vector field over time, making the ODE easier to solve with large step sizes.
  - **ODE integration at inference**
    - Once trained, samples are generated by initialising x₀ ~ N(0, I) and integrating ẋ = v_θ(x, t) from t=0 to t=1.
    - Any [[ODE Solver]] can be used: Euler (fastest, lowest quality), Runge-Kutta 4, DPM-Solver, or adaptive methods.
    - Fewer function evaluations are needed than in [[Diffusion Model]] sampling because flow paths are straighter.
  - **Relationship to [[Diffusion Model]] and [[Score Matching]]**
    - Score-based models learn ∇log p_t(x); this is a degenerate case of flow matching where the path is the Gaussian diffusion process and the vector field is determined by the score function.
    - Flow matching is strictly more general: it supports any marginal-preserving path, including VP-SDE, VE-SDE, sub-VP, and user-defined linear paths.
    - [[Rectified Flow]] and [[Stochastic Interpolant]] are closely related frameworks developed concurrently that share the same core idea of regression on interpolation paths.

- ### Variants and Extensions
  - **Discrete Flow Matching**: extends the framework to discrete data (text tokens, graphs) by defining flows over categorical distributions, analogous to masked diffusion models.
  - **Riemannian Flow Matching**: operates on data lying on curved manifolds such as the unit sphere, SO(3) rotation group, or hyperbolic space, enabling generative models for directional and geometric data.
  - **Equivariant Flow Matching**: incorporates geometric symmetries (translation, rotation, reflection invariance) for [[Molecular Generation]] and [[Protein Structure Prediction]], used in models such as FrameDiff and AlphaFold successors.
  - **Minibatch OT Flow Matching**: approximates the full [[Optimal Transport]] coupling using minibatch optimal transport solvers, making OT-CFM practical at scale.
  - **Classifier-Free Guidance**: exactly as in [[Diffusion Model]] training, a null conditioning can be dropped with probability p_drop, enabling conditional generation with classifier-free guidance at inference.
  - **Latent Flow Matching**: applies flow matching in a learned latent space (cf. [[Latent Diffusion Model]]), as in Stable Diffusion 3 and similar architectures.

- ### Applications
  - **Image Synthesis**
    - Stable Diffusion 3 (Stability AI) uses a flow matching objective in latent space, enabling high-quality text-to-image generation with fewer sampling steps than earlier diffusion models.
    - [[Latent Diffusion Model]] architectures adapted to flow matching consistently match or exceed DDPM baselines with 10–50× fewer function evaluations.
  - **Audio and Speech Generation**
    - Meta's Voicebox and Audiobox systems use flow matching for zero-shot text-to-speech and audio generation, demonstrating high naturalness and speaker similarity.
    - Matcha-TTS and VoiceFlow are lightweight speech synthesis systems built on CFM.
  - **Video Generation**
    - Flow matching is increasingly used for video synthesis where the temporal consistency benefits from deterministic ODE paths rather than noisy SDE sampling.
  - **Structural Biology and Drug Discovery**
    - [[Protein Structure Prediction]] and molecular conformation generation benefit from equivariant flow matching, which respects SE(3) symmetry.
    - FoldFlow, FrameFlow, and related models use Riemannian or equivariant CFM for protein backbone generation.
    - Small-molecule [[Drug Discovery]] uses flow matching to generate 3D molecular geometries conditioned on pharmacophore or receptor constraints.
  - **Robotics and Control**
    - Diffusion Policy and its flow matching variants use continuous flow-based policies for robot manipulation, benefiting from faster inference for real-time control.
  - **Weather and Climate Modelling**
    - Flow matching has been applied to probabilistic weather prediction as a generative prior over atmospheric states.

- ### Relationships
  - partOf:: [[Continuous Normalising Flow]]
  - hasPart:: [[Conditional Flow Matching]]
  - hasPart:: [[Vector Field]]
  - hasPart:: [[ODE Solver]]
  - requires:: [[Neural Network]]
  - requires:: [[Probability Distribution]]
  - requires:: [[Ordinary Differential Equation]]
  - enables:: [[Image Synthesis]]
  - enables:: [[Audio Generation]]
  - enables:: [[Protein Structure Prediction]]
  - enables:: [[Molecular Generation]]
  - uses:: [[Deep Learning]]
  - uses:: [[Score Matching]]
  - uses:: [[Optimal Transport]]
  - uses:: [[Stochastic Interpolant]]
  - contrastsWith:: [[Diffusion Model]]
  - contrastsWith:: [[Generative Adversarial Network]]
  - contrastsWith:: [[Variational Autoencoder]]
  - contrastsWith:: [[Normalising Flow]]
  - relatedTo:: [[Denoising Diffusion Probabilistic Model]]
  - relatedTo:: [[Score-based Generative Model]]
  - relatedTo:: [[Latent Diffusion Model]]
  - relatedTo:: [[Rectified Flow]]
  - bridges-to:: [[Computational Biology]]
  - bridges-to:: [[Drug Discovery]]

- ### Standards & Context
  - Flow Matching is a research framework with no formal standards body, but it is rapidly becoming a de facto standard approach in the generative modelling community, displacing classical [[Continuous Normalising Flow]] training and competing with [[Diffusion Model]] methods.
  - Key reference works establishing the framework:
    - Lipman et al. (2022) "Flow Matching for Generative Modeling" — introduced the CFM objective and Gaussian conditional paths.
    - Liu et al. (2022) "Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow" — concurrent [[Rectified Flow]] formulation.
    - Albergo & Vanden-Eijnden (2022) "Building Normalizing Flows with Stochastic Interpolants" — concurrent [[Stochastic Interpolant]] formulation.
    - Tong et al. (2023) "Improving and Generalizing Flow-Matching with Minibatch Optimal Transport" — OT-CFM extension.
    - Esser et al. (2024) "Scaling Rectified Flow Transformers for High-Resolution Image Synthesis" — Stable Diffusion 3.
  - The framework is implemented in major deep learning libraries including PyTorch and JAX, with community implementations such as `torchdiffeq` for ODE solving and `torchcfm` for conditional flow matching utilities.
  - Related frameworks and their relationship to flow matching:
    - [[Diffusion Model]]: stochastic SDE-based; flow matching is the ODE / deterministic analogue.
    - [[Denoising Diffusion Probabilistic Model]]: discrete-time diffusion; CFM with Gaussian paths is the continuous-time equivalent.
    - [[Normalising Flow]]: requires invertible architectures; flow matching relaxes this to arbitrary neural networks.
    - [[Generative Adversarial Network]]: adversarial training; flow matching uses stable regression objectives.
  - The ICLR, NeurIPS, and ICML communities have rapidly adopted flow matching as a benchmark framework since 2023, with hundreds of extensions covering modalities from text to 3D molecules.

- ### Semantic Classification
  - owl-class:: flow-matching:Flow Matching
  - owl-role:: Concept

- ### Provenance
  - sources:: Lipman et al. 2022 (arXiv:2210.02747); Liu et al. 2022 (arXiv:2209.03003); Albergo & Vanden-Eijnden 2022 (arXiv:2209.15571); Tong et al. 2023 (arXiv:2302.00482); Esser et al. 2024 (arXiv:2403.03206)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
