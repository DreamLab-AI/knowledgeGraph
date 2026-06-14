public:: true

# Goal Configuration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:goal-configuration",
  "@type": "Page",
  "vc:slug": "goal-configuration",
  "title": "Goal Configuration",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:goal-configuration",
  "@type": "Class",
  "label": "Goal Configuration",
  "definition": "A goal configuration is the desired target state of a robot or articulated system, expressed in its configuration space as a set of joint angles or a pose. Motion planners search for a collision-free path from the start configuration to this goal. Specifying it precisely is a prerequisite for path planning and trajectory generation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:path-planning", "label": "Path Planning"}, {"@id": "urn:ngm:class:trajectory-generation", "label": "Trajectory Generation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A goal configuration is the target state in configuration space that a robot must reach; it is required by [[Path Planning]] to define the search endpoint and by [[Trajectory Generation]] to produce executable motion.
- ### Content
  - Configurations are expressed in joint space for manipulators or as pose plus orientation for mobile platforms, and may be derived from a task-space goal via inverse kinematics. A planner treats the goal as the terminal node, finding a continuous, collision-free path through free configuration space. Goals can be single points, regions, or sets of acceptable poses when multiple solutions satisfy the task.
