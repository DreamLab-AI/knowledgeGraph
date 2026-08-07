public:: true

# Safe Human-Robot Interaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safe-human-robot-interaction",
  "@type": "Page",
  "vc:slug": "safe-human-robot-interaction",
  "title": "Safe Human-Robot Interaction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safe-human-robot-interaction",
  "@type": "Class",
  "label": "Safe Human-Robot Interaction",
  "definition": "Safe human-robot interaction is the body of methods and controls that allow robots to operate in close proximity to people without causing harm. It combines compliant control, force and contact limiting, collision avoidance, and speed-and-separation monitoring so that physical contact, when it occurs, stays within safe limits. It is essential for collaborative robots that share workspaces with humans.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:human-robot-interaction", "label": "Human-Robot Interaction"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:force-control", "label": "Force Control"}, {"@id": "urn:ngm:class:admittance-control", "label": "Admittance Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Safe human-robot interaction enables robots to work near people without harm, enabled by [[Force Control]] and [[Admittance Control]] among other compliant-control methods.
- ### Content
  - Techniques include limiting contact forces, monitoring separation distance and speed, and yielding compliantly on contact. Together they let collaborative robots share space with workers while keeping any incidental contact within biomechanically safe thresholds.
