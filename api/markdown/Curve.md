public:: true

# Curve
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:60707a09eed86558c4bed7688a5fe13af4b4118652dd4834fbf218eb84dc9045",
  "@type": "Page",
  "vc:slug": "curve",
  "title": "Curve",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:gauge-voting",
      "vc:label": "Gauge Voting"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:linked:curve-finance",
      "vc:label": "Curve Finance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Curve"
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
  "@id": "urn:ngm:class:curve",
  "@type": "Class",
  "label": "Curve",
  "definition": "Curve is a decentralised exchange on Ethereum and other chains optimised for low-slippage swaps between similarly priced assets such as stablecoins. Its CRV token and gauge system govern liquidity incentives.",
  "domain": "defi",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:curve-finance",
      "label": "Curve Finance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:gauge-voting",
        "label": "Gauge Voting"
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
  "@id": "urn:visionflow:annotation:link-resolutions:curve:80c1018a4c8f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:60707a09eed86558c4bed7688a5fe13af4b4118652dd4834fbf218eb84dc9045"
  },
  "vc:resolutions": [
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gauge Voting]]",
      "resolved": "urn:visionflow:linked:gauge-voting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:linked:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Curve Finance]]",
      "resolved": "urn:visionflow:linked:curve-finance",
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
  - Curve is a decentralised exchange on Ethereum and other chains optimised for low-slippage swaps between similarly priced assets such as stablecoins. Its CRV token and gauge system govern liquidity incentives.

- ### Semantic Classification
  - owl-class:: defi:Curve
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Curve Finance]]
  - bridges-to:: [[Decentralized Exchange]]
  - requires:: [[Automated Market Maker]], [[Liquidity Pool]]
  - enables:: [[Gauge Voting]]

- ### Content
  - Curve is an automated market maker designed for efficient trading between assets that should hold similar values, such as stablecoins and wrapped versions of the same token, using a specialised bonding curve to minimise slippage. Liquidity providers deposit into pools and earn trading fees and CRV rewards.
  - Its governance uses vote-escrowed CRV and a gauge system that allocates emissions across pools, which gave rise to vote incentive markets such as Votium. Curve became a central piece of stablecoin liquidity in decentralised finance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
