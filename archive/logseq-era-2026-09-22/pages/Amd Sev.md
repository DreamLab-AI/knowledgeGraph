public:: true

# Amd Sev

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:amd-sev",
  "@type": "Page",
  "title": "Amd Sev",
  "vc:slug": "amd-sev",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:amd-sev",
  "@type": "Class",
  "label": "Amd Sev",
  "definition": "AMD SEV (Secure Encrypted Virtualisation) is a hardware security technology that encrypts the memory of individual virtual machines using per-VM keys managed by an on-chip security processor, isolating guest memory from the hypervisor and other VMs. Extensions add register-state encryption and integrity protection with attestation, enabling confidential virtual machines whose contents are protected even from a privileged host. It is a leading approach to confidential computing in cloud environments.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:confidential-computing",
      "label": "Confidential Computing"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:intel-sgx",
        "label": "Intel SGX"
      },
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:secure-enclave",
        "label": "Secure Enclave"
      },
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      },
      {
        "@id": "urn:ngm:class:cloud-security",
        "label": "Cloud Security"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:memory-encryption",
        "label": "Memory Encryption"
      },
      {
        "@id": "urn:ngm:class:hardware-security",
        "label": "Hardware Security"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:memory-encryption",
        "label": "Memory Encryption"
      },
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      },
      {
        "@id": "urn:ngm:class:virtualisation",
        "label": "Virtualisation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:confidential-computing",
        "label": "Confidential Computing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cloud-security",
        "label": "Cloud Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:hypervisor",
        "label": "Hypervisor"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hardware-security",
        "label": "Hardware Security"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - AMD SEV (Secure Encrypted Virtualisation) is a hardware security technology that encrypts the memory of individual virtual machines using per-VM keys managed by an on-chip security processor, isolating guest memory from the hypervisor and other VMs. Extensions add register-state encryption and integrity protection with attestation, enabling confidential virtual machines whose contents are protected even from a privileged host. It is a leading approach to confidential computing in cloud environments.
  - Related: [[Confidential Computing]] [[Memory Encryption]] [[Intel SGX]] [[Attestation]] [[Virtualisation]]
- ### Overview
  - AMD SEV protects guest virtual machines by transparently encrypting their memory with keys held inside a dedicated on-chip security processor and never exposed to the hypervisor. Later generations, SEV-ES and SEV-SNP, additionally encrypt the guest register state on context switches and add integrity protection against memory remapping and replay, closing classes of attack a malicious host might attempt. Remote attestation lets a relying party verify that a workload runs inside a genuine SEV-protected VM before provisioning secrets, making it a foundation for confidential cloud computing.
- ### Mechanisms
  - Per-VM memory encryption with keys held by an on-chip security processor.
  - SEV-ES encrypts guest register state across context switches.
  - SEV-SNP adds memory-integrity protection against remapping and replay.
  - Hardware attestation proves a workload runs in a genuine SEV VM.
  - Protects guest memory from the hypervisor and co-located tenants.
- ### Applications
  - Confidential virtual machines in public clouds.
  - Protecting sensitive workloads from privileged hosts.
  - Multi-tenant isolation and lift-and-shift confidentiality.
  - Secret provisioning gated by remote attestation.
  - Regulated workloads requiring data-in-use protection.
- ### Relationships
  - contrastsWith:: [[Intel SGX]]
  - contrastsWith:: [[Trusted Execution Environment]]
  - relatedTo:: [[Secure Enclave]]
  - relatedTo:: [[Attestation]]
  - relatedTo:: [[Cloud Security]]
  - dependsOn:: [[Memory Encryption]]
  - dependsOn:: [[Hardware Security]]
  - uses:: [[Memory Encryption]]
  - uses:: [[Attestation]]
  - uses:: [[Virtualisation]]
  - partOf:: [[Confidential Computing]]
  - implements:: [[Trusted Execution Environment]]
  - enables:: [[Cloud Security]]
  - supports:: [[Hypervisor]]
  - requires:: [[Hardware Security]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
