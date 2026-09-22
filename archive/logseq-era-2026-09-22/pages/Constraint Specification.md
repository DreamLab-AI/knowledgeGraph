public:: true

# Constraint Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:constraint-specification",
  "@type": "Page",
  "vc:slug": "constraint-specification",
  "title": "Constraint Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:constraint-specification",
  "@type": "Class",
  "label": "Constraint Specification",
  "definition": "A constraint specification is a formal statement of the limits and conditions a control system or plan must satisfy, such as joint limits, actuator bounds, obstacle avoidance, and safety envelopes. It is supplied to control and optimisation algorithms so that generated commands remain feasible and safe. Precise constraint specification is essential for model-based and optimisation-based control design.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:control-algorithm", "label": "Control Algorithm"}, {"@id": "urn:ngm:class:model-based-control", "label": "Model Based Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A constraint specification formally states the feasibility and safety limits a [[Control Algorithm]] must respect, and is a required input to [[Model-Based Control]].
- ### Content
  - Constraints may be equality or inequality, hard or soft, and span kinematic, dynamic, and environmental limits. Optimisation-based controllers such as model predictive control encode them directly in the solver, while reactive schemes enforce them through saturation or barrier functions.
