public:: true

# State Estimation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c4db8f86b49f037c9b65d007ca6c63a0731047866cabb0f954e48c5d5739685",
  "@type": "Page",
  "vc:slug": "state-estimation",
  "title": "State Estimation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0604"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "State Estimation"
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
  "@id": "urn:ngm:class:state-estimation",
  "@type": "Class",
  "label": "State Estimation",
  "definition": "State Estimation is the computational discipline of inferring the latent, unobservable internal state of a dynamical system — such as position, velocity, orientation, and joint angles — from a sequence of noisy, incomplete sensor measurements, using probabilistic inference frameworks. Core algorithms include the Kalman Filter and its nonlinear extensions (EKF, UKF), particle filters, and factor-graph optimisation methods that maintain a belief distribution over state variables over time. The field underpins autonomous navigation, robotic manipulation, aerospace guidance systems, and any cyber-physical system that must act on estimated rather than directly observed quantities. Modern formulations unify Bayesian filtering, maximum-a-posteriori smoothing, and deep-learning-based perception to achieve robust estimation under sensor failure, model mismatch, and adversarial environments.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probabilistic-inference",
      "label": "Probabilistic Inference"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:particle-filter",
        "label": "Particle Filter"
      },
      {
        "@id": "urn:ngm:class:extended-kalman-filter",
        "label": "Extended Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:factor-graph",
        "label": "Factor Graph"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:imu",
        "label": "IMU"
      },
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Models"
      },
      {
        "@id": "urn:ngm:class:system-dynamics",
        "label": "System Dynamics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Navigation"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      },
      {
        "@id": "urn:ngm:class:autonomous-system",
        "label": "Autonomous Systems"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:stochastic-processes",
        "label": "Stochastic Processes"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:visual-odometry",
        "label": "Visual Odometry"
      },
      {
        "@id": "urn:ngm:class:wheel-odometry",
        "label": "Wheel Odometry"
      },
      {
        "@id": "urn:ngm:class:gps",
        "label": "Gps"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:open-loop-control",
        "label": "Open-Loop Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robot-dynamics",
        "label": "Robot Dynamics"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:state-inference",
      "label": "State Inference"
    },
    {
      "@id": "urn:ngm:class:belief-estimation",
      "label": "Belief Estimation"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:state-estimation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c4db8f86b49f037c9b65d007ca6c63a0731047866cabb0f954e48c5d5739685"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
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
  - State Estimation is the computational discipline of inferring the hidden internal state of a [[Dynamical System]] — position, velocity, orientation, joint angles, or any unobservable quantity — from a stream of noisy, time-stamped sensor measurements. It is grounded in [[Bayesian Inference]], treating the state as a probability distribution (the *belief*) that is updated recursively as new observations arrive. The canonical algorithms — [[Kalman Filter]], [[Extended Kalman Filter]], [[Unscented Kalman Filter]], and [[Particle Filter]] — represent different trade-offs between computational cost and representational fidelity. State Estimation is a prerequisite for any system that must act autonomously on estimated rather than directly observed quantities, from [[SLAM]] in robotics to guidance loops in aerospace.

- ### Overview
  - **What it is**: State Estimation solves the filtering and smoothing problem: given a process model describing how the state evolves and a measurement model linking state to observations, compute the posterior belief over the current (and past) state.
  - **Why it matters**: Sensors are imperfect — they are noisy, biased, limited in rate, and may fail. Physical states cannot always be directly sensed (e.g. velocity from position sensors, orientation from accelerometers). State Estimation bridges the gap between raw measurements and actionable knowledge about the system.
  - **How it works**: The typical recursive cycle has two phases:
    - **Predict**: propagate the belief forward using the [[System Dynamics]] (motion model); uncertainty grows.
    - **Update**: incorporate a new sensor measurement using the [[Probabilistic Models|measurement model]]; uncertainty shrinks where the measurement is informative.
  - **Scope**: Applies to [[Autonomous Systems]] broadly — ground robots, aerial vehicles, spacecraft, autonomous vehicles, [[Augmented Reality]] headsets, industrial [[Control Theory|control loops]], and financial systems tracking latent economic states.

- ### Key Algorithms and Mechanisms
  - **[[Kalman Filter]] (KF)** — optimal linear estimator for Gaussian noise, linear dynamics. Closed-form recursive solution. Gold standard in aerospace and structural health monitoring.
  - **[[Extended Kalman Filter]] (EKF)** — linearises nonlinear dynamics and measurement functions via Jacobians at the current estimate. Widely used in [[SLAM]] backends and [[IMU]] integration.
  - **[[Unscented Kalman Filter]] (UKF)** — propagates a minimal set of sigma points through nonlinear functions to capture mean and covariance without explicit Jacobians; more robust than EKF for highly nonlinear systems.
  - **[[Particle Filter]] (Sequential Monte Carlo)** — represents the belief as a weighted set of random samples (particles); handles multimodal, non-Gaussian distributions; computationally heavier but most general.
  - **[[Factor Graph]] Optimisation (e.g. iSAM2, GTSAM)** — batch or incremental smoothing over all past states; preferred for consistent long-horizon trajectory estimation in [[SLAM]].
  - **Information Filter** — dual representation of Kalman filter; advantageous for multi-robot fusion where measurements from many agents arrive independently.
  - **Complementary Filter** — lightweight fusion of high-frequency gyroscope and low-frequency accelerometer data; ubiquitous in consumer-grade [[IMU]] devices.
  - **[[Deep Learning]]-based estimators** — learned observation and motion models using recurrent networks or transformers; enable estimation in domains where closed-form models are unavailable (e.g. deformable object state).

- ### Sensing Modalities Used
  - **[[IMU]]** (Inertial Measurement Unit) — accelerometers and gyroscopes; high-rate but drifts; pre-integrated in modern pipelines.
  - **[[LiDAR]]** — sparse 3-D point clouds; high-accuracy range measurements; used in scan-matching and map-based localisation.
  - **[[Visual Odometry]]** — incremental pose estimation from camera frames; rich but computationally intensive.
  - **[[GPS]] / GNSS** — absolute position in outdoor settings; low rate, vulnerable to multipath.
  - **[[Wheel Odometry]]** — encoder-based displacement; simple and fast but accumulates slip error.
  - **[[Sensor Fusion]]** combines all above modalities to exploit complementary error characteristics and maintain continuous, low-latency state estimates.

- ### Applications and Use Cases
  - **Mobile Robotics**: ground vehicles use EKF-SLAM or graph-SLAM for indoor localisation without GPS; particle filters handle loop closure uncertainty.
  - **Aerial Vehicles**: UAV autopilots fuse [[IMU]], barometer, optical flow, and GPS into a tightly-coupled nonlinear estimator for attitude and position.
  - **Autonomous Vehicles**: multi-sensor fusion (LiDAR + camera + radar + GPS) in a modular Kalman pipeline underpins AV perception stacks.
  - **Spacecraft Guidance**: onboard Kalman filters track orbital position and attitude for satellite station-keeping and rendezvous manoeuvres.
  - **[[Augmented Reality]]**: headset pose tracking (e.g. inside-out tracking) uses [[Visual Odometry]] + [[IMU]] tight fusion for 6-DOF state estimation at millisecond latency.
  - **Industrial Control**: process control systems maintain latent state estimates (temperature gradients, flow rates) from sparse sensors to feed [[Control Theory|feedback controllers]].
  - **Healthcare / Wearables**: inertial tracking of body segments for gait analysis and rehabilitation monitoring.
  - **[[Digital Twin]]**: real-time state estimation feeds physical-process digital twins by synchronising the virtual model with measured plant state.
  - **Finance**: hidden Markov models and Kalman smoothers estimate latent economic states (e.g. trend, volatility regime) from market observations.

- ### Relationships
  - hasPart:: [[Kalman Filter]]
  - hasPart:: [[Particle Filter]]
  - hasPart:: [[Extended Kalman Filter]]
  - hasPart:: [[Factor Graph]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[IMU]]
  - requires:: [[Probabilistic Models]]
  - requires:: [[System Dynamics]]
  - enables:: [[SLAM]]
  - enables:: [[Navigation]]
  - enables:: [[Robot Control]]
  - enables:: [[Autonomous Systems]]
  - dependsOn:: [[Bayesian Inference]]
  - dependsOn:: [[Stochastic Processes]]
  - dependsOn:: [[Linear Algebra]]
  - uses:: [[LiDAR]]
  - uses:: [[Visual Odometry]]
  - uses:: [[Wheel Odometry]]
  - uses:: [[GPS]]
  - contrastsWith:: [[Deterministic Control]]
  - contrastsWith:: [[Open-Loop Control]]
  - relatedTo:: [[Robot Dynamics]]
  - relatedTo:: [[Path Planning]]
  - relatedTo:: [[Control Theory]]
  - relatedTo:: [[Signal Processing]]
  - bridges-to:: [[Deep Learning]]
  - bridges-to:: [[Digital Twin]]

- ### Mathematical Foundations
  - **State-space model**: discrete-time formulation x_{t} = f(x_{t-1}, u_t) + w_t; z_t = h(x_t) + v_t where w_t ~ N(0,Q), v_t ~ N(0,R).
  - **Predict step**: prior belief p(x_t | z_{1:t-1}) obtained by marginalising over x_{t-1}.
  - **Update step**: posterior p(x_t | z_{1:t}) ∝ p(z_t | x_t) · p(x_t | z_{1:t-1}).
  - **Optimality**: the [[Kalman Filter]] minimises mean-squared error among all linear estimators; maximum-likelihood sense for linear Gaussian models.
  - **Observability**: a system is observable if its state can be uniquely recovered from a finite sequence of outputs; a prerequisite for consistent estimation.
  - **Consistency**: an estimator is *consistent* if its covariance truthfully reflects true estimation error — critical for [[SLAM]] where optimistic covariances cause divergence.

- ### Key Challenges
  - **Computational cost**: particle filters and large-scale factor-graph smoothers scale poorly; sparse representations and marginalisation are essential.
  - **Model mismatch**: inaccurate dynamics or measurement models cause filter divergence; adaptive estimation and robust outlier rejection (e.g. Mahalanobis gating) help.
  - **Sensor degradation**: loop closures are ambiguous, LiDAR degeneracy occurs in featureless corridors; robust association algorithms (RANSAC, branch-and-bound) are needed.
  - **Latency requirements**: real-time control demands sub-millisecond state delivery; prediction-at-the-edge architectures decouple estimation from actuation.
  - **Initialisation**: poor initial state or covariance estimates can prevent filter convergence; dedicated initialisation routines are common in practice.
  - **Non-Gaussian distributions**: multi-hypothesis tracking and particle filters handle clutter and data association uncertainty that KF variants cannot.

- ### Standards and Context
  - **IEEE RAS standards**: IEEE 1873-2015 (Robot Map Data Representation) and related standards reference state estimation as a core capability.
  - **ROS (Robot Operating System)**: the `robot_localization` package provides a production EKF/UKF implementation widely used across ground robot platforms.
  - **GTSAM / iSAM2**: open-source factor-graph libraries from Georgia Tech; de-facto reference implementations for batch and incremental smoothing in academic and industry SLAM.
  - **NASA GNC standards**: Guidance, Navigation and Control standards for spacecraft reference Kalman-based state estimators as required components.
  - **Automotive**: ISO 26262 functional-safety standard indirectly governs state estimation in safety-critical AV perception pipelines.
  - Connects to broader AI and machine-learning domains via [[Probabilistic Inference]], [[Deep Learning]] perception frontends, and [[Reinforcement Learning]] environments that rely on accurate state representations.

- ### Current Landscape (2026)
  - The invariant extended Kalman filter (InEKF), grounded in Barrau and Bonnabel's Lie-group symmetry theory, has become the dominant proprioceptive backbone; the open-source DRIFT library (UMich CURLY, arXiv 2311.04320, updated 2024) packages symmetry-preserving dead-reckoning for legged, wheeled and other platforms.
  - Multi-sensor invariant estimators matured in 2025: Nisticò et al.'s E-InEKF and E-IS (IEEE RA-L, 2025) fuse kinematics, IMU, LiDAR and GPS via group-affine observation models, cutting absolute trajectory error by up to 28% indoors and 40% outdoors against LIO-SAM and FAST-LIO2 on the KAIST HOUND2 quadruped.
  - Humanoid state estimation reached moving/non-inertial ground in mid-2026: Mandali, He and Gu's proprioceptive InEKF with foot-mounted IMUs (arXiv 2606.19512) demonstrated 96% faster convergence and 80% lower position error on the Agility Digit robot squatting and walking on swaying, pitching and rotating platforms.
  - Hybrid learning-plus-filter architectures are the clear frontier: OptiState (arXiv 2401.16719, 2024) couples a Kalman filter with GRUs and a Vision Transformer for a 65% RMSE gain over VIO SLAM, and DFKI's InEKFormer (ICAR 2025) fuses an InEKF with a Transformer on the RH5 humanoid, though it flags the need for robust autoregressive training.
  - Setup-agnostic factor-graph fusion advanced with Holistic Fusion (Nubert et al., ETH Zurich/NASA JPL/MPI, arXiv 2504.06479, 2026), a task-agnostic framework fusing arbitrary absolute, local and landmark measurements across reference frames with automatic frame alignment.
  - Decoupled and optimisation-based estimators gained traction: moving-horizon estimation (MHE) approaches now jointly recover state, ground-reaction forces and inertial parameters, typically pairing an invariant EKF for orientation with a constrained MHE for velocity and contact quantities (ICRA/RSS 2025).
  - Key open challenges as of 2026 include reliable estimation under slippage and compressible or moving terrain, high-dimensional humanoid whole-body estimation, drift-free operation in vision- and LiDAR-denied environments, and stable training of the learned components inside filters.

- ### References
  - 1. Mandali, F., He, Z. & Gu, Y. (2026). Proprioceptive Invariant State Estimation for Humanoid Robots on Non-Inertial Ground. https://arxiv.org/abs/2606.19512
  - 2. Nisticò, Y., Kim, H., Soares, J. C. V., Fink, G., Park, H.-W. & Semini, C. (2025). Multi-Sensor Fusion for Quadruped Robot State Estimation using Invariant Filtering and Smoothing (E-InEKF/E-IS), IEEE RA-L. https://arxiv.org/abs/2504.20615
  - 3. Nubert, J., Tuna, T., Frey, J., Cadena, C., Kuchenbecker, K. J., Khattak, S. & Hutter, M. (2026). Holistic Fusion: Task- and Setup-Agnostic Robot Localization and State Estimation with Factor Graphs. https://arxiv.org/abs/2504.06479
  - 4. DFKI Robotics Innovation Center (2026). InEKFormer: A Hybrid State Estimator for Humanoid Robots, Proc. IEEE ICAR 2025. https://robotik.dfki-bremen.de/de/forschung/publikationen/16541
  - 5. Lee, K., Wisth, D. et al. / authors (2024). OptiState: State Estimation of Legged Robots using Gated Networks with Transformer-based Vision and Kalman Filtering. https://arxiv.org/abs/2401.16719
  - 6. Yu, T. (Tzu-Yuan Lin) et al., UMich CURLY (2024). Proprioceptive Invariant Robot State Estimation (DRIFT). https://arxiv.org/abs/2311.04320

- ### Provenance
  - sources:: Thrun, Burgard & Fox — *Probabilistic Robotics* (MIT Press); Barfoot — *State Estimation for Robotics* (Cambridge UP); IEEE Transactions on Robotics; IJRR
  - updated:: 2026-06-13
