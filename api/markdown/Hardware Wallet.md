public:: true

# Hardware Wallet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hardware-wallet",
  "@type": "Page",
  "vc:slug": "hardware-wallet",
  "title": "Hardware Wallet",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hardware-wallet",
  "@type": "Class",
  "label": "Hardware Wallet",
  "definition": "A hardware wallet is a dedicated physical device that stores cryptocurrency private keys in a secure element and signs transactions internally, so the keys never leave the device or touch an internet-connected computer. It protects against malware and remote key theft by isolating signing operations behind on-device confirmation. Hardware wallets are a foundational tool for self-custody of digital assets.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:secure-element", "label": "Secure Element"},
      {"@id": "urn:ngm:class:private-key", "label": "Private Key"},
      {"@id": "urn:ngm:class:firmware", "label": "Firmware"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:physical-confirmation", "label": "Physical Confirmation"},
      {"@id": "urn:ngm:class:seed-phrase", "label": "Seed Phrase"},
      {"@id": "urn:ngm:class:usb-interface", "label": "USB Interface"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:self-custody", "label": "Self Custody"},
      {"@id": "urn:ngm:class:cold-storage", "label": "Cold Storage"},
      {"@id": "urn:ngm:class:transaction-signing", "label": "Transaction Signing"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:bip39", "label": "BIP39"},
      {"@id": "urn:ngm:class:bip44", "label": "BIP44"},
      {"@id": "urn:ngm:class:hierarchical-deterministic-wallet", "label": "Hierarchical Deterministic Wallet"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:software-wallet", "label": "Software Wallet"},
      {"@id": "urn:ngm:class:custodial-wallet", "label": "Custodial Wallet"},
      {"@id": "urn:ngm:class:hot-wallet", "label": "Hot Wallet"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:institutional-custody", "label": "Institutional Custody"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:security", "label": "Security"},
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi Sig Governance"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:decentralized-finance", "label": "Decentralized Finance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:cold-hardware-wallet", "label": "Cold Hardware Wallet"},
    {"@id": "urn:ngm:class:crypto-hardware-wallet", "label": "Crypto Hardware Wallet"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A hardware wallet is a tamper-resistant signing device for private keys; it is a component used by [[Multi-Sig Governance]] schemes that combine multiple independent signers.
- ### Content
  - Keys are generated and held in a secure element, and transactions are signed on-device after physical confirmation, defeating host-based malware. In multi-signature setups, several hardware wallets distribute signing authority, raising the bar for theft or coercion and supporting institutional custody controls.
