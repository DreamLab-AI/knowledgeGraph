public:: true

# Cosmos SDK
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e9f271feae3ea79f85e350ccf69fd2880a4fe2faa895d7b27c5358b80ab5240b",
  "@type": "Page",
  "vc:slug": "cosmos-sdk",
  "title": "Cosmos SDK",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tendermint",
      "vc:label": "Tendermint"
    },
    {
      "@id": "urn:visionflow:linked:ibc",
      "vc:label": "IBC"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-interoperability",
      "vc:label": "Blockchain Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:cosmos",
      "vc:label": "Cosmos"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-cosmos-network",
      "vc:label": "https://docs.cosmos.network"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-cosmos-cosmos-sdk",
      "vc:label": "https://github.com/cosmos/cosmos-sdk"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cosmos SDK"
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
  "@id": "urn:ngm:class:cosmos-sdk",
  "@type": "Class",
  "label": "Cosmos SDK",
  "definition": "The Cosmos SDK is an open-source modular framework for building application-specific blockchains in the Cosmos ecosystem. It provides composable modules for accounts, staking, governance, and token management, and integrates with the Tendermint BFT consensus engine to enable sovereign, interoperable chains connected via the Inter-Blockchain Communication protocol.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cosmos",
      "label": "Cosmos"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:tendermint",
        "label": "Tendermint"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ibc",
        "label": "IBC"
      },
      {
        "@id": "urn:ngm:class:application-specific-blockchain",
        "label": "Application-Specific Blockchain"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      },
      {
        "@id": "urn:ngm:class:delegated-proof-of-stake",
        "label": "Delegated Proof of Stake"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:abci",
        "label": "ABCI"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:protobuf",
        "label": "Protobuf"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos Hub"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ]
  },
  "sameAs": [],
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
  "@id": "urn:visionflow:annotation:link-resolutions:cosmos-sdk:a324f81af5d7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e9f271feae3ea79f85e350ccf69fd2880a4fe2faa895d7b27c5358b80ab5240b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Tendermint]]",
      "resolved": "urn:visionflow:linked:tendermint",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[IBC]]",
      "resolved": "urn:visionflow:linked:ibc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Interoperability]]",
      "resolved": "urn:visionflow:linked:blockchain-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cosmos]]",
      "resolved": "urn:visionflow:linked:cosmos",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://docs.cosmos.network]]",
      "resolved": "urn:visionflow:linked:https-docs-cosmos-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/cosmos/cosmos-sdk]]",
      "resolved": "urn:visionflow:linked:https-github-com-cosmos-cosmos-sdk",
      "kind": "StubLink"
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
  - The Cosmos SDK is an open-source framework for building application-specific blockchains in the Cosmos ecosystem. It provides modular components and works with the Tendermint consensus engine.

- ### Semantic Classification
  - owl-class:: blockchain:CosmosSDK
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cosmos]]
  - bridges-to:: [[Blockchain Interoperability]]
  - requires:: [[Tendermint]]
  - enables:: [[IBC]]

- ### Content
  - The Cosmos SDK is a framework that lets developers build custom blockchains by combining modules for features such as accounts, staking, and governance. Applications built with it run on top of a consensus engine, commonly Tendermint.
  - Chains built with the SDK can connect to others through the Inter-Blockchain Communication protocol, allowing tokens and data to move between them. The modular design lets developers include only the functionality their application needs.

- ### Provenance
  - sources:: [[https://docs.cosmos.network]], [[https://github.com/cosmos/cosmos-sdk]]
  - migration-date:: 2026-05-29T00:00:00Z
