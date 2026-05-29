public:: true

# Know Your Customer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:know-your-customer",
  "@type": "Page",
  "vc:slug": "know-your-customer",
  "title": "Know Your Customer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:know-your-customer",
  "@type": "Class",
  "label": "Know Your Customer",
  "definition": "Know Your Customer (KYC) is a regulatory and compliance process by which financial institutions and other regulated entities verify the identity of their clients, assess their risk profiles, and understand the nature of their financial activities to prevent money laundering, terrorist financing, and other financial crimes. KYC encompasses identity document verification, biometric checks, beneficial ownership disclosure, and ongoing transaction monitoring.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:compliance", "label": "Compliance"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:digital-identity-verification", "label": "Digital Identity Verification"},
      {"@id": "urn:ngm:class:biometric-verification", "label": "Biometric Verification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Know Your Customer]] (KYC) is a mandated compliance process requiring regulated entities — banks, exchanges, investment firms, cryptocurrency platforms, and increasingly other businesses — to verify the identity of clients before establishing a relationship and to monitor their activity thereafter. The process typically includes identity document verification, sanctions screening, politically exposed person (PEP) checks, beneficial ownership disclosure, and risk-scoring to determine the level of ongoing due diligence required. KYC is a foundational component of [[Anti-Money Laundering]] (AML) frameworks and is mandated by the Financial Action Task Force (FATF) recommendations adopted by over 200 jurisdictions.

- ### Relationships
  - KYC requires [[Digital Identity Verification]] and [[Biometric Verification]] to confirm customer identity against government-issued documents and liveness detection. It enables [[Anti-Money Laundering]] controls and underpins [[AML KYC Compliance]] programmes. KYC sits within broader [[Compliance Framework|compliance frameworks]] governed by [[Financial Regulation]], and is increasingly intersecting with [[Digital Identity]] systems including [[Decentralised Identity (DID)|decentralised identity]] and [[Verifiable Credential|verifiable credentials]].

- ### Content
  - The formal regulatory requirement for financial institutions to verify customer identity has roots in the United States Bank Secrecy Act (1970) and developed into globally coordinated standards through the FATF, established in 1989. The term "Know Your Customer" became standardised in the 1990s as regulators responded to high-profile money laundering cases. The EU's Anti-Money Laundering Directives, particularly AMLD5 (2018) and AMLD6 (2021), extended KYC obligations to virtual currency exchanges and crypto-asset service providers, reflecting the growing role of digital assets in the financial system.

  - Technically, KYC involves multiple verification layers. Document verification uses optical character recognition (OCR) and machine vision to extract and validate data from passports, driving licences, and national identity cards against issuing authority formats. Biometric liveness detection — typically selfie-based facial comparison — guards against spoofing with static images. Data is cross-referenced against global watchlists (OFAC, UN sanctions), PEP databases, and adverse media. Risk scoring models classify customers into tiers (standard, enhanced, high-risk) that determine monitoring frequency and thresholds for suspicious activity reporting.

  - The KYC industry has grown into a specialised RegTech sector, with providers such as Onfido, Jumio, Trulioo, and Veriff offering API-accessible identity verification services. Banks and cryptocurrency exchanges integrate these into onboarding flows. Blockchain-based decentralised identity and verifiable credential standards (W3C DIDs, Verifiable Credentials) are being explored as a means to enable reusable, privacy-preserving KYC attestations, potentially allowing a user to pass KYC once and carry a cryptographic credential accepted by multiple institutions without re-sharing raw identity documents.

  - In 2024–2025 KYC faces dual pressure: tightening regulations (the EU's Markets in Crypto-Assets regulation, MiCA, mandating KYC for all crypto-asset service providers) and user experience demands for frictionless onboarding. AI-driven identity verification reduces manual review and fraud, whilst privacy-enhancing technologies such as zero-knowledge proofs are being standardised to allow selective disclosure of KYC attributes without revealing the underlying identity data. The FATF "Travel Rule" — requiring originator and beneficiary information to accompany virtual asset transfers — remains a significant compliance engineering challenge for the crypto sector.

