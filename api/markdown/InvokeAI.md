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
  "definition": "An open-source application and toolkit for running text-to-image diffusion models such as Stable Diffusion, providing a web interface and workflow tools for image generation.",
  "domain": "generative-ai",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-ai",
      "label": "Generative AI"
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
        "@id": "urn:ngm:class:text-to-image",
        "label": "Text-to-Image"
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
  "@id": "urn:visionflow:annotation:link-resolutions:invoke-ai:03e43d7d9920",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:97fe57b39d3fcc9de63aa3cb7e79e0825426cb77032b8e498c36aaef732a9fcf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stable Diffusion]]",
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
  - An open-source application and toolkit for running text-to-image diffusion models such as Stable Diffusion, providing a web interface and workflow tools for image generation.

- ### Semantic Classification
  - owl-class:: generative-ai:InvokeAI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative AI]]
  - bridges-to:: [[Image Generation]]
  - requires:: [[Stable Diffusion]]
  - enables:: [[Text-to-Image]]

- ### Content
  - InvokeAI packages diffusion-based image generation with a browser-based interface, a node-based workflow editor and command-line access. It supports features such as inpainting, outpainting and the use of additional control models.
  - The project targets both casual users and creative professionals who want local control over generation rather than reliance on a hosted service. It runs models on consumer GPUs and integrates community-trained model variants.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
