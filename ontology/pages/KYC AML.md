public:: true

# KYC/AML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:kyc-aml",
  "@type": "Page",
  "vc:slug": "kyc-aml",
  "title": "KYC/AML",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kyc-aml",
  "@type": "Class",
  "label": "KYC/AML",
  "definition": "KYC/AML refers to Know Your Customer and Anti-Money Laundering regulatory requirements that obligate financial institutions to verify customer identities and monitor transactions for illicit activity. KYC governs identity verification and risk profiling at onboarding, while AML covers ongoing monitoring, suspicious-activity reporting and sanctions screening. These regimes shape compliance for banks, exchanges and crypto-asset service providers.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-identity", "label": "Distributed Identity"},
      {"@id": "urn:ngm:class:blockchain-analysis", "label": "Blockchain Analysis"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - KYC/AML is the [[Regulatory Compliance]] regime for customer verification and anti-money-laundering monitoring; it is supported by [[Distributed Identity]] for reusable verified credentials and by [[Blockchain Analysis]] for transaction risk scoring.
- ### Content
  - Obligations stem from frameworks such as the FATF Recommendations and national transposition laws, requiring identity proofing, beneficial-ownership checks, ongoing monitoring and reporting of suspicious activity. In digital-asset markets, KYC/AML drives demand for reusable identity attestations and on-chain analytics that flag high-risk addresses without compromising legitimate privacy.
