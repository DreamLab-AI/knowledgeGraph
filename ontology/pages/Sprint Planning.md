public:: true

# Sprint Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sprint-planning",
  "@type": "Page",
  "vc:slug": "sprint-planning",
  "title": "Sprint Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sprint-planning",
  "@type": "Class",
  "label": "Sprint Planning",
  "definition": "Sprint planning is the Scrum event in which a development team selects items from the product backlog and defines a goal and plan for the upcoming time-boxed iteration. The team negotiates scope against capacity, decomposes chosen items into actionable work, and commits to a realistic sprint backlog. It establishes shared understanding of what will be delivered and how, anchoring the iteration's focus.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-whiteboard", "label": "Collaborative Whiteboard"},
      {"@id": "urn:ngm:class:software-development", "label": "Software Development"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sprint planning is the Scrum event within [[Software Development]] where a team selects backlog items, sets a sprint goal, and decomposes the work into a committed plan for a time-boxed iteration.
- ### Content
  - The team balances forecasted scope against its capacity, breaking chosen backlog items into tasks and surfacing dependencies and risks. Distributed teams frequently run the session on a [[Collaborative Whiteboard]], using shared sticky-note boards and estimation grids to visualise the backlog, reach consensus on the sprint goal, and record the resulting plan transparently.
