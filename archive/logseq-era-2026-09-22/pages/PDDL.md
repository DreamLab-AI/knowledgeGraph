public:: true

# PDDL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:pddl",
  "@type": "Page",
  "vc:slug": "pddl",
  "title": "PDDL",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pddl",
  "@type": "Class",
  "label": "PDDL",
  "definition": "The Planning Domain Definition Language (PDDL) is a standardised formal language for encoding automated-planning problems as domains and problem instances. A domain specifies predicates and actions with preconditions and effects, while a problem instance defines objects, an initial state, and a goal. PDDL provides a common input format that lets generic planners compute action sequences, and it underpins much of classical AI task planning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:task-planning", "label": "Task Planning"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - PDDL is a formal modelling language used to express the domains and goals of [[Task Planning]] problems so that domain-independent planners can solve them.
- ### Content
  - A PDDL model separates the reusable domain (types, predicates, parameterised actions) from the specific problem (objects, initial state, goal condition), enabling planners to search for valid action sequences. Successive versions added durative actions, numeric fluents, and temporal constraints, broadening PDDL from classical STRIPS-style planning to temporal and metric domains used in robotics and agentic systems.
