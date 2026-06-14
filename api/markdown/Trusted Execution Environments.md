public:: true

# Trusted Execution Environments
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eac4b6f1fe01cdf3f049701b91fae8bdc44a12239f21f92c8f81d3a223319375",
  "@type": "Page",
  "vc:slug": "trusted-execution-environments",
  "title": "Trusted Execution Environments",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:confidential-computing",
      "vc:label": "Confidential Computing"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-computation",
      "vc:label": "Verifiable Computation"
    },
    {
      "@id": "urn:visionflow:linked:secure-enclave",
      "vc:label": "Secure Enclave"
    },
    {
      "@id": "urn:visionflow:linked:arm-trust-zone",
      "vc:label": "ARM TrustZone"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Trusted Execution Environments"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trusted-execution-environments",
  "@type": "Class",
  "label": "Trusted Execution Environments",
  "definition": "Trusted Execution Environments (TEEs) are hardware-enforced isolated regions of memory and compute within a processor where code and data are protected against inspection or tampering by any software outside the enclave, including privileged system software such as the operating system, hypervisor, or firmware. They use processor-level memory encryption, access-control registers, and cryptographic attestation to establish a root of trust anchored in silicon, allowing remote parties to verify the identity and integrity of the code running inside before sharing sensitive data with it. TEEs are the foundational enabling technology for confidential computing, enabling privacy-preserving computation on sensitive workloads in untrusted cloud or edge environments. Prominent implementations include Intel SGX, Intel TDX, AMD SEV-SNP, and ARM TrustZone.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:confidential-computing",
      "label": "Confidential Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:secure-enclave",
        "label": "Secure Enclave"
      },
      {
        "@id": "urn:ngm:class:remote-attestation",
        "label": "Remote Attestation"
      },
      {
        "@id": "urn:ngm:class:memory-encryption",
        "label": "Memory Encryption"
      },
      {
        "@id": "urn:ngm:class:trusted-measurement",
        "label": "Trusted Measurement"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hardware-root-of-trust",
        "label": "Hardware Root of Trust"
      },
      {
        "@id": "urn:ngm:class:cryptographic-attestation",
        "label": "Cryptographic Attestation"
      },
      {
        "@id": "urn:ngm:class:secure-boot",
        "label": "Secure Boot"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:arm-trust-zone",
        "label": "ARM TrustZone"
      },
      {
        "@id": "urn:ngm:class:intel-sgx",
        "label": "Intel SGX"
      },
      {
        "@id": "urn:ngm:class:amd-sev",
        "label": "AMD SEV"
      },
      {
        "@id": "urn:ngm:class:tpm",
        "label": "Trusted Platform Module"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proofs",
        "label": "Zero-Knowledge Proofs"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cloud-security",
        "label": "Cloud Security"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Supply Chain Security"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:decentralised-oracle",
        "label": "Decentralised Oracle"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:confidential-computing-consortium",
        "label": "Confidential Computing Consortium"
      },
      {
        "@id": "urn:ngm:class:global-platform-standard",
        "label": "GlobalPlatform Standard"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:side-channel-attacks",
        "label": "Side-Channel Attacks"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:tee",
      "label": "TEE"
    },
    {
      "@id": "urn:ngm:class:hardware-enclave",
      "label": "Hardware Enclave"
    }
  ],
  "quality": 0.74,
  "qualityScore": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:trusted-execution-environments:ab02f3ae0427",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eac4b6f1fe01cdf3f049701b91fae8bdc44a12239f21f92c8f81d3a223319375"
  },
  "vc:resolutions": [
    {
      "raw": "[[Confidential Computing]]",
      "resolved": "urn:visionflow:linked:confidential-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Computation]]",
      "resolved": "urn:visionflow:linked:verifiable-computation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Secure Enclave]]",
      "resolved": "urn:visionflow:linked:secure-enclave",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ARM TrustZone]]",
      "resolved": "urn:visionflow:linked:arm-trust-zone",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Trusted Execution Environments (TEEs) are hardware-enforced isolated regions within a processor that protect code and data from inspection or tampering by any software running outside the enclave, including privileged layers such as the operating system, hypervisor, and firmware. By coupling [[Memory Encryption]] with processor-level access-control registers and [[Cryptographic Attestation]], TEEs establish a root of trust anchored in silicon that enables remote parties to verify which code is executing before sharing sensitive data. They are the foundational mechanism underpinning the broader field of [[Confidential Computing]] and are deployed across cloud data-centres, mobile devices, and constrained edge nodes to enable [[Privacy-Preserving Computation]] on untrusted infrastructure.

- ### Overview
  - TEEs solve the fundamental problem of executing sensitive computation on hardware that the data owner does not control. In a conventional cloud deployment the cloud provider's hypervisor and OS can, in principle, read or modify any workload memory. A TEE prevents this by encrypting enclave memory with keys accessible only to the processor itself.
  - The security guarantee rests on three pillars:
    - **Isolation**: processor hardware enforces a boundary between the TEE region and the rest of system memory; any attempt to read enclave memory from outside returns ciphertext or triggers a fault.
    - **Integrity**: a cryptographic measurement (hash chain) of the enclave's initial code and data is recorded at load time, forming the basis for [[Remote Attestation]].
    - **Attestation**: the enclave can request a signed quote from the processor, proving to a remote verifier that specific code is running unmodified inside a genuine TEE, enabling conditional key release and trust establishment.
  - Why it matters: organisations can now outsource sensitive computation — medical records analysis, financial modelling, AI model inference on proprietary data — without having to fully trust the infrastructure provider.

- ### Key Components
  - **[[Secure Enclave]]** — the isolated memory region created by the processor; all code and data inside is encrypted in DRAM and decrypted only inside CPU caches.
  - **[[Hardware Root of Trust]]** — manufacturer-provisioned keys fused into silicon (e.g., Intel EPID, AMD VLEK) that anchor the attestation chain; cannot be extracted by software.
  - **[[Memory Encryption]]** — transparent encryption of DRAM contents using per-enclave keys managed by the processor's memory controller, preventing cold-boot and DRAM-bus eavesdropping attacks.
  - **[[Trusted Measurement]]** — a cryptographic hash (MRENCLAVE in SGX) computed over the enclave's initial content; any modification changes the measurement and breaks attestation.
  - **[[Remote Attestation]]** — a protocol by which an enclave proves its identity and integrity to a remote challenger; the attestation report is signed by the processor using its provisioning key and verified against a certificate chain issued by the hardware vendor.
  - **[[Cryptographic Attestation]] service** — vendor-operated services (Intel Attestation Service, AMD KDS, Azure Attestation Service) that issue certificates and verify quotes on behalf of relying parties.
  - **Trusted Runtime / SDK** — software libraries (Intel SGX SDK, Open Enclave SDK, Gramine, Enarx) that expose TEE primitives to application developers via standard APIs.
  - **[[Secure Boot]]** — complements TEE isolation by ensuring firmware and OS layers are measured and attested before the TEE is instantiated.

- ### Hardware Implementations
  - **[[Intel SGX]] (Software Guard Extensions)** — process-level TEE; enclaves are user-space isolated regions with a 128 MB or 256 MB EPC (Enclave Page Cache); supports per-enclave measurement and DCAP-based attestation. Available in Intel Xeon Scalable (E3/Ice Lake/Sapphire Rapids) and client CPUs.
  - **Intel TDX (Trust Domain Extensions)** — VM-level TEE introduced in 4th-gen Xeon (Sapphire Rapids); an entire virtual machine runs as a Trust Domain; hypervisor cannot read TD memory; uses TD-REPORT for attestation.
  - **[[AMD SEV]] (Secure Encrypted Virtualisation)** — family of VM-level TEE technologies; SEV encrypts VM memory; SEV-ES additionally encrypts CPU register state; SEV-SNP adds integrity protection and a reverse-map table to prevent remapping attacks.
  - **[[ARM TrustZone]]** — system-wide TEE architecture dividing the SoC into a Secure World and Normal World; pervasive in mobile (Android Keystore, Apple Secure Enclave predecessor), IoT, and automotive SoCs; Trusted OS (e.g., OP-TEE) runs in the Secure World.
  - **[[Trusted Platform Module]] (TPM)** — discrete or firmware-based co-processor that stores keys and performs attestation; complements CPU TEEs; standardised by Trusted Computing Group (TCG); integral to DICE (Device Identifier Composition Engine) for IoT attestation.
  - **RISC-V Physical Memory Protection (PMP) / Keystone** — open-source TEE framework for RISC-V; Keystone uses PMP to create enclaves; enables TEEs in open hardware ecosystems.

- ### Applications and Use Cases
  - **[[Cloud Security]] and confidential VMs** — major cloud providers (Azure Confidential VMs, Google Confidential GKE, AWS Nitro Enclaves) use TEEs to offer customers hardware-level isolation guarantees even from the cloud operator.
  - **[[Federated Learning]]** — TEEs allow a central aggregation server to prove it is running only the agreed aggregation algorithm, without seeing individual participants' model updates; bridges privacy-preserving ML and verifiable computation.
  - **[[Key Management]]** — hardware security modules (HSMs) have historically served this role; TEEs extend it to general-purpose CPUs, enabling sealed key storage tied to a specific enclave measurement.
  - **Blockchain and [[Decentralised Oracle]]s** — projects such as Chainlink's DECO, Town Crier, and Secret Network use TEEs to bring off-chain data on-chain in a privacy-preserving and verifiable manner; enables [[Smart Contracts]] to consume private web data without exposing it.
  - **Digital rights management** — TEEs protect decryption keys for protected content (Widevine L1 on Android uses TrustZone); ensure keys cannot be extracted even with root access.
  - **AI model protection** — proprietary model weights can be loaded into a TEE for inference; a customer submits encrypted input, the enclave decrypts, infers, and returns encrypted output; neither the cloud provider nor other customers see the model.
  - **[[Supply Chain Security]]** — TEE-based attestation verifies firmware versions and software configurations at boot time; underpins zero-trust device onboarding (FIDO Device Onboard, DICE).
  - **[[Decentralised Identity]]** — W3C DID methods and verifiable credential wallets running inside TEEs can attest to user identity without exposing raw credentials to the host OS.
  - **[[Edge Computing]]** — TEEs on edge nodes (Arm Cortex-A with TrustZone, Intel Atom with SGX) allow untrusted edge hardware to run sensitive inference workloads; reduces latency versus cloud round-trips.
  - **Secure payment processing** — EMVCo and payment networks mandate TEEs (SE or TrustZone-based) for host-card emulation (HCE) and mobile payment applications.

- ### Security Considerations and Limitations
  - **Side-channel attacks** — TEEs do not prevent microarchitectural [[Side-Channel Attacks]] such as Spectre, Meltdown, Foreshadow (L1TF), MDS, SGAxe, and various cache-timing attacks; these require mitigations at both hardware (microcode) and software (constant-time coding) levels.
  - **TCB size** — a larger Trusted Computing Base increases attack surface; VM-level TEEs (TDX, SEV-SNP) have larger TCBs than process-level TEEs (SGX) but easier application portability.
  - **Rollback attacks** — without trusted monotonic counters, an attacker may replay an older enclave image; TEE designs address this via platform sealing and anti-rollback counters in TPM or persistent storage.
  - **Supply chain trust** — TEE security ultimately depends on trusting the silicon vendor's manufacturing, firmware signing, and attestation infrastructure; nation-state adversaries with physical access may compromise this.
  - **Performance overhead** — enclave transitions (ECALL/OCALL in SGX) carry significant overhead; memory encryption adds DRAM bandwidth cost; workloads must be designed to minimise enclave exits.
  - **Comparison with [[Homomorphic Encryption]]** — FHE allows computation on encrypted data without decrypting it, avoiding all runtime exposure, but is orders of magnitude slower than TEE-based approaches; TEEs offer practical performance at the cost of hardware trust assumptions.
  - **Comparison with [[Zero-Knowledge Proofs]]** — ZKPs provide cryptographic proofs of computation correctness without hardware dependencies, but are currently limited in general-purpose expressiveness and computational cost; TEEs and ZKPs are often combined for complementary guarantees.

- ### Relationships
  - subClassOf:: [[Confidential Computing]]
  - hasPart:: [[Secure Enclave]]
  - hasPart:: [[Remote Attestation]]
  - hasPart:: [[Memory Encryption]]
  - hasPart:: [[Trusted Measurement]]
  - requires:: [[Hardware Root of Trust]]
  - requires:: [[Cryptographic Attestation]]
  - requires:: [[Secure Boot]]
  - enables:: [[Verifiable Computation]]
  - enables:: [[Privacy-Preserving Computation]]
  - enables:: [[Secure Multi-Party Computation]]
  - enables:: [[Decentralised Identity]]
  - uses:: [[ARM TrustZone]]
  - uses:: [[Intel SGX]]
  - uses:: [[AMD SEV]]
  - uses:: [[Trusted Platform Module]]
  - contrastsWith:: [[Homomorphic Encryption]]
  - contrastsWith:: [[Zero-Knowledge Proofs]]
  - supports:: [[Cloud Security]]
  - supports:: [[Edge Computing]]
  - supports:: [[Supply Chain Security]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Decentralised Oracle]]
  - standardizedBy:: [[Confidential Computing Consortium]]
  - standardizedBy:: [[GlobalPlatform Standard]]
  - relatedTo:: [[Side-Channel Attacks]]
  - relatedTo:: [[Key Management]]

- ### Standards and Context
  - **[[Confidential Computing Consortium]] (CCC)** — Linux Foundation project that defines open specifications and fosters open-source TEE tooling; governs Open Enclave SDK, Enarx, Gramine, and Keystone projects; produces the "A Technical Analysis of Confidential Computing" white paper.
  - **[[GlobalPlatform Standard]]** — industry association that standardises the TEE API (TEE Internal Core API, TEE Client API) widely adopted for TrustZone-based implementations on mobile and IoT devices; underpins GP TEE specification suite.
  - **Trusted Computing Group (TCG)** — standards body for [[Trusted Platform Module]] specifications (TPM 2.0), TCG DICE (Device Identifier Composition Engine), and platform integrity frameworks that complement TEE attestation.
  - **IETF Remote ATtestation ProcedureS (RATS)** — RFC 9334 defines an architecture for remote attestation; provides the conceptual framework (Attester, Verifier, Relying Party) used in TEE attestation protocol design.
  - **NIST SP 800-193** — Platform Firmware Resiliency Guidelines; references TEEs as a protection mechanism for firmware integrity.
  - **FIDO Device Onboard (FDO)** — IoT device onboarding protocol that leverages TEE-based attestation to securely provision devices at manufacturing time.
  - **EU Cyber Resilience Act** — emerging EU regulation that will require hardware security features including TEE-class isolation for critical connected products; TEE adoption will be driven by compliance mandates in regulated industries.

- ### Provenance
  - sources:: Confidential Computing Consortium white papers; Intel SGX Developer Reference; AMD SEV-SNP ABI Specification; ARM TrustZone Developer Guide; IETF RFC 9334 (RATS Architecture); GlobalPlatform TEE Specifications; NIST SP 800-193
  - updated:: 2026-06-13
