public:: true

# Hierarchical Deterministic Wallet

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:hierarchical-deterministic-wallet",
  "@type": "Page",
  "title": "Hierarchical Deterministic Wallet",
  "vc:slug": "hierarchical-deterministic-wallet",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hierarchical-deterministic-wallet",
  "@type": "Class",
  "label": "Hierarchical Deterministic Wallet",
  "definition": "A hierarchical deterministic (HD) wallet is a cryptocurrency wallet that derives a tree of key pairs from a single master seed using a deterministic algorithm, as standardised in BIP-32 and related proposals. From one human-readable mnemonic phrase the wallet can regenerate an effectively unlimited hierarchy of addresses, allowing backup of an entire wallet from a single seed. The structure improves privacy by using fresh addresses while keeping recovery and organisation manageable.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-wallet",
      "label": "Blockchain Wallet"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-wallet",
        "label": "Blockchain Wallet"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      },
      {
        "@id": "urn:ngm:class:mnemonic-phrase",
        "label": "Mnemonic Phrase"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:entropy",
        "label": "Entropy"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bip39",
        "label": "BIP-39"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic-Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:secp256k1",
        "label": "secp256k1"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:key-generation",
        "label": "Key Generation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
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
  - A hierarchical deterministic (HD) wallet is a cryptocurrency wallet that derives a tree of key pairs from a single master seed using a deterministic algorithm, as standardised in BIP-32 and related proposals. From one human-readable mnemonic phrase the wallet can regenerate an effectively unlimited hierarchy of addresses, allowing backup of an entire wallet from a single seed. The structure improves privacy by using fresh addresses while keeping recovery and organisation manageable.
  - Related core concepts: [[Blockchain Wallet]] [[Seed Phrase]] [[Public-Key Cryptography]] [[BIP-39]] [[Self-Custody]]
- ### Overview
  - HD wallets solve the backup and address-management problems of early wallets, where each key had to be stored individually. A single high-entropy seed, usually encoded as a BIP-39 mnemonic, deterministically generates a hierarchy of child keys via repeated key derivation. Standard derivation paths organise keys by purpose, coin type and account, so the same seed can manage many assets and accounts. Restoring the seed alone reconstructs the entire wallet.
- ### Mechanisms
  - A single master seed, typically a BIP-39 mnemonic, anchors the wallet.
  - BIP-32 derivation produces a deterministic tree of child key pairs.
  - Standard derivation paths separate purpose, coin type and account.
  - Fresh addresses per transaction improve on-chain privacy.
  - Whole-wallet backup and recovery from the seed phrase alone.
- ### Applications
  - Consumer self-custody wallets managing multiple assets.
  - Hardware wallets storing the seed in a secure element.
  - Exchange and custodial systems organising many accounts.
  - Deterministic address generation for merchant payment systems.
- ### Relationships
  - subClassOf:: [[Blockchain Wallet]]
  - partOf:: [[Blockchain Wallet]]
  - hasPart:: [[Seed Phrase]]
  - hasPart:: [[Mnemonic Phrase]]
  - requires:: [[Entropy]]
  - requires:: [[Public-Key Cryptography]]
  - implements:: [[BIP-39]]
  - uses:: [[Elliptic-Curve Cryptography]]
  - uses:: [[secp256k1]]
  - enables:: [[Self-Custody]]
  - supports:: [[Key Management]]
  - dependsOn:: [[Key Generation]]
  - relatedTo:: [[Hardware Wallet]]
  - relatedTo:: [[Digital Wallet]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
