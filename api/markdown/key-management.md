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