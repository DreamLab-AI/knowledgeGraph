public:: true

# Navigation Stack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:navigation-stack",
  "@type": "Page",
  "vc:slug": "navigation-stack",
  "title": "Navigation Stack",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:navigation-stack",
  "@type": "Class",
  "label": "Navigation Stack",
  "definition": "A navigation stack is the integrated software subsystem of a mobile robot responsible for taking it from a current pose to a goal pose while avoiding obstacles. It composes mapping, localisation, global path planning, and local trajectory control into a coordinated pipeline. The stack consumes sensor data and a map, and emits velocity commands that drive the robot's actuators.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robotics Navigation and Planning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:nav2", "label": "Nav2"},
      {"@id": "urn:ngm:class:ground-robot", "label": "Ground Robot"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A navigation stack bundles localisation, planning, and control so a robot can reach a goal autonomously. [[Nav2]] is a concrete implementation, and it is a key component of a [[Ground Robot]].
- ### Content
  - Typical stacks separate a global planner that computes a route over a static map from a local planner or controller that reacts to live sensor data and dynamic obstacles. Behaviour trees or state machines coordinate recovery actions when the robot becomes stuck, and costmaps fuse occupancy and proximity data to keep planned motions safe.
