public:: true

# USDT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:30cd874c5683afbbfb655184ed229c165f02a4155d25476c43f4f4b4afff6b6d",
  "@type": "Page",
  "vc:slug": "usdt",
  "title": "USDT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:usd",
      "vc:label": "USD"
    },
    {
      "@id": "urn:visionflow:linked:custody-infrastructure",
      "vc:label": "Custody Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:usdc",
      "vc:label": "USDC"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "USDT"
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
  "@id": "urn:ngm:class:usdt",
  "@type": "Class",
  "label": "USDT",
  "definition": "A fiat-backed stablecoin pegged to the United States dollar, issued across multiple ledgers and intended to be redeemable for dollar value held in reserve.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stablecoin",
      "label": "Stablecoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:usd",
        "label": "USD"
      },
      {
        "@id": "urn:ngm:class:custody-infrastructure",
        "label": "Custody Infrastructure"
      },
      {
        "@id": "urn:ngm:class:tether",
        "label": "Tether Limited"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:tron-blockchain",
        "label": "Tron Blockchain"
      },
      {
        "@id": "urn:ngm:class:solana",
        "label": "Solana"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payment"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:crypto-trading",
        "label": "Crypto Trading"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:usdc",
        "label": "USDC"
      },
      {
        "@id": "urn:ngm:class:dai",
        "label": "DAI"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin Ecosystem"
      },
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:tether",
      "label": "Tether"
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
  "@id": "urn:visionflow:annotation:link-resolutions:usdt:cd1634ef55b1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:30cd874c5683afbbfb655184ed229c165f02a4155d25476c43f4f4b4afff6b6d"
  },
  "vc:resolutions": [
    {
      "raw": "[[USD]]",
      "resolved": "urn:visionflow:linked:usd",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody Infrastructure]]",
      "resolved": "urn:visionflow:linked:custody-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[USDC]]",
      "resolved": "urn:visionflow:linked:usdc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
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
  - A fiat-backed stablecoin pegged to the United States dollar, issued across multiple ledgers and intended to be redeemable for dollar value held in reserve.

- ### Semantic Classification
  - owl-class:: blockchain:USDT
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Stablecoin]]
  - bridges-to:: [[USDC]], [[Payment System]]
  - requires:: [[USD]], [[Custody Infrastructure]]

- ### Content
  - USDT is a dollar-pegged stablecoin issued on several public ledgers. Each unit is intended to represent one US dollar of value, backed by reserves reported by the issuer that include cash, cash equivalents, and other instruments.
  - USDT carries the largest circulating supply among stablecoins and is heavily used as a quote asset and settlement medium across exchanges. Its peg rests on confidence in the composition and adequacy of the reserves and on the issuer's redemption process.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
