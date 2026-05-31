public:: true

# Risk-Based Approach
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:risk-based-approach",
  "@type": "Page",
  "vc:slug": "risk-based-approach",
  "title": "Risk-Based Approach",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-based-approach",
  "@type": "Class",
  "label": "Risk-Based Approach",
  "definition": "A risk-based approach is a regulatory and compliance methodology that allocates scrutiny and controls in proportion to assessed risk, rather than applying uniform requirements to all cases. In anti-money-laundering and cross-border compliance it directs enhanced due diligence at higher-risk customers and transactions while streamlining low-risk ones. It improves effectiveness and efficiency by focusing limited resources where harm is most likely.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cross-border-compliance", "label": "Cross-Border Compliance"}, {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A risk-based approach proportions controls to assessed risk, applied in [[Cross-Border Compliance]] and required by [[AML KYC Compliance]] regimes.
- ### Content
  - Institutions classify customers and transactions into risk tiers and apply enhanced, standard, or simplified due diligence accordingly. This focuses investigative effort on the highest-risk activity while reducing friction for routine, low-risk business.
