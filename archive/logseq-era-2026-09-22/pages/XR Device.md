public:: true

# XR Device
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5",
  "@type": "Page",
  "vc:slug": "xr-device",
  "title": "XR Device",
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
      "vc:value": "MV-10169"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "XR Device"
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
  "@id": "urn:ngm:class:xr-device",
  "@type": "Class",
  "label": "XR Device",
  "definition": "Hardware equipment designed to create or enhance extended reality experiences, encompassing virtual reality headsets, augmented reality glasses, mixed reality displays, haptic feedback systems, and motion tracking sensors that enable immersive interaction with digital content.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.72,
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
        "@id": "urn:ngm:class:display-panel",
        "label": "Display Panel"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:six-degrees-of-freedom",
        "label": "Six Degrees of Freedom"
      },
      {
        "@id": "urn:ngm:class:wireless-connectivity",
        "label": "Wireless Connectivity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:spatial-presence",
        "label": "Spatial Presence"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:motion-tracking",
        "label": "Motion Tracking"
      },
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:enterprise-training",
        "label": "Enterprise Training"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-xr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:flat-screen-display",
        "label": "Flat Screen Display"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:wearable-computing",
        "label": "Wearable Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:xr-headset",
      "label": "XR Headset"
    },
    {
      "@id": "urn:ngm:class:extended-reality-device",
      "label": "Extended Reality Device"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:xr-device:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5"
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
  - Hardware equipment designed to create or enhance extended reality experiences, encompassing virtual reality headsets, augmented reality glasses, mixed reality displays, haptic feedback systems, and motion tracking sensors that enable immersive interaction with digital content.

- ### Semantic Classification
  - owl-class:: spatial-computing:XrDevice
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[XR Hardware]]
  - **enables**: Immersive Experience, Virtual Reality, Augmented Reality — XR devices are the physical hardware that renders and delivers immersive content to users.
  - **uses**: Haptic Feedback, Motion Tracking — these peripheral capabilities are integral to XR device interaction loops.
  - **supports**: Human Computer Interaction — XR devices constitute a novel modality of HCI.
  - **partOf**: Metaverse — XR devices are the primary access point through which users inhabit metaverse environments.

- ### Content

  - ## Overview
  - XR devices span the reality-virtuality continuum from fully immersive VR headsets to see-through AR glasses. XR headset shipments increased by 3.9 million units in 2024 with high double-digit year-over-year growth. Meta Quest holds 64% market share, Apple Vision Pro captured 16% in Q1 2024, and PICO has 7%. The market includes consumer entertainment, enterprise training, and industrial applications.
  - ## Technical Details
  - ### Device Categories
		- **VR Headsets**: Fully immersive displays (Meta Quest 3, PlayStation VR2)
		- **AR Glasses**: See-through displays overlaying digital content
		- **MR Headsets**: Spatial computing with passthrough (Apple Vision Pro)
		- **Haptic Devices**: Controllers, gloves, and body suits
  - ### Key Specifications
		- **Display Resolution**: Up to 4K per eye (Vision Pro)
		- **Refresh Rate**: 90-120Hz for comfort
		- **Field of View**: 90-120 degrees typical
		- **Tracking**: 6DoF inside-out or external sensors
  - ### Major Platforms (2024)
		- **Meta Quest 3**: $499, Snapdragon XR2 Gen 2, mixed reality
		- **Meta Quest 3S**: $299, entry-level mixed reality
		- **Apple Vision Pro**: $3,499, M2+R1 chips, micro-OLED displays
		- **PSVR2**: PlayStation 5 tethered VR system
  - ## Applications
  - Consumer VR gaming and entertainment
  - Enterprise training and simulation
  - Metaverse access and social presence
  - Industrial AR maintenance guidance
  - Medical and therapeutic applications

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
