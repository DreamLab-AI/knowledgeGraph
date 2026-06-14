public:: true

# Shared Cursors
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-shared-cursors",
  "@type": "Page",
  "vc:slug": "shared-cursors",
  "title": "Shared Cursors",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shared-cursors",
  "@type": "Class",
  "label": "Shared Cursors",
  "definition": "Shared Cursors are real-time visual indicators that show the pointer position and identity of each collaborator within a shared document or canvas. By rendering each participant's cursor with a distinct colour and name label, they communicate spatial presence and prevent conflicting edits without requiring verbal interruptions. They are a foundational multiplayer feature in live co-authoring environments such as Figma and Google Docs.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:live-co-authoring", "label": "Live Co-authoring"},
      {"@id": "urn:ngm:class:presence-awareness", "label": "Presence Awareness"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-whiteboard", "label": "Collaborative Whiteboard"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Real-time coloured pointer indicators that show each collaborator's position within a shared document or canvas, enabling spatial awareness without verbal interruption.
