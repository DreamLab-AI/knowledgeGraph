public:: true

# Homography

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:homography",
  "@type": "Page",
  "title": "Homography",
  "vc:slug": "homography",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:homography",
  "@type": "Class",
  "label": "Homography",
  "definition": "A homography is a projective transformation, represented by a 3x3 matrix, that maps points from one plane to another in homogeneous coordinates, preserving straight lines but not parallelism or angles. In computer vision it relates two images of the same planar surface or two views taken from the same camera centre, enabling tasks such as image rectification, perspective correction, and mosaicking. Homographies are estimated from corresponding feature points, often robustly via methods that reject outlier matches.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:projective-geometry",
      "label": "Projective Geometry"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:projective-geometry",
        "label": "Projective Geometry"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:feature-matching",
        "label": "Feature Matching"
      },
      {
        "@id": "urn:ngm:class:ransac",
        "label": "RANSAC"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:feature-matching",
        "label": "Feature Matching"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:feature-matching",
        "label": "Feature Matching"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure From Motion"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:epipolar-geometry",
        "label": "Epipolar Geometry"
      },
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:epipolar-geometry",
        "label": "Epipolar Geometry"
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
  - A [[Homography]] belongs to [[Projective Geometry]].
  - It is estimated from [[Feature Matching]].
  - It is robustly fitted using [[RANSAC]].
  - It relates to [[Epipolar Geometry]] in [[Computer Vision]].
- ### Overview
  - A homography maps one image plane onto another under perspective.
  - It is valid for planar scenes or pure camera rotation.
  - Eight degrees of freedom are fixed by at least four point correspondences.
  - Robust estimation discards mismatched features.
- ### Mechanisms
  - Operates on homogeneous coordinates with a 3x3 matrix.
  - Preserves collinearity but not metric properties.
  - Estimated by the direct linear transform from correspondences.
  - RANSAC rejects outlier matches during fitting.
  - Decomposes into rotation and translation under known calibration.
- ### Applications
  - Panorama and image stitching.
  - Perspective correction and document rectification.
  - Marker-based augmented-reality overlay.
  - Ground-plane estimation in robotics and driving.
- ### Relationships
  - partOf:: [[Projective Geometry]]
  - uses:: [[Feature Matching]]
  - uses:: [[RANSAC]]
  - hasPart:: [[Feature Matching]]
  - requires:: [[Camera Calibration]]
  - requires:: [[Feature Matching]]
  - enables:: [[Augmented Reality]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Structure From Motion]]
  - relatedTo:: [[Epipolar Geometry]]
  - relatedTo:: [[Camera Calibration]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[SLAM]]
  - bridgesTo:: [[Epipolar Geometry]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
