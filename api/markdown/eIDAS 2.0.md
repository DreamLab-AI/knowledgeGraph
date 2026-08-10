public:: true

# eIDAS 2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e-idas-2-0",
  "@type": "Page",
  "vc:slug": "e-idas-2-0",
  "title": "eIDAS 2.0",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:e-idas-2-0",
  "@type": "Class",
  "label": "eIDAS 2.0",
  "definition": "eIDAS 2.0 (Regulation EU 2024/1183) is the amended EU framework for electronic identification, authentication, and trust services, entered into force in May 2024 as a successor to the original eIDAS Regulation (EU 910/2014). Its cornerstone is the European Digital Identity Wallet (EUDIW), a mandatory public-infrastructure obligation requiring each EU member state to offer citizens, residents, and businesses a certified wallet for storing qualified electronic attestations of attributes, verifiable credentials, and qualified electronic signatures. The regulation obliges online platforms with more than 45 million EU users to accept the wallet as an authentication mechanism, dismantling private-sector identity lock-in and creating a public-interest counterweight to data concentration. eIDAS 2.0 aligns with W3C Verifiable Credentials, Decentralised Identifiers, OpenID for Verifiable Credential Issuance (OID4VCI), and OpenID for Verifiable Presentations (OID4VP), embedding open interoperability requirements and selective-disclosure privacy protections into binding EU law.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity-framework",
      "label": "Digital Identity Framework"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:eu-digital-identity-regulation",
      "label": "EU Digital Identity Regulation"
    },
    {
      "@id": "urn:ngm:class:regulation-eu-2024-1183",
      "label": "Regulation EU 2024/1183"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "European Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:qualified-electronic-signature",
        "label": "Qualified Electronic Signature"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:eu-digital-single-market",
        "label": "EU Digital Single Market"
      },
      {
        "@id": "urn:ngm:class:digital-regulation",
        "label": "Digital Regulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:standards-conformance-testing",
        "label": "Conformance Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-identity-management",
        "label": "Digital Identity Management"
      },
      {
        "@id": "urn:ngm:class:cross-border-authentication",
        "label": "Cross-Border Authentication"
      },
      {
        "@id": "urn:ngm:class:attribute-based-access-control",
        "label": "Attribute-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:trust-service-provider",
        "label": "Trust Service Provider"
      },
      {
        "@id": "urn:ngm:class:digital-infrastructure",
        "label": "Member State Digital Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifiers",
        "label": "Decentralised Identifiers"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:iso-iec-18013-5-m-dl",
        "label": "mDoc ISO 18013-5"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-protection-regulation",
        "label": "Data Protection Regulation"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:digital-markets-act",
        "label": "Digital Markets Act"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:european-commission",
        "label": "European Commission"
      },
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      },
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:social-login",
        "label": "Social Login"
      },
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralised Identity Provider"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity-standards",
        "label": "Digital Identity Standards"
      },
      {
        "@id": "urn:ngm:class:authentication-standards",
        "label": "Authentication Standards"
      },
      {
        "@id": "urn:ngm:class:nis2-directive",
        "label": "NIS2 Directive"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[eIDAS 2.0]] (Regulation EU 2024/1183) is the EU's reformed framework for [[Electronic Identification]], authentication, and [[Trust Services]], building upon the original [[eIDAS Regulation]] of 2014. Its centrepiece is the [[European Digital Identity Wallet]] (EUDIW), which member states must provide free of charge to all citizens and residents. The wallet stores [[Verifiable Credentials]], [[Qualified Electronic Signatures]], and qualified attribute attestations, enabling selective disclosure of personal attributes without revealing unnecessary data — a practical realisation of [[Self Sovereign Identity]] principles within a state-mandated architecture.
- ### Overview
  - eIDAS 2.0 addresses the fragmented landscape of national electronic identity schemes that limited cross-border digital service access across the EU. The original eIDAS (2014) established mutual recognition of national eID schemes and [[Trust Service Provider]] frameworks but saw low citizen adoption due to incompatible national implementations.
  - eIDAS 2.0 shifts from voluntary interoperability to mandatory provision: each member state must deploy at least one certified [[European Digital Identity Wallet]] by 2026. Large online platforms (gatekeeper services under the [[Digital Markets Act]] with over 45 million EU users) are legally obliged to accept the wallet as an authentication method.
  - The regulation entered into force in May 2024 (published as Regulation EU 2024/1183), amending Regulation EU 910/2014. Implementing acts and delegated regulations issued by the European Commission fill out the technical specifications.
  - The core policy rationale is threefold: reducing citizen dependence on private [[Social Login]] providers (Google, Apple, Meta), enabling cross-border access to public and private services, and strengthening [[Data Protection Regulation]] compliance by mandating attribute minimisation at the technical layer.
- ### Key Components
  - #### European Digital Identity Wallet (EUDIW)
    - A certified mobile or software application provided by each member state (or accredited private providers under state oversight)
    - Stores [[Qualified Electronic Attestation of Attributes]] (QEAAs) from authoritative sources such as national registers, universities, and professional bodies
    - Must support [[Selective Disclosure]] — presenting only the minimum necessary attributes (e.g., age-over-18 without revealing date of birth)
    - Wallet must be certified against the EUDIW [[Architecture and Reference Framework]] (ARF) maintained by the EU Commission
  - #### Qualified Electronic Attestations of Attributes (QEAAs)
    - Digitally signed claims issued by Qualified Trust Service Providers (QTSPs)
    - Analogous to [[Verifiable Credentials]] in W3C terminology
    - Carry legal equivalence to paper documents for specified use cases (driving licences, professional qualifications, university degrees)
    - Issued using [[mDoc ISO 18013-5]] and SD-JWT (Selective Disclosure JSON Web Token) formats
  - #### Trust Service Providers and Qualified Trust Services
    - [[Trust Service Provider]]s issue qualified certificates, electronic signatures, seals, timestamps, and registered delivery services
    - Qualified Trust Service Providers (QTSPs) issue QEAAs under stricter audit requirements
    - Supervised by national supervisory bodies; listed in the EU Trusted List published by each member state
    - [[ETSI]] produces the technical standards (EN 319 series) that underpin qualified trust services
  - #### Architecture and Reference Framework (ARF)
    - The technical blueprint for EUDIW interoperability developed by the EU Commission with member state expert groups
    - Specifies [[OpenID Connect]] for Verifiable Credential Issuance (OID4VCI) and OpenID for Verifiable Presentations (OID4VP) as the protocols for wallet-relying-party interaction
    - References [[Decentralised Identifiers]] (W3C DID) as an optional identity layer
    - Includes ISO/IEC 18013-5 (mDL) as the physical-proximity presentation protocol for document-like credentials
  - #### Selective Disclosure and Privacy Architecture
    - Central privacy principle: citizens share only the attributes strictly required by a service, not full identity documents
    - Achieved via [[Zero-Knowledge Proof]] techniques (e.g., BBS+ signatures) and SD-JWT selective disclosure
    - Prevents [[Federated Identity]] providers from tracking citizens across services (wallet presentations are unlinkable by design goal)
    - Directly reinforces [[GDPR]] data minimisation and purpose limitation principles
  - #### Relying Party Obligations
    - Online services above the threshold must register as relying parties with national authorities
    - Must specify and justify attribute requests; cannot demand more attributes than necessary
    - Must provide wallet-based authentication as an alternative to any existing authentication method
    - [[Authentication Standards]] compliance (LoA — Level of Assurance High) required for sensitive service access
- ### Applications and Use Cases
  - **Public Service Access**: Citizens authenticate to tax authorities, health portals, social security, and municipal services using the EUDIW rather than national eID cards or username/password schemes
  - **Age and Eligibility Verification**: Online retailers and platforms verify age (over-18, over-21) without collecting date of birth, reducing identity data exposure
  - **Professional Qualifications**: Lawyers, doctors, architects present certified digital credentials for cross-border recognition under EU mutual recognition directives
  - **University Diplomas and Academic Credentials**: Graduates carry [[Verifiable Credentials]] issued by their institution; employers verify without contacting the university
  - **Banking and KYC**: Financial institutions use EUDIW-attested identity for Know Your Customer onboarding, reducing friction and fraud in [[Decentralised Finance]] and traditional banking contexts
  - **Travel Documents**: Mobile Driving Licences (mDL, ISO 18013-5) stored in the wallet accepted for identity verification in physical-proximity contexts (car rental, age-gated venues)
  - **Electronic Contracts**: Qualified Electronic Signatures generated by the wallet carry full legal equivalence to handwritten signatures under EU law, enabling remote contract execution
  - **Healthcare**: Cross-border medical record access and prescription sharing via attested health credentials
  - **AI System Verification**: Potential integration with [[Artificial Intelligence Act]] compliance attestations, where AI system providers present qualified credentials proving conformity assessments
- ### Relationships
  - hasPart:: [[European Digital Identity Wallet]]
  - hasPart:: [[Qualified Electronic Attestation of Attributes]]
  - hasPart:: [[Qualified Electronic Signature]]
  - hasPart:: [[Architecture and Reference Framework]]
  - partOf:: [[EU Digital Single Market]]
  - partOf:: [[Digital Regulation]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Selective Disclosure]]
  - requires:: [[Conformance Testing]]
  - enables:: [[Digital Identity Management]]
  - enables:: [[Cross-Border Authentication]]
  - enables:: [[Attribute-Based Access Control]]
  - enables:: [[Self Sovereign Identity]]
  - dependsOn:: [[Trust Service Provider]]
  - implements:: [[Verifiable Credentials]]
  - implements:: [[Decentralised Identifiers]]
  - implements:: [[OpenID Connect]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Cryptographic Key Management]]
  - uses:: [[mDoc ISO 18013-5]]
  - supports:: [[Data Protection Regulation]]
  - supports:: [[GDPR]]
  - supports:: [[Digital Markets Act]]
  - standardizedBy:: [[European Commission]]
  - standardizedBy:: [[ETSI]]
  - standardizedBy:: [[W3C]]
  - contrastsWith:: [[Federated Identity]]
  - contrastsWith:: [[Social Login]]
  - contrastsWith:: [[Centralised Identity Provider]]
  - relatedTo:: [[Digital Identity Standards]]
  - relatedTo:: [[Authentication Standards]]
  - relatedTo:: [[NIS2 Directive]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Artificial Intelligence Act]]
- ### Standards and Context
  - **Regulation EU 2024/1183** — primary legal instrument amending Regulation EU 910/2014; published in the Official Journal of the EU in April 2024, entered into force May 2024
  - **W3C Verifiable Credentials Data Model** — the W3C specification underpinning QEAA data structures; [[W3C]] maintains ongoing work on VC 2.0
  - **W3C Decentralised Identifiers (DID) v1.0** — recommended identifier scheme for EUDIW subjects and issuers
  - **OpenID for Verifiable Credential Issuance (OID4VCI)** — [[OpenID Connect]] profile for issuing credentials to wallets; referenced in the ARF
  - **OpenID for Verifiable Presentations (OID4VP)** — protocol for wallet-to-relying-party credential presentation; enables selective disclosure
  - **ISO/IEC 18013-5 (mDL)** — mobile driving licence standard defining document format and proximity protocols; adopted in EUDIW ARF for physical-proximity use cases
  - **ETSI EN 319 series** — European technical standards for qualified trust services, electronic signatures, and PKI infrastructure; produced by [[ETSI]] Technical Committee ESI
  - **SOG-IS** — Senior Officials Group Information Systems Security; cryptographic algorithm agreements referenced for qualified signature schemes
  - **ENISA** — European Union Agency for Cybersecurity provides security guidelines and threat analysis for EUDIW implementations
  - **eIDAS Toolbox** — an EU Commission-coordinated expert group producing reference implementations, conformance test suites, and ARF updates via the Large Scale Pilot (LSP) programmes (POTENTIAL, EWC, DC4EU, NOBID)
  - **GDPR (Regulation EU 2016/679)** — eIDAS 2.0 is designed to reinforce [[GDPR]] data minimisation and purpose limitation; wallet presentations do not enable cross-service tracking
  - **Digital Markets Act (Regulation EU 2022/1925)** — mandates that gatekeeper platforms accept the EUDIW; [[Digital Markets Act]] and eIDAS 2.0 are complementary instruments in the EU digital regulatory stack
  - **NIS2 Directive (Directive EU 2022/2555)** — reinforces cybersecurity obligations for trust service providers and critical digital infrastructure; [[NIS2 Directive]] compliance intersects with EUDIW deployment requirements
- ### Current Landscape (2026)
  - The core wallet implementing acts under Article 5a were adopted in late 2024, starting a 24-month clock to the hard deadline of 24 December 2026, by which every EU Member State must offer at least one certified EU Digital Identity (EUDI) Wallet; private relying parties in regulated sectors and very large online platforms must accept it around December 2027.
  - Throughout 2025 the Commission adopted the trust-service implementing acts (IR 2025/1942 validation, IR 2025/1943 qualified certificates, IR 2025/1946 preservation, IR 2025/1567 remote QSCD management, IR 2025/1929 timestamps), and by early September 2025 22 implementing acts had been adopted (10 for the Wallet ecosystem, 12 for trust services).
  - The Architecture and Reference Framework has advanced rapidly, with ARF v2.6.0 released on 13 October 2025 fixing the interoperability stack: ISO/IEC 18013-5 mdoc/mDL and SD-JWT VC credential formats over OpenID4VCI (issuance) and OpenID4VP (presentation), with ECDSA P-256 and SHA-256 as the mandatory cryptographic baseline.
  - On 7 April 2026 the Commission adopted CIR (EU) 2026/798 mandating ETSI TS 119 461 v2.1.1 for remote onboarding, and on 29 April 2026 the eIDAS Trusted List ecosystem completed migration from TLv5 to TLv6 (LOTL notice C/2026/1944), enabling listing of new qualified services such as Qualified Electronic Attestations of Attributes (QEAAs), qualified archiving and electronic ledgers.
  - Member State readiness is uneven, with fewer than a third meeting benchmarks eight months before the deadline: France (France Identite), Austria (eAusweise) and Italy (IT-Wallet) are ahead, Germany has scheduled its state wallet for early January 2027 after a January 2026 sandbox, France plans public testing in H2 2026, and Poland is integrating the wallet into mObywatel.
  - The first four large-scale pilots (POTENTIAL, EWC, NOBID, DC4EU) concluded, with second-wave consortia now running: APTITUDE launched in October 2025 (EUR 20.3m, 117 organisations across 12 countries) alongside WE BUILD, and grant calls worth over EUR 200m opened in October 2025 for development, certification and issuance.
  - Sector integration is deepening: under the European Health Data Space Regulation (EU 2025/327) a draft Identity Management CIR would be the first EU instrument to mandate Member States issue sector-specific Electronic Attestations of Attributes to citizens' wallets at scale, while ENISA's draft candidate EUDIW cybersecurity certification scheme (v0.4.614) went out for feedback until 30 April 2026.
  - Open challenges as of 2026 include the distinction that 24 December 2026 mandates issuance and public-sector acceptance rather than continent-wide functional interoperability, incomplete relying-party registers coming online through 2026, still-pending certification schemes, and the standing target of equipping 80% of EU citizens with a wallet by 2030.

- ### References
  - 1. Hopae (2026). How to be eIDAS 2.0 ready in 2026. https://www.hopae.com/blog/how-to-be-eidas-2.0-ready-in-2026
  - 2. IDnow (2026). MILA's Regulatory Radar March 2026 (CIR 2026/798, TLv6 migration, EHDS EAAs). https://idnow.io/insights/blog/milas-regulatory-radar-march-2026-2/
  - 3. B2Trust (2026). eIDAS 2.0 Across EU-27: Implementation Status, Q2 2026. https://b2trust.com/en/blog/eidas-2-implementation-status-eu-27-q2-2026
  - 4. Vidos (2025). October 2025: Europe Achieves More Digital Identity Implementation Milestones (ARF 2.6.0, APTITUDE, grant calls). https://vidos.id/blog/october-2025-europe-achieves-more-digital-identity-implementation-milestones
  - 5. Evertrust (2026). EUDI Wallet 2026: Five Things Private PKI Teams Must Do. https://evertrust.io/blog/eudi-wallet-private-pki/

- ### Provenance
  - sources:: EU Official Journal (Regulation EU 2024/1183), European Commission EUDIW Architecture and Reference Framework (ARF v1.x), W3C Verifiable Credentials Data Model, OpenID Foundation OID4VCI/OID4VP specifications, ETSI EN 319 series, ISO 18013-5
  - updated:: 2026-06-13
