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
  "definition": "Key management is the discipline encompassing the full lifecycle governance of cryptographic keys: generation (using cryptographically secure random number generators and appropriate key derivation functions), distribution (secure out-of-band or in-band delivery), storage (in hardware security modules, key management services, or encrypted keystores), rotation (periodic replacement to limit exposure windows), and revocation (timely invalidation of compromised or expired keys). Effective key management is a prerequisite for all cryptographic security guarantees, since even strong algorithms are undermined by weak key custody practices. It is a mandatory control domain in standards including ISO/IEC 27001 (Annex A, A.10) and NIST SP 800-57.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Infra Security and Identity"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Key management is the discipline encompassing the full lifecycle governance of cryptographic keys: generation (using cryptographically secure random number generators and appropriate key derivation functions), distribution (secure out-of-band or in-band delivery), storage (in hardware security modules, key management services, or encrypted keystores), rotation (periodic replacement to limit exposure windows), and revocation (timely invalidation of compromised or expired keys). Effective key management is a prerequisite for all cryptographic security guarantees, since even strong algorithms are undermined by weak key custody practices. It is a mandatory control domain in standards including ISO/IEC 27001 (Annex A, A.10) and NIST SP 800-57.

- ### Semantic Classification
  - owl-class:: key-management:Key Management
  - owl-role:: Concept

- ### Relationships
  - uses [[Cryptography]]
  - uses [[Hardware Security Module]]
  - enables [[Encryption]]
  - enables [[Digital Signature]]
  - relatedTo [[Public Key Infrastructure]]
  - relatedTo [[Cryptographic Key Management]]

- ### Content
  - Key management systems (KMS) range from software-based solutions to dedicated Hardware Security Modules (HSMs), which are tamper-resistant devices that perform cryptographic operations and store key material in a protected enclave from which keys cannot be extracted in plaintext. Cloud KMS offerings (AWS KMS, Google Cloud KMS, Azure Key Vault) provide HSM-backed key management as a managed service, enabling envelope encryption patterns where application-layer data encryption keys (DEKs) are themselves encrypted (wrapped) by a master key held in the KMS.
  - Key hierarchies reduce operational risk by ensuring that the compromise of a lower-level key has limited blast radius. At the top sits one or more root keys (often stored offline or in hardware), which derive key encryption keys (KEKs) used to protect the DEKs that encrypt actual data. Key derivation functions (HKDF, PBKDF2, scrypt) generate child keys from parent material deterministically, enabling HD wallet structures in blockchain contexts (BIP-32/39/44) where a single seed phrase backs up an entire hierarchy of private keys.
  - Certificate lifecycle management—a specialised subdomain of key management—covers the issuance, renewal, and revocation of X.509 certificates within a Public Key Infrastructure (PKI). Automated Certificate Management Environment (ACME, RFC 8555), implemented by Let's Encrypt, automates certificate issuance and renewal for TLS. In blockchain systems, private key management (self-custody wallets, multi-party computation (MPC) wallets, hardware wallets) determines ownership and authorisation for on-chain asset operations; key loss is irrecoverable, making robust key backup and recovery procedures critical.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
