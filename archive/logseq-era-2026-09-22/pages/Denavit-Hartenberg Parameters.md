public:: true

# Denavit-Hartenberg Parameters
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:denavit-hartenberg-parameters",
  "@type": "Page",
  "vc:slug": "denavit-hartenberg-parameters",
  "title": "Denavit-Hartenberg Parameters",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:denavit-hartenberg-parameters",
  "@type": "Class",
  "label": "Denavit-Hartenberg Parameters",
  "definition": "Denavit-Hartenberg (DH) parameters are a standardised four-parameter convention for describing the relative geometry between consecutive links of a robotic manipulator. Each joint is characterised by link length, link twist, link offset, and joint angle, yielding a homogeneous transformation matrix per joint. Chaining these matrices gives a compact, systematic model of the arm's kinematics.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics"},
      {"@id": "urn:ngm:class:kinematics-model", "label": "Kinematics Model"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - DH parameters encode each robot link with four numbers that build a per-joint transform. They are the standard input used by [[Forward Kinematics]] and form the core of a manipulator's [[Kinematics Model]].
- ### Content
  - Using the DH convention, the pose of the end-effector is computed by multiplying the per-joint homogeneous transforms in sequence. The convention's appeal is uniformity and minimal parameters, though singular configurations and the classic-versus-modified DH variants require care to avoid sign and frame errors.
