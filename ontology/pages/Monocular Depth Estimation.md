public:: true

# Monocular Depth Estimation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:monocular-depth-estimation",
  "@type": "Page",
  "title": "Monocular Depth Estimation",
  "vc:slug": "monocular-depth-estimation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:monocular-depth-estimation",
  "@type": "Class",
  "label": "Monocular Depth Estimation",
  "definition": "Monocular depth estimation is the task of inferring the distance of scene points from a single image, recovering a depth map without the explicit stereo disparity available from multiple cameras. Because depth from one view is inherently ambiguous, modern approaches learn statistical and contextual cues such as texture gradients, object size, and perspective, typically using deep convolutional or transformer networks trained on labelled or self-supervised data. It contrasts with stereo and active depth sensing while offering a low-cost route to three-dimensional perception.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:depth-estimation",
      "label": "Depth Estimation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "LiDAR"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:self-supervised-learning",
        "label": "Self-Supervised Learning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:depth-sensing",
        "label": "Depth Sensing"
      },
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure From Motion"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
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
  - [[Monocular Depth Estimation]] is a form of [[Depth Estimation]].
  - It contrasts with [[Stereo Vision]] and [[LiDAR]].
  - It commonly uses a [[Convolutional Neural Network]].
  - It enables [[Scene Understanding]].
- ### Overview
  - Depth is estimated from a single view rather than disparity between cameras.
  - The single-view problem is geometrically ill-posed and resolved with learned priors.
  - Networks exploit monocular cues like texture, occlusion, and perspective.
  - Self-supervised training uses view synthesis as a learning signal.
- ### Mechanisms
  - Encoder-decoder networks regress per-pixel depth.
  - Scale ambiguity is intrinsic to monocular cues.
  - Self-supervision exploits photometric reprojection between frames.
  - Edge-aware losses sharpen depth discontinuities.
  - Evaluation uses error metrics against ground-truth depth.
- ### Applications
  - Augmented reality on single-camera devices.
  - Obstacle awareness for low-cost robots and drones.
  - Scene reconstruction from ordinary photographs.
  - Driver-assistance perception where stereo is unavailable.
- ### Relationships
  - partOf:: [[Depth Estimation]]
  - partOf:: [[Computer Vision]]
  - contrastsWith:: [[Stereo Vision]]
  - contrastsWith:: [[LiDAR]]
  - uses:: [[Convolutional Neural Network]]
  - uses:: [[Self-Supervised Learning]]
  - requires:: [[Convolutional Neural Network]]
  - enables:: [[Scene Understanding]]
  - supports:: [[Scene Understanding]]
  - supports:: [[Augmented Reality]]
  - relatedTo:: [[Depth Sensing]]
  - relatedTo:: [[Structure From Motion]]
  - relatedTo:: [[Point Cloud]]
  - relatedTo:: [[SLAM]]
  - bridgesTo:: [[Augmented Reality]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
