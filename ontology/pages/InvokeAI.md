public:: true

# InvokeAI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:97fe57b39d3fcc9de63aa3cb7e79e0825426cb77032b8e498c36aaef732a9fcf",
  "@type": "Page",
  "vc:slug": "invoke-ai",
  "title": "InvokeAI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:stable-diffusion",
      "vc:label": "Stable Diffusion"
    },
    {
      "@id": "urn:visionflow:linked:text-to-image",
      "vc:label": "Text-to-Image"
    },
    {
      "@id": "urn:visionflow:linked:image-generation",
      "vc:label": "Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai",
      "vc:label": "Generative AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "InvokeAI"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:invoke-ai",
  "@type": "Class",
  "label": "InvokeAI",
  "definition": "InvokeAI is an open-source, locally-deployed application and toolkit for running latent diffusion models — principally Stable Diffusion and its derivatives — via a browser-based canvas interface, a node-based workflow editor, and a Python API. It provides professional-grade image synthesis capabilities including text-to-image, image-to-image, inpainting, outpainting, and ControlNet-guided generation without reliance on cloud-hosted services. The platform is designed for creative professionals and researchers who require reproducible, privacy-preserving, and customisable generative image workflows on consumer-grade GPU hardware. Its modular architecture supports community fine-tuned model variants, LoRA adapters, and textual inversion embeddings, making it a central hub in the open-source generative image ecosystem.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-ai",
      "label": "Generative AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:stable-diffusion-image-model",
        "label": "Stable Diffusion"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:python-runtime",
        "label": "Python Runtime"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:text-to-image",
        "label": "Text-to-Image"
      },
      {
        "@id": "urn:ngm:class:image-to-image",
        "label": "Image-to-Image"
      },
      {
        "@id": "urn:ngm:class:inpainting",
        "label": "Inpainting"
      },
      {
        "@id": "urn:ngm:class:outpainting",
        "label": "Outpainting"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Local Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:control-net",
        "label": "ControlNet"
      },
      {
        "@id": "urn:ngm:class:lora-adapter",
        "label": "LoRA Adapter"
      },
      {
        "@id": "urn:ngm:class:textual-inversion",
        "label": "Textual Inversion"
      },
      {
        "@id": "urn:ngm:class:text-encoder",
        "label": "CLIP Text Encoder"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:node-based-editor",
        "label": "Node-Based Workflow Editor"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:automatic1111",
        "label": "Automatic1111"
      },
      {
        "@id": "urn:ngm:class:midjourney-text-to-image-service",
        "label": "Midjourney"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      },
      {
        "@id": "urn:ngm:class:latent-diffusion",
        "label": "Latent Diffusion"
      },
      {
        "@id": "urn:ngm:class:open-source-ai",
        "label": "Open-Source AI"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:creative-tools",
        "label": "Creative AI Tools"
      },
      {
        "@id": "urn:ngm:class:digital-content-creation",
        "label": "Digital Content Creation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:invoke-stable-diffusion",
      "label": "Invoke Stable Diffusion"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:invoke-ai:03e43d7d9920",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:97fe57b39d3fcc9de63aa3cb7e79e0825426cb77032b8e498c36aaef732a9fcf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stable Diffusion Image Model]]",
      "resolved": "urn:visionflow:linked:stable-diffusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Text-to-Image]]",
      "resolved": "urn:visionflow:linked:text-to-image",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Generation]]",
      "resolved": "urn:visionflow:linked:image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative AI]]",
      "resolved": "urn:visionflow:linked:generative-ai",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - InvokeAI is a mature, open-source application stack for locally-deployed [[Latent Diffusion]] image synthesis, built around [[Stable Diffusion]] and its derivatives. It exposes a browser-based [[Unified Canvas]], a node-based [[Workflow Editor]], and a Python API, enabling [[Text-to-Image]], [[Image-to-Image]], [[Inpainting]], and [[Outpainting]] generation without cloud dependency. The platform is a central hub in the [[Open-Source AI]] ecosystem for creative practitioners who require reproducible, privacy-preserving, and hardware-controlled [[Generative AI]] workflows.

- ### Overview
  - InvokeAI emerged from community efforts in late 2022 to provide a well-structured, production-quality interface for [[Stable Diffusion]] after the model's public release by [[Stability AI]].
  - Unlike purely research-oriented tools, InvokeAI targets creative professionals — concept artists, illustrators, game developers, and VFX practitioners — who need reliable local tooling.
  - It distinguishes itself from [[AUTOMATIC1111]] (the dominant alternative) through a more polished UI, stronger emphasis on a node-based [[Workflow Editor]] (similar in concept to [[ComfyUI]]), and active architectural investment in a modular Python backend.
  - The project is maintained under an open-source licence and receives contributions from a large community, with commercial add-ons offered by Invoke (the company) to sustain development.
  - Running locally means all model weights, prompts, and generated images remain on the user's hardware, addressing privacy and IP concerns absent from cloud services such as [[Midjourney]] or [[DALL-E]].

- ### Key Components
  - **Unified Canvas** — an infinite-canvas editing surface supporting [[Inpainting]], [[Outpainting]], and multi-layer composition, enabling iterative creative workflows beyond single-shot generation.
  - **Node-Based Workflow Editor** — a visual node graph for composing complex multi-step pipelines, chaining [[Diffusion Model]] samplers, [[ControlNet]] modules, upscalers, and post-processing nodes without code.
  - **Model Manager** — a UI for importing, converting, and switching between model checkpoints, including [[Stable Diffusion 1.5]], [[Stable Diffusion XL]], fine-tunes, and [[LoRA Adapter]] files stored in community repositories such as [[Hugging Face]] and [[CivitAI]].
  - **Queue and Batch Processing** — an asynchronous job queue allowing multiple generation requests to be enqueued and executed in sequence or parallel, useful for iterating over prompt variations.
  - **Python API and CLI** — a programmatic interface enabling scripted workflows, integration with other tools, and headless server deployments.
  - **ControlNet Integration** — support for [[ControlNet]] adapters (depth, pose, canny edge, scribble, etc.) enabling spatially-conditioned generation where the layout is guided by a reference image.
  - **IP-Adapter and Reference Image Support** — allows a style or content reference image to influence generation via image-prompt adapters, blending [[CLIP]] embeddings.
  - **Textual Inversion and LoRA** — native support for [[Textual Inversion]] embeddings and [[LoRA Adapter]] weights that modify base model behaviour to match a specific style or subject.

- ### Applications / Use Cases
  - **Concept Art and Illustration** — artists use the Unified Canvas to rapidly iterate on character designs, environment concepts, and storyboard frames with local control over style.
  - **Game Asset Prototyping** — game developers generate texture variations, sprite concepts, and environment sketches at scale using batch queues and ControlNet pose/depth conditioning.
  - **VFX and Film Pre-Visualisation** — production designers use [[Inpainting]] and [[Outpainting]] to extend or modify reference imagery for pre-vis and moodboards.
  - **Privacy-Sensitive Workflows** — industries handling confidential material (legal, medical, architectural) use local deployment to avoid transmitting imagery to third-party cloud APIs.
  - **Research and Experimentation** — AI researchers and practitioners use InvokeAI to test fine-tuned model checkpoints and compare sampler behaviour in a controlled environment.
  - **Educational Contexts** — art educators use InvokeAI to teach [[Prompt Engineering]] and [[Diffusion Model]] concepts in self-hosted classroom environments.
  - **Commercial Product Integration** — the Invoke platform (commercial tier) is used by studios integrating generative image pipelines into production workflows with audit trails and team management.

- ### Mechanisms
  - **Denoising Pipeline** — generation proceeds by iteratively denoising a latent tensor sampled from Gaussian noise, guided by text conditioning from [[CLIP Text Encoder]] embeddings via classifier-free guidance.
  - **Sampler Algorithms** — InvokeAI supports multiple [[DDIM]], PLMS, k-LMS, DPM++ and Euler samplers, each offering different quality/speed tradeoffs and noise schedules.
  - **VAE Encode/Decode** — images are encoded into a compressed latent space by a [[Variational Autoencoder]] before denoising, then decoded back to pixel space, enabling efficient computation on consumer GPUs.
  - **Cross-Attention Conditioning** — text embeddings are injected into the UNet denoising backbone at each transformer block via cross-attention layers, steering the denoising trajectory.
  - **ControlNet Residuals** — [[ControlNet]] modules inject spatial conditioning by adding residual activations from a separately-trained auxiliary network into the main UNet at each layer.
  - **SDXL Architecture Support** — InvokeAI supports [[Stable Diffusion XL]] with its dual-encoder text conditioning (CLIP-L + OpenCLIP-G) and two-stage (base + refiner) pipeline.

- ### Relationships
  - subClassOf:: [[Generative AI]]
  - requires:: [[Stable Diffusion]]
  - requires:: [[GPU Compute]]
  - requires:: [[Python Runtime]]
  - enables:: [[Text-to-Image]]
  - enables:: [[Image-to-Image]]
  - enables:: [[Inpainting]]
  - enables:: [[Outpainting]]
  - enables:: [[Local Inference]]
  - uses:: [[Diffusion Model]]
  - uses:: [[ControlNet]]
  - uses:: [[LoRA Adapter]]
  - uses:: [[Textual Inversion]]
  - uses:: [[CLIP Text Encoder]]
  - hasPart:: [[Node-Based Workflow Editor]]
  - hasPart:: [[Unified Canvas]]
  - hasPart:: [[Model Manager]]
  - contrastsWith:: [[AUTOMATIC1111]]
  - contrastsWith:: [[ComfyUI]]
  - contrastsWith:: [[Midjourney]]
  - relatedTo:: [[Image Generation]]
  - relatedTo:: [[Latent Diffusion]]
  - relatedTo:: [[Open-Source AI]]
  - relatedTo:: [[Prompt Engineering]]
  - relatedTo:: [[Fine-Tuning]]
  - bridges-to:: [[Creative AI Tools]]
  - bridges-to:: [[Digital Content Creation]]

- ### Standards & Context
  - InvokeAI consumes model weights in SafeTensor and CKPT formats; the ecosystem has shifted toward SafeTensor as the secure serialisation standard after vulnerabilities in CKPT (pickle-based) files.
  - The platform integrates with [[Hugging Face]] model hubs and follows the [[Diffusers]] library conventions for model loading and configuration, enabling broad compatibility with community checkpoints.
  - Community model sharing occurs primarily through [[CivitAI]] and [[Hugging Face]], with InvokeAI's model manager providing direct download and conversion pipelines.
  - No formal standards body governs open-source diffusion tooling; the de facto standards are set by the [[Stability AI]] architecture releases (SD1.x, SDXL, SD3) and the [[Diffusers]] library maintained by [[Hugging Face]].
  - VRAM requirements vary by model: SD1.5 runs on 4 GB GPUs; SDXL requires 8–12 GB; SD3 and higher-resolution workflows require 16 GB or more.
  - InvokeAI's API design aligns with RESTful conventions and includes a FastAPI-based server enabling integration with automation platforms and custom front-ends.

- ### Provenance
  - sources:: InvokeAI GitHub repository (github.com/invoke-ai/InvokeAI); Invoke company documentation; community knowledge of latent diffusion architectures
  - updated:: 2026-06-13
