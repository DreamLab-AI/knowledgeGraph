public:: true

# Civitai
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:civitai",
  "@type": "Page",
  "vc:slug": "civitai",
  "title": "Civitai",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:civitai",
  "@type": "Class",
  "label": "Civitai",
  "definition": "Civitai is a community-driven online platform for sharing, discovering, and downloading fine-tuned generative AI image models, primarily Stable Diffusion checkpoints, LoRA adaptors, embeddings, and VAEs, enabling practitioners and artists to distribute specialised model weights trained on specific styles, characters, or concepts without requiring the infrastructure overhead of operating their own model registry. It functions as both a social network for AI artists and a technical marketplace for model artefacts.",
  "domain": "media",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:creative-ai", "label": "Creative AI"},
      {"@id": "urn:ngm:class:text-to-image", "label": "Text-to-Image"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"},
      {"@id": "urn:ngm:class:content-moderation", "label": "Content Moderation"},
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Civitai is a specialised hosting platform and social community centred on [[Diffusion Model]] artefacts produced through [[Fine Tuning]] of base generative models, particularly the Stable Diffusion family. Users upload and download model weights in multiple formats — CKPT, SafeTensors, LoRA, LyCORIS, textual inversion embeddings — alongside sample images, trigger word documentation, and recommended generation parameters. The platform enables [[Creative AI]] practitioners to build on one another's work without requiring cloud compute for model discovery, functioning as the dominant open-source registry for community [[Image Generation]] model specialisation.

- ### Relationships
  - Civitai occupies the model distribution layer of the [[Generative AI]] ecosystem, sitting between base model providers (Stability AI, Black Forest Labs) and end-user generation tools. Its catalogue of [[Diffusion Model]] variants powers [[Text-to-Image]] workflows executed locally via ComfyUI, Automatic1111, or cloud-based generation APIs. The platform's model sharing philosophy aligns with [[Open-Source AI]] norms, though its content policies around [[Content Moderation]] — particularly regarding adult content — have been contested. [[Generative Model]] diversity is amplified through community [[Fine Tuning]] contribution.

- ### Content
  - Civitai was founded in November 2022, shortly after the open-source release of Stable Diffusion 1.4 by Stability AI, which for the first time gave the general public access to a capable text-to-image model whose weights could be legally downloaded and fine-tuned on consumer hardware. The platform responded to an immediate community need: practitioners fine-tuning models for specific aesthetics, fictional characters, or real subjects had nowhere to share their work beyond Discord servers and Google Drive links. Civitai launched a structured repository with model cards, version tracking, and user review systems that rapidly became the de facto standard for Stable Diffusion model distribution.

  - Technically, Civitai hosts multiple model types differentiated by their position in the generation pipeline: full checkpoints (merged base models with embedded fine-tuning), LoRA (Low-Rank Adaptation) files that modify a base model's behaviour by adding a low-rank weight delta applied at inference time, LyCORIS variants extending LoRA with additional decomposition strategies, textual inversion embeddings that encode new concepts as learned token vectors, and ControlNet models that condition generation on structural inputs such as depth maps or pose skeletons. The platform provides a structured API for programmatic model discovery and download, enabling integration with local generation UIs and cloud generation services. Model versioning tracks successive training runs, allowing users to evaluate improvement across iterations.

  - The Civitai community has grown to millions of registered users and hundreds of thousands of model uploads across styles ranging from photorealistic portraiture and anime aesthetics to architectural visualisation and product design. The platform monetises through a creator economy — users purchase "Buzz" credits used to compensate model creators and access early-release or premium models — supplemented by subscription tiers providing increased generation compute and storage. The model ecosystem feeds a large informal economy of commercial image generation services that offer fine-tuned style packs on top of Civitai-sourced models.

  - In 2024–2025, Civitai expanded to host models for video generation (including Wan and Hunyuan Video derivatives), audio synthesis, and 3D asset generation, reflecting the broadening of open-source generative AI beyond still images. Content moderation challenges have intensified, with the platform navigating jurisdictional differences in regulation around AI-generated adult content and deepfakes, leading to geo-restricted content tiers and artist opt-out registries for content trained on copyrighted work. The platform's scale makes it a key indicator of community adoption trends for new open-source model architectures — SDXL, Flux, and Stable Diffusion 3 releases all produced rapid waves of community fine-tunes appearing on Civitai within days of base model publication.

