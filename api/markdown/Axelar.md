public:: true

# Axelar
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:axelar",
  "@type": "Page",
  "vc:slug": "axelar",
  "title": "Axelar",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:axelar",
  "@type": "Class",
  "label": "Axelar",
  "definition": "Axelar is a decentralised cross-chain communication network that enables general message passing and token transfers between heterogeneous blockchains via a proof-of-stake overlay network and a permissionless gateway smart contract model. It provides a Universal Message Passing (UMP) primitive that allows any contract on any connected chain to call any contract on any other connected chain as a single composable operation.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:cross-chain-interoperability",
    "label": "Cross-Chain Interoperability"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Gateway Smart Contract"
      },
      {
        "@id": "urn:ngm:class:token",
        "label": "AXL Token"
      },
      {
        "@id": "urn:ngm:class:interchain-token-service",
        "label": "Interchain Token Service"
      },
      {
        "@id": "urn:ngm:class:squid-router",
        "label": "Squid Router"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:validator-set",
        "label": "Validator Set"
      },
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-messaging",
        "label": "Cross-Chain Messaging"
      },
      {
        "@id": "urn:ngm:class:omnichain-application",
        "label": "Omnichain Application"
      },
      {
        "@id": "urn:ngm:class:cross-chain-dex",
        "label": "Cross-Chain DEX Aggregation"
      },
      {
        "@id": "urn:ngm:class:cross-chain-governance",
        "label": "Cross-Chain Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cosmos-sdk",
        "label": "Cosmos SDK"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "General Message Passing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:evm",
        "label": "EVM Chain"
      },
      {
        "@id": "urn:ngm:class:non-evm-chain",
        "label": "Non-EVM Chain"
      },
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:wormhole",
        "label": "Wormhole"
      },
      {
        "@id": "urn:ngm:class:chainlink-ccip",
        "label": "Chainlink CCIP"
      },
      {
        "@id": "urn:ngm:class:layerzero",
        "label": "LayerZero"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cosmos-ibc",
        "label": "Cosmos IBC"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bridge",
        "label": "Blockchain Bridge"
      },
      {
        "@id": "urn:ngm:class:interoperability-protocol",
        "label": "Interoperability Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:axelar-network",
      "label": "Axelar Network"
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
  - Axelar is a blockchain interoperability infrastructure layer that connects disparate networks — including [[Ethereum Smart Contract Platform]], [[Avalanche]], [[Cosmos]] chains, and others — through a validator-secured relay network and standardised gateway contracts. Its General Message Passing (GMP) API allows developers to send arbitrary payloads and trigger contract calls across chains in a single transaction, abstracting away the complexity of per-chain bridging logic and making [[Omnichain Application]] development tractable.

- ### Relationships
  - Axelar enables [[Cross-Chain Messaging]] by operating its own [[Proof of Stake]] validator set that collectively signs off on cross-chain events. It competes and is often compared with [[Wormhole]] and [[Chainlink CCIP]] in the cross-chain communication space, and shares architectural concepts with [[Cosmos IBC]] whilst extending reach to non-Cosmos chains. Its UMP primitive is the building block for [[Omnichain Application]] frameworks. The network uses threshold cryptography and BFT [[Consensus Mechanism]] to secure message relay without a single trusted relayer.

- ### Content
  - Axelar was founded in 2020 by Sergey Gorbunov and Georgios Vlachos, both from the cryptography and distributed systems research community. The mainnet launched in early 2022. The project raised significant venture funding and grew its connected chain count from around 20 at launch to over 50 by 2023, covering all major EVM chains, Cosmos ecosystem chains, and several non-EVM networks including Sui and Aptos.

  - The technical architecture comprises three layers: the Axelar network (a Cosmos SDK-based PoS chain), gateway smart contracts deployed on each connected chain, and a relayer layer. When a cross-chain call is initiated, gateway contracts on the source chain emit events; Axelar validators observe these events, achieve BFT consensus, and produce a threshold-signed approval that the destination gateway contract verifies before executing the target call. The AXL token is used for staking and gas payment.

  - In the application ecosystem, Axelar's Squid Router provides cross-chain DEX aggregation, and its GMP API is integrated by major DeFi protocols for liquidity unification and cross-chain governance. The Interchain Token Service (ITS), launched in 2023, extends native token functionality to multiple chains simultaneously without wrapped token fragmentation.

  - Through 2024–2025, Axelar has focused on programmable interoperability — allowing chains to define custom routing and fee logic — and on institutional-grade features including compliance-aware message routing. Competition from Chainlink CCIP and LayerZero has intensified, driving innovation in decentralisation, latency, and developer tooling. The network processed hundreds of millions of dollars in monthly cross-chain volume by mid-2024.

