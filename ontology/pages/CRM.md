public:: true

# CRM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:crm",
  "@type": "Page",
  "vc:slug": "crm",
  "title": "CRM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crm",
  "@type": "Class",
  "label": "CRM",
  "definition": "Customer Relationship Management (CRM) is a category of enterprise software and associated business processes that centralises the storage, tracking, and analysis of all interactions between an organisation and its customers, prospects, and partners across the full sales, marketing, and service lifecycle. A CRM system provides a shared record of each contact and account, enabling sales pipelines, service-case management, marketing campaign tracking, and analytical reporting from a single platform.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:enterprise-software-platform",
      "label": "Enterprise Software Platform"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:crm-systems",
        "label": "CRM Systems"
      },
      {
        "@id": "urn:ngm:class:crm-integration",
        "label": "CRM Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:customer-experience-management",
        "label": "Customer Experience Management"
      },
      {
        "@id": "urn:ngm:class:customer-support-automation",
        "label": "Customer Support Automation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:identity-resolution",
        "label": "Identity Resolution"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Cloud Infrastructure"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:enterprise-workflow",
        "label": "Enterprise Workflow"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:omnichannel",
        "label": "Omnichannel"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:customer-data-platform",
        "label": "Customer Data Platform"
      },
      {
        "@id": "urn:ngm:class:enterprise-resource-planning",
        "label": "Enterprise Resource Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:business-intelligence",
        "label": "Business Intelligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:customer-relationship-management",
      "label": "Customer Relationship Management"
    },
    {
      "@id": "urn:ngm:class:sales-force-automation",
      "label": "Sales Force Automation"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - CRM (Customer Relationship Management) is a class of [[Enterprise Software Platform]] that maintains a unified record of all customer interactions across the sales, marketing, and service lifecycle, enabling organisations to manage pipelines, automate follow-ups, and measure relationship health, distinct from a [[Customer Data Platform]] which focuses on event-level behavioural data for marketing activation.

- ### Relationships
  - CRM encompasses [[CRM Systems]] and [[CRM Integration]] components, enables [[Customer Experience Management]] and [[Customer Support Automation]], interoperates with [[Customer Data Platform]] for behavioural enrichment, and underpins [[Omnichannel]] strategies by serving as the record-of-truth for account and contact data, executing operations through [[Enterprise Workflow]] automation engines.

- ### Content
  - CRM as a distinct software category emerged in the late 1980s-early 1990s from contact management tools such as ACT! (1986) and Goldmine (1989). Siebel Systems (founded 1993) industrialised enterprise CRM, becoming the dominant vendor by the late 1990s. The category was disrupted by Salesforce (founded 1999), which introduced the SaaS delivery model via its "no software" brand positioning. By the mid-2000s Salesforce, SAP CRM, Oracle CRM On Demand, and Microsoft Dynamics CX had established the dominant competitive set. Open-source alternatives (SugarCRM, Vtiger) broadened access to smaller organisations.

  - Architecturally, a CRM comprises an account/contact data model (organisations, persons, relationships), an activity log (calls, emails, meetings, tasks), opportunity and pipeline management (stages, probabilities, forecasts), case and ticket management for service, and a campaign management module for marketing. Modern CRM platforms expose REST APIs and webhook frameworks enabling real-time synchronisation with marketing automation, ERP, e-commerce, and telephony systems. Workflow automation engines execute triggers on record changes — routing leads, sending follow-up emails, escalating service cases — without manual intervention.

  - CRM systems are central to revenue operations (RevOps), a discipline that aligns sales, marketing, and customer success around shared data and processes. A well-implemented CRM reduces customer acquisition costs by improving lead qualification, increases win rates through structured pipeline management, and reduces churn by surfacing at-risk accounts. In service contexts, a 360-degree customer view eliminates the need for customers to repeat context when switching between agents or channels, directly reducing handle time and improving satisfaction scores.

  - By 2024-2025 AI copilot features have become the primary differentiator in CRM competition: Salesforce Einstein GPT, Microsoft Copilot for Dynamics 365, and HubSpot AI generate email drafts, summarise call recordings, predict churn risk, recommend next best actions, and auto-populate fields from conversation transcripts. Agentic CRM — where LLM-powered agents autonomously qualify leads, schedule meetings, and update records based on email and calendar events — is moving from pilot to general availability. Privacy regulations continue to drive investment in consent management and data residency controls within CRM architecture.
