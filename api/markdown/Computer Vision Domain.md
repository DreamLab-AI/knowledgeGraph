public:: true

# Computer Vision Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a8dfbc4d2dfe9a1ce9c7c15b5f9277c1b4fc66fbd4744daba4df7eeff1ffab2b",
  "@type": "Page",
  "vc:slug": "computer-vision-domain",
  "title": "Computer Vision Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:image-classification",
      "vc:label": "Image Classification"
    },
    {
      "@id": "urn:visionflow:linked:object-detection",
      "vc:label": "Object Detection"
    },
    {
      "@id": "urn:visionflow:linked:image-segmentation",
      "vc:label": "Image Segmentation"
    },
    {
      "@id": "urn:visionflow:linked:optical-flow",
      "vc:label": "Optical Flow"
    },
    {
      "@id": "urn:visionflow:linked:3-d-reconstruction",
      "vc:label": "3D Reconstruction"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:linear-algebra",
      "vc:label": "Linear Algebra"
    },
    {
      "@id": "urn:visionflow:linked:signal-processing",
      "vc:label": "Signal Processing"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-navigation",
      "vc:label": "Autonomous Navigation"
    },
    {
      "@id": "urn:visionflow:linked:visual-inspection",
      "vc:label": "Visual Inspection"
    },
    {
      "@id": "urn:visionflow:linked:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics-domain",
      "vc:label": "Computer Graphics Domain"
    },
    {
      "@id": "urn:visionflow:linked:robotics-domain",
      "vc:label": "Robotics Domain"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning-domain",
      "vc:label": "Deep Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-22989-2022",
      "vc:label": "ISO/IEC 22989:2022"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Computer Vision Domain"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computer-vision-domain",
  "@type": "Class",
  "label": "Computer Vision Domain",
  "definition": "The Computer Vision Domain covers the extraction of structured information from images, video and other visual signals. Its scope includes image formation, feature detection, recognition, segmentation and three-dimensional scene understanding. It is an application sub-area of the Artificial Intelligence Domain and relies heavily on the methods of the Machine Learning Domain. The boundary excludes the generation of imagery for display purposes, which belongs to the Computer Graphics Domain.",
  "domain": "computer-vision",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence-domain",
      "label": "Artificial Intelligence Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:image-classification",
        "label": "Image Classification"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:image-segmentation",
        "label": "Image Segmentation"
      },
      {
        "@id": "urn:ngm:class:optical-flow",
        "label": "Optical Flow"
      },
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline-domain",
        "label": "Machine Learning Domain"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:visual-inspection",
        "label": "Visual Inspection"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:computer-vision-domain:a918d568c16f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a8dfbc4d2dfe9a1ce9c7c15b5f9277c1b4fc66fbd4744daba4df7eeff1ffab2b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Image Classification]]",
      "resolved": "urn:visionflow:linked:image-classification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Object Detection]]",
      "resolved": "urn:visionflow:linked:object-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Segmentation]]",
      "resolved": "urn:visionflow:linked:image-segmentation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optical Flow]]",
      "resolved": "urn:visionflow:linked:optical-flow",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Reconstruction]]",
      "resolved": "urn:visionflow:linked:3-d-reconstruction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linear Algebra]]",
      "resolved": "urn:visionflow:linked:linear-algebra",
      "kind": "StubLink"
    },
    {
      "raw": "[[Signal Processing]]",
      "resolved": "urn:visionflow:linked:signal-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Navigation]]",
      "resolved": "urn:visionflow:linked:autonomous-navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Visual Inspection]]",
      "resolved": "urn:visionflow:linked:visual-inspection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:linked:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics Domain]]",
      "resolved": "urn:visionflow:linked:computer-graphics-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning Domain]]",
      "resolved": "urn:visionflow:linked:deep-learning-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 22989:2022]]",
      "resolved": "urn:visionflow:linked:iso-iec-22989-2022",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Computer Vision Domain covers the extraction of structured information from images, video and other visual signals. Its scope includes image formation, feature detection, recognition, segmentation and three-dimensional scene understanding. It is an application sub-area of the Artificial Intelligence Domain and relies heavily on the methods of the Machine Learning Domain. The boundary excludes the generation of imagery for display purposes, which belongs to the Computer Graphics Domain.

- ### Semantic Classification
  - owl-class:: cv:ComputerVisionDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Computer Graphics Domain]], [[Robotics Domain]], [[Deep Learning Domain]]
  - has-part:: [[Image Classification]], [[Object Detection]], [[Image Segmentation]], [[Optical Flow]], [[3D Reconstruction]]
  - requires:: [[Machine Learning Domain]], [[Linear Algebra]], [[Signal Processing]]
  - enables:: [[Autonomous Navigation]], [[Visual Inspection]], [[Augmented Reality]]

- ### Content
  - The Computer Vision Domain is concerned with interpreting visual data, mapping pixels to semantic and geometric descriptions of a scene. Its scope runs from low-level operations such as edge and corner detection through to high-level tasks such as recognition and scene reconstruction. The boundary separates analysis from synthesis, so producing a rendered frame is graphics work whereas inferring depth from a frame is vision work.
  - Member concepts include Image Classification, Object Detection and Image Segmentation, which assign labels at the image, instance and pixel level respectively, alongside Optical Flow for motion estimation and 3D Reconstruction for geometric inference. These tasks share dependence on machine learning methods, linear algebra for geometric transforms and signal processing for filtering and sampling.
  - The domain bridges to the Computer Graphics Domain through shared geometric and photometric models and to the Robotics Domain where perception drives action. Its modern methods are largely supplied by the Deep Learning Domain, and its outputs enable autonomous navigation, automated visual inspection and augmented reality overlays.

- ### Provenance
  - sources:: [[ISO/IEC 22989:2022]]
  - migration-date:: 2026-05-29T00:00:00Z
