public:: true

# Harmonic Drive
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:harmonic-drive",
  "@type": "Page",
  "vc:slug": "harmonic-drive",
  "title": "Harmonic Drive",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:harmonic-drive",
  "@type": "Class",
  "label": "Harmonic Drive",
  "definition": "A harmonic drive is a strain-wave gearing mechanism that achieves very high reduction ratios in a compact, lightweight package with near-zero backlash. It uses a flexible spline deformed by an elliptical wave generator to mesh with a rigid outer gear, transmitting motion with high precision. Harmonic drives are widely used in robot joints, where accuracy and torque density are critical.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Robo Actuation and Control"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A harmonic drive is a zero-backlash strain-wave gear; it is a [[Mechanical Component]] central to precise robotic actuation.
- ### Content
  - The mechanism comprises a wave generator, a flexible flexspline, and a rigid circular spline; the slight tooth-count difference yields large reduction in a single stage. Its low backlash and high stiffness make it the standard choice for the rotary joints of industrial and collaborative robot arms, at the cost of higher price and some flexspline compliance.
