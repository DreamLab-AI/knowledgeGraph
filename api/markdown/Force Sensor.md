public:: true

# Force Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:force-sensor",
  "@type": "Page",
  "vc:slug": "force-sensor",
  "title": "Force Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:force-sensor",
  "@type": "Class",
  "label": "Force Sensor",
  "definition": "A force sensor is a transducer that measures the magnitude (and sometimes direction) of an applied mechanical force or torque, typically by converting strain in an elastic element into an electrical signal. Single-axis load cells and multi-axis force-torque sensors give robots haptic awareness of contact and interaction forces. Such measurements are essential for compliant manipulation, assembly, and safe physical human-robot interaction.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"},
      {"@id": "urn:ngm:class:admittance-control", "label": "Admittance Control"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A force sensor measures applied force or torque, providing the feedback that a [[Hydraulic Actuator]] and [[Admittance Control]] schemes rely on to regulate interaction forces. It is a specialised type of [[Sensor]].
- ### Content
  - Force sensors commonly use strain gauges bonded to a compliant structure, with multi-axis units resolving forces and moments along several axes. By closing the loop on contact force, they enable force and impedance/admittance control for tasks like insertion, polishing, and safe collaboration, where position control alone would risk excessive contact forces or instability.
