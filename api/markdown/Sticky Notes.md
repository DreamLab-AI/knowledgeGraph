public:: true

# Sticky Notes
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-sticky-notes",
  "@type": "Page",
  "vc:slug": "sticky-notes",
  "title": "Sticky Notes",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sticky-notes",
  "@type": "Class",
  "label": "Sticky Notes",
  "definition": "Sticky Notes are digital equivalents of physical adhesive notes used on virtual whiteboards or collaboration surfaces to capture brief ideas, action items, or annotations. Multiple participants can add, move, and colour-code notes simultaneously, making them a lightweight tool for brainstorming and retrospectives in remote teams. They are widely supported in tools such as Miro, FigJam, and Microsoft Whiteboard.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:brainstorming", "label": "Brainstorming"},
      {"@id": "urn:ngm:class:retrospective", "label": "Retrospective"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-whiteboard", "label": "Collaborative Whiteboard"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Digital adhesive-note cards placed on shared virtual surfaces to capture and cluster ideas during distributed brainstorming and retrospectives.
