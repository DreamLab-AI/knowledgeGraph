public:: true

# Air Gap

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:air-gap",
  "@type": "Page",
  "title": "Air Gap",
  "vc:slug": "air-gap",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:air-gap",
  "@type": "Class",
  "label": "Air Gap",
  "definition": "An air gap is a security measure that physically isolates a computer or storage device from unsecured networks, including the public internet and any networked device. In the context of cryptocurrency custody, an air-gapped device holds private keys and signs transactions while never establishing a live network connection, transferring data only through media such as QR codes or removable storage. This isolation dramatically reduces the remote attack surface available to adversaries.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cold-storage",
      "label": "Cold Storage"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:threat-model",
        "label": "Threat Model"
      },
      {
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key",
        "label": "Cryptographic Key"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cold-storage",
        "label": "Cold Storage"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:secure-enclave",
        "label": "Secure Enclave"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
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
- An [[Air Gap]] physically isolates a system from any network, ensuring [[Private Key]] material never touches an internet-connected machine. It is a cornerstone of [[Cold Storage]] and disciplined [[Self-Custody]], constraining a [[Threat Model]] to local, physical access rather than remote compromise.
- ### Overview
- The air-gap concept predates cryptocurrency, originating in classified and industrial control environments where the cost of a breach justified severing all network connectivity. Sensitive computation happens on the isolated side, and only carefully vetted data crosses the gap.
- In blockchain custody, the air gap separates key generation and transaction signing from the broadcasting environment. An unsigned transaction is constructed online, transferred to the air-gapped signer, signed there, and the signed transaction is carried back for broadcast.
- The strength of an air gap depends on the discipline of the data-transfer mechanism. Optical channels such as [[QR Code]] scanning are favoured because they avoid the malware-propagation risk inherent in writable USB media.
- ### Mechanisms
- Physical isolation: the signing device has no Wi-Fi, Bluetooth, cellular, or wired network interface enabled.
- Mediated data transfer: unsigned and signed payloads cross the boundary via QR codes, microSD cards, or one-way data diodes.
- Deterministic signing: the offline device derives keys from a seed and produces signatures without exposing the [[Private Key]].
- Defence in depth: an air gap is combined with [[Multisignature]] schemes and [[Hardware Security Module]] protection for higher assurance.
- ### Applications
- Cold-storage vaults for exchanges and institutional custodians securing large [[Cryptographic Key]] holdings.
- Hardware signing devices that contrast with always-online [[Hardware Wallet]] usage by remaining fully offline.
- Certificate authorities and root-key ceremonies that protect long-lived signing keys.
- Critical infrastructure and defence systems requiring strict [[Network Security]] separation.
- ### Relationships
- partOf:: [[Cold Storage]]
- contrastsWith:: [[Network Security]]
- contrastsWith:: [[Hardware Wallet]]
- relatedTo:: [[Self-Custody]]
- relatedTo:: [[Threat Model]]
- relatedTo:: [[Multisignature]]
- uses:: [[Private Key]]
- uses:: [[Cryptographic Key]]
- supports:: [[Key Management]]
- supports:: [[Security]]
- enables:: [[Self-Custody]]
- requires:: [[Hardware Security Module]]
- bridgesTo:: [[Secure Enclave]]
- dependsOn:: [[Private Key]]
- ### Provenance
- updated:: 2026-06-15
