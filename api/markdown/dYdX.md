public:: true

# dYdX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d3658c1b6e5681ce5101d87ed1ef25353bf19ec7bc8793c4761d747167fe39b5",
  "@type": "Page",
  "vc:slug": "d-yd-x",
  "title": "dYdX",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:perpetual-futures",
      "vc:label": "Perpetual Futures"
    },
    {
      "@id": "urn:visionflow:linked:leveraged-trading",
      "vc:label": "Leveraged Trading"
    },
    {
      "@id": "urn:visionflow:linked:gmx",
      "vc:label": "GMX"
    },
    {
      "@id": "urn:visionflow:linked:cosmos",
      "vc:label": "Cosmos"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance",
      "vc:label": "Decentralised Finance Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "dYdX"
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
  "@id": "urn:ngm:class:d-yd-x",
  "@type": "Class",
  "label": "dYdX",
  "definition": "dYdX is a decentralised exchange focused on perpetual-futures trading, allowing users to take leveraged long and short positions on cryptocurrencies. Earlier versions operated on Ethereum using a layer-two scaling solution with an off-chain order book and on-chain settlement, while a later version migrated to a purpose-built application-specific blockchain in the Cosmos ecosystem. It combines the order-book trading experience of centralised venues with non-custodial settlement.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:decentralised-finance",
    "label": "Decentralised Finance Domain"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:funding-rate-mechanism",
        "label": "Funding Rate Mechanism"
      },
      {
        "@id": "urn:ngm:class:liquidation-engine",
        "label": "Liquidation Engine"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance Domain"
      },
      {
        "@id": "urn:ngm:class:defi-derivatives-market",
        "label": "DeFi Derivatives Market"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:margin-collateral",
        "label": "Margin Collateral"
      },
      {
        "@id": "urn:ngm:class:validator-set",
        "label": "Validator Set"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:perpetual-futures",
        "label": "Perpetual Futures"
      },
      {
        "@id": "urn:ngm:class:leveraged-trading",
        "label": "Leveraged Trading"
      },
      {
        "@id": "urn:ngm:class:non-custodial-settlement",
        "label": "Non-Custodial Settlement"
      },
      {
        "@id": "urn:ngm:class:short-selling",
        "label": "Short Selling"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      },
      {
        "@id": "urn:ngm:class:tendermint-consensus",
        "label": "Tendermint Consensus"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-rollup",
        "label": "Zero-Knowledge Rollup"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:central-limit-order-book",
        "label": "Central Limit Order Book"
      },
      {
        "@id": "urn:ngm:class:application-specific-blockchain",
        "label": "Application-Specific Blockchain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:off-chain-order-matching",
        "label": "Off-Chain Order Matching"
      },
      {
        "@id": "urn:ngm:class:on-chain-settlement",
        "label": "On-Chain Settlement"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gmx",
        "label": "GMX"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:centralised-exchange",
        "label": "Centralised Exchange"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      },
      {
        "@id": "urn:ngm:class:derivatives-trading",
        "label": "Derivatives Trading"
      },
      {
        "@id": "urn:ngm:class:layer-two-scaling",
        "label": "Layer-Two Scaling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dydx-protocol",
      "label": "dYdX Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:d-yd-x:aa360eebe94e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d3658c1b6e5681ce5101d87ed1ef25353bf19ec7bc8793c4761d747167fe39b5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Order Book]]",
      "resolved": "urn:visionflow:linked:order-book",
      "kind": "StubLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Perpetual Futures]]",
      "resolved": "urn:visionflow:linked:perpetual-futures",
      "kind": "StubLink"
    },
    {
      "raw": "[[Leveraged Trading]]",
      "resolved": "urn:visionflow:linked:leveraged-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[GMX]]",
      "resolved": "urn:visionflow:linked:gmx",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cosmos]]",
      "resolved": "urn:visionflow:linked:cosmos",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance",
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
  - dYdX is a decentralised exchange focused on perpetual-futures trading, allowing users to take leveraged long and short positions on cryptocurrencies. Earlier versions operated on Ethereum using a layer-two scaling solution with an off-chain order book and on-chain settlement, while a later version migrated to a purpose-built application-specific blockchain in the Cosmos ecosystem. It combines the order-book trading experience of centralised venues with non-custodial settlement.

- ### Semantic Classification
  - owl-class:: defi:DYdX
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decentralised Finance Domain]]
  - bridges-to:: [[GMX]], [[Cosmos]]
  - requires:: [[Order Book]], [[Smart Contract]]
  - enables:: [[Perpetual Futures]], [[Leveraged Trading]]

- ### Content
  - dYdX provides perpetual futures, contracts without an expiry date that track an underlying asset's price and use a funding-rate mechanism to keep the contract price aligned with the spot market. Traders post margin and can open positions larger than their collateral, with the protocol managing liquidations when positions become undercollateralised.
  - To deliver a responsive trading experience, the protocol historically matched orders off-chain while settling balances on-chain, using a zero-knowledge rollup to reduce costs and confirmation times. The later standalone chain moved order matching into a decentralised validator set, aiming to remove reliance on a centralised operator for the order book.
  - Within DeFi derivatives, dYdX is notable for favouring a central-limit order book over the pooled liquidity used by protocols such as GMX. This design appeals to active traders accustomed to order-book mechanics while retaining self-custody of funds.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
