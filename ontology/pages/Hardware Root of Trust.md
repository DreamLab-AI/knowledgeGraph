public:: true

# Hardware Root of Trust
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hardware-root-of-trust", "@type":"Page", "title":"Hardware Root of Trust", "vc:slug":"hardware-root-of-trust", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:hardware-root-of-trust",
  "@type":"Class",
  "label":"Hardware Root of Trust",
  "definition":"A Hardware Root of Trust (HRoT) is an immutable, hardware-anchored set of functions and keys that a system inherently trusts and from which all higher-level security properties are derived. Implemented in silicon or a dedicated security chip, it provides the foundation for secure boot, measured boot, attestation and key protection by establishing a starting point that cannot be modified by software. Because every subsequent trust decision chains back to it, the integrity of the HRoT determines the trustworthiness of the entire platform.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:security","label":"Security"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"},
      {"@id":"urn:ngm:class:trusted-platform-module","label":"Trusted Platform Module"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:firmware","label":"Firmware"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:key-management","label":"Key Management"},
      {"@id":"urn:ngm:class:hardware-security-module","label":"Hardware Security Module"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:encryption","label":"Encryption"},
      {"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:zero-trust-architecture","label":"Zero Trust Architecture"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:secure-enclave","label":"Secure Enclave"},
      {"@id":"urn:ngm:class:secure-element","label":"Secure Element"},
      {"@id":"urn:ngm:class:side-channel-attack","label":"Side-Channel Attack"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Hardware Root of Trust]] is the immutable hardware anchor from which all platform security guarantees are derived.
	- It is realised in a [[Trusted Platform Module]], [[Secure Element]] or [[Secure Enclave]] and underpins secure boot and [[Authentication]].
	- Because every trust decision chains back to it, its [[Cryptography]] and [[Key Management]] determine the trustworthiness of the whole system.
- ### Overview
	- An HRoT provides a small, verifiable set of trusted functions that cannot be altered by software running above it.
	- It typically includes immutable boot code (ROM), device-unique keys fused at manufacture, and a cryptographic engine.
	- The chain of trust extends outward: the HRoT measures and verifies firmware, which verifies the bootloader, which verifies the operating system.
	- Standards bodies (TCG, NIST SP 800-193) define resilience properties: protection, detection and recovery of platform firmware.
- ### Key aspects
	- **Immutability**: the root cannot be reprogrammed once provisioned, so attackers cannot relocate the trust anchor.
	- **Device identity**: hardware-fused keys give each device a unique, unforgeable identity for [[Attestation]] and provisioning.
	- **Measured boot**: each boot stage is hashed and recorded so remote parties can verify platform integrity.
	- **Key protection**: private keys are generated and used inside the root and never exported in plaintext.
- ### Applications
	- Secure and measured boot for servers, laptops and embedded devices.
	- Remote attestation establishing platform integrity before granting network access in [[Zero Trust Architecture]].
	- Provisioning of device identity in IoT and confidential-computing deployments.
	- Anchoring [[Key Management]] and disk encryption keys.
- ### Relationships
	- partOf:: [[Trusted Execution Environment]]
	- partOf:: [[Trusted Platform Module]]
	- hasPart:: [[Cryptography]]
	- hasPart:: [[Firmware]]
	- requires:: [[Key Management]]
	- requires:: [[Hardware Security Module]]
	- enables:: [[Authentication]]
	- enables:: [[Digital Signature]]
	- uses:: [[Encryption]]
	- uses:: [[Certificate Authority]]
	- supports:: [[Zero Trust Architecture]]
	- relatedTo:: [[Secure Enclave]]
	- relatedTo:: [[Secure Element]]
	- relatedTo:: [[Side-Channel Attack]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
