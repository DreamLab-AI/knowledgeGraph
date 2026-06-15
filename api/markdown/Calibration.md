public:: true

# calibration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e152337e4e85aa3e81482f0ce329aec7bfad531413fe53fef84f1f0d4165caee",
  "@type": "Page",
  "vc:slug": "calibration",
  "title": "calibration",
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
  "@id": "urn:ngm:class:calibration",
  "@type": "Class",
  "label": "Calibration",
  "definition": "Calibration is the systematic process of establishing, verifying, and correcting the quantitative relationship between a measurement instrument's or computational model's output and a known reference standard, encompassing intrinsic parameter estimation (gain, offset, nonlinearity, bias), extrinsic parameter determination (spatial pose and orientation relative to a reference frame), and inter-device consistency alignment. In physical systems it removes systematic error between raw sensor readings and true physical quantities; in machine learning it aligns predicted probability distributions to empirical frequencies. Calibration is a prerequisite for metrically accurate perception, reliable closed-loop control, trustworthy probabilistic inference, and coherent multi-modal data fusion across robotics, spatial computing, and AI systems.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:imu-calibration",
        "label": "IMU Calibration"
      },
      {
        "@id": "urn:ngm:class:extrinsic-calibration",
        "label": "Extrinsic Calibration"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:reference-standard",
        "label": "Reference Standard"
      },
      {
        "@id": "urn:ngm:class:ground-truth",
        "label": "Ground Truth"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:imu",
        "label": "IMU"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:fiducial-marker",
        "label": "Fiducial Marker"
      },
      {
        "@id": "urn:ngm:class:checkerboard-pattern",
        "label": "Checkerboard Pattern"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      },
      {
        "@id": "urn:ngm:class:robotic-manipulation",
        "label": "Robotic Manipulation"
      },
      {
        "@id": "urn:ngm:class:medical-imaging",
        "label": "Medical Imaging"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:validation",
        "label": "Validation"
      },
      {
        "@id": "urn:ngm:class:verification",
        "label": "VERIFICATION"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:model-calibration",
        "label": "Model Calibration"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:instrument-calibration",
      "label": "Instrument Calibration"
    },
    {
      "@id": "urn:ngm:class:sensor-calibration",
      "label": "Sensor Calibration"
    }
  ],
  "quality": 0.75,
  "qualityScore": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Calibration is the systematic, principled process of establishing the quantitative correspondence between the raw output of a measurement instrument, sensor, actuator, or computational model and a known [[Reference Standard]] or ground-truth distribution. It encompasses intrinsic parameter recovery (gain, offset, nonlinearity, lens distortion), extrinsic parameter estimation (rigid-body pose between coordinate frames), inter-device temporal alignment, and — in machine learning — the alignment of a model's predicted [[Probability Distribution]] with empirical outcome frequencies. Without calibration, systematic errors corrupt downstream reasoning, making [[Sensor Fusion]], [[SLAM]], [[Pose Estimation]], and [[Probabilistic Inference]] unreliable. Calibration is a mature practice formalised by international metrology bodies and remains a prerequisite for deployment of safety-critical robotic, autonomous, and AI systems.

- ### Overview
  - Calibration addresses the gap between what a device *reports* and what it should report — the systematic, repeatable component of measurement error known as [[Systematic Error]] or bias. Unlike [[Noise]] (random, zero-mean error that averages out), systematic error is deterministic and must be characterised and removed through calibration procedures.
  - A calibration procedure typically involves:
    - Presenting the instrument with known stimuli drawn from a [[Reference Standard]] (e.g., a NIST-traceable calibration target, a checkerboard pattern, a known gravity vector)
    - Observing the instrument's response across multiple configurations or excitation levels
    - Fitting a parametric [[Error Model]] using mathematical [[Optimisation]] (often [[Least Squares]] or maximum-likelihood estimation)
    - Storing the resulting correction parameters for runtime application
  - The scope of calibration extends across physical measurement (optics, inertial sensing, force sensing, LiDAR ranging), geometric alignment (hand-eye calibration, extrinsic multi-sensor calibration), and statistical learning ([[Model Calibration]] — ensuring classifier confidence scores match true posterior probabilities).
  - Calibration differs from [[Validation]] (confirming a model meets requirements) and [[Verification]] (confirming it was built correctly), though all three form the quality triad in engineering systems.

- ### Key Components and Mechanisms
  - **[[Camera Calibration]]** — estimates the pinhole camera intrinsic matrix (focal lengths, principal point) and lens distortion coefficients (radial, tangential) using structured targets such as [[Checkerboard Pattern]]s or AprilTags. Zhang's method (2000) is the dominant algorithm.
  - **[[IMU Calibration]]** — characterises accelerometer and gyroscope bias vectors, scale factors, axis misalignment matrices, and [[Noise]] spectral densities. Methods include multi-position static tests and rate-table excitation sequences.
  - **[[Extrinsic Calibration]]** — determines the 6-DoF rigid-body transformation (rotation + translation) between pairs of sensors in a multi-modal rig (e.g., [[Lidar]]-camera, [[IMU]]-camera). Tools such as Kalibr perform joint optimisation over continuous-time trajectories.
  - **[[Temporal Calibration]]** — estimates hardware-clock offsets and trigger delays between sensors operating at different sample rates. Critical for [[Sensor Fusion]] where timestamp inconsistencies corrupt state estimation.
  - **[[Kinematic Calibration]]** — corrects nominal Denavit-Hartenberg parameters in a robot URDF by measuring end-effector poses with external metrology (laser tracker, photogrammetric targets). Improves absolute positioning accuracy of [[Robotic Manipulation]] systems.
  - **[[Hand-Eye Calibration]]** — a specialised extrinsic calibration solving for the transformation between a robot wrist frame and a mounted camera, enabling coordinated [[Visual Servoing]].
  - **[[LiDAR Calibration]]** — estimates inter-beam angular offsets, range scale factors, and intensity response curves for spinning or solid-state [[Lidar]] units.
  - **[[Probabilistic Calibration]]** / [[Model Calibration]] — in machine learning, the process of adjusting classifier output scores (logits or softmax probabilities) so they match empirical accuracy. Techniques include Platt scaling, isotonic regression, and temperature scaling for neural networks.
  - **Online vs. offline calibration** — offline calibration occurs pre-deployment using dedicated procedures; online (adaptive) calibration continuously refines parameters during operation using [[SLAM]]-like factor-graph optimisation, compensating for thermal drift and mechanical wear.

- ### Applications and Use Cases
  - **[[Autonomous Driving]]** — every production autonomous vehicle stack requires rigorous Lidar-camera-IMU extrinsic and temporal calibration before deployment, typically validated against retroreflective calibration boards and outdoor checkerboard targets at measured ranges.
  - **[[Augmented Reality]]** and [[Spatial Computing]] — precise camera intrinsic calibration is mandatory for correct virtual content registration in AR headsets (HoloLens, Quest). World-locking accuracy degrades directly with uncalibrated camera parameters.
  - **[[Medical Imaging]]** — CT, MRI, and ultrasound systems require calibration of geometric distortion and intensity response; surgical robot end-effectors require tool-tip calibration for submillimetre registration to pre-operative imaging.
  - **[[Robotic Manipulation]]** — assembly robots in automotive and electronics manufacturing use kinematic calibration to achieve sub-millimetre absolute positioning accuracy required for peg-in-hole and connector-insertion tasks.
  - **Industrial [[Metrology]]** — coordinate measuring machines (CMMs) and laser trackers are calibrated against national standards (NPL, PTB, NIST) to ensure traceability of dimensional measurements in manufacturing quality assurance.
  - **[[Machine Learning]] model deployment** — temperature scaling of neural network classifiers before deployment in healthcare or finance ensures that predicted confidence values are actionable rather than over- or under-confident.
  - **Weather forecasting and climate models** — ensemble forecast calibration (e.g., Ensemble Model Output Statistics, EMOS) corrects systematic bias in numerical weather prediction outputs.
  - **Financial risk models** — probability of default models require calibration to historical default rates; uncalibrated models violate regulatory requirements under Basel III and IFRS 9.

- ### Relationships
  - hasPart:: [[Camera Calibration]]
  - hasPart:: [[IMU Calibration]]
  - hasPart:: [[Extrinsic Calibration]]
  - hasPart:: [[Temporal Calibration]]
  - partOf:: [[Quality Assurance]]
  - partOf:: [[Sensor Pipeline]]
  - requires:: [[Reference Standard]]
  - requires:: [[Ground Truth]]
  - requires:: [[Error Model]]
  - enables:: [[Sensor Fusion]]
  - enables:: [[SLAM]]
  - enables:: [[Pose Estimation]]
  - enables:: [[Robot Control]]
  - enables:: [[Augmented Reality]]
  - dependsOn:: [[Optimisation]]
  - dependsOn:: [[Least Squares]]
  - uses:: [[IMU]]
  - uses:: [[Lidar]]
  - uses:: [[Fiducial Marker]]
  - uses:: [[Checkerboard Pattern]]
  - supports:: [[Autonomous Driving]]
  - supports:: [[Robotic Manipulation]]
  - supports:: [[Medical Imaging]]
  - contrastsWith:: [[Validation]]
  - contrastsWith:: [[Verification]]
  - bridges-to:: [[Probabilistic Calibration]]
  - bridges-to:: [[Model Calibration]]
  - bridges-to:: [[Uncertainty Quantification]]
  - relatedTo:: [[Sensor Noise]]
  - relatedTo:: [[Systematic Error]]
  - relatedTo:: [[Kinematic Calibration]]

- ### Standards and Context
  - **ISO/IEC 17025** — the international standard for the competence of testing and calibration laboratories; requires documented calibration procedures, uncertainty budgets, and traceability chains.
  - **JCGM 100:2008 (GUM)** — the Guide to the Expression of Uncertainty in Measurement, published jointly by BIPM, IEC, ISO, and OIML; the foundational document for propagating [[Measurement Uncertainty]] through calibration chains.
  - **IEEE 1451** — Smart Transducer Interface Standard; includes TEDS (Transducer Electronic Data Sheets) for storing calibration coefficients on-chip.
  - **NIST, NPL, PTB** — national metrology institutes providing primary [[Reference Standard]]s and calibration services that anchor the international traceability hierarchy.
  - **Kalibr** (ETH Zürich) — widely adopted open-source toolbox for camera–IMU–Lidar multi-sensor calibration using continuous-time batch optimisation.
  - **ROS calibration packages** — `camera_calibration` (OpenCV-based), `lidar_camera_calibration`, and `imu_utils` are standard tools in the [[Robot Operating System]] (ROS/ROS2) ecosystem.
  - **OpenCV** — implements Zhang's camera calibration algorithm and provides `calibrateCamera()`, `stereoCalibrate()`, and `fisheye::calibrate()` as de facto standard implementations.
  - In [[Machine Learning]] contexts, calibration evaluation uses the Expected Calibration Error (ECE) metric and reliability diagrams; methods such as Platt scaling and temperature scaling are standard post-hoc correction techniques.

- ### Provenance
  - sources:: ISO/IEC 17025; JCGM 100:2008 (GUM); Z. Zhang, "A Flexible New Technique for Camera Calibration" (2000); Kalibr (ETH Zürich); OpenCV documentation; Guo et al. "IMU Preintegration on Manifold" (2015); Niculescu & Zadrozny "Predicting Good Probabilities with Supervised Learning" (2005)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
