public:: true

# Physical Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ed18e54bd18a4fca19443e61f5012396b3d0633a4d3e71afe6dec682bdf2d7f4",
  "@type": "Page",
  "vc:slug": "physical-hardware",
  "title": "Physical Hardware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-experiences",
      "vc:label": "Immersive Experiences"
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
      "vc:value": "MV-10005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Physical Hardware"
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
  "@id": "urn:ngm:class:physical-hardware",
  "@type": "Class",
  "label": "Physical Hardware",
  "definition": "The tangible computing devices and peripherals required for metaverse and XR experiences, including VR headsets, AR glasses, haptic devices, motion controllers, and supporting infrastructure like GPUs and networking equipment.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:hardware",
      "label": "Hardware"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experiences",
        "label": "Immersive Experiences"
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
  "@id": "urn:visionflow:annotation:link-resolutions:physical-hardware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ed18e54bd18a4fca19443e61f5012396b3d0633a4d3e71afe6dec682bdf2d7f4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:owl:class:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Experiences]]",
      "resolved": "urn:visionflow:owl:class:immersive-experiences",
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
  - The tangible computing devices and peripherals required for metaverse and XR experiences, including VR headsets, AR glasses, haptic devices, motion controllers, and supporting infrastructure like GPUs and networking equipment.

- ### Semantic Classification
  - owl-class:: spatial-computing:PhysicalHardware
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Hardware]]
  - enables:: [[Immersive Experiences]]

- ### Content

  - #### Device Categories
		- VR headsets: Meta Quest, PlayStation VR2, Valve Index
		- AR glasses: Microsoft HoloLens, Magic Leap
		- Haptic gloves and suits for touch simulation
		- Motion controllers with haptic feedback
		- Tracking systems for body movement
  - #### Market Context
		- Metaverse AR/VR hardware market projected at $4.1B by 2033
		- Meta Quest 2 sold over 20 million units
		- Growing interest in sensor fusion and spatial computing
		- Hand and eye tracking reducing controller dependence

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
