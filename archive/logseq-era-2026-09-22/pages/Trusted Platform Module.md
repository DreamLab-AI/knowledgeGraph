public:: true

# Trusted Platform Module
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:trusted-platform-module", "@type":"Page", "title":"Trusted Platform Module", "vc:slug":"trusted-platform-module", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:trusted-platform-module",
  "@type":"Class",
  "label":"Trusted Platform Module",
  "definition":"A Trusted Platform Module (TPM) is a dedicated, tamper-resistant hardware component that provides cryptographic functions and secure storage of keys and platform measurements. It generates and protects keys that never leave the chip in plaintext, records integrity measurements in platform configuration registers, and supports operations such as secure boot and remote attestation. Defined by an open Trusted Computing Group specification, the TPM acts as a hardware root of trust on personal computers, servers and embedded devices.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:hardware-security-module","label":"Hardware Security Module"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:cryptographic-key","label":"Cryptographic Key"},
      {"@id":"urn:ngm:class:non-volatile-memory","label":"Non-Volatile Memory"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:secure-boot","label":"Secure Boot"},
      {"@id":"urn:ngm:class:remote-attestation","label":"Remote Attestation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:root-of-trust","label":"Root of Trust"},
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:tamper-resistance","label":"Tamper Resistance"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"},
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:key-management","label":"Key Management"},
      {"@id":"urn:ngm:class:confidential-computing","label":"Confidential Computing"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:hardware-security-module","label":"Hardware Security Module"},
      {"@id":"urn:ngm:class:fido-alliance","label":"FIDO Alliance"},
      {"@id":"urn:ngm:class:secure-enclave","label":"Secure Enclave"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A Trusted Platform Module is a tamper-resistant [[Hardware Security Module]] embedded in a device that protects keys and platform measurements. It serves as a [[Root of Trust]], using [[Public-Key Cryptography]] to enable [[Secure Boot]] and [[Remote Attestation]].

- ### Overview
  - The TPM is a small, standardised security chip that gives a computing platform a hardware anchor for trust. Keys generated inside the TPM can be bound to the chip so that they cannot be extracted, even by privileged software.
  - During boot, components are measured and their hashes extended into platform configuration registers; these values can later be reported in an attestation or used to seal secrets that are only released in a known-good state.
  - Because its specification is published by the Trusted Computing Group, the TPM provides interoperable security primitives across vendors, and it underpins features such as disk encryption key protection and platform integrity checks.

- ### Mechanisms
  - On-chip key generation and storage keep private keys isolated from system memory.
  - Platform configuration registers accumulate measurements of firmware and software to capture boot integrity.
  - Sealing binds secrets to a specific platform state so they unseal only when measurements match.
  - Quoting produces signed evidence of platform state for remote attestation.

- ### Applications
  - Protecting full-disk-encryption keys so they are released only on a trusted platform.
  - Anchoring secure boot and measured boot on PCs and servers.
  - Providing device identity and attestation for enterprise and zero-trust access.
  - Storing credentials for platform authentication and password-less sign-in.

- ### Relationships
  - subClassOf:: [[Hardware Security Module]]
  - hasPart:: [[Cryptographic Key]]
  - hasPart:: [[Non-Volatile Memory]]
  - enables:: [[Secure Boot]]
  - enables:: [[Remote Attestation]]
  - supports:: [[Root of Trust]]
  - supports:: [[Authentication]]
  - requires:: [[Tamper Resistance]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Digital Signature]]
  - bridgesTo:: [[Key Management]]
  - bridgesTo:: [[Confidential Computing]]
  - contrastsWith:: [[Trusted Execution Environment]]
  - relatedTo:: [[Hardware Security Module]]
  - relatedTo:: [[FIDO Alliance]]
  - relatedTo:: [[Secure Enclave]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
