public:: true

# Mind Map
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mind-map",
  "@type": "Page",
  "vc:slug": "mind-map",
  "title": "Mind Map",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mind-map",
  "@type": "Class",
  "label": "Mind Map",
  "definition": "A mind map is a diagram that organises information hierarchically around a central concept, with branches radiating to related topics and sub-topics. It is used for brainstorming, note-taking, and knowledge organisation, leveraging spatial and associative structure to aid recall and ideation. Digital mind-mapping tools support collaborative editing and links to external resources.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:diagrams-as-code", "label": "Diagrams as Code"},
      {"@id": "urn:ngm:class:collaborative-systems-modality-whiteboard", "label": "Collaborative Whiteboard"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A mind map is a radial, hierarchical diagram organising ideas around a central node. It can be authored via [[Diagrams as Code]] and is a common feature of a [[Collaborative Whiteboard]].
- ### Content
  - The non-linear, associative layout mirrors how concepts relate, making mind maps effective for early-stage ideation and summarising complex domains. Modern tools add real-time multi-user editing, templating, and export to outlines or presentation formats.
