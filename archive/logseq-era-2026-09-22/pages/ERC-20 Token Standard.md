public:: true

# ERC-20 Token Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:erc-20-token-standard",
  "@type": "Page",
  "vc:slug": "erc-20-token-standard",
  "title": "ERC-20 Token Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:erc-20-token-standard",
  "@type": "Class",
  "label": "ERC-20 Token Standard",
  "definition": "The ERC-20 Token Standard is the foundational Ethereum Request for Comments specification that defines a common interface for fungible tokens on the Ethereum blockchain, enabling seamless interoperability between token contracts, wallets, decentralised exchanges, and other smart contract systems. Proposed by Fabian Vogelsteller in 2015 and formalised as an Ethereum Improvement Proposal, it specifies six mandatory functions—totalSupply, balanceOf, transfer, transferFrom, approve, and allowance—and two events. ERC-20 standardisation catalysed the 2017 ICO boom and remains the dominant token interface in decentralised finance, with thousands of tokens deployed to this specification. Its simplicity has made it the basis for numerous extended standards including ERC-777, ERC-1400, and ERC-3643.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:enterprise-token-standards",
      "label": "Enterprise Token Standards"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:transfer-event",
        "label": "Transfer Event"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposal"
      },
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenisation"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange-dex",
        "label": "Decentralized Exchange (DEX)"
      },
      {
        "@id": "urn:ngm:class:token-composability",
        "label": "Token Composability"
      },
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:enterprise-smart-contracts",
        "label": "Enterprise Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:evm-compatible-blockchain",
        "label": "EVM-Compatible Blockchain"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cryptocurrency-wallet",
        "label": "Cryptocurrency Wallet"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-foundation",
        "label": "Ethereum Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:erc-1155",
        "label": "ERC-1155"
      },
      {
        "@id": "urn:ngm:class:erc-777",
        "label": "ERC-777"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:erc1400-standard",
        "label": "ERC1400 Standard"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:utility-token",
        "label": "Utility Token"
      },
      {
        "@id": "urn:ngm:class:erc3643-standard",
        "label": "ERC3643 Standard"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:tokenized-asset",
        "label": "Tokenized Asset"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:erc-20",
      "label": "ERC-20"
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

- ### Definition
  - The [[ERC-20 Token Standard]] defines the canonical interface for [[Fungible Token]] contracts on Ethereum, specifying the transfer, approval, and balance-query functions that enable composability with [[Decentralised Finance]] protocols, [[Decentralized Exchange (DEX)]] infrastructure, and [[Asset Tokenisation]] platforms.
- ### Relationships
  - ERC-20 is the foundational layer beneath [[Decentralised Finance]]—every major lending protocol, DEX, and yield aggregator consumes ERC-20 interfaces. It is the parent standard from which [[ERC1400 Standard]] (security tokens) and [[ERC-721]] (non-fungible tokens) diverge. [[Governance Token]] and [[Utility Token]] designs typically implement ERC-20, and [[Enterprise Smart Contracts]] frequently extend it with access control. [[Asset Tokenisation]] of real-world assets commonly begins with an ERC-20 wrapper before applying regulated token standards.
- ### Content
  - The six mandatory ERC-20 functions define a minimal but complete interface for token management. The transfer function moves tokens between addresses directly; transferFrom enables third-party transfers authorised via approve, forming the allowance mechanism that underpins DEX order routing and DeFi protocol interactions. The two event types—Transfer and Approval—enable off-chain indexers and wallets to reconstruct full token histories without replaying all contract state.

  - The standard's composability was its killer feature. Because any ERC-20 token presents an identical interface, a single [[Decentralized Exchange (DEX)]] contract can trade any token pair without custom integration. Similarly, lending protocols can accept any ERC-20 as collateral by reading balances and approvals through the standard interface. This composability created the interlocking protocol ecosystem characteristic of [[Decentralised Finance]] and enabled rapid permissionless innovation.

  - Known vulnerabilities and limitations have spawned successor standards. The approve-then-transferFrom pattern is vulnerable to front-running attacks if an allowance is changed mid-transaction; ERC-777 addressed this with hooks. ERC-20 lacks native support for permissioned transfers required for securities regulation, which motivated [[ERC1400 Standard]] and [[ERC3643 Standard]]. The absence of a receive hook in ERC-20 has led to billions of tokens being permanently locked in contracts that cannot process them.

  - Despite its limitations, ERC-20 remains the dominant token standard due to its simplicity, tooling depth, and universal wallet support. The standard has been implemented in Solidity, Vyper, and other smart contract languages, and its ABI is supported natively by Ethereum clients, block explorers, and analytics platforms. It has also been adopted verbatim on EVM-compatible chains including Polygon, BNB Chain, Avalanche, and Arbitrum, making it effectively the universal fungible token interface across the EVM ecosystem.
