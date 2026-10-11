Decentralised Identity is a model for digital identity management in which individuals, organisations, and devices create, own, and control their own cryptographic identifiers and verifiable credentials without dependence on centralised identity providers or registries. Identifiers are anchored to a verifiable data registry — typically a blockchain or distributed ledger — as Decentralised Identifiers (DIDs) standardised by the W3C DID Core 1.0 specification, which defines a URI scheme resolving to a DID Document containing public keys and service endpoints. Credentials attesting to attributes of the DID subject are issued by trusted parties as W3C Verifiable Credentials, stored in a user-controlled digital wallet, and selectively disclosed to verifiers using zero-knowledge proofs or selective-disclosure mechanisms. The model operationalises Self-Sovereign Identity principles, giving subjects full autonomy over their identity data across systems and jurisdictions.

### Overview

- **Why it matters**
  - Traditional identity architectures require users to trust platform operators — social login providers, enterprise directories, or government registries — who may revoke access, share data with third parties, or become single points of failure. Decentralised Identity removes this dependency by making the user's own cryptographic key pair the root of trust.
  - The model is foundational to [[Self-Sovereign Identity]] (SSI), a philosophy articulated by Christopher Allen (2016) asserting that individuals must control their own identities without surrendering authority to external intermediaries.
  - Regulatory alignment: the EU [[eIDAS 2.0]] regulation mandates interoperable digital identity wallets for all EU member states, directly referencing W3C DID and Verifiable Credential infrastructure. The UK [[Digital Identity and Attributes Trust Framework]] (DIATF) pursues a similar goal.
- **How it works**
  - A DID is a URI of the form `did:<method>:<method-specific-id>` that resolves — via a DID resolver — to a [[DID Document]] specifying the controller's public keys, authentication methods, and service endpoints.
  - A [[DID Method]] defines the protocol for creating, reading, updating, and deactivating a DID on a particular [[Verifiable Data Registry]]. Methods include `did:key` (self-certifying, no ledger), `did:web` (DNS-anchored), `did:ethr` (Ethereum), `did:ion` (Bitcoin Sidetree), and `did:cheqd`.
  - [[Credential Schema]] standards define the structure of claims; an issuer signs a credential as a JSON-LD or JWT document and delivers it to the holder's [[Digital Identity Wallet]]. The holder assembles a [[Verifiable Presentation]] for a verifier, optionally applying BBS+ signatures or [[Zero-Knowledge Proof]] techniques for selective disclosure.

### Key Components

- **Decentralised Identifiers (DIDs)**
  - Globally unique, resolvable URIs under W3C DID Core 1.0 (Recommendation, July 2022)
  - Self-describing: the method segment identifies the resolution protocol
  - Controller-authorised: key rotation and deactivation are signed by the current controlling key pair
  - Related: [[DID Document]], [[DID Method]], [[DID Resolver]]
- **Verifiable Credentials (VCs)**
  - JSON-LD or JWT-encoded claim sets signed by an issuer's DID keys
  - Follow the W3C Verifiable Credentials Data Model 2.0 specification
  - Cryptographic proofs enable offline verification without querying the issuer
  - Related: [[Credential Schema]], [[Verifiable Presentation]], [[Credential Revocation]]
- **Digital Identity Wallet**
  - Secure software (or hardware) store for private keys, DIDs, and received credentials
  - Implements [[OpenID for Verifiable Credentials]] (OID4VC) for issuance (OID4VCI) and presentation (OID4VP) flows
  - May interoperate with [[FIDO2]] / [[WebAuthn]] for device-bound authentication
  - Related: [[Key Management]], [[Secure Enclave]], [[Mobile Device]]
- **Verifiable Data Registry**
  - The anchoring layer — a [[Blockchain]], distributed ledger, or web server — from which DID Documents are resolvable
  - Must provide persistence and tamper-evidence without disclosing identity data itself (privacy by design)
  - Related: [[Distributed Ledger]], [[Blockchain]], [[IPFS]]
- **Zero-Knowledge Proofs and Selective Disclosure**
  - Allow holders to prove properties of credentials (e.g., "over 18") without revealing the full credential or a correlatable identifier
  - Implemented via BBS+ signatures, [[SD-JWT]] (Selective Disclosure JWT), or [[Pedersen Commitment]] schemes
  - Related: [[Zero-Knowledge Proof]], [[Cryptography]], [[Privacy-Enhancing Technology]]
- **DID Methods**
  - Each method is a mini-specification defining CRUD operations on a specific registry
  - `did:key` — ephemeral, key material is the identifier; `did:web` — web-hosted DID Documents; `did:ethr` — Ethereum smart contract registry; `did:ion` — Bitcoin Sidetree overlay; `did:cheqd` — Cosmos SDK ledger with credential economics
  - Method maturity varies: `did:key` and `did:web` are widely deployed; `did:ion` is production-grade on Bitcoin mainnet

### Applications and Use Cases

- **Workforce and Enterprise Identity**
  - Employees hold cryptographically signed employment credentials in a corporate wallet, presenting them to internal systems and third-party partners without an enterprise IdP in the critical path
  - Reduces dependency on [[Active Directory]] and centralised [[Single Sign-On]] infrastructure
- **Educational Credentials**
  - Universities issue digitally signed degree and transcript credentials (ISO/IEC 23220, [[Europass Digital Credentials]], [[Open Badges]] v3)
  - Graduates present verified academic records to employers directly, eliminating manual transcript requests
- **Healthcare**
  - Patients hold portable health records and consent tokens; clinicians verify credentials without accessing a centralised EHR system
  - Supports [[FHIR]]-aligned credential schemas for interoperability
- **Government and Civil Identity**
  - [[eIDAS 2.0]] mandates EU Digital Identity Wallets for all member states by 2026, enabling cross-border recognition of national identities and professional qualifications
  - The [[EUDI Wallet]] Architecture and Reference Framework (ARF) specifies technical requirements
- **Supply Chain Provenance**
  - Products and shipments receive DIDs; provenance credentials flow between suppliers, logistics providers, and retailers without centralised platform intermediaries
  - Aligns with [[GS1]] Digital Link standards
- **AI Agent Authentication**
  - Autonomous [[AI Agent]] entities can hold DIDs and present verifiable credentials to access APIs, proving authorisation without hard-coded API keys
  - Bridges [[Decentralised Identity]] into AI infrastructure — a key cross-domain application

### Standards and Context

- **W3C DID Core 1.0** (July 2022) — defines the DID URI scheme, DID Document structure, and abstract DID Resolution protocol
- **W3C Verifiable Credentials Data Model 2.0** — defines the credential and presentation envelope, proof mechanisms, and status methods
- **OpenID for Verifiable Credentials (OID4VC)** — profiles of [[OAuth 2.0]] and [[OpenID Connect]] for VC issuance (OID4VCI), presentation (OID4VP), and self-issued identity (SIOPv2)
- **SD-JWT** (IETF draft) — a compact format enabling selective disclosure of individual credential claims using hash-based disclosure commitments
- **ISO/IEC 18013-5** — mobile driving licence (mDL) standard; the first mainstream government DID-adjacent credential deployed at scale
- **eIDAS 2.0** (EU Regulation 2024/1183) — mandates EU Digital Identity Wallets, references W3C VC and DID for technical layer
- **DIATF** (UK Digital Identity and Attributes Trust Framework) — certifies identity service providers against assurance levels
- **Trust over IP (ToIP) Foundation** — cross-industry consortium defining a four-layer trust stack combining DIDs, VCs, governance frameworks, and utility layers
- **Decentralised Identity Foundation (DIF)** — produces interoperability specifications including DIDComm, Presentation Exchange, and Credential Manifest
- **OpenWallet Foundation** — Linux Foundation project standardising open-source wallet engine components

### Provenance

## Merged from Decentralized Identity (needs reconciliation)
Decentralized Identity is an approach to digital identity management in which individuals, organisations, and devices hold cryptographic control over their own identifiers and credentials without dependence on any centralised identity provider. Built upon the W3C Decentralized Identifiers (DID) v1.0 Recommendation and the W3C Verifiable Credentials Data Model, it establishes a tripartite trust triangle of issuers, holders, and verifiers where credential authenticity is established through public-key cryptography anchored to a verifiable data registry — such as a distributed ledger or DNS — rather than through a privileged intermediary. This architecture realises self-sovereign identity principles: the subject generates and controls their key material, selectively discloses attributes using mechanisms such as BBS+ signatures or SD-JWT, and satisfies verifiers without exposing credentials to central surveillance or requiring real-time queries to the issuer.

### Overview

- Decentralized Identity addresses a structural weakness in prior internet identity architectures: every act of authentication discloses information to, and creates a dependency on, a centralised identity provider (IdP). Social login (Sign in with Google, Sign in with Facebook) aggregates behavioural signals across services; enterprise [[Federated Identity]] (SAML, WS-Federation) concentrates risk in enterprise IdPs; even [[OAuth]] delegations require the authorisation server to be online and trusted by both parties.
- The decentralized model breaks this dependency through three mechanisms:
  - **Cryptographic identifiers**: A DID is a URI (e.g., `did:ion:EiClkZMDxPKqC9c-umQfTkR4vUEjPAl4GiNk1bdM`) that resolves to a DID Document containing the subject's public keys and service endpoints. The subject holds the corresponding private key; no registration with an IdP is needed.
  - **Verifiable Credentials**: Authoritative issuers (governments, universities, employers) cryptographically sign structured assertions about a holder. The holder stores these in a [[Digital Identity Wallet]] and presents them — or selective subsets of them — to verifiers without contacting the issuer.
  - **Peer-to-peer verification**: A verifier checks the issuer's signature against the issuer's DID Document and the holder's proof of key control, completing the verification loop without a central database query.
- This architecture delivers three principal benefits: **privacy** (minimal disclosure, no tracking IdP), **resilience** (no single point of failure), and **interoperability** (cross-jurisdiction credentials when standards are shared).

### Key Components

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

### DID Method Ecosystem

- The DID method registry (maintained by W3C) lists over 100 registered methods. Key examples:
  - `did:web` — Resolves DID Documents from HTTPS URLs; simple to deploy, no blockchain; relies on DNS/TLS trust model.
  - `did:ion` — Anchors DID operations in Bitcoin via the Sidetree protocol; permissionless and censorship-resistant; operated by Microsoft.
  - `did:ethr` — Anchors DIDs in Ethereum smart contracts using the ERC-1056 registry; low-cost updates via off-chain resolution.
  - `did:peer` — Local, ephemeral DIDs for peer-to-peer relationships; no global registry; used in [[DIDComm]] agent connections.
  - `did:key` — Encodes a single public key as the DID itself; trivially self-contained; suitable for ephemeral or constrained environments.
  - `did:jwk` — Similar to `did:key` but uses JWK encoding; favoured in OpenID4VC flows.
- Method selection involves trade-offs between decentralisation, cost, throughput, privacy (correlability of on-chain data), and operational simplicity.

### Trust Triangle and Protocol Flow

- The canonical trust triangle has three actors:
  - **Issuer**: An authoritative entity (government ministry, university, employer, notary) that signs a Verifiable Credential and delivers it to the holder via a DIDComm issuance protocol or OpenID for Verifiable Credential Issuance (OID4VCI).
  - **Holder**: The identity subject — a person, organisation, or IoT device — who stores credentials in a [[Digital Identity Wallet]] and controls disclosure. The holder's DID anchors their public key material.
  - **Verifier** (Relying Party): A service or institution that requests a Verifiable Presentation from the holder, verifies the issuer's cryptographic signature and the holder's proof of key control, and makes an access-control decision. The OpenID for Verifiable Presentations (OID4VP) protocol standardises this exchange.
- The verification step does NOT require contacting the issuer at verification time — only the issuer's DID Document (to retrieve the public key) and, optionally, a credential status endpoint (to check revocation) are needed.

### Applications and Use Cases

- **Government Digital Identity**: The European Union Digital Identity (EUDI) Wallet, mandated by eIDAS 2.0 for all member states, targets citizens being able to use a single wallet for cross-border services — banking KYC, tax filing, prescription access, professional qualifications. The Architecture and Reference Framework (ARF) specifies SD-JWT and mdoc formats.
- **Mobile Driving Licences (mDL)**: ISO/IEC 18013-5 defines the mDL format (mdoc), enabling digital driving licences stored on smartphones and verified via NFC/QR. Several US states (Utah, Colorado, Arizona, Maryland) have issued mDLs. Shares design principles with Verifiable Credentials.
- **Academic Credentials**: Universities issuing tamper-proof digital diplomas and transcripts (MIT Digital Diplomas, Blockcerts format, European Diploma Supplement). Holders can share credentials with employers without transcript request delays.
- **Know Your Customer (KYC) Reuse**: A holder completes KYC once with a regulated identity provider; the resulting Verifiable Credential can be presented to multiple financial institutions, reducing duplication and improving [[Data Sovereignty]].
- **Healthcare**: Patient consent management, prescription credentials, professional medical licences. Decentralized identity enables patient-controlled health data sharing aligned with [[Privacy By Design]].
- **[[IoT Device Authentication]]**: Devices hold DIDs anchored to a registry; mutual authentication between devices and services uses DIDComm or verifiable presentations, eliminating shared secrets and centralised certificate authorities.
- **Supply Chain Provenance**: Organisations in a supply chain issue Verifiable Credentials about goods, certifications, and custody events; verifiers downstream check provenance without relying on a proprietary platform database.
- **Age Verification**: Online platforms use zero-knowledge selective disclosure to verify that a user is over 18 without receiving their date of birth — satisfying regulatory requirements while minimising data collection.
- **Enterprise Employee Credentials**: Organisations issue Verifiable Credentials for employment status, role, and permissions; employees present these to partner systems without directory synchronisation.

### Standards and Governance

- **W3C Decentralized Identifiers (DID) v1.0** — became a W3C Recommendation in July 2022. Defines the DID syntax, DID Documents, DID resolution, and the DID method abstraction layer.
- **W3C Verifiable Credentials Data Model v1.1** — W3C Recommendation (2022); v2.0 in Candidate Recommendation (2024). Defines the Verifiable Credential and Verifiable Presentation formats in JSON-LD.
- **SD-JWT (Selective Disclosure for JWTs)** — IETF draft (draft-ietf-oauth-selective-disclosure-jwt); adopted as the primary selective disclosure mechanism in the EUDI Wallet ARF and OpenID4VC.
- **OpenID for Verifiable Credential Issuance (OID4VCI)** and **OpenID for Verifiable Presentations (OID4VP)** — [[OpenID Foundation]] specifications enabling OAuth/OIDC-compatible issuance and presentation of Verifiable Credentials. Widely implemented in enterprise wallets.
- **DIF (Decentralized Identity Foundation)** — multi-stakeholder industry consortium developing interoperability specifications: DIDComm, Presentation Exchange, Credential Manifest, SIOPv2, and the Universal DID Resolver.
- **ISO/IEC 18013-5** — Mobile Driving Licence (mDL) standard using the CBOR-encoded mdoc format; complementary to but distinct from W3C Verifiable Credentials.
- **eIDAS 2.0 (EU Regulation 2024/1183)** — Mandates European Digital Identity Wallets for all EU member states by 2026; references EUDI ARF which mandates ISO 18013-5 mdoc and SD-JWT VC formats.
- **NIST SP 800-63-4** — US National Institute of Standards and Technology identity assurance guidelines; increasingly references DID-compatible approaches for identity assurance levels.
- **ETSI TS 119 475** — European standards for electronic attestations of attributes in the context of the EUDI Wallet ecosystem.

### Comparison with Federated Identity

| Dimension | Decentralized Identity | [[Federated Identity]] |

| Trust anchor | Cryptographic keys (subject-controlled) | Trusted Identity Provider |

| Privacy | Minimal disclosure; no tracking IdP | IdP learns when and where subject authenticates |

| Availability | Offline-capable once credential issued | Depends on IdP availability |

| Revocation | Credential status lists; complex | IdP revokes token in real time |

| Standards | W3C DID, W3C VC, SD-JWT, OID4VP | SAML, [[OAuth]], OpenID Connect |

| Adoption | Emerging; government mandates accelerating | Widely deployed in enterprise and consumer |

### Key Challenges

- **Issuer bootstrapping**: The value of a digital identity wallet depends entirely on the willingness of authoritative issuers (governments, financial regulators, universities) to issue Verifiable Credentials. Technical standards precede issuer adoption by years.
- **Key management and recovery**: If a subject loses their private key, they lose control of their DID. Hardware-backed key storage (TEE, Secure Enclave) and social or guardianship-based key recovery schemes are active research areas.
- **Revocation privacy**: Checking credential status can reveal to the issuer which verifier the holder is authenticating to, undermining unlinkability. Privacy-preserving revocation (accumulators, status list sampling) adds complexity.
- **Interoperability fragmentation**: The mdoc/ISO 18013-5 and W3C Verifiable Credentials ecosystems use different encodings (CBOR vs JSON-LD), creating potential bifurcation in the wallet ecosystem.
- **Governance and liability**: Who bears liability when a fraudulently issued Verifiable Credential causes harm? Trust framework agreements between issuers, holders, and verifiers must resolve governance gaps that specifications leave open.
- **Usability**: Self-sovereign identity requires users to understand and manage cryptographic keys — a significant usability barrier for general populations compared with password-based or biometric social login.

### Ecosystem and Implementations

- **Microsoft Entra Verified ID** — Enterprise Verifiable Credential issuance and verification platform; uses `did:ion` and `did:web`; integrates with Azure Active Directory.
- **MATTR Global** — New Zealand-based specialist in enterprise decentralized identity; pioneered BBS+ credential implementations.
- **Sphereon** — European open-source digital identity wallet and credential platform aligned with EUDI ARF.
- **Walt.id** — Open-source identity infrastructure (SSI Kit, Web Wallet); supports W3C VC, SD-JWT VC, and OID4VC protocols.
- **IBM Digital Credentials** — Enterprise identity credential issuance and verification built on open standards.
- **Trinsic** — Developer-focused credential platform providing API abstractions over decentralized identity protocols.
- **Evernym / Avast** — Early pioneers of Hyperledger Indy-based self-sovereign identity; technology absorbed into Avast's identity products.
- **Hyperledger AnonCreds** — Specification for privacy-preserving verifiable credentials with ZK-proof selective disclosure; originated in Hyperledger Indy; now a standalone Hyperledger project.

### Current Landscape (2026)

- The W3C published the Verifiable Credentials Data Model 2.0 as a full Recommendation in 2025, standardising a JSON-LD credential structure and selective-disclosure primitives (including BBS+ signatures adopted by most DID methods in late 2025) that now underpin production wallet stacks.
- eIDAS 2.0 (Regulation (EU) 2024/1183, in force 20 May 2024) has turned decentralised identity from experiment into mandatory infrastructure: all 27 member states must offer at least one certified EU Digital Identity (EUDI) Wallet by end-2026, with regulated private-sector relying parties and DSA very-large online platforms obliged to accept it from 2027.
- The EUDI Architecture and Reference Framework (ARF v1.4, iterating toward v2.4.0 in early 2026) fixes the technical stack on ISO/IEC 18013-5 mDL (mdoc) plus SD-JWT VC for selective disclosure, with OpenID4VCI for issuance and OpenID4VP for presentation over eIDAS Trusted Lists; ISO/IEC TS 18013-7:2024 extends mdoc to remote/online presentation.
- The four EU large-scale pilots (POTENTIAL, EWC, NOBID, DC4EU) concluded in 2025; POTENTIAL alone ran over 1,300 interoperability tests and 249 cross-border scenarios across 19 member states, and the EUDI Wallets Launchpad event in Brussels (December 2025) demonstrated working cross-border conformance.
- Conformance and certification tightened in 2026: ENISA published a draft EUDIW cybersecurity certification scheme (v0.4, consultation to 30 April 2026), and the OpenID Foundation's OpenID4VC High Assurance Interoperability Profile (HAIP) entered self-certification in February 2026.
- Beyond the EU, the UK confirmed in January 2026 that digital identity stays voluntary while scaling the GOV.UK Wallet and the statutory DVS Trust Framework (48 certified providers); Ireland launched a c.2,000-person wallet pilot in Q1 2026 ahead of its EU Council presidency.
- Open challenges as of 2026 remain acute: poor interoperability between competing DID methods and trust frameworks, privacy-friendly revocation and unlinkability that conflicts with issuer/verifier charging and payment flows, hardware secure-element binding for anonymous credentials, and crypto-agility for post-quantum migration beyond the mandated P-256/ECDSA baseline.

### References

- 1. European Data Protection Supervisor (2025). TechDispatch #3/2025 — Digital Identity Wallets. https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en
- 2. GS1 (2025). Verifiable Credentials and Decentralised Identifiers — Technology Landscape. https://ref.gs1.org/docs/2025/VCs-and-DIDs-tech-landscape
- 3. Cloud Security Alliance Labs (2026). ENISA EUDIW Certification: AI Agent Identity in EU Markets. https://labs.cloudsecurityalliance.org/research/csa-research-note-enisa-eu-digital-wallet-ai-agent-identity/
- 4. Evertrust (2026). EUDI Wallet 2026: Five Things Private PKI Teams Must Know. https://evertrust.io/blog/eudi-wallet-private-pki/
- 5. Riigi Infosüsteemi Amet / POTENTIAL LSP (2025). Main Findings, Lessons Learned and Recommendations. https://www.ria.ee/sites/default/files/documents/2025-10/Potential-takeaways-and-lessons-learned.pdf
- 6. Vidos (2026). Digital Identity Blog — 2026 developments (GOV.UK Wallet, ARF v2.4.0, EUDI Launchpad). https://vidos.id/blog

### Provenance

