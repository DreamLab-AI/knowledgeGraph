public:: true

# Virtual Experience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2e8f631c87146d8b89eb1297c6d0adaf9436080a21b4c4f0a9ac1736efc92a3e",
  "@type": "Page",
  "vc:slug": "virtual-experience",
  "title": "Virtual Experience",
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
      "vc:value": "MV-9722"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Experience"
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
  "@id": "urn:ngm:class:virtual-experience",
  "@type": "Class",
  "label": "Virtual Experience",
  "definition": "A user-facing encounter or activity delivered within a virtual environment, encompassing immersive simulations, interactive narratives, social engagements, and entertainment events that are accessed through XR devices, gaming platforms, or web-based spatial interfaces.",
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
    "requires": [
      {
        "@id": "urn:ngm:class:virtual-world-infrastructure",
        "label": "Virtual World Infrastructure"
      },
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:personalized-virtual-experiences",
        "label": "Personalized Virtual Experiences"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:virtual-environment",
        "label": "Virtual Environment"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-experience:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2e8f631c87146d8b89eb1297c6d0adaf9436080a21b4c4f0a9ac1736efc92a3e"
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
  - A user-facing encounter or activity delivered within a virtual environment, encompassing immersive simulations, interactive narratives, social engagements, and entertainment events that are accessed through XR devices, gaming platforms, or web-based spatial interfaces.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualExperience
  - owl-role:: concept

- ### Relationships
  - Requires: [[Virtual World Infrastructure]]
  - Requires: [[Avatar System]]
  - Part Of: [[Virtual Environment]]
  - Uses: [[Immersive Experience]]
  - Uses: [[Extended Reality]]
  - Related To: [[User Experience]]
  - Related To: [[Personalized Virtual Experiences]]

- ### Content

  ## Overview

  Virtual Experience represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
