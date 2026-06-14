public:: true
alias:: BC-0013-smart-contracts, BC-0142-smart-contract, SmartContracts, smart-contracts

# Smart Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8a8d4d3b9bad3b0bb1284782384f1acd98017a1a51175374b1aae766ac01675d",
  "@type": "Page",
  "vc:slug": "smart-contracts",
  "title": "Smart Contracts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-application",
      "vc:label": "Decentralized Application"
    },
    {
      "@id": "urn:visionflow:owl:class:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-finance-de-fi",
      "vc:label": "Decentralized Finance (DeFi)"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-computing",
      "vc:label": "Distributed Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:owl:class:tokenization",
      "vc:label": "Tokenization"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-7013"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Smart Contracts"
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
  "@id": "urn:ngm:class:smart-contracts",
  "@type": "Class",
  "label": "Smart Contracts",
  "definition": "Self-executing programs stored on a blockchain that automatically enforce and execute the terms of an agreement when predetermined conditions are met, eliminating the need for intermediaries and enabling trustless, transparent, and immutable transaction automation.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-network-component",
    "label": "Network Component"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:contract-abi",
        "label": "Contract ABI"
      },
      {
        "@id": "urn:ngm:class:gas-mechanism",
        "label": "Gas Mechanism"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-application",
        "label": "Decentralized Application"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance-de-fi",
        "label": "Decentralized Finance (DeFi)"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:blockchain-oracle",
        "label": "Blockchain Oracle"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-application",
        "label": "Decentralized Application"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      },
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organisation",
        "label": "Decentralized Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-token-standard",
        "label": "ERC Token Standard"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supply-chain-automation",
        "label": "Supply Chain Automation"
      },
      {
        "@id": "urn:ngm:class:parametric-insurance",
        "label": "Parametric Insurance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:traditional-legal-contract",
        "label": "Traditional Legal Contract"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:reentrancy-attack",
        "label": "Reentrancy Attack"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    },
    {
      "@id": "urn:ngm:class:self-executing-contract",
      "label": "Self-Executing Contract"
    },
    {
      "@id": "urn:ngm:class:chaincode",
      "label": "Chaincode"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:smart-contracts:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8a8d4d3b9bad3b0bb1284782384f1acd98017a1a51175374b1aae766ac01675d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Hash Function]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash-function",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Application]]",
      "resolved": "urn:visionflow:linked:decentralized-application",
      "kind": "StubLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:owl:class:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Finance (DeFi)]]",
      "resolved": "urn:visionflow:owl:class:decentralized-finance-de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:owl:class:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Computing]]",
      "resolved": "urn:visionflow:owl:class:distributed-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:owl:class:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenization]]",
      "resolved": "urn:visionflow:owl:class:tokenization",
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
  - Self-executing programs stored on a blockchain that automatically enforce and execute the terms of an agreement when predetermined conditions are met, eliminating the need for intermediaries and enabling trustless, transparent, and immutable transaction automation. Smart contracts encode business logic in deterministic code that runs identically across all network nodes, ensuring consensus on execution outcomes.

- ### Semantic Classification
  - owl-class:: blockchain:SmartContracts
  - owl-role:: Process
  - belongs-to-domain:: [[Decentralized Finance (DeFi)]]

- ### Relationships
  - is-subclass-of:: [[Distributed Computing]]
  - enables:: [[Decentralized Application]]

- ### Content

  ## Core Components
  - **Contract Code**: Deterministic program logic written in Solidity, Vyper, Rust, or Move
  - **State Variables**: Persistent data stored on-chain representing contract state
  - **Functions**: Callable methods that read/modify state or perform computations
  - **Events**: Logging mechanisms for off-chain indexing and monitoring
  - **Modifiers**: Access control and validation patterns

  ## Execution Model
  - **Deterministic Execution**: Same inputs always produce identical outputs across all nodes
  - **Gas Mechanism**: Computational resource metering preventing infinite loops (Ethereum)
  - **Atomic Transactions**: All-or-nothing execution ensuring consistency
  - **Immutability**: Deployed code cannot be modified (upgradeable patterns exist via proxies)

  ## Programming Languages
  | Language | Platform | Features |
  |----------|----------|----------|
  | Solidity | Ethereum, EVM chains | Object-oriented, most widely adopted |
  | Vyper | Ethereum | Python-like, security-focused, simpler |
  | Rust | Solana, Near, Polkadot | Systems language, high performance |
  | Move | Aptos, Sui | Resource-oriented, formal verification |
  | Cairo | StarkNet | ZK-proof friendly, STARK-based |

  ## DeFi Applications
  - **Decentralized Exchanges (DEXs)**: Automated market makers (Uniswap, SushiSwap)
  - **Lending Protocols**: Collateralized borrowing (Aave, Compound)
  - **Yield Farming**: Liquidity provision rewards (Yearn, Convex)
  - **Stablecoins**: Algorithmic and collateralized pegs (DAI, FRAX)
  - **Derivatives**: Options, futures, perpetuals (dYdX, GMX)

  ## Other Use Cases
  - **NFTs**: Digital asset ownership and provenance
  - **DAOs**: Decentralized governance and treasury management
  - **Supply Chain**: Automated tracking and payment release
  - **Insurance**: Parametric policies with automatic claims
  - **Gaming**: In-game assets and play-to-earn mechanics

  ## Security Considerations
  - **Reentrancy Attacks**: External call vulnerabilities (DAO hack)
  - **Integer Overflow/Underflow**: Arithmetic boundary conditions
  - **Front-Running**: Transaction ordering exploitation
  - **Oracle Manipulation**: External data feed attacks
  - **Access Control**: Proper permission management

  ## Audit & Verification
  - Formal verification tools (Certora, Halmos)
  - Static analysis (Slither, Mythril)
  - Professional audits (Trail of Bits, OpenZeppelin)
  - Bug bounty programs (Immunefi)

  ## Market Scale (2025)
  - Over $100 billion total value locked (TVL) in DeFi smart contracts
  - Ethereum dominates with 60%+ TVL share
  - 500,000+ unique smart contracts deployed monthly
  - Growing enterprise adoption in supply chain and finance

  ## Relationships
  - is-subclass-of:: [[Blockchain]]
  - is-subclass-of:: [[Distributed Computing]]
  - related-to:: [[Decentralized Finance (DeFi)]]
  - related-to:: [[Ethereum Smart Contract Platform]]
  - uses:: [[Cryptographic Hash Function]]
  - uses:: [[Digital Signature]]
  - enables:: [[Decentralized Application]]
  - enables:: [[Tokenization]]
  - enables:: [[Automated Market Maker]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
