
The generation of images from models or descriptions rather than direct capture, including rendering from scene data and machine learning models that produce images from learned distributions. Encompasses classical computer graphics rendering, generative adversarial networks, diffusion models, and other learned generative approaches conditioned on text, semantic maps, or latent codes.

- ### Semantic Classification

- ### Content
  - Image synthesis covers techniques that produce images programmatically, ranging from classical computer graphics rendering of geometric scenes to learned generative models that sample new images from a distribution fitted to training data. Modern approaches include generative adversarial networks and diffusion models.
  - The field underpins applications such as content creation, data augmentation, simulation and visual effects. Quality is assessed by fidelity, diversity and controllability, and recent learned methods allow synthesis conditioned on text or other inputs.

- ### Current Landscape (2026)
  - The architectural centre of gravity has shifted decisively from U-Net latent diffusion to transformer backbones (MMDiT/DiT) trained with flow matching and paired with LLM-grade text encoders; Black Forest Labs' FLUX.2 (released 25 November 2025) exemplifies this, a 32B rectified-flow transformer coupling a Mistral-3 24B vision-language model with the flow-matching decoder and shipping in five tiers ([max], [pro], [flex], [dev], [klein]) spanning API-only flagships to Apache-2.0 sub-second consumer models.
  - Frontier generation has bifurcated into pixel-fidelity flow-matching systems and reasoning-led multimodal systems: Google DeepMind's Nano Banana line moved image generation inside the Gemini family, with Nano Banana Pro (Gemini 3 Pro Image, 20 November 2025) that "thinks before it draws" and Nano Banana 2 (gemini-3.1-flash-image, 26 February 2026) delivering up to 4K output; Google is retiring the standalone Imagen 4 line on 17 August 2026 in favour of these.
  - OpenAI completed the pivot away from standalone DALL-E: native GPT-4o image generation launched 25 March 2025, gpt-image-1 reached the API in April 2025, GPT Image 2 shipped 21 April 2026, and the legacy DALL-E 2/3 API snapshots were retired on 12 May 2026.
  - Open-weight scaling has intensified, with Alibaba's Qwen-Image (~20-28B) topping public GenEval/DPG-Bench leaderboards, Tongyi-MAI's compact bilingual Z-Image-Turbo (6B, single-GPU), and Ideogram 4 (June 2026) positioned as a frontier-grade open-weight text-to-image foundation model; Stable Diffusion 3.5 (October 2024, MMDiT) remains Stability AI's last confirmed release.
  - Research frontiers are moving beyond the VAE: representation autoencoders (RAEs) are emerging as a simpler, faster-converging foundation than VAEs for large-scale diffusion transformers, and unified architectures increasingly fuse text-to-image, editing and multi-reference (up to 10 reference images) generation in a single model.
  - Provenance and disclosure have become hard regulatory constraints rather than voluntary practice: California SB 942 (AI Transparency Act) took effect 1 January 2026, and EU AI Act Article 50(2) transparency obligations become enforceable on 2 August 2026 (with a marking grace period to 2 December 2026 for pre-existing systems), requiring machine-readable AI-origin marking.
  - The industry has converged on a two-layer technical stack to satisfy these mandates: C2PA Content Credentials (ratified as ISO/IEC 22144, named by example in the EU Commission's draft Code of Practice) for cryptographically signed provenance manifests, complemented by imperceptible watermarking such as Google's SynthID; the EU's second-draft Code (5 March 2026) also introduces a standardised EU AI Icon and preservation duties that prohibit stripping existing metadata.
  - Open challenges as of 2026 include watermark and metadata robustness (screenshots, compression and format conversion routinely strip C2PA manifests), reliable free public detection tooling required by regulators, and closing the gap in text rendering, factual/world-knowledge grounding and multi-subject character consistency across long editing chains.

- ### References
  - 1. DevToolLab (2026). Midjourney vs GPT Image 2 vs Nano Banana 2 vs Flux: Best AI Image Generators. https://devtoollab.com/blog/best-ai-image-generators
  - 2. BentoML (2026). The Best Open-Source Image Generation Models in 2026. https://www.bentoml.com/blog/a-guide-to-open-source-image-generation-models
  - 3. Robison, G. (2025). State of the Art in Neural Image Synthesis: A Comprehensive Technical Analysis of FLUX.2. https://gregrobison.medium.com/state-of-the-art-in-neural-image-synthesis-a-comprehensive-technical-analysis-of-flux-2-c8c6df71512e
  - 4. European Commission (2026). Code of Practice on Transparency of AI-generated Content. https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
  - 5. Institute of Product Management (2026). The PM's Guide to C2PA and SynthID. https://www.institutepm.com/knowledge-hub/ai-content-provenance-watermarking

- ### Provenance

