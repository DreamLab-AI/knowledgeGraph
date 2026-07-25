public:: true

# Live Co-authoring
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-live-co-authoring",
  "@type": "Page",
  "vc:slug": "live-co-authoring",
  "title": "Live Co-authoring",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:live-co-authoring",
  "@type": "Class",
  "label": "Live Co-authoring",
  "definition": "Live Co-authoring is the capability that allows multiple users to edit the same document or artifact concurrently, with changes propagated to all participants in near real time. It relies on conflict-resolution mechanisms such as operational transformation or CRDTs to merge simultaneous edits without data loss. Platforms such as Google Docs, Microsoft 365, and Notion use live co-authoring as their primary collaborative editing model.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:shared-cursors", "label": "Shared Cursors"},
      {"@id": "urn:ngm:class:document-comments", "label": "Document Comments"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:version-history", "label": "Version History"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - The ability for multiple users to edit the same document simultaneously with real-time conflict resolution, making distributed teamwork feel synchronous.
