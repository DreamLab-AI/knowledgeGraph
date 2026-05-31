public:: true

# Decentralised Exchange
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:99a655de862d5053aefa52c83b9b8e20be4c3e14458258dd37546dbdcf6b214b",
  "@type": "Page",
  "vc:slug": "decentralised-exchange",
  "title": "Decentralised Exchange",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:permissionless-trading",
      "vc:label": "Permissionless Trading"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:exchange-mechanism",
      "vc:label": "Exchange Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralised Exchange"
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
  "@id": "urn:ngm:class:decentralised-exchange",
  "@type": "Class",
  "label": "Decentralised Exchange",
  "definition": "A trading venue that allows users to swap digital assets directly through smart contracts, without a central operator holding custody of funds or matching orders off-chain.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:exchange-mechanism",
      "label": "Exchange Mechanism"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:permissionless-trading",
        "label": "Permissionless Trading"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decentralised-exchange:8d4565a2c48c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:99a655de862d5053aefa52c83b9b8e20be4c3e14458258dd37546dbdcf6b214b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Permissionless Trading]]",
      "resolved": "urn:visionflow:linked:permissionless-trading",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Order Book]]",
      "resolved": "urn:visionflow:linked:order-book",
      "kind": "StubLink"
    },
    {
      "raw": "[[Exchange Mechanism]]",
      "resolved": "urn:visionflow:linked:exchange-mechanism",
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
  - A trading venue that allows users to swap digital assets directly through smart contracts, without a central operator holding custody of funds or matching orders off-chain.

- ### Semantic Classification
  - owl-class:: blockchain:DecentralisedExchange
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Exchange Mechanism]]
  - bridges-to:: [[Automated Market Maker]], [[Order Book]]
  - requires:: [[Smart Contract]], [[Liquidity Pool]]
  - enables:: [[Permissionless Trading]]

- ### Content
  - A decentralised exchange settles trades on-chain through smart contracts rather than through a custodial intermediary. Two main designs exist: automated market makers, which price assets against pooled liquidity using a deterministic curve, and on-chain order books, which match discrete bids and offers. In both cases users retain control of their assets in their own wallets until the moment of settlement.
  - Because the matching and settlement logic is encoded in public contracts, anyone may interact with the venue without registration or approval. This removes single points of custodial failure but exposes traders to on-chain risks such as price slippage, front-running of pending transactions, and bugs in the contract code. Liquidity is supplied by participants who deposit assets in return for a share of trading fees.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
