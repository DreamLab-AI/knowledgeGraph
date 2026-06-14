public:: true

# vae
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e089e84942af6414b066654f297dfbb11bf84b3e8b46d7252710076aff68d122",
  "@type": "Page",
  "vc:slug": "vae",
  "title": "vae",
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
  "@id": "urn:ngm:class:vae",
  "@type": "Class",
  "label": "VAE",
  "definition": "A Variational Autoencoder (VAE) is a deep generative model that learns a probabilistic, continuous latent-space representation of data by jointly optimising a reconstruction loss and a Kullback-Leibler divergence regularisation term, using amortised variational inference to make the intractable posterior distribution tractable. The encoder network (recognition model) maps input data to the parameters of a Gaussian posterior over latent codes, while the decoder network maps samples drawn from that posterior back to the data space; the reparameterisation trick renders the sampling step differentiable, enabling end-to-end gradient-based learning. VAEs underpin latent diffusion models, representation learning, disentanglement research, and multimodal generative systems, and have been extended by hierarchical, vector-quantised, and conditional variants that dramatically improve fidelity and controllability.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:deep-generative-model",
      "label": "Deep Generative Model"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:variational-autoencoder", "label": "Variational Autoencoder"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:variational-inference", "label": "Variational Inference"},
      {"@id": "urn:ngm:class:autoencoder", "label": "Autoencoder"},
      {"@id": "urn:ngm:class:reparameterisation-trick", "label": "Reparameterisation Trick"},
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:kl-divergence", "label": "KL Divergence"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:latent-diffusion", "label": "Latent Diffusion"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:representation-learning", "label": "Representation Learning"},
      {"@id": "urn:ngm:class:disentangled-representation", "label": "Disentangled Representation"},
      {"@id": "urn:ngm:class:data-augmentation", "label": "Data Augmentation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:encoder-network", "label": "Encoder Network"},
      {"@id": "urn:ngm:class:decoder-network", "label": "Decoder Network"},
      {"@id": "urn:ngm:class:latent-space", "label": "Latent Space"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"},
      {"@id": "urn:ngm:class:flow-based-model", "label": "Flow-Based Model"},
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:evidence-lower-bound", "label": "Evidence Lower Bound"},
      {"@id": "urn:ngm:class:gaussian-distribution", "label": "Gaussian Distribution"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:vq-vae", "label": "VQ-VAE"},
      {"@id": "urn:ngm:class:beta-vae", "label": "Beta-VAE"},
      {"@id": "urn:ngm:class:hierarchical-vae", "label": "Hierarchical VAE"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:stable-diffusion", "label": "Stable Diffusion"},
      {"@id": "urn:ngm:class:multimodal-learning", "label": "Multimodal Learning"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **Variational Autoencoder** (VAE) is a [[Deep Generative Model]] that combines the encoder-decoder architecture of a classical [[Autoencoder]] with the probabilistic framework of [[Variational Inference]]. The model learns a continuous, regularised [[Latent Space]] by optimising the [[Evidence Lower Bound]] (ELBO), which balances reconstruction fidelity against a [[KL Divergence]] penalty that keeps the posterior distribution close to a unit Gaussian prior. The [[Reparameterisation Trick]] makes the stochastic sampling step differentiable, enabling end-to-end training via [[Backpropagation]], and the resulting latent geometry is smooth and interpolable — a property that distinguishes VAEs from discrete or deterministic alternatives such as [[Generative Adversarial Network]]s and standard autoencoders.

- ### Overview
  - VAEs were introduced by Kingma and Welling (2013) and Rezende, Mohamed, and Wierstra (2014) as a principled method for learning latent variable models at scale using neural networks and stochastic gradient descent.
  - The central challenge they address is computing the posterior p(z|x), which is intractable for expressive decoders. VAEs replace the true posterior with an approximate posterior q(z|x) parameterised by an [[Encoder Network]], and optimise a lower bound on the log marginal likelihood.
  - Why it matters:
    - Provides a *generative* model: after training, novel samples can be drawn by sampling z from the prior and passing it through the [[Decoder Network]].
    - The latent space is *continuous and structured*, enabling smooth interpolation and analogy operations in the latent domain.
    - Forms the compression backbone of [[Latent Diffusion]] models such as [[Stable Diffusion]], where the VAE encodes images into a compact representation before the diffusion process operates.
    - Enables [[Representation Learning]] that can expose semantically meaningful factors of variation in data.

- ### Key Components
  - **Encoder Network (Recognition Model)**
    - Takes input x and outputs parameters (μ, σ²) of a Gaussian distribution q_φ(z|x).
    - Acts as the amortised inference network — a single forward pass replaces iterative optimisation per data point.
    - Implemented as a [[Convolutional Neural Network]] for image data or a [[Transformer]] for sequence data.
  - **Decoder Network (Generative Model)**
    - Takes a latent sample z ~ q_φ(z|x) and reconstructs x̂ ≈ x.
    - Parameterises a likelihood distribution p_θ(x|z) — typically Gaussian (continuous data) or Bernoulli (binary data).
    - Architecture mirrors the encoder in reverse; for images commonly uses transposed convolutions or upsampling layers.
  - **Latent Space**
    - A lower-dimensional continuous manifold z ∈ ℝᵈ (typical d: 4–512 depending on task).
    - The KL term imposes a [[Gaussian Distribution]] prior over z, ensuring the space is densely covered and well-structured for sampling and interpolation.
    - Enables [[Disentangled Representation]] learning when additional constraints (e.g. β-weighting) are applied.
  - **ELBO Objective**
    - ELBO = E[log p_θ(x|z)] − KL(q_φ(z|x) || p(z))
    - Reconstruction term (first) maximises data fidelity; KL term (second) regularises the posterior.
    - Tight ELBO → approximate posterior closely matches the true posterior; loose ELBO → posterior collapse risk.
  - **Reparameterisation Trick**
    - z = μ + σ · ε, ε ~ N(0, I)
    - Moves stochasticity to an input ε, making gradients flow through μ and σ during [[Backpropagation]].
    - Generalised to other distributions (e.g. Gumbel-Softmax for discrete latents in [[VQ-VAE]]).

- ### Mechanisms
  - **Training Loop**
    - Forward pass: encode x → (μ, σ²); sample z via reparameterisation; decode z → x̂.
    - Compute ELBO loss; backpropagate through encoder and decoder jointly.
    - Optimise with [[Stochastic Gradient Descent]] or [[Adam Optimiser]].
  - **Posterior Collapse**
    - A known failure mode where the KL term overwhelms reconstruction, and the decoder ignores z (strong decoder degeneration).
    - Mitigated by KL annealing, free bits, or β-VAE scheduling.
  - **Beta-VAE**
    - Introduces a weight β > 1 on the KL term to encourage more [[Disentangled Representation]] at the cost of reconstruction quality.
    - Related to information-bottleneck principles and factor analysis.
  - **Hierarchical VAE (HVAE)**
    - Stacks multiple latent variable layers z₁, z₂, … zₙ for richer expressivity.
    - Examples: NVAE, VDVAE — produce near-GAN quality without adversarial training.
  - **Vector-Quantised VAE (VQ-VAE)**
    - Replaces the continuous Gaussian latent with a discrete codebook lookup using straight-through gradient estimation.
    - Avoids posterior collapse and produces categorical latents suitable for autoregressive modelling (e.g. VQ-VAE-2, DALL-E).

- ### Applications / Use Cases
  - **Latent Diffusion Models**
    - [[Stable Diffusion]], Imagen, and related systems use a VAE to compress images from pixel space (e.g. 512×512×3) to a compact latent (e.g. 64×64×4), reducing the computational cost of the diffusion process by up to 48×.
    - The VAE decoder is applied once at the end of diffusion sampling to recover the full-resolution image.
  - **Image Synthesis and Editing**
    - Conditional VAEs (CVAEs) take class or text conditioning to steer generation.
    - Latent interpolation between two encoded images enables smooth morphing effects.
    - Style transfer and face attribute manipulation exploit the structured latent geometry.
  - **Anomaly Detection**
    - A VAE trained on normal data assigns high reconstruction error to anomalous inputs, making it effective for industrial defect detection, medical imaging outliers, and network intrusion detection.
  - **Drug and Molecule Discovery**
    - [[Molecular Graph]] VAEs (e.g. Junction Tree VAE) learn continuous latent spaces over chemical graphs, enabling gradient-based molecular optimisation for drug discovery.
    - Bridges to [[Computational Biology]] and cheminformatics workflows.
  - **Natural Language Processing**
    - Text VAEs (using [[Recurrent Neural Network]] or [[Transformer]] encoders/decoders) model sentence latent spaces for paraphrase generation, controlled text generation, and dialogue.
  - **Multimodal Learning**
    - Multimodal VAEs jointly encode data from multiple modalities (image + text, audio + video), learning a shared latent space for cross-modal retrieval and generation.
    - Bridges to [[Multimodal Learning]] and [[Cross-Modal Alignment]].
  - **Representation Learning for Downstream Tasks**
    - Pre-trained VAE encoders provide feature embeddings for classification, clustering, and semi-supervised learning, especially in low-label regimes.
  - **Robotics and Reinforcement Learning**
    - World models (e.g. DreamerV2) use a VAE to learn compact state representations from raw pixels, enabling [[Model-Based Reinforcement Learning]] in latent space.

- ### Relationships
  - requires:: [[Variational Inference]]
  - requires:: [[Autoencoder]]
  - requires:: [[Reparameterisation Trick]]
  - requires:: [[Backpropagation]]
  - requires:: [[KL Divergence]]
  - enables:: [[Latent Diffusion]]
  - enables:: [[Image Generation]]
  - enables:: [[Representation Learning]]
  - enables:: [[Disentangled Representation]]
  - enables:: [[Data Augmentation]]
  - hasPart:: [[Encoder Network]]
  - hasPart:: [[Decoder Network]]
  - hasPart:: [[Latent Space]]
  - uses:: [[Evidence Lower Bound]]
  - uses:: [[Gaussian Distribution]]
  - uses:: [[Neural Network]]
  - contrastsWith:: [[Generative Adversarial Network]]
  - contrastsWith:: [[Flow-Based Model]]
  - contrastsWith:: [[Diffusion Model]]
  - relatedTo:: [[VQ-VAE]]
  - relatedTo:: [[Beta-VAE]]
  - relatedTo:: [[Hierarchical VAE]]
  - bridges-to:: [[Stable Diffusion]]
  - bridges-to:: [[Multimodal Learning]]

- ### Notable Variants and Extensions
  - **[[Beta-VAE]]** — disentangled representation learning via upweighted KL penalty.
  - **[[VQ-VAE]]** — discrete codebook latents; avoids posterior collapse; foundation of DALL-E.
  - **[[Hierarchical VAE]]** (NVAE, VDVAE) — deep latent hierarchies for high-fidelity synthesis.
  - **Conditional VAE (CVAE)** — conditions both encoder and decoder on auxiliary information (class label, text, segmentation map).
  - **IWAE (Importance Weighted Autoencoder)** — tighter ELBO bound using importance-weighted samples; improves posterior approximation quality.
  - **Disentangled VAE variants** (Factor-VAE, TC-VAE, DIP-VAE) — explicitly minimise total correlation in latent space to encourage interpretable factors.
  - **Diffusion VAE / LSGM** — hybridises VAE with score-based diffusion prior for state-of-the-art generative quality.

- ### Standards & Context
  - VAEs are part of the broader **latent variable model** family studied in [[Bayesian Deep Learning]] and [[Probabilistic Machine Learning]].
  - They are not governed by a formal standard body, but canonical references are the Kingma & Welling (2013) paper "Auto-Encoding Variational Bayes" and Rezende et al. (2014) "Stochastic Backpropagation and Approximate Inference in Deep Generative Models".
  - The ELBO objective connects to established [[Information Theory]] concepts: mutual information, rate-distortion theory, and the minimum description length principle.
  - Widely implemented in PyTorch and TensorFlow/JAX; the model architecture is a standard benchmark in the [[Deep Learning]] research community.
  - [[Stable Diffusion]] (Rombach et al., 2022) popularised VAEs in production AI systems, placing them at the core of the text-to-image ecosystem.

- ### Provenance
  - sources:: Kingma & Welling (2013), Rezende et al. (2014), Rombach et al. (2022), Kingma & Welling (2019) survey
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
