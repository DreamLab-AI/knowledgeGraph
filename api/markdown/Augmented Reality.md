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
  "subClassOf": {
    "@id": "urn:ngm:class:extended-reality",
    "label": "Extended Reality"
  },
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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
