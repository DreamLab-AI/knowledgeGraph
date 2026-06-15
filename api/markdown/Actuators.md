public:: true

# Actuators
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:actuators",
  "@type": "Page",
  "vc:slug": "actuators",
  "title": "Actuators",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:actuators",
  "@type": "Class",
  "label": "Actuators",
  "definition": "Actuators are physical devices that convert an electrical, hydraulic, or pneumatic control signal into mechanical motion or force, enabling a control system to produce a desired physical effect in the world. They are the output components of robotic and cyber-physical systems, spanning technologies including servo motors, pneumatic cylinders, hydraulic actuators, and piezoelectric elements, each offering different trade-offs in force output, speed, precision, and energy efficiency.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:robot-component",
    "label": "Robot Component"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:robot",
        "label": "Robot"
      },
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber Physical Systems"
      },
      {
        "@id": "urn:ngm:class:humanoid-robot",
        "label": "Humanoid Robot"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      },
      {
        "@id": "urn:ngm:class:pneumatic-actuator",
        "label": "Pneumatic Actuator"
      },
      {
        "@id": "urn:ngm:class:series-elastic-actuator",
        "label": "Series Elastic Actuator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:motion-control",
        "label": "Motion Controller"
      },
      {
        "@id": "urn:ngm:class:power-electronics",
        "label": "Power Electronics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethercat",
        "label": "EtherCAT"
      },
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-manipulation",
        "label": "Robot Manipulation"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:locomotion",
        "label": "Locomotion"
      },
      {
        "@id": "urn:ngm:class:force-torque-control",
        "label": "Force Torque Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:sensors",
        "label": "Sensors"
      },
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:robot-actuator",
        "label": "Robot Actuator"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:soft-robotics",
        "label": "Soft Robotics"
      },
      {
        "@id": "urn:ngm:class:prosthetics",
        "label": "Prosthetics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:robot-actuator",
      "label": "Robot Actuator"
    },
    {
      "@id": "urn:ngm:class:electromechanical-actuator",
      "label": "Electromechanical Actuator"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Actuators are the transducer components that translate control signals from a [[Control System]] into physical action, forming the output layer of any robotic or [[Cyber Physical Systems]] architecture. They are [[Robot Component]] elements that implement the commands computed by a controller, with [[Servo Motor]] devices providing precise position control through [[Feedback Control]] loops. Their selection determines the achievable force, speed, and motion fidelity of a robotic system, directly constraining [[Robot Manipulation]] capability.

- ### Relationships
  - Actuators are a specialisation of [[Robot Component]] and are physically part of a [[Robot]] or [[Cyber Physical Systems]]. They use [[Servo Motor]] technology and rely on [[Feedback Control]] for precision positioning. They enable [[Robot Manipulation]] of physical objects and provide the physical output for [[Haptic Feedback]] systems in telepresence and virtual reality. They are contextually related to the broader [[Control System]] framework and to [[Robot Actuator]] as a more specific sub-class within robotic anatomy.

- ### Content
  - The history of actuators is coextensive with the history of mechanical engineering. The steam engine's governor (1788) and the hydraulic press (1795) were early examples of controlled actuation for industrial purposes. Electrical actuators emerged with the development of DC motors in the 1830s, and electromagnetic solenoids became the dominant control actuators in relay-based automation systems of the early twentieth century. The development of servo mechanisms for naval gun control during World War II, and subsequent miniaturisation for aerospace applications, produced the high-bandwidth, precise actuators that form the basis of modern robotics.

  - Modern actuator taxonomy spans several technology families: electric actuators (DC brushed/brushless motors, stepper motors, servo motors, linear actuators), hydraulic actuators (cylinders, rotary motors—offering high force density), pneumatic actuators ([[Pneumatic Actuator]] cylinders and motors—fast, clean, but non-precise), and non-conventional types including piezoelectric actuators (nanometre resolution, high bandwidth), shape memory alloy actuators (bio-mimetic, silent), and dielectric elastomers (soft robotics). Series Elastic Actuators (SEAs), developed at MIT in the 1990s, introduced a compliant element between the motor and output to enable force sensing and safe human interaction, becoming standard in collaborative robots.

  - The Robot Operating System (ROS) provides standardised interfaces for actuator control through joint controllers and hardware abstraction layers, enabling portable control software across diverse actuator hardware. URDF (Unified Robot Description Format) and SDF describe actuator characteristics—joint limits, velocity limits, effort limits—that planners use to generate feasible trajectories. Industrial fieldbus protocols (EtherCAT, CANopen) provide deterministic real-time communication between motion controllers and smart servo drives, achieving synchronisation within microseconds across dozens of axes.

  - In 2024–2025, actuator development is driven by humanoid robotics—projects from Boston Dynamics, Figure AI, Agility Robotics, and Tesla's Optimus require high-torque, backdriveable, compact actuators capable of human-scale dexterity. Brushless DC motors with integrated torque sensing and proprioceptive feedback, pioneered in MIT Cheetah research, have moved from research laboratories to commercial products. Soft actuator research—pneumatic artificial muscles, cable-driven systems, and continuum manipulators—is enabling applications in surgical robotics, prosthetics, and human-robot collaboration where rigid actuators would pose safety risks.