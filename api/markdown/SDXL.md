
SDXL (Stable Diffusion XL) is a large-scale latent diffusion model released by Stability AI in 2023, comprising a 3.5-billion-parameter UNet and an ensemble of two CLIP text encoders that condition image generation at native 1024×1024 resolution. It introduces a two-stage architecture — a base model followed by a refinement model — and supports advanced conditioning mechanisms including aesthetic scoring and crop coordinates.

- ### Content
  - Stability AI published the SDXL 0.9 beta in June 2023 and the 1.0 release in July 2023, alongside a research paper detailing architectural choices. The shift from 512×512 to 1024×1024 native resolution demanded new training recipes including multi-aspect-ratio bucketing and micro-conditioning on original image size and crop coordinates to reduce artefacts at non-square aspect ratios.

  - The base UNet in SDXL uses a modified architecture with transformer blocks at higher resolutions and a much larger model capacity than SD 1.5 or SD 2.x. The text conditioning stack concatenates embeddings from two independently trained CLIP models, giving richer semantic coverage. Sampling algorithms including DPM-Solver++, DDIM, and Euler are all compatible with the standard latent diffusion inference pipeline.

  - The open-weights release catalysed a large ecosystem of fine-tuned checkpoints, LoRA adaptors, ControlNet ports, and ComfyUI workflows. Platforms such as Automatic1111 and ComfyUI added SDXL support within weeks of release, and Hugging Face hosted hundreds of community fine-tunes within months. SDXL Turbo (a distilled variant using Adversarial Diffusion Distillation) later enabled single-step generation.

  - By 2024–2025 SDXL remains widely deployed in commercial and hobbyist contexts despite newer models (SD3, Flux.1). Its permissive licence (with some restrictions) and large community mean it is still the baseline for many fine-tuning and research pipelines. Hardware requirements — roughly 8 GB VRAM for inference at full resolution — have become feasible on consumer GPUs, sustaining adoption.

