- ### Definition
  - A secure enclave is a hardware-isolated execution environment embedded within a processor that maintains confidentiality and integrity guarantees for code and data even when the host operating system, hypervisor, or other privileged software is compromised. Implemented through technologies such as Intel SGX, ARM TrustZone, and AMD SEV, secure enclaves generate remote attestation proofs allowing verifiers to confirm that specific code is executing within a genuine enclave without trusting the surrounding software stack. They are foundational to confidential computing, trusted execution environments, and privacy-preserving distributed computation.

- ### Semantic Classification
  - owl-class:: secure-enclave:Secure Enclave
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Trusted Execution Environment]]
  - relatedTo [[Confidential Computing]]
  - relatedTo [[Hardware Security Module]]
  - enables [[Cryptographic Key Management]]
  - enables [[Privacy Preserving Technology]]

- ### Content
  Secure enclaves extend the processor trust boundary to protect code and data from a broad threat model that includes privileged software adversaries. Intel SGX partitions process memory into encrypted regions (enclaves) that are decrypted only within the CPU package, preventing observation by the OS kernel or a compromised hypervisor. ARM TrustZone partitions the processor into Normal and Secure worlds, with hardware-enforced isolation between them. AMD SEV-SNP extends memory encryption to full virtual machine isolation in cloud environments.

  Remote attestation is the critical capability that distinguishes enclaves from simple encrypted storage: a relying party can request a cryptographically signed measurement of the enclave's code and configuration, verified against a hardware root of trust, before transmitting sensitive data to it. This enables secure computation delegation — a client can send private data to a cloud-hosted enclave, knowing the operator cannot read it.

  In blockchain and decentralised identity contexts, enclaves enable privacy-preserving computation on sensitive credentials, confidential smart contract execution (e.g. Secret Network, Oasis), and secure key custody without exposing private keys to the host environment. Hardware security modules (HSMs) represent a higher-assurance but less flexible alternative, typically used for certificate authority operations and payment system key management. Side-channel attacks (timing, power analysis, speculative execution leakage) remain an active research concern for all enclave implementations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z