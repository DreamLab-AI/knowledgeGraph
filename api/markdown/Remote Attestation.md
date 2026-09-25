Remote attestation is a security mechanism by which one system proves the integrity and identity of its software and hardware state to a remote verifier. The attesting platform produces cryptographically signed evidence, rooted in a hardware root of trust, that captures measurements of its boot sequence and running code. A verifier checks this evidence against expected values and a trusted signing key before granting access or releasing secrets, allowing trust decisions to be made about a machine that is not physically controlled.

### Overview

- Remote attestation answers the question of whether a machine you do not control is running the software you expect, in an untampered state. The platform measures its boot chain and code, signs those measurements, and sends the evidence to a verifier.
- The verifier validates the signature against a key that ultimately chains back to a hardware root of trust, then compares the reported measurements with a known-good policy before extending trust.
- This mechanism is central to confidential computing, where workloads run inside enclaves and a client wants assurance about the enclave before sending sensitive data or releasing decryption keys.

### Mechanisms

- A hardware root of trust generates and protects attestation keys that cannot be exfiltrated.
- Measured boot records cryptographic hashes of each stage of the boot and load process.
- The platform signs a quote containing these measurements with its attestation key.
- The verifier checks the signature, validates the certificate chain and matches measurements to an expected reference policy.

### Applications

- Confidential computing where enclaves prove their identity before receiving secrets.
- Device onboarding and zero-trust network access that admit only verified endpoints.
- Supply-chain and firmware integrity verification across fleets of devices.
- Releasing decryption keys only to platforms in a known-good configuration.

### Provenance

