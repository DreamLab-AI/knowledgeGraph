public:: true
alias:: DecentralizedIdentity

# Decentralized Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decentralized-identity",
  "@type": "Page",
  "vc:slug": "decentralized-identity",
  "title": "Decentralized Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralized-identity",
  "@type": "Class",
  "label": "Decentralized Identity",
  "definition": "Decentralized Identity is an approach to digital identity management in which individuals, organisations, and devices hold cryptographic control over their own identifiers and credentials without dependence on any centralised identity provider. Built upon the W3C Decentralized Identifiers (DID) v1.0 Recommendation and the W3C Verifiable Credentials Data Model, it establishes a tripartite trust triangle of issuers, holders, and verifiers where credential authenticity is established through public-key cryptography anchored to a verifiable data registry — such as a distributed ledger or DNS — rather than through a privileged intermediary. This architecture realises self-sovereign identity principles: the subject generates and controls their key material, selectively discloses attributes using mechanisms such as BBS+ signatures or SD-JWT, and satisfies verifiers without exposing credentials to central surveillance or requiring real-time queries to the issuer.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:didcomm",
        "label": "DIDComm"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-keys",
        "label": "Cryptographic Keys"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:cross-border-authentication",
        "label": "Cross-Border Authentication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data Registry"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-did-specification",
        "label": "W3C DID Specification"
      },
      {
        "@id": "urn:ngm:class:w-3-c-verifiable-credentials-data-model",
        "label": "Verifiable Credentials Data Model"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:open-id-foundation",
        "label": "OpenID Foundation"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity-foundation",
        "label": "Decentralized Identity Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralised Identity Provider"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:self-sovereign-identity",
      "label": "Self Sovereign Identity"
    },
    {
      "@id": "urn:ngm:class:did-based-identity",
      "label": "DID-Based Identity"
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

- ### Definition
  - [[Decentralized Identity]] is a paradigm within [[Digital Identity]] that transfers cryptographic control of identifiers and credentials from centralised services to the identity subject itself. Using the [[W3C DID Specification]] and the [[Verifiable Credentials Data Model]], subjects anchor a [[DID Document]] containing public-key material to a [[Verifiable Data Registry]] — which may be a [[Blockchain]], a distributed ledger, or DNS — and then prove identity to verifiers through [[Cryptographic Signature]] without any real-time query to the credential issuer. [[Zero-Knowledge Proof]] schemes such as BBS+ enable [[Selective Disclosure]] of individual credential attributes, realising [[Privacy By Design]] at the protocol level. The paradigm is also known as [[Self-Sovereign Identity]] when emphasising the user's sovereignty over their own data, though the two terms have subtly different genealogies.

- ### Overview
  - Decentralized Identity addresses a structural weakness in prior internet identity architectures: every act of authentication discloses information to, and creates a dependency on, a centralised identity provider (IdP). Social login (Sign in with Google, Sign in with Facebook) aggregates behavioural signals across services; enterprise [[Federated Identity]] (SAML, WS-Federation) concentrates risk in enterprise IdPs; even [[OAuth]] delegations require the authorisation server to be online and trusted by both parties.
  - The decentralized model breaks this dependency through three mechanisms:
    - **Cryptographic identifiers**: A DID is a URI (e.g., `did:ion:EiClkZMDxPKqC9c-umQfTkR4vUEjPAl4GiNk1bdM`) that resolves to a DID Document containing the subject's public keys and service endpoints. The subject holds the corresponding private key; no registration with an IdP is needed.
    - **Verifiable Credentials**: Authoritative issuers (governments, universities, employers) cryptographically sign structured assertions about a holder. The holder stores these in a [[Digital Identity Wallet]] and presents them — or selective subsets of them — to verifiers without contacting the issuer.
    - **Peer-to-peer verification**: A verifier checks the issuer's signature against the issuer's DID Document and the holder's proof of key control, completing the verification loop without a central database query.
  - This architecture delivers three principal benefits: **privacy** (minimal disclosure, no tracking IdP), **resilience** (no single point of failure), and **interoperability** (cross-jurisdiction credentials when standards are shared).

- ### Key Components
  - **DID (Decentralized Identifier)**: A globally unique URI conforming to the W3C DID Syntax, consisting of a method (`did:method:identifier`). The method defines how the DID is created, resolved, updated, and deactivated on its specific [[Verifiable Data Registry]].
    - Common DID methods: `did:web` (DNS-anchored), `did:ion` (Bitcoin/Sidetree), `did:ethr` (Ethereum), `did:key` (pure cryptographic, no registry), `did:peer` (peer-to-peer, ephemeral).
  - **[[DID Document]]**: The JSON-LD document resolved from a DID URI; contains verification methods (public keys), authentication methods, key agreement methods, and optional service endpoints. Equivalent to a contact card under the subject's own control.
  - **[[Verifiable Credential]]**: A W3C-standardised JSON-LD data structure expressing a signed claim made by an issuer about a subject. Contains credential metadata, claim attributes (credentialSubject), and a cryptographic proof. May be encoded as JWT (compact) or as a JSON-LD document (rich semantics).
  - **[[Verifiable Presentation]]**: A package assembled by the holder presenting one or more Verifiable Credentials to a verifier, including proof of the holder's key control. May include zero-knowledge proofs for attribute-level selective disclosure.
  - **[[Digital Identity Wallet]]**: A software application (mobile, cloud, or hardware-backed) that stores private keys, DID Documents, and Verifiable Credentials; manages consent; and generates Verifiable Presentations on behalf of the user. Examples include the EUDI Wallet (EU mandate), Microsoft Authenticator with Verified ID, and open-source wallets such as Sphereon and Walt.id.
  - **[[DIDComm]]**: A secure, transport-independent messaging protocol specified by the [[Decentralized Identity Foundation]] that routes encrypted messages between DID-identified agents using the recipient's DID Document to discover key material. Enables agent-to-agent workflows (credential issuance, presentation requests, revocation notifications) independently of any centralised messaging platform.
  - **[[Verifiable Data Registry]]**: The persistence layer that stores DID Documents and (optionally) credential status lists. Implementations include public blockchains ([[Blockchain]]), permissioned distributed ledgers ([[Distributed Ledger Technology]]), IPFS, or DNS.
  - **[[Selective Disclosure]]**: The ability to reveal individual attributes from a credential without disclosing the full credential. Enabled by:
    - **SD-JWT** (Selective Disclosure for JWTs) — IETF draft; widely adopted in the EUDI Wallet ecosystem.
    - **BBS+ Signatures** — pairing-based cryptography enabling derived proofs; supports unlinkability across presentations.
    - **zk-SNARKs / zk-STARKs** — full [[Zero-Knowledge Proof]] predicates ("I am over 18") without attribute disclosure.
  - **[[Cryptographic Keys]]**: The root of trust for decentralized identity. Key types used include Ed25519 (signing), X25519 (key agreement), P-256 (NIST curve), and secp256k1 (Bitcoin/Ethereum compatibility). Key rotation and recovery are critical operational challenges.
  - **Credential Status / Revocation**: Mechanisms to signal that an issued credential has been revoked before its expiry. Approaches include [[Blockchain]]-anchored status registries, Status List 2021 (bitstring published at a URL), and accumulator-based revocation preserving privacy.

- ### DID Method Ecosystem
  - The DID method registry (maintained by W3C) lists over 100 registered methods. Key examples:
    - `did:web` — Resolves DID Documents from HTTPS URLs; simple to deploy, no blockchain; relies on DNS/TLS trust model.
    - `did:ion` — Anchors DID operations in Bitcoin via the Sidetree protocol; permissionless and censorship-resistant; operated by Microsoft.
    - `did:ethr` — Anchors DIDs in Ethereum smart contracts using the ERC-1056 registry; low-cost updates via off-chain resolution.
    - `did:peer` — Local, ephemeral DIDs for peer-to-peer relationships; no global registry; used in [[DIDComm]] agent connections.
    - `did:key` — Encodes a single public key as the DID itself; trivially self-contained; suitable for ephemeral or constrained environments.
    - `did:jwk` — Similar to `did:key` but uses JWK encoding; favoured in OpenID4VC flows.
  - Method selection involves trade-offs between decentralisation, cost, throughput, privacy (correlability of on-chain data), and operational simplicity.

- ### Trust Triangle and Protocol Flow
  - The canonical trust triangle has three actors:
    - **Issuer**: An authoritative entity (government ministry, university, employer, notary) that signs a Verifiable Credential and delivers it to the holder via a DIDComm issuance protocol or OpenID for Verifiable Credential Issuance (OID4VCI).
    - **Holder**: The identity subject — a person, organisation, or IoT device — who stores credentials in a [[Digital Identity Wallet]] and controls disclosure. The holder's DID anchors their public key material.
    - **Verifier** (Relying Party): A service or institution that requests a Verifiable Presentation from the holder, verifies the issuer's cryptographic signature and the holder's proof of key control, and makes an access-control decision. The OpenID for Verifiable Presentations (OID4VP) protocol standardises this exchange.
  - The verification step does NOT require contacting the issuer at verification time — only the issuer's DID Document (to retrieve the public key) and, optionally, a credential status endpoint (to check revocation) are needed.

- ### Applications and Use Cases
  - **Government Digital Identity**: The European Union Digital Identity (EUDI) Wallet, mandated by eIDAS 2.0 for all member states, targets citizens being able to use a single wallet for cross-border services — banking KYC, tax filing, prescription access, professional qualifications. The Architecture and Reference Framework (ARF) specifies SD-JWT and mdoc formats.
  - **Mobile Driving Licences (mDL)**: ISO/IEC 18013-5 defines the mDL format (mdoc), enabling digital driving licences stored on smartphones and verified via NFC/QR. Several US states (Utah, Colorado, Arizona, Maryland) have issued mDLs. Shares design principles with Verifiable Credentials.
  - **Academic Credentials**: Universities issuing tamper-proof digital diplomas and transcripts (MIT Digital Diplomas, Blockcerts format, European Diploma Supplement). Holders can share credentials with employers without transcript request delays.
  - **Know Your Customer (KYC) Reuse**: A holder completes KYC once with a regulated identity provider; the resulting Verifiable Credential can be presented to multiple financial institutions, reducing duplication and improving [[Data Sovereignty]].
  - **Healthcare**: Patient consent management, prescription credentials, professional medical licences. Decentralized identity enables patient-controlled health data sharing aligned with [[Privacy By Design]].
  - **[[IoT Device Authentication]]**: Devices hold DIDs anchored to a registry; mutual authentication between devices and services uses DIDComm or verifiable presentations, eliminating shared secrets and centralised certificate authorities.
  - **Supply Chain Provenance**: Organisations in a supply chain issue Verifiable Credentials about goods, certifications, and custody events; verifiers downstream check provenance without relying on a proprietary platform database.
  - **Age Verification**: Online platforms use zero-knowledge selective disclosure to verify that a user is over 18 without receiving their date of birth — satisfying regulatory requirements while minimising data collection.
  - **Enterprise Employee Credentials**: Organisations issue Verifiable Credentials for employment status, role, and permissions; employees present these to partner systems without directory synchronisation.

- ### Relationships
  - uses:: [[Cryptographic Keys]]
  - uses:: [[Blockchain]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Public Key Infrastructure]]
  - uses:: [[Distributed Ledger Technology]]
  - hasPart:: [[DID Document]]
  - hasPart:: [[Verifiable Credential]]
  - hasPart:: [[Credential Verification]]
  - hasPart:: [[DIDComm]]
  - hasPart:: [[Digital Identity Wallet]]
  - enables:: [[Privacy By Design]]
  - enables:: [[Self-Sovereign Identity]]
  - enables:: [[Selective Disclosure]]
  - enables:: [[Cross-Border Authentication]]
  - requires:: [[Verifiable Data Registry]]
  - requires:: [[Cryptographic Signature]]
  - implements:: [[W3C DID Specification]]
  - implements:: [[Verifiable Credentials Data Model]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[OpenID Foundation]]
  - standardizedBy:: [[Decentralized Identity Foundation]]
  - contrastsWith:: [[Federated Identity]]
  - contrastsWith:: [[Centralised Identity Provider]]
  - contrastsWith:: [[OAuth]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Web3]]
  - bridges-to:: [[IoT Device Authentication]]
  - relatedTo:: [[Access Control]]
  - relatedTo:: [[Data Sovereignty]]
  - relatedTo:: [[Trust Framework]]

- ### Standards and Governance
  - **W3C Decentralized Identifiers (DID) v1.0** — became a W3C Recommendation in July 2022. Defines the DID syntax, DID Documents, DID resolution, and the DID method abstraction layer.
  - **W3C Verifiable Credentials Data Model v1.1** — W3C Recommendation (2022); v2.0 in Candidate Recommendation (2024). Defines the Verifiable Credential and Verifiable Presentation formats in JSON-LD.
  - **SD-JWT (Selective Disclosure for JWTs)** — IETF draft (draft-ietf-oauth-selective-disclosure-jwt); adopted as the primary selective disclosure mechanism in the EUDI Wallet ARF and OpenID4VC.
  - **OpenID for Verifiable Credential Issuance (OID4VCI)** and **OpenID for Verifiable Presentations (OID4VP)** — [[OpenID Foundation]] specifications enabling OAuth/OIDC-compatible issuance and presentation of Verifiable Credentials. Widely implemented in enterprise wallets.
  - **DIF (Decentralized Identity Foundation)** — multi-stakeholder industry consortium developing interoperability specifications: DIDComm, Presentation Exchange, Credential Manifest, SIOPv2, and the Universal DID Resolver.
  - **ISO/IEC 18013-5** — Mobile Driving Licence (mDL) standard using the CBOR-encoded mdoc format; complementary to but distinct from W3C Verifiable Credentials.
  - **eIDAS 2.0 (EU Regulation 2024/1183)** — Mandates European Digital Identity Wallets for all EU member states by 2026; references EUDI ARF which mandates ISO 18013-5 mdoc and SD-JWT VC formats.
  - **NIST SP 800-63-4** — US National Institute of Standards and Technology identity assurance guidelines; increasingly references DID-compatible approaches for identity assurance levels.
  - **ETSI TS 119 475** — European standards for electronic attestations of attributes in the context of the EUDI Wallet ecosystem.

- ### Comparison with Federated Identity
  - | Dimension | Decentralized Identity | [[Federated Identity]] |
  - | Trust anchor | Cryptographic keys (subject-controlled) | Trusted Identity Provider |
  - | Privacy | Minimal disclosure; no tracking IdP | IdP learns when and where subject authenticates |
  - | Availability | Offline-capable once credential issued | Depends on IdP availability |
  - | Revocation | Credential status lists; complex | IdP revokes token in real time |
  - | Standards | W3C DID, W3C VC, SD-JWT, OID4VP | SAML, [[OAuth]], OpenID Connect |
  - | Adoption | Emerging; government mandates accelerating | Widely deployed in enterprise and consumer |

- ### Key Challenges
  - **Issuer bootstrapping**: The value of a digital identity wallet depends entirely on the willingness of authoritative issuers (governments, financial regulators, universities) to issue Verifiable Credentials. Technical standards precede issuer adoption by years.
  - **Key management and recovery**: If a subject loses their private key, they lose control of their DID. Hardware-backed key storage (TEE, Secure Enclave) and social or guardianship-based key recovery schemes are active research areas.
  - **Revocation privacy**: Checking credential status can reveal to the issuer which verifier the holder is authenticating to, undermining unlinkability. Privacy-preserving revocation (accumulators, status list sampling) adds complexity.
  - **Interoperability fragmentation**: The mdoc/ISO 18013-5 and W3C Verifiable Credentials ecosystems use different encodings (CBOR vs JSON-LD), creating potential bifurcation in the wallet ecosystem.
  - **Governance and liability**: Who bears liability when a fraudulently issued Verifiable Credential causes harm? Trust framework agreements between issuers, holders, and verifiers must resolve governance gaps that specifications leave open.
  - **Usability**: Self-sovereign identity requires users to understand and manage cryptographic keys — a significant usability barrier for general populations compared with password-based or biometric social login.

- ### Ecosystem and Implementations
  - **Microsoft Entra Verified ID** — Enterprise Verifiable Credential issuance and verification platform; uses `did:ion` and `did:web`; integrates with Azure Active Directory.
  - **MATTR Global** — New Zealand-based specialist in enterprise decentralized identity; pioneered BBS+ credential implementations.
  - **Sphereon** — European open-source digital identity wallet and credential platform aligned with EUDI ARF.
  - **Walt.id** — Open-source identity infrastructure (SSI Kit, Web Wallet); supports W3C VC, SD-JWT VC, and OID4VC protocols.
  - **IBM Digital Credentials** — Enterprise identity credential issuance and verification built on open standards.
  - **Trinsic** — Developer-focused credential platform providing API abstractions over decentralized identity protocols.
  - **Evernym / Avast** — Early pioneers of Hyperledger Indy-based self-sovereign identity; technology absorbed into Avast's identity products.
  - **Hyperledger AnonCreds** — Specification for privacy-preserving verifiable credentials with ZK-proof selective disclosure; originated in Hyperledger Indy; now a standalone Hyperledger project.

- ### Provenance
  - sources:: W3C DID v1.0 Recommendation (2022); W3C Verifiable Credentials Data Model v1.1/v2.0; EUDI ARF v1.4; DIF specifications; Christopher Allen, "The Path to Self-Sovereign Identity" (2016); IETF SD-JWT draft; ISO/IEC 18013-5.
  - updated:: 2026-06-13
