public:: true

# Camera Parameters
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3cb140a327f88b8957595e1fdd913ccb75ef2bb5f3cfb439cc9f9d6cf7012504",
  "@type": "Page",
  "vc:slug": "camera-parameters",
  "title": "Camera Parameters",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "Camera Calibration"
    },
    {
      "@id": "urn:visionflow:linked:object-measurement",
      "vc:label": "Object Measurement"
    },
    {
      "@id": "urn:visionflow:linked:scene-localization",
      "vc:label": "Scene Localization"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-reconstruction",
      "vc:label": "3D Reconstruction"
    },
    {
      "@id": "urn:visionflow:owl:class:calibration-target",
      "vc:label": "Calibration Target"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:imaging-parameters",
      "vc:label": "Imaging Parameters"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:optimization-algorithm",
      "vc:label": "Optimization Algorithm"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9806"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Camera Parameters"
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
  "@id": "urn:ngm:class:camera-parameters",
  "@type": "Class",
  "label": "Camera Parameters",
  "definition": "The intrinsic and extrinsic mathematical values that define a camera's optical characteristics and spatial positioning, comprising focal length, optical center, distortion coefficients (intrinsic) and rotation/translation relative to world coordinates (extrinsic), essential for 3D reconstruction ...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:imaging-parameters",
      "label": "Imaging Parameters"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:calibration-target",
        "label": "Calibration Target"
      },
      {
        "@id": "urn:ngm:class:optimization-algorithm",
        "label": "Optimization Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:camera-parameters:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3cb140a327f88b8957595e1fdd913ccb75ef2bb5f3cfb439cc9f9d6cf7012504"
  },
  "vc:resolutions": [
    {
      "raw": "[[Camera Calibration]]",
      "resolved": "urn:visionflow:linked:camera-calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Object Measurement]]",
      "resolved": "urn:visionflow:linked:object-measurement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scene Localization]]",
      "resolved": "urn:visionflow:linked:scene-localization",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Reconstruction]]",
      "resolved": "urn:visionflow:owl:class:3-d-reconstruction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Calibration Target]]",
      "resolved": "urn:visionflow:owl:class:calibration-target",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Imaging Parameters]]",
      "resolved": "urn:visionflow:owl:class:imaging-parameters",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimization Algorithm]]",
      "resolved": "urn:visionflow:owl:class:optimization-algorithm",
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
  - The intrinsic and extrinsic mathematical values that define a camera's optical characteristics and spatial positioning, comprising focal length, optical center, distortion coefficients (intrinsic) and rotation/translation relative to world coordinates (extrinsic), essential for 3D reconstruction and photogrammetry.

- ### Semantic Classification
  - owl-class:: spatial-computing:CameraParameters
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Imaging Parameters]]
  - requires:: [[Camera Calibration]], [[Calibration Target]], [[Optimization Algorithm]]
  - enables:: [[3D Reconstruction]], [[Object Measurement]], [[Scene Localization]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  - ## Technical Details
  - **Intrinsic Parameters** (3x3 Matrix K):
		- fx, fy: Focal lengths in pixel units
		- cx, cy: Principal point (optical center) coordinates
		- s: Skew coefficient (usually zero)
		- Maps 3D camera coordinates to 2D image coordinates
  - **Extrinsic Parameters** (4x4 Matrix):
		- R: 3x3 rotation matrix
		- t: 3x1 translation vector
		- Transforms world coordinates to camera coordinates
  - **Camera Matrix**: M = K[R | -RT] combines both for complete projection
  - **Lens Distortion** (nonlinear):
		- Radial distortion: Light bends more at lens edges
		- Tangential distortion: Lens not perfectly parallel to sensor
  - **Calibration Methods**:
		- Zhang's method (checkerboard patterns)
		- Homography-based estimation
		- Bundle adjustment optimization
  - ## Applications
  - Autonomous vehicle perception
  - Augmented reality overlay alignment
  - Robotic vision and navigation
  - 3D scanning and reconstruction
  - Machine vision inspection systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
