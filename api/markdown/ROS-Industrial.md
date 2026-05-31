public:: true

# ROS-Industrial
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ros-industrial",
  "@type": "Page",
  "vc:slug": "ros-industrial",
  "title": "ROS-Industrial",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ros-industrial",
  "@type": "Class",
  "label": "ROS-Industrial",
  "definition": "ROS-Industrial is an open-source project that extends the Robot Operating System with libraries, drivers, and interfaces for industrial manufacturing automation. It provides standardised drivers for industrial robot arms, motion-planning integration, and tools to bring advanced ROS capabilities into factory settings. It bridges research-grade robotics software with production-grade industrial hardware.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robotics", "label": "Robotics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:robot-standard", "label": "Robot Standard"}, {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - ROS-Industrial extends the Robot Operating System for manufacturing automation, related to the [[Robot Standard]] ecosystem and used by [[Industrial Robot]] deployments.
- ### Content
  - It supplies vendor drivers, a common interface for industrial arms, and integration with motion planning and perception. This lets manufacturers reuse ROS tooling for tasks such as path planning, calibration, and inspection on production hardware.
