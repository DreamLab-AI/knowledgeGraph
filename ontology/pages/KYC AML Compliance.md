public:: true

# KYC/AML Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:kyc-aml-compliance",
  "@type": "Page",
  "vc:slug": "kyc-aml-compliance",
  "title": "KYC/AML Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kyc-aml-compliance",
  "@type": "Class",
  "label": "KYC/AML Compliance",
  "definition": "KYC/AML compliance is the operational implementation of Know Your Customer and Anti-Money Laundering obligations within a product or platform, embedding identity verification, screening and monitoring into business processes. It encompasses the controls, workflows and audit evidence needed to demonstrate adherence to regulators. In tokenised systems it is increasingly encoded into smart contracts and asset standards.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:enterprise-token-standards", "label": "Enterprise Token Standards"},
      {"@id": "urn:ngm:class:carbon-credit-tracking", "label": "Carbon Credit Tracking"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - KYC/AML compliance is the embedded [[Regulatory Compliance]] capability that [[Enterprise Token Standards]] implement through permissioned transfer rules, and that [[Carbon Credit Tracking]] requires to ensure participants are verified and sanctioned-screened.
- ### Content
  - In permissioned and tokenised contexts, compliance logic is enforced at the protocol layer through allowlists, transfer restrictions and on-chain credential checks, supported by off-chain identity verification and transaction monitoring. This programmatic enforcement reduces manual review while producing the immutable audit trail regulators expect.
