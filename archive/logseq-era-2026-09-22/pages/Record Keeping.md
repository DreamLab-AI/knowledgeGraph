public:: true

# Record Keeping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:record-keeping",
  "@type": "Page",
  "vc:slug": "record-keeping",
  "title": "Record Keeping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:record-keeping",
  "@type": "Class",
  "label": "Record Keeping",
  "definition": "Record keeping is the systematic retention of transaction, customer, and decision records so that activities can be reconstructed and verified by auditors or regulators. In financial compliance it mandates preserving identity documentation, transaction details, and risk assessments for prescribed periods. Robust record keeping is a precondition for meeting anti-money-laundering and travel-rule obligations.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"},
      {"@id": "urn:ngm:class:travel-rule", "label": "Travel Rule"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Record keeping is the disciplined retention of transaction and customer data needed to satisfy [[AML KYC Compliance]] and the [[Travel Rule]], enabling later audit and reconstruction.
- ### Content
  - Regulated entities must capture originator and beneficiary information, identity evidence, and the rationale for risk decisions, retaining them for jurisdiction-specific periods (commonly five years). Inadequate records expose firms to enforcement action and undermine investigations into illicit flows.
