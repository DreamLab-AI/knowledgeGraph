public:: true

# PositionControl
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:934f1323231d57fa3b7a8ebce731c61066086a5d2775f88de03fa9323b28e73c",
  "@type": "Page",
  "vc:slug": "position-control",
  "title": "PositionControl",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:actuator-command",
      "vc:label": "ActuatorCommand"
    },
    {
      "@id": "urn:visionflow:linked:automation-domain",
      "vc:label": "AutomationDomain"
    },
    {
      "@id": "urn:visionflow:linked:calibration",
      "vc:label": "Calibration"
    },
    {
      "@id": "urn:visionflow:linked:control-law",
      "vc:label": "ControlLaw"
    },
    {
      "@id": "urn:visionflow:linked:control-theory-domain",
      "vc:label": "ControlTheoryDomain"
    },
    {
      "@id": "urn:visionflow:linked:error-calculation",
      "vc:label": "ErrorCalculation"
    },
    {
      "@id": "urn:visionflow:linked:feedforward-compensation",
      "vc:label": "FeedforwardCompensation"
    },
    {
      "@id": "urn:visionflow:linked:homing",
      "vc:label": "Homing"
    },
    {
      "@id": "urn:visionflow:linked:iec-61800-adjustable-speed-electrical-power-drive-systems",
      "vc:label": "IEC 61800 Adjustable Speed Electrical Power Drive Systems"
    },
    {
      "@id": "urn:visionflow:linked:ieee-control-systems-society",
      "vc:label": "IEEE Control Systems Society"
    },
    {
      "@id": "urn:visionflow:linked:iso-8373-robotics-vocabulary",
      "vc:label": "ISO 8373 Robotics Vocabulary"
    },
    {
      "@id": "urn:visionflow:linked:iso-9283-manipulating-industrial-robots-performance-criteria",
      "vc:label": "ISO 9283 Manipulating Industrial Robots Performance Criteria"
    },
    {
      "@id": "urn:visionflow:linked:kinematic-model",
      "vc:label": "KinematicModel"
    },
    {
      "@id": "urn:visionflow:linked:motor-driver",
      "vc:label": "MotorDriver"
    },
    {
      "@id": "urn:visionflow:linked:path-following",
      "vc:label": "PathFollowing"
    },
    {
      "@id": "urn:visionflow:linked:pick-and-place",
      "vc:label": "PickAndPlace"
    },
    {
      "@id": "urn:visionflow:linked:position-feedback",
      "vc:label": "PositionFeedback"
    },
    {
      "@id": "urn:visionflow:linked:position-sensor",
      "vc:label": "PositionSensor"
    },
    {
      "@id": "urn:visionflow:linked:robot-operating-system-ros-control-standards",
      "vc:label": "Robot Operating System (ROS) Control Standards"
    },
    {
      "@id": "urn:visionflow:linked:servo-system",
      "vc:label": "ServoSystem"
    },
    {
      "@id": "urn:visionflow:linked:synchronization",
      "vc:label": "Synchronization"
    },
    {
      "@id": "urn:visionflow:linked:trajectory-tracking",
      "vc:label": "TrajectoryTracking"
    },
    {
      "@id": "urn:visionflow:owl:class:control-algorithm",
      "vc:label": "ControlAlgorithm"
    },
    {
      "@id": "urn:visionflow:owl:class:feedback-control",
      "vc:label": "FeedbackControl"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-control",
      "vc:label": "MotionControl"
    },
    {
      "@id": "urn:visionflow:owl:class:power-supply",
      "vc:label": "PowerSupply"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0113"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "PositionControl"
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
  "@id": "urn:ngm:class:position-control",
  "@type": "Class",
  "label": "PositionControl",
  "definition": "A closed-loop feedback control modology that commands a robotic manipulator, actuator, or motion platform to achieve and maintain a desired spatial position or angular orientation by continuously measuring the actual position via encoders, resolvers, or external sensing systems (vision, LIDAR), c...",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:actuator-command",
        "label": "ActuatorCommand"
      },
      {
        "@id": "urn:ngm:class:control-law",
        "label": "ControlLaw"
      },
      {
        "@id": "urn:ngm:class:error-calculation",
        "label": "ErrorCalculation"
      },
      {
        "@id": "urn:ngm:class:feedforward-compensation",
        "label": "FeedforwardCompensation"
      },
      {
        "@id": "urn:ngm:class:position-sensor",
        "label": "PositionSensor"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      },
      {
        "@id": "urn:ngm:class:kinematic-model",
        "label": "KinematicModel"
      },
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "MotorDriver"
      },
      {
        "@id": "urn:ngm:class:position-feedback",
        "label": "PositionFeedback"
      },
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "PowerSupply"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:homing",
        "label": "Homing"
      },
      {
        "@id": "urn:ngm:class:path-following",
        "label": "PathFollowing"
      },
      {
        "@id": "urn:ngm:class:pick-and-place",
        "label": "PickAndPlace"
      },
      {
        "@id": "urn:ngm:class:synchronization",
        "label": "Synchronization"
      },
      {
        "@id": "urn:ngm:class:trajectory-tracking",
        "label": "TrajectoryTracking"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:control-algorithm",
        "label": "ControlAlgorithm"
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
  "@id": "urn:visionflow:annotation:link-resolutions:position-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:934f1323231d57fa3b7a8ebce731c61066086a5d2775f88de03fa9323b28e73c"
  },
  "vc:resolutions": [
    {
      "raw": "[[ActuatorCommand]]",
      "resolved": "urn:visionflow:linked:actuator-command",
      "kind": "StubLink"
    },
    {
      "raw": "[[AutomationDomain]]",
      "resolved": "urn:visionflow:linked:automation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calibration]]",
      "resolved": "urn:visionflow:linked:calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[ControlLaw]]",
      "resolved": "urn:visionflow:linked:control-law",
      "kind": "StubLink"
    },
    {
      "raw": "[[ControlTheoryDomain]]",
      "resolved": "urn:visionflow:linked:control-theory-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[ErrorCalculation]]",
      "resolved": "urn:visionflow:linked:error-calculation",
      "kind": "StubLink"
    },
    {
      "raw": "[[FeedforwardCompensation]]",
      "resolved": "urn:visionflow:linked:feedforward-compensation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Homing]]",
      "resolved": "urn:visionflow:linked:homing",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEC 61800 Adjustable Speed Electrical Power Drive Systems]]",
      "resolved": "urn:visionflow:linked:iec-61800-adjustable-speed-electrical-power-drive-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE Control Systems Society]]",
      "resolved": "urn:visionflow:linked:ieee-control-systems-society",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 8373 Robotics Vocabulary]]",
      "resolved": "urn:visionflow:linked:iso-8373-robotics-vocabulary",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 9283 Manipulating Industrial Robots Performance Criteria]]",
      "resolved": "urn:visionflow:linked:iso-9283-manipulating-industrial-robots-performance-criteria",
      "kind": "StubLink"
    },
    {
      "raw": "[[KinematicModel]]",
      "resolved": "urn:visionflow:linked:kinematic-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[MotorDriver]]",
      "resolved": "urn:visionflow:linked:motor-driver",
      "kind": "StubLink"
    },
    {
      "raw": "[[PathFollowing]]",
      "resolved": "urn:visionflow:linked:path-following",
      "kind": "StubLink"
    },
    {
      "raw": "[[PickAndPlace]]",
      "resolved": "urn:visionflow:linked:pick-and-place",
      "kind": "StubLink"
    },
    {
      "raw": "[[PositionFeedback]]",
      "resolved": "urn:visionflow:linked:position-feedback",
      "kind": "StubLink"
    },
    {
      "raw": "[[PositionSensor]]",
      "resolved": "urn:visionflow:linked:position-sensor",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robot Operating System (ROS) Control Standards]]",
      "resolved": "urn:visionflow:linked:robot-operating-system-ros-control-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[ServoSystem]]",
      "resolved": "urn:visionflow:linked:servo-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Synchronization]]",
      "resolved": "urn:visionflow:linked:synchronization",
      "kind": "StubLink"
    },
    {
      "raw": "[[TrajectoryTracking]]",
      "resolved": "urn:visionflow:linked:trajectory-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[ControlAlgorithm]]",
      "resolved": "urn:visionflow:owl:class:control-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[FeedbackControl]]",
      "resolved": "urn:visionflow:owl:class:feedback-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MotionControl]]",
      "resolved": "urn:visionflow:owl:class:motion-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PowerSupply]]",
      "resolved": "urn:visionflow:owl:class:power-supply",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics-domain",
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
  - A closed-loop feedback control methodology that commands a robotic manipulator, actuator, or motion platform to achieve and maintain a desired spatial position or angular orientation by continuously measuring the actual position via encoders, resolvers, or external sensing systems (vision, LIDAR), computing the position error (setpoint minus measured position), and generating corrective control signals through algorithms such as proportional-integral-derivative (PID) control, state-space controllers, or model-based feedforward compensation, with applications spanning industrial robotic arms executing pick-and-place operations with ±0.05 mm repeatability, CNC machine tools achieving ±2 μm contouring accuracy, collaborative robots maintaining safe position constraints for human proximity (ISO/TS 15066 compliant force-limited operation), delta robots performing high-speed sorting at 300 picks/minute, and autonomous mobile robots following waypoint trajectories with <10 cm path deviation, characterized by performance metrics including steady-state error (typical <0.1% of travel range for servo drives), settling time (milliseconds to seconds depending on inertia and control bandwidth), overshoot percentage (<5% for critically damped systems), and bandwidth (1-100 Hz for mechanical systems, kHz for nanopositioning piezo stages), and distinguished from velocity control (regulates speed independent of position) and force control (regulates interaction forces for compliant tasks like assembly or grinding).

- ### Semantic Classification
  - owl-class:: robotics:PositionControl
  - owl-role:: ControlAlgorithm
  - belongs-to-domain:: [[RoboticsDomain]], [[ControlTheoryDomain]], [[AutomationDomain]]

- ### Relationships
  - is-subclass-of:: [[ControlAlgorithm]], [[FeedbackControl]], [[ServoSystem]], [[MotionControl]]
  - has-part:: [[PositionSensor]], [[ErrorCalculation]], [[ControlLaw]], [[ActuatorCommand]], [[FeedforwardCompensation]]
  - requires:: [[PositionFeedback]], [[KinematicModel]], [[Calibration]], [[MotorDriver]], [[PowerSupply]]
  - enables:: [[PickAndPlace]], [[PathFollowing]], [[TrajectoryTracking]], [[Homing]], [[Synchronization]]

- ### Content
  - **Position control** is a fundamental closed-loop feedback control paradigm in robotics and automation that regulates the spatial location or angular orientation of mechanical systems to match commanded setpoints or follow prescribed trajectories with high precision and repeatability. The control objective is to minimize position error **e(t) = x_desired(t) - x_actual(t)** through continuous measurement of actual position via encoders (rotary: 2,000-1,000,000 pulses/revolution, linear: 1-0.1 μm resolution), resolvers (12-16 bit analog-to-digital conversion), or external sensors (vision systems, laser trackers achieving <10 μm 3D accuracy), computation of control action via algorithms ranging from simple proportional-integral-derivative (PID) controllers **u(t) = K_p·e(t) + K_i·∫e(τ)dτ + K_d·de/dt** to advanced model-based methods (computed torque control, sliding mode control, adaptive neural networks), and actuation through motor drives (servo amplifiers delivering 1-100 A peak current at kHz switching frequencies for brushless DC, AC induction, or stepper motors). Position control manifests in diverse forms: **joint-space control** regulates individual actuator positions in robot manipulator coordinates (6-axis industrial arms with 0.02-0.1 mm repeatability per ISO 9283), **task-space (Cartesian) control** governs end-effector pose through inverse kinematics transformations (solving **q = IK(x,y,z,roll,pitch,yaw)** for joint angles q), **multi-axis coordinated motion** synchronizes multiple drives for contouring applications (5-axis CNC machining achieving 2 μm circular interpolation error), and **redundant robot control** resolves kinematic redundancy via optimization (nullspace projection for obstacle avoidance while maintaining end-effector position). Performance metrics include **steady-state error** (ideally zero for integral-action controllers, <0.05% typical for servo drives), **settling time** (2-5% band criterion, ranging 10 ms for low-inertia direct-drive systems to 1-2 seconds for large gantries), **overshoot** (<5% for critical applications like semiconductor handling, 10-20% acceptable for non-critical motions), **control bandwidth** (1-10 Hz for hydraulic systems, 50-200 Hz for electric servo loops, kHz for piezoelectric nanopositioners), and **disturbance rejection** (quantified via sensitivity function S(jω) and complementary sensitivity T(jω) in frequency domain). Distinguished from **velocity control** (maintains constant speed independent of position, used in conveyor systems and spindle drives) and **force control** (regulates interaction forces for compliant assembly, polishing, or human-robot collaboration per ISO/TS 15066 power-force limits), position control prioritizes spatial accuracy and is ubiquitous in pick-and-place manipulation, precision machining, electronic assembly, surgical robotics (da Vinci system achieving 1-2 mm precision), and autonomous vehicle parking (<5 cm lateral error).
  - ### Control Architectures and Algorithms

	  #### PID Control (Proportional-Integral-Derivative)
	  - **Transfer Function**: C(s) = K_p + K_i/s + K_d·s
	    - **Proportional gain K_p**: Immediate response to current error (typical 10-1000 depending on units)
	    - **Integral gain K_i**: Eliminates steady-state error (0.1-100, risk of windup requiring anti-windup schemes)
	    - **Derivative gain K_d**: Dampens oscillations via rate feedback (0.001-1, sensitive to noise)
	  - **Ziegler-Nichols Tuning**: Empirical method finding ultimate gain K_u (sustained oscillation) and period T_u
	    - K_p = 0.6·K_u, K_i = 2·K_p/T_u, K_d = K_p·T_u/8
	    - Typical starting point, requires refinement for performance vs robustness tradeoffs
	  - **Industrial Implementation**: 90% of industrial position controllers employ PID or variants
	    - Siemens SINAMICS S120: Position loop 125 μs cycle time, velocity loop 62.5 μs, current loop 31.25 μs (cascaded control)
	    - Rockwell ControlLogix 1756-M08SE: 8-axis servo controller, configurable PID with feedforward, <1 ms position update
	  - **Limitations**:
	    - Poor performance with nonlinear dynamics (friction, backlash, compliance)
	    - Conservative tuning for stability → slow response (phase margin >45°, gain margin >6 dB)
	    - No compensation for known disturbances (gravity, centrifugal forces in multi-axis systems)

	  #### Feedforward Compensation
	  - **Model-Based Feedforward**: u_ff = M(q)·q̈ + C(q,q̇)·q̇ + G(q)
	    - **M(q)**: Inertia matrix (2nd-order derivatives from CAD models or system identification)
	    - **C(q,q̇)**: Coriolis and centrifugal forces (velocity-dependent, critical for high-speed robots)
	    - **G(q)**: Gravity torques (configuration-dependent, dominates slow motions)
	  - **Friction Compensation**: Coulomb + viscous + Stribeck models
	    - τ_friction = F_c·sign(q̇) + F_v·q̇ + F_s·exp(-(q̇/q̇_s)²)·sign(q̇)
	    - Reduces stick-slip in precision stages (AFM scanners, photolithography steppers)
	  - **Applications**: CNC machine tool contouring errors reduced 70-85% with inverse dynamics feedforward
	    - DMG MORI 5-axis mills: Commanded acceleration → torque feedforward → <5 μm following error at 20 m/min
	  - **Challenges**: Requires accurate dynamic models (parameter identification via least-squares regression on acceleration-torque data)

	  #### State-Space Control
	  - **LQR (Linear Quadratic Regulator)**: Optimal control minimizing cost J = ∫(x^T·Q·x + u^T·R·u)dt
	    - **State-feedback gain K** computed via algebraic Riccati equation: A^T·P + P·A - P·B·R^-1·B^T·P + Q = 0
	    - u = -K·x achieves infinite gain margin, 60° phase margin (guaranteed robustness)
	  - **LQG (Linear Quadratic Gaussian)**: LQR + Kalman filter for state estimation from noisy sensors
	    - Separates controller design from observer design (separation principle)
	    - Used in aerospace (satellite attitude control) and automotive (active suspension)
	  - **Pole Placement**: Assign closed-loop poles for desired transient response
	    - 2nd-order dominant poles: ω_n (natural frequency), ζ (damping ratio 0.6-0.8 for fast settling with minimal overshoot)
	  - **Advantages**: Systematic design for multi-input multi-output (MIMO) systems
	    - Stewart platform (6-DOF hexapod): 6×6 state-space model with cross-coupling compensation
	  - **Limitations**: Requires linearization about operating point (Jacobian J = ∂f/∂x), may degrade for large excursions

	  #### Adaptive and Robust Control
	  - **Model Reference Adaptive Control (MRAC)**: Adjusts controller parameters online to match reference model
	    - Parameter update law: θ̇ = -Γ·e·φ (Γ adaptation gain, φ regressor vector)
	    - Compensates time-varying payloads (industrial robots handling 5-50 kg objects)
	  - **Sliding Mode Control**: Enforces sliding surface s(x) = 0 via discontinuous switching
	    - u = u_eq + K·sign(s), provides robustness to ±30% parameter variations
	    - Chattering mitigation via boundary layer (continuous approximation sign(s) → sat(s/ε))
	  - **H∞ Robust Control**: Minimizes worst-case gain from disturbances to outputs
	    - ||T_zw||_∞ < γ ensures stability for all uncertainties in structured set Δ
	    - Used in high-precision systems (semiconductor lithography stages, telescope mounts)

	  #### Model Predictive Control (MPC)
	  - **Receding Horizon Optimization**: At each time step, solve optimization over prediction horizon N
	    - min Σ(||x_k - x_ref||²_Q + ||u_k||²_R) subject to x_k+1 = A·x_k + B·u_k, constraints on x, u
	  - **Constraint Handling**: Explicit saturation limits (±10 V command, ±3000 RPM speed, ±50 N·m torque)
	    - Prevents actuator windup, guarantees safe operation near workspace boundaries
	  - **Applications**:
	    - ABB IRB 6700 robot: MPC for obstacle avoidance with 100 ms update rate
	    - KUKA iiwa collaborative robot: MPC-based impedance control for safe human interaction
	  - **Computational Cost**: Quadratic programming (QP) solvers required
	    - Real-time implementation via explicit MPC (offline pre-compute control law as piecewise affine function)
  - ### Sensors and Feedback Mechanisms

	  #### Rotary Encoders
	  - **Incremental Encoders**: Quadrature A/B channels (90° phase shift) + index pulse
	    - Resolution: 100-10,000 pulses/revolution (PPR) typical, up to 1,000,000 PPR for high-end
	    - Quadrature decoding: 4× multiplication (rising/falling edges both channels → 400,000 counts/rev for 100,000 PPR)
	    - Advantages: Low cost ($20-$200), immune to power loss (counts preserved in controller)
	    - Limitations: Relative measurement (requires homing to index), susceptible to noise (differential signaling RS-422 mitigates)
	  - **Absolute Encoders**: Multi-turn (tracks revolutions) + single-turn (position within revolution)
	    - Gray code or binary encoding: 12-24 bits single-turn (4,096-16,777,216 positions)
	    - Protocols: SSI (synchronous serial), BiSS, EnDat, HIPERFACE DSL (digital communication 2.5-10 MHz)
	    - Advantages: Instant position on power-up, no homing required
	    - Cost: $100-$2,000 depending on resolution and protocol
	  - **Optical vs Magnetic**:
	    - **Optical**: Glass or metal disk with etched slots, LED + photodetector, ±5 arc-second accuracy
	      - Sensitive to contamination (requires sealed housing), temperature drift <±20 ppm/°C
	    - **Magnetic**: Hall-effect or magnetoresistive (MR) sensors, robust to dust/oil
	      - Lower resolution (16-bit typical), larger temperature coefficient ±100 ppm/°C

	  #### Linear Encoders
	  - **Optical Linear Scales**: Glass or steel tape with etched graduations
	    - Resolution: 0.1-5 μm, lengths 100 mm to 30 meters
	    - Renishaw RGSZ40: 1 μm resolution, ±3 μm accuracy over 3 m, $1,200-$3,000
	    - Applications: CNC machine tool axes, coordinate measuring machines (CMMs), semiconductor wafer stages
	  - **Magnetic Linear Encoders**: Magnetic strip + MR sensor read head
	    - Resolution: 1-50 μm, lengths up to 50 meters
	    - Cost-effective ($200-$800), immune to contamination, suitable for harsh environments
	    - Sick DMS60: 10 μm resolution, IP67 rated, used in automated warehouses
	  - **Laser Interferometers**: Heterodyne or homodyne interferometry
	    - Renishaw XL-80: 0.5 ppm accuracy, measures displacement up to 80 meters
	    - Calibration standard for machine tools per ISO 230-2, cost $30,000-$60,000

	  #### Vision-Based Position Sensing
	  - **2D Vision**: Cameras (640×480 to 4096×3072 pixels) + image processing
	    - Blob detection, edge detection (Canny, Sobel), template matching (NCC)
	    - Accuracy: 0.05-0.5 mm depending on working distance and pixel calibration
	    - Pick-and-place robots: Cognex In-Sight vision systems, 15 ms image acquisition + processing
	  - **3D Vision**: Stereo cameras, structured light, time-of-flight (ToF)
	    - Basler blaze-101 ToF camera: 640×480 depth map, ±10 mm accuracy at 1 m, 30 Hz
	    - Bin picking applications: Randomly oriented parts localized to ±2 mm, 6-DOF pose estimation
	  - **Advantages**: Non-contact, measures multiple features simultaneously, adaptable to part variations
	  - **Limitations**: Lighting sensitivity, occlusion, computational overhead (GPU acceleration required for real-time)

	  #### Force-Torque Sensors (Indirect Position Sensing)
	  - **Impedance Control**: Modifies position stiffness based on contact forces
	    - Target impedance: M_d·(ẍ - ẍ_d) + B_d·(ẋ - ẋ_d) + K_d·(x - x_d) = F_ext
	    - ATI Industrial Automation Gamma: 130 N force, 10 N·m torque, 1/80 N resolution, $6,000
	  - **Hybrid Position-Force Control**: Independent position and force control in orthogonal task-space directions
	    - Surface polishing: Normal direction force-controlled (20 N target), tangential plane position-controlled
	  - **Applications**: Assembly with tight tolerances (peg-in-hole 0.1 mm clearance), surface finishing, human-robot collaboration
  - ### Performance Metrics and Specifications

	  #### Accuracy and Repeatability (ISO 9283)
	  - **Accuracy**: Maximum deviation between commanded and actual position
	    - Measurement: 30-point cube test (ISO 9283), laser tracker or calibrated jig
	    - Industrial robots: ±0.05 to ±2 mm depending on arm length (longer reach → larger errors)
	    - SCARA robots: ±0.01 mm typical (rigid Z-axis, lower moment of inertia)
	  - **Repeatability**: Variation when returning to same commanded position
	    - ISO 9283 definition: Mean position ± 3σ (99.7% confidence)
	    - High-precision robots: ±0.02 mm (FANUC M-20iA), ultra-precision: ±0.005 mm (Epson G20)
	    - Key differentiator: Repeatability 5-10× better than accuracy (compensation via calibration)

	  #### Speed and Acceleration
	  - **Maximum Speed**: Joint velocity limits (degrees/second or mm/s)
	    - Industrial robots: 200-750°/s for large joints, 1000-2000°/s for wrist axes
	    - Delta robots: 10-15 m/s linear speed (Codian ABB FlexPicker 3600 picks/hour)
	  - **Acceleration**: Limited by motor torque and structural compliance
	    - Typical: 5-20 m/s² for large robots, 50-100 m/s² for SCARA, 200+ m/s² for delta robots
	    - Jerk limiting: 3rd derivative constraint (da/dt < 5000 m/s³) reduces vibration, wear
	  - **Settling Time**: Time to reach and stay within ±2% of target position
	    - Fast servo systems: 10-50 ms (low inertia, high bandwidth)
	    - Large gantries: 0.5-2 seconds (mechanical damping, lower control bandwidth)

	  #### Control Bandwidth
	  - **Definition**: Frequency at which closed-loop gain drops to -3 dB (0.707 magnitude)
	    - Position loop: 1-10 Hz (mechanical resonances limit higher bandwidths)
	    - Velocity loop: 50-200 Hz (cascade inner loop, higher bandwidth than position)
	    - Current loop: 1-5 kHz (electric time constants ~1 ms, fastest loop)
	  - **Bandwidth vs Stability**: Higher bandwidth → faster response but risks instability near resonances
	    - Notch filters suppress structural resonances (Q-factor 10-30, centered at ~100-500 Hz)
	  - **Direct-Drive Systems**: Eliminate gearbox compliance → 50-100 Hz position bandwidth achievable
	    - Harmonic drives: 20:1 to 160:1 reduction, zero backlash, torsional stiffness 50-150 N·m/arcmin

	  #### Disturbance Rejection
	  - **Load Disturbances**: External forces/torques (cutting forces, payload variations, wind gusts)
	    - Quantified via output disturbance sensitivity: Y(s)/D(s) = 1/(1 + L(s)), where L(s) = loop gain
	    - High loop gain → good rejection (integral action provides infinite DC gain)
	  - **Measurement Noise**: Encoder quantization, EMI interference
	    - Filtered via low-pass in feedback path (Butterworth 2nd-order, cutoff 200-500 Hz)
	    - Kalman filter for optimal state estimation (separates signal from noise based on covariance models)
	  - **Cross-Coupling**: Interaction between axes in multi-axis systems
	    - Decoupling via Jacobian inverse J^-1 or resolved motion rate control (Cartesian velocity → joint velocity)

  #### Current Landscape
  - Robotics and automation industries have achieved mature position control implementations with ongoing innovation in AI-enhanced tuning, modular safety architectures, and collaborative robotics
  - **Industrial robot installations**: IFR (International Federation of Robotics) reported 3.9 million units operational globally in 2025, dominated by position-controlled manipulators in automotive (32% share), electronics (25%), and metalworking (15%)[8]
  - **Collaborative robots (cobots)**: 47,000 units shipped 2025 (18% YoY growth), all employing ISO/TS 15066-compliant position-limited operation with force-torque sensors for safe human proximity[9]
  - **Semiconductor manufacturing**: 10 nm node photolithography steppers (ASML TWINSCAN NXE:3600D) achieve 2 nm overlay via dual-stage positioning (coarse: 1 μm, fine: sub-nanometer piezo) with laser interferometry feedback[10]
  - **Medical robotics**: da Vinci Xi surgical system (Intuitive Surgical) provides 7-DOF instruments with 1-2 mm positioning accuracy, 540,000+ procedures performed 2024[11]
  - Technical advancements focus on AI/ML integration, real-time optimization, and industry-specific performance enhancements
  - **Neural network PID tuning**: Automated gain scheduling using reinforcement learning (DDPG, TD3 algorithms) reduces tuning time 80% vs manual methods, demonstrated on ABB IRB 1600 achieving 15% faster cycle times[12]
  - **Model-free adaptive control**: Data-driven methods (iterative learning control, virtual reference feedback tuning) eliminate need for explicit dynamics models, deployed in semiconductor wafer handling (Applied Materials Endura platform)[13]
  - **Digital twin position control**: Siemens NX MCD (Mechatronic Concept Designer) enables closed-loop simulation with real PLC code (TIA Portal), identifies control instabilities pre-deployment reducing commissioning time 40%[14]
  - **Distributed control architectures**: EtherCAT with 31.25 μs cycle time synchronizes 100+ servo axes within ±1 μs, critical for multi-robot coordination (BMW i4 body-in-white assembly lines)[15]
  - UK and North England robotics ecosystem demonstrates leadership in collaborative robotics, precision automation, and academic-industry partnerships
  - **National Centre for Robotics (NCR)**: £20 million EPSRC investment coordinates research across Edinburgh, Birmingham, Oxford focusing on position control robustness for unstructured environments[16]
  - **Manufacturing Technology Centre (MTC)**: Coventry testbed for Industry 4.0 position control validation; trials of Siemens SINUMERIK ONE CNC achieving ±1 μm positioning for aerospace components[17]
  - Standards evolution addresses safety, performance validation, and interoperability
  - **ISO 9283:1998 revised to ISO 9283:2024**: Added dynamic accuracy tests (circular path deviation <0.1% radius), multi-axis synchronization metrics, temperature drift compensation requirements[18]
  - **IEC 61800-7-1:2023 Safety Functions**: Standardizes Safe Torque Off (STO), Safe Stop 1 (SS1), Safely Limited Position (SLP) for servo drives integrated with SIL 3 safety controllers[19]
  - **PLCopen Motion Control**: Part 1-6 function blocks (MC_MoveAbsolute, MC_MoveRelative, MC_Stop) enable vendor-neutral programming across Siemens, Rockwell, Beckhoff platforms[20]

  #### Academic Context
  - Position control foundations rooted in classical control theory, state-space methods, and nonlinear dynamics, with extensive literature spanning control engineering, robotics, and mechatronics
  - **PID Control Theory**: Åström & Hägglund (1995) "PID Controllers: Theory, Design, and Tuning" remains definitive reference, covering Ziegler-Nichols, Cohen-Coon, relay feedback tuning, and anti-windup strategies[1]
  - **Feedback Control of Dynamic Systems**: Franklin, Powell, & Emami-Naeini (8th ed., 2019) provides comprehensive treatment of root locus, frequency response (Bode, Nyquist), state-space design, and digital implementation[2]
  - **Robot Dynamics and Control**: Spong, Hutchinson, & Vidyasagar (2005) establishes theoretical foundations for manipulator control including computed torque, adaptive control, force control, and task-space formulations[3]
  - Academic research emphasizes rigorous stability analysis (Lyapunov methods, passivity theory), performance optimization (H2/H∞ synthesis), and experimental validation on standardized platforms (KUKA LWR, UR5, Baxter robot testbeds)[4]
  - Research methodologies combine simulation (MATLAB/Simulink, Gazebo+ROS), hardware-in-the-loop testing (dSPACE, National Instruments), and industrial deployment validation
  - **System Identification**: Empirical transfer function estimation via frequency response (swept sine, PRBS), parameter estimation (recursive least squares, prediction error methods), nonlinear model fitting (Hammerstein-Wiener, neural networks)[5]
  - **Control Design Workflows**: Model derivation (Lagrangian mechanics for rigid-body dynamics) → linearization → controller synthesis (pole placement, LQR, robust control) → simulation → real-time implementation (C/C++, embedded Linux) → performance tuning[6]
  - **Benchmark Problems**: Two-link manipulator (planar, 4-state system for pedagogical demonstrations), SCARA robot (3-DOF, industrial relevance), hexapod (6-DOF parallel kinematics, over-actuated, ill-conditioned Jacobian challenges)[7]

  #### UK Context
  - United Kingdom maintains strong academic and industrial capabilities in position control research, precision engineering, and automation systems integration
  - **EPSRC National Centre for Robotics**: £20 million funding (2021-2026) coordinates UK universities (Edinburgh leads with £5.2M share) on robust control for soft robotics, compliant manipulation, human-robot collaboration[21]
  - **High Value Manufacturing Catapult**: £150 million government investment across 7 centers (MTC, NCC, AFRC, CPI, WMG, AMRC, NPL) provides SME access to precision automation testbeds, servo system validation facilities[22]
  - **Renishaw plc** (Gloucestershire): World leader in optical encoder technology; 2025 revenue £574M, 40% from position measurement products (XL laser interferometer, RESOLUTE absolute encoder systems)[23]

  ### North England Innovation and Research

  - **Manchester**: School of Engineering (University of Manchester)
  - Robotics Hub deploys advanced position control for nuclear decommissioning: 12-DOF hyper-redundant manipulator with sub-millimeter end-effector accuracy via resolved motion rate control + laser tracker feedback, validated at Sellafield mockup facility[24]
  - Control Systems Centre research on data-driven MPC: Applied to KUKA LWR 4+ robot achieving 35% faster pick-and-place cycles vs conventional PID through learned disturbance models (Gaussian process regression)[25]

  - **Leeds**: Institute of Robotics, Autonomous Systems and Sensing (University of Leeds)
  - EPSRC DTP projects on energy-efficient position control: Developed event-triggered control reducing servo amplifier power consumption 22% (from 450W to 350W average) via adaptive sampling (10-500 Hz) based on trajectory curvature[26]
  - Collaboration with KUKA UK: Validated LQR-based multi-axis coordination for LBR iiwa 14 R820 achieving ±0.05 mm synchronization error across 7 joints during coordinated motion (vs ±0.15 mm independent joint control)[27]

  - **Sheffield**: Advanced Manufacturing Research Centre (AMRC - Boeing partnership)
  - Precision machining research: 5-axis DMG MORI DMU 50 with Heidenhain TNC 640 control modified for real-time feedforward friction compensation, reducing corner rounding errors from 12 μm to 3 μm on aerospace aluminum components[28]
  - Integrated Project 3 (IP3) programme: Additive manufacturing robots (ABB IRB 4600) with closed-loop laser height sensing achieving ±0.2 mm layer thickness control for titanium aerospace parts[29]

  - **Newcastle**: School of Engineering (Newcastle University)
  - Mechatronics research: Stewart platform (Physik Instrumente M-850.50) controlled via decentralized PID achieving 1 μm positioning resolution for optical alignment, 10 Hz closed-loop bandwidth with cross-coupling compensation via Jacobian pseudo-inverse[30]
  - Industrial collaboration with Siemens Digital Industries: Validated TIA Portal SIMOTION D445 controller on 6-axis Stäubli TX90 robot, demonstrating <15 ms cycle time for synchronized conveyor tracking with ±2 mm accuracy at 1.5 m/s belt speed[31]

  ### UK Industry Adoption and Case Studies

  - **Jaguar Land Rover** (Solihull, Castle Bromwich, Halewood plants): 2,400+ ABB, KUKA, FANUC robots with position control accuracy ±0.1 mm for aluminum body assembly; EtherCAT-synchronized 80-robot cell achieves 60-second cycle time for Range Rover Sport body framing[32]
  - **Rolls-Royce** (Derby): Aero-engine blade machining with Hermle C42U 5-axis mills, position control ±2 μm via Heidenhain linear encoders (0.1 μm resolution), feedforward gravity compensation for 3-meter Z-axis cantilever[33]
  - **AstraZeneca** (Macclesfield): Pharmaceutical filling line with 12-axis Bosch Rexroth IndraMotion MLC coordinating robot + conveyor + capping station; position synchronization ±0.5 mm at 200 vials/minute, validating FDA 21 CFR Part 11 compliance[34]
  - **Ocado Technology** (Hatfield): 1,000+ warehouse picking robots with ±5 mm position accuracy via encoder + vision fusion (Cognex 2D cameras), handling 65,000 customer orders/week, demonstrating commercial viability of high-throughput position control[35]

  #### Future Directions
  ### Emerging Technologies and Research Frontiers

  - **AI-Enhanced Control**: Deep reinforcement learning (RL) for adaptive position control
  - Model-free RL (SAC, TD3) learns optimal control policies from 10,000+ trials in simulation (MuJoCo, PyBullet), transfers to real robots via domain randomization
  - Google Brain demonstrated RL-tuned PID outperforming hand-tuned baselines by 18% on UR5 pick-place tasks (2024 results), production deployment anticipated 2027-2029[36]
  - Challenges: Sample efficiency (millions of interactions), sim-to-real gap, safety guarantees (constraint satisfaction difficult to enforce in neural policies)

  - **Quantum Sensing for Ultra-Precision**: Atomic interferometry achieving 10^-12 rad/√Hz angular resolution
  - NIST demonstrated portable atom interferometer measuring tilt to 50 nanoradians (equivalent 0.01 arcseconds), potential for next-generation CMM calibration[37]
  - Commercial availability forecasted 2030+, initial cost $500K-$2M limiting adoption to national metrology institutes

  - **Neuromorphic Control**: Event-driven processing mimicking biological motor control
  - Intel Loihi 2 neuromorphic chip (1M neurons, 120M synapses) demonstrated 100× power efficiency vs CPU for spiking neural network PID tuning in simulation[38]
  - Research stage (TRL 3-4): practical robotic deployment requires standardized interfaces, control-theoretic stability analysis

  - **Soft Robotics Position Control**: Controlling continuum manipulators via pneumatic/tendon actuation
  - Challenge: Infinite DOF, nonlinear material properties (silicone, fabric), difficult to model dynamics
  - Approaches: Piece-wise constant curvature (PCC) models, Cosserat rod theory, learning-based inverse models (neural networks trained on 50,000+ configurations)[39]
  - Applications: Minimally invasive surgery (Medrobotics Flex system 1.6 mm diameter, 180° bending), fruit harvesting (soft grippers deforming around produce)

  ### Standardization and Interoperability Initiatives

  - **OPC UA Part 18 (Robotics Companion Specification)**: Standardizes robot-controller communication
  - Position control via SkillType nodes (MoveLinear, MoveJoint, MoveCircular) with universal data model (target position, velocity, acceleration, jerk limits)
  - Enables multi-vendor robot cells (KUKA + Universal Robots + Yaskawa controlled by single MES), pilot deployments at VW Wolfsburg 2025[40]

  - **ROS 2 Control Framework**: Hardware abstraction layer for position controllers
  - ros2_control supports PID, computed torque, admittance controllers as plugins (C++ or Python), unified YAML configuration
  - 200+ robot platforms supported (UR, ABB, KUKA, Franka Emika), simplifies academic-to-industry transitions, reduces bespoke controller code 60%[41]

  - **IEEE 1850 PSS (Property Specification Standard)**: Formal verification of control software
  - Temporal logic assertions verify safety properties (position never exceeds joint limits, velocity ramp rate <max jerk)
  - Integration with MATLAB Simulink Design Verifier, used in automotive ADAS (ISO 26262 functional safety)[42]

  ### Sustainability and Circular Economy

  - **Energy-Efficient Servos**: SiC (silicon carbide) inverters reducing losses 30-50% vs Si IGBTs
  - Yaskawa Σ-7F servo amplifiers: 97.5% efficiency at rated load (vs 93% previous generation), 250W power savings per axis at 50% duty cycle
  - Estimated 1.2 TWh/year global savings if deployed across 3.9M industrial robots (equivalent 0.5 Mt CO₂e reduction)[43]

  - **Predictive Maintenance via Position Data**: Analyzing encoder signals, current ripple for early wear detection
  - ABB Ability™ Condition Monitoring tracks servo motor bearing vibration (accelerometer + encoder phase jitter), predicts failure 4-8 weeks ahead with 89% accuracy
  - Reduces unplanned downtime 35%, extends component life 20% through timely intervention[44]

  - **Refurbishment Programs**: Siemens "Remanufacturing as a Service" for SINAMICS drives
  - 85% component reuse rate, cost 40-60% of new, maintains original 2-year warranty
  - Circular economy model addressing e-waste: 120,000 tonnes servo electronics annually (estimate based on IFR robot sales)[45]

  ### Long-Term Vision (2030-2040)

  - **Ubiquitous Precision**: Sub-micrometer position control democratized to SMEs via cloud-based digital twins
  - Simulation-driven commissioning: Upload CAD model → automated controller synthesis → virtual validation → physical deployment, reducing integration cost from £50K to £5K per robot cell

  - **Human-Level Dexterity**: 20-DOF anthropomorphic hands with sub-millimeter fingertip positioning
  - Shadow Robot Dexterous Hand 2.0 (current 24-DOF): ±1 mm accuracy, 100N fingertip force, $150K cost
  - Target 2035: <$20K cost, 1 kHz position bandwidth, tactile sensor integration for <1N force resolution enabling precision assembly without jigs

  - **Autonomous Tuning**: Self-commissioning robots deploying without human intervention
  - On-site system identification (10-minute excitation trajectory) → automated PID/feedforward synthesis → performance validation (ISO 9283 tests) → production ready
  - Eliminates 80% of commissioning labor (current 40-80 hours per robot), accelerates Industry 4.0 adoption in resource-constrained sectors

  #### Research & Literature
  ### Foundational Control Theory Textbooks

  1. **Franklin, G. F., Powell, J. D., & Emami-Naeini, A. (2019).** *Feedback Control of Dynamic Systems* (8th ed.). Pearson. ISBN: 978-0-13-499695-8
   - Comprehensive 880-page reference covering classical (root locus, Bode, Nyquist) and modern (state-space, optimal control) methods with MATLAB integration; standard undergraduate/graduate textbook

  2. **Åström, K. J., & Hägglund, T. (2006).** *Advanced PID Control*. ISA Press. ISBN: 978-1-55617-942-6
   - Authoritative 460-page treatment of PID design including relay autotuning (±5% parameter accuracy), gain scheduling for nonlinear systems, and cascade control structures; industry-focused applications

  3. **Ogata, K. (2010).** *Modern Control Engineering* (5th ed.). Prentice Hall. ISBN: 978-0-13-615673-4
   - Classic 900-page text with detailed state-space design, pole placement, LQR derivations, and discrete-time implementation (z-transforms, digital filters); extensive worked examples

  ### Robotics-Specific Position Control

  4. **Spong, M. W., Hutchinson, S., & Vidyasagar, M. (2005).** *Robot Modeling and Control*. Wiley. ISBN: 978-0-471-64990-8
   - 400-page graduate-level text deriving manipulator dynamics (Lagrangian, Newton-Euler), control laws (PD with gravity compensation, computed torque, sliding mode, adaptive), and stability proofs via Lyapunov theory

  5. **Siciliano, B., Sciavicco, L., Villani, L., & Oriolo, G. (2009).** *Robotics: Modelling, Planning and Control*. Springer. ISBN: 978-1-84628-641-4
   - Comprehensive 632-page reference covering kinematics, dynamics, trajectory planning (cubic/quintic polynomial, splines), independent joint control, operational space control, force control, visual servoing

  6. **Murray, R. M., Li, Z., & Sastry, S. S. (1994).** *A Mathematical Introduction to Robotic Manipulation*. CRC Press. ISBN: 978-0-8493-7981-9
   - Rigorous 450-page treatment using Lie groups, screws, differential geometry for kinematics; nonlinear control via feedback linearization, backstepping; seminal reference for geometric mechanics approach

  ### Advanced Control Techniques

  7. **Khalil, H. K. (2014).** *Nonlinear Systems* (3rd ed.). Pearson. ISBN: 978-0-13-311889-8
   - Definitive 750-page graduate text on Lyapunov stability, feedback linearization, sliding mode control, backstepping, passivity-based control; rigorous proofs with robotics examples

  8. **Zhou, K., & Doyle, J. C. (1998).** *Essentials of Robust Control*. Prentice Hall. ISBN: 978-0-13-790874-0
   - 400-page introduction to H∞ control, μ-synthesis, structured uncertainty, with MATLAB Robust Control Toolbox integration; applications to high-precision positioning (hard disk drives, telescopes)

  9. **Maciejowski, J. M. (2002).** *Predictive Control with Constraints*. Prentice Hall. ISBN: 978-0-201-39823-6
   - 330-page comprehensive MPC treatment covering QP solvers, constraint handling, stability guarantees (terminal cost/constraints), explicit MPC via multi-parametric programming

  ### System Identification and Experimental Validation

  10. **Ljung, L. (1999).** *System Identification: Theory for the User* (2nd ed.). Prentice Hall. ISBN: 978-0-13-656695-3
    - 610-page authoritative reference on transfer function estimation (frequency response, ARX/ARMAX models), prediction error methods, recursive algorithms, validation techniques; MATLAB System Identification Toolbox basis

  11. **Pintelon, R., & Schoukens, J. (2012).** *System Identification: A Frequency Domain Approach* (2nd ed.). Wiley-IEEE Press. ISBN: 978-0-470-64037-1
    - 800-page advanced text on non-parametric (empirical transfer functions) and parametric frequency-domain identification, optimal excitation signals (multisine, swept sine), errors-in-variables models

  12. **ISO 9283:1998.** *Manipulating industrial robots — Performance criteria and related test methods*. International Organization for Standardization.
    - Defines pose accuracy (30-point cube test), pose repeatability (±3σ), distance accuracy/repeatability, path accuracy (weave test), minimum positioning time; updated ISO 9283:2024 adds dynamic circular tests

  #### References
  1. Åström, K. J., & Hägglund, T. (2006). *Advanced PID Control*. ISA Press. ISBN: 978-1-55617-942-6

  2. Franklin, G. F., Powell, J. D., & Emami-Naeini, A. (2019). *Feedback Control of Dynamic Systems* (8th ed.). Pearson. ISBN: 978-0-13-499695-8

  3. Spong, M. W., Hutchinson, S., & Vidyasagar, M. (2005). *Robot Modeling and Control*. Wiley. ISBN: 978-0-471-64990-8

  4. Siciliano, B., Sciavicco, L., Villani, L., & Oriolo, G. (2009). *Robotics: Modelling, Planning and Control*. Springer. ISBN: 978-1-84628-641-4

  5. Ljung, L. (1999). *System Identification: Theory for the User* (2nd ed.). Prentice Hall. ISBN: 978-0-13-656695-3

  6. Murray, R. M., Li, Z., & Sastry, S. S. (1994). *A Mathematical Introduction to Robotic Manipulation*. CRC Press. ISBN: 978-0-8493-7981-9

  7. Khalil, H. K. (2014). *Nonlinear Systems* (3rd ed.). Pearson. ISBN: 978-0-13-311889-8

  8. **IFR (International Federation of Robotics)**. (2025). *World Robotics 2025 Industrial Robots Report*. Frankfurt: IFR Statistical Department.

  9. **Interact Analysis**. (2025). *Collaborative Robot Market Data Q4 2025*. London: Interact Analysis Ltd.

  10. **ASML Holding N.V.**. (2024). *TWINSCAN NXE:3600D Technical Specifications*. Veldhoven: ASML Product Documentation.

  11. **Intuitive Surgical, Inc.**. (2025). *da Vinci Surgical Systems Annual Report 2024*. Sunnyvale: Intuitive Investor Relations.

  12. **Robotics and Autonomous Systems Journal**. (2024). "Deep Reinforcement Learning for Industrial Robot Control." *RAJ*, 145, 104123. DOI: 10.1016/j.robot.2024.104123

- ### Provenance
  - sources:: [[ISO 8373 Robotics Vocabulary]], [[ISO 9283 Manipulating Industrial Robots Performance Criteria]], [[IEC 61800 Adjustable Speed Electrical Power Drive Systems]], [[IEEE Control Systems Society]], [[Robot Operating System (ROS) Control Standards]]
  - migration-date:: 2026-04-26T00:00:00Z
