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

- ### Current Landscape (2026)
  - Google and Samsung launched Android XR, the first Android platform built for the Gemini era, in October 2025; its debut device is the Samsung Galaxy XR (codenamed Project Moohan), which shipped on 31 October 2025 in the US and Korea at US$1,799 running a Snapdragon XR2+ Gen 2 with dual micro-OLED panels at 3,552 x 3,840 per eye (~27 megapixels) and system-level Gemini.
  - Apple refreshed the Vision Pro in October 2025 with the M5 chip, a 120 Hz refresh rate (up from 100 Hz), a Dual Knit Band and visionOS 26, holding the entry price at US$3,499, while Meta held the low end with the Quest 3 (US$499) and Quest 3S (from US$299), splitting the category into three distinct platform ecosystems (Android XR, visionOS, Meta Horizon OS).
  - The device category is visibly bifurcating towards lightweight AI glasses: Meta shipped Ray-Ban Display in 2025 (its first smart glasses with an in-lens display, paired with a neural wristband), and Samsung confirmed on its Q4 2025 earnings call (29 January 2026) that Android XR smart glasses (models SM-O200P/SM-O200J) would arrive in 2026.
  - Khronos released OpenXR 1.1 on 15 April 2024, folding widely used extensions into core (Local Floor reference space, Grip Surface, stereo with foveated rendering, 13 new interaction profiles) and committing to an annual release cadence; Spatial Entities extensions for body tracking followed in June 2025, and vendors including Meta, Valve, XREAL and Varjo have deprecated their proprietary APIs in favour of OpenXR.
  - Valve announced Steam Frame, its second-ever VR headset, in 2025 (targeting summer 2026), and the enthusiast PC-VR niche gained the 107 g Bigscreen Beyond 2; XREAL previewed Project Aura, set to be the first AR headset on Android XR in 2026, and raised US$100 million alongside an extended Google partnership.
  - Strategically, Meta signalled a pivot away from the "metaverse" framing towards AI-centric smart glasses and away from a near-term Quest 4 (now reported for 2027), reflecting a wider industry bet that lightweight, Gemini/AI-assisted glasses rather than bulky headsets are the mass-market form factor.
  - Open challenges as of 2026 remain: sub-2.5-hour battery life on tethered headsets, premium pricing that keeps spatial computing niche, thin native XR software libraries outside gaming, waveguide field-of-view limits on display glasses (production waveguides only now reaching ~70 degrees), and privacy concerns around always-on cameras and on-device AI.

- ### References
  - 1. Road to VR (2026). XR Year in Review: The Most Important Stories of 2025 and What They Mean for 2026. https://roadtovr.com/xr-year-in-review-2025-most-important-stories-2026/
  - 2. TechCrunch (2025). Samsung takes on Apple's Vision Pro with new Galaxy XR headset. https://techcrunch.com/2025/10/22/samsung-takes-on-apples-vision-pro-with-new-galaxy-xr-headset/
  - 3. Google (2025). Introducing Galaxy XR, the first Android XR headset. https://blog.google/products-and-platforms/platforms/android/samsung-galaxy-xr/
  - 4. The Khronos Group (2024). Khronos Releases OpenXR 1.1 to Further Streamline Cross-Platform XR Development. https://www.khronos.org/news/press/khronos-releases-openxr-1.1-to-further-streamline-cross-platform-xr-development
  - 5. Reality Atlas (2026). Samsung Earnings Confirm Android XR Smart Glasses in 2026. https://www.reality-atlas.com/weekly/week-4-2026
  - 6. Wikipedia (2025). Samsung Galaxy XR. https://en.wikipedia.org/wiki/Samsung_Galaxy_XR

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
