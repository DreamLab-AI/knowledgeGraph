public:: true

# Curve Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2cc595daedb8e22da80482097df03c23bd91f1c53adb15c27ddb583392e0c119",
  "@type": "Page",
  "vc:slug": "curve-finance",
  "title": "Curve Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Curve Finance"
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
  "@id": "urn:ngm:class:curve-finance",
  "@type": "Class",
  "label": "Curve Finance",
  "definition": "Curve Finance is a decentralised exchange protocol on Ethereum and other chains, launched in 2020, specialising in efficient trading between assets expected to hold similar values, such as stablecoins and wrapped tokens. It uses an automated market maker with a bonding curve designed to minimise slippage and impermanent loss for like-valued assets. Liquidity providers earn trading fees and additional rewards, and the protocol's CRV token is used in a vote-escrow governance model that directs liquidity incentives. Curve has been a significant venue for stablecoin liquidity within decentralised finance.",
  "domain": "curve-finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance-domain",
      "label": "Decentralised Finance Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:curve-finance:e6f0adfad9db",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2cc595daedb8e22da80482097df03c23bd91f1c53adb15c27ddb583392e0c119"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
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
  - Curve Finance is a decentralised exchange protocol on Ethereum and other chains, launched in 2020, specialising in efficient trading between assets expected to hold similar values, such as stablecoins and wrapped tokens. It uses an automated market maker with a bonding curve designed to minimise slippage and impermanent loss for like-valued assets. Liquidity providers earn trading fees and additional rewards, and the protocol's CRV token is used in a vote-escrow governance model that directs liquidity incentives. Curve has been a significant venue for stablecoin liquidity within decentralised finance.

- ### Semantic Classification
  - owl-class:: defi:CurveFinance
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decentralised Finance Domain]]
  - bridges-to:: [[Decentralised Finance Domain]]
  - requires:: [[Ethereum]], [[Automated Market Maker]], [[Stablecoin]]

- ### Content
  - Curve Finance is an automated market maker tuned for assets that should trade close to parity, such as different stablecoins or staked and unstaked versions of the same token. Its invariant blends constant-sum and constant-product behaviour so that trades near the peg incur very low slippage while still providing liquidity if prices diverge.
  - Liquidity providers deposit assets into pools and earn a share of trading fees, often supplemented by token rewards. The CRV token underpins a vote-escrow system in which holders lock tokens to gain voting power and boosted rewards, and this voting directs the distribution of incentives across pools, a mechanism that became central to wider competition over liquidity.
  - By concentrating deep liquidity for correlated assets, Curve became important infrastructure for stablecoin swaps and for protocols that build on top of its pools. Its governance dynamics also influenced the design of incentive systems across decentralised finance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
