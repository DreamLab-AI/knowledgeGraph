public:: true

# Proprioceptive Sensing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:proprioceptive-sensing",
  "@type": "Page",
  "vc:slug": "proprioceptive-sensing",
  "title": "Proprioceptive Sensing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proprioceptive-sensing",
  "@type": "Class",
  "label": "Proprioceptive Sensing",
  "definition": "Proprioceptive sensing is a robot's perception of its own internal state, such as joint angles, motor torques, link velocities, and body orientation, as distinct from exteroceptive sensing of the external environment. It relies on encoders, force/torque sensors, and inertial measurement units. It is essential for balance, whole-body control, and safe interaction, especially in legged and humanoid robots.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-perception", "label": "Robot Perception"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"},
      {"@id": "urn:ngm:class:humanoid-robot", "label": "Humanoid Robot"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Proprioceptive sensing gives a robot awareness of its own internal state such as joint positions, torques, and body orientation. It depends on the robot's [[Mechanical Component]] instrumentation and is a critical subsystem of the [[Humanoid Robot]].
- ### Content
  - Joint encoders report angles, force/torque sensors measure interaction loads, and IMUs estimate body attitude and angular rates. Fused at high rate, these signals enable closed-loop joint control, balance and posture regulation, contact detection, and torque-limited compliant motion. In legged and humanoid systems, proprioception is indispensable for dynamic stability when external sensing is delayed or occluded.
