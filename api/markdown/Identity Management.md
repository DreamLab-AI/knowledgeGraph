public:: true
alias:: IdentityManagement

# Identity Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:792464b1dee07addabad7582c27b11dc5c10703725a5c4e63fe701a9c063970b",
  "@type": "Page",
  "vc:slug": "identity-management",
  "title": "Identity Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:self-sovereign-identity",
      "vc:label": "Self-Sovereign Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity Management"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-management",
  "@type": "Class",
  "label": "Identity Management",
  "definition": "Identity management refers to the systems, protocols, and policies enabling individuals and organisations to create, control, and verify digital identities. In decentralised contexts this encompasses DID architectures, verifiable credentials, and self-sovereign identity models that eliminate reliance on centralised authorities through cryptographic proofs and distributed ledger infrastructure.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:infra-security-and-identity",
    "label": "Security and Identity"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy-Preserving Authentication"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-did-specification",
        "label": "W3C DID Specification"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:sidetree-protocol",
        "label": "Sidetree Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:iso-iec-24760",
        "label": "ISO-IEC 24760"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-identity",
        "label": "Centralised Identity"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence-ethics",
        "label": "Artificial Intelligence Ethics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:hyperledger-indy",
        "label": "Hyperledger Indy"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-identity-management",
      "label": "Digital Identity Management"
    },
    {
      "@id": "urn:ngm:class:identity-and-access-management",
      "label": "Identity and Access Management"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:identity-management:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:792464b1dee07addabad7582c27b11dc5c10703725a5c4e63fe701a9c063970b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Sovereign Identity]]",
      "resolved": "urn:visionflow:owl:class:self-sovereign-identity",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Identity management in blockchain contexts refers to the systems and protocols enabling individuals and organisations to create, control, and verify digital identities without reliance on centralised authorities. Decentralised identity (DID) architectures leverage blockchain technology to provide self-sovereign identity capabilities, where users maintain control over their personal data through cryptographic keys, verifiable credentials, and distributed ledger storage.

- ### Semantic Classification
  - owl-class:: infrastructure:IdentityManagement
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - enables:: [[Self-Sovereign Identity]]

- ### Content

  ## Overview

  Decentralised identity represents a fundamental shift from traditional identity management systems. A Decentralised Identifier (DID) is a type of digital identifier that allows individuals or organisations to prove who they are online without relying on a centralised authority such as a government, social media platform, or email provider. DIDs are globally unique identifiers created and controlled by the user without dependence on a central authority.

  ## Core Components

  ### Three-Party Trust Model
  - **Issuer**: Entity that creates and signs credentials (universities, governments, employers)
  - **Holder**: Individual or organisation that receives and stores credentials
  - **Verifier**: Party that requests and validates credentials for access or services

  ### Key Technical Elements
  - **Decentralised Identifiers (DIDs)**: Globally unique, user-controlled identifiers stored on blockchain
  - **Verifiable Credentials (VCs)**: Cryptographically signed attestations about identity attributes
  - **Digital Wallets**: User-controlled storage for credentials and cryptographic keys
  - **Blockchain/DLT**: Immutable infrastructure for identifier registration and resolution

  ## Self-Sovereign Identity (SSI)

  Decentralised identifiers form one of the three pillars of Self-Sovereign Identity, a model that gives individuals and organisations full ownership and control of their digital identities. The three pillars comprise:
  - Verifiable Credentials
  - Blockchain technology
  - Decentralised Identifiers

  ## Privacy and Security

  ### Data Protection
  - Identity data and Verifiable Credentials stored on individual devices, not centralised databases
  - DIDs do not contain personal data; they point to decentralised documents describing the DID subject
  - Encrypted, decentralised storage reduces risk of unauthorised access and data theft
  - Makes mass data breaches significantly more difficult

  ### Organisational Benefits
  - Reduced data collection minimises regulatory compliance burden
  - Fewer data storage responsibilities decrease cyberattack risk surface
  - Streamlined verification processes reduce operational overhead

  ## Market Development

  ### Market Size
  - Blockchain identity management market valued at USD 1.10 billion in 2024
  - Projected to reach USD 118.96 billion by 2032

  ### 2025 Developments
  - **Italy**: Announced launch of EU's first Digital (EUDI) Wallet in December 2024, beta testing Q1 2025
  - **XRP Ledger**: Enacted Digital Identity (DID) Amendment via XLS-40 in November 2024
  - Growing integration with national identity systems and regulatory compliance frameworks

  ## Major Platforms and Standards

  ### Sovrin
  - Based on Hyperledger Indy
  - Uses zero-knowledge proofs and CL-signature schemes for selective disclosure
  - Supports user privacy and verifiability
  - Permissioned architecture raises concerns regarding decentralisation

  ### uPort
  - Utilises Ethereum smart contracts for identity creation
  - Relies on ERC-725 and ERC-735 standards
  - Decentralised key management
  - Gas fees and throughput constraints impact scalability

  ### ION
  - Developed by Microsoft
  - Leverages Bitcoin blockchain through Sidetree protocol
  - Layer 2 solution for scalable DID operations
  - Anchored to Bitcoin for security guarantees

  ## Challenges

  ### Technical Limitations
  - Many DID systems lack scalability
  - Selective disclosure not universally supported
  - Integration with legacy identification documents remains difficult

  ### User Experience
  - Users responsible for managing cryptographic keys
  - Complexity challenges non-technical users
  - Lost private keys result in permanent identity loss
  - No central authority available for recovery

- ### Current Landscape (2026)
  - The EU's eIDAS 2.0 regulation (Regulation (EU) 2024/1183) entered into force on 20 May 2024 and obliges every member state to issue at least one European Digital Identity (EUDI) Wallet by Q4 2026, with mandatory acceptance by regulated private-sector services and Very Large Online Platforms from late 2027; the current canonical spec is the Architecture and Reference Framework (ARF) v1.4, standardising SD-JWT VC and ISO/IEC 18013-5 mDL credentials over OpenID4VP/OpenID4VCI.
  - Implementing acts are now landing: CIR (EU) 2026/798 (adopted 7 April 2026) makes ETSI TS 119 461 remote onboarding legally binding for wallet issuance, the eIDAS Trusted List ecosystem migrated from TLv5 to TLv6 in April 2026 to list new qualified trust services (QEAAs, qualified archiving, electronic ledgers), and four large-scale pilots (POTENTIAL, EWC, NOBID, DC4EU) have been validating the architecture since 2023.
  - Non-human identity (NHI) has become the dominant identity-security concern: CyberArk's 2025 Landscape and Gartner's 2025 IAM Summit put machine identities at roughly 82:1 over human identities (up to 40,000:1 in cloud-native estates), with 99% of service accounts over-permissioned; the OWASP NHI Top 10 was released in 2025 and Gartner's 2025 Machine Identity survey found 94% of organisations facing rising machine identities driven by AI agents.
  - Gartner has formalised new market categories reflecting this shift, including Identity Visibility and Intelligence Platforms (IVIP), Identity Security Posture Management (ISPM) and Identity Threat Detection and Response (ITDR), all featured in the Hype Cycle for Digital Identity 2026; the 2025 PAM Magic Quadrant now treats "PAM for machines" and workload/secrets management as table stakes.
  - Passkeys have crossed into the mainstream: Google reports hundreds of millions of consumer accounts using passkeys and Okta, Microsoft Entra ID, Ping and Duo now support passkey enrolment as a first-class factor, aligned with NIST SP 800-63-4 guidance pushing federal contractors toward phishing-resistant MFA; the FIDO Alliance published guidance in 2025 on harmonising passkeys with verifiable digital credentials.
  - The IAM market is consolidating and accelerating, with over $96bn in M&A during 2025 and European IAM spend up 10.8% in 2025 (reportedly a 24% YoY jump in January 2026), as vendors converge IGA, PAM and NHI governance and push zero standing privilege (ZSP) and just-in-time access, now increasingly demanded by cyber insurers.
  - Open challenges as of 2026 include securing autonomous AI agents that act as privileged machine identities using delegated human credentials, retrofitting ephemeral secretless attestation (Kubernetes/AWS IAM/OIDC) onto session-scoped PAM tooling, cross-jurisdiction runtime trust and audit for wallet-based credentials, and post-quantum readiness for identity cryptography still anchored on P-256/ECDSA.

- ### References
  - 1. Evertrust (2026). EUDI Wallet 2026: Five Things Private PKI Teams Must Prepare. https://evertrust.io/blog/eudi-wallet-private-pki/
  - 2. IDnow (2026). Mila's Regulatory Radar March 2026 — EU Digital Identity & Compliance Updates. https://idnow.io/insights/blog/milas-regulatory-radar-march-2026-2/
  - 3. Aembit (2026). Non-Human Identity Security: Key Takeaways From Gartner's 2025 PAM Magic Quadrant. https://aembit.io/blog/key-takeaways-on-non-human-identity-security-from-gartners-pam-report/
  - 4. Zluri (2025). What the Gartner IAM 2025 Summit Revealed About the Future of Identity Governance. https://www.zluri.com/blog/what-gartner-iam-2025-reveals-about-the-future-of-identity-governance
  - 5. CSO Online (2026). 6 Key Trends Reshaping the IAM Market. https://www.csoonline.com/article/4148282/6-key-trends-reshaping-the-iam-market.html
  - 6. FIDO Alliance (2025). Passkeys and Verifiable Digital Credentials: A Harmonized Path to Secure Digital Identity. https://fidoalliance.org/passkeys-and-verifiable-digital-credentials-a-harmonized-path-to-secure-digital-identity/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
