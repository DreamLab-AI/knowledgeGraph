public:: true

# XR Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f9cc0599e86774f097dabb0b2f3332faddbdcf49793b4b44b904fdf0a01bfb7d",
  "@type": "Page",
  "vc:slug": "xr-hardware",
  "title": "XR Hardware",
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
      "vc:value": "MV-9730"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "XR Hardware"
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
  "@id": "urn:ngm:class:xr-hardware",
  "@type": "Class",
  "label": "XR Hardware",
  "definition": "XR Hardware encompasses the physical devices — head-mounted displays, spatial computing headsets, hand-tracking controllers, and wearable sensors — that enable augmented, mixed, and virtual reality experiences. These devices integrate display optics, inertial measurement units, inside-out tracking cameras, and wireless connectivity to render immersive spatial content with minimal latency.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:spatial-computing-paradigm", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"}
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:xr-hardware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f9cc0599e86774f097dabb0b2f3332faddbdcf49793b4b44b904fdf0a01bfb7d"
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
  - X R Hardware is a concept within the metaverse domain. Further enrichment pending.

- ### Semantic Classification
  - owl-class:: spatial-computing:XRHardware
  - owl-role:: concept

- ### Relationships
  - enables:: [[Augmented Reality]]
  - enables:: [[Virtual Reality]]
  - enables:: [[Mixed Reality]]
  - uses:: [[Spatial Computing Paradigm]]
  - uses:: [[Eye Tracking]]
  - relatedTo:: [[Haptic Feedback]]

- ### Content

  ## Overview

  XR Hardware encompasses head-mounted displays, spatial computing headsets, hand-tracking controllers, and wearable sensors that deliver augmented, mixed, and virtual reality experiences. These devices combine high-resolution display optics, inside-out tracking cameras, inertial measurement units, and low-latency wireless connectivity. Eye tracking enables foveated rendering to reduce GPU load, while haptic feedback peripherals enhance physical presence in virtual environments.

  #### Related Concepts
  - [[Augmented Reality]]
  - [[Virtual Reality]]
  - [[Mixed Reality]]
  - [[Spatial Computing Paradigm]]
  - [[Eye Tracking]]
  - [[Haptic Feedback]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
