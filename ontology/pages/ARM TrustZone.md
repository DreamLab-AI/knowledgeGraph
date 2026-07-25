public:: true

# ARM TrustZone
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:arm-trust-zone",
  "@type": "Page",
  "vc:slug": "arm-trust-zone",
  "title": "ARM TrustZone",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arm-trust-zone",
  "@type": "Class",
  "label": "ARM TrustZone",
  "definition": "ARM TrustZone is a hardware security technology built into ARM processors that partitions the system into two isolated execution worlds — a Secure World and a Normal World — enforced at the level of the CPU, memory, and peripherals. Sensitive code and data, such as cryptographic keys and biometric matching, run in the Secure World inaccessible to the rich operating system in the Normal World, providing a trusted execution environment without a separate security chip. It is ubiquitous in mobile devices, embedded systems, and IoT hardware.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:trusted-execution-environment", "label": "Trusted Execution Environment"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:secure-enclave", "label": "Secure Enclave"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:hardware-security", "label": "Hardware Security"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:tee", "label": "TEE"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ARM TrustZone is a hardware security technology that partitions an ARM system into isolated Secure and Normal Worlds at the CPU, memory, and peripheral level, providing a trusted execution environment without a separate chip.

- ### Relationships
  - ARM TrustZone is a subclass of [[Trusted Execution Environment]] technology and enables [[Secure Enclave]]-style isolation for sensitive operations. It supports broader [[Hardware Security]] goals such as secure boot and key protection, and relates to the general concept of the [[TEE]] that it implements in mainstream processors.

- ### Content
  - TrustZone's core idea is a system-wide partition into two worlds enforced by hardware rather than by the operating system. The processor carries an extra state bit — the non-secure (NS) bit — that propagates across the system bus, so that memory regions and peripherals can be designated secure or non-secure and the hardware physically prevents Normal World software, including a compromised operating system kernel, from reading Secure World memory or accessing secured devices.

  - Transitions between worlds are tightly controlled through a special instruction and a secure monitor that mediates context switches, ensuring the rich OS cannot simply jump into secure code. Inside the Secure World runs a small, trusted operating system and a set of trusted applications kept deliberately minimal to reduce attack surface, exposing only a narrow, audited interface to the Normal World. This architecture realises a trusted execution environment using the main application processor itself rather than requiring a discrete security coprocessor.

  - The technology underpins many features users rely on without seeing. Mobile devices use TrustZone to protect disk-encryption keys, perform biometric fingerprint and face matching in isolation, enforce digital-rights-management for protected media, anchor secure boot so only signed firmware runs, and store payment credentials. Because the secrets and the code that handles them live in the Secure World, even malware with full control of the Normal World OS cannot directly extract them.

  - TrustZone is not a complete answer to hardware security. As a trusted execution environment it shares the main CPU and caches with the Normal World, exposing it to side-channel and microarchitectural attacks, and the security of any deployment depends on the correctness of its trusted OS and applications, which have historically contained exploitable bugs. It is therefore best understood as one strong, widely available layer — particularly valuable in cost-sensitive mobile and embedded devices — within a defence-in-depth approach that may combine it with dedicated secure elements for the highest-value secrets.
