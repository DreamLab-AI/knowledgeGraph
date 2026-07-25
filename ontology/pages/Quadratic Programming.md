public:: true

# Quadratic Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:quadratic-programming",
  "@type": "Page",
  "vc:slug": "quadratic-programming",
  "title": "Quadratic Programming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quadratic-programming",
  "@type": "Class",
  "label": "Quadratic Programming",
  "definition": "Quadratic programming (QP) is a class of mathematical optimisation problems in which a quadratic objective function is minimised subject to linear equality and inequality constraints. It is a convex optimisation problem when the quadratic term is positive semidefinite, admitting efficient and globally optimal solvers. QP is foundational to model-based control, trajectory optimisation, and constrained robotic motion generation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:model-based-control", "label": "Model Based Control"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Quadratic programming minimises a quadratic objective under linear constraints, yielding convex, globally solvable problems. It is used by [[Force Control]] and implemented within [[Model-Based Control]] schemes for real-time constrained optimisation.
- ### Content
  - In robotics, QP underpins whole-body controllers and model predictive control, where contact forces, joint limits, and dynamics are expressed as linear constraints around a quadratic cost. Active-set and interior-point solvers achieve the kilohertz solve rates required for closed-loop control on physical hardware.
