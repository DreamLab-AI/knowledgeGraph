public:: true

# Arcore
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:arcore",
  "@type": "Page",
  "title": "Arcore",
  "vc:slug": "arcore",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arcore",
  "@type": "Class",
  "label": "Arcore",
  "definition": "ARCore is Google's software development kit for building augmented-reality applications on Android and, via web standards, the browser. It provides motion tracking, environmental understanding and light estimation by fusing camera frames with inertial sensors to anchor virtual content in the physical world. ARCore is the principal counterpart to Apple's ARKit in the mobile-AR ecosystem.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:augmented-reality",
      "label": "Augmented Reality"
    },
    {
      "@id": "urn:ngm:class:ar-experiences",
      "label": "Ar Experiences"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Spatial Anchors"
      },
      {
        "@id": "urn:ngm:class:spatial-anchor",
        "label": "Spatial Anchor"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:visual-slam",
        "label": "Visual SLAM"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Spatial Anchors"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:visual-slam",
        "label": "Visual SLAM"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - ARCore is Google's software development kit for building augmented-reality applications on Android and, via web standards, the browser. It provides motion tracking, environmental understanding and light estimation by fusing camera frames with inertial sensors to anchor virtual content in the physical world. ARCore is the principal counterpart to Apple's ARKit in the mobile-AR ecosystem.
  - Related concepts: [[Augmented Reality]] [[Visual SLAM]] [[Spatial Anchors]] [[Depth Estimation]] [[Camera Calibration]]
- ### Overview
  - ARCore estimates the device's pose in real time by combining visual feature tracking with inertial measurement, a form of visual-inertial SLAM, and builds a sparse map of the surrounding scene. It detects planes and feature points onto which applications place anchors, persists those anchors for shared and cross-session experiences, and estimates ambient lighting so virtual objects render plausibly. Depth APIs add per-pixel range for occlusion and physics.
- ### Mechanisms
  - Visual-inertial motion tracking and device pose estimation
  - Plane and feature-point environmental understanding
  - Anchors for persistent and shared content placement
  - Light estimation for realistic rendering
  - Depth API for occlusion and collision
- ### Applications
  - Mobile AR product previews and try-on
  - Indoor navigation and AR wayfinding
  - Shared multi-user AR via cloud anchors
  - Measurement and scene-capture utilities
- ### Relationships
  - subClassOf:: [[Augmented Reality]]
  - supports:: [[Spatial Anchors]]
  - supports:: [[Spatial Anchor]]
  - standardizedBy:: [[Augmented Reality]]
  - uses:: [[Visual SLAM]]
  - uses:: [[SLAM]]
  - uses:: [[Depth Estimation]]
  - implements:: [[SLAM]]
  - enables:: [[Scene Understanding]]
  - requires:: [[Camera Calibration]]
  - relatedTo:: [[Spatial Anchors]]
  - partOf:: [[Augmented Reality]]
  - dependsOn:: [[Visual SLAM]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
