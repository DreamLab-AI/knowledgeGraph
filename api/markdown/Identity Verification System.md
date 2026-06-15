public:: true

# Identity Verification System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1e4e08721b1f8a5774d9e8146ff062cf2da115ddbe4e3859549ae2b20fc134ac",
  "@type": "Page",
  "vc:slug": "identity-verification-system",
  "title": "Identity Verification System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    },
    {
      "@id": "urn:visionflow:linked:onfido",
      "vc:label": "Onfido"
    },
    {
      "@id": "urn:visionflow:linked:i-proov",
      "vc:label": "iProov"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity Verification System"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-verification-system",
  "@type": "Class",
  "label": "Identity Verification System",
  "definition": "An Identity Verification System (IVS) is an integrated set of processes, technologies, and controls that establish with high assurance that a person presenting a claimed identity is genuinely that individual. It typically orchestrates document authentication, biometric matching with liveness detection, and cross-referential data validation against authoritative databases to produce a risk-scored trust signal. IVSs operate across regulated sectors — financial services, healthcare, government, and telecommunications — where Know Your Customer (KYC) and Anti-Money Laundering (AML) obligations mandate identity proofing at onboarding and at trust-elevation events. Modern IVSs increasingly integrate machine-learning fraud-detection models, cryptographic document signatures, and decentralised identity standards to resist synthetic-identity fraud and deepfake attacks.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:document-authentication",
        "label": "Document Authentication"
      },
      {
        "@id": "urn:ngm:class:liveness-detection",
        "label": "Liveness Detection"
      },
      {
        "@id": "urn:ngm:class:risk-scoring",
        "label": "Risk Scoring"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:optical-character-recognition",
        "label": "Optical Character Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:digital-onboarding",
        "label": "Digital Onboarding"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:identity-proofing",
        "label": "Identity Proofing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-sp-800-63",
        "label": "NIST SP 800-63"
      },
      {
        "@id": "urn:ngm:class:iso-iec",
        "label": "ISO/IEC 30107"
      },
      {
        "@id": "urn:ngm:class:eidas-regulation",
        "label": "eIDAS Regulation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:synthetic-identity-fraud",
        "label": "Synthetic Identity Fraud"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:identity-proofing-system",
      "label": "Identity Proofing System"
    },
    {
      "@id": "urn:ngm:class:kyc-verification-platform",
      "label": "KYC Verification Platform"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:identity-verification-system:d8faf5b79cd7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1e4e08721b1f8a5774d9e8146ff062cf2da115ddbe4e3859549ae2b20fc134ac"
  },
  "vc:resolutions": [
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Onfido]]",
      "resolved": "urn:visionflow:linked:onfido",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[iProov]]",
      "resolved": "urn:visionflow:linked:i-proov",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - An **Identity Verification System** (IVS) is an integrated platform of processes and technologies that establishes with high assurance that a person presenting a claimed identity is genuinely that individual. It orchestrates [[Document Authentication]], [[Biometric Authentication]] with [[Liveness Detection]], and cross-referential data checks against authoritative registries to produce a risk-scored trust signal consumed by downstream [[Access Control]] and [[Regulatory Compliance]] workflows. IVSs form the backbone of [[Know Your Customer]] and [[Anti-Money Laundering]] obligations across financial services, telecommunications, healthcare, and government sectors. Increasingly, modern IVSs incorporate [[Machine Learning]]-driven fraud models and bridge to emerging [[Decentralised Identity]] and [[Verifiable Credential]] architectures.

- ### Overview
  - Identity verification is the process of confirming that a self-asserted identity corresponds to a real, living person who is who they claim to be. It is distinct from [[Authentication]] (confirming a returning credential) and [[Authorisation]] (granting resource access) — verification precedes both, typically at account creation or trust-elevation events.
  - The core problem IVSs solve is the absence of a shared truth: the verifying party has no prior knowledge of the claimant, so evidence must be collected and validated from external authorities (government-issued documents, biometric templates, national registries).
  - Regulated sectors face legally mandated identity proofing. [[Know Your Customer]] obligations in banking, the EU [[eIDAS Regulation]] for electronic trust services, and [[NIST SP 800-63]] in the US public sector all prescribe assurance levels that dictate which verification methods must be applied.
  - IVSs increasingly use [[Machine Learning]] to detect fraudulent documents, identify deepfake attacks in selfie flows, and score synthetic-identity risk — making them a significant applied-AI domain as well as a security discipline.

- ### Key Components
  - #### Document Authentication
    - Capture of government-issued photo ID (passport, driving licence, national ID card) via camera or NFC.
    - [[Optical Character Recognition]] (OCR) to extract machine-readable data (MRZ, barcodes, chip data).
    - Security feature validation: holograms, microprint, UV patterns, digital chip signatures using [[Public Key Infrastructure]].
    - Tamper and forgery detection, including detection of printed or replayed document images.
  - #### Biometric Matching
    - [[Facial Recognition]] comparing a live selfie or video to the document portrait.
    - [[Liveness Detection]] to reject spoofs: printed photos, 3D masks, replay videos, AI-generated deepfakes.
    - ISO/IEC 30107-3 Presentation Attack Detection (PAD) compliance as the industry baseline.
    - Some systems also use voice biometrics or behavioural biometrics as secondary factors.
  - #### Data Verification
    - Cross-checking extracted identity fields (name, date of birth, address) against authoritative databases: electoral rolls, credit bureau records, national ID registries, sanctions lists.
    - [[Database Lookup]] against PEP (Politically Exposed Person) and global sanctions watch lists (OFAC, UN, EU).
    - Address verification and proof-of-address document checks.
  - #### Risk Scoring & Decisioning
    - [[Risk Scoring]] aggregates signals from document, biometric, and data steps into a composite fraud-risk score.
    - Rule engines and [[Machine Learning]] classifiers (gradient-boosted trees, neural networks) flag high-risk cases for manual review.
    - Decisions range from auto-approve to refer-to-agent to reject, with configurable thresholds.
  - #### Orchestration Layer
    - Workflow engine sequencing steps, branching on jurisdiction, document type, or risk level.
    - APIs consuming results from specialist sub-vendors (e.g. [[Onfido]] for documents, [[iProov]] for liveness).
    - Audit trail and evidence storage for regulatory record-keeping.

- ### Mechanisms
  - #### Assurance Levels
    - [[NIST SP 800-63]] defines Identity Assurance Levels (IAL1–IAL3) that specify acceptable evidence types and validation strength. IAL2 is the common baseline for financial onboarding; IAL3 requires in-person or supervised remote verification.
    - The EU's [[eIDAS Regulation]] defines Low, Substantial, and High assurance levels for electronic identity schemes; the eIDAS 2.0 revision introduces the EU Digital Identity Wallet.
  - #### Verification Modes
    - **Fully automated (straight-through processing)**: the majority of compliant applications are approved without human review, relying on ML confidence scores.
    - **Assisted remote identity proofing**: a live agent supervises the session via video, used for higher assurance levels.
    - **In-person proofing**: physical document inspection at a branch or notary, typically required for IAL3/High assurance.
  - #### Cryptographic Document Verification
    - Electronic passports (ePassports) contain an RFID chip signed by the issuing state's Document Signing Certificate, validated through the ICAO Public Key Directory (PKD). NFC-based chip reading provides the highest document assurance because the biometric template is cryptographically bound to the chip.
    - [[Cryptographic Signature]] chains from country-signing certificates through document-signing certificates to the chip provide tamper evidence that cannot be replicated by forgery.
  - #### Deepfake and Synthetic Identity Resistance
    - [[Liveness Detection]] algorithms classify each verification session as a genuine live face or a presentation attack. ISO/IEC 30107-3 categorises attacks and mandates testing against Level A and Level B attack categories.
    - [[Synthetic Identity Fraud]] — constructing an identity from a blend of real and fabricated attributes — is countered by cross-referencing multiple authoritative data sources and applying velocity checks across the IVS operator's applicant pool.

- ### Applications / Use Cases
  - **Financial Services Onboarding**: banks, challenger banks, and payment institutions use IVSs to onboard customers remotely while satisfying KYC/AML obligations and preventing account-opening fraud.
  - **Age Verification**: online platforms subject to age-gating requirements (gambling, alcohol, adult content) use lightweight IVS flows to confirm users meet minimum age thresholds without storing unnecessary personal data.
  - **Government Digital Services**: national digital identity schemes (UK DIATF, Australian myID, EU eIDAS Wallets) use IVSs to bind citizens to digital credentials reusable across government and private-sector services.
  - **Telecommunications**: mobile network operators must verify subscriber identity in many jurisdictions at SIM registration; IVS APIs handle this at point-of-sale.
  - **Healthcare**: patient identity proofing prevents record mismatching and insurance fraud; IVSs integrate with [[Electronic Health Record]] systems.
  - **Gig Economy & Sharing Platforms**: ride-hailing, short-term rental, and freelance marketplaces verify the identities of both service providers and high-value customers.
  - **Cryptocurrency Exchanges**: Virtual Asset Service Providers (VASPs) are subject to FATF Travel Rule and local KYC laws, requiring IVS for account creation.
  - **Metaverse & Immersive Platforms**: emerging requirement to bind avatar identities to verified real-world identities for age-gating, high-value transactions, and professional use cases.

- ### Relationships
  - partOf:: [[Identity Management]]
  - hasPart:: [[Document Authentication]], [[Liveness Detection]], [[Risk Scoring]]
  - requires:: [[Biometric Authentication]], [[Optical Character Recognition]], [[Database Lookup]]
  - enables:: [[Know Your Customer]], [[Anti-Money Laundering]], [[Digital Onboarding]], [[Access Control]]
  - dependsOn:: [[Machine Learning]], [[Public Key Infrastructure]]
  - implements:: [[Identity Proofing]]
  - uses:: [[Facial Recognition]], [[Natural Language Processing]], [[Cryptographic Signature]]
  - supports:: [[Fraud Detection]], [[Regulatory Compliance]]
  - standardizedBy:: [[NIST SP 800-63]], [[ISO/IEC 30107]], [[eIDAS Regulation]]
  - contrastsWith:: [[Authentication]], [[Authorisation]]
  - bridges-to:: [[Decentralised Identity]], [[Verifiable Credential]]
  - relatedTo:: [[Synthetic Identity Fraud]], [[Privacy-Preserving Computation]]

- ### Standards & Context
  - **NIST SP 800-63-3 / SP 800-63B**: US federal standard for digital identity guidelines, defining Identity Assurance Levels (IAL), Authenticator Assurance Levels (AAL), and Federation Assurance Levels (FAL). Widely adopted as a global reference even outside the US public sector.
  - **ISO/IEC 30107 (Biometric presentation attack detection)**: three-part standard covering terms and definitions, data formats, and testing and reporting. Part 3 provides the conformance framework used by liveness vendors.
  - **eIDAS Regulation (EU 910/2014)** and **eIDAS 2.0**: European framework for electronic identification and trust services. eIDAS 2.0 mandates the EU Digital Identity Wallet and sets High assurance level for cross-border recognition.
  - **ICAO Doc 9303**: International Civil Aviation Organisation standard for machine-readable travel documents (MRTDs), including ePassport chip specifications used in NFC-based document verification.
  - **FIDO2 / WebAuthn**: while primarily an [[Authentication]] standard, FIDO2 passkeys are increasingly issued after an initial IVS binding step, linking the phishing-resistant credential to a verified real-world identity.
  - **W3C Verifiable Credentials Data Model**: defines the data format for portable, cryptographically signed identity credentials that an IVS can issue as an output — enabling reuse in [[Decentralised Identity]] ecosystems.
  - **FATF Recommendations (Rec. 10 & 16)**: Financial Action Task Force guidance on customer due diligence and the Travel Rule drives global KYC/AML compliance requirements that IVSs satisfy.
  - **UK Digital Identity and Attributes Trust Framework (DIATF)**: the UK government's scheme certifying identity service providers operating in the UK at low, medium, and high confidence levels.
  - **SOC 2 Type II / ISO 27001**: security certification baselines that IVS vendors typically hold to assure clients of data-handling controls.

- ### Vendor & Ecosystem Landscape
  - **Document + biometric specialists**: [[Onfido]], Jumio, Mitek, Veriff — provide full-stack IVS APIs consumed by regulated businesses.
  - **Liveness specialists**: [[iProov]] (certified against ISO/IEC 30107-3 Level 2), FaceTec, Aware — focus on presentation attack detection as a component integrated into broader flows.
  - **Data verification networks**: GBG, LexisNexis Risk Solutions, Experian — provide cross-reference database services for address verification and watch-list screening.
  - **Decentralised identity players**: Microsoft Entra Verified ID, Dock, Polygon ID — issue [[Verifiable Credential]]s after an initial IVS step, enabling reusable digital identity.
  - **Platform integrations**: IVS capabilities are increasingly embedded in cloud identity platforms (AWS Rekognition Identity, Azure Active Directory External Identities) and CRM/fintech stacks.

- ### Privacy & Ethical Considerations
  - IVSs collect highly sensitive personal data including facial biometrics and identity documents. Compliance with [[GDPR]], CCPA, BIPA (US biometric-specific law), and similar frameworks governs collection, storage, and deletion.
  - [[Privacy-Preserving Computation]] techniques (on-device biometric matching, zero-knowledge proofs for attribute disclosure) are emerging to reduce the volume of sensitive data transmitted to central servers.
  - Algorithmic bias in facial recognition components can produce disparate error rates across demographic groups. ISO/IEC 19795 and emerging regulations mandate bias testing and reporting for biometric systems used in consequential decisions.
  - Reusable [[Verifiable Credential]] architectures reduce the need for repeated full verification, minimising data exposure over time.

- ### Provenance
  - sources:: NIST SP 800-63-3, ISO/IEC 30107-3, eIDAS Regulation (EU 910/2014), ICAO Doc 9303, W3C Verifiable Credentials Data Model, FATF Recommendations, UK DIATF
  - updated:: 2026-06-13
