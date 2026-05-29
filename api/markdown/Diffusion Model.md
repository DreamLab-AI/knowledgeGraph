```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:diffusion-model",
  "title": "Diffusion Model",
  "vc:slug": "diffusion-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:diffusion-model",
  "@type": "Class",
  "label": "Diffusion Model",
  "definition": "A Diffusion Model is a class of generative model that learns to synthesise data by reversing a gradual noising process. During training the model observes how data is progressively corrupted by Gaussian noise; at inference time it iteratively denoises a random sample, guided by a learned score function, to produce high-fidelity outputs such as images, audio, or video. Diffusion models underpin systems like Stable Diffusion and DALL-E 3.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "quality": 0.3,
  "sameAs": [
    {
      "@id": "urn:ngm:class:diffusion-models",
      "label": "Diffusion Models"
    }
  ],
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:text-to-image", "label": "Text-to-Image"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"}
    ]
  }
}
```

## Diffusion Model

A Diffusion Model is a class of generative model that learns to synthesise data by reversing a gradual noising process. During training the model observes how data is progressively corrupted by Gaussian noise; at inference time it iteratively denoises a random sample, guided by a learned score function, to produce high-fidelity outputs such as images, audio, or video. Diffusion models underpin systems like Stable Diffusion and DALL-E 3.

### Relationships
  - enables:: [[Image Generation]]
  - enables:: [[Text-to-Image]]
  - uses:: [[Training Data]]
  - uses:: [[Neural Network]]
  - contrastsWith:: [[Generative Adversarial Network]]
