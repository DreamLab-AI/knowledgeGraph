public:: true

# Robot Controller
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:robot-controller",
  "@type": "Page",
  "title": "Robot Controller",
  "vc:slug": "robot-controller",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robot-controller",
  "@type": "Class",
  "label": "Robot Controller",
  "definition": "A Robot Controller is the computational subsystem that governs a robot's behaviour by reading sensor data, computing control commands and driving actuators to achieve desired motion or tasks. It runs control loops in real time, coordinating kinematics, trajectory execution and safety logic while interfacing with higher-level planning software. Controllers range from embedded microcontrollers on a single joint to industrial cabinets coordinating an entire articulated arm.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:control-system",
      "label": "Control System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:robotic-system",
        "label": "Robotic System"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:pid-controller",
        "label": "PID Controller"
      },
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      },
      {
        "@id": "urn:ngm:class:firmware",
        "label": "Firmware"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:real-time",
        "label": "Real-Time System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      },
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:trajectory-planning",
        "label": "Trajectory Planning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      },
      {
        "@id": "urn:ngm:class:ros",
        "label": "ROS"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - A Robot Controller is the computational subsystem that governs a robot's behaviour by reading sensor data, computing control commands and driving actuators to achieve desired motion or tasks. It runs control loops in real time, coordinating kinematics, trajectory execution and safety logic while interfacing with higher-level planning software. Controllers range from embedded microcontrollers on a single joint to industrial cabinets coordinating an entire articulated arm.
  - Related concepts: [[Control System]] [[Robotic System]] [[Actuator]] [[Sensor]] [[Feedback Control]]
- ### Overview
  - The robot controller closes the loop between perception and action. At its core, fast inner loops regulate joint position, velocity or torque using feedback controllers such as PID, while outer loops execute planned trajectories and enforce safety limits. Controllers schedule deterministic real-time tasks, communicate over fieldbuses to motor drivers, and expose interfaces to motion-planning and robot middleware such as ROS.
- ### Mechanisms
  - **Real-time control loops** — deterministic cycles regulate joint position, velocity and torque.
  - **Feedback control** — PID and model-based schemes correct error from sensor measurements.
  - **Trajectory execution** — interpolating planned paths into smooth joint commands.
  - **Actuator interfacing** — commanding motor drivers and servo amplifiers.
  - **Safety and limits** — enforcing joint limits, collision stops and emergency handling.
- ### Applications
  - Industrial articulated arms and pick-and-place cells.
  - Mobile robot navigation and drive control.
  - Collaborative robots with force and compliance control.
  - Research platforms running ROS-based control stacks.
- ### Relationships
  - subClassOf:: [[Control System]]
  - partOf:: [[Robotic System]]
  - hasPart:: [[PID Controller]]
  - hasPart:: [[Motor Driver]]
  - hasPart:: [[Firmware]]
  - requires:: [[Sensor]]
  - requires:: [[Actuator]]
  - requires:: [[Real-Time System]]
  - uses:: [[Feedback Control]]
  - uses:: [[Microcontroller]]
  - uses:: [[Robot Operating System]]
  - implements:: [[Motion Planning]]
  - implements:: [[Trajectory Planning]]
  - enables:: [[Kinematics]]
  - enables:: [[Inverse Kinematics]]
  - dependsOn:: [[Embedded System]]
  - supports:: [[Servo Motor]]
  - relatedTo:: [[Control System]]
  - relatedTo:: [[ROS]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
