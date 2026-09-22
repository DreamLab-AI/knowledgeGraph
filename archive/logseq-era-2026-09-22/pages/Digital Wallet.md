public:: true

# Digital Wallet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6402dc919a240baac8ade7024c5598fc92dcad1db552e42aecf098b456d3f2ef",
  "@type": "Page",
  "vc:slug": "digital-wallet",
  "title": "Digital Wallet",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:de-fi-access",
      "vc:label": "DeFi Access"
    },
    {
      "@id": "urn:visionflow:linked:transaction-signing",
      "vc:label": "Transaction Signing"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-management",
      "vc:label": "Asset Management"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-network",
      "vc:label": "Blockchain Network"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptocurrency-storage",
      "vc:label": "Cryptocurrency Storage"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-security",
      "vc:label": "Cryptographic Security"
    },
    {
      "@id": "urn:visionflow:owl:class:private-key",
      "vc:label": "Private Key"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9881"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Wallet"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-wallet",
  "@type": "Class",
  "label": "Digital Wallet",
  "definition": "A software application or hardware device that stores private keys and enables users to manage, send, and receive cryptocurrencies and digital assets on blockchain networks, with self-custody wallets providing complete user control over private keys without third-party intermediaries.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptocurrency-storage",
    "label": "Cryptocurrency Storage"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      },
      {
        "@id": "urn:ngm:class:cryptographic-security",
        "label": "Cryptographic Security"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-signing",
        "label": "Transaction Signing"
      },
      {
        "@id": "urn:ngm:class:asset-management",
        "label": "Asset Management"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:account-abstraction",
        "label": "Account Abstraction"
      },
      {
        "@id": "urn:ngm:class:bip39",
        "label": "BIP-39"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Multi-Chain Interoperability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:custodial-wallet",
        "label": "Custodial Wallet"
      },
      {
        "@id": "urn:ngm:class:centralized-exchange",
        "label": "Centralized Exchange"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent-system",
        "label": "AI Agent System"
      },
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:crypto-wallet",
      "label": "Crypto Wallet"
    },
    {
      "@id": "urn:ngm:class:web3-wallet",
      "label": "Web3 Wallet"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-wallet:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6402dc919a240baac8ade7024c5598fc92dcad1db552e42aecf098b456d3f2ef"
  },
  "vc:resolutions": [
    {
      "raw": "[[DeFi Access]]",
      "resolved": "urn:visionflow:linked:de-fi-access",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Signing]]",
      "resolved": "urn:visionflow:linked:transaction-signing",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Management]]",
      "resolved": "urn:visionflow:owl:class:asset-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Network]]",
      "resolved": "urn:visionflow:owl:class:blockchain-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency Storage]]",
      "resolved": "urn:visionflow:owl:class:cryptocurrency-storage",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Security]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:owl:class:private-key",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A software application or hardware device that stores private keys and enables users to manage, send, and receive cryptocurrencies and digital assets on blockchain networks, with self-custody wallets providing complete user control over private keys without third-party intermediaries.

- ### Semantic Classification
  - owl-class:: blockchain:DigitalWallet
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency Storage]]
  - requires:: [[Private Key]], [[Blockchain Network]], [[Cryptographic Security]]
  - enables:: [[Asset Management]], [[Transaction Signing]], [[DeFi Access]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  - ## Technical Details
  - **Wallet Types**:
		- Non-custodial (self-custody): User controls private keys
		- Custodial: Third party manages keys
		- Smart contract wallets: Account abstraction features
		- Hot wallets: Internet-connected software
		- Cold wallets: Offline hardware devices
  - **2024 Developments**:
		- Mastercard Web3 card program with MetaMask integration
		- Smart wallets with social recovery features
		- Account abstraction hiding blockchain complexity
		- Batched transactions and programmable features
  - **Popular Web3 Wallets**:
		- MetaMask: EVM-compatible blockchains
		- Phantom: Solana, Ethereum, Polygon
		- Trust Wallet: Multi-chain mobile wallet
		- Ledger/Trezor: Hardware cold storage
  - **Security**: Cold wallets safest; never share private keys
  - ## Applications
  - Cryptocurrency storage and transfer
  - DeFi protocol interaction
  - NFT management
  - Web3 application authentication
  - Decentralized identity management

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
