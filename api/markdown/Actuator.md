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
  "definition": "An actuator is a device that converts energy — electrical, hydraulic, or pneumatic — into mechanical motion or force, serving as the output element of a robot's control chain. Actuators translate commands from a robot controller into joint rotations, linear displacements, or gripping forces, and their dynamic characteristics (torque density, bandwidth, backdrivability) fundamentally constrain a robot's speed, precision, and physical safety in human-robot interaction. Common types include servo motors, hydraulic cylinders, pneumatic actuators, and emerging soft actuator materials.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Robo Actuation and Control"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:control-system", "label": "Control System"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot", "label": "Robot"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - An actuator is a device that converts energy — electrical, hydraulic, or pneumatic — into mechanical motion or force, serving as the output element of a robot's control chain. Actuators translate commands from a robot controller into joint rotations, linear displacements, or gripping forces, and their dynamic characteristics (torque density, bandwidth, backdrivability) fundamentally constrain a robot's speed, precision, and physical safety in human-robot interaction. Common types include servo motors, hydraulic cylinders, pneumatic actuators, and emerging soft actuator materials.

- ### Semantic Classification
  - owl-class:: actuator:Actuator
  - owl-role:: Concept

- ### Relationships
  - hasPart [[Servo Motor]]
  - hasPart [[Hydraulic Actuator]]
  - requires [[Control System]]
  - requires [[Feedback Control]]
  - partOf [[Robot]]

- ### Content
  - Actuators sit at the interface between the cyber (control) and physical domains of robotics. Electric servo actuators — brushless DC motors paired with gearboxes and encoders — dominate precision industrial and collaborative robot arms because of their high controllability and energy efficiency. Position and velocity feedback from encoders close the control loop, typically via PID controllers that minimise the error between commanded and actual joint state.
  - Hydraulic actuators, by contrast, offer very high force-to-weight ratios and are preferred in heavy-load applications such as construction equipment and humanoid robots requiring high joint torque at low speed. Their disadvantages include complexity, leakage risk, and difficulty achieving fine position control. Pneumatic actuators are lightweight and cheap, commonly used in grippers and pick-and-place applications, but are harder to control precisely due to air compressibility.
  - Series elastic actuators (SEAs) introduce a compliant spring element between the motor and the joint, improving force sensing and intrinsic shock tolerance, making them popular in human-collaborative robots. Soft actuators, based on shape-memory alloys, electroactive polymers, or pneumatic elastomers, offer biological-like compliance and are an active research area for medical and wearable robotics. Actuator selection directly shapes robot kinematics design, workspace, payload, and safety classification.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
