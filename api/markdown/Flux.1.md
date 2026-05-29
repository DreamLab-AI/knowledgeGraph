public:: true

# Flux.1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:flux-1",
  "@type": "Page",
  "vc:slug": "flux-1",
  "title": "Flux.1",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:individual:flux-1",
  "@type": "Individual",
  "label": "Flux.1",
  "definition": "Flux.1 is a family of open-weight text-to-image generative models developed by Black Forest Labs, founded by former Stability AI researchers including Robin Rombach, the co-creator of Latent Diffusion. Released in August 2024, Flux.1 employs a hybrid architecture combining multimodal and parallel diffusion transformer (DiT) blocks, achieving state-of-the-art image quality and prompt adherence that surpasses earlier diffusion models on benchmarks such as GenEval and T2I-CompBench. The family offers three variants — Flux.1 [pro], Flux.1 [dev], and Flux.1 [schnell] — spanning commercial API, open-weights research, and fast inference use cases respectively.",
  "domain": "ai",
  "maturity": "established",
  "instanceOf": [{"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:text-to-image", "label": "Text-to-Image"},
      {"@id": "urn:ngm:class:diffusion-models", "label": "Diffusion Models"},
      {"@id": "urn:ngm:class:latent-diffusion", "label": "Latent Diffusion"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:individual:stable-diffusion", "label": "Stable Diffusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:inpainting", "label": "Inpainting"},
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-network-architecture", "label": "Neural Network Architecture"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:lo-ra-do-ra-etc", "label": "LoRA DoRA etc"},
      {"@id": "urn:ngm:class:comfy-ui-workflows", "label": "ComfyUI Workflows"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Flux.1 is a family of state-of-the-art open-weight text-to-image diffusion transformer models from Black Forest Labs, offering best-in-class prompt adherence, photorealism, and typographic accuracy as of mid-2024.

- ### Relationships
  - Flux.1 is a direct successor lineage to [[Stable Diffusion]], sharing key researchers. It operates within the [[Latent Diffusion]] paradigm and produces [[Text-to-Image]] outputs. Integration with [[ComfyUI Workflows]] and support for [[LoRA DoRA etc]] fine-tuning make it practically significant to the [[Open-Source AI]] ecosystem. The [[Inpainting]] capability extends its utility beyond simple generation to editing workflows.

- ### Content
  - Flux.1 was released in August 2024 by Black Forest Labs (BFL), a startup founded by Robin Rombach, Andreas Blattmann, and other core researchers behind the original Latent Diffusion paper and Stable Diffusion. The name references magnetic flux — a nod to the flow-matching training objective at the model's core — and represents a deliberate architectural departure from the U-Net backbone used in earlier diffusion models.

  - Architecturally, Flux.1 employs a transformer-based design with two types of transformer blocks: "double stream" multimodal blocks that jointly process image and text tokens with full cross-attention, and "single stream" blocks that process a concatenated image-text sequence more efficiently. This hybrid design, which BFL terms a "multimodal diffusion transformer" (MMDiT+), builds on the DiT (Diffusion Transformer) paradigm introduced by Peebles and Xie (2023). A key addition is the use of rotary positional embeddings (RoPE) across both spatial and sequential dimensions, improving generalisation to unusual aspect ratios and resolutions. The model has 12 billion parameters in its largest configuration.

  - The three model variants address different deployment contexts. Flux.1 [pro] is a closed commercial API offering the highest quality, accessible via Replicate, fal.ai, and the BFL API. Flux.1 [dev] is released under a non-commercial open-weights licence (allowing research and personal use) with quality close to [pro]. Flux.1 [schnell] is released under Apache 2.0, has distilled weights optimised for four-step inference, and is fully open for commercial use. On standard image generation benchmarks (GenEval, T2I-CompBench, ELO arena ratings), Flux.1 [pro] outperformed Midjourney v6, DALL-E 3, and Stable Diffusion 3 at the time of release, particularly in text rendering within images — a historically weak point for diffusion models.

  - By late 2024, Flux.1 had been integrated into all major open-source inference stacks including ComfyUI, Automatic1111 (Forge), and Diffusers (Hugging Face). The LoRA fine-tuning ecosystem grew rapidly, with civitai.com hosting thousands of subject-specific and style LoRAs trained on Flux.1 [dev]. Adobe Firefly and other commercial platforms licensed the [pro] API. In 2025, BFL released Flux.1 Tools — a suite of specialised variants including Flux.1 Fill (inpainting/outpainting), Flux.1 Depth (depth-conditioned generation), Flux.1 Canny (edge-conditioned generation), and Flux.1 Redux (image variation). These positioned Flux.1 not as a single model but as a platform for conditioned image synthesis, broadening its applications in product visualisation, digital fashion, and virtual production.

  - The significance of Flux.1 lies in demonstrating that transformer architectures can match or surpass convolutional U-Net designs for image generation at scale, validating the architectural direction initiated by DiT and subsequently adopted in Stable Diffusion 3. The model's release strategy — offering open, research, and commercial tiers simultaneously — has become a reference pattern for responsible open-weight model release in the generative AI space.
