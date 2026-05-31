public:: true

# Luma AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:003bf5e09bd6b5de5c8991a474fa210174cc0a1bb8b9d8407a12ef3fd5eb1d60",
  "@type": "Page",
  "vc:slug": "luma-ai",
  "title": "Luma AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:video-generation",
      "vc:label": "Video Generation"
    },
    {
      "@id": "urn:visionflow:linked:3-d-generation",
      "vc:label": "3D Generation"
    },
    {
      "@id": "urn:visionflow:linked:3-d-asset",
      "vc:label": "3D Asset"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
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
      "vc:value": "Luma AI"
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
  "@id": "urn:ngm:class:luma-ai",
  "@type": "Class",
  "label": "Luma AI",
  "definition": "Luma AI is a company developing generative tools for 3D capture and video generation. Its products include neural reconstruction of scenes from photographs and a text-to-video model.",
  "domain": "generative-ai",
  "maturity": "emerging",
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
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:video-generation",
        "label": "Video Generation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-generation",
        "label": "3D Generation"
      },
      {
        "@id": "urn:ngm:class:3-d-asset",
        "label": "3D Asset"
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
  "@id": "urn:visionflow:annotation:link-resolutions:luma-ai:0a7ff7d63e8e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:003bf5e09bd6b5de5c8991a474fa210174cc0a1bb8b9d8407a12ef3fd5eb1d60"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Video Generation]]",
      "resolved": "urn:visionflow:linked:video-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Generation]]",
      "resolved": "urn:visionflow:linked:3-d-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Asset]]",
      "resolved": "urn:visionflow:linked:3-d-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
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
  - Luma AI is a company developing generative tools for 3D capture and video generation. Its products include neural reconstruction of scenes from photographs and a text-to-video model.

- ### Semantic Classification
  - owl-class:: generative-ai:LumaAI
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Generative AI]]
  - bridges-to:: [[Computer Vision]], [[Generative AI]]
  - requires:: [[Neural Network]], [[Video Generation]]
  - enables:: [[3D Generation]], [[3D Asset]]

- ### Content
  - Luma AI builds tools that reconstruct three-dimensional scenes from ordinary photographs and video, using neural rendering methods to produce navigable representations. It later expanded into generative video from text and image prompts.
  - The company targets creators and developers who need 3D assets or short video clips without traditional modelling or filming. Its services are offered through applications and APIs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
