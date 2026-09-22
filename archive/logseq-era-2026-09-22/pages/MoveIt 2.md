public:: true

# MoveIt 2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:move-it-2",
  "@type": "Page",
  "vc:slug": "move-it-2",
  "title": "MoveIt 2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:move-it-2",
  "@type": "Class",
  "label": "MoveIt 2",
  "definition": "MoveIt 2 is the open-source motion-planning framework for ROS 2, providing manipulation capabilities including inverse kinematics, collision-aware path planning, trajectory generation, and execution for robotic arms and mobile manipulators. It integrates planners, perception, and control through a plugin architecture and is the de facto standard for arm motion planning in the ROS ecosystem. The ROS 2 version adds real-time and lifecycle improvements over the original MoveIt.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:robotics-platform", "label": "Robotics Platform"},
      {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - MoveIt 2 is the ROS 2 motion-planning framework for manipulation, covering IK, collision-aware planning, and execution. It is implemented on a [[Robotics Platform]] and used by a [[Mobile Robot Platform]].
- ### Content
  - Its plugin architecture lets users swap planners (OMPL, CHOMP, Pilz), kinematics solvers, and controllers, while the planning scene fuses sensor data for collision checking. MoveIt 2 leverages ROS 2's DDS middleware and lifecycle nodes for deterministic, real-time-capable manipulation pipelines.
