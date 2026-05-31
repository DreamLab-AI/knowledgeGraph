public:: true
alias:: CryptoToken

# Crypto Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3d4513c3d85d8b63109e434b613b712e2174e73208c4c1cb7093df09784fd714",
  "@type": "Page",
  "vc:slug": "crypto-token",
  "title": "Crypto Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-key",
      "vc:label": "Cryptographic Key"
    },
    {
      "@id": "urn:visionflow:linked:governance-voting",
      "vc:label": "Governance Voting"
    },
    {
      "@id": "urn:visionflow:linked:iso-24165",
      "vc:label": "ISO 24165"
    },
    {
      "@id": "urn:visionflow:linked:programmable-value",
      "vc:label": "Programmable Value"
    },
    {
      "@id": "urn:visionflow:linked:reed-smith",
      "vc:label": "Reed Smith"
    },
    {
      "@id": "urn:visionflow:linked:tokenization-system",
      "vc:label": "Tokenization System"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-domain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-network",
      "vc:label": "Blockchain Network"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-ownership",
      "vc:label": "Digital Ownership"
    },
    {
      "@id": "urn:visionflow:owl:class:loyalty-token",
      "vc:label": "Loyalty Token"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-schema",
      "vc:label": "Metadata Schema"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:non-fungible-token-nft",
      "vc:label": "Non-Fungible Token (NFT)"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy-domain",
      "vc:label": "VirtualEconomyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:wallet",
      "vc:label": "Wallet"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "bc-20133"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Crypto Token"
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
  "@id": "urn:ngm:class:crypto-token",
  "@type": "Class",
  "label": "Crypto Token",
  "definition": "A blockchain-based programmable token representing assets, rights, or utility within a decentralized system, with transferability governed by smart contract logic.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:loyalty-token",
        "label": "Loyalty Token"
      },
      {
        "@id": "urn:ngm:class:metadata-schema",
        "label": "Metadata Schema"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token-nft",
        "label": "Non-Fungible Token (NFT)"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:governance-voting",
        "label": "Governance Voting"
      },
      {
        "@id": "urn:ngm:class:programmable-value",
        "label": "Programmable Value"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:tokenization-system",
        "label": "Tokenization System"
      },
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:crypto-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3d4513c3d85d8b63109e434b613b712e2174e73208c4c1cb7093df09784fd714"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Key]]",
      "resolved": "urn:visionflow:linked:cryptographic-key",
      "kind": "StubLink"
    },
    {
      "raw": "[[Governance Voting]]",
      "resolved": "urn:visionflow:linked:governance-voting",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 24165]]",
      "resolved": "urn:visionflow:linked:iso-24165",
      "kind": "StubLink"
    },
    {
      "raw": "[[Programmable Value]]",
      "resolved": "urn:visionflow:linked:programmable-value",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reed Smith]]",
      "resolved": "urn:visionflow:linked:reed-smith",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tokenization System]]",
      "resolved": "urn:visionflow:linked:tokenization-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Network]]",
      "resolved": "urn:visionflow:owl:class:blockchain-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:owl:class:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Ownership]]",
      "resolved": "urn:visionflow:owl:class:digital-ownership",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Loyalty Token]]",
      "resolved": "urn:visionflow:owl:class:loyalty-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Schema]]",
      "resolved": "urn:visionflow:owl:class:metadata-schema",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware Layer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non-Fungible Token (NFT)]]",
      "resolved": "urn:visionflow:owl:class:non-fungible-token-nft",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:owl:class:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:owl:class:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wallet]]",
      "resolved": "urn:visionflow:owl:class:wallet",
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
  - A blockchain-based programmable token representing assets, rights, or utility within a decentralized system, with transferability governed by smart contract logic.

- ### Semantic Classification
  - owl-class:: blockchain:CryptoToken
  - owl-role:: Object
  - owl-inferred:: mv:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]], [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[Middleware Layer]]

- ### Relationships
  - has-part:: [[Token Standard]], [[Smart Contract]], [[Metadata Schema]], [[Non-Fungible Token (NFT)]], [[Stablecoin]], [[Loyalty Token]]
  - is-part-of:: [[Tokenization System]], [[Blockchain Network]]
  - requires:: [[Blockchain]], [[Wallet]], [[Token Standard]]
  - enables:: [[Digital Ownership]], [[Programmable Value]], [[Decentralized Exchange]], [[Governance Voting]]
  - depends-on:: [[Consensus Mechanism]], [[Cryptographic Key]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  Crypto Tokens represent programmable digital assets implemented through smart contract code, enabling flexible ownership, transfer, and use rights. Token standards establish interoperability interfaces—Ethereum's ERC-20 defines fungible token transfer functions enabling exchange of identical units, whilst ERC-721 specifies non-fungible token interfaces supporting unique digital items with individual metadata. Advanced standards like ERC-1155 combine fungible and non-fungible capabilities in single contracts supporting batch operations.

  Token economics (tokenomics) encompasses supply mechanics (fixed, inflationary, deflationary), distribution models (initial allocations, airdrops, mining, staking), and utility design determining token purpose. Governance tokens grant voting rights in protocol decisions, utility tokens provide access to network services or discounted fees, security tokens represent equity or debt claims subject to regulatory frameworks. Composable token mechanics enable liquidity mining (rewarding token providers with additional tokens), staking (locking tokens to earn yields), and swapping (automated token exchanges through algorithmic market makers).

  Tokens enable novel ownership models—fractionalized real estate ownership through ERC-1155 tokens, creator income participation through royalty tokens, or decentralised governance through DAO tokens. Implementation challenges include supply manipulation vulnerability, token standard fragmentation reducing interoperability, and regulatory uncertainty regarding token classification and investor protections.

- ### Provenance
  - sources:: [[Reed Smith]], [[ISO 24165]]
  - migration-date:: 2026-04-26T00:00:00Z
