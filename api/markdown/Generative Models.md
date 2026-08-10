public:: true

# Generative Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2f7ba795236c6e7819e315813611e2dbe4a774eb3dd7e4d7d0eaa0a18f8dd1c",
  "@type": "Page",
  "vc:slug": "generative-models",
  "title": "Generative Models",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai",
      "vc:label": "Generative AI"
    },
    {
      "@id": "urn:visionflow:linked:image-generation",
      "vc:label": "Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:diffusion-model",
      "vc:label": "Diffusion Model"
    },
    {
      "@id": "urn:visionflow:linked:generative-adversarial-network",
      "vc:label": "Generative Adversarial Network"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Generative Models"
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
  "@id": "urn:ngm:class:generative-models",
  "@type": "Class",
  "label": "Generative Models",
  "definition": "Generative models are machine learning models that learn the underlying distribution of data so they can produce new samples resembling the training data. Major families include generative adversarial networks, variational autoencoders, autoregressive models and diffusion models, underpinning image, text, audio and video generation across AI applications.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    },
    {
      "@id": "urn:ngm:class:generative-ai",
      "label": "Generative AI"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:autoregressive-model",
        "label": "Autoregressive Model"
      },
      {
        "@id": "urn:ngm:class:normalising-flow",
        "label": "Normalizing Flow"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      },
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      },
      {
        "@id": "urn:ngm:class:text-generation",
        "label": "Text Generation"
      },
      {
        "@id": "urn:ngm:class:data-augmentation",
        "label": "Data Augmentation"
      },
      {
        "@id": "urn:ngm:class:synthetic-data",
        "label": "Synthetic Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network-latent-space",
        "label": "Latent Space"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:unsupervised-learning",
        "label": "Unsupervised Learning"
      },
      {
        "@id": "urn:ngm:class:self-supervised-learning",
        "label": "Self-Supervised Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:discriminative-model",
        "label": "Discriminative Model"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:generative-models:642ec6ae6367",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e2f7ba795236c6e7819e315813611e2dbe4a774eb3dd7e4d7d0eaa0a18f8dd1c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative AI]]",
      "resolved": "urn:visionflow:linked:generative-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Generation]]",
      "resolved": "urn:visionflow:linked:image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Diffusion Model]]",
      "resolved": "urn:visionflow:linked:diffusion-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Adversarial Network]]",
      "resolved": "urn:visionflow:linked:generative-adversarial-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
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
  - Generative models are machine learning models that learn the distribution of data so they can produce new samples resembling the training data. They underpin image, text, audio and video generation.

- ### Semantic Classification
  - owl-class:: generative-ai:GenerativeModels
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative Model]]
  - bridges-to:: [[Diffusion Model]], [[Generative Adversarial Network]]
  - requires:: [[Neural Network]]
  - enables:: [[Generative AI]], [[Image Generation]]

- ### Content
  - Generative models estimate the probability distribution of a dataset, either explicitly or implicitly, so that they can synthesise new examples. Major families include generative adversarial networks, variational autoencoders, autoregressive models and diffusion models, each with different training methods and trade-offs.
  - These models drive applications across modalities, from text generation by language models to image and video synthesis. The choice of family affects sample quality, diversity, training stability and the ease of controlling outputs.

- ### Current Landscape (2026)
  - By 2025 flow matching and rectified flow had displaced classical denoising-diffusion training as the default paradigm, while the Diffusion Transformer (DiT) decisively replaced the U-Net backbone for frontier image and video generation (e.g. FLUX.1, HunyuanVideo 13B, Qwen-Image at ~29B total, and OpenAI's Sora 2).
  - Consistency and rectified-flow distillation collapsed sampling to 1-8 steps without quality loss, pushing near-real-time generation; efficiency-focused DiTs such as Z-Image (6B, arXiv Nov 2025) challenged the "scale-at-all-costs" assumption.
  - Mixture-of-Experts became standard for frontier generative systems: over 60% of models released in 2025 used MoE, with DeepSeek-V3 (671B total / 37B active) and the late-2025 DeepSeek-V3.2 reportedly reaching GPT-5-level quality at roughly 90% lower training cost.
  - Diffusion language models emerged as a serious alternative to autoregression, with over 50 papers in 2025, LLaDA (8B) solving the "reversal curse", Gemini Diffusion reaching ~1,479 tokens/sec, and Google DeepMind releasing DiffusionGemma (Apache 2.0, ~25.2B MoE) on 10 June 2026 as the first open-weight text-diffusion LLM from a tier-one lab.
  - Regulation tightened sharply: the EU AI Act's Article 50 transparency obligations for generative AI apply from 2 August 2026, requiring machine-readable marking of synthetic output and labelling of deepfakes, following GPAI model obligations that took effect on 2 August 2025.
  - The final voluntary Code of Practice on Transparency of AI-Generated Content was published on 10 June 2026, endorsing C2PA-style signed, tamper-evident metadata plus imperceptible watermarking (with optional fingerprinting/logging), and a transitional grace period to 2 December 2026 for pre-existing systems.
  - The open frontier as of 2026 is shifting from "short-clip generators" toward long-horizon, physically consistent world simulators, with active challenges in real-time streaming generation, high-quality training-data scarcity (driving synthetic-data pipelines), and omni-modal integration across text, image, video and audio.

- ### References
  - 1. Apolo (2026). The Year in AI - Best of 2025, Part II: Computer Vision and Generative Models for Images and Video. https://www.apolo.us/blog-posts/the-year-in-ai---best-of-2025-part-ii-computer-vision-and-generative-models-for-images-and-video
  - 2. Dubach, P. (2026). What Comes After Transformers: Hybrid AI Architecture in 2026. https://philippdubach.com/posts/the-last-architecture-designed-by-hand/
  - 3. Hugging Face / Google DeepMind (2026). Gemma 4: Frontier multimodal intelligence on device (incl. DiffusionGemma). https://huggingface.co/blog/gemma4
  - 4. arXiv (2025). Z-Image: An Efficient Image Generation Foundation Model with Single-Stream Diffusion Transformer. https://arxiv.org/abs/2511.22699
  - 5. European Commission (2026). AI Act - Regulatory framework and Article 50 transparency timeline. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
  - 6. European Commission (2026). Commission publishes Code of Practice on marking and labelling AI-generated content. https://digital-strategy.ec.europa.eu/en/news/commission-publishes-code-practice-marking-and-labelling-ai-generated-content

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
