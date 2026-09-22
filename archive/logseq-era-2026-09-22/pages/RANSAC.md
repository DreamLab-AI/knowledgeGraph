public:: true

# RANSAC

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ransac", "@type":"Page", "title":"RANSAC", "vc:slug":"ransac", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ransac",
  "@type":"Class",
  "label":"RANSAC",
  "definition":"RANSAC (Random Sample Consensus) is an iterative, robust estimation algorithm that fits a model to data containing a large fraction of outliers. It repeatedly draws a minimal random sample, fits a candidate model, and counts the inliers that agree within a tolerance, retaining the model with the largest consensus set. RANSAC is foundational in computer vision for estimating geometric relationships such as homographies, fundamental matrices, and camera poses from noisy feature correspondences.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:feature-matching","label":"Feature Matching"}],
  "relations":{
    "dependsOn":[{"@id":"urn:ngm:class:feature-matching","label":"Feature Matching"},{"@id":"urn:ngm:class:feature-detection","label":"Feature Detection"}],
    "requires":[{"@id":"urn:ngm:class:probability-theory","label":"Probability Theory"}],
    "uses":[{"@id":"urn:ngm:class:epipolar-geometry","label":"Epipolar Geometry"}],
    "enables":[{"@id":"urn:ngm:class:pose-estimation","label":"Pose Estimation"},{"@id":"urn:ngm:class:structure-from-motion","label":"Structure from Motion"}],
    "supports":[{"@id":"urn:ngm:class:slam","label":"SLAM"},{"@id":"urn:ngm:class:visual-odometry","label":"Visual Odometry"},{"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}],
    "contrastsWith":[{"@id":"urn:ngm:class:bayesian-inference","label":"Bayesian Inference"}],
    "relatedTo":[{"@id":"urn:ngm:class:bundle-adjustment","label":"Bundle Adjustment"},{"@id":"urn:ngm:class:point-cloud","label":"Point Cloud"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[RANSAC]] is a robust, iterative estimator that fits a model to data dominated by outliers, building on [[Feature Matching]].
  - It samples minimal subsets, fits candidate models, and selects the one with the largest inlier consensus.
  - It is central to estimating geometry in computer vision such as [[Epipolar Geometry]] and [[Pose Estimation]].
  - It tolerates the gross mismatches produced by [[Feature Detection]] and matching.
- ### Overview
  - Many vision problems involve correspondences that are noisy and contain many false matches.
  - Least-squares fitting is corrupted by such outliers, so a robust scheme is required.
  - RANSAC repeatedly hypothesises a model from a random minimal sample and verifies it against all data.
  - The hypothesis with the most inliers is kept and optionally refined using only those inliers.
- ### Mechanisms
  - Draw a minimal sample (for example four point pairs for a homography).
  - Fit a candidate model to the sample.
  - Score the model by counting inliers within a residual threshold.
  - Iterate enough times, governed by [[Probability Theory]], to find a clean sample with high probability, then refit on inliers.
- ### Key aspects
  - Robustness: tolerates outlier fractions well above fifty per cent.
  - Threshold sensitivity: the inlier tolerance materially affects results.
  - Iteration count: derived from the expected inlier ratio and desired confidence.
  - Variants: MLESAC, PROSAC, LO-RANSAC, and USAC improve speed or accuracy.
- ### Applications
  - Estimating homographies for image stitching and rectification.
  - Fundamental and essential matrix estimation for [[Epipolar Geometry]].
  - Camera [[Pose Estimation]] and [[Camera Calibration]].
  - Robust front-ends for [[SLAM]], [[Visual Odometry]], and [[Structure from Motion]].
- ### Relationships
  - dependsOn:: [[Feature Matching]]
  - dependsOn:: [[Feature Detection]]
  - requires:: [[Probability Theory]]
  - uses:: [[Epipolar Geometry]]
  - enables:: [[Pose Estimation]]
  - enables:: [[Structure from Motion]]
  - supports:: [[SLAM]]
  - supports:: [[Visual Odometry]]
  - supports:: [[Camera Calibration]]
  - contrastsWith:: [[Bayesian Inference]]
  - relatedTo:: [[Bundle Adjustment]]
  - relatedTo:: [[Point Cloud]]
  - relatedTo:: [[Spatial Computing]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
