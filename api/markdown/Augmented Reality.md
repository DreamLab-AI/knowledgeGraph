public:: true
alias:: AugmentedReality

# Augmented Reality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c49800be1c4585cfef2523c311b410ff903bc646bf08ba59829b64374aa7384c",
  "@type": "Page",
  "vc:slug": "augmented-reality",
  "title": "Augmented Reality",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:contextual-information-display",
      "vc:label": "Contextual Information Display"
    },
    {
      "@id": "urn:visionflow:linked:extended-reality",
      "vc:label": "Extended Reality"
    },
    {
      "@id": "urn:visionflow:linked:remote-assistance",
      "vc:label": "Remote Assistance"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-experiences",
      "vc:label": "Immersive Experiences"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7031"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Augmented Reality"
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
  "@id": "urn:ngm:class:augmented-reality",
  "@type": "Class",
  "label": "Augmented Reality",
  "definition": "Augmented Reality (AR) is a technology that overlays digital content onto the real world in real-time, enhancing users' perception of their physical environment through smartphones, head-mounted displays, or smart glasses. AR systems require coupling of real and virtual environments, real-time interaction, and precise 3D registration of virtual objects aligned with physical space.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:extended-reality",
      "label": "Extended Reality"
    },
    {
      "@id": "urn:ngm:class:extended-reality-xr",
      "label": "Extended Reality (XR)"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      },
      {
        "@id": "urn:ngm:class:marker-based-tracking",
        "label": "Marker Tracking"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-assistance",
        "label": "Remote Assistance"
      },
      {
        "@id": "urn:ngm:class:immersive-experiences",
        "label": "Immersive Experiences"
      },
      {
        "@id": "urn:ngm:class:surgical-navigation",
        "label": "Surgical Guidance"
      },
      {
        "@id": "urn:ngm:class:industrial-maintenance",
        "label": "Industrial Maintenance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      },
      {
        "@id": "urn:ngm:class:depth-sensor",
        "label": "Depth Sensor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
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
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gesture-recognition",
        "label": "Gesture Recognition"
      },
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ar",
      "label": "AR"
    },
    {
      "@id": "urn:ngm:class:mixed-reality-overlay",
      "label": "Mixed Reality Overlay"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:augmented-reality:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c49800be1c4585cfef2523c311b410ff903bc646bf08ba59829b64374aa7384c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Contextual Information Display]]",
      "resolved": "urn:visionflow:linked:contextual-information-display",
      "kind": "StubLink"
    },
    {
      "raw": "[[Extended Reality]]",
      "resolved": "urn:visionflow:linked:extended-reality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Remote Assistance]]",
      "resolved": "urn:visionflow:linked:remote-assistance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Experiences]]",
      "resolved": "urn:visionflow:owl:class:immersive-experiences",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
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
  - Augmented Reality (AR) is a technology that overlays digital content onto the real world in real-time, enhancing users' perception of their physical environment through smartphones, head-mounted displays, or smart glasses. AR systems operate on three essentialities: coupling of real and virtual environments, real-time interaction, and precise 3D visualisation of virtual objects aligned with physical space.

- ### Semantic Classification
  - owl-class:: spatial-computing:AugmentedReality
  - owl-role:: Concept
  - belongs-to-domain:: [[Metaverse]]

- ### Relationships
  - bridges-to:: [[Digital Twin]]
  - is-subclass-of:: [[Extended Reality]]
  - enables:: [[Immersive Experiences]], [[Contextual Information Display]], [[Remote Assistance]]

- ### Content

  ## Features
  - **Real-time Object Recognition**: AI-powered detection and tracking of physical objects for content anchoring
  - **Spatial Mapping**: 3D reconstruction of physical environments for accurate content placement
  - **Gesture Control**: Natural hand and body movement recognition for interaction
  - **Scene Understanding**: Semantic analysis of environments to enable contextual content display
  - **Marker-based and Markerless Tracking**: Multiple methods for aligning virtual content with physical space
  - **Occlusion Handling**: Virtual objects correctly hidden behind real objects for realism
  - **Light Estimation**: Matching virtual object lighting to real-world conditions

  ## Use Cases
  - **Manufacturing and Maintenance**: Overlaying digital schematics and instructions onto physical machinery for assembly and repair
  - **Retail and Commerce**: Virtual try-on experiences for clothing, makeup, and furniture placement
  - **Navigation and Wayfinding**: Directional overlays on real-world views for pedestrian and vehicle navigation
  - **Education and Training**: Interactive 3D models overlaid on textbooks or real equipment
  - **Healthcare**: Surgical guidance with patient anatomy visualised in situ
  - **Architecture and Construction**: Full-scale 3D building models visible on construction sites
  - **Remote Collaboration**: Shared AR annotations for distributed teams working on physical objects

  ## Market Context (2025)
  The spatial computing market is projected to grow from $20.43 billion in 2025 to $85.56 billion by 2030, representing a 33.16% CAGR. AR wearables are gaining prominence as they enhance rather than replace reality, integrating AI-powered assistance into existing workflows.

- ### Current Landscape (2026)
  - Meta shipped the Ray-Ban Display on 30 September 2025 (US, $799), the first full-colour waveguide AR display inside a Ray-Ban frame, bundled with the EMG-based Neural Band wrist controller; Meta paused the international rollout on 6 January 2026 after strong US demand and slipped its high-end Project Phoenix AR glasses from 2026 to the first half of 2027.
  - Google launched Android XR as an open competitor to Apple's visionOS, and Samsung shipped the first Android XR headset, Galaxy XR (Project Moohan), on 21 October 2025 at $1,800 with 4K micro-OLED per eye and deep Gemini integration, undercutting Apple Vision Pro.
  - The 2026 glasses wave is now concrete: Samsung confirmed Android XR smart glasses (two models, SM-O200P/SM-O200J, reportedly on Qualcomm Snapdragon AR1 with Gemini) for 2026 on its Q4 2025 earnings call, and XREAL's Project Aura, previewed at Google I/O, is set to be the first Android XR tethered AR glasses in mid-2026.
  - Key players have consolidated around a few camps: Meta (Ray-Ban Meta Gen 2 at $379 plus Ray-Ban Display) leads consumer smart glasses; the Google/Samsung Android XR bloc (with Warby Parker, Gentle Monster, XREAL and Qualcomm) is the main challenger; Apple, Snap (consumer Specs in 2026), Vuzix, Lumus and Magic Leap fill enterprise and optics niches.
  - Market estimates diverge widely but agree on rapid growth: Grand View Research puts the AR market at roughly $120bn in 2025 rising to $170bn in 2026, while Mordor Intelligence models around $100bn in 2025 to $125bn in 2026 at a ~25% CAGR, with remote assistance and maintenance the largest enterprise application.
  - Standards are maturing: Khronos released OpenXR 1.1 in April 2024 (now backed by ~13 vendors, with Spatial Entities extensions for anchors and plane detection), and the W3C WebXR Device API reached Candidate Recommendation Draft status on 9 June 2026, though native WebXR on iPhone/iPad remains absent, forcing AR Quick Look fallbacks.
  - Regulation and supply are tightening: India's Bureau of Indian Standards mandates migration to IS/IEC 62368-1:2023 for XR devices from 1 May 2026, ISO/IEC 5927:2024 sets AR/VR safety guidance, and EU/California scrutiny of eye- and hand-tracking biometrics is rising.
  - Open challenges as of 2026 remain hardware-bound: sub-60% waveguide combiner yields and gallium/germanium optics shortages, all-day battery and thermal limits in glasses-form devices, narrow fields of view (Ray-Ban Display is a small static monocular display, with ~70 degree waveguides only now production-ready), and fragmented cross-platform tooling that keeps OpenXR's write-once promise largely theoretical.

- ### References
  - 1. Treeview Studio (2026). Best Smart Glasses & AI Glasses in 2026: 15 Models Compared. https://treeview.studio/blog/best-smart-glasses
  - 2. Road to VR (2026). XR Year in Review: The Most Important Stories of 2025 and What's Next. https://roadtovr.com/xr-year-in-review-2025-most-important-stories-2026/
  - 3. N-iX MR (2026). XR Hardware Coming in 2026: AR & VR Releases — Confirmed Launches, Delays and the Bigger Picture. https://mr.n-ix.com/ar-vr-releases-in-2026-confirmed-launches-delays-and-the-bigger-picture/
  - 4. Mordor Intelligence (2026). Augmented Reality Market Size, Share & Trends Report 2031. https://www.mordorintelligence.com/industry-reports/augmented-reality-market
  - 5. Grand View Research (2026). Augmented Reality Market Size & Share Report, 2026-2033. https://www.grandviewresearch.com/industry-analysis/augmented-reality-market

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
