public:: true

# Display Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3f26e20e0d1b799f0fcba34531d43a4c659ee4f34ebc8c83bb5a40d4dd000a7b",
  "@type": "Page",
  "vc:slug": "display-hardware",
  "title": "Display Hardware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:display-technology",
      "vc:label": "Display Technology"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing",
      "vc:label": "Graphics Processing"
    },
    {
      "@id": "urn:visionflow:linked:immersive-visualization",
      "vc:label": "Immersive Visualization"
    },
    {
      "@id": "urn:visionflow:linked:optical-systems",
      "vc:label": "Optical Systems"
    },
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:owl:class:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:mixed-reality",
      "vc:label": "Mixed Reality"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9882"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Display Hardware"
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
  "@id": "urn:ngm:class:display-hardware",
  "@type": "Class",
  "label": "Display Hardware",
  "definition": "The physical devices and display technologies that render visual content for virtual, augmented, and mixed reality experiences, including VR headsets, AR glasses, and related optical systems that create immersive visual interfaces for metaverse applications.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:sc-display-and-rendering",
    "label": "Display and Rendering"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:optical-systems",
        "label": "Optical Systems"
      },
      {
        "@id": "urn:ngm:class:display-panel",
        "label": "Display Panel"
      },
      {
        "@id": "urn:ngm:class:waveguide-optics",
        "label": "Waveguide Optics"
      },
      {
        "@id": "urn:ngm:class:microdisplay",
        "label": "Microdisplay"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:xr-device",
        "label": "XR Device"
      },
      {
        "@id": "urn:ngm:class:spatial-computing-platform",
        "label": "Spatial Computing Platform"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:display-technology",
        "label": "Display Technology"
      },
      {
        "@id": "urn:ngm:class:graphics-processing",
        "label": "Graphics Processing"
      },
      {
        "@id": "urn:ngm:class:sensor-input",
        "label": "Sensor Input"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-visualization",
        "label": "Immersive Visualization"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:passthrough-ar",
        "label": "Passthrough AR"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:embedded-system-on-chip",
        "label": "Embedded System-on-Chip"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:oled-technology",
        "label": "OLED Technology"
      },
      {
        "@id": "urn:ngm:class:micro-led-technology",
        "label": "Micro-LED Technology"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      },
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:openxr-standard",
        "label": "OpenXR Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:flat-panel-display",
        "label": "Flat Panel Display"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:xr-display-hardware",
      "label": "XR Display Hardware"
    },
    {
      "@id": "urn:ngm:class:head-mounted-display",
      "label": "Head-Mounted Display"
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
  "@id": "urn:visionflow:annotation:link-resolutions:display-hardware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3f26e20e0d1b799f0fcba34531d43a4c659ee4f34ebc8c83bb5a40d4dd000a7b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Display Technology]]",
      "resolved": "urn:visionflow:linked:display-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Processing]]",
      "resolved": "urn:visionflow:linked:graphics-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Immersive Visualization]]",
      "resolved": "urn:visionflow:linked:immersive-visualization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Optical Systems]]",
      "resolved": "urn:visionflow:linked:optical-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:owl:class:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality]]",
      "resolved": "urn:visionflow:owl:class:mixed-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
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
  - The physical devices and display technologies that render visual content for virtual, augmented, and mixed reality experiences, including VR headsets, AR glasses, and related optical systems that create immersive visual interfaces for metaverse applications.

- ### Bridge-To
  - bridges-to:: [[Sensor Input]] (rb)

- ### Semantic Classification
  - owl-class:: spatial-computing:DisplayHardware
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Hardware]]
  - requires:: [[Display Technology]], [[Optical Systems]], [[Graphics Processing]]
  - enables:: [[Immersive Visualization]], [[Spatial Computing Paradigm]], [[Mixed Reality]]

- ### Content

  - ## Technical Details
  - **Market Position (2024)**:
		- Meta: 74.6% market share across VR/AR
		- Q1 2025: 18.1% YoY growth in global headset shipments
		- VR/AR/MR display market: Projected $4.6B by 2034
  - **Key Devices (2024)**:
		- Meta Quest 3S: $299, pancake lenses, Snapdragon XR2 Gen 2
		- Apple Vision Pro: ~370K-420K units sold in 2024
		- Meta Orion: Advanced AR glasses with holographic displays
		- Samsung/Google MR headset: OLED microdisplay collaboration
  - **Display Technologies**:
		- LCD (Liquid Crystal Display)
		- OLED with TFT backplanes
		- OLED-on-silicon/micro-OLED
		- Micro-LED microdisplays
		- Liquid crystal on silicon (LCoS)
		- Waveguide optics for AR
  - **Usage**: 70% gaming, 42% video, 35% fitness, 22% creative
  - ## Applications
  - VR gaming and entertainment
  - Enterprise training and simulation
  - AR workplace assistance
  - Healthcare visualization
  - Metaverse social interaction

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
