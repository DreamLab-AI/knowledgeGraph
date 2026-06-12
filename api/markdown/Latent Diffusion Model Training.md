public:: true

elevatedFrom:: [[Stable Diffusion Training]]
# Latent Diffusion Model Training
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stable-diffusion-training",
  "@type": "Page",
  "vc:slug": "latent-diffusion-model-training",
  "title": "Latent Diffusion Model Training",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:latent-diffusion-model-training",
  "@type": "Class",
  "label": "Latent Diffusion Model Training",
  "definition": "Stable Diffusion training is the process of fitting a latent text-to-image diffusion model by teaching a denoising network to reverse a gradual noising process in a compressed latent space, conditioned on text embeddings. Operating in latent rather than pixel space sharply reduces compute and memory, while techniques such as fine-tuning, LoRA, and DreamBooth adapt a base model to new styles or subjects. It underpins much of open-weight generative image and video tooling.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:fast-ai", "label": "Fast.ai"},
      {"@id": "urn:ngm:class:proprietary-ai-video", "label": "Proprietary AI Video"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Stable Diffusion training is the procedure for fitting a latent text-to-image [[Generative Model]], teaching a denoiser to invert a noising process in a compressed latent space conditioned on text embeddings.
- ### Content
  - Working in latent space rather than pixels cuts compute and memory dramatically, making both full training and lightweight adaptation feasible on accessible hardware, a workflow popularised through educational efforts like [[Fast.ai]]. Fine-tuning methods such as LoRA and DreamBooth specialise base checkpoints to new subjects or styles, and the same diffusion training principles extend into [[Proprietary AI Video]] systems that generate temporally coherent frames.
