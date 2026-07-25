public:: true

# Enterprise Risk Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:enterprise-risk-management",
  "@type": "Page",
  "vc:slug": "enterprise-risk-management",
  "title": "Enterprise Risk Management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:enterprise-risk-management",
  "@type": "Class",
  "label": "Enterprise Risk Management",
  "definition": "Enterprise Risk Management (ERM) is a structured, organisation-wide approach to identifying, assessing, prioritising, and mitigating risks that could affect an entity's objectives. It integrates financial, operational, strategic, compliance, and reputational risk into a single governance framework with defined ownership and reporting. Established frameworks such as COSO ERM and ISO 31000 provide the reference models.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:risk-assessment-methodology", "label": "Risk Assessment Methodology"}, {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Enterprise Risk Management is an organisation-wide [[Governance Framework]] for identifying and mitigating risk, related to [[Risk Assessment Methodology]] and operationalised through [[Compliance Control]].
- ### Content
  - ERM aggregates disparate risk types into a unified register with clear ownership, tolerance thresholds, and board-level reporting. Standards such as COSO ERM and ISO 31000 codify the process from risk identification through monitoring.
