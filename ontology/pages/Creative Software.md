public:: true

# Creative Software
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:390238c6f7a9859126fea3e38058abd5949ce1ff3f8226a3f983a12b52c94cc3",
  "@type": "Page",
  "vc:slug": "creative-software",
  "title": "Creative Software",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9541"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Creative Software"
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
  "@id": "urn:ngm:class:creative-software",
  "@type": "Class",
  "label": "Creative Software",
  "definition": "Application software designed to support artistic, design, and content production workflows, including 3D modelling, animation, compositing, generative art, and interactive experience authoring. In spatial computing contexts, creative software bridges concept and deployment by enabling artists to produce assets compatible with real-time rendering engines and metaverse platforms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:design-software",
        "label": "Design Software"
      },
      {
        "@id": "urn:ngm:class:animation-software",
        "label": "Animation Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-content-generation",
        "label": "3D Content Generation"
      },
      {
        "@id": "urn:ngm:class:creative-tools",
        "label": "Creative Tools"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      },
      {
        "@id": "urn:ngm:class:rendering-engine",
        "label": "Rendering Engine"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:creative-software:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:390238c6f7a9859126fea3e38058abd5949ce1ff3f8226a3f983a12b52c94cc3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
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
  - Application software designed to support artistic, design, and content production workflows, including 3D modelling, animation, compositing, generative art, and interactive experience authoring. In spatial computing contexts, creative software bridges concept and deployment by enabling artists to produce assets compatible with real-time rendering engines and metaverse platforms.

- ### Semantic Classification
  - owl-class:: spatial-computing:CreativeSoftware
  - owl-role:: concept

- ### Relationships
  - Has part [[Design Software]], [[Animation Software]]
  - Uses [[Computer Graphics]], [[Computer Vision]]
  - Enables [[3D Content Generation]], [[Creative Tools]]
  - Related to [[Game Engine]], [[Rendering Engine]]

- ### Content

  ## Overview

  Creative Software represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
