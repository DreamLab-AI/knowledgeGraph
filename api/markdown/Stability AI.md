public:: true

# Stability AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cfc535350b6ba0836a3cc59ef3942d504b62a3dbc6b6e979204314082f62d129",
  "@type": "Page",
  "vc:slug": "stability-ai",
  "title": "Stability AI",
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
      "vc:value": "Stability AI"
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
  "@id": "urn:ngm:class:stability-ai",
  "@type": "Class",
  "label": "Stability AI",
  "definition": "A company that develops and releases open generative models, best known for the Stable Diffusion family of text-to-image models.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:stability-ai:b279a57bb53d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cfc535350b6ba0836a3cc59ef3942d504b62a3dbc6b6e979204314082f62d129"
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
  - A company that develops and releases open generative models, best known for the Stable Diffusion family of text-to-image models.

- ### Semantic Classification
  - owl-class:: generative-ai:StabilityAI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative AI]]
  - bridges-to:: [[Image Generation]]
  - requires:: [[Stable Diffusion]]
  - enables:: [[Text-to-Image]]

- ### Content
  - Stability AI funds and distributes generative models with openly available weights, which contributed to wide adoption and a large ecosystem of derived tools and fine-tuned variants. Its releases span image, audio and language modalities.
  - The open-weight strategy distinguishes the company from providers that offer models only through hosted APIs. This approach enabled extensive community use and customisation but also drew attention to questions of training data provenance and downstream misuse.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
