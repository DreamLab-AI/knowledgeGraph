public:: true

# GAN
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4c760c8d781eaa172e9cf238533216d1ed5af258008a8e4fb73af795ac4feb2b",
  "@type": "Page",
  "vc:slug": "gan",
  "title": "GAN",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:image-generation",
      "vc:label": "Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    },
    {
      "@id": "urn:visionflow:linked:generative-adversarial-network",
      "vc:label": "Generative Adversarial Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GAN"
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
  "@id": "urn:ngm:class:gan",
  "@type": "Class",
  "label": "GAN",
  "definition": "A Generative Adversarial Network (GAN) is a deep-learning framework in which two neural networks — a generator and a discriminator — are trained simultaneously in a minimax game: the generator maps random latent vectors to synthetic data samples, while the discriminator learns to distinguish real training samples from generated ones. Through adversarial feedback propagated via backpropagation, the generator progressively improves at synthesising realistic outputs while the discriminator improves at detection. GANs have achieved state-of-the-art results in image synthesis, style transfer, super-resolution, and conditional generation, but are prone to training instabilities such as mode collapse and vanishing gradients.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    },
    {
      "@id": "urn:ngm:class:deep-generative-model",
      "label": "Deep Generative Model"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:generative-adversarial-network",
      "label": "Generative Adversarial Network"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:generator-network",
        "label": "Generator Network"
      },
      {
        "@id": "urn:ngm:class:discriminator-network",
        "label": "Discriminator Network"
      },
      {
        "@id": "urn:ngm:class:neural-network-latent-space",
        "label": "Latent Space"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      },
      {
        "@id": "urn:ngm:class:image-to-image-translation",
        "label": "Image to Image Translation"
      },
      {
        "@id": "urn:ngm:class:super-resolution",
        "label": "Super Resolution"
      },
      {
        "@id": "urn:ngm:class:data-augmentation",
        "label": "Data Augmentation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:adversarial-training",
        "label": "Adversarial Training"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:batch-normalisation",
        "label": "Batch Normalisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:autoregressive-model",
        "label": "Autoregressive Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:unsupervised-learning",
        "label": "Unsupervised Learning"
      },
      {
        "@id": "urn:ngm:class:model-collapse",
        "label": "Mode Collapse"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:synthetic-data",
        "label": "Synthetic Data"
      },
      {
        "@id": "urn:ngm:class:deepfakes",
        "label": "Deepfake"
      },
      {
        "@id": "urn:ngm:class:procedural-content-generation",
        "label": "Procedural Content Generation"
      }
    ]
  },
  "quality": 0.74,
  "qualityScore": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:gan:2a99130aeeee",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4c760c8d781eaa172e9cf238533216d1ed5af258008a8e4fb73af795ac4feb2b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Backpropagation]]",
      "resolved": "urn:visionflow:linked:backpropagation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Generation]]",
      "resolved": "urn:visionflow:linked:image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Adversarial Network]]",
      "resolved": "urn:visionflow:linked:generative-adversarial-network",
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
  - A **GAN** (Generative Adversarial Network) is a class of [[Generative Model]] built on an adversarial two-network architecture: a **generator** that maps samples from a [[Latent Space]] to synthetic data, and a **discriminator** that classifies inputs as real or generated. The two networks are trained jointly through [[Backpropagation]] in a minimax game until the generator produces outputs indistinguishable from real data. GANs occupy a central position in [[Deep Learning]] alongside [[Variational Autoencoder]] and [[Diffusion Model]] frameworks, and have driven advances in photorealistic [[Image Generation]], [[Style Transfer]], and [[Data Augmentation]].

- ### Overview
  - Proposed by Ian Goodfellow et al. in 2014, GANs formalised generative modelling as a game-theoretic optimisation problem rather than explicit density estimation.
  - The core insight is that a generator need not model the data distribution explicitly: instead it learns to produce samples that a simultaneously-trained discriminator cannot distinguish from real data.
  - This adversarial dynamic allows GANs to produce high-fidelity, sharp outputs — particularly images — that earlier density-estimation approaches such as [[Restricted Boltzmann Machine]] or early [[Variational Autoencoder]] models struggled to match.
  - Training is inherently unstable because the two objectives are coupled: if either network dominates, training diverges or the generator collapses to a small subset of modes ([[Mode Collapse]]).
  - A large family of GAN variants — DCGAN, WGAN, StyleGAN, BigGAN, CycleGAN, Pix2Pix — have been developed to address stability, diversity, and controllability.

- ### Key Components
  - #### Generator Network
    - Maps a random noise vector drawn from a prior (typically Gaussian) in [[Latent Space]] to a synthetic sample.
    - During training receives no direct access to real data; learns only through the gradient signal from the [[Discriminator Network]].
    - In image GANs typically implemented as a [[Convolutional Neural Network]] with transposed convolutions (upsampling path).
  - #### Discriminator Network
    - A binary classifier that estimates the probability that an input sample is real (from the training set) rather than generated.
    - Implemented as a standard [[Convolutional Neural Network]] in image domains.
    - In Wasserstein variants ([[Wasserstein Distance]]-GAN / WGAN) the discriminator is replaced by a "critic" that estimates the Wasserstein-1 distance rather than a class probability.
  - #### Adversarial Objective
    - The canonical objective is: min_G max_D E[log D(x)] + E[log(1 − D(G(z)))]
    - The generator minimises and the discriminator maximises this expression, creating opposing gradient signals.
    - [[Gradient Descent]] variants (Adam optimiser) are typically used for both networks with independent learning rates.
  - #### Latent Space
    - The prior distribution from which generator inputs are sampled, usually standard Gaussian in R^d where d is the latent dimension.
    - Interpolations in [[Latent Space]] produce semantically smooth transitions in output space (e.g. morphing between faces).
    - Conditional GANs extend this by concatenating a class label or conditioning vector to the latent input, enabling class-conditional generation.
  - #### Training Dynamics
    - Uses [[Batch Normalisation]] and careful learning-rate scheduling to prevent discriminator or generator from dominating.
    - [[Gradient Penalty]] (used in WGAN-GP) enforces a Lipschitz constraint on the critic, substantially stabilising training.
    - Spectral Normalisation constrains weight matrices to have unit spectral norm, another widely adopted stabilisation technique.

- ### Mechanisms
  - #### Minimax Game
    - The GAN objective defines a two-player zero-sum game. At the Nash equilibrium the generator exactly models the real data distribution and the discriminator outputs 0.5 everywhere.
    - In practice the non-saturating variant (generator maximises log D(G(z)) rather than minimising log(1 − D(G(z)))) is used to prevent vanishing gradients early in training.
  - #### Mode Collapse
    - A major pathology in which the generator learns to produce only a limited subset of the data distribution, ignoring diversity.
    - Addressed by techniques including minibatch discrimination, unrolled GANs, and [[Wasserstein Distance]]-based objectives.
  - #### Progressive Growing
    - Introduced in ProGAN (Progressive Growing of GANs): generator and discriminator begin at low resolution and incrementally add layers to handle higher resolutions, stabilising training of high-resolution generators.
    - This technique underlies the original StyleGAN architecture.
  - #### Conditional Generation
    - Conditional GANs (cGAN) accept a conditioning signal (class label, text embedding, segmentation map) allowing controlled synthesis.
    - [[Image-to-Image Translation]] frameworks (Pix2Pix, CycleGAN) use a conditional architecture with paired or unpaired image supervision.

- ### Applications / Use Cases
  - #### Image Synthesis and Manipulation
    - Photorealistic face generation (StyleGAN series) and editing via latent-space manipulation.
    - [[Image-to-Image Translation]]: day-to-night conversion, satellite-to-map rendering, sketch-to-photo.
    - [[Super-Resolution]]: SRGAN and ESRGAN learn to hallucinate fine detail from low-resolution inputs.
    - Inpainting: filling missing regions of images with contextually plausible content.
  - #### Data Augmentation
    - Generating synthetic training samples to balance class distributions or augment scarce medical imaging datasets.
    - Used in [[Data Augmentation]] pipelines for training [[Convolutional Neural Network]] classifiers.
  - #### Video and 3D Synthesis
    - Temporal GANs (VideoGAN, MoCoGAN) extend the framework to video sequence generation.
    - 3D-aware GANs (NeRF-GAN, EG3D) generate novel-view-consistent 3D representations from 2D supervision.
    - Links directly to [[Procedural Content Generation]] for games and [[Spatial Computing]] environments.
  - #### Scientific and Medical Domains
    - Generating synthetic medical images (CT, MRI) for training segmentation networks where labelled data is scarce.
    - Drug discovery: generating molecular graphs with desired chemical properties.
    - Astronomy: generating synthetic galaxy images to augment survey datasets.
  - #### Adversarial and Security Contexts
    - [[Deepfake]] generation: face-swapping and voice cloning applications raise significant detection and authenticity challenges.
    - Adversarial example generation: GANs used to craft imperceptible perturbations that fool classifiers.
    - Bridges to [[Synthetic Data]] generation for privacy-preserving analytics (generating data with the statistical properties of sensitive datasets without retaining individual records).

- ### Relationships
  - subClassOf:: [[Generative Model]]
  - sameAs:: [[Generative Adversarial Network]]
  - hasPart:: [[Generator Network]]
  - hasPart:: [[Discriminator Network]]
  - hasPart:: [[Latent Space]]
  - requires:: [[Backpropagation]]
  - requires:: [[Neural Network]]
  - requires:: [[Gradient Descent]]
  - enables:: [[Image Generation]]
  - enables:: [[Image-to-Image Translation]]
  - enables:: [[Super-Resolution]]
  - enables:: [[Data Augmentation]]
  - uses:: [[Adversarial Training]]
  - uses:: [[Convolutional Neural Network]]
  - uses:: [[Batch Normalisation]]
  - contrastsWith:: [[Variational Autoencoder]]
  - contrastsWith:: [[Diffusion Model]]
  - contrastsWith:: [[Autoregressive Model]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Unsupervised Learning]]
  - relatedTo:: [[Mode Collapse]]
  - relatedTo:: [[Wasserstein Distance]]
  - bridges-to:: [[Synthetic Data]]
  - bridges-to:: [[Deepfake]]
  - bridges-to:: [[Procedural Content Generation]]

- ### Notable Variants
  - **DCGAN** (Deep Convolutional GAN) — established architectural best practices for stable convolutional GANs.
  - **WGAN / WGAN-GP** — replaced binary cross-entropy with [[Wasserstein Distance]] to address vanishing gradients.
  - **StyleGAN / StyleGAN2 / StyleGAN3** — introduced style-based generator architecture enabling fine-grained control over image attributes; state-of-the-art for photorealistic face synthesis.
  - **BigGAN** — scaled GANs to large class-conditional ImageNet generation using truncation trick and orthogonal regularisation.
  - **CycleGAN** — unpaired [[Image-to-Image Translation]] using cycle-consistency loss; no paired training data required.
  - **Pix2Pix** — paired conditional image translation with U-Net generator and PatchGAN discriminator.
  - **ProGAN** — progressive growing from low to high resolution for stable high-resolution synthesis.

- ### Standards and Context
  - GANs do not have a single governing standards body; evaluation relies on metrics such as Fréchet Inception Distance (FID) and Inception Score (IS) for image quality, and Precision/Recall decompositions for diversity vs. fidelity.
  - Deepfake and synthetic media generated by GANs have attracted regulatory attention: the EU AI Act classifies certain synthetic media applications as high-risk; [[Content Authenticity Initiative]] (CAI) and [[C2PA]] standards address provenance of AI-generated images.
  - The [[Partnership on AI]] and various national bodies have published guidelines on responsible use of generative imagery.
  - Related to [[AI Safety]] concerns around undetectable synthetic content and potential for disinformation.

- ### Provenance
  - sources:: Goodfellow et al. (2014) "Generative Adversarial Nets"; Radford et al. (2015) DCGAN; Arjovsky et al. (2017) WGAN; Karras et al. (2019-2021) StyleGAN series; Brock et al. (2019) BigGAN; Zhu et al. (2017) CycleGAN
  - updated:: 2026-06-13
