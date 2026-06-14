public:: true

# Token Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3",
  "@type": "Page",
  "vc:slug": "token-standard",
  "title": "Token Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:fungibility",
      "vc:label": "Fungibility"
    },
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-7005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Token Standard"
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
  "@id": "urn:ngm:class:token-standard",
  "@type": "Class",
  "label": "Token Standard",
  "definition": "Technical specification defining rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem, exemplified by ERC-20 (fungible tokens), ERC-721 (NFTs), and ERC-1155 (multi-token), establishing common APIs for transfers, balance queries, approvals, and metadata across wallets, exchanges, and decentralised applications.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-token-and-asset",
    "label": "Token and Asset"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:erc-1155",
        "label": "ERC-1155"
      },
      {
        "@id": "urn:ngm:class:token-interface",
        "label": "Token Interface"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-protocol",
        "label": "Blockchain Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:application-binary-interface",
        "label": "Application Binary Interface"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:token-interoperability",
        "label": "Token Interoperability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:fungibility",
        "label": "Fungibility"
      },
      {
        "@id": "urn:ngm:class:token-approval-mechanism",
        "label": "Token Approval Mechanism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:event-log",
        "label": "Event Log"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposal"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:native-currency",
        "label": "Native Currency"
      },
      {
        "@id": "urn:ngm:class:cbdc",
        "label": "CBDC"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-asset-standard",
        "label": "Digital Asset Standard"
      },
      {
        "@id": "urn:ngm:class:data-schema",
        "label": "Data Schema"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:token-metadata",
        "label": "Token Metadata"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:token-interface-specification",
      "label": "Token Interface Specification"
    },
    {
      "@id": "urn:ngm:class:smart-contract-token-standard",
      "label": "Smart Contract Token Standard"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:token-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3"
  },
  "vc:resolutions": [
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fungibility]]",
      "resolved": "urn:visionflow:linked:fungibility",
      "kind": "StubLink"
    },
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:owl:class:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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
  - Technical specification defining rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem. Standards like ERC-20 (fungible tokens) and ERC-721 (NFTs) establish common APIs for token transfers, balance queries, approvals, and metadata, enabling seamless integration across wallets, exchanges, and dApps.

- ### Semantic Classification
  - owl-class:: blockchain:TokenStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Smart Contract]]
  - implements:: [[Fungibility]]

- ### Content

  ## Definition
  A **Token Standard** is a technical specification that defines the rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem. These standards establish common APIs enabling seamless integration across wallets, exchanges, decentralized applications, and other blockchain infrastructure.

  ## Core Standards

  ### ERC-20 (Fungible Tokens)
  - Proposed by Fabian Vogelsteller in November 2015
  - Defines fungible tokens where each unit is interchangeable
  - Required functions: `transfer`, `balanceOf`, `approve`, `transferFrom`, `allowance`, `totalSupply`
  - Use cases: stablecoins, governance tokens, utility tokens, ICO tokens

  ### ERC-721 (Non-Fungible Tokens)
  - Proposed by William Entriken et al. in January 2018
  - Each token has unique `tokenId` making it non-fungible
  - Tracks ownership via `ownerOf` function
  - Enables unique digital collectibles, art, and real-world asset representation
  - Supports metadata URI for off-chain attributes

  ### ERC-1155 (Multi-Token Standard)
  - Developed by Enjin to address ERC-721 limitations
  - Supports both fungible and non-fungible tokens in single contract
  - Enables batch transfers reducing gas costs and network congestion
  - Optimal for gaming assets and mixed token portfolios

  ### Advanced Standards
  - **ERC-777**: Enhanced security with hooks for token operations
  - **ERC-998**: Composable tokens enabling ownership hierarchies
  - **ERC-4626**: Standardized yield-bearing vault interface for DeFi
  - **ERC-1400**: Security token standard with transfer restrictions

  ## Technical Characteristics
  - **Interface Compliance**: Contracts must implement required function signatures
  - **Event Emission**: Standards define events for off-chain indexing
  - **Approval Mechanisms**: Two-step transfer patterns for delegated spending
  - **Metadata Standards**: Structured JSON schemas for token attributes

  ## Cross-Chain Standards
  - **BEP-20**: Binance Smart Chain equivalent of ERC-20
  - **SPL Tokens**: Solana Program Library token standard
  - **CW-20/CW-721**: CosmWasm token standards for Cosmos ecosystem
  - **TRC-20**: TRON network token standard

  ## Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Smart Contract]]
  - used-by:: [[Decentralized Exchange]]
  - related-to:: [[NFT]]
  - implements:: [[Fungibility]]
  - component-of:: [[DeFi]]

  ## Security Considerations
  - Reentrancy vulnerabilities in transfer functions
  - Integer overflow/underflow in older implementations
  - Approval race conditions
  - Malicious token contract behaviors

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
