public:: true

# Workspace Templates
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-workspace-templates",
  "@type": "Page",
  "vc:slug": "workspace-templates",
  "title": "Workspace Templates",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:workspace-templates",
  "@type": "Class",
  "label": "Workspace Templates",
  "definition": "Workspace Templates are pre-configured layouts, page structures, or project scaffolds that teams can instantiate to quickly start a new collaboration session with consistent conventions. They encode best practices for recurring activities such as sprint planning, meeting notes, or design reviews, reducing setup time for distributed teams. Templates are a standard feature in platforms such as Notion, Confluence, and Miro.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-workspace-tools",
      "label": "Workspace Tools"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:onboarding",
        "label": "Onboarding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kanban-board",
        "label": "Kanban Board"
      }
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Pre-configured workspace layouts that teams instantiate to bootstrap recurring collaboration activities with consistent structure and conventions.
