A Hardware Root of Trust (HRoT) is an immutable, hardware-anchored set of functions and keys that a system inherently trusts and from which all higher-level security properties are derived. Implemented in silicon or a dedicated security chip, it provides the foundation for secure boot, measured boot, attestation and key protection by establishing a starting point that cannot be modified by software. Because every subsequent trust decision chains back to it, the integrity of the HRoT determines the trustworthiness of the entire platform.

### Overview

- An HRoT provides a small, verifiable set of trusted functions that cannot be altered by software running above it.
- It typically includes immutable boot code (ROM), device-unique keys fused at manufacture, and a cryptographic engine.
- The chain of trust extends outward: the HRoT measures and verifies firmware, which verifies the bootloader, which verifies the operating system.
- Standards bodies (TCG, NIST SP 800-193) define resilience properties: protection, detection and recovery of platform firmware.

### Key aspects

- **Immutability**: the root cannot be reprogrammed once provisioned, so attackers cannot relocate the trust anchor.
- **Device identity**: hardware-fused keys give each device a unique, unforgeable identity for [[Attestation]] and provisioning.
- **Measured boot**: each boot stage is hashed and recorded so remote parties can verify platform integrity.
- **Key protection**: private keys are generated and used inside the root and never exported in plaintext.

### Applications

- Secure and measured boot for servers, laptops and embedded devices.
- Remote attestation establishing platform integrity before granting network access in [[Zero Trust Architecture]].
- Provisioning of device identity in IoT and confidential-computing deployments.
- Anchoring [[Key Management]] and disk encryption keys.

### Provenance

