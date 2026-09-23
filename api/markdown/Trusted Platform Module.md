
A Trusted Platform Module (TPM) is a dedicated, tamper-resistant hardware component that provides cryptographic functions and secure storage of keys and platform measurements. It generates and protects keys that never leave the chip in plaintext, records integrity measurements in platform configuration registers, and supports operations such as secure boot and remote attestation. Defined by an open Trusted Computing Group specification, the TPM acts as a hardware root of trust on personal computers, servers and embedded devices.

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

- ### Provenance

