public:: true

# Virtual Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c8b0a9d349becd1d6bb23e28bdeb6ef4827518a9fb34436618ddb07ac481bfd0",
  "@type": "Page",
  "vc:slug": "virtual-presence",
  "title": "Virtual Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:telepresence",
      "vc:label": "Telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10137"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Presence"
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
  "@id": "urn:ngm:class:virtual-presence",
  "@type": "Class",
  "label": "Virtual Presence",
  "definition": "The psychological experience of being there within a virtual place or situation, encompassing spatial presence (sense of location), social presence (connection with others), and self-presence (embodiment in virtual form), achieved through telepresence technologies and immersive environments.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:social-presence",
        "label": "Social Presence"
      },
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c8b0a9d349becd1d6bb23e28bdeb6ef4827518a9fb34436618ddb07ac481bfd0"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telepresence]]",
      "resolved": "urn:visionflow:owl:class:telepresence",
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
  - The psychological experience of being there within a virtual place or situation, encompassing spatial presence (sense of location), social presence (connection with others), and self-presence (embodiment in virtual form), achieved through telepresence technologies and immersive environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualPresence
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - Requires: [[Virtual Reality]]
  - Requires: [[Avatar]]
  - Enables: [[Social Presence]]
  - Enables: [[Immersive Experience]]
  - Uses: [[Haptic Feedback]]
  - Uses: [[Spatial Audio]]
  - Related To: [[Extended Reality]]

- ### Content

  - ## Overview
  - Virtual presence is the sensation of being within a place or situation, representing the psychological counterpart of technological immersion. The metaverse is defined as a convergence of three major technological trends: telepresence, digital twins, and blockchain. In 2024, 14.3 million VR headsets were sold, nearly tripling 2019 figures, demonstrating growing demand for immersive presence experiences.
  - ## Technical Details
  - ### Presence Dimensions
		- **Spatial Presence**: Sense of being in the virtual location
		- **Social Presence**: Feeling connected to others in the space
		- **Self-Presence**: Embodiment and identification with virtual avatar
  - ### Enabling Technologies
		- VR headsets for full immersion
		- AR glasses for enhanced reality
		- Haptic devices for tactile feedback
		- Spatial audio for directional sound
  - ### Telepresence Methods
		- Real-time video conferencing
		- Avatar-mediated interaction
		- Telerobotics and remote operation
		- Digital twin environments
  - ## Applications
  - Remote work and virtual office presence
  - Telemedicine and healthcare consultations
  - Immersive training and simulation
  - Virtual shopping and retail experiences
  - Social gatherings and virtual events

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
