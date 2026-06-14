public:: true

# U-Net
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:20c285e2f48fc9f5c8d0f1b9c9a25055a6f8b69b78d8f7f452e5bcf90c04b274",
  "@type": "Page",
  "vc:slug": "u-net",
  "title": "U-Net",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:convolution",
      "vc:label": "Convolution"
    },
    {
      "@id": "urn:visionflow:linked:encoder",
      "vc:label": "Encoder"
    },
    {
      "@id": "urn:visionflow:linked:decoder",
      "vc:label": "Decoder"
    },
    {
      "@id": "urn:visionflow:linked:image-segmentation",
      "vc:label": "Image Segmentation"
    },
    {
      "@id": "urn:visionflow:linked:semantic-segmentation",
      "vc:label": "Semantic Segmentation"
    },
    {
      "@id": "urn:visionflow:linked:convolutional-neural-network",
      "vc:label": "Convolutional Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "U-Net"
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
  "@id": "urn:ngm:class:u-net",
  "@type": "Class",
  "label": "U-Net",
  "definition": "A convolutional neural network architecture with a symmetric encoder-decoder structure and skip connections, originally designed for biomedical image segmentation and widely adopted for dense prediction tasks including diffusion model denoising.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:convolutional-neural-network",
    "label": "Convolutional Neural Network"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:decoder",
        "label": "Decoder"
      },
      {
        "@id": "urn:ngm:class:skip-connection",
        "label": "Skip Connection"
      },
      {
        "@id": "urn:ngm:class:bottleneck-layer",
        "label": "Bottleneck Layer"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:convolution",
        "label": "Convolution"
      },
      {
        "@id": "urn:ngm:class:max-pooling",
        "label": "Max Pooling"
      },
      {
        "@id": "urn:ngm:class:upsampling",
        "label": "Upsampling"
      },
      {
        "@id": "urn:ngm:class:batch-normalisation",
        "label": "Batch Normalisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:image-segmentation",
        "label": "Image Segmentation"
      },
      {
        "@id": "urn:ngm:class:semantic-segmentation",
        "label": "Semantic Segmentation"
      },
      {
        "@id": "urn:ngm:class:instance-segmentation",
        "label": "Instance Segmentation"
      },
      {
        "@id": "urn:ngm:class:dense-prediction",
        "label": "Dense Prediction"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:encoder-decoder-architecture",
        "label": "Encoder Decoder Architecture"
      },
      {
        "@id": "urn:ngm:class:feature-pyramid",
        "label": "Feature Pyramid"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rectified-linear-unit",
        "label": "Rectified Linear Unit"
      },
      {
        "@id": "urn:ngm:class:dropout-regularisation",
        "label": "Dropout Regularisation"
      },
      {
        "@id": "urn:ngm:class:cross-entropy-loss",
        "label": "Cross-Entropy Loss"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:medical-image-analysis",
        "label": "Medical Image Analysis"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:data-augmentation",
        "label": "Data Augmentation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fully-convolutional-network",
        "label": "Fully Convolutional Network"
      },
      {
        "@id": "urn:ngm:class:feature-pyramid-network",
        "label": "Feature Pyramid Network"
      },
      {
        "@id": "urn:ngm:class:vision-transformer",
        "label": "Vision Transformer"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:robotics-perception",
        "label": "Robotics Perception"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:unet",
      "label": "UNet"
    },
    {
      "@id": "urn:ngm:class:u-shaped-network",
      "label": "U-Shaped Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:u-net:52cfa960e085",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:20c285e2f48fc9f5c8d0f1b9c9a25055a6f8b69b78d8f7f452e5bcf90c04b274"
  },
  "vc:resolutions": [
    {
      "raw": "[[Convolution]]",
      "resolved": "urn:visionflow:linked:convolution",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Encoder]]",
      "resolved": "urn:visionflow:linked:encoder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decoder]]",
      "resolved": "urn:visionflow:linked:decoder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Segmentation]]",
      "resolved": "urn:visionflow:linked:image-segmentation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Segmentation]]",
      "resolved": "urn:visionflow:linked:semantic-segmentation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Convolutional Neural Network]]",
      "resolved": "urn:visionflow:linked:convolutional-neural-network",
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
  - A convolutional neural network architecture with a symmetric encoder-decoder structure and skip connections, originally designed for biomedical image segmentation.

- ### Semantic Classification
  - owl-class:: computer-vision:UNet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Convolutional Neural Network]]
  - bridges-to:: [[Semantic Segmentation]]
  - requires:: [[Convolution]], [[Encoder]], [[Decoder]]
  - enables:: [[Image Segmentation]]

- ### Content
  - U-Net contracts the input through successive convolution and downsampling layers to capture context, then expands it through upsampling layers to recover spatial resolution. Skip connections copy feature maps from the contracting path to the expanding path, preserving fine spatial detail.
  - Originally introduced for medical image segmentation with limited training data, the architecture became a general backbone for dense prediction tasks. It is also used as the denoising network in many diffusion models, where its multi-scale structure suits image generation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
