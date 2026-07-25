public:: true

# CRM Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:crm-systems",
  "@type": "Page",
  "vc:slug": "crm-systems",
  "title": "CRM Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crm-systems",
  "@type": "Class",
  "label": "CRM Systems",
  "definition": "CRM systems are software platforms that centralise the management of an organisation's interactions with current and prospective customers across sales, marketing, and service. They store contact records, track pipelines and tickets, automate outreach, and increasingly embed AI for summarisation and recommendation. They are core operational systems for revenue and customer-experience teams.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:crm", "label": "CRM"}, {"@id": "urn:ngm:class:meeting-ai-assistant", "label": "Meeting AI Assistant"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - CRM systems are platforms that consolidate customer data and interactions to support sales, marketing, and service operations. They increasingly interoperate with tools such as a [[Meeting AI Assistant]] and are a generalisation of specific products like [[CRM]].
- ### Content
  - Modern CRM platforms combine relational contact data with workflow automation, analytics, and embedded AI that drafts messages, scores leads, and surfaces next-best actions. Their value grows with integration breadth, but depends on data hygiene, adoption discipline, and careful governance of the sensitive customer information they aggregate.
