public:: true

# Remediation Plan
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:remediation-plan",
  "@type": "Page",
  "vc:slug": "remediation-plan",
  "title": "Remediation Plan",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:remediation-plan",
  "@type": "Class",
  "label": "Remediation Plan",
  "definition": "A remediation plan is a structured set of corrective actions, owners, and deadlines drawn up to address identified non-conformities, risks, or harms discovered through audit or monitoring. It links each finding to a specific fix and tracks progress to closure. In compliance and ethical-sourcing contexts it is the mechanism that turns a violation into demonstrable improvement.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ethical-sourcing", "label": "Ethical Sourcing"},
      {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A remediation plan is the corrective-action roadmap that resolves audit findings, central to [[Ethical Sourcing]] programmes and the operation of any [[Compliance Control]].
- ### Content
  - Each plan assigns root-cause-based actions to accountable owners with target dates and verification criteria, then tracks them to closure. In supply-chain settings it documents how a supplier will correct labour or environmental breaches, providing evidence of continuous improvement to buyers and regulators.
