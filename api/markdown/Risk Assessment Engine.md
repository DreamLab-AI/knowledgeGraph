public:: true

# Risk Assessment Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:risk-assessment-engine",
  "@type": "Page",
  "vc:slug": "risk-assessment-engine",
  "title": "Risk Assessment Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-assessment-engine",
  "@type": "Class",
  "label": "Risk Assessment Engine",
  "definition": "A risk assessment engine is a software component that automatically evaluates the risk associated with transactions, shipments, or entities by applying rules, statistical models, or machine learning to available data. In customs and trade systems it scores consignments to prioritise inspection while expediting low-risk flows. It enables consistent, scalable, and auditable risk-based decision making.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Infrastructure Software Engineering"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:customs-trade-facilitation", "label": "Customs Trade Facilitation"}, {"@id": "urn:ngm:class:risk-assessment-methodology", "label": "Risk Assessment Methodology"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A risk assessment engine automatically scores risk to drive decisions, forming part of [[Customs Trade Facilitation]] and operationalising a [[Risk Assessment Methodology]].
- ### Content
  - The engine ingests declarations, party histories, and external signals, applies rules and models, and emits a risk score routing items to green, amber, or red channels. This concentrates inspection resources on high-risk cases while accelerating compliant trade.
