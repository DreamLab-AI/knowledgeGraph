public:: true

# Memory Encryption

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:memory-encryption", "@type":"Page", "title":"Memory Encryption", "vc:slug":"memory-encryption", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:memory-encryption",
  "@type":"Class",
  "label":"Memory Encryption",
  "definition":"Memory encryption is the protection of data held in a system's volatile memory (RAM) by encrypting it transparently between the processor and the memory controller. It defends against physical attacks such as cold-boot extraction and bus snooping, and underpins confidential computing by keeping a workload's working set unreadable to other tenants, the hypervisor, or anyone with physical access. Modern implementations apply per-page or per-VM keys managed within the CPU package so that plaintext never leaves the trust boundary of the silicon.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:confidential-computing","label":"Confidential Computing"}],
    "requires":[{"@id":"urn:ngm:class:key-management","label":"Key Management"},{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
    "enables":[{"@id":"urn:ngm:class:data-protection","label":"Data Protection"}],
    "uses":[{"@id":"urn:ngm:class:hardware-security-module","label":"Hardware Security Module"}],
    "dependsOn":[{"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"}],
    "implements":[{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
    "supports":[{"@id":"urn:ngm:class:secure-enclave","label":"Secure Enclave"}],
    "contrastsWith":[{"@id":"urn:ngm:class:homomorphic-encryption","label":"Homomorphic Encryption"}],
    "bridgesTo":[{"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"}],
    "relatedTo":[{"@id":"urn:ngm:class:side-channel-attack","label":"Side-Channel Attack"},{"@id":"urn:ngm:class:cryptography","label":"Cryptography"},{"@id":"urn:ngm:class:security","label":"Security"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Memory encryption protects data resident in [[Encryption|volatile memory]] so that it remains unreadable outside the processor's trust boundary. It is a core building block of [[Confidential Computing]] and a complement to [[Trusted Execution Environment]] isolation, drawing on [[Cryptography]] primitives and disciplined [[Key Management]].
- ### Overview
- Conventional disk and transport encryption leave data in plaintext while it is loaded into RAM for processing. Memory encryption closes this gap by encrypting and decrypting cache lines or pages as they cross the boundary between the CPU and the memory subsystem.
- The keys are generated and held inside the CPU package, so the cleartext working set is never exposed on the external memory bus, in swap files, or to an attacker with physical access to the DIMMs.
- Commercial realisations include CPU-integrated transparent encryption engines that apply either a single platform key for whole-memory protection or per-virtual-machine keys for multi-tenant isolation.
- ### Mechanisms
- A dedicated encryption engine sits in the memory controller path, performing authenticated encryption (often a block cipher in a tweakable mode) on every read and write.
- Key material is provisioned at boot inside the silicon root of trust and is never readable by software, including privileged firmware.
- Per-VM or per-tenant keying allows a hypervisor to host mutually distrusting workloads whose memory cannot be inspected by neighbours or the host.
- Integrity trees and freshness counters can be layered on top to defeat replay and tampering, extending confidentiality into integrity protection.
- ### Applications
- Confidential computing platforms that run sensitive workloads in untrusted cloud environments.
- Protecting cryptographic keys, credentials, and regulated data while they are actively in use.
- Hardening endpoints against cold-boot and bus-probing attacks that target unattended or stolen devices.
- Isolating tenants in multi-tenant infrastructure where the operator is outside the trust boundary.
- ### Relationships
- partOf:: [[Confidential Computing]]
- requires:: [[Key Management]]
- requires:: [[Cryptography]]
- enables:: [[Data Protection]]
- uses:: [[Hardware Security Module]]
- dependsOn:: [[Trusted Execution Environment]]
- implements:: [[Encryption]]
- supports:: [[Secure Enclave]]
- contrastsWith:: [[Homomorphic Encryption]]
- bridgesTo:: [[Trusted Execution Environment]]
- relatedTo:: [[Side-Channel Attack]]
- relatedTo:: [[Cryptography]]
- relatedTo:: [[Security]]
- ### Provenance
- updated:: 2026-06-15
