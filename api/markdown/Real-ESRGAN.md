public:: true

# Real-ESRGAN
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:abc74e15acfd12c2f78e6786842cfacedcd11bf0c2abbdc48d7c1a0409645652",
  "@type": "Page",
  "vc:slug": "real-esrgan",
  "title": "Real-ESRGAN",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:generative-adversarial-network",
      "vc:label": "Generative Adversarial Network"
    },
    {
      "@id": "urn:visionflow:linked:convolutional-neural-network",
      "vc:label": "Convolutional Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:image-generation",
      "vc:label": "Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Real-ESRGAN"
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
  "@id": "urn:ngm:class:real-esrgan",
  "@type": "Class",
  "label": "Real-ESRGAN",
  "definition": "Real-ESRGAN is an image super-resolution model that upscales and restores low-quality images, with particular attention to real-world degradations. It extends the ESRGAN architecture using a generative adversarial network trained on synthetic degradation data.",
  "domain": "computer-vision",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-adversarial-network",
      "label": "Generative Adversarial Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:real-esrgan:59bea2a46b75",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:abc74e15acfd12c2f78e6786842cfacedcd11bf0c2abbdc48d7c1a0409645652"
  },
  "vc:resolutions": [
    {
      "raw": "[[Generative Adversarial Network]]",
      "resolved": "urn:visionflow:linked:generative-adversarial-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Convolutional Neural Network]]",
      "resolved": "urn:visionflow:linked:convolutional-neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Generation]]",
      "resolved": "urn:visionflow:linked:image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
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
  - Real-ESRGAN is an image super-resolution model that upscales and restores low-quality images, with particular attention to real-world degradations. It extends the ESRGAN architecture using a generative adversarial network trained on synthetic degradation data.

- ### Semantic Classification
  - owl-class:: computer-vision:RealESRGAN
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Generative Adversarial Network]]
  - bridges-to:: [[Computer Vision]], [[Deep Learning]]
  - requires:: [[Generative Adversarial Network]], [[Convolutional Neural Network]]
  - enables:: [[Image Generation]]

- ### Content
  - Real-ESRGAN targets practical image restoration where the degradation process is unknown, simulating blur, noise and compression artefacts during training so the model generalises to photographs and scanned material. It is widely used for upscaling images and video frames.
  - The architecture pairs a residual-in-residual dense generator with a discriminator that judges perceptual quality. It is distributed as open source and is commonly used as a preprocessing step in content pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
