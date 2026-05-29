- ### Definition
  - SDXL is Stability AI's flagship open-weight text-to-image model, building on the [[Latent Diffusion]] paradigm with a substantially larger UNet operating in a compressed latent space decoded by a high-fidelity [[VAE]]. Dual [[CLIP Encoder]] conditioning — using both OpenAI CLIP ViT-L and OpenCLIP ViT-bigG — improves prompt adherence, while [[Classifier-Free Guidance]] remains the primary sampling strategy. The optional refiner stage, a separate diffusion model, processes low-noise timesteps to sharpen fine details.

- ### Relationships
  - SDXL is a direct successor to [[Stable Diffusion]] v1.x/v2.x with a parameter count roughly ten times larger. It powers downstream techniques including [[LoRA Fine-Tuning]] for personalisation, and its checkpoints are distributed through the [[Hugging Face Diffusers]] library and [[Automatic1111]] interfaces. The [[Diffusion Model]] framework underpins its training and sampling dynamics.

- ### Content
  - Stability AI published the SDXL 0.9 beta in June 2023 and the 1.0 release in July 2023, alongside a research paper detailing architectural choices. The shift from 512×512 to 1024×1024 native resolution demanded new training recipes including multi-aspect-ratio bucketing and micro-conditioning on original image size and crop coordinates to reduce artefacts at non-square aspect ratios.

  - The base UNet in SDXL uses a modified architecture with transformer blocks at higher resolutions and a much larger model capacity than SD 1.5 or SD 2.x. The text conditioning stack concatenates embeddings from two independently trained CLIP models, giving richer semantic coverage. Sampling algorithms including DPM-Solver++, DDIM, and Euler are all compatible with the standard latent diffusion inference pipeline.

  - The open-weights release catalysed a large ecosystem of fine-tuned checkpoints, LoRA adaptors, ControlNet ports, and ComfyUI workflows. Platforms such as Automatic1111 and ComfyUI added SDXL support within weeks of release, and Hugging Face hosted hundreds of community fine-tunes within months. SDXL Turbo (a distilled variant using Adversarial Diffusion Distillation) later enabled single-step generation.

  - By 2024–2025 SDXL remains widely deployed in commercial and hobbyist contexts despite newer models (SD3, Flux.1). Its permissive licence (with some restrictions) and large community mean it is still the baseline for many fine-tuning and research pipelines. Hardware requirements — roughly 8 GB VRAM for inference at full resolution — have become feasible on consumer GPUs, sustaining adoption.