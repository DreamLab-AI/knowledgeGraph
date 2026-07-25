public:: true

# Market Surveillance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:market-surveillance",
  "@type": "Page",
  "vc:slug": "market-surveillance",
  "title": "Market Surveillance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:market-surveillance",
  "@type": "Class",
  "label": "Market Surveillance",
  "definition": "Market surveillance is the ongoing monitoring of trading venues and participant activity by exchanges and regulators to detect manipulation, abuse, and systemic risk. It ingests order, trade, and reference data in real time, applies alerting logic, and escalates suspected violations for enforcement. It underpins fair and orderly markets and is mandated by securities regulation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"}, {"@id": "urn:ngm:class:ai-liability", "label": "AI Liability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Market surveillance continuously monitors trading to detect abuse and systemic risk, escalating suspected breaches for enforcement. It is required by [[Securities Regulation]] and intersects with [[AI Liability]] as automated monitoring and trading proliferate.
- ### Content
  - Surveillance systems span single-venue and cross-market views, correlating activity to detect coordinated manipulation. As AI-driven trading grows, regulators extend surveillance to algorithmic behaviour, raising governance questions about accountability when autonomous systems contribute to disorderly conditions.
