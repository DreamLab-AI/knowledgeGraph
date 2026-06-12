public:: true

elevatedFrom:: [[Midjourney]]
# Midjourney Text-to-Image Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:161e0e9f7e48d90a0fb86e6a376f2e9e47377dfbecb7491de8a736d96e7a8f25",
  "@type": "Page",
  "vc:slug": "midjourney-text-to-image-service",
  "title": "Midjourney Text-to-Image Service",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:diffusion-model",
      "vc:label": "Diffusion Model"
    },
    {
      "@id": "urn:visionflow:linked:text-to-image-generation",
      "vc:label": "Text-to-Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:concept-art",
      "vc:label": "Concept Art"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-media",
      "vc:label": "Synthetic Media"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai",
      "vc:label": "Generative AI"
    },
    {
      "@id": "urn:visionflow:linked:stable-diffusion",
      "vc:label": "Stable Diffusion"
    },
    {
      "@id": "urn:visionflow:linked:creative-media-domain",
      "vc:label": "Creative Media Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Midjourney"
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
  "@id": "urn:ngm:class:midjourney-text-to-image-service-text-to-image-service",
  "@type": "Class",
  "label": "Midjourney Text-to-Image Service",
  "definition": "Midjourney is a proprietary generative artificial intelligence service that produces images from natural-language text prompts. It is operated by an independent research lab of the same name and is accessed primarily through a Discord bot interface and, later, a dedicated web application. The system is known for a distinctive aesthetic and for iterating rapidly through successive model versions that improve coherence, resolution and prompt adherence.",
  "domain": "midjourney",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:creative-media-domain",
      "label": "Creative Media Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:text-to-image-generation",
        "label": "Text-to-Image Generation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:concept-art",
        "label": "Concept Art"
      },
      {
        "@id": "urn:ngm:class:synthetic-media",
        "label": "Synthetic Media"
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
  "@id": "urn:visionflow:annotation:link-resolutions:midjourney:d931372ba7f8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:161e0e9f7e48d90a0fb86e6a376f2e9e47377dfbecb7491de8a736d96e7a8f25"
  },
  "vc:resolutions": [
    {
      "raw": "[[Diffusion Model]]",
      "resolved": "urn:visionflow:linked:diffusion-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Text-to-Image Generation]]",
      "resolved": "urn:visionflow:linked:text-to-image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Concept Art]]",
      "resolved": "urn:visionflow:linked:concept-art",
      "kind": "StubLink"
    },
    {
      "raw": "[[Synthetic Media]]",
      "resolved": "urn:visionflow:linked:synthetic-media",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative AI]]",
      "resolved": "urn:visionflow:linked:generative-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stable Diffusion Image Model]]",
      "resolved": "urn:visionflow:linked:stable-diffusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Creative Media Domain]]",
      "resolved": "urn:visionflow:linked:creative-media-domain",
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
  - Midjourney is a proprietary generative artificial intelligence service that produces images from natural-language text prompts. It is operated by an independent research lab of the same name and is accessed primarily through a Discord bot interface and, later, a dedicated web application. The system is known for a distinctive aesthetic and for iterating rapidly through successive model versions that improve coherence, resolution and prompt adherence.

- ### Semantic Classification
  - owl-class:: media:Midjourney
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Creative Media Domain]]
  - bridges-to:: [[Generative AI]], [[Stable Diffusion Image Model]]
  - requires:: [[Diffusion Model]], [[Text-to-Image Generation]]
  - enables:: [[Concept Art]], [[Synthetic Media]]

- ### Content
  - Midjourney converts a written description into one or more candidate images, which users can then upscale, vary or re-roll. The interaction model centres on iterative refinement, where parameters such as aspect ratio, stylisation strength and chaos influence the diversity and look of outputs. Prompt weighting and image prompting allow users to steer composition and subject matter with more precision.
  - The underlying generation is based on diffusion techniques, in which a model progressively denoises a random field conditioned on the text prompt. Successive versions of the model have improved photorealism, anatomical consistency and the rendering of text within images, while continuing to favour a recognisable artistic character.
  - Midjourney sits within a wider landscape of text-to-image tools alongside systems such as Stable Diffusion and DALL-E. Its commercial, closed-weight model contrasts with open-weight alternatives, and it has featured in debates over training-data provenance, copyright and the role of generative tools in professional creative workflows.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
