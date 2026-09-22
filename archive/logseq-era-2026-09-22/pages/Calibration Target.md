public:: true

# Calibration Target
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c3f34c826744c596be63019f2ac87bbb6e0e487cd2c093220c32107ce762c71c",
  "@type": "Page",
  "vc:slug": "calibration-target",
  "title": "Calibration Target",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "Camera Calibration"
    },
    {
      "@id": "urn:visionflow:linked:color-accuracy",
      "vc:label": "Color Accuracy"
    },
    {
      "@id": "urn:visionflow:linked:flatness-control",
      "vc:label": "Flatness Control"
    },
    {
      "@id": "urn:visionflow:linked:lens-distortion-correction",
      "vc:label": "Lens Distortion Correction"
    },
    {
      "@id": "urn:visionflow:linked:pattern-definition",
      "vc:label": "Pattern Definition"
    },
    {
      "@id": "urn:visionflow:linked:precision-manufacturing",
      "vc:label": "Precision Manufacturing"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:reference-standard",
      "vc:label": "Reference Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9805"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Calibration Target"
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
  "@id": "urn:ngm:class:calibration-target",
  "@type": "Class",
  "label": "Calibration Target",
  "definition": "A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:checkerboard-pattern",
        "label": "Checkerboard Pattern"
      },
      {
        "@id": "urn:ngm:class:fiducial-marker",
        "label": "Fiducial Marker"
      },
      {
        "@id": "urn:ngm:class:circle-grid",
        "label": "Circle Grid"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:camera-calibration-pipeline",
        "label": "Camera Calibration Pipeline"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:flatness-control",
        "label": "Flatness Control"
      },
      {
        "@id": "urn:ngm:class:pattern-definition",
        "label": "Pattern Definition"
      },
      {
        "@id": "urn:ngm:class:precision-manufacturing",
        "label": "Precision Manufacturing"
      },
      {
        "@id": "urn:ngm:class:controlled-illumination",
        "label": "Controlled Illumination"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:color-accuracy",
        "label": "Color Accuracy"
      },
      {
        "@id": "urn:ngm:class:lens-distortion-correction",
        "label": "Lens Distortion Correction"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:machine-vision",
        "label": "Machine Vision"
      },
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:scene-geometry",
        "label": "Scene Geometry"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:intrinsic-parameters",
        "label": "Intrinsic Parameters"
      },
      {
        "@id": "urn:ngm:class:extrinsic-parameters",
        "label": "Extrinsic Parameters"
      },
      {
        "@id": "urn:ngm:class:ground-truth-labels",
        "label": "Ground Truth"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reference-standard",
        "label": "Reference Standard"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:calibration-chart",
      "label": "Calibration Chart"
    },
    {
      "@id": "urn:ngm:class:calibration-board",
      "label": "Calibration Board"
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
  "@id": "urn:visionflow:annotation:link-resolutions:calibration-target:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c3f34c826744c596be63019f2ac87bbb6e0e487cd2c093220c32107ce762c71c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Camera Calibration]]",
      "resolved": "urn:visionflow:linked:camera-calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Color Accuracy]]",
      "resolved": "urn:visionflow:linked:color-accuracy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Flatness Control]]",
      "resolved": "urn:visionflow:linked:flatness-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lens Distortion Correction]]",
      "resolved": "urn:visionflow:linked:lens-distortion-correction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pattern Definition]]",
      "resolved": "urn:visionflow:linked:pattern-definition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Precision Manufacturing]]",
      "resolved": "urn:visionflow:linked:precision-manufacturing",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reference Standard]]",
      "resolved": "urn:visionflow:owl:class:reference-standard",
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
  - A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:CalibrationTarget
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Reference Standard]]
  - requires:: [[Precision Manufacturing]], [[Pattern Definition]], [[Flatness Control]]
  - enables:: [[Camera Calibration]], [[Lens Distortion Correction]], [[Color Accuracy]]

- ### Content

  - ## Technical Details
  - **Common Pattern Types**:
		- **Checkerboard (Chessboard)**: Most common; corners provide invariant reference points
		- **Circle Grid**: Robust against noise/blur; suitable for high-accuracy applications
		- **ChArUco Board**: Hybrid combining checkerboard with ArUco fiducial markers for error correction
		- **Asymmetric Patterns**: Enhanced pose estimation and orientation detection
  - **Material Requirements**:
		- Matte surface (avoid specular highlights)
		- Absolute flatness (no bending or folding)
		- Precision printing (laser preferred over inkjet)
		- Ceramic targets for ultimate accuracy (low thermal expansion)
  - **Best Practices**:
		- Diffuse lighting without shadows
		- Rigid mounting to flat surface
		- Multiple viewing angles during capture
		- Professional manufacturing for production use
  - ## Applications
  - OpenCV camera calibration
  - MATLAB Computer Vision Toolbox
  - Photogrammetry and 3D scanning
  - Augmented reality system setup
  - Machine vision quality inspection

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
