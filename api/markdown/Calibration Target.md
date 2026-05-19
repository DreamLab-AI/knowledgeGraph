schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#CalibrationTarget
legacy_uri:: urn:visionclaw:concept:spatial-computing:calibration-target
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Computer Vision]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-41de9e4f6734"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#CalibrationTarget"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9805"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Calibration Target"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:calibration-target"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:calibration-target"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:c3f34c826744c596be63019f2ac87bbb6e0e487cd2c093220c32107ce762c71c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:calibration-target",
  "@type": "OntologyClass",
  "label": "Calibration Target",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:reference-standard",
      "vc:label": "Reference Standard"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:c3f34c826744c596be63019f2ac87bbb6e0e487cd2c093220c32107ce762c71c"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:c3f34c826744c596be63019f2ac87bbb6e0e487cd2c093220c32107ce762c71c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:flatness-control",
      "vc:label": "Flatness Control"
    },
    {
      "@id": "urn:visionflow:linked:pattern-definition",
      "vc:label": "Pattern Definition"
    },
    {
      "@id": "urn:visionflow:linked:precision-manufacturing",
      "vc:label": "Precision Manufacturing"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "Camera Calibration"
    },
    {
      "@id": "urn:visionflow:linked:color-accuracy",
      "vc:label": "Color Accuracy"
    },
    {
      "@id": "urn:visionflow:linked:lens-distortion-correction",
      "vc:label": "Lens Distortion Correction"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:c3f34c826744c596be63019f2ac87bbb6e0e487cd2c093220c32107ce762c71c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
