public:: true

# Osmosis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2073c4c4348d4dd3e16fb3540334dcc9d487b204f7f419bc98b1355de51f1ee0",
  "@type": "Page",
  "vc:slug": "osmosis",
  "title": "Osmosis",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cosmos",
      "vc:label": "Cosmos"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Osmosis"
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
  "@id": "urn:ngm:class:osmosis",
  "@type": "Class",
  "label": "Osmosis",
  "definition": "A decentralised exchange and automated market maker built in the Cosmos ecosystem that allows cross-chain token swaps and customisable liquidity pools using the Inter-Blockchain Communication protocol.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-exchange",
      "label": "Decentralized Exchange"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:inter-blockchain-communication",
        "label": "Inter-Blockchain Communication"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:cross-chain-swap",
        "label": "Cross-Chain Swap"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:yield-farming",
        "label": "Yield Farming"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:superfluid-staking",
        "label": "Superfluid Staking"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      },
      {
        "@id": "urn:ngm:class:interchain-ecosystem",
        "label": "Interchain Ecosystem"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:tendermint",
        "label": "Tendermint"
      },
      {
        "@id": "urn:ngm:class:cosmos-sdk",
        "label": "Cosmos SDK"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:token-swap",
        "label": "Token Swap"
      },
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:uniswap",
        "label": "Uniswap"
      },
      {
        "@id": "urn:ngm:class:centralized-exchange",
        "label": "Centralized Exchange"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:osmosis-dex",
      "label": "Osmosis DEX"
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
  "@id": "urn:visionflow:annotation:link-resolutions:osmosis:a08ebfb6519e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2073c4c4348d4dd3e16fb3540334dcc9d487b204f7f419bc98b1355de51f1ee0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cosmos]]",
      "resolved": "urn:visionflow:linked:cosmos",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:linked:decentralized-exchange",
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
  - A decentralised exchange and automated market maker built in the Cosmos ecosystem that allows cross-chain token swaps and customisable liquidity pools using the Inter-Blockchain Communication protocol.

- ### Semantic Classification
  - owl-class:: blockchain:Osmosis
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Exchange]]
  - bridges-to:: [[Liquidity Pool]]
  - requires:: [[Cosmos]], [[Automated Market Maker]]
  - enables:: [[DeFi]]

- ### Content
  - Osmosis is an application-specific blockchain in the Cosmos ecosystem that operates as a decentralised exchange built around automated market makers. It supports customisable liquidity pools with adjustable parameters and uses the Inter-Blockchain Communication protocol to enable swaps of assets from connected chains.
  - Liquidity providers deposit assets into pools to earn fees and incentives, while traders swap against those pools. Its design illustrates how interchain interoperability can underpin decentralised finance across multiple sovereign blockchains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
