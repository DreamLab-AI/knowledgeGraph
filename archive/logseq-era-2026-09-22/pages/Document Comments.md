public:: true

# Document Comments
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-document-comments",
  "@type": "Page",
  "vc:slug": "document-comments",
  "title": "Document Comments",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:document-comments",
  "@type": "Class",
  "label": "Document Comments",
  "definition": "Document Comments are annotations anchored to specific sections of a shared document that allow collaborators to ask questions, suggest changes, or provide feedback without altering the primary content. They support threaded replies, @mentions, and resolution states so discussions are traceable and actionable. This asynchronous feedback mechanism is essential for distributed review workflows across time zones.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:asynchronous-collaboration", "label": "Asynchronous Collaboration"},
      {"@id": "urn:ngm:class:peer-review", "label": "Peer Review"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:live-co-authoring", "label": "Live Co-authoring"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Anchored annotations on shared documents that enable threaded asynchronous feedback and review discussions without modifying core content.
