public:: true

# Ethereum Smart Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d25911f56450f1c42d190cb87565f623b945a855b136ff9efea9aa876d792b6b",
  "@type": "Page",
  "vc:slug": "ethereum-smart-contracts",
  "title": "Ethereum Smart Contracts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum-virtual-machine",
      "vc:label": "Ethereum Virtual Machine"
    },
    {
      "@id": "urn:visionflow:linked:solidity",
      "vc:label": "Solidity"
    },
    {
      "@id": "urn:visionflow:linked:erc-20",
      "vc:label": "ERC-20"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Smart Contracts"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethereum-smart-contract-platform-smart-contracts",
  "@type": "Class",
  "label": "Ethereum Smart Contracts",
  "definition": "Programs deployed to the Ethereum blockchain that execute deterministically on the Ethereum Virtual Machine and maintain state enforced by network consensus, enabling trustless automation of agreements and protocols through immutable on-chain code.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    }
  ],
  "relations": {
    "requires": [
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
      },
      {
        "@id": "urn:ngm:class:ethereum-account",
        "label": "Ethereum Account"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:bytecode",
        "label": "Bytecode"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:vyper",
        "label": "Vyper"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eip",
        "label": "Ethereum Improvement Proposal"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:layer-2-solutions",
        "label": "Layer 2"
      },
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:eth-smart-contracts",
      "label": "ETH Smart Contracts"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-smart-contracts:1020d2482994",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d25911f56450f1c42d190cb87565f623b945a855b136ff9efea9aa876d792b6b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:ethereum-virtual-machine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solidity]]",
      "resolved": "urn:visionflow:linked:solidity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ERC-20]]",
      "resolved": "urn:visionflow:linked:erc-20",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Programs deployed to the Ethereum blockchain that execute deterministically on the Ethereum Virtual Machine and maintain state enforced by network consensus.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumSmartContracts
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Ethereum Smart Contract Platform]]
  - requires:: [[Ethereum Virtual Machine]], [[Solidity]]
  - enables:: [[ERC-20]]

- ### Content
  - Ethereum smart contracts are account-bound programs whose code and storage live on-chain. They run on the Ethereum Virtual Machine, with each operation metered in gas paid by the transaction sender.
  - Contracts are commonly written in Solidity and compiled to bytecode for execution. Their deterministic execution and shared state allow standards such as ERC-20 to define interoperable tokens and applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
