- ### Definition
  - A Trusted Execution Environment (TEE) is a hardware-enforced, isolated processing domain within a processor that guarantees confidentiality and integrity of code and data even if the host operating system or hypervisor is compromised. TEEs are instantiated via technologies such as Intel SGX, AMD SEV, and Arm TrustZone, each providing mechanisms for remote attestation so that a relying party can cryptographically verify the identity and integrity of the enclave before exchanging sensitive material. TEEs underpin confidential computing workloads including private AI inference, secure key management, and privacy-preserving data collaboration.

- ### Semantic Classification
  - owl-class:: trusted-execution-environment:Trusted Execution Environment
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Confidential Computing]]
  - relatedTo [[Secure Enclave]]
  - enables [[Cryptographic Key Management]]
  - enables [[Privacy-Enhancing Computation (PEC)]]
  - uses [[Hardware Security Module]]

- ### Content
  - A TEE partitions processor resources at the silicon level so that enclave memory pages are encrypted in DRAM and can only be decrypted by the processor itself. The host OS, VMM, and even privileged ring-0 code cannot read enclave memory in plaintext, providing a strong isolation guarantee beyond software sandboxing. Attestation reports bind a cryptographic measurement (hash of the enclave binary and configuration) to a platform certificate, enabling remote parties to confirm they are communicating with a known, unmodified enclave.
  - Intel Software Guard Extensions (SGX) operates at the application level, protecting small user-space enclaves. AMD Secure Encrypted Virtualisation (SEV) and its variants (SEV-SNP) protect entire virtual machine memory from the hypervisor, making them well-suited for confidential cloud computing. Arm TrustZone partitions the processor into secure and non-secure worlds and is widely deployed on mobile SoCs for trusted applications such as biometric authentication and DRM.
  - TEEs are increasingly used in AI inference pipelines to protect proprietary model weights and sensitive input data, and in blockchain systems for off-chain computation with verifiable correctness. The confidential computing consortium, which includes major cloud providers, is standardising attestation interfaces to make TEE-backed workloads portable across hardware vendors.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z