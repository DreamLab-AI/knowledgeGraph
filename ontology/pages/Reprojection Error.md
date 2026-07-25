public:: true

# Reprojection Error

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:reprojection-error",
  "@type": "Page",
  "title": "Reprojection Error",
  "vc:slug": "reprojection-error",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reprojection-error",
  "@type": "Class",
  "label": "Reprojection Error",
  "definition": "Reprojection error is the geometric distance, in image pixels, between an observed feature point and the position predicted by projecting its estimated three-dimensional point back through the estimated camera model. It serves as the primary residual minimised in camera calibration, pose estimation and bundle adjustment, where the sum of squared reprojection errors quantifies how well the reconstructed geometry explains the measurements. Low reprojection error indicates a consistent, well-calibrated reconstruction.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:camera-calibration",
      "label": "Camera Calibration"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
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
    "partOf": [
      {
        "@id": "urn:ngm:class:bundle-adjustment",
        "label": "Bundle Adjustment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bundle-adjustment",
        "label": "Bundle Adjustment"
      },
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure From Motion"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:feature-matching",
        "label": "Feature Matching"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:sensor-calibration",
        "label": "Sensor Calibration"
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
  - Reprojection error is the geometric distance, in image pixels, between an observed feature point and the position predicted by projecting its estimated three-dimensional point back through the estimated camera model. It serves as the primary residual minimised in camera calibration, pose estimation and bundle adjustment, where the sum of squared reprojection errors quantifies how well the reconstructed geometry explains the measurements. Low reprojection error indicates a consistent, well-calibrated reconstruction.
  - Related core concepts: [[Camera Calibration]], [[Bundle Adjustment]], [[Optimisation]], [[Pose Estimation]].
- ### Overview
  - Reprojection error is the workhorse cost function of geometric computer vision. Given estimates of camera parameters and scene structure, each measured image point can be compared against where the model says it should appear; minimising the aggregate discrepancy refines both the cameras and the three-dimensional points until the reconstruction is maximally consistent with what was actually observed.
  - It is modelled as a subclass of [[Camera Calibration]] within the spatial-computing domain.
  - Reprojection error is preferred over algebraic error measures because it is expressed in the natural, physically meaningful unit of image pixels and corresponds to the maximum-likelihood estimate under the common assumption of Gaussian noise on feature detections. Minimising it therefore yields the statistically principled reconstruction given the measurements.
  - In large reconstructions the optimisation that minimises reprojection error, bundle adjustment, exploits the sparse structure linking points and cameras, so that even problems with thousands of cameras and millions of points can be refined. Robust cost functions are layered on top to keep mismatched features from dragging the solution away from the truth.
- ### Mechanisms
  - Definition: it is the Euclidean pixel distance between a detected keypoint and its reprojected estimate.
  - Least-squares objective: bundle adjustment minimises the sum of squared reprojection errors over all points and cameras.
  - Robust cost: robust kernels down-weight outliers from mismatched features to protect the estimate.
  - Quality metric: root-mean-square reprojection error reports calibration and reconstruction accuracy.
- ### Applications
  - Validating and refining intrinsic and extrinsic camera calibration.
  - Bundle adjustment in structure-from-motion and SLAM pipelines.
  - Assessing pose-estimation and reconstruction quality in spatial computing.
- ### Considerations
  - A low average reprojection error can mask localised problems, so per-point residual inspection complements the aggregate metric.
  - Outlier matches must be handled with robust kernels or RANSAC, since squared error is highly sensitive to gross errors.
  - Degenerate camera configurations can yield small reprojection error yet unstable geometry, requiring careful conditioning checks.
- ### Relationships
  - subClassOf:: [[Camera Calibration]]
  - hasPart:: [[Camera Calibration]]
  - requires:: [[Camera Calibration]]
  - requires:: [[Feature Matching]]
  - partOf:: [[Bundle Adjustment]]
  - uses:: [[Optimisation]]
  - uses:: [[Pose Estimation]]
  - enables:: [[Bundle Adjustment]]
  - enables:: [[Structure From Motion]]
  - supports:: [[Pose Estimation]]
  - dependsOn:: [[Feature Matching]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[Sensor Calibration]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
