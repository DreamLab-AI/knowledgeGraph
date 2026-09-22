public:: true

# Secure Element
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:secure-element", "@type":"Page", "title":"Secure Element", "vc:slug":"secure-element", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:secure-element",
  "@type":"Class",
  "label":"Secure Element",
  "definition":"A Secure Element (SE) is a tamper-resistant hardware component, typically a dedicated microcontroller, that securely stores cryptographic keys and executes sensitive operations such as signing and authentication in physical isolation from the host system. It enforces hardware-backed access controls so that secret material never leaves the chip in plaintext, resisting both software extraction and many physical attacks. Secure Elements underpin hardware wallets, payment cards, SIMs and mobile secure payment systems, and are commonly certified against standards such as Common Criteria EAL levels.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:hardware-security-module","label":"Hardware Security Module"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:hardware-wallet","label":"Hardware Wallet"},
      {"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:private-key","label":"Private Key"},
      {"@id":"urn:ngm:class:firmware","label":"Firmware"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:key-management","label":"Key Management"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"},
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:encryption","label":"Encryption"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:tee","label":"Trusted Execution Environment"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:secure-enclave","label":"Secure Enclave"},
      {"@id":"urn:ngm:class:trusted-platform-module","label":"Trusted Platform Module"},
      {"@id":"urn:ngm:class:side-channel-attack","label":"Side-Channel Attack"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Secure Element]] is a tamper-resistant chip that isolates secret keys and cryptographic operations from the host, used in [[Hardware Wallet]]s, payment cards and SIMs.
	- It is a specialised form of [[Hardware Security Module]] that resists [[Side-Channel Attack]]s and physical extraction.
	- It anchors [[Cold Storage]] and [[Self-Custody]] by ensuring a [[Private Key]] never leaves the chip in plaintext.
- ### Overview
	- A Secure Element combines isolated non-volatile storage, a cryptographic coprocessor and hardened firmware in a single package.
	- Two principal form factors dominate: embedded SE soldered onto a device board, and removable SE such as smart cards and SIMs.
	- Certification regimes (Common Criteria EAL5+/EAL6+, EMVCo, FIPS 140) provide assurance about resistance to defined attacker capabilities.
	- The chip exposes a constrained command interface, so the host can request signatures or authentication results but cannot read the underlying secrets.
- ### Mechanisms
	- **Physical isolation**: secrets reside in shielded memory inaccessible to the application processor.
	- **On-chip cryptography**: signing, key derivation and encryption execute inside the SE so plaintext keys never traverse external buses.
	- **Tamper response**: active meshes, voltage and clock sensors, and shielding detect and react to invasive and fault-injection attempts.
	- **Access control**: PIN, lifecycle states and counters gate operations and rate-limit guessing.
- ### Applications
	- [[Hardware Wallet]] devices that sign blockchain transactions without exposing keys to internet-connected hosts.
	- Mobile and contactless payment, where the SE holds tokenised card credentials.
	- SIM/eSIM identity and network authentication.
	- Passports and national identity documents using embedded secure chips.
- ### Relationships
	- partOf:: [[Hardware Wallet]]
	- partOf:: [[Trusted Execution Environment]]
	- hasPart:: [[Private Key]]
	- hasPart:: [[Firmware]]
	- requires:: [[Cryptography]]
	- requires:: [[Key Management]]
	- enables:: [[Cold Storage]]
	- enables:: [[Digital Signature]]
	- enables:: [[Authentication]]
	- uses:: [[Encryption]]
	- supports:: [[Self-Custody]]
	- contrastsWith:: [[Trusted Execution Environment]]
	- relatedTo:: [[Secure Enclave]]
	- relatedTo:: [[Trusted Platform Module]]
	- relatedTo:: [[Side-Channel Attack]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
