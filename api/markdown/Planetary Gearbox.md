public:: true

# Planetary Gearbox
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:planetary-gearbox",
  "@type": "Page",
  "vc:slug": "planetary-gearbox",
  "title": "Planetary Gearbox",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:planetary-gearbox",
  "@type": "Class",
  "label": "Planetary Gearbox",
  "definition": "A planetary gearbox is a gear-reduction mechanism in which several planet gears revolve around a central sun gear inside an outer ring gear. This epicyclic arrangement distributes load across multiple gear meshes, yielding high torque density, coaxial input and output, and compact reduction ratios. It is a core mechanical component in robotic joints and actuators where space and weight are constrained.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A planetary gearbox is an epicyclic reduction mechanism that delivers high torque in a compact coaxial package, a key [[Mechanical Component]] of robotic actuators.
- ### Content
  - Because torque is shared among multiple planet gears, the gearbox achieves greater load capacity and stiffness than a comparable single-mesh design, while its concentric layout keeps the output axis aligned with the input. These traits, together with selectable high reduction ratios, make planetary gearboxes the standard choice for compact, high-torque robot joints, with backlash and efficiency being the main design trade-offs.
