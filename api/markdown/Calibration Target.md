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

- ### Current Landscape (2026)
  - The 2024-2026 research frontier has shifted decisively towards targetless (target-free) extrinsic calibration, in which learned correspondences replace physical boards: MDPCalib (2024) fuses visual/LiDAR odometry with deep point correspondences needing no initial guess, while MIAS-LCEC repurposes the MobileSAM vision model for cross-modal mask matching.
  - Rendering-based methods matured through 2025, with TLC-Calib (arXiv 2504.04597) using a differentiable 3D Gaussian Splatting scene representation and a photometric loss to jointly optimise sensor poses, and DF-Calib (arXiv 2504.01416) recasting LiDAR-camera calibration as an intra-modality depth-flow problem.
  - CalibRefine (2025) added Vision-Transformer cross-attention for online, iterative post-refinement, and at ICCV 2025 MamV2XCalib became the first V2X infrastructure-camera calibration method to use a Mamba state-space model, exploiting passing vehicle-side LiDAR with no dedicated reference object.
  - Commercially, Tangram Vision's MetriCal is the standout production toolchain: v15.0.0 (23 October 2025) added camera-free LiDAR-LiDAR calibration, following the July 2025 addition of Local Navigation System (odometry) alignment as a fourth modality alongside cameras, LiDAR and IMU.
  - MetriCal moved to self-serve credit-based licensing on 19 November 2025 (3 base credits per calibration, from $249 for 15 credits) and now sells physical AprilGrid, Markerboard and LiDAR circle targets directly through an online store.
  - Physical fiducial targets remain the metrological workhorse where absolute accuracy matters: AprilTag (notably the 36h11 family), Kalibr-style AprilGrids and ChArUco boards still anchor intrinsic and rig calibration, with 2025 target-based tools such as FAST-Calib (circular-hole ArUco) and Gentilini et al.'s multi-LiDAR ChArUco pipeline (July 2025).
  - Open challenges as of 2026 centre on the sparsity of LiDAR point clouds versus dense imagery, sensitivity to initialisation in optimisation-based targetless methods, and robust online recalibration under vibration and inter-sensor timing jitter without ground-truth matrices.

- ### References
  - 1. Tangram Vision (2025). MetriCal Releases + Changelogs (v15.0.0, 23 Oct 2025 — LiDAR-LiDAR calibration). https://docs.tangramvision.com/metrical/15.0/changelog/
  - 2. Minor, B. / Tangram Vision (2025). Pay for What You Calibrate: Credit-Based Licensing for MetriCal. https://www.tangramvision.com/blog/pay-for-what-you-calibrate-tangram-vision-introduces-credit-based-licensing
  - 3. Zhu, Y., Wang, Z. and Wang, Y. (2025). MamV2XCalib: V2X-based Target-less Infrastructure Camera Calibration with State Space Model. ICCV 2025. https://openaccess.thecvf.com/content/ICCV2025/html/Zhu_MamV2XCalib_V2X-based_Target-less_Infrastructure_Camera_Calibration_with_State_Space_Model_ICCV_2025_paper.html
  - 4. CalibRefine authors (2025). CalibRefine: Deep Learning-Based Online Automatic Targetless LiDAR-Camera Calibration with Iterative and Attention-Driven Post-Refinement. https://huggingface.co/papers/2502.17648
  - 5. TLC-Calib authors (2025). Targetless LiDAR-Camera Calibration with Anchored 3D Gaussians. arXiv:2504.04597. https://arxiv.org/html/2504.04597v1
  - 6. Han, S. et al. (2025). DF-Calib: Targetless LiDAR-Camera Calibration via Depth Flow. arXiv:2504.01416. https://ar5iv.labs.arxiv.org/html/2504.01416

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
