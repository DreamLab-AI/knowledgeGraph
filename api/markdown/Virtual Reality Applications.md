public:: true

# Virtual Reality Applications
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cbcd62ddfed4da951be83e0bc84eb64eca102c59d693b6a2b5a9ba24e3e49cab",
  "@type": "Page",
  "vc:slug": "virtual-reality-applications",
  "title": "Virtual Reality Applications",
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
      "vc:value": "MV-9723"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Reality Applications"
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
  "@id": "urn:ngm:class:virtual-reality-applications",
  "@type": "Class",
  "label": "Virtual Reality Applications",
  "definition": "Software programmes and use-case deployments that leverage virtual reality technology to deliver immersive, interactive experiences for domains including healthcare, education, enterprise training, entertainment, and social interaction, running on dedicated VR hardware or spatial computing platforms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:virtual-reality",
      "label": "Virtual Reality"
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
        "@id": "urn:ngm:class:virtual-reality-platform",
        "label": "Virtual Reality Platform"
      },
      {
        "@id": "urn:ngm:class:virtual-world-infrastructure",
        "label": "Virtual World Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-experience",
        "label": "Virtual Experience"
      },
      {
        "@id": "urn:ngm:class:virtual-clinic",
        "label": "Virtual Clinic"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      },
      {
        "@id": "urn:ngm:class:education-metaverse",
        "label": "Education Metaverse"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-reality-applications:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cbcd62ddfed4da951be83e0bc84eb64eca102c59d693b6a2b5a9ba24e3e49cab"
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
  - Software programmes and use-case deployments that leverage virtual reality technology to deliver immersive, interactive experiences for domains including healthcare, education, enterprise training, entertainment, and social interaction, running on dedicated VR hardware or spatial computing platforms.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualRealityApplications
  - owl-role:: concept

- ### Relationships
  - Requires: [[Virtual Reality Platform]]
  - Requires: [[Virtual World Infrastructure]]
  - Enables: [[Virtual Experience]]
  - Enables: [[Virtual Clinic]]
  - Related To: [[Extended Reality]]
  - Related To: [[Immersive Experience]]
  - Related To: [[Education Metaverse]]

- ### Content

  ## Overview

  Virtual Reality Applications represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
