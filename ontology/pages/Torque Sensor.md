public:: true

# Torque Sensor

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:torque-sensor",
  "@type": "Page",
  "title": "Torque Sensor",
  "vc:slug": "torque-sensor",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:torque-sensor",
  "@type": "Class",
  "label": "Torque Sensor",
  "definition": "A torque sensor is a transducer that measures the rotational force, or torque, applied about an axis, commonly at a robot joint or drive shaft. By reporting the load a joint experiences, it enables force control, compliance, collision detection, and safe physical interaction between robots and humans. Torque sensors typically use strain gauges bonded to a deformable element whose deflection is proportional to the applied moment.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-sensor",
      "label": "Robot Sensor"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:robot-joint",
        "label": "Robot Joint"
      },
      {
        "@id": "urn:ngm:class:robot-sensor",
        "label": "Robot Sensor"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:strain-gauge_note",
        "label": "Sensor"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:force-feedback",
        "label": "Force Feedback"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      },
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:safety-system",
        "label": "Safety System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:manipulation",
        "label": "Manipulation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:robot-joint",
        "label": "Robot Joint"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:proprioceptive-sensing",
        "label": "Proprioceptive Sensing"
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
  - A torque sensor is a transducer that measures the rotational force, or torque, applied about an axis, commonly at a robot joint or drive shaft. By reporting the load a joint experiences, it enables force control, compliance, collision detection, and safe physical interaction between robots and humans. Torque sensors typically use strain gauges bonded to a deformable element whose deflection is proportional to the applied moment.
  - Related concepts: [[Robot Sensor]] [[Robot Joint]] [[Force Control]] [[Actuator]] [[Haptic Feedback]]
- ### Overview
  - Torque sensing closes the loop between a robot's intended motion and the forces it actually exerts, turning a position-controlled machine into one that can feel and respond to contact. Mounted at each joint, torque sensors let a manipulator detect unexpected collisions, regulate grip strength, and yield safely when a person pushes against it. This proprioceptive feedback is foundational for collaborative robots that share workspace with humans.
- ### Key aspects
  - Strain-gauge bridges that convert mechanical deflection to electrical signal
  - Joint-level versus end-effector (wrist) torque measurement
  - Temperature compensation and calibration for measurement accuracy
  - Integration with feedback control loops for compliance and impedance control
  - Collision detection via deviation between commanded and measured torque
- ### Applications
  - Compliant control of collaborative robot arms
  - Force-limited assembly and insertion tasks
  - Safe human-robot interaction and collision response
  - Haptic and teleoperation systems requiring force reflection
- ### Relationships
  - subClassOf:: [[Robot Sensor]]
  - partOf:: [[Robot Joint]]
  - partOf:: [[Robot Sensor]]
  - hasPart:: [[Sensor]]
  - relatedTo:: [[Force Feedback]]
  - relatedTo:: [[Haptic Feedback]]
  - relatedTo:: [[Kinematics]]
  - requires:: [[Actuator]]
  - enables:: [[Force Control]]
  - enables:: [[Feedback Control]]
  - enables:: [[Safety System]]
  - supports:: [[Human Robot Interaction]]
  - supports:: [[Manipulation]]
  - uses:: [[Sensor]]
  - dependsOn:: [[Robot Joint]]
  - bridgesTo:: [[Proprioceptive Sensing]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
