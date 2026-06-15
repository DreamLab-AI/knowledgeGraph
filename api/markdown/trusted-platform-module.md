- ### Definition
  - A Trusted Platform Module is a tamper-resistant [[Hardware Security Module]] embedded in a device that protects keys and platform measurements. It serves as a [[Root of Trust]], using [[Public-Key Cryptography]] to enable [[Secure Boot]] and [[Remote Attestation]].

- ### Overview
  - The TPM is a small, standardised security chip that gives a computing platform a hardware anchor for trust. Keys generated inside the TPM can be bound to the chip so that they cannot be extracted, even by privileged software.
  - During boot, components are measured and their hashes extended into platform configuration registers; these values can later be reported in an attestation or used to seal secrets that are only released in a known-good state.
  - Because its specification is published by the Trusted Computing Group, the TPM provides interoperable security primitives across vendors, and it underpins features such as disk encryption key protection and platform integrity checks.

- ### Mechanisms
  - On-chip key generation and storage keep private keys isolated from system memory.
  - Platform configuration registers accumulate measurements of firmware and software to capture boot integrity.
  - Sealing binds secrets to a specific platform state so they unseal only when measurements match.
  - Quoting produces signed evidence of platform state for remote attestation.

- ### Applications
  - Protecting full-disk-encryption keys so they are released only on a trusted platform.
  - Anchoring secure boot and measured boot on PCs and servers.
  - Providing device identity and attestation for enterprise and zero-trust access.
  - Storing credentials for platform authentication and password-less sign-in.

- ### Relationships
  - subClassOf:: [[Hardware Security Module]]
  - hasPart:: [[Cryptographic Key]]
  - hasPart:: [[Non-Volatile Memory]]
  - enables:: [[Secure Boot]]
  - enables:: [[Remote Attestation]]
  - supports:: [[Root of Trust]]
  - supports:: [[Authentication]]
  - requires:: [[Tamper Resistance]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Digital Signature]]
  - bridgesTo:: [[Key Management]]
  - bridgesTo:: [[Confidential Computing]]
  - contrastsWith:: [[Trusted Execution Environment]]
  - relatedTo:: [[Hardware Security Module]]
  - relatedTo:: [[FIDO Alliance]]
  - relatedTo:: [[Secure Enclave]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation