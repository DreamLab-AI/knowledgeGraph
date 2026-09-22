public:: true

# Sustainability Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sustainability-framework",
  "@type": "Page",
  "vc:slug": "sustainability-framework",
  "title": "Sustainability Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sustainability-framework",
  "@type": "Class",
  "label": "Sustainability Framework",
  "definition": "A sustainability framework is a structured set of principles, metrics, and reporting standards used to measure and manage the environmental, social, and governance impact of an organisation or system. It defines what to measure, how to compute indicators such as carbon footprint, and how to disclose results so that performance can be compared and audited. Frameworks like GHG Protocol and emerging crypto-specific schemes provide the methodological backbone for sustainability claims.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:environmental-impact-metric", "label": "Environmental Impact Metric"},
      {"@id": "urn:ngm:class:carbon-credit-token", "label": "Carbon Credit Token"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A sustainability framework provides the methodology and reporting standards for quantifying environmental and social impact, giving structure to inputs such as the [[Environmental Impact Metric]] and instruments like the [[Carbon Credit Token]].
- ### Content
  - A framework typically specifies the scope of accounting, the calculation methods for each indicator, baseline and target setting, and disclosure formats that enable third-party verification. Widely used examples include the GHG Protocol's Scope 1-3 emissions taxonomy and ESG reporting standards. In blockchain contexts, frameworks define how on-chain activity is measured and how offsets such as carbon-credit tokens are issued, retired, and audited.
