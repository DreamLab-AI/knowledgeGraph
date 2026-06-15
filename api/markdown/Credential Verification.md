public:: true

# Credential Verification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:credential-verification",
  "@type": "Page",
  "vc:slug": "credential-verification",
  "title": "Credential Verification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-verification",
  "@type": "Class",
  "label": "Credential Verification",
  "definition": "Credential verification is the process of cryptographically or institutionally confirming the authenticity, integrity, and current validity of a credential — such as a digital certificate, verifiable credential, or identity assertion — issued by a trusted authority about a subject, so that a relying party can grant access or trust without real-time contact with the original issuer. In decentralised identity systems it relies on public-key cryptography, digital signatures, and optionally distributed ledgers to enable privacy-preserving, tamper-evident verification. The process must also resolve issuer keys and query revocation registries (via CRL, OCSP, or on-chain status) to ensure invalidated credentials cannot be fraudulently reused. Selective-disclosure techniques, including zero-knowledge proofs and SD-JWTs, allow subjects to prove specific attributes without exposing unnecessary personal data.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication",
      "label": "Authentication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:revocation-registry",
        "label": "Revocation Registry"
      },
      {
        "@id": "urn:ngm:class:trust-anchor",
        "label": "Trust Anchor"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity-did",
        "label": "Decentralized Identity (DID)"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
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
        "@id": "urn:ngm:class:digital-identity-management",
        "label": "Digital Identity Management"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:trust-establishment",
        "label": "Trust Establishment"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-signature-verification",
        "label": "Signature Verification"
      },
      {
        "@id": "urn:ngm:class:schema-validation",
        "label": "Schema Validation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:credential-schema",
        "label": "Credential Schema"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:open-id4-vc",
        "label": "OpenID4VC"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:credential-issuance",
        "label": "Credential Issuance"
      },
      {
        "@id": "urn:ngm:class:password-authentication",
        "label": "Password Authentication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:mobile-driving-licence",
        "label": "Mobile Driving Licence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:credential-validation",
      "label": "Credential Validation"
    },
    {
      "@id": "urn:ngm:class:attestation-verification",
      "label": "Attestation Verification"
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
  - [[Credential Verification]] is the cryptographic or institutional process of confirming that a [[Verifiable Credential]] presented by a subject is authentic, structurally valid, and currently unrevoked, enabling a relying party to make an access or trust decision without contacting the original issuer in real time. The process consumes [[Cryptographic Signature]] proofs, resolves issuer keys through [[Public Key Infrastructure]] or [[Decentralized Identifier]] documents, and validates claims against a [[Credential Schema]]. Advanced implementations employ [[Zero-Knowledge Proof]] techniques to achieve [[Selective Disclosure]], allowing subjects to prove specific attributes — such as legal age or professional licence — without revealing their complete identity data. Robust verification also queries a [[Revocation Registry]] (CRL, OCSP, or on-chain status list) to reject credentials invalidated since issuance.

- ### Overview
  - Credential verification sits at the heart of digital trust infrastructure. Wherever a system must confirm that a party possesses a right, qualification, or attribute asserted by a third party, credential verification is the technical mechanism that makes that confirmation reliable without requiring synchronous contact with the issuer.
  - The classic model is the three-party triangle: an **issuer** (e.g. a government, university, or employer) cryptographically signs a structured credential about a **subject**; the subject presents the credential (or a derived proof) to a **verifier**; the verifier checks the signature, validates the structure, and confirms revocation status.
  - Historically this process was institutionally mediated — sealed letters, notarised documents, in-person checks. Digital credential verification began with X.509 certificates and the [[Public Key Infrastructure]] underpinning SSL/TLS, which enabled automated machine-to-machine trust at scale. The emergence of [[Decentralized Identity (DID)]] and the [[W3C Verifiable Credentials]] data model has extended this paradigm to person-centric credentials that individuals can carry and present across multiple services.
  - Credential verification is distinct from [[Credential Issuance]] (the act of creating and signing the credential) and from [[Authentication]] in its narrow sense (proving you are who you claim to be via a secret). Verification asserts *properties about a subject* based on claims from a trusted issuer rather than relying on secrets the subject holds.

- ### Key Components
  - #### Cryptographic Proof Verification
    - The verifier checks the [[Digital Signature]] (commonly EdDSA or ECDSA) or [[Zero-Knowledge Proof]] attached to the credential against the issuer's public key.
    - For W3C Verifiable Credentials the proof may use [[Linked Data Proofs]] (JSON-LD canonicalisation + signature) or the more compact **JWT** or **SD-JWT** envelope.
    - BBS+ signatures enable unlinkable [[Selective Disclosure]] across multiple presentations of the same credential.
  - #### Issuer Key Resolution
    - For DID-based credentials the verifier resolves the issuer's [[Decentralized Identifier]] via a [[DID Resolver]] to retrieve the DID Document containing the verification method (public key).
    - For X.509-based credentials (TLS, mDL, eIDAS) the verifier traverses a certificate chain up to a trusted [[Certificate Authority]] root.
    - The [[Trust Anchor]] defines the root of the trust hierarchy; mismatches cause verification failure.
  - #### Schema and Semantic Validation
    - The verifier checks that all mandatory claims defined by the [[Credential Schema]] are present and correctly typed.
    - Presentation Exchange (PE) descriptors define what claims a verifier requires and the acceptable proof formats.
    - JSON Schema or SHACL constraints enforce structural integrity.
  - #### Revocation Status Check
    - A credential may have been validly issued but subsequently revoked (e.g. licence suspended, employee terminated).
    - Mechanisms include: Certificate Revocation Lists (CRL), Online Certificate Status Protocol ([[OCSP]]), W3C Status List 2021, Bitstring Status List, and on-chain [[Smart Contract]] registries.
    - Privacy-preserving revocation (e.g. accumulator-based schemes) hides *which* credentials are revoked while still enabling individual status checks.
  - #### Presentation Protocol
    - The [[OpenID4VC]] family (OpenID for Verifiable Presentations — OID4VP; OpenID for Credential Issuance — OID4CI) standardises how presentations are requested and delivered over OAuth-style HTTP flows.
    - ISO 18013-5 (mDL) uses device engagement via QR code or NFC, with a device-bound key providing holder binding.
    - DIF Presentation Exchange defines the descriptor format for credential requirements.

- ### Mechanisms and Protocols
  - **JWT-based VCs**: a compact, widely supported format; the credential payload is Base64url-encoded JSON signed with JWS. Easy to validate with standard JWT libraries.
  - **SD-JWT** (Selective Disclosure JWT): extends JWT to allow holders to selectively disclose individual claims. The issuer hashes each claim separately; the holder reveals only chosen hashes plus their preimages. Adopted in EU Digital Identity Wallet (EUDI) and ISO 18013-7.
  - **JSON-LD Linked Data Proofs**: semantically rich, enables interoperability across different vocabulary systems, but more complex to implement due to RDF canonicalisation.
  - **BBS+ / BBS Signatures**: pairing-based signatures supporting multi-message signing with per-message selective disclosure and unlinkable proofs. Used in Hyperledger Anoncreds.
  - **ISO 18013-5 (mDL)**: device-centric model where the credential is stored on a mobile device with a device key providing holder binding; verifier authenticates device and checks issuer signature on the mobile document (mdoc) format.

- ### Applications and Use Cases
  - **Government and Civic Identity**: National digital ID wallets (EU EUDI Wallet, UK DIATF, Singapore MyInfo) issue verifiable credentials for passports, driving licences, and benefit entitlements; verifiers confirm them in real time at border control or online services.
  - **Professional Licensing**: Medical councils, bar associations, and engineering bodies issue digitally signed licence credentials; employers and regulators can verify these instantly without phoning the issuing body.
  - **Academic Qualifications**: Universities issue digital diplomas as [[Verifiable Credential|Verifiable Credentials]] (see MIT Digital Credentials Consortium, Open Badges v3); background-check services verify them in seconds rather than weeks.
  - **Healthcare**: Clinicians' credentials (GMC registration, DEA licence) are verified before granting access to prescribing systems or medical records, often through [[Access Control]] policies.
  - **Decentralised Finance KYC / AML**: [[Know Your Customer]] compliance requires verifying identity documents; reusable KYC credentials allow a subject to prove compliance to multiple DeFi platforms without re-submitting raw documents.
  - **Age Verification**: Privacy-preserving age credentials prove "over 18" to content platforms without disclosing date of birth; critical for GDPR / UK Online Safety Act compliance.
  - **Supply-Chain Provenance**: Organisations verify supplier certifications (ISO 9001, fair-trade, carbon offsets) using [[Distributed Ledger Technology]]-anchored credentials, reducing audit fraud.
  - **Cross-Border Travel**: ICAO Digital Travel Credentials (DTC) extend passport verification to cryptographically signed mobile credentials readable at e-gates.
  - **Enterprise IAM**: Employees carry portable, cryptographically bound employment credentials usable across partner organisations without central directory lookups.

- ### Relationships
  - partOf:: [[Authentication]]
  - requires:: [[Cryptographic Signature]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Revocation Registry]]
  - requires:: [[Trust Anchor]]
  - uses:: [[Cryptographic Verification]]
  - uses:: [[Decentralized Identity (DID)]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Digital Signature]]
  - enables:: [[Access Control]]
  - enables:: [[Digital Identity Management]]
  - enables:: [[Selective Disclosure]]
  - enables:: [[Trust Establishment]]
  - hasPart:: [[Signature Verification]]
  - hasPart:: [[Revocation Check]]
  - hasPart:: [[Schema Validation]]
  - dependsOn:: [[Credential Schema]]
  - dependsOn:: [[Decentralized Identifier]]
  - dependsOn:: [[Certificate Authority]]
  - standardizedBy:: [[W3C Verifiable Credentials]]
  - standardizedBy:: [[OpenID4VC]]
  - standardizedBy:: [[X.509 Certificate]]
  - contrastsWith:: [[Credential Issuance]]
  - contrastsWith:: [[Password Authentication]]
  - relatedTo:: [[Decentralized Identity]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Know Your Customer]]
  - relatedTo:: [[Mobile Driving Licence]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Distributed Ledger Technology]]

- ### Standards and Context
  - **W3C Verifiable Credentials Data Model 2.0** (2024): defines the core JSON-LD data model for credentials and presentations, including proof mechanisms and status checking.
  - **OpenID4VC** (OID4VCI + OID4VP): OAuth-based protocols for credential issuance and presentation over HTTPS, widely adopted in EUDI Wallet and US mDL ecosystems.
  - **ISO/IEC 18013-5** (mDL): defines the mdoc format and device engagement protocols for mobile driving licences; extended by ISO 18013-7 for online flows.
  - **ISO/IEC 27001 / NIST SP 800-63-3**: broader identity assurance frameworks within which credential verification sits as a key technical control.
  - **eIDAS 2.0 (EU 2024/1183)**: mandates EU member states to provide EUDI Wallets; Verifiable Credentials and SD-JWT are the prescribed credential formats.
  - **DIF Presentation Exchange**: decentralised identity foundation specification for expressing verifier credential requirements and matching against holder capabilities.
  - **IETF RFC 9278 (JWK Thumbprint URI)**, **RFC 8392 (CBOR Web Tokens)**, **RFC 7519 (JWT)**: foundational token standards underlying most VC proof formats.
  - **Hyperledger Anoncreds**: open-source implementation of BBS+-based anonymous credential schemes with built-in revocation via cryptographic accumulators.
  - **GAIN (Global Assured Identity Network)**: industry initiative to federate national identity systems using OIDC and VC-based verification.

- ### Security Considerations
  - **Holder Binding**: a credential must be cryptographically bound to its holder to prevent replay by a different party; achieved via holder keys referenced in the credential subject or device-bound keys in mDL.
  - **Replay Attacks**: presentation nonces or challenge-response mechanisms prevent a captured presentation from being reused.
  - **Issuer Impersonation**: verifiers must trust only known issuer DIDs/certificate chains; open trust registries (e.g. EU Trusted Lists) enumerate legitimate issuers.
  - **Linkability**: naive presentation of the same credential to multiple verifiers may allow correlation; BBS+ proofs and SD-JWT blinding factors mitigate this.
  - **Clock Skew**: expiry checks depend on accurate clocks; systems must handle NTP drift and grace periods carefully.
  - **Quantum Threats**: current EC-based signatures (ECDSA, EdDSA) are vulnerable to sufficiently large quantum computers; NIST PQC standards (ML-DSA, SLH-DSA) are expected to be adopted in long-lived credential ecosystems.

- ### Provenance
  - sources:: W3C Verifiable Credentials Data Model 2.0 (2024), OpenID Foundation OID4VC specs, ISO 18013-5:2021, eIDAS 2.0 Regulation (EU 2024/1183), NIST SP 800-63-3, DIF Presentation Exchange spec, Hyperledger Anoncreds documentation
  - updated:: 2026-06-13
