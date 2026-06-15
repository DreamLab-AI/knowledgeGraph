public:: true

# Privacy-Preserving Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:privacy-preserving-identity",
  "@type": "Page",
  "vc:slug": "privacy-preserving-identity",
  "title": "Privacy-Preserving Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:privacy-preserving-identity",
  "@type": "Class",
  "label": "Privacy-Preserving Identity",
  "definition": "Privacy-preserving identity refers to identity management architectures and protocols that enable individuals to prove attributes, credentials, or facts about themselves to verifiers without revealing unnecessary personal information, leveraging cryptographic techniques such as zero-knowledge proofs, selective disclosure, and unlinkable credentials. These systems reconcile strong authentication guarantees with user privacy, countering surveillance by minimising the attack surface of identity data aggregation and preventing cross-context correlation of user activity. They are foundational to self-sovereign identity frameworks, anonymous credential schemes, hardware-backed identity wallets, and privacy-respecting regulatory compliance workflows. The field spans cryptographic research, standardisation bodies (W3C, IETF, ISO), and deployment infrastructure including secure enclaves and decentralised ledgers.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:bbs-signatures",
        "label": "BBS+ Signatures"
      },
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
      },
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy-Preserving Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:anonymous-credential",
        "label": "Anonymous Credential"
      },
      {
        "@id": "urn:ngm:class:age-verification",
        "label": "Age Verification"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:sd-jwt",
        "label": "SD-JWT"
      },
      {
        "@id": "urn:ngm:class:e-idas-2-0",
        "label": "eIDAS 2.0"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gdpr-compliance",
        "label": "GDPR Compliance"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:centralised-identity",
        "label": "Centralised Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:unlinkability",
        "label": "Unlinkability"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:privacy-enhancing-identity",
      "label": "Privacy-Enhancing Identity"
    },
    {
      "@id": "urn:ngm:class:anonymous-identity-management",
      "label": "Anonymous Identity Management"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Privacy-Preserving Identity]] is a [[Digital Identity]] paradigm that employs cryptographic techniques — principally [[Zero-Knowledge Proof]], [[Selective Disclosure]], and unlinkable credential schemes — to enable individuals to assert verified attributes to relying parties without exposing unnecessary personal data. Rooted in David Chaum's foundational work on anonymous credentials and later formalised through Camenisch-Lysyanskaya (CL) signatures, the field has matured into deployable standards including [[W3C Verifiable Credentials]], [[Decentralized Identifiers]], and [[SD-JWT]]. The core privacy property is *minimal disclosure*: a holder reveals only the predicates a verifier requires (e.g. "over 18") rather than raw attributes (e.g. date of birth), and presentations are unlinkable so that no issuer-verifier collusion or cross-session tracking is possible. This reconciles the competing demands of [[Privacy-Preserving Authentication]] and regulatory [[Know Your Customer]] compliance without a central identity broker.

- ### Overview
  - Privacy-preserving identity emerged from academic cryptography in the 1980s–2000s and has accelerated into production deployments during the 2020s, driven by GDPR-era data minimisation mandates, [[Self-Sovereign Identity]] movements, and the European Digital Identity Wallet mandate under [[eIDAS 2.0]].
  - The fundamental tension it resolves is between two incompatible goals of classical identity systems:
    - **Authentication strength** — verifiers need high assurance that a credential is genuine and belongs to the presenter.
    - **Privacy** — holders must not sacrifice control over their personal data or enable surveillance by issuers, verifiers, or infrastructure providers.
  - Classical [[Federated Identity]] systems (OAuth2, SAML, OpenID Connect) delegate authentication to an identity provider (IdP) who learns every relying party the user visits, creating a single point of surveillance. Privacy-preserving alternatives eliminate the IdP from the presentation flow entirely.
  - The key insight is that cryptographic proofs can substitute for data: instead of showing a passport, a holder computes a proof that "this credential was signed by a trusted authority AND the birthdate field satisfies age > 18" — revealing nothing else.

- ### Key Mechanisms
  - **[[Zero-Knowledge Proof]] (ZKP)** — allows a prover to convince a verifier of a predicate's truth without revealing any witness. Applied to identity, this means proving "I hold a valid government credential" without revealing the credential or the subject's identity.
  - **[[Selective Disclosure]]** — credential formats where individual attributes can be revealed or hidden independently. BBS+ signatures and SD-JWT both support this; the former provides stronger unlinkability guarantees.
  - **[[BBS+ Signatures]]** — a pairing-based multi-message signature scheme that enables constant-size unlinkable proofs of subsets of signed messages. Standardised through IETF drafts and used in W3C DID-based credential ecosystems.
  - **[[zk-SNARK]] / zk-STARK circuits** — succinct non-interactive proofs enabling arbitrary predicate proofs (range proofs, set membership, hashing constraints) over credential fields, used in high-assurance or on-chain verification contexts.
  - **[[Cryptographic Commitment]]** — allows a prover to commit to a value without revealing it; used in CL signatures and Pedersen-commitment-based credential schemes to bind credential attributes to the holder without linkable identifiers.
  - **[[Trusted Execution Environment]] (TEE)** — hardware-backed secure enclaves (Intel SGX, ARM TrustZone, Apple Secure Enclave) that hold credential key material and perform signing operations in isolation, providing a tamper-resistant trust anchor for [[Digital Identity Wallet]] applications.
  - **[[Decentralized Identifiers]] (DIDs)** — W3C-standardised self-controlled identifiers whose DID documents are resolvable from [[Blockchain]] ledgers or peer-to-peer registries, removing reliance on central certificate authorities.

- ### Credential Formats & Protocols
  - **W3C Verifiable Credentials (VC) Data Model** — JSON-LD-based format for issuer-signed credential claims; defines issuer, subject, and verifier roles; supports multiple proof formats including JSON Web Signature (JWS), BBS+, and zk-SNARK proofs.
  - **SD-JWT (Selective Disclosure for JWTs)** — IETF draft format combining JWT with a salted hash commitment structure, enabling selective disclosure of individual claims while retaining compatibility with existing OAuth2 infrastructure. Adopted by the EUDIW technical specification.
  - **ISO/IEC 18013-5 (mDL)** — mobile driving licence standard using CBOR and COSE signatures with selective disclosure; deployed in iOS/Android digital wallet integrations in multiple jurisdictions.
  - **Idemix (Identity Mixer)** — IBM's anonymous credential system based on CL signatures, offering multi-show unlinkability and pseudonymous authentication; used in Hyperledger Fabric.
  - **U-Prove** — Microsoft Research anonymous credential tokens providing one-show unlinkability with minimal computational overhead; contributed to IETF.

- ### Applications & Use Cases
  - **Age verification** — online platforms can verify "user is 18+" without learning name, birthdate, or identity. Deployed by European telcos and content platforms under national age assurance regulations.
  - **Financial KYC / AML** — regulated entities can receive proof of KYC completion from a trusted KYC provider without receiving raw identity documents, reducing data liability. The [[Know Your Customer]] predicate is disclosed; personal data is not.
  - **Healthcare credential verification** — clinician professional licences, vaccination certificates, and insurance eligibility are provable without exposing full health records. Piloted under EU COVID-19 Digital Certificate infrastructure.
  - **Cross-border identity portability** — [[eIDAS 2.0]] mandates that EU citizens can use a national digital identity wallet to authenticate across member state services with selective attribute disclosure.
  - **Web3 / DeFi pseudonymous compliance** — users prove regulatory compliance (not sanctioned, accredited investor status) to DeFi protocols on-chain using [[zk-SNARK]] identity proofs without doxxing their wallet-to-identity link.
  - **Enterprise workforce identity** — employees authenticate to SaaS services proving role membership without central SSO providers logging every access.
  - **Metaverse and spatial computing** — [[Trusted Execution Environment]]-backed identity in [[Metaverse]] environments enables age-gating and creator royalty attribution without linking persistent pseudonymous avatars to real-world identities.

- ### Relationships
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Selective Disclosure]]
  - uses:: [[Verifiable Credentials]]
  - uses:: [[Decentralized Identifiers]]
  - uses:: [[BBS+ Signatures]]
  - uses:: [[zk-SNARK]]
  - uses:: [[Trusted Execution Environment]]
  - enables:: [[Privacy-Preserving Authentication]]
  - enables:: [[Identity Verification]]
  - enables:: [[Anonymous Credential]]
  - enables:: [[Age Verification]]
  - enables:: [[Self-Sovereign Identity]]
  - requires:: [[Cryptographic Commitment]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Digital Signature]]
  - dependsOn:: [[Decentralized Identity]]
  - dependsOn:: [[Digital Identity Wallet]]
  - implements:: [[W3C Verifiable Credentials]]
  - implements:: [[SD-JWT]]
  - implements:: [[eIDAS 2.0]]
  - supports:: [[GDPR Compliance]]
  - supports:: [[Know Your Customer]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[IETF]]
  - contrastsWith:: [[Federated Identity]]
  - contrastsWith:: [[Centralised Identity]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Secure Multi-Party Computation]]
  - relatedTo:: [[Unlinkability]]
  - relatedTo:: [[Data Minimisation]]

- ### Standards & Context
  - **W3C Verifiable Credentials Data Model 2.0** — core credential format, controlled identifiers (DIDs), and proof formats. Published as W3C Recommendation.
  - **W3C DID Core 1.0** — Decentralized Identifiers specification, W3C Recommendation, underpinning portable credential subjects.
  - **IETF SD-JWT** — `draft-ietf-oauth-selective-disclosure-jwt`; selective disclosure extension to RFC 7519 (JWT).
  - **IETF BBS Signature Scheme** — `draft-irtf-cfrg-bbs-signatures`; cryptographic specification for BBS+ from the CFRG working group.
  - **ISO/IEC 18013-5** — mDL (mobile driving licence) with selective disclosure; adopted by Apple Wallet, Google Wallet.
  - **ISO/IEC 29101** — privacy architecture framework for identity management systems.
  - **eIDAS 2.0 (Regulation EU 2024/1183)** — mandates European Digital Identity Wallet (EUDIW) with selective disclosure and [[Privacy-Preserving Authentication]] for all EU member states.
  - **NIST SP 800-63-4** — US digital identity guidelines covering assurance levels and privacy requirements for authentication.
  - **OpenID for Verifiable Credentials (OID4VC)** — suite of OpenID Foundation specifications (OID4VCI, OID4VP) layering VC issuance and presentation over OAuth2 / OpenID Connect infrastructure; adopted by EUDIW architecture.
  - Relevant regulators include the European Data Protection Board (EDPB), UK ICO, and NIST, all of which require data minimisation principles that privacy-preserving identity directly implements.

- ### Historical Lineage
  - **1985** — David Chaum's "Security Without Identification" proposes anonymous credential systems; introduces blinded signatures.
  - **2001** — Camenisch and Lysyanskaya publish CL signatures enabling efficient multi-show unlinkable credential proofs.
  - **2004** — IBM Identity Mixer (Idemix) implements CL signatures; Microsoft U-Prove tokens introduced.
  - **2015** — Decentralized Identity Foundation (DIF) formed; early DID drafts circulate.
  - **2019** — W3C Verifiable Credentials Working Group publishes first Candidate Recommendation.
  - **2021** — BBS+ signatures gain traction in DIF and IETF CFRG; Hyperledger AnonCreds adopts BBS+.
  - **2022** — EU Digital Identity Wallet Architecture and Reference Framework (ARF) published; SD-JWT IETF draft initiated.
  - **2024** — eIDAS 2.0 published as EU law; ISO 18013-5 widely deployed in Apple/Google wallets; OID4VC profiles stabilised.

- ### Provenance
  - sources:: W3C VC Data Model 2.0; IETF SD-JWT and BBS+ drafts; ISO/IEC 18013-5; eIDAS 2.0 Regulation; Camenisch & Lysyanskaya (2001); Chaum (1985); NIST SP 800-63-4; OpenID Foundation OID4VC specifications
  - updated:: 2026-06-13
