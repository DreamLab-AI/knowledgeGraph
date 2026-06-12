public:: true

# Miro
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:miro",
  "@type": "Page",
  "vc:slug": "miro",
  "title": "Miro",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:miro",
  "@type": "Class",
  "label": "Miro",
  "definition": "Miro is a cloud-based collaborative whiteboard platform that provides an infinite canvas for distributed teams to brainstorm, diagram, map workflows, and run workshops in real time. It offers sticky notes, templates, frameworks, and integrations with tools such as Jira, Slack, and design suites. It is widely adopted for product discovery, agile ceremonies, and remote facilitation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-whiteboard", "label": "Collaborative Whiteboard"},
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Miro is a cloud collaborative whiteboard offering an infinite shared canvas for distributed teams. It is a leading [[Collaborative Whiteboard]] used heavily in [[Product Design]].
- ### Content
  - The platform combines free-form drawing with structured templates for journey maps, retrospectives, and wireframes, plus real-time cursors and commenting for synchronous and asynchronous work. Deep integrations and an apps marketplace let teams pull live data and embed boards into their existing toolchains.
