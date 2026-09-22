public:: true

# CSRD Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:csrd-compliance",
  "@type": "Page",
  "vc:slug": "csrd-compliance",
  "title": "CSRD Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:csrd-compliance",
  "@type": "Class",
  "label": "CSRD Compliance",
  "definition": "CSRD compliance is the practice of meeting the reporting obligations of the European Union's Corporate Sustainability Reporting Directive, which mandates standardised disclosure of environmental, social and governance impacts. It requires in-scope companies to report under the European Sustainability Reporting Standards (ESRS), including double-materiality assessments and audited climate and carbon metrics. Compliance underpins demonstrable carbon accounting for sectors such as energy-intensive computing and blockchain.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:carbon-neutral-blockchain", "label": "Carbon Neutral Blockchain"},
      {"@id": "urn:ngm:class:carbon-footprint-measurement", "label": "Carbon Footprint Measurement"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - CSRD compliance is the practice of satisfying the EU Corporate Sustainability Reporting Directive, requiring standardised ESG disclosure under ESRS and supporting [[Carbon Footprint Measurement]] for initiatives like [[Carbon Neutral Blockchain]].
- ### Content
  - The directive expands earlier non-financial reporting rules to a much larger set of companies and introduces mandatory assurance of disclosures. Reporting hinges on double materiality, assessing both how sustainability issues affect the company and how the company affects society and environment, with quantified emissions data feeding the assessment.
