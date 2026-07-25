public:: true

# Camera Model

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:camera-model", "@type": "Page", "title": "Camera Model", "vc:slug": "camera-model", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:camera-model",
  "@type": "Class",
  "label": "Camera Model",
  "definition": "A camera model is a mathematical description that maps three-dimensional scene points to two-dimensional image coordinates, capturing the geometry of how a camera projects the world. It encodes intrinsic parameters such as focal length and principal point alongside extrinsic parameters describing pose, and may model lens distortion. Camera models underpin calibration, reconstruction and pose estimation in computer vision and spatial computing.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-vision",
      "label": "Computer Vision"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure From Motion"
      },
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A geometric mapping from 3D scene points to 2D image points used throughout [[Computer Vision]].
  - Encodes intrinsic optics and extrinsic [[Pose Estimation]] of the device.
  - The basis for [[Camera Calibration]] and metric 3D reconstruction.
- ### Overview
  - The pinhole model is the canonical formulation, extended with distortion terms for real lenses.
  - Intrinsic parameters fix focal length and principal point; extrinsics fix rotation and translation.
  - Accurate models are prerequisites for [[Structure From Motion]] and [[Stereo Vision]].
- ### Mechanisms
  - Projection composes extrinsic transform, perspective division and intrinsic scaling.
  - Radial and tangential distortion correct deviations from the ideal pinhole.
  - Calibration estimates parameters from known targets or scene constraints.
  - Reprojection error quantifies how well the model fits observed features.
- ### Applications
  - Camera calibration for measurement and augmented reality alignment.
  - Depth recovery via stereo and multi-view geometry.
  - Pose tracking for [[SLAM]] and robotics navigation.
- ### Relationships
  - subClassOf:: [[Computer Vision]]
  - partOf:: [[Computer Vision]]
  - requires:: [[Camera Calibration]]
  - requires:: [[Linear Algebra]]
  - enables:: [[Pose Estimation]]
  - enables:: [[Structure From Motion]]
  - enables:: [[Depth Estimation]]
  - uses:: [[Photogrammetry]]
  - supports:: [[SLAM]]
  - supports:: [[Augmented Reality]]
  - dependsOn:: [[Linear Algebra]]
  - relatedTo:: [[Stereo Vision]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[Photogrammetry]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
