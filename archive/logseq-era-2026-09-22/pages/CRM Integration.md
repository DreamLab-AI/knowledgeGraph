public:: true

# CRM Integration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:crm-integration",
  "@type": "Page",
  "vc:slug": "crm-integration",
  "title": "CRM Integration",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crm-integration",
  "@type": "Class",
  "label": "CRM Integration",
  "definition": "CRM integration is the connection of customer-relationship-management software with other business systems—such as telephony, email, marketing, and AI assistants—so that customer data and interactions flow automatically across tools. It typically uses APIs, webhooks, and event syncs to keep contact records, activity logs, and pipelines consistent. It is essential for unified customer views and automated sales and support workflows.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:system-architecture", "label": "System Architecture"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:crm", "label": "CRM"}, {"@id": "urn:ngm:class:call-centres", "label": "Call Centres"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - CRM integration links a [[CRM]] system to surrounding applications so customer data and interactions stay synchronised across channels. It is heavily used in [[Call Centres]] to unify telephony with contact records.
- ### Content
  - Integrations rely on REST APIs, webhooks, and middleware to push and pull contacts, tickets, call logs, and AI-generated summaries between systems. Well-designed integration reduces duplicate entry and gives agents a single customer timeline, while raising concerns around data residency, rate limits, and schema drift between vendors.
