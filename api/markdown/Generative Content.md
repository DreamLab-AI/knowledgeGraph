public:: true

# Generative Content
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d25246ecb00c569d00d6d8a95d5c2830391d69f0582784af3ea9e30afdad844",
  "@type": "Page",
  "vc:slug": "generative-content",
  "title": "Generative Content",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9618"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Generative Content"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:generative-content",
  "@type": "Class",
  "label": "Generative Content",
  "definition": "Generative Content is digital media — text, imagery, audio, 3D assets, or code — produced by generative AI models rather than human authors. It encompasses outputs of large language models, diffusion models, GANs, and neural synthesis systems, and raises distinct questions of provenance, copyright, and quality assurance in metaverse and spatial computing pipelines.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:metaverse-content-pipeline",
        "label": "Metaverse Content Pipeline"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:3-d-asset",
        "label": "3D Asset"
      },
      {
        "@id": "urn:ngm:class:educational-methodology",
        "label": "Educational Methodology"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:generative-content:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0d25246ecb00c569d00d6d8a95d5c2830391d69f0582784af3ea9e30afdad844"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Generative Content is digital media — text, imagery, audio, 3D assets, or code — produced by generative AI models rather than human authors. It encompasses outputs of large language models, diffusion models, GANs, and neural synthesis systems, and raises distinct questions of provenance, copyright, and quality assurance in metaverse and spatial computing pipelines.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:GenerativeContent
  - owl-role:: concept

- ### Relationships
  - Requires [[Generative AI]] as the underlying model technology
  - Enables [[Metaverse Content Pipeline]] by automating asset creation at scale
  - Uses [[Large Language Models]] for text and code generation
  - Related to [[3D Asset]] (generative models increasingly produce geometry and textures)
  - Related to [[Educational Methodology]] (adaptive learning materials as generative content)

- ### Content

  ## Overview

  Generative Content represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
