public:: true

# Market Abuse Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:market-abuse-detection",
  "@type": "Page",
  "vc:slug": "market-abuse-detection",
  "title": "Market Abuse Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:market-abuse-detection",
  "@type": "Class",
  "label": "Market Abuse Detection",
  "definition": "Market abuse detection is the use of surveillance systems and analytics to identify illegal trading behaviours such as insider dealing, spoofing, layering, and price manipulation. It analyses order-book activity, trade patterns, and communications to flag anomalies for compliance review and regulatory reporting. It is a core obligation under regimes such as the EU Market Abuse Regulation and is increasingly powered by machine learning.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"}, {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Market abuse detection identifies manipulative or illegal trading conduct through automated surveillance of orders, trades, and communications. It enables [[Regulatory Reporting]] of suspicious activity and supports continuous [[Compliance Monitoring]].
- ### Content
  - Detection engines combine rule-based scenarios for known typologies with unsupervised anomaly detection and network analysis to surface novel abuse patterns. False-positive reduction is a central challenge, driving adoption of supervised models trained on confirmed cases and explainable scoring for investigator triage.
