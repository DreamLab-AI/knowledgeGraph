public:: true

# Collaborative Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:collaborative-robotics",
  "@type": "Page",
  "vc:slug": "collaborative-robotics",
  "title": "Collaborative Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collaborative-systems-modality-robotics",
  "@type": "Class",
  "label": "Collaborative Robotics",
  "definition": "Collaborative Robotics is the engineering discipline concerned with designing, deploying, and operating robotic systems — particularly collaborative robots (cobots) — that share workspace and tasks with human workers without requiring physical barriers, relying instead on force-torque sensing, speed-and-separation monitoring, and power-and-force limiting to maintain safety under ISO 10218 and ISO/TS 15066. Unlike traditional industrial robots that operate in guarded cages, cobots are designed with compliant joints, rounded profiles, and real-time collision-detection to enable direct physical cooperation with humans on assembly, inspection, and logistics tasks. The discipline integrates mechanical design, control theory, human-robot interaction research, and regulatory compliance to enable safe human-robot co-presence in shared workspaces.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:force-torque-sensor", "label": "Force Torque Sensor"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"},
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"},
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:real-time-control", "label": "Real-Time Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:manufacturing-automation", "label": "Manufacturing Automation"},
      {"@id": "urn:ngm:class:assistive-robotics", "label": "Assistive Robotics"},
      {"@id": "urn:ngm:class:flexible-manufacturing", "label": "Flexible Manufacturing"},
      {"@id": "urn:ngm:class:human-robot-teaming", "label": "Human-Robot Teaming"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:tactile-sensing", "label": "Tactile Sensing"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"},
      {"@id": "urn:ngm:class:autonomous-mobile-robot", "label": "Autonomous Mobile Robot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:robot-programming", "label": "Robot Programming"},
      {"@id": "urn:ngm:class:imitation-learning", "label": "Imitation Learning"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:cobot-technology", "label": "Cobot Technology"},
    {"@id": "urn:ngm:class:human-robot-collaboration", "label": "Human-Robot Collaboration"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Collaborative Robotics is the discipline of engineering [[Collaborative Robot]] systems (cobots) that operate alongside humans in shared workspaces, using [[Impedance Control]], [[Force Torque Sensor]] arrays, [[Computer Vision]], and certified [[Cobot Safety Levels]] to enable physical cooperation without hard physical barriers. It integrates [[Robot Safety]] standards, [[Human Robot Interaction]] research, and [[Real-Time Control]] architectures to achieve safe, flexible automation that augments rather than replaces human capability.

- ### Overview
  - Collaborative Robotics emerged as a distinct engineering discipline in the mid-1990s, formalised by J. Edward Colgate and Michael Peshkin at Northwestern University who coined the term "cobot" in 1996. The concept was a direct response to the rigidity of classical [[Industrial Robot]] deployments, which required expensive safety guarding, extensive integration, and high volumes to justify investment.
  - The core insight was that a robot designed to be inherently safe through mechanical compliance and sensing — rather than through physical isolation — could operate alongside human workers, combining robotic repeatability and strength with human dexterity and judgement.
  - Cobots have become a mainstream category within [[Manufacturing Automation]], occupying deployments in small and medium enterprises, research laboratories, healthcare facilities, and logistics centres.

- ### Key Components
  - **Force-Torque Sensing**
    - [[Force Torque Sensor]] units measure contact forces and torques at joints or the wrist, enabling the controller to detect unexpected collisions and yield compliantly.
    - Joint-level torque sensing provides whole-arm collision detection without additional external hardware.
  - **Compliant Control Architectures**
    - [[Impedance Control]] and admittance control regulate the dynamic relationship between force and motion, allowing the robot to feel soft in response to external disturbances.
    - Position-based impedance control is widely used for assembly tasks requiring gentle insertion.
  - **Safety-Rated Monitoring Systems**
    - [[Cobot Safety Levels]] define four ISO-specified collaboration modes: safety-rated monitored stop, hand-guiding, speed-and-separation monitoring, and power-and-force limiting.
    - Safety-rated monitored stop halts the robot when a human enters the collaboration zone; hand-guiding allows direct physical teaching.
    - Speed-and-separation monitoring dynamically reduces robot velocity as a human approaches, using [[Computer Vision]] or time-of-flight sensors to estimate proximity.
    - Power-and-force limiting ensures contact forces and pressures remain below biomechanical injury thresholds at all times.
  - **End-Effector Tooling**
    - [[End Effector]] design is critical: cobot-compatible grippers, suction cups, and tool changers must themselves be compliant or collision-safe.
    - Quick-change tooling systems allow a single cobot arm to serve multiple tasks within a shift.
  - **Perception Systems**
    - [[Computer Vision]] — RGB-D cameras, structured light, and stereo vision — provides workspace awareness, part localisation, and human proximity detection.
    - [[Tactile Sensing]] at the fingertips or palm enables fine manipulation and grasp quality assessment.
  - **Motion Planning**
    - [[Motion Planning]] algorithms generate collision-free trajectories that respect both workspace geometry and human presence zones.
    - Online replanning capability is essential for reactive collaboration where human position changes continuously.

- ### Collaboration Modes (ISO/TS 15066)
  - **Safety-Rated Monitored Stop (SRMS)**: Robot is stationary while human works in the shared zone; resumes automatically when zone is clear.
  - **Hand Guiding**: Human physically guides the robot through a desired trajectory; often used for programming by demonstration.
  - **Speed and Separation Monitoring (SSM)**: Robot velocity scales inversely with estimated human-robot distance; requires reliable proximity sensing.
  - **Power and Force Limiting (PFL)**: Robot moves freely but contact forces are always limited; enables true simultaneous co-working.
  - Risk assessment under [[ISO 10218]]-2 and [[ISO/TS 15066]] determines which mode is appropriate for each task.

- ### Applications and Use Cases
  - **Assembly and Screwdriving**
    - Cobots excel at screw insertion, torque tightening, and snap-fit assembly — tasks requiring moderate force with fine positional accuracy.
    - Human operators handle part feeding, orientation, and exception handling; the cobot handles the repetitive, ergonomically stressful insertion.
  - **Quality Inspection**
    - Cobot-mounted cameras and structured-light sensors conduct dimensional inspection, surface-defect detection, and barcode scanning alongside human visual checks.
  - **Machine Tending**
    - Cobots load and unload CNC machines, injection moulders, and presses, eliminating the most ergonomically harmful task in machining cells.
  - **Polishing and Surface Finishing**
    - Impedance-controlled cobots maintain constant contact force during polishing, producing consistent surface finish on complex geometries.
  - **Pick-and-Place and Kitting**
    - In warehouse and fulfilment contexts, cobots handle items with [[Computer Vision]]-guided grasping; humans handle novel or fragile items.
  - **Healthcare and Rehabilitation**
    - [[Assistive Robotics]] for physical rehabilitation employs cobot-class arms to support and guide limb movement in stroke rehabilitation.
    - Surgical assistance cobots (e.g., Intuitive Surgical's systems) operate at the boundary of collaborative and autonomous operation.
  - **Agriculture**
    - Cobot arms mounted on autonomous ground vehicles perform selective harvesting, pruning, and inspection in horticultural settings.
  - **Construction**
    - Lightweight cobot arms assist with drilling, fastening, and material handling in environments too constrained or variable for traditional automation.

- ### AI Integration and Learning
  - [[Imitation Learning]] (programming by demonstration) allows operators to teach tasks by physically guiding the robot, recording joint trajectories, and generalising from demonstrations.
  - Foundation models for robotics (e.g., RT-2, OpenVLA, ACT) trained on large datasets of human manipulation trajectories are enabling zero-shot and few-shot task generalisation, substantially reducing deployment effort.
  - [[Machine Learning]]-driven perception enables cobots to handle part variability that would defeat rule-based grasping: deformable objects, reflective surfaces, and cluttered bins.
  - Reinforcement learning from human feedback (RLHF) applied to manipulation tasks allows cobots to refine grasping policies from operator corrections.
  - [[Digital Twin]] simulations of cobot cells allow task validation, collision checking, and control tuning before physical deployment, reducing commissioning time.

- ### Relationships
  - hasPart:: [[Force Torque Sensor]]
  - hasPart:: [[End Effector]]
  - hasPart:: [[Impedance Control]]
  - hasPart:: [[Cobot Safety Levels]]
  - requires:: [[Robot Safety]]
  - requires:: [[Risk Assessment]]
  - requires:: [[Real-Time Control]]
  - enables:: [[Manufacturing Automation]]
  - enables:: [[Assistive Robotics]]
  - enables:: [[Flexible Manufacturing]]
  - enables:: [[Human-Robot Teaming]]
  - uses:: [[Computer Vision]]
  - uses:: [[Machine Learning]]
  - uses:: [[Motion Planning]]
  - uses:: [[Tactile Sensing]]
  - standardizedBy:: [[ISO 10218]]
  - standardizedBy:: [[ISO/TS 15066]]
  - contrastsWith:: [[Industrial Robot]]
  - contrastsWith:: [[Autonomous Mobile Robot]]
  - relatedTo:: [[Human Robot Interaction]]
  - relatedTo:: [[Robot Programming]]
  - relatedTo:: [[Imitation Learning]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Artificial Intelligence]]

- ### Standards and Governance
  - **ISO 10218-1 and -2** — core standard defining requirements for industrial robot safety; Part 1 covers the robot itself, Part 2 covers integration and installation. Mandatory for CE marking in the EU and widely referenced globally.
  - **ISO/TS 15066:2016** — Technical Specification extending ISO 10218 to collaborative robot applications; defines the four collaboration modes and provides biomechanical injury threshold data for power-and-force limiting calculations.
  - **RIA TR R15.806** — US technical report providing guidance on collaborative robot safety, closely aligned with ISO/TS 15066.
  - **IEC 62061 and ISO 13849** — functional safety standards governing the design of safety-rated control systems (performance levels and safety integrity levels) that underpin cobot monitoring functions.
  - The revision of ISO 10218 (ongoing as of 2025) is incorporating mobile collaborative robots and AI-driven adaptive robots into its scope, reflecting the convergence of cobots with [[Autonomous Mobile Robot]] platforms.

- ### Key Vendors and Ecosystem
  - Universal Robots (UR3e, UR5e, UR10e, UR20) — dominant market share, first to commercialise the cobot concept at accessible price points.
  - FANUC CRX series, KUKA LBR iisy, ABB YuMi and GoFa — incumbent industrial robot makers with collaborative product lines.
  - Techman Robot, Doosan Robotics, Kassow Robots — specialist cobot manufacturers.
  - Rethink Robotics (Sawyer) pioneered the integrated vision and compliant arm paradigm, though the company was acquired and restructured.
  - An ecosystem of [[End Effector]] suppliers (Robotiq, Schunk, OnRobot), vision systems, and integration software has formed around the UR+ and similar partner programmes.

- ### Limitations and Open Problems
  - Payload and speed trade-offs: cobots operate at lower speeds and payloads than industrial robots to stay within power-and-force limits; tasks requiring high force or high speed still require traditional guarded automation.
  - Dexterous manipulation remains unsolved for unstructured environments; current cobots struggle with deformable objects, fine assembly with micron tolerances, and bimanual coordination.
  - Certification burden for AI-driven adaptations: when [[Machine Learning]] changes robot behaviour at runtime, re-validation under ISO 10218 / ISO/TS 15066 is required, creating a compliance bottleneck for adaptive systems.
  - Human factors: worker acceptance depends on trust, transparency of robot intent, and adequate training — poorly designed deployments generate stress rather than relief.

- ### Provenance
  - sources:: ISO 10218:2011, ISO/TS 15066:2016, Colgate & Peshkin (1996) cobot patent US5952796, Universal Robots technical documentation, IFR World Robotics reports
  - updated:: 2026-06-13
