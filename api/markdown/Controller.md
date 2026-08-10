public:: true

# controller
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c1472135b14c77c8bef98e73f70208325fa0dcf1e6bd668ae9b31a9cea295fe7",
  "@type": "Page",
  "vc:slug": "controller",
  "title": "controller",
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
  "@id": "urn:ngm:class:controller",
  "@type": "Class",
  "label": "Controller",
  "definition": "A Controller is a computational or hardware module that receives a reference setpoint and measured feedback signals, applies a control law or learned policy, and generates command signals that drive a plant or process towards desired states. Controllers span a spectrum from classical linear regulators such as PID and LQR to nonlinear model-based controllers such as Model Predictive Control and computed-torque methods, as well as data-driven approaches including neural network policies trained via reinforcement learning. Operating within closed-loop feedback architectures, the controller continuously computes an error signal — the difference between desired and measured output — and produces corrective actuation to minimise that error subject to stability and performance constraints.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:pid-controller",
        "label": "Pid Controller"
      },
      {
        "@id": "urn:ngm:class:state-space-model",
        "label": "State Space Model"
      },
      {
        "@id": "urn:ngm:class:control-law",
        "label": "Control Law"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:plant-model",
        "label": "Plant Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      },
      {
        "@id": "urn:ngm:class:trajectory-tracking",
        "label": "Trajectory Tracking"
      },
      {
        "@id": "urn:ngm:class:stability",
        "label": "Stability"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:error-signal",
        "label": "Error Signal"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:closed-loop-control",
        "label": "Closed Loop System"
      },
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber-Physical System"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:model-predictive-control",
        "label": "Model Predictive Control"
      },
      {
        "@id": "urn:ngm:class:linear-quadratic-regulator",
        "label": "Linear Quadratic Regulator"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:system-identification",
        "label": "System Identification"
      },
      {
        "@id": "urn:ngm:class:real-time-computing",
        "label": "Real-Time Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:open-loop-control",
        "label": "Open-Loop Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      },
      {
        "@id": "urn:ngm:class:dynamics",
        "label": "Dynamics"
      },
      {
        "@id": "urn:ngm:class:state-observer",
        "label": "Observer"
      },
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:control-system",
      "label": "Control System"
    },
    {
      "@id": "urn:ngm:class:regulator",
      "label": "Regulator"
    }
  ],
  "qualityScore": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **Controller** is a computational or hardware module that occupies the core of any [[Closed Loop System]], receiving a reference setpoint and measured [[Feedback Loop]] signals, computing an [[Error Signal]], and issuing command outputs that drive a physical or virtual [[Plant Model]] towards desired behaviour. The concept spans classical [[Feedback Control]] theory — dating to James Watt's centrifugal governor and formalised through Bode, Nyquist, and Ziegler-Nichols — through modern data-driven approaches in which [[Reinforcement Learning]] and [[Neural Network]] policies substitute or augment analytic control laws. Controllers are foundational to [[Robot Control]], industrial process automation, aerospace guidance, and increasingly to [[Cyber-Physical System]] architectures where computation and physical dynamics are tightly coupled.

- ### Overview
  - Controllers solve the fundamental regulation problem: given a desired state (setpoint) and the observed state (measurement), compute an action that drives the difference (error) to zero while respecting constraints such as actuator limits, stability margins, and energy budgets.
  - **Why controllers matter:**
    - Autonomous robots, spacecraft, aircraft, chemical plants, and power grids all depend on controllers for safe, precise, and efficient operation.
    - No engineered system of meaningful complexity operates stably in open loop; feedback is necessary to reject disturbances and compensate for modelling errors.
    - Controller design is inseparable from [[Stability]] analysis — a poorly designed controller can destabilise an otherwise benign plant.
  - **How a controller works (canonical loop):**
    - The plant (physical system or [[Digital Twin]] simulation) produces an output measured by [[Sensor]] hardware.
    - The output is compared against the reference setpoint to form the error signal.
    - The controller applies a control law — mathematical mapping from error (and its history or derivative) to a command — producing a control output.
    - The command is passed to [[Actuator]] hardware (motors, valves, thrusters) which apply force or torque to the plant.
    - The loop closes: the resulting plant state is re-measured, and the cycle repeats at the control rate (typically 100 Hz to 10 kHz in robotics).
  - **Centralised vs distributed:**
    - Centralised controllers compute all joint or channel commands in a single computation unit.
    - Distributed or hierarchical architectures decompose control into high-level task controllers and low-level joint/servo controllers communicating via real-time fieldbus protocols (EtherCAT, RTEX, CANopen).

- ### Key Components and Mechanisms
  - **Reference Setpoint (desired output)**
    - Defined by [[Motion Planning]] algorithms, human operators, or higher-level planners.
    - May be a scalar (temperature, speed) or a multi-dimensional trajectory (6-DOF end-effector pose).
  - **Error Signal**
    - The algebraic difference between setpoint and measured output: `e(t) = r(t) - y(t)`.
    - Drives all classical and many modern control laws.
  - **Control Law**
    - The mathematical rule mapping error to command. Key families:
    - **PID Controller** — Proportional (P), Integral (I), Derivative (D) terms weighted by tuned gains; dominant in industrial practice due to simplicity and robustness.
    - **Linear Quadratic Regulator (LQR)** — state-feedback controller minimising a quadratic cost on state deviation and control effort; requires a [[State Space Model]] of the plant.
    - **Model Predictive Control (MPC)** — optimises a finite-horizon cost over a receding prediction window; handles input/output constraints explicitly; used in chemical processes, automotive, and modern robotics.
    - **Computed Torque / Inverse Dynamics Controller** — cancels nonlinearities in rigid-body [[Dynamics]] and applies a linear outer loop; foundational for industrial manipulators.
    - **Sliding Mode Control** — drives the system state onto a sliding surface and keeps it there; robust to matched uncertainties.
    - **Reinforcement Learning Policy** — learned mapping from state observation to action, trained via interaction (PPO, SAC, TD3 algorithms); bridges to [[Machine Learning]] and enables controllers for locomotion, dexterous manipulation, and aerial vehicles.
  - **Observer / State Estimator**
    - When full state is not directly measurable, an [[Observer]] or [[Kalman Filter]] estimates it from partial measurements; the Luenberger observer and Extended Kalman Filter are canonical instances.
  - **Actuator Interface**
    - Controllers output signals (torque references, velocity commands, PWM duty cycles) converted to physical actions by [[Actuator]] hardware through power electronics (inverters, servo drives).
  - **Real-Time Constraint**
    - Controllers must complete their computation within a fixed deadline (the sampling period); [[Real-Time Computing]] platforms (RTOS, FPGA, DSP) enforce deterministic scheduling.

- ### Controller Taxonomy
  - **By linearity:**
    - Linear controllers (PID, LQR, H-infinity) — valid near an operating point; analysable with classical frequency-domain tools (Bode plots, Nyquist diagrams).
    - Nonlinear controllers (sliding mode, computed torque, Lyapunov-based adaptive control) — handle large state excursions and parameter variation.
  - **By model dependence:**
    - Model-based (LQR, MPC, computed torque) — require accurate [[System Identification]] or first-principles [[Plant Model]].
    - Model-free (PID, reinforcement learning) — infer control action from input-output data without explicit dynamics model.
  - **By time domain:**
    - Continuous-time controllers (transfer functions, state-space in ℝ) — analysed via Laplace transforms and eigenvalue placement.
    - Discrete-time (digital) controllers — implemented on microcontrollers/DSPs; analysed in z-domain; subject to sampling rate and quantisation constraints.
  - **By control objective:**
    - Setpoint regulators — drive output to a constant reference and reject disturbances.
    - Trajectory trackers — follow a time-varying reference (path following in [[Trajectory Tracking]]).
    - Optimal controllers — minimise a cost functional (energy, time, deviation).
    - Robust controllers (H-infinity, mu-synthesis) — guarantee performance despite bounded model uncertainty.

- ### Applications and Use Cases
  - **Industrial Robotics**
    - Six-axis manipulators use cascaded joint controllers (inner velocity loop, outer position loop) running at 1–4 kHz; computed torque decouples joint interactions.
  - **Mobile Robotics and Autonomous Vehicles**
    - Wheeled and legged robots rely on controllers for pose regulation, terrain adaptation, and reactive obstacle avoidance; reinforcement learning policies have achieved agile locomotion in quadrupeds (Boston Dynamics Spot, ETH ANYmal).
  - **Aerospace and UAVs**
    - Flight control systems combine attitude controllers (roll/pitch/yaw PID or LQR), guidance controllers, and autopilots; modern UAV stacks (ArduPilot, PX4) expose tunable PID hierarchies.
  - **Process Industry**
    - Chemical reactors, distillation columns, and refineries use distributed control systems (DCS) with thousands of PID loops; MPC manages supervisory optimisation subject to safety constraints.
  - **Power Systems**
    - Grid frequency regulation uses PI controllers in turbine governors; voltage regulation uses AVRs; inverter-based resources (solar, wind) use fast current controllers in the rotating dq frame.
  - **Medical Devices**
    - Insulin pump controllers, anaesthesia delivery, and surgical robots (da Vinci) employ precise controllers with safety-critical real-time constraints.
  - **Spatial Computing and XR**
    - Hand-tracking and haptic feedback in [[Spatial Computing]] devices use lightweight controllers to reduce latency between sensing and actuation, directly connecting robotics control theory to [[Metaverse]] interaction paradigms.
  - **Digital Twins**
    - [[Digital Twin]] platforms run virtual controllers in simulation for predictive maintenance, commissioning, and policy testing before deployment on physical hardware.

- ### Relationships
  - uses:: [[Feedback Control]]
  - uses:: [[PID Controller]]
  - uses:: [[State Space Model]]
  - uses:: [[Control Law]]
  - requires:: [[Actuator]]
  - requires:: [[Feedback Loop]]
  - requires:: [[Sensor]]
  - requires:: [[Plant Model]]
  - enables:: [[Motion Planning]]
  - enables:: [[Robot Control]]
  - enables:: [[Trajectory Tracking]]
  - enables:: [[Stability]]
  - hasPart:: [[Error Signal]]
  - hasPart:: [[Reference Setpoint]]
  - hasPart:: [[Control Output]]
  - partOf:: [[Closed Loop System]]
  - partOf:: [[Cyber-Physical System]]
  - implements:: [[Model Predictive Control]]
  - implements:: [[Linear Quadratic Regulator]]
  - implements:: [[Reinforcement Learning Policy]]
  - dependsOn:: [[System Identification]]
  - dependsOn:: [[Real-Time Computing]]
  - contrastsWith:: [[Open Loop Control]]
  - contrastsWith:: [[Manual Control]]
  - bridges-to:: [[Reinforcement Learning]]
  - bridges-to:: [[Neural Network]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Kinematics]]
  - relatedTo:: [[Dynamics]]
  - relatedTo:: [[Observer]]
  - relatedTo:: [[Kalman Filter]]

- ### Standards and Context
  - **IEC 61131-3** — defines programming languages (Ladder Diagram, Structured Text, Function Block Diagram) used in programmable logic controllers (PLCs) for industrial control; the dominant standard for factory automation controllers.
  - **IEC 61508 / ISO 26262 / DO-178C** — functional safety standards governing controller software in industrial machinery, automotive, and aerospace respectively; impose design, verification, and validation requirements.
  - **ROS 2 (Robot Operating System 2)** — de-facto middleware for robotic controllers; provides ros2_control hardware abstraction layer (HAL) separating controller logic from hardware drivers, with real-time capable execution under DDS.
  - **EtherCAT / CANopen / RTEX** — real-time fieldbus protocols over which distributed controllers communicate with servo drives; critical for achieving deterministic loop closure in multi-axis systems.
  - **MATLAB / Simulink Control System Toolbox** — industry-standard modelling and design environment; Model-Based Design workflow generates embedded C code for target controllers.
  - **OpenAI Gym / Gymnasium / MuJoCo** — open simulation environments where reinforcement learning controllers are trained; sim-to-real transfer is an active research area linking AI and robotics communities.
  - **IEEE Control Systems Society** — primary professional body; publishes IEEE Transactions on Automatic Control and IEEE Control Systems Magazine, which define the state of the art in controller theory and practice.

- ### Theoretical Foundations
  - **Classical Control Theory** — frequency-domain analysis via [[Laplace Transform]], Bode diagrams, root locus, Nyquist stability criterion; provides gain and phase margin specifications.
  - **Modern Control Theory** — state-space formulation, pole placement, [[Linear Quadratic Regulator]], [[Kalman Filter]] (LQG synthesis), controllability and observability analysis.
  - **Robust Control** — H-infinity and mu-synthesis frameworks guarantee stability and performance bounds over uncertainty sets; relevant to controller design under modelling error.
  - **Nonlinear Control** — Lyapunov stability theory, input-output linearisation, backstepping, and passivity-based control extend classical methods to nonlinear [[Dynamics]].
  - **Optimal Control** — Pontryagin's minimum principle and dynamic programming (Bellman equation) underpin MPC and [[Reinforcement Learning]]; connects robotics control to [[Machine Learning]] policy optimisation.
  - **Adaptive Control** — controllers that update their parameters online as plant dynamics change; relevant to systems subject to wear, load variation, or environmental shifts.

- ### Current Landscape (2026)
  - Learned, RL-trained whole-body controllers have become the dominant paradigm for humanoids: HugWBC (arXiv 2502.03206, Feb 2025) demonstrated a single reinforcement-learning policy producing walking, jumping, standing and hopping gaits with real-time upper-body teleoperation intervention on real hardware.
  - Behavioural Foundation Models (BFMs) reframed the controller as a pre-trained, reusable skill prior enabling zero-shot or few-shot task adaptation; NVIDIA's HOVER and the "Next-Generation Whole-Body Control System" survey (arXiv 2506.20487, updated Feb 2026) typify the shift away from per-task retraining.
  - Agility Robotics deployed a whole-body control foundation model as Digit's learned "motor cortex" (a sub-one-million-parameter LSTM trained in NVIDIA Isaac Sim over decades of simulated time in three to four days) that transfers zero-shot to hardware (Aug 2026).
  - Sim-to-real training collapsed dramatically: Seo et al. (arXiv 2512.01996, Dec 2025) trained deployable humanoid locomotion controllers for Unitree G1 and Booster T1 in roughly 15 minutes on a single RTX 4090 using off-policy FastTD3/FastSAC.
  - Industrial controllers moved onto open, GPU-accelerated stacks: NVIDIA released Isaac ROS 4.0 on the Jetson Thor platform at ROSCon 2025 (Oct 2025) and joined the Open Source Robotics Alliance's new Physical AI Special Interest Group, while FANUC open-sourced a ros2_control-compatible ROS 2 driver with 1 ms real-time control in Dec 2025.
  - Real-time motion-control hardware advanced with AI accelerators fused into the control loop: NEXCOM unveiled one of the first dual-EtherCAT-master AI robot controllers on NVIDIA Jetson AGX Orin at GTC 2025 (Mar 2025), targeting ultra-low-latency multi-axis control of humanoids and quadrupeds.
  - The open frontier as of 2026 centres on safe deployment of neural policies at control-loop rates: NVIDIA's Isaac ROS Deploy (v4.4.0, May 2026) wraps ONNX policies in a safety controller via ros2_control or Triton, reflecting unresolved challenges around verifiable safety, deterministic timing and sim-to-real robustness for learned controllers.

- ### References
  - 1. Xue et al. / arXiv (2025). HugWBC: A Unified and General Humanoid Whole-Body Controller for Fine-Grained Locomotion. https://arxiv.org/html/2502.03206v3
  - 2. arXiv (2026). Next-Generation Whole-Body Control System of Humanoid Robots (behavioural foundation models). https://arxiv.org/html/2506.20487v5
  - 3. Agility Robotics (2026). Training a Whole-Body Control Foundation Model. https://www.agilityrobotics.com/content/training-a-whole-body-control-foundation-model
  - 4. Seo, Sferrazza, Chen, Shi, Duan, Abbeel / arXiv (2025). Learning Sim-to-Real Humanoid Locomotion in 15 Minutes. https://arxiv.org/abs/2512.01996
  - 5. FANUC (2025). ROBOT New Technology: Open Platforms & Physical AI (ROS 2 driver, 1 ms ros2_control). https://www.fanuc.co.jp/en/product/new_product/2025/202512_robot_physicalai.html
  - 6. Edge AI and Vision Alliance / NVIDIA (2025). NVIDIA Contributes to Open Frameworks for Next-Generation Robotics Development (Isaac ROS 4.0, Jetson Thor, Physical AI SIG). https://www.edge-ai-vision.com/2025/10/nvidia-contributes-to-open-frameworks-for-next-generation-robotics-development/

- ### Provenance
  - sources:: IEC 61131-3; Åström & Wittenmark "Computer-Controlled Systems"; Franklin, Powell & Emami-Naeini "Feedback Control of Dynamic Systems"; Siciliano et al. "Robotics: Modelling, Planning and Control"; ros2_control documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
