public:: true

# Usage Analytics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:usage-analytics",
  "@type": "Page",
  "vc:slug": "usage-analytics",
  "title": "Usage Analytics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:usage-analytics",
  "@type": "Class",
  "label": "Usage Analytics",
  "definition": "Usage analytics is the collection, measurement and interpretation of data describing how users interact with a product, service or platform, including session frequency, feature adoption, retention and engagement patterns. It transforms raw event telemetry into actionable insight for product, design and governance decisions. When applied responsibly it can inform well-being metrics while raising privacy considerations about behavioural tracking.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:telemetry-and-analytics", "label": "Telemetry & Analytics"}, {"@id": "urn:ngm:class:digital-well-being-index", "label": "Digital Well-Being Index"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Usage analytics measures how users engage with a system over time, forming part of broader [[Telemetry and Analytics]] and feeding inputs to a [[Digital Well-Being Index]].
- ### Content
  - Pipelines instrument client and server events, aggregate them into metrics such as DAU/MAU and funnels, and surface them through dashboards. Effective practice balances analytic value against data minimisation, consent and anonymisation to protect user privacy.
