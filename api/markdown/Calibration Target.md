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
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reference-standard",
        "label": "Reference Standard"
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
