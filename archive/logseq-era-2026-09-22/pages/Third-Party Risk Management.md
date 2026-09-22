public:: true

# Third-Party Risk Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:third-party-risk-management",
  "@type": "Page",
  "vc:slug": "third-party-risk-management",
  "title": "Third-Party Risk Management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:third-party-risk-management",
  "@type": "Class",
  "label": "Third-Party Risk Management",
  "definition": "Third-party risk management (TPRM) is the discipline of identifying, assessing, and controlling the risks an organisation inherits from vendors, suppliers, and other external partners. It covers due diligence, contractual controls, ongoing monitoring, and offboarding across security, compliance, operational, and reputational dimensions. TPRM has become essential as organisations rely on extended ecosystems of cloud services and outsourced functions.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"},
      {"@id": "urn:ngm:class:supply-chain-security", "label": "Supply Chain Security"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Third-party risk management identifies and controls the risks an organisation inherits from its vendors and partners, operationalised through layered [[Compliance Control]] across the relationship lifecycle.
- ### Content
  - A TPRM programme inventories third parties, tiers them by criticality, and applies proportionate due diligence such as security questionnaires, certification review, and financial assessment before onboarding. Contractual clauses set obligations for data protection, breach notification, and audit rights, while continuous monitoring tracks changes in posture over time. Mature programmes integrate TPRM with supply chain security and concentration-risk analysis so that dependence on critical fourth parties is also surfaced and managed.
