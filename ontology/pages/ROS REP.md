public:: true

# ROS REP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ros-rep",
  "@type": "Page",
  "vc:slug": "ros-rep",
  "title": "ROS REP",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ros-rep",
  "@type": "Class",
  "label": "ROS REP",
  "definition": "A ROS Enhancement Proposal (REP) is a design document that defines conventions and standards for the Robot Operating System ecosystem, analogous to internet RFCs or Python PEPs. REPs codify agreements such as coordinate-frame conventions, units, naming, and message interfaces so that independently developed robotics components interoperate. They provide the normative reference that aligns platforms and libraries.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:robotics-platform", "label": "Robotics Platform"}, {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A ROS REP defines conventions and standards for the Robot Operating System, standardising a [[Robotics Platform]] and behaviours such as [[Collision Detection]].
- ### Content
  - REPs fix shared decisions like REP-103 coordinate conventions and units, ensuring sensors, transforms, and planners agree on frames and semantics. By documenting these norms, the proposals keep the broad ROS ecosystem interoperable.
