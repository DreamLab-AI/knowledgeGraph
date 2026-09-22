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
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-workspace-tools",
      "label": "Workspace Tools"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-workplace-platform",
        "label": "Digital Workplace Platform"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:user-authentication",
        "label": "User Authentication"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-management",
        "label": "Knowledge Management"
      },
      {
        "@id": "urn:ngm:class:runbook",
        "label": "Runbook"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:enterprise-content-management",
        "label": "Enterprise Content Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:webhook",
        "label": "Webhook"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:remote-work",
        "label": "Remote Work"
      },
      {
        "@id": "urn:ngm:class:asynchronous-communication",
        "label": "Asynchronous Communication"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:notion",
        "label": "Notion"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:jira",
        "label": "Jira"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-whiteboard",
        "label": "Collaborative Whiteboard"
      },
      {
        "@id": "urn:ngm:class:issue-tracking",
        "label": "Issue Tracking"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:atlassian-confluence",
      "label": "Atlassian Confluence"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Confluence is Atlassian's collaborative wiki and knowledge-management product, functioning as a [[Digital Workplace Platform]] and complementing tools such as the [[Collaborative Whiteboard]].
- ### Content
  - Content is structured into spaces and versioned pages with permissions, templates, and macros, and integrates closely with Jira for traceability between documentation and work items. It is commonly used for runbooks, decision records, and team handbooks in distributed organisations.
