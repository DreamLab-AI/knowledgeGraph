public:: true

# Confluence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:confluence",
  "@type": "Page",
  "vc:slug": "confluence",
  "title": "Confluence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:confluence",
  "@type": "Class",
  "label": "Confluence",
  "definition": "Confluence is a team workspace and wiki product developed by Atlassian for collaborative documentation, knowledge management, and project information sharing. It organises content into spaces and pages with rich editing, versioning, and tight integration with issue-tracking tools such as Jira. It is widely deployed as a digital-workplace platform for enterprise knowledge capture.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-workspace-tools", "label": "Digital Collaboration Workspace Tools"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:collaborative-whiteboard", "label": "Collaborative Whiteboard"}, {"@id": "urn:ngm:class:digital-workplace-platform", "label": "Digital Workplace Platform"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Confluence is Atlassian's collaborative wiki and knowledge-management product, functioning as a [[Digital Workplace Platform]] and complementing tools such as the [[Collaborative Whiteboard]].
- ### Content
  - Content is structured into spaces and versioned pages with permissions, templates, and macros, and integrates closely with Jira for traceability between documentation and work items. It is commonly used for runbooks, decision records, and team handbooks in distributed organisations.
