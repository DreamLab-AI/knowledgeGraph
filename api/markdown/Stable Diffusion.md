An open-weights family of latent diffusion models for text-to-image generation, first released by Stability AI, CompVis, and Runway in August 2022, which performs iterative denoising in a compressed VAE latent space conditioned on CLIP text embeddings, making photorealistic and stylised image synthesis feasible on consumer GPUs and seeding a vast open ecosystem of fine-tunes, LoRAs, and tooling.

### Semantic Classification

### Content

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

## Merged from Stable Diffusion Image Model (needs reconciliation)
Stable Diffusion is an open-source latent diffusion model developed by Stability AI in collaboration with CompVis and Runway, released in 2022, capable of generating high-quality images from text prompts. It operates in a compressed latent space rather than pixel space, dramatically reducing computational requirements compared to earlier diffusion models. The model supports text-to-image, image-to-image, and inpainting tasks, and has become the foundation for a large ecosystem of fine-tuned variants and extension tools.

### Content

- Stable Diffusion was publicly released in August 2022 and represented a watershed moment for generative AI accessibility. Unlike DALL-E 2, which required cloud access and remained closed, Stable Diffusion shipped weights under a permissive licence, allowing researchers, developers, and artists to run the model locally on consumer GPUs with as little as 4 GB VRAM. This openness catalysed an explosion of community tooling, fine-tuned variants, and specialised checkpoints.
- Architecturally, Stable Diffusion is a latent diffusion model (LDM). A variational autoencoder (VAE) compresses full-resolution images into a lower-dimensional latent space; a U-Net denoiser then operates in this compact space over a series of diffusion timesteps; and a CLIP text encoder provides cross-attention conditioning from natural-language prompts. Working in latent space reduces memory footprint by roughly four times compared to pixel-space diffusion at equivalent resolution.
- The v1.x series (512×512 pixels) was followed by v2.x (768×768) and then Stable Diffusion XL (SDXL, 1024×1024), each improving fidelity and prompt adherence. SDXL introduced a two-stage pipeline combining a base model and a refinement model. Stable Diffusion 3 (2024) adopted a Multimodal Diffusion Transformer (MMDiT) architecture, further improving text rendering and compositional accuracy.
- The open-weights ecosystem spawned critical extensions: ControlNet adds spatial conditioning via edge maps, depth maps, and pose skeletons; IP-Adapter enables reference-image conditioning without retraining; fine-tuning methods such as DreamBooth and LoRA personalise models on small datasets. Community platforms such as Civitai host thousands of specialised checkpoints targeting specific artistic styles, characters, or subject domains.
- Stable Diffusion's impact extends beyond art creation into commercial applications including advertising, game asset production, and synthetic data generation for training other models. It has also prompted policy debates around copyright, model provenance, and consent for training data, making it a reference point in discussions of AI governance and responsible AI deployment.

