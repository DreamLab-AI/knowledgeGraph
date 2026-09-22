public:: true

# Spatial User Interfaces
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:65aa7cbbce6cf86c81f621a6767062359a0db2bd063cfa093d244e6985c2afb3",
  "@type": "Page",
  "vc:slug": "spatial-user-interfaces",
  "title": "Spatial User Interfaces",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:immersive-interaction",
      "vc:label": "Immersive Interaction"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-user-interface",
      "vc:label": "3D User Interface"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10067"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial User Interfaces"
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
  "@id": "urn:ngm:class:spatial-user-interfaces",
  "@type": "Class",
  "label": "Spatial User Interfaces",
  "definition": "Three-dimensional interaction systems enabling users to engage with digital content through spatially-aware mods including hand gestures, gaze tracking, and voice commands, designed for natural movement within AR, VR, and mixed reality environments with consideration for user comfort zones and 6D...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-interaction",
        "label": "Immersive Interaction"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-user-interfaces:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:65aa7cbbce6cf86c81f621a6767062359a0db2bd063cfa093d244e6985c2afb3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Immersive Interaction]]",
      "resolved": "urn:visionflow:linked:immersive-interaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D User Interface]]",
      "resolved": "urn:visionflow:owl:class:3-d-user-interface",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Three-dimensional interaction systems enabling users to engage with digital content through spatially-aware methods including hand gestures, gaze tracking, and voice commands, designed for natural movement within AR, VR, and mixed reality environments with consideration for user comfort zones and 6DOF input.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialUserInterfaces
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[3D User Interface]]
  - enables:: [[Immersive Interaction]]

- ### Content

  - #### Interaction Methods
		- Hand tracking and gesture recognition
		- Eye gaze selection and navigation
		- Voice command input
		- Controller-based 6DOF manipulation
		- Point-to-select and grasp-to-manipulate
  - #### Design Principles
		- UI within 60 degree forward view
		- Comfort zone placement for accessibility
		- Natural gesture mirroring
		- Minimal cognitive load
		- Fatigue-conscious positioning

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
