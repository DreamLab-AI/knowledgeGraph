public:: true

# Room Scale
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5f2e6d68d0a31829adb90dab95709b60967f6d18a62cb485e251fe3aacd1aa3c",
  "@type": "Page",
  "vc:slug": "room-scale",
  "title": "Room Scale",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9225"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Room Scale"
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
  "@id": "urn:ngm:class:room-scale",
  "@type": "Class",
  "label": "Room Scale",
  "definition": "A VR interaction paradigm in which the user can physically walk within a tracked play area — typically 2m × 2m or larger — with inside-out or lighthouse-based positional tracking translating real-world movement into the virtual environment. Room-scale VR requires boundary (chaperone) systems to prevent collisions with physical obstacles, and is contrasted with seated or standing-only VR experiences.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:virtual-reality-platform", "label": "Virtual Reality Platform"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:metaverse-infrastructure", "label": "Metaverse Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:xr-meeting-space", "label": "XR Meeting Space"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:room-scale:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5f2e6d68d0a31829adb90dab95709b60967f6d18a62cb485e251fe3aacd1aa3c"
  },
  "vc:resolutions": [],
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
  - A VR interaction paradigm in which the user can physically walk within a tracked play area — typically 2m × 2m or larger — with inside-out or lighthouse-based positional tracking translating real-world movement into the virtual environment. Room-scale VR requires boundary (chaperone) systems to prevent collisions with physical obstacles, and is contrasted with seated or standing-only VR experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:RoomScale
  - owl-role:: Concept

- ### Relationships
  - **requires**: Virtual Reality Platform (tracking and rendering host), Sensor Fusion (multi-sensor positional data)
  - **enables**: Virtual Reality (embodied physical navigation), Haptics (physical interaction feedback)
  - **partOf**: Metaverse Infrastructure (physical-layer interaction modality)
  - **relatedTo**: Augmented Reality (alternative spatial interaction mode), XR Meeting Space (enterprise room-scale application)

- ### Content
  # RoomScale
  Room-scale VR allows users to physically navigate a bounded physical space that is mapped into a virtual environment. Tracking technologies — including HTC Valve Lighthouse base stations, inside-out camera-based tracking (Meta Quest, Apple Vision Pro), and hand/controller tracking — measure the user's position and orientation at sub-millimetre accuracy. The play-area boundary (chaperone grid) activates when users approach the edge to prevent collisions. Room-scale is the dominant interaction modality for immersive VR training, design review, and social VR applications.
  - https://www.khronos.org/ - Industry standards (OpenXR)
  - https://www.w3.org/TR/ - Web standards (WebXR)
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
