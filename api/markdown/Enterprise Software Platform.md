public:: true

# Enterprise Software Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:enterprise-software-platform",
  "@type": "Page",
  "vc:slug": "enterprise-software-platform",
  "title": "Enterprise Software Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:enterprise-software-platform",
  "@type": "Class",
  "label": "Enterprise Software Platform",
  "definition": "An enterprise software platform is an integrated software environment that provides shared services, data, and tooling on which an organisation's business applications are built and run. Examples include ERP, CRM, and blockchain-as-a-service platforms that offer multi-tenant infrastructure, security, integration, and extensibility. The platform model lets enterprises consolidate capabilities and accelerate delivery of line-of-business applications.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:blockchain-as-a-service", "label": "Blockchain As A Service"}, {"@id": "urn:ngm:class:crm", "label": "CRM"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An enterprise software platform is an integrated environment of shared services on which business applications run, generalising offerings such as [[Blockchain as a Service]] and [[CRM]].
- ### Content
  - Platforms provide multi-tenant infrastructure, identity, integration buses, and extensibility frameworks. By consolidating these capabilities they reduce duplication and shorten the time to deliver new line-of-business systems.
