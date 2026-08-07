public:: true

# Stable Diffusion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:03e9473b368f280ab91ca460049294a326228f1fa85c11dccc35564532a7d903",
  "@type": "Page",
  "vc:slug": "stable-diffusion",
  "title": "Stable Diffusion",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:diffusion-model",
      "vc:label": "Diffusion Model"
    },
    {
      "@id": "urn:visionflow:linked:latent-diffusion",
      "vc:label": "Latent Diffusion"
    },
    {
      "@id": "urn:visionflow:linked:text-to-image-generation",
      "vc:label": "Text-to-Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:automatic1111",
      "vc:label": "Automatic1111"
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
  "@id": "urn:ngm:class:stable-diffusion",
  "@type": "Class",
  "label": "Stable Diffusion",
  "definition": "An open-weights family of latent diffusion models for text-to-image generation, first released by Stability AI, CompVis, and Runway in August 2022, which performs iterative denoising in a compressed VAE latent space conditioned on CLIP text embeddings, making photorealistic and stylised image synthesis feasible on consumer GPUs and seeding a vast open ecosystem of fine-tunes, LoRAs, and tooling.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:diffusion-model",
    "label": "Diffusion Model"
  },
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:latent-diffusion",
        "label": "Latent Diffusion"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:text-to-image-generation",
        "label": "Text-to-Image Generation"
      },
      {
        "@id": "urn:ngm:class:concept-art",
        "label": "Concept Art"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:automatic1111",
        "label": "Automatic1111"
      },
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
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
  - "An open-weights family of latent diffusion models for text-to-image generation, first released by Stability AI, CompVis, and Runway in August 2022, which performs iterative denoising in a compressed VAE latent space conditioned on CLIP text embeddings, making photorealistic and stylised image synthesis feasible on consumer GPUs and seeding a vast open ecosystem of fine-tunes, LoRAs, and tooling."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:StableDiffusion
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Diffusion Model]]
  - implements:: [[Latent Diffusion]]
  - enables:: [[Text-to-Image Generation]]
  - related-to:: [[Automatic1111]]

- ### Content

  ## Definition

  **Stable Diffusion** is the open-weights text-to-image model family that brought diffusion-based image synthesis to consumer hardware. Built on the [[Latent Diffusion]] architecture of Rombach et al. (CVPR 2022), it avoids the prohibitive cost of denoising in pixel space by first compressing images roughly 8× per side with a variational autoencoder, then running the iterative denoising process — a U-Net (later a diffusion transformer) predicting noise at each timestep — entirely in that latent space. Text conditioning enters through cross-attention over CLIP (later T5) embeddings of the prompt, and classifier-free guidance steers samples towards prompt fidelity.

  The August 2022 release of v1.4 under a permissive licence was a watershed for [[Generative AI]]: unlike closed contemporaries such as DALL-E 2 and Midjourney, anyone could download the ~860M-parameter checkpoint and generate 512×512 images on a single ~4 GB GPU. Successive versions — v1.5, v2.x, SDXL (2023, ~2.6B parameters, 1024×1024), SD3 and SD3.5 (2024, multimodal diffusion transformer with rectified flow) — improved resolution, prompt adherence, and typography, whilst the community built an enormous ecosystem around the weights: DreamBooth and LoRA fine-tuning, ControlNet spatial conditioning, textual inversion embeddings, and front-ends such as [[Automatic1111]] and ComfyUI.

  In this graph Stable Diffusion anchors the open image-generation cluster: it is the model that captioning systems such as BLIP-2 prepare training data for, the backbone that [[Concept Art]] workflows build upon, and the reference point against which proprietary text-to-image services are contrasted.

  ## Technical Details

  Core components of the classic (v1/v2/SDXL) architecture:

  - **VAE encoder/decoder**: maps 512×512×3 images to 64×64×4 latents and back; imperfect reconstruction is the source of characteristic fine-texture artefacts.
  - **Denoising U-Net**: residual blocks with self- and cross-attention at multiple resolutions; predicts ε (noise) or v-parameterisation targets across ~1,000 training timesteps.
  - **Text encoder**: CLIP ViT-L/14 (v1), OpenCLIP ViT-H (v2), dual encoders (SDXL); SD3 adds T5-XXL for long-prompt fidelity.
  - **Samplers**: DDIM, Euler ancestral, DPM-Solver++ and other ODE/SDE solvers reduce inference to 20–50 steps; distillation methods (LCM, SDXL Turbo, adversarial diffusion distillation) reach 1–4 steps for near-real-time generation.
  - **Guidance**: classifier-free guidance scales the difference between conditional and unconditional predictions, typically at scales 5–9.

  Fine-tuning practice ranges from full checkpoint training to parameter-efficient LoRA adapters of a few tens of megabytes, enabling per-style and per-subject customisation that closed models cannot match. The open ecosystem — Hugging Face Diffusers, Civitai model sharing, ControlNet, IP-Adapter — remains Stable Diffusion's decisive advantage, even as licensing tightened from SD3 onwards and successors such as FLUX (from the original research team at Black Forest Labs) compete for the open-weights community.

  ## Current Landscape

  - **Stable Diffusion 3.5 is the current SD line**: released October 2024 as a Multimodal Diffusion Transformer (MMDiT) with three fixed text encoders (dual CLIP + T5-XXL), it ships as 3.5 Large (~8.1B parameters), 3.5 Large Turbo (4-step distilled), and 3.5 Medium (~2.5B, added 29 October 2024); Stability AI deprecated the SD3.0 API on 17 April 2025 and auto-upgraded users to the 3.5 endpoints.
  - **Licensing**: SD3.5 is free for commercial use under roughly $1M annual revenue, with an enterprise licence required above that; users retain rights to generated outputs.
  - **FLUX has taken the open-weights frontier**: Black Forest Labs (the original latent-diffusion team) released FLUX.2 [dev], a 32B open-weight model with multi-reference support for up to 10 images, on 25 November 2025 — distinct from the earlier 12B FLUX.1 [dev] — with a cloud-only FLUX.2 [max] tier above it.
  - **SDXL endures as the ecosystem default**: despite newer models, SDXL retains the most mature LoRA and ControlNet tooling and runs comfortably on ~12GB consumer GPUs, making it the pragmatic open baseline in 2025–2026.
  - **Real-time generation**: adversarial-diffusion-distillation variants (SDXL Turbo) reach one-to-few-step synthesis, and SD3.5 Large runs in a few seconds on an RTX 4090.

  **Sources**:
  - https://stability.ai/news-updates/introducing-stable-diffusion-3-5
  - https://huggingface.co/stabilityai/stable-diffusion-3.5-large
  - https://platform.stability.ai/docs/release-notes
  - https://www.digitalapplied.com/blog/local-image-generation-flux-stable-diffusion-comfyui-2026
