```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9a2d554ce04f39075ab979b74365e4525de747f80113e605413015d13c76d3d",
  "@type": "Page",
  "vc:slug": "decentralized-exchange-dex",
  "title": "Decentralized Exchange (DEX)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:de-fi-wg",
      "vc:label": "DeFi WG"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-trading",
      "vc:label": "Decentralized Trading"
    },
    {
      "@id": "urn:visionflow:linked:iso-24165",
      "vc:label": "ISO 24165"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:token-swapping",
      "vc:label": "Token Swapping"
    },
    {
      "@id": "urn:visionflow:linked:trading-interface",
      "vc:label": "Trading Interface"
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
      "@id": "urn:visionflow:owl:class:blockchain-oracle",
      "vc:label": "Blockchain Oracle"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:price-discovery",
      "vc:label": "Price Discovery"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20262"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralized Exchange (DEX)"
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
  "@id": "urn:ngm:class:decentralized-exchange-dex",
  "@type": "Class",
  "label": "Decentralized Exchange (DEX)",
  "definition": "Peer-to-peer marketplace enabling direct token swaps and digital asset trading through smart contracts without centralized intermediaries or custodial control.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    },
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-trading",
        "label": "Decentralized Trading"
      },
      {
        "@id": "urn:ngm:class:token-swapping",
        "label": "Token Swapping"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - Peer-to-peer marketplace enabling direct token swaps and digital asset trading through smart contracts without centralized intermediaries or custodial control.

- ### Semantic Classification
  - owl-class:: infrastructure:DecentralizedExchange
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Automated Market Maker]], [[Liquidity Pool]], [[Smart Contract]], [[Trading Interface]], [[Price Oracle]]
  - requires:: [[Blockchain]], [[Digital Wallet]], [[Token Standard]], [[Consensus Mechanism]]
  - enables:: [[Token Swapping]], [[Liquidity Provision]], [[Decentralized Trading]], [[Price Discovery]]
  - depends-on:: [[Smart Contract]], [[Cryptographic Signature]], [[Blockchain Oracle]]

- ### Content
  Decentralized Exchange (DEX) — content pending enrichment.

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources:: [[ISO 24165]], [[DeFi WG]]
  - migration-date:: 2026-04-26T00:00:00Z
