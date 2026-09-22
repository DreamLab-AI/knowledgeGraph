public:: true

# EVM-Compatible Blockchain

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:evm-compatible-blockchain",
  "@type": "Page",
  "title": "EVM-Compatible Blockchain",
  "vc:slug": "evm-compatible-blockchain",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:evm-compatible-blockchain",
  "@type": "Class",
  "label": "EVM-Compatible Blockchain",
  "definition": "An EVM-compatible blockchain is a network whose execution environment implements the Ethereum Virtual Machine semantics, allowing it to run unmodified Ethereum smart contract bytecode and reuse Ethereum tooling. Compatibility lets developers deploy Solidity contracts, wallets and infrastructure across many chains with minimal changes, fostering an interoperable multi-chain ecosystem. Such chains include layer-2 rollups, sidechains and alternative layer-1 networks.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:blockchain-network",
      "label": "Blockchain Network"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-application",
        "label": "Decentralized Application"
      },
      {
        "@id": "urn:ngm:class:erc-20-token-standard",
        "label": "ERC-20 Token Standard"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:polygon",
        "label": "Polygon"
      },
      {
        "@id": "urn:ngm:class:binance-smart-chain",
        "label": "Binance Smart Chain"
      },
      {
        "@id": "urn:ngm:class:avalanche",
        "label": "Avalanche"
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
  - An EVM-compatible blockchain is a network whose execution environment implements the Ethereum Virtual Machine semantics, allowing it to run unmodified Ethereum smart contract bytecode and reuse Ethereum tooling. Compatibility lets developers deploy Solidity contracts, wallets and infrastructure across many chains with minimal changes, fostering an interoperable multi-chain ecosystem. Such chains include layer-2 rollups, sidechains and alternative layer-1 networks.
  - Related concepts: [[Ethereum Virtual Machine]] [[Smart Contract]] [[Solidity]] [[Ethereum]] [[Blockchain Interoperability]]
- ### Overview
  - EVM compatibility has become a de facto standard for smart-contract platforms because it lets an entire ecosystem of tooling, wallets, libraries and audited contracts port across chains. A compatible chain executes the same bytecode and exposes the same JSON-RPC interfaces as Ethereum, so developers can redeploy applications with minimal friction. This compatibility spans layer-2 rollups, sidechains and independent layer-1s, accelerating multi-chain deployment and liquidity.
- ### Key aspects
  - Execution environment implementing EVM opcode semantics
  - Support for Solidity and Ethereum bytecode without modification
  - Gas-metered computation and account-based state model
  - Reuse of Ethereum tooling, wallets and JSON-RPC interfaces
  - Spanning rollups, sidechains and alternative layer-1 networks
- ### Applications
  - Deploying DeFi protocols across multiple chains
  - Layer-2 scaling through EVM rollups
  - Cross-chain liquidity and bridging
  - Porting NFT and token standards between networks
  - Enterprise and app-specific EVM chains
- ### Relationships
  - subClassOf:: [[Blockchain]]
  - partOf:: [[Blockchain]]
  - uses:: [[Ethereum Virtual Machine]]
  - uses:: [[Solidity]]
  - uses:: [[Gas]]
  - requires:: [[Smart Contract]]
  - dependsOn:: [[Ethereum]]
  - enables:: [[Decentralized Application]]
  - enables:: [[ERC-20 Token Standard]]
  - supports:: [[Blockchain Interoperability]]
  - relatedTo:: [[Sidechain]]
  - relatedTo:: [[Polygon]]
  - relatedTo:: [[Binance Smart Chain]]
  - relatedTo:: [[Avalanche]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
