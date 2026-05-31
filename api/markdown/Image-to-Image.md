public:: true

# Image-to-Image
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0314e7a6fb2696c3d7ab087563f8463a6f3ecd3d581b1d35a25d57727c96e597",
  "@type": "Page",
  "vc:slug": "image-to-image",
  "title": "Image-to-Image",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:diffusion-model",
      "vc:label": "Diffusion Model"
    },
    {
      "@id": "urn:visionflow:linked:inpainting",
      "vc:label": "Inpainting"
    },
    {
      "@id": "urn:visionflow:linked:stable-diffusion",
      "vc:label": "Stable Diffusion"
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
      "vc:value": "Image-to-Image"
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
  "@id": "urn:ngm:class:image-to-image",
  "@type": "Class",
  "label": "Image-to-Image",
  "definition": "Image-to-image is a class of generative tasks where a model transforms an input image into an output image, conditioned on the input and often a text prompt. Examples include style transfer, editing and translation between domains.",
  "domain": "generative-ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:image-generation",
      "label": "Image Generation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:image-to-image:1e0fbae4d87a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0314e7a6fb2696c3d7ab087563f8463a6f3ecd3d581b1d35a25d57727c96e597"
  },
  "vc:resolutions": [
    {
      "raw": "[[Diffusion Model]]",
      "resolved": "urn:visionflow:linked:diffusion-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inpainting]]",
      "resolved": "urn:visionflow:linked:inpainting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stable Diffusion]]",
      "resolved": "urn:visionflow:linked:stable-diffusion",
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
  - Image-to-image is a class of generative tasks where a model transforms an input image into an output image, conditioned on the input and often a text prompt. Examples include style transfer, editing and translation between domains.

- ### Semantic Classification
  - owl-class:: generative-ai:ImagetoImage
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Image Generation]]
  - bridges-to:: [[Stable Diffusion]]
  - requires:: [[Diffusion Model]]
  - enables:: [[Inpainting]]

- ### Content
  - Image-to-image generation conditions a model on an existing image to produce a modified version, ranging from changing artistic style to translating between domains such as sketches and photographs. Diffusion models perform the task by partially noising the input and denoising it under guidance from a prompt or reference.
  - Applications include editing, super-resolution, colourisation and inpainting, where part of an image is regenerated. Tools built on Stable Diffusion expose image-to-image workflows alongside text-to-image generation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
