public:: true

# Start Configuration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:start-configuration",
  "@type": "Page",
  "vc:slug": "start-configuration",
  "title": "Start Configuration",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:start-configuration",
  "@type": "Class",
  "label": "Start Configuration",
  "definition": "A start configuration is the initial pose of a robot or articulated system, expressed as a point in its configuration space, from which a motion or path planner must compute a feasible route to a goal configuration. It encodes the complete set of joint values or positional parameters that fully describe the system's state at the beginning of a planned motion. Together with the goal configuration, it bounds the planning query.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robotics Navigation and Planning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:trajectory-generation", "label": "Trajectory Generation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A start configuration is the initial pose of a robot in its configuration space, the complete set of joint or positional values from which [[Path Planning]] must find a feasible route to a goal configuration.
- ### Content
  - It anchors one end of every planning query within [[Robotics Navigation and Planning]], defining the system's full state before motion begins. Sampling-based and search-based planners expand from the start configuration through free space toward the goal, and [[Trajectory Generation]] then time-parameterises the resulting geometric path into a dynamically feasible motion that respects velocity and acceleration limits.
