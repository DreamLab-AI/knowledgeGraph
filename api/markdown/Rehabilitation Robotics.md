public:: true

# Rehabilitation Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rehabilitation-robotics",
  "@type": "Page",
  "vc:slug": "rehabilitation-robotics",
  "title": "Rehabilitation Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rehabilitation-robotics",
  "@type": "Class",
  "label": "Rehabilitation Robotics",
  "definition": "Rehabilitation robotics is the field of robotic devices that assist therapy and recovery of motor function, including exoskeletons, end-effector trainers, and assistive manipulators. These systems deliver repeatable, intensity-controlled movement while measuring patient progress, and rely on compliant, force-controlled actuation to interact safely with the body. They aim to improve outcomes and scale access to physical therapy.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:robo-robot-type", "label": "Robot Type"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:pneumatic-actuator", "label": "Pneumatic Actuator"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Rehabilitation robotics covers therapy and assistive robots that retrain motor function, depending on [[Force Control]] and compliant drives such as the [[Pneumatic Actuator]] for safe physical interaction.
- ### Content
  - Devices range from lower-limb gait exoskeletons to upper-limb training robots that adapt assistance to the patient's effort. Soft and compliant actuation, sensitive force control, and progress measurement let clinicians deliver high-repetition, individualised therapy while keeping interaction forces within safe limits.
