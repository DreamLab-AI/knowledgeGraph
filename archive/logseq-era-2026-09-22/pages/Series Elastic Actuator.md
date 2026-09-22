public:: true

# Series Elastic Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:series-elastic-actuator",
  "@type": "Page",
  "vc:slug": "series-elastic-actuator",
  "title": "Series Elastic Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:series-elastic-actuator",
  "@type": "Class",
  "label": "Series Elastic Actuator",
  "definition": "A Series Elastic Actuator (SEA) is a robotic joint mechanism that interposes a compliant spring element in series between the gearbox output and the load, deliberately introducing controlled elasticity into the drivetrain. By measuring the spring deflection with a position sensor, the SEA provides accurate, low-noise torque measurement without a dedicated force-torque sensor, while simultaneously providing passive mechanical compliance that absorbs impact energy and reduces stiffness at the point of contact. This architecture enables safe, backdrivable interactions between robots and humans or unstructured environments.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:robot-actuator",
    "label": "Robot Actuator"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:compliant-spring-element",
        "label": "Compliant Spring Element"
      },
      {
        "@id": "urn:ngm:class:rotary-encoder",
        "label": "Rotary Encoder"
      },
      {
        "@id": "urn:ngm:class:planetary-gearbox",
        "label": "Gearbox"
      },
      {
        "@id": "urn:ngm:class:torque-control",
        "label": "Torque Control Loop"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:humanoid-robot",
        "label": "Humanoid Robot"
      },
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-robot",
        "label": "Collaborative Robot"
      },
      {
        "@id": "urn:ngm:class:exoskeleton",
        "label": "Powered Exoskeleton"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:position-sensor",
        "label": "Position Sensor"
      },
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:soft-robotics",
        "label": "Soft Robotics"
      },
      {
        "@id": "urn:ngm:class:legged-locomotion",
        "label": "Legged Locomotion"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:series-elastic-actuation",
        "label": "Series Elastic Actuation"
      },
      {
        "@id": "urn:ngm:class:force-torque-sensor",
        "label": "Force Torque Estimation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:position-sensor",
        "label": "Position Sensor"
      },
      {
        "@id": "urn:ngm:class:torque-control",
        "label": "Torque Control"
      },
      {
        "@id": "urn:ngm:class:hookes-law",
        "label": "Hookes Law"
      },
      {
        "@id": "urn:ngm:class:pid-controller",
        "label": "Pid Controller"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:impedance-control",
        "label": "Impedance Control"
      },
      {
        "@id": "urn:ngm:class:variable-impedance-control",
        "label": "Variable Impedance Control"
      },
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      },
      {
        "@id": "urn:ngm:class:backdrivability",
        "label": "Backdrivability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:quasi-direct-drive",
        "label": "Quasi Direct Drive Actuator"
      },
      {
        "@id": "urn:ngm:class:hydraulic-actuator",
        "label": "Hydraulic Actuator"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Rigid Actuator"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:series-elastic-actuation",
        "label": "Series Elastic Actuation"
      },
      {
        "@id": "urn:ngm:class:variable-stiffness-actuator",
        "label": "Variable Stiffness Actuator"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Proprioceptive Actuator"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:biomechanics",
        "label": "Biomechanics"
      },
      {
        "@id": "urn:ngm:class:safe-human-robot-interaction",
        "label": "Physical Human Robot Interaction Safety"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:sea-actuator",
      "label": "SEA Actuator"
    },
    {
      "@id": "urn:ngm:class:compliant-actuator",
      "label": "Compliant Actuator"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Series Elastic Actuator]] is a [[Robot Actuator]] that places a calibrated spring in series with the actuator output, using a [[Position Sensor]] to measure deflection for accurate joint [[Torque Control]] and providing mechanical compliance that is essential for safe [[Human Robot Interaction]].

- ### Relationships
  - The SEA is the canonical implementation of [[Series Elastic Actuation]] and is closely related to the broader family of [[Impedance Control]] and [[Variable Impedance Control]] approaches for compliant robotic joints. It uses a [[Position Sensor]] (typically a rotary encoder pair) for deflection measurement and enables [[Force Control]] via Hooke's law. The inherent compliance of the mechanism is a key enabler for [[Human Robot Interaction]] safety standards and for [[Soft Robotics]] design philosophies.

- ### Content
  - The Series Elastic Actuator was invented by Gill Pratt and Matthew Williamson at MIT's Leg Lab in 1995. Their landmark paper identified a fundamental problem with conventional stiff robotic actuators: high gear-ratio drivetrains are non-backdrivable, making force control noisy and physical contact dangerous. By inserting a steel coil spring between the gearbox and link, they obtained a linear, calibrated force-torque measurement through Hooke's law (F = kx) using only the two position encoders already present in the drivetrain, and simultaneously capped the peak impact force a robot joint could exert.

  - The SEA's control architecture typically runs in two nested loops. The inner torque control loop, operating at 1-5 kHz, uses the spring deflection signal to drive the motor such that actual joint torque tracks a reference. The outer impedance or position control loop sets the torque reference at a lower rate (100-500 Hz). Bandwidth limitations arise from the spring's compliance: stiffer springs yield higher torque-control bandwidth but reduce shock absorption; softer springs are safer but slower. Advanced designs use torsional coil springs, leaf springs, or custom-geometry flexures to tune this trade-off.

  - SEAs are the defining component of Boston Dynamics' PETMAN and Atlas humanoid robots, NASA's Valkyrie, the Rethink Robotics Baxter and Sawyer collaborative arms, and the WALK-MAN disaster-response robot. Prosthetic and exoskeleton devices (e.g., the Vanderbilt powered ankle-foot prosthesis) use SEAs to achieve biomimetic impedance profiles during locomotion. In these applications, the combination of torque transparency, impact tolerance, and energy storage in the spring enables gaits and interactions impossible with conventional stiff actuators.

  - By 2024-2025, SEAs are well-established in research and are entering commodity collaborative robot (cobot) designs. Quasi-Direct Drive (QDD) actuators, which use very low gear-ratio transmissions for inherent backdrivability, have partially supplanted SEAs in applications where spring hysteresis is problematic. Hybrid designs combining SEAs with QDD stages, and proprioceptive actuator arrays inspired by MIT Cheetah's mini-cheetah design, represent the current state of the art. Machine learning-based torque estimation from motor current is being explored as a software complement or alternative to physical spring deflection measurement.

