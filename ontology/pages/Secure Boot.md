public:: true

# Secure Boot

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:secure-boot", "@type":"Page", "title":"Secure Boot", "vc:slug":"secure-boot", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:secure-boot",
  "@type":"Class",
  "label":"Secure Boot",
  "definition":"Secure Boot is a platform security mechanism that verifies the cryptographic signature of each component loaded during system start-up, allowing only software trusted by an established chain of keys to execute. By validating firmware, bootloaders, and the operating system loader before handing over control, it prevents persistent low-level malware such as bootkits from running. Secure Boot establishes a hardware-anchored chain of trust from power-on through to the operating system.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:security","label":"Security"}],
  "relations":{
    "dependsOn":[
      {"@id":"urn:ngm:class:firmware","label":"Firmware"},
      {"@id":"urn:ngm:class:hardware","label":"Hardware"}
    ],
    "enables":[{"@id":"urn:ngm:class:security","label":"Security"}],
    "requires":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:sha-256","label":"SHA-256"}
    ],
    "uses":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
    "implements":[{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
    "supports":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}],
    "hasPart":[{"@id":"urn:ngm:class:firmware","label":"Firmware"}],
    "bridgesTo":[{"@id":"urn:ngm:class:supply-chain","label":"Supply Chain"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "contrastsWith":[{"@id":"urn:ngm:class:authorization","label":"Authorization"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:security","label":"Security"},
      {"@id":"urn:ngm:class:firmware","label":"Firmware"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:hardware","label":"Hardware"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Secure Boot]] is a [[Security]] mechanism that verifies the signature of each component loaded at start-up so only trusted software runs. It depends on [[Firmware]] and [[Hardware]] roots of trust, requires [[Cryptography]] and a hash such as [[SHA-256]], and implements load-time [[Authentication]] of the boot chain.
- ### Overview
- Secure Boot enforces that every stage of the boot sequence is signed by a key the platform trusts before it is allowed to execute.
- The chain begins with immutable code in firmware or hardware and extends through the bootloader to the operating system loader.
- Signature databases and revocation lists let platform owners control which software is accepted or blocked.
- The mechanism defends against bootkits and tampered firmware that would otherwise gain control before defences load.
- ### Mechanisms
- Root of trust: an immutable, hardware-anchored starting key validates the first stage.
- Signature verification: each stage checks the next stage's cryptographic signature.
- Key hierarchy: platform, key-exchange, and signature databases govern what is trusted.
- Revocation: compromised signatures can be denied via revocation lists.
- ### Applications
- Protecting PCs and servers against firmware and bootloader malware.
- Establishing the foundation for measured boot and remote attestation.
- Securing embedded and IoT devices from tampered firmware.
- Underpinning supply-chain integrity for platform software.
- ### Relationships
- subClassOf:: [[Security]]
- dependsOn:: [[Firmware]]
- dependsOn:: [[Hardware]]
- enables:: [[Security]]
- requires:: [[Cryptography]]
- requires:: [[SHA-256]]
- uses:: [[Cryptography]]
- implements:: [[Authentication]]
- supports:: [[Infrastructure]]
- hasPart:: [[Firmware]]
- bridgesTo:: [[Supply Chain]]
- contrastsWith:: [[Authorization]]
- relatedTo:: [[Hardware]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
