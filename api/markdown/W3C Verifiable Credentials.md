public:: true

# W3C Verifiable Credentials
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:w3-c-verifiable-credentials",
  "@type": "Page",
  "vc:slug": "w3-c-verifiable-credentials",
  "title": "W3C Verifiable Credentials",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:w3-c-verifiable-credentials",
  "@type": "Class",
  "label": "W3C Verifiable Credentials",
  "definition": "W3C Verifiable Credentials (VCs) are a standardised data model and serialisation format published by the World Wide Web Consortium that enables the cryptographic expression of credentials — such as educational qualifications, identity attributes, and professional licences — in a tamper-evident, machine-verifiable form. The standard defines three roles: issuer (creates and signs the credential), holder (stores and presents it), and verifier (validates the signature and claims), forming a trust triangle that operates without requiring a centralised credential registry. VCs are designed to interoperate with Decentralised Identifiers (DIDs) to enable self-sovereign identity systems in which individuals and organisations control their own digital identity without dependence on a single provider. The VC Data Model 2.0 became a W3C Recommendation in 2024, adding selective disclosure via SD-JWT and BBS+ signatures, JSON Schema validation, and expanded media-type support.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:verifiable-credentials",
      "label": "Verifiable Credentials"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:world-wide-web-consortium",
        "label": "World Wide Web Consortium"
      },
      {
        "@id": "urn:ngm:class:w3c-recommendation",
        "label": "W3C Recommendation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:ed25519",
        "label": "Ed25519 Signature"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptographic-security",
        "label": "Cryptographic Security"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-identity",
        "label": "Privacy-Preserving Identity"
      },
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:federated-credential-exchange",
        "label": "Federated Credential Exchange"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:open-world-assumption",
        "label": "Open World Assumption"
      },
      {
        "@id": "urn:ngm:class:trust-model",
        "label": "Trust Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential (VC)"
      },
      {
        "@id": "urn:ngm:class:credential-format-standard",
        "label": "Credential Format Standard"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity-did",
        "label": "Decentralized Identity (DID)"
      },
      {
        "@id": "urn:ngm:class:open-badges",
        "label": "Open Badges"
      },
      {
        "@id": "urn:ngm:class:eidas-regulation",
        "label": "eIDAS Regulation"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:saml-assertion",
        "label": "SAML Assertion"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent-identity",
        "label": "AI Agent Identity"
      },
      {
        "@id": "urn:ngm:class:supply-chain-provenance",
        "label": "Supply Chain Provenance"
      },
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:vc-data-model",
      "label": "VC Data Model"
    },
    {
      "@id": "urn:ngm:class:verifiable-credential-data-model",
      "label": "Verifiable Credential Data Model"
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
  - [[W3C Verifiable Credentials]] define a cryptographically secured, privacy-respecting data model for expressing digital credentials in a form that any party can verify without contacting the original [[Decentralized Identifiers]] issuer. Specified by the [[World Wide Web Consortium]], the standard formalises a three-party trust model — issuer, holder, and verifier — layered on top of [[JSON-LD]] for semantic interoperability and [[Cryptographic Proof]] mechanisms such as Ed25519 linked data proofs and JWT signatures. The standard enables [[Self Sovereign Identity]] architectures in which individuals control their own credential stores, presenting only the minimum information required through [[Selective Disclosure]] techniques including SD-JWT and BBS+ signatures. VC Data Model 2.0 became a [[W3C Recommendation]] in 2024.

- ### Overview
  - W3C Verifiable Credentials arose from the convergence of [[Linked Data]] semantics, [[Public Key Infrastructure]] cryptography, and the emerging self-sovereign identity movement. The Verifiable Credentials Working Group succeeded the Credentials Community Group in 2017, drawing on earlier work by Manu Sporny on JSON-LD and the broader digital-identity community.
  - The fundamental insight is that credential verification need not require querying a central issuer database. Instead, the issuer publishes a cryptographic public key via a [[DID Document]], signs the credential at issuance time, and any verifier can independently confirm authenticity using that public key — an offline verification model that improves both privacy and resilience.
  - VC Data Model 1.0 became a [[W3C Recommendation]] in November 2019. VC Data Model 2.0 followed in 2024 with expanded serialisation support (JSON-LD, JWT, SD-JWT, CBOR-LD), mandatory JSON Schema validation, and first-class media types (`application/vc+ld+json`, `application/vc+jwt`).
  - The standard is intentionally serialisation-agnostic: a credential is a set of claims about a subject, and the same logical credential can be represented as a JSON-LD document, a compact JWT, or a CBOR binary encoding depending on deployment context.

- ### Key Components
  - **Credential Structure**
    - `credentialSubject` — the claims being asserted (e.g. `degree`, `dateOfBirth`, `licenceNumber`) about an identified subject.
    - `issuer` — a [[Decentralized Identifiers]] URI or HTTPS URL identifying the credential creator.
    - `issuanceDate` / `validFrom` / `validUntil` — temporal validity constraints.
    - `credentialStatus` — optional pointer to a [[Credential Status List]] (e.g. StatusList2021 bitstring revocation) enabling real-time revocation checking without issuer contact.
    - `proof` — the cryptographic proof over the credential's canonical form, using algorithms such as `Ed25519Signature2020`, `JsonWebSignature2020`, or JWT `alg:ES256`.
  - **Proof Formats**
    - Linked Data Proofs — integrity proofs embedded directly in the JSON-LD credential using the Data Integrity specification, suited to semantic interoperability contexts.
    - JWT VCs — credentials serialised as signed JSON Web Tokens for compatibility with existing OAuth/OIDC infrastructure.
    - SD-JWT VCs — selective-disclosure variant of JWT, allowing holders to reveal only chosen claims from a signed set, with cryptographic unlinkability between different presentations.
    - BBS+ Signatures — pairing-based cryptography enabling [[Zero-Knowledge Proof]] presentations of subsets of credential claims with strong unlinkability guarantees.
  - **Trust Triangle Roles**
    - Issuer — creates the credential, signs it with their private key, and publishes their public key via a [[DID Document]] or HTTPS `.well-known` endpoint.
    - Holder — receives credentials from issuers, stores them in a [[Digital Identity Wallet]], and presents them (in full or selectively disclosed) to verifiers.
    - Verifier — resolves the issuer's public key, verifies the cryptographic proof, checks revocation status, and evaluates whether the claims satisfy their trust policy.
  - **Presentation Exchange**
    - Verifiable Presentations (VPs) are signed envelopes that contain one or more VCs, signed by the holder's key to prove possession and prevent replay attacks.
    - The [[Presentation Exchange]] (DIF PE) specification provides a declarative format for verifiers to request specific credential types and claim sets from holders.
    - [[OpenID for Verifiable Credentials]] (OID4VC) wraps the credential issuance and presentation flows in OIDC/OAuth2 protocol steps for integration with existing identity infrastructure.

- ### Applications
  - **Digital Identity**
    - The EU [[eIDAS Regulation]] 2.0 (2024) mandates VCs as the format for the European Digital Identity Wallet, covering national ID cards, driving licences, and educational diplomas for all EU citizens.
    - Government-issued mobile driving licences (mDL, ISO 18013-5) use VC-compatible data structures for offline presentation in physical and digital contexts.
    - The UK DCMS Trust Framework and Canada's Pan-Canadian Trust Framework reference VC standards for federated government credential schemes.
  - **Education and Credentials**
    - [[Open Badges]] 3.0 (IMS Global) adopted VC format as the canonical representation for digital achievement badges and transcripts.
    - Universities and professional bodies issue digitally signed diplomas, micro-credentials, and professional licences as VCs, allowing graduates to share verified qualifications directly with employers without transcript request delays.
    - The European Blockchain Services Infrastructure (EBSI) issues diplomas as VCs to European university graduates, enabling cross-border credential verification.
  - **Healthcare**
    - SMART Health Cards (used for COVID-19 vaccination records) implement a VC-compatible format for health credential sharing.
    - Prescription management, clinical trial consent forms, and patient identity binding in cross-institutional care pathways are being prototyped as VC use cases.
    - The CDC and WHO reference SMART Health Links (successor to SMART Health Cards) for international health credential interoperability.
  - **Supply Chain and Provenance**
    - Product certifications (organic, fair trade, ISO standards compliance) can be issued as VCs by certifying bodies and verified at any point in the [[Supply Chain Provenance]] trail.
    - The GS1 Digital Link standard is being aligned with VC data models to attach verifiable provenance claims to product identifiers.
  - **AI Agent Identity**
    - An emerging frontier involves AI systems carrying VCs that attest their model provenance, capability boundaries, safety evaluations, and governance lineage — enabling verifiable, auditable [[AI Agent Identity]] in multi-agent deployments.
    - This bridges VCs into the [[Artificial Intelligence]] governance domain, where trustworthy AI deployment requires machine-readable assertions about agent properties and constraints.

- ### Mechanisms
  - **DID Resolution and Key Lookup**
    - Verification begins by resolving the issuer's DID to a [[DID Document]] that contains public key material and service endpoints. Supported DID methods include `did:web`, `did:key`, `did:ion`, `did:ebsi`, and others registered in the W3C DID Spec Registries.
    - For HTTPS-based issuers, key material is retrieved from a `/.well-known/did.json` document or JWT issuer metadata endpoint.
  - **Revocation**
    - StatusList2021 (now Bitstring Status List v1.0) encodes a compressed bitstring where each credential is assigned a bit position; verifiers fetch the list and check the bit corresponding to their credential's index.
    - Token Status List (IETF RFC draft) provides a JWT-encoded equivalent for JWT VC ecosystems.
  - **Selective Disclosure**
    - SD-JWT allows issuers to create a credential with hashed claim disclosures; the holder selects which claims to reveal when presenting, and the verifier can verify only those revealed values.
    - BBS+ signatures allow a holder to generate a zero-knowledge proof of knowledge of a valid signature over a subset of messages, without revealing the signature itself, providing strong unlinkability across presentations.
  - **Interoperability Testing**
    - The DIF (Decentralised Identity Foundation) Interoperability Working Group conducts regular plugfests validating multi-vendor credential issuance and presentation flows.
    - The VC Working Group maintains a conformance test suite at `w3c.github.io/vc-test-suite` that implementations must pass to claim W3C conformance.

- ### Relationships
  - standardizedBy:: [[World Wide Web Consortium]]
  - standardizedBy:: [[W3C Recommendation]]
  - uses:: [[DID Document]]
  - uses:: [[JSON-LD]]
  - uses:: [[Cryptographic Proof]]
  - uses:: [[Linked Data]]
  - uses:: [[Ed25519 Signature]]
  - requires:: [[Decentralized Identifiers]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Cryptographic Security]]
  - enables:: [[Self Sovereign Identity]]
  - enables:: [[Privacy-Preserving Identity]]
  - enables:: [[Credential Verification]]
  - enables:: [[Selective Disclosure]]
  - enables:: [[Federated Credential Exchange]]
  - enables:: [[Digital Identity Wallet]]
  - relatedTo:: [[Verifiable Credential (VC)]]
  - relatedTo:: [[Credential Format Standard]]
  - relatedTo:: [[Decentralized Identity (DID)]]
  - relatedTo:: [[Open Badges]]
  - relatedTo:: [[eIDAS Regulation]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - contrastsWith:: [[X.509 Certificate]]
  - contrastsWith:: [[SAML Assertion]]
  - contrastsWith:: [[OAuth Token]]
  - bridgesTo:: [[AI Agent Identity]]
  - bridgesTo:: [[Supply Chain Provenance]]
  - bridgesTo:: [[Decentralized Autonomous Organisation]]

- ### Standards & Context
  - **W3C Specifications**
    - Verifiable Credentials Data Model 1.0 — W3C Recommendation, November 2019.
    - Verifiable Credentials Data Model 2.0 — W3C Recommendation, 2024; adds SD-JWT, CBOR-LD, Bitstring Status List, and updated media types.
    - Decentralized Identifiers (DIDs) v1.0 — W3C Recommendation, July 2022; provides the identifier layer that VCs depend on for issuer key resolution.
    - Verifiable Credential Data Integrity 1.0 — W3C Recommendation; specifies linked data proof suites (Ed25519, BBS+, ECDSA).
  - **Companion Specifications**
    - [[OpenID for Verifiable Credentials]] (OID4VC) — OIDF specification for credential issuance (`OID4VCI`) and presentation (`OID4VP`) over OIDC/OAuth2 transport.
    - Presentation Exchange (DIF PE 2.0) — declarative request language for specifying required credential types and claim constraints.
    - CHAPI (Credential Handler API) — W3C CCG draft enabling browser-native wallet integration.
    - SMART Health Links — HL7 specification extending VC patterns into healthcare credential sharing.
  - **Regulatory Alignment**
    - EU [[eIDAS Regulation]] 2.0 and its Implementing Acts mandate VC-compatible formats for the European Digital Identity Wallet.
    - NIST SP 800-63-4 (Digital Identity Guidelines, US) references VC-compatible approaches for attribute-based identity assurance.
    - ISO/IEC 18013-5 (mobile driving licence) aligns its data structures with VC principles for offline verification.
  - **Ecosystem Bodies**
    - W3C Verifiable Credentials Working Group — specification development and maintenance.
    - Decentralised Identity Foundation (DIF) — interoperability profiles, Presentation Exchange, and wallet standards.
    - OpenID Foundation (OIDF) — OID4VC suite for VC-over-OIDC deployment.
    - IMS Global / 1EdTech — Open Badges 3.0 adoption of VC format for education.

- ### Provenance
  - sources:: W3C VC Data Model 2.0 Recommendation; DIF Interoperability Working Group; eIDAS 2.0 Implementing Acts; IMS Global Open Badges 3.0; SMART Health Cards specification; OIDF OID4VC suite; W3C DID v1.0 Recommendation
  - updated:: 2026-06-13
