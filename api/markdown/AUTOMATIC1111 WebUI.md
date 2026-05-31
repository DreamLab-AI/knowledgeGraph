public:: true

# AUTOMATIC1111 WebUI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9790fc4dbe262eace3bf01a952d8b4d01da6cc6b3fc6f74ac78051fee57bb44d",
  "@type": "Page",
  "vc:slug": "automatic-1111-web-ui",
  "title": "AUTOMATIC1111 WebUI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:stable-diffusion",
      "vc:label": "Stable Diffusion"
    },
    {
      "@id": "urn:visionflow:linked:image-to-image",
      "vc:label": "Image-to-Image"
    },
    {
      "@id": "urn:visionflow:linked:inpainting",
      "vc:label": "Inpainting"
    },
    {
      "@id": "urn:visionflow:linked:image-generation",
      "vc:label": "Image Generation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AUTOMATIC1111 WebUI"
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
  "@id": "urn:ngm:class:automatic-1111-web-ui",
  "@type": "Class",
  "label": "AUTOMATIC1111 WebUI",
  "definition": "AUTOMATIC1111 WebUI is an open-source browser interface for running Stable Diffusion image models locally. It exposes generation, image-to-image, inpainting and extension features through a web front end.",
  "domain": "generative-ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stable-diffusion",
      "label": "Stable Diffusion"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:stable-diffusion",
        "label": "Stable Diffusion"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:image-to-image",
        "label": "Image-to-Image"
      },
      {
        "@id": "urn:ngm:class:inpainting",
        "label": "Inpainting"
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
  "@id": "urn:visionflow:annotation:link-resolutions:automatic-1111-web-ui:1359084fd9c6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9790fc4dbe262eace3bf01a952d8b4d01da6cc6b3fc6f74ac78051fee57bb44d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stable Diffusion]]",
      "resolved": "urn:visionflow:linked:stable-diffusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image-to-Image]]",
      "resolved": "urn:visionflow:linked:image-to-image",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inpainting]]",
      "resolved": "urn:visionflow:linked:inpainting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Generation]]",
      "resolved": "urn:visionflow:linked:image-generation",
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
  - AUTOMATIC1111 WebUI is an open-source browser interface for running Stable Diffusion image models locally. It exposes generation, image-to-image, inpainting and extension features through a web front end.

- ### Semantic Classification
  - owl-class:: generative-ai:AUTOMATIC1111WebUI
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Stable Diffusion]]
  - bridges-to:: [[Image Generation]]
  - requires:: [[Stable Diffusion]]
  - enables:: [[Image-to-Image]], [[Inpainting]]

- ### Content
  - The AUTOMATIC1111 Stable Diffusion web UI is a widely used Gradio based interface that lets users run text-to-image and image-to-image generation on their own hardware. It supports model checkpoints, samplers, prompt weighting, upscaling and a large ecosystem of community extensions.
  - Its accessibility made local Stable Diffusion usage practical for many users and contributed to rapid experimentation with custom models and workflows. The project is community maintained and distributed under an open-source licence.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
