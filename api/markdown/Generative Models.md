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
        "@id": "urn:ngm:class:normalizing-flow",
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
        "@id": "urn:ngm:class:latent-space",
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

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
