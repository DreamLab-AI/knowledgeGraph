public:: true

# Kanban Board
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-kanban-board",
  "@type": "Page",
  "vc:slug": "kanban-board",
  "title": "Kanban Board",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kanban-board",
  "@type": "Class",
  "label": "Kanban Board",
  "definition": "A Kanban Board is a visual project management tool that organises work items into columns representing workflow stages such as To Do, In Progress, and Done. Teams use it to limit work-in-progress, surface bottlenecks, and maintain a shared view of task status across distributed members. It is a core practice in agile and lean distributed workflows.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:task-tracking", "label": "Task Tracking"},
      {"@id": "urn:ngm:class:agile-workflow", "label": "Agile Workflow"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-whiteboard", "label": "Collaborative Whiteboard"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A visual board that organises tasks into workflow-stage columns to give distributed teams a shared, real-time view of work status.
