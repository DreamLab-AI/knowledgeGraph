public:: true

# Force Torque Control

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:force-torque-control", "@type":"Page", "title":"Force Torque Control", "vc:slug":"force-torque-control", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:force-torque-control",
  "@type":"Class",
  "label":"Force Torque Control",
  "definition":"Force-torque control is a robot control strategy that regulates the contact forces and moments a manipulator exerts on its environment, rather than commanding position alone. It uses force-torque sensing, typically at the wrist or in the joints, within a feedback loop so that the robot can maintain a desired contact force or yield compliantly to external loads. This is essential for tasks involving physical contact, such as assembly, polishing, and safe interaction with people.",
  "domain":"robotics",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:force-control","label":"Force Control"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:robot-manipulation","label":"Robot Manipulation"}],
    "hasPart":[{"@id":"urn:ngm:class:feedback-control","label":"Feedback Control"}],
    "requires":[{"@id":"urn:ngm:class:actuators","label":"Actuators"}],
    "uses":[{"@id":"urn:ngm:class:feedback-control","label":"Feedback Control"},{"@id":"urn:ngm:class:end-effector","label":"End-Effector"}],
    "dependsOn":[{"@id":"urn:ngm:class:motion-control","label":"Motion Control"}],
    "implements":[{"@id":"urn:ngm:class:impedance-control","label":"Impedance Control"}],
    "supports":[{"@id":"urn:ngm:class:manipulation","label":"Manipulation"}],
    "partOf":[{"@id":"urn:ngm:class:robot-control","label":"Robot Control"}],
    "contrastsWith":[{"@id":"urn:ngm:class:admittance-control","label":"Admittance Control"}],
    "bridgesTo":[{"@id":"urn:ngm:class:haptics","label":"Haptics"}],
    "relatedTo":[{"@id":"urn:ngm:class:robotic-arm","label":"Robotic Arm"},{"@id":"urn:ngm:class:compliance-control","label":"Compliance Control"},{"@id":"urn:ngm:class:impedance-control","label":"Impedance Control"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Force-torque control regulates the forces and moments a robot exerts on its surroundings rather than commanding position alone. It closes a [[Feedback Control]] loop around wrist or joint force sensing and is foundational to contact-rich [[Robot Manipulation]] and safe interaction.
- ### Overview
- Pure position control struggles when a manipulator must touch its environment, because small position errors against a stiff surface produce large, potentially damaging forces.
- Force-torque control instead specifies a desired interaction force or a compliant relationship between motion and force, and uses sensed forces to adjust the commanded motion.
- It is closely related to impedance and admittance control, which shape the dynamic relationship between the robot and external loads.
- ### Mechanisms
- A six-axis force-torque sensor, often at the wrist, measures the contact wrench applied through the end-effector.
- A controller compares the measured wrench to a reference and modulates joint torques or commanded positions to achieve the target interaction.
- Impedance control renders the robot as a virtual spring-damper, while admittance control maps measured force to a corrective motion.
- Accurate dynamic models and calibration remove the robot's own inertial and gravitational forces so that only true contact forces are regulated.
- ### Applications
- Precision assembly tasks such as peg-in-hole insertion and connector mating.
- Surface-following operations including polishing, deburring, and grinding.
- Collaborative robots that must remain safe and yielding when contacting people.
- Teleoperation and haptic systems that reflect contact forces back to an operator.
- ### Relationships
- enables:: [[Robot Manipulation]]
- hasPart:: [[Feedback Control]]
- requires:: [[Actuators]]
- uses:: [[Feedback Control]]
- uses:: [[End-Effector]]
- dependsOn:: [[Motion Control]]
- implements:: [[Impedance Control]]
- supports:: [[Manipulation]]
- partOf:: [[Robot Control]]
- contrastsWith:: [[Admittance Control]]
- bridgesTo:: [[Haptics]]
- relatedTo:: [[Robotic Arm]]
- relatedTo:: [[Compliance Control]]
- relatedTo:: [[Impedance Control]]
- ### Provenance
- updated:: 2026-06-15
