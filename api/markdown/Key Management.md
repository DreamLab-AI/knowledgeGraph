public:: true

# key management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c5ec2a68c38dde9acb579ecc65f5eeadc34176bc8ec41974494c9a07343f79f6",
  "@type": "Page",
  "vc:slug": "key-management",
  "title": "key management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:key-management",
  "@type": "Class",
  "label": "Key Management",
  "definition": "Key management is the discipline governing the complete lifecycle of cryptographic keys, encompassing their generation using cryptographically secure random number generators and key derivation functions, secure distribution, protected storage in hardware security modules or key management services, scheduled rotation to limit exposure windows, and timely revocation upon compromise or expiry. It is a foundational control domain for all systems relying on confidentiality, integrity, and authentication guarantees, since even mathematically strong algorithms are rendered ineffective by weak key custody practices. Key management is mandated by security standards including NIST SP 800-57 and ISO/IEC 27001 Annex A.10, and underpins PKI, envelope encryption architectures, blockchain self-custody, and zero-trust identity frameworks.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"},
      {"@id": "urn:ngm:class:key-derivation-function", "label": "Key Derivation Function"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:secure-communication", "label": "Secure Communication"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:random-number-generation", "label": "Random Number Generation"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:key-generation", "label": "Key Generation"},
      {"@id": "urn:ngm:class:key-rotation", "label": "Key Rotation"},
      {"@id": "urn:ngm:class:key-revocation", "label": "Key Revocation"},
      {"@id": "urn:ngm:class:certificate-lifecycle-management", "label": "Certificate Lifecycle Management"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:envelope-encryption", "label": "Envelope Encryption"},
      {"@id": "urn:ngm:class:key-hierarchy", "label": "Key Hierarchy"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-sp-800-57", "label": "NIST SP 800-57"},
      {"@id": "urn:ngm:class:iso-iec-27001", "label": "ISO/IEC 27001"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:password-management", "label": "Password Management"},
      {"@id": "urn:ngm:class:secrets-management", "label": "Secrets Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:tls", "label": "TLS"},
      {"@id": "urn:ngm:class:multi-party-computation", "label": "Multi-Party Computation"},
      {"@id": "urn:ngm:class:threshold-cryptography", "label": "Threshold Cryptography"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"}
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
  - Key management is the systematic discipline governing the entire lifecycle of [[Cryptography|cryptographic]] keys — from secure [[Key Generation]] through distribution, protected storage in [[Hardware Security Module|HSMs]] or [[Cloud Key Management Service|cloud KMS]] systems, scheduled [[Key Rotation]], and timely [[Key Revocation]] upon compromise or expiry. It is a prerequisite for all security guarantees offered by [[Encryption]], [[Digital Signature|digital signatures]], and [[Authentication]] systems, because even provably strong algorithms are undermined when key material is poorly generated, stored, or controlled. Key management is mandated across enterprise standards including [[NIST SP 800-57]] and [[ISO/IEC 27001]], and is the operational backbone of [[Public Key Infrastructure]], [[Zero Trust Architecture]], and [[Blockchain]] self-custody models.

- ### Overview
  - Cryptographic algorithms derive their security from the secrecy and integrity of keys rather than the secrecy of the algorithm itself (Kerckhoffs's principle). Key management addresses this by treating keys as first-class operational assets requiring defined policies, controls, and audit trails throughout their useful lives.
  - The six canonical lifecycle phases recognised by [[NIST SP 800-57]] are:
    - **Generation** — keys must be produced with sufficient entropy; weak or predictable generation is a leading source of cryptographic failures.
    - **Distribution** — transferring keys between parties without exposure, using protocols such as [[Diffie-Hellman Key Exchange]], [[TLS]] handshakes, or out-of-band ceremony.
    - **Storage** — protecting key material at rest, ideally inside a [[Hardware Security Module]] or [[Trusted Execution Environment]] from which keys cannot be exported in plaintext.
    - **Use** — enforcing usage constraints such as algorithm type, data volume limits, and validity periods.
    - **Rotation** — periodically replacing keys to limit the blast radius of any single key compromise; automated rotation is preferred over manual.
    - **Revocation and Destruction** — invalidating keys no longer fit for use and securely erasing all copies.
  - Why it matters: security breaches attributable to key management failures — including hardcoded keys, poor entropy, failure to rotate, and unprotected backups — account for a significant share of real-world cryptographic vulnerabilities, making key management as important as algorithm selection.

- ### Key Components
  - **[[Hardware Security Module]] (HSM)**
    - Tamper-resistant dedicated hardware that performs cryptographic operations within a protected enclave; keys never exist in plaintext outside the HSM boundary.
    - Used in certificate authorities, payment card industry (PCI-DSS) environments, and high-assurance government systems.
    - Network HSMs (e.g., Thales Luna, Entrust nShield) serve multiple applications; cloud HSMs (AWS CloudHSM, Google Cloud HSM) provide managed equivalents.
  - **[[Key Derivation Function]] (KDF)**
    - Deterministic algorithms (HKDF, PBKDF2, scrypt, Argon2) that derive cryptographically strong child keys from a parent secret or low-entropy password.
    - HKDF (RFC 5869) is widely used within [[TLS]] 1.3 and [[Signal Protocol]] to derive session keys.
    - [[BIP-32]] Hierarchical Deterministic wallets use [[HMAC-SHA512]]-based derivation to generate entire key trees from a single seed, enabling [[Cryptocurrency]] backup via mnemonic seed phrases.
  - **[[Envelope Encryption]]**
    - A two-level pattern in which a data encryption key (DEK) encrypts the plaintext, and a key encryption key (KEK) held in a KMS encrypts the DEK.
    - Separates data-plane performance from key-plane security; rotation of the KEK re-wraps the DEK without re-encrypting all data.
    - Used natively by AWS KMS, Google Cloud KMS, and Azure Key Vault.
  - **[[Key Hierarchy]]**
    - Structuring keys in tiers (root key → key encryption key → data encryption key) limits blast radius; compromise of a lower-tier key does not expose the root.
    - Root keys are often held offline or in [[Air-Gapped]] HSMs and used only for key-signing ceremonies.
  - **[[Certificate Lifecycle Management]]**
    - A specialised subdomain covering issuance, renewal, and revocation of [[X.509 Certificate|X.509 certificates]] within a [[Public Key Infrastructure]].
    - [[ACME Protocol]] (RFC 8555), implemented by [[Let's Encrypt]], automates certificate issuance and renewal for [[TLS]], dramatically reducing manual operational burden.
    - Certificate revocation is handled via [[Certificate Revocation List|CRLs]] or [[Online Certificate Status Protocol]] (OCSP).
  - **[[Secrets Management]]**
    - Closely related subdomain covering API tokens, database credentials, and service account secrets, handled by tools such as [[HashiCorp Vault]], AWS Secrets Manager, and [[Kubernetes Secrets]].
    - Secrets management and key management converge when secrets are themselves cryptographic material.
  - **[[Multi-Party Computation]] (MPC) and [[Threshold Cryptography]]**
    - Distribute key shares across multiple parties such that no single party holds a complete key; signing or decryption requires a threshold quorum.
    - Eliminates single points of failure; used in institutional [[Cryptocurrency]] custody (Fireblocks, Coinbase Prime) and emerging decentralised identity systems.
  - **[[Random Number Generation]]**
    - All key security derives from entropy at generation; cryptographically secure pseudorandom number generators (CSPRNGs) are mandatory.
    - OS-level sources (/dev/urandom on Linux, BCryptGenRandom on Windows) feed into hardware entropy pools; TPMs and HSMs provide hardware RNG.

- ### Applications and Use Cases
  - **Cloud Infrastructure**
    - Cloud KMS services (AWS KMS, Google Cloud KMS, Azure Key Vault) integrate with storage, databases, and containerised workloads for transparent data-at-rest encryption.
    - Customer-managed keys (CMK) allow organisations to control key material that cloud providers cannot access, satisfying data residency and sovereignty requirements.
  - **[[TLS]] and Web PKI**
    - Every HTTPS connection relies on key management: server certificates must be issued, renewed, and revoked correctly.
    - Automated issuance via [[ACME Protocol]] and [[Let's Encrypt]] has substantially reduced certificate expiry incidents; short-lived certificates (90-day or less) are the emerging norm.
  - **[[Blockchain]] and Cryptocurrency Self-Custody**
    - Private key ownership is equivalent to asset ownership; key loss is irrecoverable without backups.
    - [[HD Wallet|Hierarchical deterministic wallets]] ([[BIP-32]], [[BIP-39]], [[BIP-44]]) allow the entire key tree to be backed up as a 12- or 24-word mnemonic seed phrase.
    - Hardware wallets (Ledger, Trezor) store private keys in a secure element; MPC wallets eliminate the single-seed risk by distributing key shares.
  - **[[Zero Trust Architecture]]**
    - In zero-trust environments, mutual TLS (mTLS) and short-lived [[JSON Web Token|JWTs]] require robust automated key and certificate management infrastructure.
    - Service mesh solutions ([[Istio]], [[Linkerd]]) incorporate built-in certificate authorities that issue and rotate short-lived certificates to each workload identity.
  - **[[Decentralised Identity]]**
    - [[DID (Decentralised Identifier)|DIDs]] and [[Verifiable Credential|verifiable credentials]] depend on per-identity key pairs managed by wallets; key rotation and recovery are active research and standardisation areas.
    - [[DID Key Method]] and [[DID Web]] differ in how the binding between key material and identifier is established and maintained.
  - **Enterprise [[Public Key Infrastructure]]**
    - Internal PKIs issue certificates to employees, devices, and services; certificate authorities (CAs) must themselves be protected with rigorous key management ceremonies.
    - Root CA keys are typically generated in HSM-based ceremonies with multiple witness roles (split knowledge, dual control) to satisfy audit requirements.
  - **[[Payment Card Industry]] (PCI-DSS)**
    - PCI-DSS Requirement 3 mandates key management controls for cryptographic protection of cardholder data, including dual control, split knowledge, and documented key custodian procedures.
  - **IoT and Embedded Systems**
    - Resource-constrained devices require lightweight key management protocols; secure element chips (ATECC608) and provisioning services handle key injection at manufacturing time.

- ### Relationships
  - uses:: [[Cryptography]]
  - uses:: [[Hardware Security Module]]
  - uses:: [[Key Derivation Function]]
  - uses:: [[Public Key Infrastructure]]
  - enables:: [[Encryption]]
  - enables:: [[Digital Signature]]
  - enables:: [[Zero Trust Architecture]]
  - enables:: [[Secure Communication]]
  - requires:: [[Random Number Generation]]
  - requires:: [[Access Control]]
  - requires:: [[Identity Management]]
  - hasPart:: [[Key Generation]]
  - hasPart:: [[Key Rotation]]
  - hasPart:: [[Key Revocation]]
  - hasPart:: [[Certificate Lifecycle Management]]
  - implements:: [[Envelope Encryption]]
  - implements:: [[Key Hierarchy]]
  - standardizedBy:: [[NIST SP 800-57]]
  - standardizedBy:: [[ISO/IEC 27001]]
  - contrastsWith:: [[Password Management]]
  - contrastsWith:: [[Secrets Management]]
  - relatedTo:: [[TLS]]
  - relatedTo:: [[Multi-Party Computation]]
  - relatedTo:: [[Threshold Cryptography]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Decentralised Identity]]

- ### Standards and Context
  - **[[NIST SP 800-57]]** — "Recommendation for Key Management" (Parts 1–3): the primary US federal guidance covering key generation, distribution, storage, access, use, destruction, and accounting across symmetric and asymmetric schemes. Part 1 Rev 5 (2020) is the current foundational reference.
  - **[[ISO/IEC 27001]] Annex A.10** — mandates cryptographic controls and key management as part of information security management systems; accompanied by ISO/IEC 27002 implementation guidance.
  - **[[PKCS Standards|PKCS#11]]** — the Cryptographic Token Interface Standard defining the API through which applications interact with HSMs and smart cards; vendor-neutral and widely implemented.
  - **[[KMIP]]** (Key Management Interoperability Protocol, OASIS) — a protocol for communication between key management servers and clients, enabling multi-vendor enterprise KMS deployments.
  - **[[RFC 8555]]** — the ACME protocol for automated certificate management, underpinning Let's Encrypt and the modern web PKI.
  - **[[BIP-32]] / [[BIP-39]] / [[BIP-44]]** — Bitcoin Improvement Proposals defining hierarchical deterministic wallets, mnemonic seed phrases, and account derivation paths, now the standard for cryptocurrency key management.
  - **[[PCI-DSS]]** Requirement 3 — mandates documented key management procedures for organisations processing payment card data.
  - **[[FIPS 140-3]]** — the US federal standard for cryptographic module validation; HSMs used in regulated environments must be FIPS 140-3 validated.

- ### Provenance
  - sources:: NIST SP 800-57 Part 1 Rev 5; ISO/IEC 27001:2022; RFC 5869 (HKDF); RFC 8555 (ACME); OASIS KMIP Specification; BIP-32/39/44 specifications; FIPS 140-3
  - updated:: 2026-06-13
