public:: true

# Privacy-Preserving Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:privacy-preserving-compliance",
  "@type": "Page",
  "vc:slug": "privacy-preserving-compliance",
  "title": "Privacy-Preserving Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:privacy-preserving-compliance",
  "@type": "Class",
  "label": "Privacy-Preserving Compliance",
  "definition": "Privacy-preserving compliance is the use of cryptographic and selective-disclosure techniques to satisfy regulatory requirements such as KYC, AML, and audit without exposing the underlying personal data. It lets a party prove a fact (e.g. age, jurisdiction, sanction-list status) to a regulator or counterparty while revealing nothing more. It is central to reconciling decentralised identity and digital-currency systems with financial regulation.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:hyperledger-indy", "label": "Hyperledger Indy"},
      {"@id": "urn:ngm:class:cbdc-frameworks", "label": "CBDC Frameworks"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Privacy-preserving compliance satisfies regulatory obligations through selective disclosure and cryptographic proofs rather than full data exposure. It is supported by [[Hyperledger Indy]] credential infrastructure and enables compliant designs within [[CBDC Frameworks]].
- ### Content
  - Verifiable credentials and zero-knowledge proofs allow holders to demonstrate eligibility or compliance attributes without surrendering raw identity data. In CBDC and regulated-asset designs, this enables tiered privacy: small transactions stay private while thresholds trigger auditable disclosure, balancing user privacy against anti-money-laundering and sanctions-screening obligations.
