public:: true

# XR Headset
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:27cbd8357ce3d2856c35f7ba63968edf197a8869de37a325ef74436cca427f7b",
  "@type": "Page",
  "vc:slug": "xr-headset",
  "title": "XR Headset",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:xr-hardware",
      "vc:label": "XR Hardware"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10171"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "XR Headset"
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
  "@id": "urn:ngm:class:xr-headset",
  "@type": "Class",
  "label": "XR Headset",
  "definition": "A head-mounted display device that delivers immersive visual and audio experiences for virtual reality, augmented reality, or mixed reality applications, featuring integrated displays, tracking sensors, audio systems, and processing capabilities for rendering digital content in the user's field of view.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:xr-hardware",
      "label": "XR Hardware"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:micro-oled-display",
        "label": "Micro-OLED Display"
      },
      {
        "@id": "urn:ngm:class:tracking-system",
        "label": "Inside-Out Tracking System"
      },
      {
        "@id": "urn:ngm:class:spatial-audio-system",
        "label": "Spatial Audio System"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:wearable-computing-platform",
        "label": "Wearable Computing Platform"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:web-xr-api",
        "label": "WebXR API"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:six-degrees-of-freedom",
        "label": "Six Degrees of Freedom"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:immersive-collaboration",
        "label": "Immersive Collaboration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:system-on-chip",
        "label": "System on Chip"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:openxr-standard",
        "label": "OpenXR Standard"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:passthrough-camera",
        "label": "Passthrough Camera"
      },
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:holographic-display",
        "label": "Holographic Display"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:field-of-view",
        "label": "Field of View"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:head-mounted-display",
      "label": "Head-Mounted Display"
    },
    {
      "@id": "urn:ngm:class:vr-headset",
      "label": "VR Headset"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:xr-headset:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:27cbd8357ce3d2856c35f7ba63968edf197a8869de37a325ef74436cca427f7b"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[XR Hardware]]",
      "resolved": "urn:visionflow:owl:class:xr-hardware",
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
  - A head-mounted display device that delivers immersive visual and audio experiences for virtual reality, augmented reality, or mixed reality applications, featuring integrated displays, tracking sensors, audio systems, and processing capabilities for rendering digital content in the user's field of view.

- ### Semantic Classification
  - owl-class:: spatial-computing:XrHeadset
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[XR Hardware]]
  - **Enables**: [[Virtual Reality]], [[Augmented Reality]], [[Spatial Computing Paradigm]]
  - **Requires**: [[WebXR API]] (browser session), [[Sensor Fusion]] (6DoF tracking)
  - **Part-of**: [[Wearable Computing Platform]], [[Metaverse]] access layer

- ### Content

  - ## Overview
  - XR headsets serve as primary interfaces for immersive metaverse experiences. Meta Quest dominates with 64% market share, Apple Vision Pro holds 16%, and PICO has 7% as of Q1 2024. The Meta Quest 3 ($499) offers 30% resolution increase over Quest 2 with mixed reality capabilities. Apple Vision Pro ($3,499) features dual 4K micro-OLED displays with 23 million pixels total, released globally throughout 2024.
  - ## Technical Details
  - ### Leading Headsets (2024)
		- **Meta Quest 3**: 2064x2208 per eye, 120Hz, Snapdragon XR2 Gen 2
		- **Meta Quest 3S**: $299 entry point, October 2024 release
		- **Apple Vision Pro**: Micro-OLED, M2+R1 chips, spatial computing
		- **PlayStation VR2**: 2000x2040 per eye, eye tracking, haptic feedback
  - ### Display Specifications
		- **Resolution**: 2000-4000 pixels per eye
		- **Refresh Rate**: 90-120Hz standard
		- **Field of View**: 100-120 degrees horizontal
		- **Pixel Density**: 23+ PPD (pixels per degree) for clarity
  - ### Interaction Methods
		- **Spatial Input**: Hand and eye tracking (Vision Pro)
		- **Controllers**: Motion-tracked handhelds (Quest, PSVR2)
		- **Voice Commands**: Speech recognition integration
		- **Passthrough**: Mixed reality camera views
  - ## Applications
  - Metaverse platform access
  - VR gaming and entertainment
  - Enterprise training and collaboration
  - Spatial computing productivity
  - Therapeutic and medical applications

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
