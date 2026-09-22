public:: true

# Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:193a889e1588631612acdaddd46b8059f1af8e677e183e15b3127a2d184b0ef0",
  "@type": "Page",
  "vc:slug": "identity",
  "title": "Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9630"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity"
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
  "@id": "urn:ngm:class:identity",
  "@type": "Class",
  "label": "Identity",
  "definition": "Identity is the complete, verifiable representation of a principal — person, organisation, device, or agent — within a digital system, constituted by a set of attributes, credentials, and cryptographically anchored claims that distinguish that principal from all others. Digital identity underpins authentication, authorisation, and accountability across networked systems, and increasingly extends to self-sovereign, decentralised forms in which control of the identity record rests with the subject rather than a centralised authority. In spatial computing and metaverse contexts, identity further encompasses persistent avatars, reputational history, and cross-platform portability anchored to decentralised identifiers (DIDs). The coherent management of identity is the foundation upon which access control, trust hierarchies, and privacy-preserving interactions are built.",
  "domain": "security",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:verifiable-credential-standard",
        "label": "Credential"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:anonymity",
        "label": "Anonymity"
      },
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      },
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c-did-core",
        "label": "W3C DID Core"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:identity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:193a889e1588631612acdaddd46b8059f1af8e677e183e15b3127a2d184b0ef0"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - Identity is the complete, verifiable representation of a principal — person, organisation, device, or software agent — constituted by attributes, [[Credential]]s, and cryptographically anchored claims that distinguish that principal from all others within a digital system. It is the enabling substrate for [[Authentication]], [[Authorisation]], and [[Accountability]], and in decentralised contexts is anchored to [[Decentralised Identifier]]s (DIDs) managed by the subject rather than a central authority. Modern identity systems increasingly leverage [[Zero Knowledge Proof]]s and [[Verifiable Credentials]] to allow selective disclosure, balancing transparency with [[Privacy]].

- ### Overview
  - Identity is one of the most foundational concepts in computing and society. In digital systems, identity answers the question "who or what is this entity?" and provides the anchor point for every subsequent security and governance decision.
  - **Why it matters**: Without reliable identity, there can be no meaningful [[Access Control]], no enforceable [[Authorisation]], and no attribution for actions taken. Every networked interaction — from logging into an application to executing a cross-chain token transfer — depends on resolving the identity of the participating principals.
  - **Evolution**: Early digital identity relied on centralised directories (LDAP, Active Directory) and simple username/password pairs. Federated models (SAML, OAuth 2.0, OpenID Connect) emerged to reduce siloed accounts. The current frontier is [[Self-Sovereign Identity]] (SSI), in which the individual controls their own identity record via [[Decentralised Identifier]]s and [[Verifiable Credentials]] — removing the need to trust any single identity provider.
  - **Scope**: Identity applies to humans, legal entities, IoT devices, [[AI Agent]]s, and virtual constructs such as [[Avatar]]s in spatial environments. Each principal type introduces distinct lifecycle and revocation challenges.

- ### Key Components
  - **Identifier**: A persistent, unique reference — a username, DID, X.509 subject DN, or blockchain address — that names the identity without necessarily revealing attributes.
    - Identifiers may be opaque (UUID, DID) or semantic (email address). Opacity enhances [[Privacy]] by preventing correlation.
    - Persistence is distinct from the entity itself; identifiers can outlive the principal's control of a key and must support rotation without losing continuity.
  - **Credentials**: Assertions about the principal (name, role, affiliation) issued by a trusted party. In W3C parlance these are [[Verifiable Credentials]], signed with the issuer's key and presented via [[Verifiable Presentation]]s.
    - Credentials encode the issuer–subject relationship; the relying party trusts the issuer's signature, not the presenter directly.
    - Bearer credentials convey rights on possession; bound credentials cryptographically bind the credential to the holder's key, preventing theft.
  - **Decentralised Identifiers (DIDs)**: URN-like identifiers specified in the [[W3C DID Core]] standard, resolvable to a DID Document containing [[Public Key Infrastructure]] material and service endpoints, without a central registry.
    - DID methods (did:web, did:ion, did:key, did:ethr) differ in their anchoring mechanism, resolution trust model, and cost.
    - DID Documents are mutable; key rotation and service endpoint updates enable long-lived identifiers that remain under the subject's control.
  - **Authentication factors**: Something you know (password), have (hardware token, [[Smart Card]]), or are (biometric). Multi-factor combinations raise assurance level per [[NIST SP 800-63]].
    - FIDO2 / WebAuthn eliminates shared secrets entirely by binding authentication to a device-resident private key, preventing phishing.
    - Continuous or contextual authentication re-evaluates identity assurance during a session based on behaviour signals rather than only at login.
  - **Verifiable Claims**: [[Verifiable Claim]]s are machine-readable statements about a subject, cryptographically signed by an issuer and verifiable by any relying party, forming the payload of the [[Verifiable Credentials]] ecosystem.
    - Selective disclosure — enabled by BBS+ signatures or SD-JWT — lets a holder reveal only the subset of claims needed for a given interaction.
    - Derived credentials let a holder prove a predicate (e.g. "age ≥ 18") without revealing the underlying attribute value, using [[Zero Knowledge Proof]] techniques.
  - **Identity Proofing**: The process of binding an identifier to a real-world entity — in-person, remote, or automated — with an assurance level matched to the risk of the service being accessed.
    - Remote identity proofing via document scanning and liveness detection is increasingly automated but raises [[Bias]] and accessibility concerns.
    - Graduated proofing allows incremental assurance uplift as users engage with higher-risk services over time.
  - **Attribute Aggregation**: Combining claims from multiple issuers (government, employer, university) into a coherent identity profile usable across contexts.
    - Aggregation requires consent management and auditability to comply with data protection regulations such as GDPR and CCPA.
  - **Revocation**: Mechanisms (CRLs, OCSP, status lists) for invalidating credentials when a principal's rights change or a key is compromised. A critical operational concern in [[Public Key Infrastructure]].
    - W3C Status List 2021 provides a privacy-preserving, bitstring-based revocation mechanism for [[Verifiable Credentials]] without per-credential lookups.

- ### Identity Models
  - **Centralised identity**: A single authority (corporate directory, government register) issues and manages identifiers. High control, single point of failure and trust.
  - **Federated identity**: [[Federated Identity]] allows credentials issued by one domain (an IdP) to be accepted by relying parties in other domains via protocols such as SAML 2.0, [[OpenID Connect]], and [[OAuth]]. Reduces account proliferation without full decentralisation.
  - **Self-Sovereign Identity (SSI)**: [[Self-Sovereign Identity]] places the identifier and credentials under the subject's direct control, typically via a digital wallet and blockchain-anchored [[Decentralised Identifier]]s. Vendors include Hyperledger Aries/Indy, Evernym, and Microsoft Entra Verified ID.
  - **Anonymous / Pseudonymous identity**: [[Anonymity]] removes linkability to a real-world entity; [[Pseudonymity]] permits consistent interaction under a stable pseudonym without revealing true identity. Both contrast with identified interaction and are supported via [[Zero Knowledge Proof]]s and ring signatures in privacy-preserving designs.

- ### Applications
  - **Enterprise IAM**: Identity and [[Access Management]] in organisations links workforce identities to roles and entitlements, enforcing least-privilege access to systems and data.
  - **Government digital identity**: National identity schemes (UK Gov.uk Verify successor, EU eIDAS 2.0 / EUDI Wallet) establish high-assurance digital equivalents of physical ID documents, enabling cross-border service access.
  - **Web3 / blockchain**: Wallet addresses serve as pseudonymous identifiers on public chains; emerging DID-based identity layers (e.g., Polygon ID, Veramo) add verifiable attribute overlays for DeFi KYC and DAO governance.
  - **IoT device identity**: Industrial and consumer devices require stable, rotatable identities for firmware updates, telemetry attribution, and command authorisation. [[Public Key Infrastructure]] and TPM-backed attestation are standard approaches.
  - **Metaverse / spatial computing**: [[Avatar]] identity in virtual worlds must be persistent, cross-platform, and linked to real-world legal identity where regulation demands it (e.g., financial services). [[Decentralised Identifier]]s enable portable avatar credentials.
  - **AI agent identity**: [[AI Agent]]s operating autonomously in agentic pipelines require verifiable identities so that their actions can be audited, their permissions scoped, and their outputs attributed. DID-based agent identity is an active area of standardisation.
  - **Supply chain**: Entity identity for organisations, products, and logistics nodes underpins [[Supply Chain]] traceability, anti-counterfeiting, and provenance attestation via [[Verifiable Credentials]].

- ### Relationships
  - requires:: [[Authentication]]
  - requires:: [[Cryptography]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Digital Signature]]
  - enables:: [[Access Control]]
  - enables:: [[Authorisation]]
  - enables:: [[Trust]]
  - enables:: [[Privacy]]
  - enables:: [[Accountability]]
  - hasPart:: [[Credential]]
  - hasPart:: [[Verifiable Claim]]
  - hasPart:: [[Decentralised Identifier]]
  - implements:: [[Self-Sovereign Identity]]
  - implements:: [[Federated Identity]]
  - dependsOn:: [[Zero Knowledge Proof]]
  - dependsOn:: [[Distributed Ledger]]
  - contrastsWith:: [[Anonymity]]
  - contrastsWith:: [[Pseudonymity]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Decentralised Identity]]
  - relatedTo:: [[Digital Twin]]
  - relatedTo:: [[Reputation]]
  - bridges-to:: [[Avatar]]
  - bridges-to:: [[AI Agent]]
  - standardizedBy:: [[W3C DID Core]]
  - standardizedBy:: [[Verifiable Credentials]]

- ### Standards & Context
  - **W3C DID Core 1.0** (2022): Specifies the Decentralised Identifiers data model and resolution protocol. Foundational to SSI ecosystems.
  - **W3C Verifiable Credentials Data Model 2.0** (2024): Defines the format, proof mechanisms, and ecosystem roles (issuer, holder, verifier) for [[Verifiable Credentials]].
  - **OpenID for Verifiable Credentials (OID4VC)**: OpenID Foundation extensions enabling VC issuance and presentation over [[OpenID Connect]] flows — primary bridge between SSI and existing OAuth/OIDC deployments.
  - **NIST SP 800-63**: US federal digital identity guidelines defining identity assurance levels (IAL) and authentication assurance levels (AAL), widely adopted beyond the US as a risk framework.
  - **EU eIDAS 2.0 / EUDI Wallet**: European regulation mandating cross-border digital identity for citizens and legal entities, with a wallet architecture built on W3C VC and DID primitives.
  - **ISO/IEC 24760**: International standard defining a framework for identity management covering the identity lifecycle, attributes, and processes.
  - **FIDO2 / WebAuthn**: W3C / FIDO Alliance standards enabling strong, phishing-resistant [[Authentication]] without passwords, anchored to device-bound cryptographic keys — complementary to identity frameworks at the authentication layer.
  - **Hyperledger Aries / AnonCreds**: Open-source SSI stack providing wallet, agent, and credential exchange protocols with ZKP-based selective disclosure.

- ### Challenges & Open Problems
  - **Key management**: Private key loss is equivalent to permanent identity loss in self-sovereign systems. Social recovery, multi-party computation wallets, and key escrow schemes address this but introduce new trust assumptions.
  - **Interoperability**: Heterogeneous identity systems (enterprise LDAP, SSI wallets, national eID) must interoperate without forcing convergence to a single standard. [[Trust]] frameworks and protocol bridges (OID4VC, CHAPI) are active mitigation strategies.
  - **Privacy vs. accountability tension**: Strong identity enables accountability but erodes [[Privacy]]; [[Anonymity]] and [[Pseudonymity]] preserve privacy but complicate regulatory compliance (AML, KYC). [[Zero Knowledge Proof]]s offer a technical path to reconcile these properties.
  - **Scalability of revocation**: Checking revocation status for millions of credentials at high throughput is non-trivial. Accumulator-based schemes and privacy-preserving status lists are research-active areas.
  - **AI-generated identity fraud**: Deepfakes, synthetic voice, and generative imagery undermine biometric identity proofing. Liveness detection and cryptographic attestation of capture devices are countermeasures.
  - **Governance of decentralised systems**: Self-sovereign identity shifts governance responsibility to the individual. Most users lack the expertise for key hygiene, creating pressure for custodial wallet models that re-introduce centralisation.
  - **Cross-border legal recognition**: A DID credential issued in one jurisdiction may not be legally recognised in another. The EU eIDAS 2.0 framework attempts a supranational resolution; global harmonisation remains incomplete.

- ### Trust Frameworks
  - A trust framework defines the rules, policies, and agreements under which identity credentials issued in one context are accepted in another.
  - **Sovrin Governance Framework**: Establishes policies for the Sovrin Network (Hyperledger Indy), defining steward responsibilities, credential issuer vetting, and data protection requirements.
  - **Pan-Canadian Trust Framework**: Government of Canada's SSI interoperability framework aligning digital identity services across provinces and federal departments.
  - **ESSIF (European Self-Sovereign Identity Framework)**: EU-level framework underpinning the EUDI Wallet, mandating W3C DID and VC compatibility for cross-border government services.
  - **OpenID Connect Federation**: A standards-based federation mechanism that extends [[OpenID Connect]] to multi-stakeholder, policy-governed environments, used in academic (eduGAIN) and government contexts.
  - Trust frameworks relate closely to [[Governance]], [[Policy]], and [[Regulation]] concepts in the ontology.

- ### Semantic Classification
  - owl-class:: security:Identity
  - owl-role:: concept

- ### Provenance
  - sources:: W3C DID Core 1.0, W3C Verifiable Credentials 2.0, NIST SP 800-63, ISO/IEC 24760, EU eIDAS 2.0
  - updated:: 2026-06-13
  - updated:: 2026-06-13
