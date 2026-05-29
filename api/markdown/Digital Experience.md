public:: true

# Digital Experience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98e87483c71f55a44924d797112778d2365b4e91e7c55ae91bc3004974a6213b",
  "@type": "Page",
  "vc:slug": "digital-experience",
  "title": "Digital Experience",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
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
      "vc:value": "MV-9576"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Experience"
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
  "@id": "urn:ngm:class:digital-experience",
  "@type": "Class",
  "label": "Digital Experience",
  "definition": "Digital Experience encompasses the totality of interactions a user has with digital products, services, and environments — spanning web, mobile, and immersive (XR) surfaces. It integrates user interface design, content delivery, personalisation, and spatial computing to shape how users perceive and engage with digital platforms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      },
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-content",
        "label": "Digital Content"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-experience:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98e87483c71f55a44924d797112778d2365b4e91e7c55ae91bc3004974a6213b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
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
  - Digital Experience encompasses the totality of interactions a user has with digital products, services, and environments — spanning web, mobile, and immersive (XR) surfaces. It integrates user interface design, content delivery, personalisation, and spatial computing to shape how users perceive and engage with digital platforms.

- bridges-to:: [[Sensor Input]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalExperience
  - owl-role:: concept

- ### Relationships
  - Requires [[User Experience]]
  - Requires [[User Interface]]
  - Enables [[Immersive Experience]]
  - Enables [[Virtual World]]
  - Uses [[Content Delivery Network]]
  - Related To [[Digital Content]]

- ### Content

  ## Overview

  Digital Experience represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
