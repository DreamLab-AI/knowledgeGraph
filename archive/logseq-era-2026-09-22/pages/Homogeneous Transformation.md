public:: true

# Homogeneous Transformation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:homogeneous-transformation",
  "@type": "Page",
  "title": "Homogeneous Transformation",
  "vc:slug": "homogeneous-transformation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:homogeneous-transformation",
  "@type": "Class",
  "label": "Homogeneous Transformation",
  "definition": "A homogeneous transformation is a 4x4 matrix that compactly represents both rotation and translation of a rigid body in three-dimensional space using homogeneous coordinates. By embedding rotation and translation into a single matrix, transformations can be composed through matrix multiplication, making them the standard tool for relating coordinate frames in robotics and graphics. Homogeneous transformations underpin forward and inverse kinematics, pose representation and frame chaining along kinematic links.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:coordinate-transformation",
      "label": "Coordinate Transformation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:translation",
        "label": "Translation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:coordinate-transformation",
        "label": "Coordinate Transformation"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:forward-kinematics",
        "label": "Forward Kinematics"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:kinematics-model",
        "label": "Kinematics Model"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:coordinate-transformation",
        "label": "Coordinate Transformation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:coordinate-transformation",
        "label": "Coordinate Transformation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
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
  - A [[Homogeneous Transformation]] encodes rotation and [[Translation]] in one matrix, a form of [[Coordinate Transformation]] requiring [[Linear Algebra]] and enabling [[Forward Kinematics]].
- ### Overview
  - Represents rigid-body rotation and translation in a single 4x4 matrix.
  - Composes via matrix multiplication to chain coordinate frames.
  - Foundational for kinematics, pose and frame relationships.
- ### Mechanisms
  - Homogeneous coordinates extending 3D points to four components.
  - Block structure combining a rotation matrix and translation vector.
  - Composition and inversion of transformation chains.
  - Denavit-Hartenberg parameterisation of link frames.
- ### Applications
  - Forward and inverse kinematics of manipulators.
  - Pose representation and frame transforms in robotics.
  - Camera and sensor extrinsic calibration.
  - 3D graphics and scene-graph transforms.
- ### Relationships
  - requires:: [[Linear Algebra]]
  - hasPart:: [[Translation]]
  - relatedTo:: [[Coordinate Transformation]]
  - relatedTo:: [[Pose Estimation]]
  - enables:: [[Forward Kinematics]]
  - enables:: [[Inverse Kinematics]]
  - partOf:: [[Kinematics]]
  - uses:: [[Linear Algebra]]
  - supports:: [[Kinematics Model]]
  - supports:: [[Robot Control]]
  - dependsOn:: [[Coordinate Transformation]]
  - implements:: [[Coordinate Transformation]]
  - bridgesTo:: [[Pose Estimation]]
- ### Provenance
  - updated:: 2026-06-15
