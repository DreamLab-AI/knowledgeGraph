public:: true

# secure enclave
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:374d200bedb320f596fb7ecc0ac8d660412260b31e5ae87bdc7bfbcc3462c8b1",
  "@type": "Page",
  "vc:slug": "secure-enclave",
  "title": "secure enclave",
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
  "@id": "urn:ngm:class:secure-enclave",
  "@type": "Class",
  "label": "Secure Enclave",
  "definition": "A secure enclave is a hardware-isolated execution environment embedded within a processor that maintains confidentiality and integrity guarantees for code and data even when the host operating system, hypervisor, or other privileged software is compromised. Implemented through technologies such as Intel SGX, ARM TrustZone, Apple Secure Enclave Processor, and AMD SEV-SNP, these environments use hardware memory encryption and access-control mechanisms enforced within the CPU package itself. Remote attestation allows a verifier to cryptographically confirm that specific code runs inside a genuine, unmodified enclave before transmitting sensitive data to it, without trusting the surrounding software stack. Secure enclaves are foundational to confidential computing, privacy-preserving machine learning, decentralised identity, and secure multi-party computation.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:trusted-execution-environment",
      "label": "Trusted Execution Environment"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:confidential-computing", "label": "Confidential Computing"},
      {"@id": "urn:ngm:class:hardware-root-of-trust", "label": "Hardware Root of Trust"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:remote-attestation", "label": "Remote Attestation"},
      {"@id": "urn:ngm:class:memory-encryption", "label": "Memory Encryption"},
      {"@id": "urn:ngm:class:sealed-storage", "label": "Sealed Storage"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:hardware-root-of-trust", "label": "Hardware Root of Trust"},
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-machine-learning", "label": "Privacy-Preserving Machine Learning"},
      {"@id": "urn:ngm:class:secure-multi-party-computation", "label": "Secure Multi-Party Computation"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:confidential-smart-contract", "label": "Confidential Smart Contract"},
      {"@id": "urn:ngm:class:digital-rights-management", "label": "Digital Rights Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"},
      {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"},
      {"@id": "urn:ngm:class:side-channel-attack", "label": "Side-Channel Attack"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"},
      {"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"},
      {"@id": "urn:ngm:class:hypervisor", "label": "Hypervisor"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:intel-sgx", "label": "Intel SGX"},
      {"@id": "urn:ngm:class:arm-trustzone", "label": "ARM TrustZone"},
      {"@id": "urn:ngm:class:amd-sev", "label": "AMD SEV"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:supply-chain-security", "label": "Supply Chain Security"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:hardware-enclave", "label": "Hardware Enclave"},
    {"@id": "urn:ngm:class:processor-enclave", "label": "Processor Enclave"}
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
  - A **secure enclave** is a hardware-enforced, isolated execution environment embedded directly within a processor that protects the confidentiality and integrity of code and data from all other software on the same machine — including the operating system, hypervisor, and device drivers. Technologies such as [[Intel SGX]], [[ARM TrustZone]], [[AMD SEV]], and Apple's Secure Enclave Processor implement this isolation by encrypting enclave memory within the CPU package and enforcing access policies in hardware. A distinguishing capability is [[Remote Attestation]], which allows a remote party to receive a cryptographically signed measurement proving that a specific software image is running inside a genuine, unmodified enclave before sending it sensitive data. Secure enclaves are a core primitive of [[Confidential Computing]] and underpin privacy-preserving computation, [[Decentralised Identity]], and secure key custody across cloud and embedded deployments.

- ### Overview
  - Secure enclaves extend the processor trust boundary inward, creating an island of hardware-verified trustworthiness within an otherwise potentially adversarial software stack.
  - Traditional security models rely on trusting the operating system and hypervisor; enclaves are explicitly designed for threat models where those layers may be compromised, malicious cloud insiders are in scope, or physical memory bus probing is a concern.
  - The central mechanism is hardware-enforced memory encryption: enclave pages are encrypted with keys held only inside the CPU die, so DRAM chips, DMA controllers, and even the OS kernel see only ciphertext when accessing enclave memory.
  - The enclave's code and initial data are measured (hashed) during loading; the measurement forms the basis for [[Remote Attestation]] — a proof that the enclave is exactly the software image a relying party approved.
  - This architecture enables "confidential outsourcing": a data owner can upload encrypted data to a cloud-hosted enclave operated by an untrusted provider, receive an attestation that the correct processing code is running, decrypt inside the enclave, and receive results — with cryptographic assurance that the cloud provider never saw the plaintext.
  - Side-channel attacks (speculative execution leakage, cache-timing, power analysis) are the principal residual threat class and are an active area of microarchitectural security research.

- ### Key Components and Mechanisms
  - **Hardware Memory Encryption**
    - Enclave pages are encrypted with ephemeral keys generated inside the CPU; keys never leave the processor package.
    - [[Intel SGX]] uses the Memory Encryption Engine (MEE); [[AMD SEV]] encrypts entire VM memory with per-VM keys; ARM Realm Management Extension (RME) encrypts realm memory.
    - Integrity tags (MAC codes) are stored alongside each cache line to detect tampering by the host OS or DMA devices.
  - **Sealed Storage** (also called sealing)
    - Enclaves can encrypt data to persistent storage using a key derived from the enclave's measurement and the platform's hardware identity.
    - Only the same enclave binary on the same hardware can unseal the data, preventing migration without re-sealing.
    - Analogous in function to [[Hardware Security Module]] key wrapping but implemented in CPU firmware.
  - **Remote Attestation**
    - The enclave requests a signed report from the CPU's provisioning hardware, embedding the enclave measurement (MRENCLAVE / MRSIGNER in SGX).
    - The report is verified against Intel Attestation Service (IAS) or DCAP (Data Centre Attestation Primitives) — or ARM's equivalent — by the relying party before establishing a secure channel.
    - Attestation can be combined with [[Zero-Knowledge Proof]] techniques (e.g. ZK-attestation) to prove properties of the enclave code without revealing the code itself.
  - **Enclave Lifecycle Management**
    - Initialisation: code and data pages are loaded and measured; the CPU finalises the measurement after all pages are in place.
    - Entry and exit: the processor performs context switches (EENTER/EEXIT in SGX) that clear CPU registers to prevent leakage between enclave and untrusted code.
    - Provisioning: platforms receive attestation identity keys via an online provisioning ceremony with the hardware vendor.
  - **Trust Chains and Roots**
    - A [[Hardware Root of Trust]] anchors the entire system — typically a provisioning key fused into the CPU at manufacture, combined with a vendor-controlled certificate hierarchy.
    - Platform Attestation Keys (PAKs) and Quote Signing Keys (QSKs) form the bridge between on-chip identity and verifiable external certificates.

- ### Major Implementations
  - **[[Intel SGX]] (Software Guard Extensions)**
    - Introduced with Skylake (2015); provides user-space enclaves within a single process.
    - Supports EPID (group-based) and ECDSA (DCAP) attestation modes; widely deployed in cloud TEE services (Azure Confidential Computing, IBM Cloud).
    - Architectural vulnerabilities (Spectre, Foreshadow, SGAxe) have driven iterative mitigations; later generations include stronger isolation.
  - **[[ARM TrustZone]]**
    - Hardware partition of the processor into Normal World (rich OS) and Secure World (Trusted Execution Environment running a Trusted OS such as OP-TEE).
    - Ubiquitous in mobile SoCs (Qualcomm, MediaTek, Samsung Exynos) and embedded devices; used for mobile payment, DRM, and biometric data protection.
    - ARM Confidential Compute Architecture (CCA) with Realm Management Extension extends this model for cloud VMs.
  - **[[AMD SEV]] (Secure Encrypted Virtualisation)**
    - SEV encrypts VM memory with per-VM keys; SEV-ES also encrypts CPU register state on VMEXIT; SEV-SNP adds integrity and replay protection.
    - Targeted at cloud infrastructure: allows cloud tenants to maintain confidentiality from cloud operators (hypervisor cannot read VM memory).
    - AMD's attestation is handled via the AMD Secure Processor (ASP) embedded in each EPYC CPU.
  - **Apple Secure Enclave Processor (SEP)**
    - Dedicated coprocessor physically separate from the application CPU in Apple SoCs (A-series, M-series).
    - Manages biometric data (Touch ID, Face ID), device encryption keys, and Apple Pay credentials; communicates with the main CPU only via a narrow mailbox interface.
    - Never exposes private keys outside the SEP boundary; keys are generated and remain inside the coprocessor.
  - **RISC-V Keystone and Sanctum**
    - Open-source enclave frameworks for RISC-V processors; enable academic research and customisable enclave implementations without proprietary vendor lock-in.

- ### Applications and Use Cases
  - **Confidential Cloud Computing**
    - Cloud tenants run workloads in enclaves, preventing infrastructure operators from inspecting customer data or AI model weights.
    - Services: Microsoft Azure Confidential VMs (SEV-SNP), Google Cloud Confidential VMs, AWS Nitro Enclaves.
  - **[[Privacy-Preserving Machine Learning]]**
    - Sensitive training data (medical records, financial transactions) processed in enclaves; model weights never exposed to the hosting infrastructure.
    - Attestation allows data owners to audit which model code processed their data before releasing it to the enclave.
    - Bridges to [[Federated Learning]] for privacy-preserving distributed model training without centralising raw data.
  - **[[Decentralised Identity]] and Verifiable Credentials**
    - Enclaves protect private keys for self-sovereign identity wallets; attestation proves that signing operations occurred inside a compliant security boundary.
    - Used in mobile digital identity schemes (e.g. ePassport biometric verification in TrustZone).
  - **[[Confidential Smart Contract]] Execution**
    - Blockchain platforms (Secret Network, Oasis Network, Phala Network) use SGX-based enclaves to execute smart contract logic on private data that is not visible on the public ledger.
    - [[Blockchain]] validators run contracts inside enclaves and produce attestation proofs published on-chain.
  - **Secure Key Custody and Cryptographic Operations**
    - Private key generation and signing performed inside enclaves for cryptocurrency wallets, certificate authorities, and HSM alternatives.
    - Lower cost and greater flexibility than dedicated [[Hardware Security Module]] appliances for software-defined key management.
  - **Digital Rights Management ([[Digital Rights Management]])**
    - Media decryption keys held in TrustZone secure world; decrypted video output only accessible to trusted display paths (HDCP pipeline).
  - **AI Model Confidentiality**
    - Proprietary model weights loaded into an enclave; clients query the model via an encrypted channel with attestation confirming the model binary, preventing weight theft.

- ### Relationships
  - partOf:: [[Confidential Computing]]
  - partOf:: [[Hardware Root of Trust]]
  - hasPart:: [[Remote Attestation]]
  - hasPart:: [[Memory Encryption]]
  - hasPart:: [[Sealed Storage]]
  - requires:: [[Hardware Root of Trust]]
  - requires:: [[Cryptographic Key Management]]
  - enables:: [[Privacy-Preserving Machine Learning]]
  - enables:: [[Secure Multi-Party Computation]]
  - enables:: [[Decentralised Identity]]
  - enables:: [[Confidential Smart Contract]]
  - enables:: [[Digital Rights Management]]
  - uses:: [[Public Key Cryptography]]
  - uses:: [[Symmetric Encryption]]
  - contrastsWith:: [[Hardware Security Module]]
  - contrastsWith:: [[Virtual Machine]]
  - contrastsWith:: [[Hypervisor]]
  - relatedTo:: [[Intel SGX]]
  - relatedTo:: [[ARM TrustZone]]
  - relatedTo:: [[AMD SEV]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - relatedTo:: [[Supply Chain Security]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Decentralised Finance]]

- ### Threat Model and Limitations
  - **Side-Channel Attacks**
    - Speculative execution attacks (Spectre variants, Foreshadow/L1TF, MDS) can leak enclave secrets via CPU microarchitectural state.
    - Cache-timing attacks exploit shared cache structures between enclave and untrusted code.
    - Mitigations include microcode patches, hyperthreading disablement, CLFLUSHOPT restrictions, and L1D cache flushing on enclave entry.
  - **Rollback and Replay Attacks**
    - Sealed storage is vulnerable to rollback if an attacker stores an older sealed blob and replaces the current one.
    - Monotonic counters (hardware anti-rollback) are provided in some platforms (Intel ME counters, TPM-backed counters).
  - **Supply Chain Attacks**
    - The [[Hardware Root of Trust]] depends on the integrity of the CPU manufacturing process and vendor provisioning infrastructure.
    - Compromised provisioning keys or malicious silicon alterations could undermine attestation validity.
    - Connects to [[Supply Chain Security]] concerns in hardware procurement.
  - **Enclave Code Vulnerabilities**
    - Memory safety bugs inside enclave code execute within the trusted boundary; a buffer overflow in an SGX enclave is still exploitable by the enclave's own logic.
    - Enclave attack surface must be minimised; formal verification of enclave code is an active research area.
  - **Vendor Trust**
    - DCAP and cloud-based attestation ultimately root in vendor certificate hierarchies (Intel, AMD, ARM/Apple); a compromise of these PKIs would undermine global attestation.
    - Open-source alternatives (RISC-V Keystone) aim to reduce single-vendor trust dependency.

- ### Standards and Governance
  - **Confidential Computing Consortium (CCC)**
    - Linux Foundation project unifying enclave ecosystem; members include Intel, AMD, ARM, Microsoft, Google, IBM.
    - Maintains open-source projects: Enarx (hardware-agnostic enclave runtime), Gramine (library OS for SGX), Veraison (attestation verification services), Open Enclave SDK.
  - **IETF RATS (Remote ATtestation procedureS)**
    - RFC 9334 and related drafts define an architecture for remote attestation — evidence, endorsements, appraisals, and attestation results.
    - Applicable to all TEE implementations and IoT device attestation scenarios.
  - **TCG (Trusted Computing Group)**
    - Produces TPM specifications and Platform Firmware Resiliency guidelines that complement enclave attestation with platform-level integrity measurement.
    - [[Trusted Platform Module]] interoperates with enclave frameworks for full platform attestation chains.
  - **NIST SP 800-193 / 800-155**
    - Platform firmware resiliency and BIOS integrity measurement guidelines; relevant to the boot-chain trust anchors that underpin enclave provisioning.
  - **Common Criteria and FIPS 140-3**
    - Evaluation frameworks used to certify enclave-adjacent security products (HSMs, TEE implementations); SEP and some SGX configurations are evaluated against these.

- ### Provenance
  - sources:: Intel SGX Developer Guide; ARM Security Technology — Building a Secure System using TrustZone Technology; AMD SEV-SNP white paper; IETF RFC 9334 (RATS Architecture); Confidential Computing Consortium project documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
