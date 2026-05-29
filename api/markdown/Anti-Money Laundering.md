public:: true

# anti-money laundering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f582fc644a2894ee8886085bec2a446ed47fee75c21f23fa500135c6680f973b",
  "@type": "Page",
  "vc:slug": "anti-money-laundering",
  "title": "anti-money laundering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anti-money-laundering",
  "@type": "Class",
  "label": "Anti-Money Laundering",
  "definition": "Anti-Money Laundering (AML) encompasses the legislative frameworks, regulatory obligations, and operational procedures that financial institutions and other regulated entities must implement to detect, prevent, and report the layering and integration of proceeds from criminal activity. AML programmes typically include customer due diligence (CDD), enhanced due diligence (EDD) for high-risk customers, transaction monitoring, suspicious activity reporting (SAR), and sanctions screening. International standards are set by the Financial Action Task Force (FATF) and transposed into national law by member jurisdictions.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal and Regulatory"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Anti-Money Laundering (AML) encompasses the legislative frameworks, regulatory obligations, and operational procedures that financial institutions and other regulated entities must implement to detect, prevent, and report the layering and integration of proceeds from criminal activity. AML programmes typically include customer due diligence (CDD), enhanced due diligence (EDD) for high-risk customers, transaction monitoring, suspicious activity reporting (SAR), and sanctions screening. International standards are set by the Financial Action Task Force (FATF) and transposed into national law by member jurisdictions.

- ### Semantic Classification
  - owl-class:: anti-money-laundering:Anti-Money Laundering
  - owl-role:: Concept

- ### Relationships
  - requires [[Fraud Detection]]
  - requires [[Regulatory Compliance]]
  - uses [[Anomaly Detection]]
  - uses [[AML KYC Compliance]]
  - relatedTo [[Blockchain Compliance]]

- ### Content
  - AML compliance involves three core operational processes. The first is Know Your Customer (KYC), in which institutions verify the identity of clients at onboarding and assign a risk rating based on source of funds, geographic exposure, and business profile. The second is ongoing transaction monitoring, where rule-based and increasingly machine-learning-driven systems flag activity patterns indicative of layering — e.g. structuring deposits to stay below reporting thresholds, rapid cycling through multiple accounts, or transfers to high-risk jurisdictions. The third is suspicious activity reporting, where flagged cases are reviewed by financial intelligence units and, where warranted, filed with national financial intelligence authorities.
  - Machine learning has transformed AML operations: graph neural networks analyse transaction networks to surface hidden beneficial ownership structures; natural language processing processes adverse media and regulatory watch-lists; and unsupervised clustering detects novel laundering typologies not captured by rule libraries. The FATF Travel Rule extends AML obligations to virtual asset service providers (VASPs), requiring originator and beneficiary information to accompany crypto transfers above specified thresholds.
  - Regulatory technology (RegTech) platforms increasingly automate case management, audit trails, and cross-border regulatory reporting, reducing the operational burden on compliance teams while improving detection rates relative to legacy rule-based systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
