schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#DigitalWallet
legacy_uri:: urn:visionclaw:concept:blockchain:digital-wallet
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-dda4f7b2e78a"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#DigitalWallet"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9881"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Wallet"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:digital-wallet"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:digital-wallet"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:6402dc919a240baac8ade7024c5598fc92dcad1db552e42aecf098b456d3f2ef@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:digital-wallet",
  "@type": "OntologyClass",
  "label": "Digital Wallet",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:cryptocurrency-storage",
      "vc:label": "Cryptocurrency Storage"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:6402dc919a240baac8ade7024c5598fc92dcad1db552e42aecf098b456d3f2ef"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:6402dc919a240baac8ade7024c5598fc92dcad1db552e42aecf098b456d3f2ef@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A software application or hardware device that stores private keys and enables users to manage, send, and receive cryptocurrencies and digital assets on blockchain networks, with self-custody wallets providing complete user control over private keys without third-party intermediaries.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:owl:class:blockchain-network",
      "vc:label": "Blockchain Network"
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
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:de-fi-access",
      "vc:label": "DeFi Access"
    },
    {
      "@id": "urn:visionflow:linked:transaction-signing",
      "vc:label": "Transaction Signing"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-management",
      "vc:label": "Asset Management"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:6402dc919a240baac8ade7024c5598fc92dcad1db552e42aecf098b456d3f2ef@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
