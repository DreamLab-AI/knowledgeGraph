public:: true

# bundle adjustment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6243e3f2c156210d1ead9b3a6c1cc665652ca76743b45b431905d288e59a34d",
  "@type": "Page",
  "vc:slug": "bundle-adjustment",
  "title": "bundle adjustment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bundle-adjustment",
  "@type": "Class",
  "label": "Bundle Adjustment",
  "definition": "Bundle adjustment is a non-linear least-squares optimisation technique in computer vision and photogrammetry that simultaneously refines estimates of 3-D structure (point cloud positions) and camera parameters (extrinsics and intrinsics) so that reprojected 3-D points best match their observed 2-D image locations across all views. The name derives from the bundle of light rays connecting each camera centre to visible scene points; optimising the geometry tightens these bundles. It is the gold-standard global refinement step in structure-from-motion pipelines, visual SLAM, and aerial photogrammetry, producing metrically accurate 3-D reconstructions from overlapping images or video frames. Computationally it exploits the sparse block structure of the Jacobian via Schur complement elimination and is typically solved with the Levenberg-Marquardt algorithm.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:simultaneous-camera-and-structure-optimisation", "label": "Simultaneous Camera and Structure Optimisation"}
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:structure-from-motion", "label": "Structure-from-Motion"},
      {"@id": "urn:ngm:class:visual-slam", "label": "Visual SLAM"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:reprojection-error", "label": "Reprojection Error"},
      {"@id": "urn:ngm:class:levenberg-marquardt-algorithm", "label": "Levenberg-Marquardt Algorithm"},
      {"@id": "urn:ngm:class:schur-complement-elimination", "label": "Schur Complement Elimination"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"},
      {"@id": "urn:ngm:class:feature-matching", "label": "Feature Matching"},
      {"@id": "urn:ngm:class:ransac", "label": "RANSAC"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"},
      {"@id": "urn:ngm:class:dense-point-cloud", "label": "Dense Point Cloud"},
      {"@id": "urn:ngm:class:map-building", "label": "Map Building"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sparse-matrix", "label": "Sparse Matrix"},
      {"@id": "urn:ngm:class:ceres-solver", "label": "Ceres Solver"},
      {"@id": "urn:ngm:class:sift-features", "label": "SIFT Features"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:incremental-reconstruction", "label": "Incremental Reconstruction"},
      {"@id": "urn:ngm:class:pose-graph-optimisation", "label": "Pose Graph Optimisation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:camera-pose-estimation", "label": "Camera Pose Estimation"},
      {"@id": "urn:ngm:class:epipolar-geometry", "label": "Epipolar Geometry"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:autonomous-vehicles", "label": "Autonomous Vehicles"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Bundle adjustment is a [[Non-Linear Optimisation]] technique from [[Computer Vision]] and [[Photogrammetry]] that jointly refines estimates of 3-D scene structure (a sparse [[Point Cloud]]) and camera parameters (position, orientation, and intrinsics) by minimising the sum of squared [[Reprojection Error]]s across all observed image correspondences. The term "bundle" refers to the bundle of light rays that connect each camera centre to the scene points it observes; the optimisation tightens these bundles until projected and observed keypoint positions agree as closely as possible. Bundle adjustment is the canonical global refinement step in [[Structure-from-Motion]] pipelines and [[Visual SLAM]] systems, producing geometrically consistent and metrically accurate reconstructions from sets of overlapping photographs or video frames.

- ### Overview
  - Bundle adjustment sits at the intersection of numerical optimisation and 3-D [[Spatial Computing]]. Given an initial (noisy) estimate of camera poses and 3-D point positions — typically produced by an incremental or global reconstruction initialisation — BA iteratively updates all parameters simultaneously until convergence.
  - The optimisation objective is:
    - Minimise the sum over all visible point-camera pairs of the squared Euclidean distance between the observed 2-D [[Image Keypoint]] and the 2-D projection of the corresponding 3-D point through the camera model.
  - This is a large-scale non-linear least-squares problem. The key computational insight is that the Jacobian of the residual vector has a characteristic sparse block structure: each 3-D point appears in only a small fraction of cameras, so the normal equations decompose cleanly via [[Schur Complement Elimination]] into a reduced camera system (far smaller than the full system) plus back-substitution for point updates.
  - The [[Levenberg-Marquardt Algorithm]] is the standard solver, interpolating between Gauss-Newton (fast near convergence) and gradient-descent (robust far from convergence).
  - Bundle adjustment has been established since the late 1990s (Triggs et al., 2000 — "Bundle Adjustment: A Modern Synthesis" is the foundational reference) and is now considered a mature, production-grade technique deployed in satellite photogrammetry, autonomous driving, robotics, and AR/VR.

- ### Key Components
  - **[[Reprojection Error]]** — the residual: distance between observed 2-D feature location and the projected 3-D point. The sum of squared reprojection errors is the objective function.
  - **Camera Model** — typically the pinhole model with optional radial/tangential distortion parameters; all intrinsics (focal length, principal point, distortion coefficients) and extrinsics (rotation, translation) are optimised simultaneously.
  - **[[Feature Extraction]] and [[Feature Matching]]** — [[SIFT Features]], ORB, SURF, or learned [[Neural Feature Descriptor]]s produce 2-D observations (tracks) that feed into the optimisation.
  - **[[RANSAC]]** — robust estimator used in the initialisation phase to reject outlier correspondences before BA; residual outliers within BA are handled by robust loss functions (Huber, Cauchy).
  - **[[Levenberg-Marquardt Algorithm]]** — iterative solver with a damping parameter that adapts between Gauss-Newton and steepest descent steps.
  - **[[Schur Complement Elimination]]** (also called the reduced camera system trick) — eliminates 3-D point parameters first to form a smaller camera-only normal system, reducing the dominant cost from O(P³) to O(C³) where P >> C (points far outnumber cameras).
  - **[[Sparse Matrix]] arithmetic** — the Jacobian and Hessian are stored and factorised as sparse matrices (e.g. using Cholmod or Eigen's sparse Cholesky); without this, large-scale BA would be computationally intractable.
  - **Gauge fixing** — BA is under-constrained (gauge freedom in similarity transformations); fixing the scale, position, and orientation of the reconstruction by anchoring a subset of cameras or using a ground-truth scale reference is required.

- ### Variants and Modes
  - **Full (global) BA** — optimises all cameras and all points simultaneously; gives the globally optimal solution but is expensive.
  - **Local (windowed) BA** — used in real-time [[Visual SLAM]]: optimises only cameras and points within a sliding temporal window; approximate but fast enough for online use.
  - **Incremental BA** — interleaved with incremental reconstruction; each newly added camera triggers a partial BA.
  - **Hierarchical BA** — divides the scene into subsets, optimises locally, then merges; scales to city-scale [[Photogrammetry]] with millions of images.
  - **Distributed BA** — parallelises across multiple nodes; used in satellite and aerial mapping pipelines at planetary scale.
  - **Intrinsics-fixed BA** — camera intrinsics are held constant (using pre-calibrated parameters from [[Camera Calibration]]), reducing the number of free variables.

- ### Applications and Use Cases
  - **[[Structure-from-Motion]] pipelines** — systems such as COLMAP, VisualSFM, and Metashape use BA as the final global refinement to generate dense [[Point Cloud]]s and textured 3-D meshes from unordered photo collections.
  - **[[Photogrammetry]] and remote sensing** — aerial and satellite survey workflows apply BA to align overlapping imagery with sub-pixel accuracy for mapping, topographic modelling, and change detection.
  - **[[Visual SLAM]]** — autonomous robots and drones (ORB-SLAM, LSD-SLAM, VINS-Mono) use windowed BA to maintain globally consistent maps while running in real-time.
  - **[[Augmented Reality]]** — AR tracking systems require accurate camera pose estimates relative to a pre-built or simultaneously built 3-D map; BA underpins the map-building phase and localisation refinement.
  - **[[Autonomous Vehicles]]** — lidar-camera and stereo-camera rigs use BA variants (visual-inertial odometry, lidar BA) to build HD maps and estimate ego-motion.
  - **Medical imaging and microscopy** — electron tomography and CT reconstruction use analogous formulations to reconstruct 3-D structures from 2-D projections.
  - **Industrial inspection** — multi-camera photogrammetry rigs apply BA to achieve sub-millimetre dimensional measurement of manufactured parts.
  - **Cultural heritage digitisation** — museums and archaeological sites use SfM+BA to create accurate 3-D digital twins of artefacts and sites.

- ### Relationships
  - partOf:: [[Structure-from-Motion]]
  - partOf:: [[Visual SLAM]]
  - hasPart:: [[Reprojection Error]]
  - hasPart:: [[Levenberg-Marquardt Algorithm]]
  - hasPart:: [[Schur Complement Elimination]]
  - requires:: [[Camera Calibration]]
  - requires:: [[Feature Extraction]]
  - requires:: [[Feature Matching]]
  - requires:: [[RANSAC]]
  - enables:: [[3D Reconstruction]]
  - enables:: [[Photogrammetry]]
  - enables:: [[Dense Point Cloud]]
  - enables:: [[Map Building]]
  - uses:: [[Sparse Matrix]]
  - uses:: [[Ceres Solver]]
  - uses:: [[SIFT Features]]
  - contrastsWith:: [[Incremental Reconstruction]]
  - contrastsWith:: [[Pose Graph Optimisation]]
  - relatedTo:: [[Simultaneous Localisation and Mapping]]
  - relatedTo:: [[Camera Pose Estimation]]
  - relatedTo:: [[Epipolar Geometry]]
  - bridges-to:: [[Augmented Reality]]
  - bridges-to:: [[Autonomous Vehicles]]

- ### Software and Standards
  - **[[Ceres Solver]]** (Google) — industrial-strength C++ non-linear least-squares library with automatic differentiation; the most widely used BA backend in research and production.
  - **g2o** (General Graph Optimisation) — sparse graph optimiser used in many SLAM frameworks; supports BA as a special case.
  - **[[GTSAM]]** — Georgia Tech Smoothing and Mapping library; factor-graph-based; used in robotics and autonomous driving BA pipelines.
  - **COLMAP** — open-source, GPU-accelerated SfM and MVS pipeline with state-of-the-art BA; widely adopted as a benchmark.
  - **OpenMVG / OpenMVS** — open-source multi-view geometry libraries with modular BA.
  - **ISO/ASPRS standards** — photogrammetric accuracy standards (e.g. ASPRS Positional Accuracy Standards for Digital Geospatial Data) govern the expected accuracy outputs of BA-based mapping workflows.
  - **[[Computer Vision Foundation (CVF)]] benchmark datasets** — ETH3D, Tanks and Temples, and the 1DSfM dataset are standard BA evaluation benchmarks.

- ### Semantic Classification
  - owl-class:: bundle-adjustment:Bundle Adjustment
  - owl-role:: Concept

- ### Provenance
  - sources:: Triggs et al. "Bundle Adjustment: A Modern Synthesis" (ICCV 1999 Workshop); Hartley & Zisserman "Multiple View Geometry in Computer Vision" (2nd ed.); COLMAP documentation; Ceres Solver documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
