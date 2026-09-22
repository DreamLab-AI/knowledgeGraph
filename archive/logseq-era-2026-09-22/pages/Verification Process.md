public:: true

# Verification Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:verification-process",
  "@type": "Page",
  "vc:slug": "verification-process",
  "title": "Verification Process",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:verification-process",
  "@type": "Class",
  "label": "Verification Process",
  "definition": "A verification process is the structured procedure by which claims or records are independently checked against evidence and methodology before being accepted as valid. In carbon markets it confirms that emission reductions or removals are real, additional, measurable and permanent prior to credit issuance and registry entry. Verification provides the assurance and integrity on which accounting and trading systems depend.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"}, {"@id": "urn:ngm:class:carbon-registry", "label": "Carbon Registry"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A verification process independently validates claims against evidence, a prerequisite for credible [[Carbon Accounting]] and for entries in a [[Carbon Registry]].
- ### Content
  - Independent third-party auditors apply approved methodologies to assess data quality, additionality and permanence. Successful verification triggers issuance and registration of credits, while documented audit trails support transparency, dispute resolution and ongoing monitoring.
