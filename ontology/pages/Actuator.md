public:: true

# actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:425edd11c26ae24d6726f66925c024ad7978400bd4ebb10bc943854ab93b3778",
  "@type": "Page",
  "vc:slug": "actuator",
  "title": "actuator",
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
  "@id": "urn:ngm:class:actuator",
  "@type": "Class",
  "label": "Actuator",
  "definition": "An actuator is a transducer that converts a stored or supplied energy form — electrical, hydraulic, pneumatic, or thermochemical — into controlled mechanical motion or force, functioning as the output effector in any closed-loop control chain. Actuators execute commands issued by a controller by producing joint rotations, linear displacements, gripping forces, or compliant deformations, and their dynamic properties (torque density, bandwidth, backdrivability, stiffness) fundamentally bound a system's achievable speed, precision, payload capacity, and intrinsic safety during physical interaction. The choice of actuation technology cascades through every level of system design, from mechanical linkage geometry and energy storage requirements to real-time control law selection and safety-rated force limitation.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      },
      {
        "@id": "urn:ngm:class:hydraulic-actuator",
        "label": "Hydraulic Actuator"
      },
      {
        "@id": "urn:ngm:class:pneumatic-actuator",
        "label": "Pneumatic Actuator"
      },
      {
        "@id": "urn:ngm:class:series-elastic-actuator",
        "label": "Series Elastic Actuator"
      },
      {
        "@id": "urn:ngm:class:electric-linear-actuator",
        "label": "Linear Actuator"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robot",
        "label": "Robot"
      },
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber-Physical System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      },
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:power-electronics",
        "label": "Power Electronics"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-kinematics",
        "label": "Robot Kinematics"
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:pid-controller",
        "label": "Pid Controller"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:passive-mechanism",
        "label": "Passive Mechanism"
      },
      {
        "@id": "urn:ngm:class:transducer",
        "label": "Transducer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:torque-control",
        "label": "Torque Control"
      },
      {
        "@id": "urn:ngm:class:impedance-control",
        "label": "Impedance Control"
      },
      {
        "@id": "urn:ngm:class:soft-robotics",
        "label": "Soft Robotics"
      },
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:effector",
      "label": "Effector"
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

- ### Definition
  - An actuator is a transducer that converts a stored or supplied energy form — electrical, hydraulic, pneumatic, or thermochemical — into controlled mechanical motion or force, functioning as the output effector in any closed-loop [[Control System]]. In [[Robotics]], actuators execute commands from a [[Robot Controller]] by producing joint rotations, linear displacements, or gripping forces, and their dynamic properties fundamentally constrain achievable [[Robot Kinematics]], payload, and safety in [[Human-Robot Interaction]]. The choice of actuation technology propagates through every layer of system design, from mechanical geometry and energy storage to [[Feedback Control]] law selection and [[Motion Planning]] strategy.

- ### Overview
  - Actuators sit at the boundary between the computational (cyber) domain and the physical world — they are the means by which digital control signals become real forces and movements.
  - Unlike passive mechanical elements, actuators are driven components: they consume energy (electrical, hydraulic pressure, compressed air, or chemical) and convert it into kinetic or potential mechanical energy on demand.
  - The concept spans scales from microscale MEMS actuators in lab-on-chip devices to the giant hydraulic pistons in heavy construction equipment and industrial presses.
  - Key performance dimensions that differentiate actuator technologies include:
    - **Torque/force density** — force output per unit mass or volume
    - **Bandwidth** — maximum frequency of controllable motion cycles
    - **Backdrivability** — how easily external loads can move the actuator back-drive (relevant to safety and force control)
    - **Stiffness** — relationship between load and deflection; high stiffness gives precision, compliance gives safety
    - **Efficiency** — ratio of mechanical output power to input energy
  - Actuators are always paired with [[Sensor]] elements (encoders, load cells, torque sensors) and a [[Control System]] to form the complete servo loop. Without closed-loop feedback, only open-loop control is achievable, which is insufficient for precision tasks.

- ### Key Components and Mechanisms
  - **Electric Servo Actuator (Rotary)**
    - The dominant type in modern [[Industrial Robot]] arms and [[Collaborative Robot]] platforms.
    - Consists of a brushless DC or AC motor, a gear reduction stage (harmonic drive, planetary gearbox, or cycloidal drive), and an [[Encoder]] for position and velocity feedback.
    - Controlled by a motor drive that generates PWM voltage profiles; the outer control loop runs a [[PID Controller]] or model-based controller to track commanded trajectories.
    - Harmonic drives provide very high gear ratios (50:1–160:1) in a compact form, enabling high joint torques with minimal backlash — essential for precision assembly tasks.
  - **Hydraulic Actuator**
    - Uses pressurised fluid (typically mineral oil) acting on a piston or vane to produce linear or rotary motion.
    - Offers exceptionally high force-to-weight ratios, making them preferred for heavy-load [[Mobile Robot]] platforms, construction machinery, and high-torque humanoid joints (e.g., Boston Dynamics Atlas).
    - Drawbacks include hydraulic leak risk, requirement for a hydraulic power unit, and difficulty achieving fine position control due to fluid compressibility and seal friction.
    - Electrohydrostatic actuators (EHAs) integrate the pump and motor directly, improving efficiency and reducing plumbing complexity.
  - **Pneumatic Actuator**
    - Driven by compressed air, these are lightweight, low-cost, and inherently safe in explosive environments.
    - Widely used in gripper mechanisms, pick-and-place [[Industrial Automation]] cells, and food-handling robots where contamination risks rule out hydraulic oil.
    - Air compressibility makes fine position control difficult; typically operate in bang-bang (open/close) mode or with proportional valves for approximate position control.
    - Soft pneumatic actuators — inflatable elastomeric bellows or bending chambers — form the basis of many [[Soft Robotics]] end-effectors.
  - **Series Elastic Actuator (SEA)**
    - Interposes a calibrated compliant spring element between a stiff motor-gearbox unit and the output joint.
    - Spring deflection, measured by [[Encoder]] or Hall sensor, provides accurate torque estimation without a torque sensor.
    - Improves shock tolerance, reduces reflected inertia to the environment, and naturally implements [[Impedance Control]], making SEAs popular in rehabilitation exoskeletons and research cobots.
    - Tradeoff: the compliance limits closed-loop bandwidth compared to stiff electric drives.
  - **Linear Actuator**
    - Produces translational rather than rotary output; includes ball-screw drives, lead-screw drives, rack-and-pinion systems, and linear motors.
    - Direct-drive linear motors (voice coil, linear induction) eliminate mechanical transmission losses and backlash but require precise magnetic guidance.
    - Found in [[CNC Machine Tool]] axes, precision stages, and Cartesian gantry robots.
  - **Smart / Soft Actuators (Emerging)**
    - Shape-memory alloys (SMA) contract upon heating above a transition temperature; high stress outputs in tiny packages but slow thermal cycling limits bandwidth.
    - Electroactive polymers (EAP) and dielectric elastomers deform under electric field; offer muscle-like strain properties relevant to [[Wearable Robotics]].
    - Pneumatic soft actuators made from silicone or textile-reinforced elastomers enable [[Soft Robotics]] grippers that conform to delicate objects.
    - These technologies bridge from classical engineering into [[Biomimetics]] and [[Soft Robotics]].

- ### Applications and Use Cases
  - **Industrial Robot Arms** — Six-axis articulated arms (e.g., KUKA, ABB, FANUC) use electric servo actuators at every joint; coordinated by a [[Robot Controller]] running real-time [[Motion Planning]] and torque control loops to achieve sub-millimetre repeatability in automotive welding and electronic assembly.
  - **Collaborative Robots (Cobots)** — Torque-sensing electric actuators or SEAs allow power-and-force limiting compliance, enabling safe operation alongside humans without physical guards; standardised by ISO/TS 15066.
  - **Exoskeletons and Prosthetics** — Lightweight electric and pneumatic actuators assist or restore limb function; [[Human-Robot Interaction]] quality is dominated by actuator backdrivability and [[Impedance Control]] fidelity.
  - **Autonomous Vehicles (Steering and Braking)** — Electromechanical actuators replace hydraulic systems in steer-by-wire and brake-by-wire architectures, enabling [[Autonomous Vehicle]] control without a mechanical connection to the driver.
  - **Aerospace and Defence** — Electrohydrostatic and electromechanical actuators operate flight control surfaces; meet DO-178C / DO-254 certification. High power density and failure-mode determinism are essential.
  - **Medical Robotics** — Miniaturised electric and pneumatic actuators drive [[Surgical Robot]] instruments (e.g., da Vinci system); must satisfy IEC 60601 electrical safety and sterilisability requirements.
  - **Soft Goods Handling** — Pneumatic soft actuators in gripper fingers allow e-commerce fulfilment robots to handle irregular, fragile objects without fixturing.
  - **Construction and Mining Equipment** — Large hydraulic cylinders deliver the extreme forces required for excavator booms and drill heads; increasingly paired with electro-hydraulic proportional valves and [[Digital Twin]] simulation for predictive maintenance.
  - **Consumer Electronics Manufacturing** — Voice coil linear actuators position hard-disk read heads and optical lens assemblies with nanometre precision.
  - **IoT and Smart Infrastructure** — HVAC valve actuators, motorised blinds, and smart-lock mechanisms represent the long tail of [[Internet of Things]] applications where low-power, compact electric actuators operate on edge controllers.

- ### Relationships
  - hasPart:: [[Servo Motor]]
  - hasPart:: [[Hydraulic Actuator]]
  - hasPart:: [[Pneumatic Actuator]]
  - hasPart:: [[Series Elastic Actuator]]
  - hasPart:: [[Linear Actuator]]
  - partOf:: [[Robot]]
  - partOf:: [[Mechatronic System]]
  - partOf:: [[Cyber-Physical System]]
  - requires:: [[Control System]]
  - requires:: [[Feedback Control]]
  - requires:: [[Power Electronics]]
  - requires:: [[Sensor]]
  - enables:: [[Robot Kinematics]]
  - enables:: [[Human-Robot Interaction]]
  - enables:: [[Teleoperation]]
  - enables:: [[Motion Planning]]
  - dependsOn:: [[Encoder]]
  - dependsOn:: [[PID Controller]]
  - dependsOn:: [[Embedded System]]
  - contrastsWith:: [[Passive Mechanism]]
  - contrastsWith:: [[Transducer]]
  - relatedTo:: [[Torque Control]]
  - relatedTo:: [[Impedance Control]]
  - relatedTo:: [[Soft Robotics]]
  - relatedTo:: [[Industrial Automation]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Internet of Things]]

- ### Standards and Context
  - **ISO 10218-1 / ISO 10218-2** — Safety requirements for industrial robots; drive requirements for torque and power limiting.
  - **ISO/TS 15066** — Collaborative robot safety; specifies force and pressure limits directly linked to actuator output characteristics.
  - **IEC 61800 series** — Adjustable-speed electrical power drive systems covering the [[Power Electronics]] side of electric actuator drive.
  - **ANSI/RIA R15.06** — North-American implementation of ISO robot safety; applies to actuator selection and testing.
  - **DO-178C / DO-254** — Software and hardware certification for airborne actuator control systems.
  - **IEC 60601** — Medical electrical equipment safety applying to surgical and rehabilitation robotic actuators.
  - **IEEE 1872 (Ontologies for Robotics and Automation)** — Provides formal vocabulary for actuator types, consistent with this ontology's classification under `robo-actuation-and-control`.
  - Standardisation bodies involved: ISO TC 299 (Robotics), IEC TC 22 (Power Electronics), IEEE Robotics and Automation Society.

- ### Provenance
  - sources:: ISO 10218-1:2011; ISO/TS 15066:2016; Siciliano et al. "Robotics: Modelling, Planning and Control" (2009); IEEE 1872-2015; Hogan N. "Impedance Control" ASME J. Dyn. Syst. 1985; Pratt & Williamson "Series elastic actuators" IROS 1995
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
