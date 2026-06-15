public:: true

# Comfy Ui

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:comfy-ui",
  "@type": "Page",
  "title": "Comfy Ui",
  "vc:slug": "comfy-ui",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:comfy-ui",
  "@type": "Class",
  "label": "Comfy Ui",
  "definition": "ComfyUI is an open-source, node-graph based interface for building and executing generative-AI image and video pipelines, most commonly around diffusion models such as Stable Diffusion. Users assemble workflows by wiring together nodes for model loading, sampling, conditioning and post-processing, giving fine-grained control over the generation graph. Its modular design supports extensions, custom nodes and reproducible, shareable workflows.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-ai",
      "label": "Generative AI"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:checkpoint-model",
        "label": "Checkpoint Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stable-diffusion",
        "label": "Stable Diffusion"
      },
      {
        "@id": "urn:ngm:class:latent-diffusion",
        "label": "Latent Diffusion"
      },
      {
        "@id": "urn:ngm:class:node-graph",
        "label": "Node Graph"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      },
      {
        "@id": "urn:ngm:class:image-synthesis",
        "label": "Image Synthesis"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:control-net",
        "label": "ControlNet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:workflow-automation",
        "label": "Workflow Automation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
      },
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      },
      {
        "@id": "urn:ngm:class:inpainting",
        "label": "Inpainting"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Comfy Ui]] is an [[Open Source Software]] [[Node Graph]] for composing [[Diffusion Model]] pipelines, a [[Generative AI]] tool that drives [[Image Generation]] with [[Stable Diffusion]].
- ### Overview
  - ComfyUI represents a generation pipeline as a directed graph of nodes for loading models, encoding prompts, sampling latents and decoding images.
  - The explicit graph exposes every stage, giving advanced users precise control over conditioning, sampling schedules and post-processing.
  - Workflows are serialisable, so a complete pipeline can be saved, shared and reproduced exactly.
  - A rich ecosystem of custom nodes extends it to video, upscaling, ControlNet conditioning and animation.
- ### Mechanisms
  - Node-graph editor wiring inputs and outputs between processing stages.
  - Checkpoint, VAE and LoRA loader nodes for model components.
  - Sampler nodes implementing diffusion denoising schedules.
  - Conditioning nodes for prompts, ControlNet and image-to-image guidance.
  - Workflow serialisation enabling reproducible, shareable graphs.
- ### Applications
  - Advanced text-to-image and image-to-image generation with fine control.
  - Inpainting, outpainting and ControlNet-guided composition.
  - Batch and automated generation pipelines for production art.
  - Experimentation with custom samplers, models and post-processing chains.
- ### Relationships
  - partOf:: [[Generative AI]]
  - requires:: [[Diffusion Model]]
  - requires:: [[Checkpoint Model]]
  - uses:: [[Stable Diffusion]]
  - uses:: [[Latent Diffusion]]
  - uses:: [[Node Graph]]
  - enables:: [[Image Generation]]
  - enables:: [[Image Synthesis]]
  - supports:: [[Prompt Engineering]]
  - supports:: [[ControlNet]]
  - implements:: [[Workflow Automation]]
  - bridgesTo:: [[User Interface]]
  - bridgesTo:: [[Open Source Software]]
  - relatedTo:: [[Generative Model]]
  - relatedTo:: [[Inpainting]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
