public:: true
alias:: RB-1015-kalman-filter

# Kalman Filter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ea6c2983b34f00da5cacfd50813bb1c8e9d618c9e38659a1f02278e5eb24e5f2",
  "@type": "Page",
  "vc:slug": "kalman-filter",
  "title": "Kalman Filter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:extended-kalman-filter",
      "vc:label": "Extended Kalman Filter"
    },
    {
      "@id": "urn:visionflow:linked:gaussian-noise-assumption",
      "vc:label": "Gaussian Noise Assumption"
    },
    {
      "@id": "urn:visionflow:linked:linear-system-model",
      "vc:label": "Linear System Model"
    },
    {
      "@id": "urn:visionflow:linked:mean-squared-error",
      "vc:label": "Mean Squared Error"
    },
    {
      "@id": "urn:visionflow:linked:optimality",
      "vc:label": "Optimality"
    },
    {
      "@id": "urn:visionflow:linked:probabilistic-robotics",
      "vc:label": "Probabilistic Robotics"
    },
    {
      "@id": "urn:visionflow:linked:rb-1002-closed-loop-control",
      "vc:label": "RB-1002-closed-loop-control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1008-odometry",
      "vc:label": "RB-1008-odometry"
    },
    {
      "@id": "urn:visionflow:linked:rb-1014-monte-carlo-localization",
      "vc:label": "RB-1014-monte-carlo-localization"
    },
    {
      "@id": "urn:visionflow:linked:recursive-estimator",
      "vc:label": "Recursive Estimator"
    },
    {
      "@id": "urn:visionflow:linked:recursiveness",
      "vc:label": "Recursiveness"
    },
    {
      "@id": "urn:visionflow:linked:system-state",
      "vc:label": "System State"
    },
    {
      "@id": "urn:visionflow:linked:tracking",
      "vc:label": "Tracking"
    },
    {
      "@id": "urn:visionflow:linked:unscented-kalman-filter",
      "vc:label": "Unscented Kalman Filter"
    },
    {
      "@id": "urn:visionflow:owl:class:bayes-filter",
      "vc:label": "Bayes Filter"
    },
    {
      "@id": "urn:visionflow:owl:class:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:owl:class:navigation",
      "vc:label": "Navigation"
    },
    {
      "@id": "urn:visionflow:owl:class:rb-1013-localization",
      "vc:label": "RB-1013-localization"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:owl:class:signal-processing",
      "vc:label": "Signal Processing"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:owl:class:state-estimation",
      "vc:label": "State Estimation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1015"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Kalman Filter"
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
  "@id": "urn:ngm:class:kalman-filter",
  "@type": "Class",
  "label": "Kalman Filter",
  "definition": "An optimal recursive Bayesian filter that estimates the state of a linear dynamic system from a series of noisy measurements. It minimizes the mean squared error of the estimated state by combining predictions with measurements using weighted averaging based on uncertainty.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    },
    {
      "@id": "urn:ngm:class:state-estimation",
      "label": "State Estimation"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bayes-filter",
        "label": "Bayes Filter"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gaussian-noise-assumption",
        "label": "Gaussian Noise Assumption"
      },
      {
        "@id": "urn:ngm:class:linear-system-model",
        "label": "Linear System Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rb-1008-odometry",
        "label": "RB-1008-odometry"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
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
  "@id": "urn:visionflow:annotation:link-resolutions:kalman-filter:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ea6c2983b34f00da5cacfd50813bb1c8e9d618c9e38659a1f02278e5eb24e5f2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Extended Kalman Filter]]",
      "resolved": "urn:visionflow:linked:extended-kalman-filter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Gaussian Noise Assumption]]",
      "resolved": "urn:visionflow:linked:gaussian-noise-assumption",
      "kind": "StubLink"
    },
    {
      "raw": "[[Linear System Model]]",
      "resolved": "urn:visionflow:linked:linear-system-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mean Squared Error]]",
      "resolved": "urn:visionflow:linked:mean-squared-error",
      "kind": "StubLink"
    },
    {
      "raw": "[[Optimality]]",
      "resolved": "urn:visionflow:linked:optimality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Probabilistic Robotics]]",
      "resolved": "urn:visionflow:linked:probabilistic-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1002-closed-loop-control]]",
      "resolved": "urn:visionflow:linked:rb-1002-closed-loop-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1008-odometry]]",
      "resolved": "urn:visionflow:linked:rb-1008-odometry",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1014-monte-carlo-localization]]",
      "resolved": "urn:visionflow:linked:rb-1014-monte-carlo-localization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Recursive Estimator]]",
      "resolved": "urn:visionflow:linked:recursive-estimator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Recursiveness]]",
      "resolved": "urn:visionflow:linked:recursiveness",
      "kind": "StubLink"
    },
    {
      "raw": "[[System State]]",
      "resolved": "urn:visionflow:linked:system-state",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tracking]]",
      "resolved": "urn:visionflow:linked:tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Unscented Kalman Filter]]",
      "resolved": "urn:visionflow:linked:unscented-kalman-filter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bayes Filter]]",
      "resolved": "urn:visionflow:owl:class:bayes-filter",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:owl:class:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Navigation]]",
      "resolved": "urn:visionflow:owl:class:navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RB-1013-localization]]",
      "resolved": "urn:visionflow:owl:class:rb-1013-localization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Signal Processing]]",
      "resolved": "urn:visionflow:owl:class:signal-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:owl:class:slam",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[State Estimation]]",
      "resolved": "urn:visionflow:owl:class:state-estimation",
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
  - An optimal recursive Bayesian filter that estimates the state of a linear dynamic system from a series of noisy measurements. It minimizes the mean squared error of the estimated state by combining predictions with measurements using weighted averaging based on uncertainty.

- ### Semantic Classification
  - owl-class:: robotics:KalmanFilter
  - owl-role:: Algorithm
  - belongs-to-domain:: [[Robotics]], [[Control Theory]], [[State Estimation]]

- ### Relationships
  - is-subclass-of:: [[State Estimation]], [[Bayes Filter]]
  - requires:: [[Gaussian Noise Assumption]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Bayes Filter]]
  - is-instance-of:: [[Recursive Estimator]]
  - requires:: [[Linear System Model]]
  - requires:: [[Gaussian Noise Assumption]]
  - estimates:: [[System State]]
  - minimizes:: [[Mean Squared Error]]
  - characterized-by:: [[Optimality]], [[Recursiveness]]

  - #### Relationships
  - is-subclass-of:: [[State Estimation]], [[Bayes Filter]]
  - used-in:: [[RB-1013-localization]], [[RB-1002-closed-loop-control]]
  - alternative-to:: [[RB-1014-monte-carlo-localization]]
  - extended-by:: [[Extended Kalman Filter]], [[Unscented Kalman Filter]]
  - uses:: [[RB-1008-odometry]], [[Sensor Fusion]]
  - applied-in:: [[Navigation]], [[Tracking]], [[SLAM]]

  - **Mathematical Framework**
  - **State Space Model**:
    - State Equation: xₜ = Aₜxₜ₋₁ + Bₜuₜ + wₜ
    - Measurement Equation: zₜ = Hₜxₜ + vₜ
  - **Noise**:
    - Process Noise: wₜ ~ N(0, Qₜ)
    - Measurement Noise: vₜ ~ N(0, Rₜ)
  - **Belief**: Gaussian distribution N(μₜ, Σₜ)

  - **Algorithm (Two-Step Process)**
  - **Prediction Step** (Time Update):
    - Predicted State: x̄ₜ = Aₜxₜ₋₁ + Bₜuₜ
    - Predicted Covariance: P̄ₜ = AₜPₜ₋₁Aₜᵀ + Qₜ
  - **Update Step** (Measurement Update):
    - Kalman Gain: Kₜ = P̄ₜHₜᵀ(HₜP̄ₜHₜᵀ + Rₜ)⁻¹
    - Updated State: xₜ = x̄ₜ + Kₜ(zₜ - Hₜx̄ₜ)
    - Updated Covariance: Pₜ = (I - KₜHₜ)P̄ₜ

  - **Key Matrices**
  - **A**: State Transition Matrix (system dynamics)
  - **B**: Control Input Matrix
  - **H**: Observation Matrix (measurement model)
  - **Q**: Process Noise Covariance
  - **R**: Measurement Noise Covariance
  - **P**: Estimate Error Covariance
  - **K**: Kalman Gain (optimal weighting)

  - **Properties**
  - Optimal for linear systems with Gaussian noise
  - Unbiased estimator
  - Minimum variance estimator
  - Recursive (only needs previous state)
  - Computationally efficient: O(n³) for n states
  - Closed-form solution

  - **Assumptions**
  - Linearity (system and measurement models)
  - Gaussian noise (process and measurement)
  - White noise (uncorrelated over time)
  - Known system model (A, B, H)
  - Known noise statistics (Q, R)

  - **Variants for Non-Linear Systems**
  - **Extended Kalman Filter (EKF)**:
    - Linearizes non-linear models via Jacobian
    - Most common in robotics
    - Approximation, not optimal
  - **Unscented Kalman Filter (UKF)**:
    - Uses sigma points (no Jacobian)
    - Better for highly non-linear systems
    - More accurate than EKF
  - **Cubature Kalman Filter (CKF)**:
    - Uses cubature rules
    - Similar to UKF

  - **Applications in Robotics**
  - Robot localization (sensor fusion)
  - IMU + GPS fusion for navigation
  - Target tracking
  - SLAM (FastSLAM uses EKF)
  - Sensor calibration
  - Attitude estimation (orientation)
  - Velocity estimation

  - **Sensor Fusion Example**
  - Fuse odometry (high frequency, drift) with GPS (low frequency, accurate)
  - Prediction: Use odometry
  - Update: Correct with GPS measurements
  - Result: Smooth, accurate position estimate

  - **Advantages**
  - Optimal for linear Gaussian systems
  - Computationally efficient
  - Well-understood theory
  - Easy to implement
  - Recursive (no historical data needed)
  - Provides uncertainty estimates (covariance)

  - **Limitations**
  - Requires linear system model (or linearization)
  - Assumes Gaussian noise
  - Sensitive to incorrect noise parameters
  - EKF can diverge with poor linearization
  - Cannot handle multi-modal distributions

  - **Tuning Parameters**
  - **Q (Process Noise)**: Trust in model
    - Large Q: Less trust in model, more responsive
    - Small Q: More trust in model, smoother
  - **R (Measurement Noise)**: Trust in sensors
    - Large R: Less trust in sensors, slower correction
    - Small R: More trust in sensors, faster correction

  - **Comparison with Particle Filter**
  - KF: Unimodal Gaussian, linear/linearizable
  - PF: Multi-modal, non-linear, non-Gaussian
  - KF: Lower computational cost
  - PF: More flexible, handles global localization

  - **Historical Significance**
  - Developed by Rudolf Kálmán (1960)
  - Used in Apollo missions (lunar landing)
  - Foundation of modern navigation systems
  - One of most widely used algorithms in engineering

  - **Quality Metrics**
  - authority-score:: 0.98
  - completeness:: 0.95
  - accuracy:: 0.97

- ### Provenance
  - sources:: [[Control Theory]], [[Probabilistic Robotics]], [[Signal Processing]]
  - migration-date:: 2026-04-26T00:00:00Z
