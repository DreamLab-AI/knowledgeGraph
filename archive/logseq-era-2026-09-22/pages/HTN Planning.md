public:: true

# HTN Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:htn-planning",
  "@type": "Page",
  "vc:slug": "htn-planning",
  "title": "HTN Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:htn-planning",
  "@type": "Class",
  "label": "HTN Planning",
  "definition": "HTN (Hierarchical Task Network) planning is an automated planning approach that solves problems by recursively decomposing high-level compound tasks into ordered subtasks using a library of methods, until only directly executable primitive actions remain. Unlike classical goal-state planning, it encodes domain knowledge as task decompositions, yielding efficient, human-interpretable plans. HTN planning is widely used in robotics, game AI, and workflow automation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:task-planning", "label": "Task Planning"},
      {"@id": "urn:ngm:class:ai-in-games", "label": "AI in Games"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - HTN planning decomposes compound tasks into executable primitives via method libraries; it is a core part of [[Task Planning]] and a common technique in [[AI in Games]].
- ### Content
  - Planners select applicable methods for each non-primitive task, expanding the network top-down while respecting ordering and precondition constraints. Encoding expert decomposition knowledge makes HTN plans efficient and explainable, though it requires hand-authored methods, trading generality for domain-tailored performance.
