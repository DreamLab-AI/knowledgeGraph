public:: true

# latent diffusion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef252b7d913b153bfe65ac035706360f57b507d8b480059bb112eadffb367455",
  "@type": "Page",
  "vc:slug": "latent-diffusion",
  "title": "latent diffusion",
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
  "@id": "urn:ngm:class:latent-diffusion",
  "@type": "Class",
  "label": "Latent Diffusion",
  "definition": "Latent Diffusion Models (LDMs) are a class of generative models that perform the iterative denoising diffusion process within the compressed latent space of a pre-trained variational autoencoder (VAE), rather than directly in high-dimensional pixel space. By encoding images into a compact, semantically rich latent representation, LDMs dramatically reduce training and inference compute whilst preserving perceptual quality, because the VAE absorbs the high-frequency, imperceptual detail that would otherwise burden the diffusion process. Conditioning on text, image, or other modalities is achieved via cross-attention layers inside a U-Net denoising backbone, enabling high-fidelity text-to-image synthesis, image editing, and multimodal generation at practical hardware budgets. Stable Diffusion, the most widely deployed open-source implementation, demonstrated that consumer GPUs could run production-quality image synthesis, catalysing a broad ecosystem of fine-tuning methods and downstream applications.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:diffusion-model",
      "label": "Diffusion Model"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:variational-autoencoder", "label": "Variational Autoencoder"},
      {"@id": "urn:ngm:class:u-net", "label": "U-Net"},
      {"@id": "urn:ngm:class:cross-attention", "label": "Cross-Attention"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:encoder-decoder", "label": "Encoder-Decoder"},
      {"@id": "urn:ngm:class:denoising-score-matching", "label": "Denoising Score Matching"},
      {"@id": "urn:ngm:class:noise-schedule", "label": "Noise Schedule"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:text-to-image", "label": "Text-to-Image"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:image-inpainting", "label": "Image Inpainting"},
      {"@id": "urn:ngm:class:image-to-image-translation", "label": "Image-to-Image Translation"},
      {"@id": "urn:ngm:class:video-generation", "label": "Video Generation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:clip", "label": "CLIP"},
      {"@id": "urn:ngm:class:ddim-sampling", "label": "DDIM Sampling"},
      {"@id": "urn:ngm:class:classifier-free-guidance", "label": "Classifier-Free Guidance"},
      {"@id": "urn:ngm:class:low-rank-adaptation", "label": "Low-Rank Adaptation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:score-based-generative-model", "label": "Score-Based Generative Model"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"},
      {"@id": "urn:ngm:class:pixel-diffusion", "label": "Pixel Diffusion"},
      {"@id": "urn:ngm:class:normalising-flow", "label": "Normalising Flow"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"},
      {"@id": "urn:ngm:class:neural-network-latent-space", "label": "Latent Space"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:foundation-model", "label": "Foundation Model"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:augmented-reality-content-creation", "label": "AR Content Creation"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ldm", "label": "LDM"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Latent Diffusion Models (LDMs) are a class of [[Generative Model]] that perform the iterative denoising diffusion process within the compressed latent space of a pre-trained [[Variational Autoencoder]] (VAE), rather than operating directly in high-dimensional pixel space. By encoding image data into a compact, semantically rich latent representation, LDMs reduce training and inference compute substantially whilst retaining perceptual quality, since the VAE absorbs imperceptual high-frequency detail that would otherwise consume diffusion capacity. Conditioning on natural-language prompts, class labels, or other modalities is achieved via [[Cross-Attention]] layers embedded in a [[U-Net]] denoising backbone, enabling text-driven, high-fidelity image synthesis at consumer hardware budgets. The framework was formalised in the 2022 paper "High-Resolution Image Synthesis with Latent Diffusion Models" by Rombach et al. and gave rise to [[Stable Diffusion]], the most widely deployed open-source implementation.

- ### Overview
  - Latent Diffusion Models emerged from research into efficient generative modelling that sought to match the output quality of pixel-space [[Diffusion Model]]s (such as DDPM and DALL-E 2's predecessor) without their prohibitive compute requirements. The central insight is that a powerful [[Variational Autoencoder]] can compress a natural image to a latent code that is orders of magnitude smaller in dimensionality, yet retains sufficient semantic and perceptual information for downstream generation. Running the [[Denoising Score Matching]] process in this compact space rather than over raw pixels slashes training FLOP counts and accelerates inference dramatically.
  - LDMs occupy a central position in the modern [[Generative AI]] landscape, underpinning most commercially deployed text-to-image, image-editing, and video-generation systems as of 2024–2025. Their modular design — a separately pre-trained VAE, a swappable U-Net diffusion backbone, and a pluggable conditioning encoder — makes them highly adaptable through fine-tuning, control mechanisms, and architectural extensions.
  - The [[Latent Space]] abstraction also enables multimodal conditioning: the same denoising backbone can be guided by text embeddings from [[CLIP]] or T5, depth maps, human-pose skeletons, edge maps, or other structured signals, simply by changing the domain encoder and the cross-attention conditioning pathway.

- ### Key Components
  - #### Variational Autoencoder (VAE)
    - The VAE consists of an encoder E that maps an input image x ∈ ℝ^(H×W×3) to a latent code z ∈ ℝ^(h×w×c) (typically with a spatial compression factor of 8×), and a decoder D that reconstructs the image from the latent. See [[Variational Autoencoder]] and [[Encoder-Decoder]].
    - The VAE is trained separately, usually with a perceptual loss and an adversarial loss (LPIPS + a discriminator), ensuring the latent space is perceptually faithful. Once trained it is frozen during LDM training.
    - The compression factor controls the trade-off between spatial fidelity and compute: a 4× factor retains more spatial detail; an 8× factor gives a smaller latent and cheaper diffusion.
  - #### Denoising U-Net
    - The core of LDM is a time-conditioned [[U-Net]] that learns to predict the noise ε (or, alternatively, the clean latent x₀) at each denoising step. The U-Net is conditioned on a timestep embedding and (optionally) a context vector from a domain encoder. See [[Denoising Score Matching]].
    - Skip connections in the U-Net propagate fine-grained spatial structure from encoder layers to decoder layers, preserving spatial coherence at multiple scales.
    - Many modern variants replace U-Net convolutional blocks with [[Transformer]] self-attention blocks (DiT — Diffusion Transformer) to scale more easily with model size.
  - #### Cross-Attention Conditioning
    - Textual or other modal conditions are projected into embedding sequences via a domain encoder (e.g. a frozen [[CLIP]] text encoder or T5) and injected into every layer of the U-Net through [[Cross-Attention]] layers. This allows fine-grained, token-level control over the generated output.
    - Additional conditioning signals (layout, depth, semantic maps) can be injected through adapter modules such as [[ControlNet]], which add residual side networks without modifying the base U-Net weights.
  - #### Noise Schedule & Sampler
    - The [[Noise Schedule]] defines how Gaussian noise is added across T timesteps in the forward process. Common schedules include linear, cosine, and log-SNR-shifted variants optimised for high-resolution generation.
    - Inference speed is governed by the sampler. DDPM requires hundreds of steps; [[DDIM Sampling]] (deterministic implicit sampling) achieves competitive quality in 20–50 steps; LMS, DPM-Solver, and DEIS reduce this further to 5–20 steps.
  - #### Classifier-Free Guidance (CFG)
    - [[Classifier-Free Guidance]] conditions the U-Net on both the prompt and an empty (unconditional) embedding at each step, then linearly extrapolates the score estimates. Higher guidance scales push the output closer to the prompt at the cost of some diversity and naturalness.

- ### Training Procedure
  - Stage 1 — VAE pre-training: the encoder-decoder is trained on a large image corpus with perceptual + adversarial losses. KL regularisation (or VQ-regularisation in VQ-VAE variants) encourages the latent space to be well-formed.
  - Stage 2 — Diffusion backbone training: with the VAE frozen, the U-Net is trained to predict noise at random timesteps sampled from the [[Noise Schedule]]. Images are encoded to latents via E(x), noise is added to obtain z_t, and the U-Net is trained to recover ε from (z_t, t, c), where c is the conditioning context. Loss = E[‖ε − ε_θ(z_t, t, c)‖²].
  - Fine-tuning methods: [[Low-Rank Adaptation]] (LoRA), DreamBooth, Textual Inversion, and Hypernetworks adapt a pre-trained LDM to a new concept, style, or subject from a small image set, exploiting the disentangled structure of the latent space.

- ### Applications
  - #### Text-to-Image Synthesis
    - The flagship application: a natural-language prompt drives generation of photorealistic or artistic images. Systems include [[Stable Diffusion]] (open-source), DALL-E 3, Midjourney, Adobe Firefly, and Imagen 3.
    - Fine-tuning with DreamBooth or LoRA enables personalised generation — rendering a specific person's likeness, product, or style with a small number of reference images.
  - #### Image Editing & Inpainting
    - [[Image Inpainting]]: masked regions of an existing image are re-generated conditioned on surrounding context and a text prompt.
    - Outpainting extends image boundaries beyond the original frame by running the diffusion process on the latent representation of a padded canvas.
    - Prompt-guided editing (Prompt2Prompt, InstructPix2Pix) modifies specific attributes of a real image by manipulating cross-attention maps or fine-tuning.
  - #### Image-to-Image Translation
    - [[Image-to-Image Translation]]: an input image is encoded, partially noised, then denoised with a new conditioning prompt, blending source structure with prompt-driven content. The noise strength parameter controls the degree of departure from the input.
  - #### Controlled Synthesis
    - [[ControlNet]] and T2I-Adapter add structural conditioning (edges, depth, pose, semantic maps) to a frozen LDM without modifying base weights, enabling precise spatial control over composition, camera angle, and lighting.
  - #### Video Generation
    - [[Video Generation]] extensions (VideoLDM, AnimateDiff, Stable Video Diffusion) insert temporal attention layers into the U-Net to model inter-frame consistency, enabling text-to-video and image-to-video synthesis at practical compute.
  - #### Audio & Multimodal Generation
    - AudioLDM and AudioLDM2 apply the latent diffusion framework to mel-spectrogram latents, enabling text-to-audio and music generation.
    - 3D shape generation (Shap-E, Wonder3D) maps point clouds or NeRF parameters into latent spaces amenable to diffusion sampling.
  - #### Medical & Scientific Imaging
    - LDMs are applied to MRI super-resolution, histopathology synthesis, and molecular structure generation, where the compute savings are critical for high-resolution 3D volumes.

- ### Relationships
  - partOf:: [[Diffusion Model]]
  - requires:: [[Variational Autoencoder]]
  - requires:: [[U-Net]]
  - requires:: [[Cross-Attention]]
  - hasPart:: [[Encoder-Decoder]]
  - hasPart:: [[Denoising Score Matching]]
  - hasPart:: [[Noise Schedule]]
  - enables:: [[Text-to-Image]]
  - enables:: [[Image Generation]]
  - enables:: [[Image Inpainting]]
  - enables:: [[Image-to-Image Translation]]
  - enables:: [[Video Generation]]
  - uses:: [[CLIP]]
  - uses:: [[DDIM Sampling]]
  - uses:: [[Classifier-Free Guidance]]
  - uses:: [[Low-Rank Adaptation]]
  - implements:: [[Score-Based Generative Model]]
  - contrastsWith:: [[Generative Adversarial Network]]
  - contrastsWith:: [[Normalising Flow]]
  - relatedTo:: [[Generative Model]]
  - relatedTo:: [[Latent Space]]
  - relatedTo:: [[Transformer]]
  - relatedTo:: [[Foundation Model]]
  - bridges-to:: [[AR Content Creation]]
  - bridges-to:: [[Digital Twin]]

- ### Notable Implementations & Ecosystem
  - **[[Stable Diffusion]]** — open-source LDM by Stability AI (based on the CompVis/Runway research codebase), comprising SD 1.x, 2.x, SDXL, and SD3 variants with progressively improved VAEs and backbone capacities.
  - **DALL-E 3** (OpenAI) — proprietary LDM with improved caption fidelity via recaptioning pipeline.
  - **Midjourney** — proprietary diffusion service known for artistic quality; internal architecture believed to be LDM-based.
  - **Adobe Firefly** — commercially safe LDM trained exclusively on licensed imagery, integrated into Creative Cloud.
  - **Imagen 3** (Google DeepMind) — cascaded pixel and latent diffusion with strong text rendering.
  - **ControlNet** — seminal adapter for structural conditioning of frozen LDMs.
  - **AnimateDiff** — temporal attention adapter converting image LDMs to video generators.
  - **InvokeAI, ComfyUI, Automatic1111** — open-source inference and workflow UIs building on [[Stable Diffusion]] and the LDM ecosystem.

- ### Standards & Context
  - No formal ISO/IEEE standard governs LDM architectures; the field moves primarily through academic preprints (arXiv cs.CV) and open-source releases.
  - Responsible-use considerations include watermarking generated content (C2PA provenance standards), detecting AI-generated imagery, and preventing generation of CSAM or other harmful content through safety filters (NSFW classifiers, prompt filtering).
  - The EU AI Act (2024) classifies general-purpose AI models capable of generating synthetic media as "general-purpose AI with systemic risk" above a compute threshold, imposing transparency and incident-reporting obligations.
  - [[Foundation Model]] governance frameworks (e.g. NIST AI RMF) increasingly apply to large-scale LDMs deployed as platforms.

- ### Provenance
  - sources:: Rombach et al. (2022) "High-Resolution Image Synthesis with Latent Diffusion Models"; Ho et al. (2020) "Denoising Diffusion Probabilistic Models"; Song et al. (2021) "Score-Based Generative Modeling through SDEs"
  - updated:: 2026-06-13
