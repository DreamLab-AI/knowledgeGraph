public:: true

# Apple Vision Pro
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:apple-vision-pro",
  "@type": "Page",
  "vc:slug": "apple-vision-pro",
  "title": "Apple Vision Pro",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apple-inc-technology-corporation-vision-pro",
  "@type": "Class",
  "label": "Apple Vision Pro",
  "definition": "Apple Vision Pro is a spatial computing head-mounted display developed by Apple, announced in June 2023 and released in the United States in February 2024, running the visionOS operating system. It combines ultra-high-resolution micro-OLED displays, a custom R1 chip for sensor processing, and an M2 chip for compute, enabling a fully immersive or passthrough-composited mixed reality experience. The device employs eye-tracking, hand-tracking, and voice input as its primary interaction modalities, replacing the traditional touchscreen paradigm with gaze-and-pinch gesture control.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:head-mounted-display",
      "label": "Head-Mounted Display"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:micro-oled-display",
        "label": "Micro-OLED Display"
      },
      {
        "@id": "urn:ngm:class:apple-inc-technology-corporation",
        "label": "Apple R1 Chip"
      },
      {
        "@id": "urn:ngm:class:visionos",
        "label": "visionOS"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:apple-inc-technology-corporation",
        "label": "Apple Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:spatial-computing-runtime",
        "label": "Spatial Computing Runtime"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      },
      {
        "@id": "urn:ngm:class:spatial-user-interfaces",
        "label": "Spatial User Interface"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:passthrough-video",
        "label": "Passthrough Video"
      },
      {
        "@id": "urn:ngm:class:realitykit",
        "label": "RealityKit"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:meta-quest",
        "label": "Meta Quest"
      },
      {
        "@id": "urn:ngm:class:tele-025-microsoft-hololens",
        "label": "Microsoft HoloLens"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:display-technology",
        "label": "Display Technology"
      },
      {
        "@id": "urn:ngm:class:wearable-computing",
        "label": "Wearable Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:apple-xr-headset",
      "label": "Apple XR Headset"
    },
    {
      "@id": "urn:ngm:class:apple-spatial-computer",
      "label": "Apple Spatial Computer"
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

- ### Definition
  - [[Apple Vision Pro]] is Apple's first [[Head-Mounted Display]] product, designed as a general-purpose [[Spatial Computing Paradigm]] platform rather than a narrowly scoped VR or AR device. Running visionOS, it renders virtual and real content in a unified spatial environment, blending passthrough video from outward-facing cameras with rendered 3D interfaces. The device's [[Eye Tracking]] and [[Hand Tracking]] systems enable hands-free, no-controller interaction, while personalised [[Spatial Audio]] anchors sound to virtual positions in the user's environment.

- ### Relationships
  - Apple Vision Pro enables [[Spatial Computing Paradigm]], [[Mixed Reality]], and [[Immersive Experience]] scenarios by providing a high-fidelity display and input platform. It depends upon [[Eye Tracking]] and [[Hand Tracking]] for its novel interaction model, and integrates [[Spatial Audio]] for acoustic immersion. It sits within the broader [[Extended Reality]] landscape and advances [[Display Technology]] through its micro-OLED panel implementation.

- ### Content
  - Apple announced the Vision Pro at its Worldwide Developers Conference in June 2023, positioning it explicitly as a "spatial computer" rather than a headset. The announcement followed years of reported AR/VR development at Apple, with the company's optics and sensor acquisitions dating back to at least 2013. The USD 3,499 launch price and February 2024 US-only release positioned it as a developer and early-adopter device rather than a mainstream consumer product.

  - The hardware centres on dual micro-OLED displays delivering approximately 23 megapixels per eye, driven by an M2 chip for general compute and a purpose-built R1 chip that processes input from 12 cameras, 5 sensors, and 6 microphones with sub-12-millisecond latency to eliminate perceptual lag in the passthrough feed. The eye-tracking system uses infrared illuminators and cameras to resolve gaze to sub-degree precision, enabling the "look to target, pinch to select" interaction paradigm without hand-held controllers.

  - The visionOS ecosystem has attracted application development from productivity software vendors (Microsoft Office, Adobe), media streaming services (Disney+), and spatial content creators. Enterprise adoption has emerged in fields including surgical planning, industrial design review, and immersive training simulation. Apple's Reality Composer Pro toolchain and RealityKit framework provide developers with native spatial development capabilities, while Unity and Unreal Engine have added visionOS export targets.

  - Through 2024–2025, Apple Vision Pro has catalysed developer experimentation with spatial interfaces whilst facing questions about long-term comfort, library breadth, and price elasticity. A lower-cost successor device has been widely anticipated, which would be critical to driving mass-market adoption. The device has nonetheless established visionOS as a reference platform for spatial computing application design, influencing interface paradigms across the broader [[Extended Reality]] industry.