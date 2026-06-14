public:: true
alias:: Classifier Free Guidance

# classifier-free guidance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2357c26d415fb946894daa60ac98ec65e9f86a56b04c5461c492744c22bde967",
  "@type": "Page",
  "vc:slug": "classifier-free-guidance",
  "title": "classifier-free guidance",
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
  "@id": "urn:ngm:class:classifier-free-guidance",
  "@type": "Class",
  "label": "Classifier-Free Guidance",
  "definition": "Classifier-Free Guidance (CFG) is a conditional generation technique for diffusion models that steers the denoising trajectory towards a specified condition by computing a weighted extrapolation between a conditional score estimate and an unconditional score estimate produced by the same single model. Unlike classifier guidance, which requires a separately trained differentiable classifier, CFG trains one network jointly on conditional and unconditional objectives by randomly replacing conditioning inputs with a null embedding during training. At inference, the guided score is: score_guided = score_unconditional + w * (score_conditional - score_unconditional), where w is the guidance scale hyperparameter controlling the trade-off between sample diversity and condition alignment. CFG has become the dominant conditioning mechanism across text-to-image, text-to-video, and audio generation systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "Ai Technique"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:latent-diffusion", "label": "Latent Diffusion"},
      {"@id": "urn:ngm:class:score-function", "label": "Score Function"},
      {"@id": "urn:ngm:class:null-conditioning", "label": "Null Conditioning"},
      {"@id": "urn:ngm:class:variational-autoencoder", "label": "Variational Autoencoder"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:text-to-image", "label": "Text-to-Image"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:text-to-video", "label": "Text-to-Video"},
      {"@id": "urn:ngm:class:audio-generation", "label": "Audio Generation"},
      {"@id": "urn:ngm:class:negative-prompting", "label": "Negative Prompting"},
      {"@id": "urn:ngm:class:prompt-adherence", "label": "Prompt Adherence"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:denoising-diffusion-probabilistic-model", "label": "Denoising Diffusion Probabilistic Model"},
      {"@id": "urn:ngm:class:guidance-scale", "label": "Guidance Scale"},
      {"@id": "urn:ngm:class:conditioning-signal", "label": "Conditioning Signal"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:classifier-guidance", "label": "Classifier Guidance"},
      {"@id": "urn:ngm:class:unconditional-generation", "label": "Unconditional Generation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:score-based-generative-model", "label": "Score-Based Generative Model"},
      {"@id": "urn:ngm:class:dropout-training", "label": "Dropout Training"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"},
      {"@id": "urn:ngm:class:stable-diffusion", "label": "Stable Diffusion"},
      {"@id": "urn:ngm:class:controlnet", "label": "ControlNet"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:sampling-algorithm", "label": "Sampling Algorithm"},
      {"@id": "urn:ngm:class:clip", "label": "CLIP"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"},
      {"@id": "urn:ngm:class:reward-model", "label": "Reward Model"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:cfg", "label": "CFG"},
    {"@id": "urn:ngm:class:guidance-without-a-classifier", "label": "Guidance Without a Classifier"}
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
  - Classifier-Free Guidance (CFG) is a conditional generation technique for [[Diffusion Model]]s that steers the denoising trajectory towards a specified condition by computing a weighted extrapolation between a conditional [[Score Function]] estimate and an unconditional score estimate produced by the same single neural network. Introduced by Jonathan Ho and Tim Salimans (2022), it eliminates the need for a separately trained [[Classifier Guidance]] network by jointly training one model on both conditional and unconditional objectives through random null-conditioning dropout. The [[Guidance Scale]] hyperparameter `w` linearly amplifies the difference between conditional and unconditional predictions, giving practitioners direct control over the trade-off between [[Prompt Adherence]] and sample diversity. CFG is now the foundational mechanism underlying virtually all production [[Text-to-Image]] and [[Text-to-Video]] systems.

- ### Overview
  - CFG solves a core challenge in [[Conditional Generation]]: how to strongly amplify a conditioning signal — such as a natural-language prompt encoded by [[CLIP]] or a T5 encoder — without training a separate differentiable classifier that is difficult to scale and prone to adversarial exploitation.
  - The mathematical insight is that score-based models (i.e., [[Denoising Diffusion Probabilistic Model]]s and [[Score-Based Generative Model]]s) learn the gradient of the log-probability density. The conditional score minus the unconditional score is equivalent to the gradient that a perfect Bayesian classifier would provide. CFG approximates this gradient implicitly using a single model, bypassing the need for an explicit classifier network.
  - At inference time the guided estimate is:
    - `score_guided(x, c) = score_unconditional(x) + w * (score_conditional(x, c) - score_unconditional(x))`
    - where `c` is the conditioning input, `x` is the current noisy sample, and `w ≥ 1` is the guidance scale.
  - The method requires only one forward pass per condition-pair evaluation (or two forward passes if batched separately), making it computationally efficient within [[Latent Diffusion]] architectures.
  - CFG has become **established** (not merely emerging) as the primary conditioning mechanism in [[Stable Diffusion]], Imagen, DALL-E 2, DeepFloyd IF, Sora-class video models, and [[Audio Generation]] systems such as AudioLDM and MusicLDM.

- ### Key Mechanisms
  - **Null Conditioning Dropout**
    - During training, each conditioning input `c` is replaced with a fixed null embedding (zero vector or a learnable padding token) with probability `p`, typically 10–20%.
    - This causes the model to simultaneously learn `p(x|c)` (conditional) and `p(x)` (unconditional marginal), compressing both into a single weight set.
    - The [[Dropout Training]] analogy is useful: null-conditioning acts as structured dropout on the conditioning pathway.
  - **Guided Score Extrapolation**
    - The composite guided score is a linear extrapolation *beyond* the conditional score in the direction away from the unconditional score.
    - `w = 1` recovers pure conditional sampling; `w = 0` gives unconditional sampling; `w > 1` amplifies condition adherence at the cost of reduced diversity.
    - This extrapolation moves the effective sampling distribution towards higher-likelihood regions under the conditional model, sharpening prompt alignment.
  - **Guidance Scale (`w`) Hyperparameter**
    - Typical values range from 5–12 for text-to-image tasks; excessively high values (>15–20) cause over-saturation, colour artefacts, and mode collapse.
    - [[Stable Diffusion]] defaults commonly use `w = 7.5`; many video generation models use lower values (3–7) to preserve temporal coherence.
    - Dynamic or adaptive guidance scales (varying `w` across the [[Sampling Algorithm]] timestep schedule) have been explored to improve quality at lower compute.
  - **Latent-Space Application**
    - In [[Latent Diffusion]] architectures (e.g. [[Stable Diffusion]]), CFG operates on the compressed latent representation produced by a [[Variational Autoencoder]], not on raw pixel tensors.
    - This reduces the dimensionality of the denoising problem by factors of 4–8x per spatial axis, enabling CFG to run efficiently on consumer GPUs.
  - **Negative Prompting**
    - A powerful extension replaces the null embedding with an explicit negative conditioning input `c_neg` (e.g., "blurry, low quality, distorted").
    - The formula becomes: `score_guided = score(x, c_neg) + w * (score(x, c_pos) - score(x, c_neg))`
    - This steers generation away from unwanted attributes, giving rise to [[Negative Prompting]] as a [[Prompt Engineering]] discipline.

- ### Applications and Use Cases
  - **Text-to-Image Generation**
    - All major open-source and commercial text-to-image systems ([[Stable Diffusion]], DALL-E 2, Imagen, Midjourney-class systems) use CFG as their primary conditioning mechanism.
    - Prompt adherence quality correlates directly with CFG scale choice; practitioners treat it as a primary [[Prompt Engineering]] lever.
  - **Text-to-Video Generation**
    - CFG has been extended to temporal diffusion models; Sora-class systems and open models (CogVideo, AnimateDiff) apply CFG to spatiotemporal latent representations.
    - Lower guidance scales are common to preserve motion coherence across frames.
  - **Audio and Music Generation**
    - AudioLDM, MusicLDM, and AudioCraft-derived models apply CFG to spectral or waveform latent spaces, conditioning on text descriptions or MIDI.
    - [[Audio Generation]] quality shows similar guidance-scale trade-offs as image generation.
  - **Spatial Computing and AR/VR Asset Generation**
    - CFG-enabled [[Text-to-Image]] pipelines feed [[Spatial Computing]] workflows for generating textures, skyboxes, and 3D asset previews via diffusion-based 3D methods (e.g. DreamFusion, Magic3D).
    - Real-time guidance-scale adjustment is explored for interactive creative tools in [[Metaverse]] content creation.
  - **Scientific Image Synthesis**
    - CFG-conditioned diffusion models are used in medical imaging (MRI super-resolution, histopathology augmentation) and molecular generation, where conditioning on structural or spectral features is critical.
  - **Reward-Guided Refinement**
    - CFG is combined with [[Reward Model]] signals from [[Reinforcement Learning from Human Feedback]] pipelines (e.g., RLHF-Diffusion, DPO-Diffusion) to align generative outputs with human aesthetic preferences at inference time.

- ### Relationships
  - uses:: [[Diffusion Model]]
  - uses:: [[Latent Diffusion]]
  - uses:: [[Score Function]]
  - uses:: [[Null Conditioning]]
  - uses:: [[Variational Autoencoder]]
  - enables:: [[Text-to-Image]]
  - enables:: [[Image Generation]]
  - enables:: [[Text-to-Video]]
  - enables:: [[Audio Generation]]
  - enables:: [[Negative Prompting]]
  - enables:: [[Prompt Adherence]]
  - requires:: [[Denoising Diffusion Probabilistic Model]]
  - requires:: [[Guidance Scale]]
  - requires:: [[Conditioning Signal]]
  - dependsOn:: [[Score-Based Generative Model]]
  - dependsOn:: [[Dropout Training]]
  - contrastsWith:: [[Classifier Guidance]]
  - contrastsWith:: [[Unconditional Generation]]
  - relatedTo:: [[Generative Model]]
  - relatedTo:: [[Stable Diffusion]]
  - relatedTo:: [[ControlNet]]
  - relatedTo:: [[Prompt Engineering]]
  - relatedTo:: [[Sampling Algorithm]]
  - relatedTo:: [[CLIP]]
  - partOf:: [[Generative AI]]
  - bridges-to:: [[Reinforcement Learning from Human Feedback]]
  - bridges-to:: [[Reward Model]]

- ### Standards and Context
  - CFG was formalised in the paper "Classifier-Free Diffusion Guidance" by Jonathan Ho and Tim Salimans (NeurIPS 2021 Workshop on Deep Generative Models, arXiv:2207.12598, 2022).
  - The technique builds on [[Score-Based Generative Model]] theory established by Song et al. (NCSN, 2019) and Ho et al. (DDPM, 2020).
  - [[Stable Diffusion]] (CompVis / Stability AI, 2022) popularised CFG at scale, embedding it as a first-class inference parameter exposed in every major [[Diffusion Model]] inference library (Hugging Face Diffusers, ComfyUI, A1111 WebUI).
  - No formal standards body governs CFG; it is maintained as an open algorithmic convention documented in open-source frameworks.
  - The concept relates to Bayesian inference and [[Conditional Generation]] theory more broadly, placing it within established machine learning literature rather than emerging speculation.
  - Integration with [[ControlNet]] (Zhang et al., 2023) extended CFG to spatial conditioning inputs (depth maps, edge maps, pose skeletons) without modifying the core CFG framework.

- ### Provenance
  - sources:: Ho & Salimans (2022) arXiv:2207.12598; Rombach et al. (2022) Latent Diffusion Models; Zhang et al. (2023) ControlNet
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
