public:: true

# Tether
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:10d6b636d5bc00849a85433264c3d72586d737fe3296670341bc1c4a3afa37d4",
  "@type": "Page",
  "vc:slug": "tether",
  "title": "Tether",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:reserve-backing",
      "vc:label": "Reserve Backing"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:crypto-trading",
      "vc:label": "Crypto Trading"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tether"
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
  "@id": "urn:ngm:class:tether",
  "@type": "Class",
  "label": "Tether",
  "definition": "Tether is the issuer of USDT, the largest fiat-collateralised stablecoin by circulating supply, designed to maintain a value pegged to the United States dollar. Tokens are issued on numerous blockchains and are intended to be redeemable one-to-one for dollars, backed by reserves held by the issuer. Tether is widely used for trading, settlement and as a dollar proxy on exchanges, and its reserve composition and transparency have been subjects of regulatory scrutiny.",
  "domain": "tether",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset-domain",
      "label": "Digital Asset Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:reserve-backing",
        "label": "Reserve Backing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:crypto-trading",
        "label": "Crypto Trading"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tether:3dc7089d175e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:10d6b636d5bc00849a85433264c3d72586d737fe3296670341bc1c4a3afa37d4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reserve Backing]]",
      "resolved": "urn:visionflow:linked:reserve-backing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Crypto Trading]]",
      "resolved": "urn:visionflow:linked:crypto-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
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
  - Tether is the issuer of USDT, the largest fiat-collateralised stablecoin by circulating supply, designed to maintain a value pegged to the United States dollar. Tokens are issued on numerous blockchains and are intended to be redeemable one-to-one for dollars, backed by reserves held by the issuer. Tether is widely used for trading, settlement and as a dollar proxy on exchanges, and its reserve composition and transparency have been subjects of regulatory scrutiny.

- ### Semantic Classification
  - owl-class:: asset:Tether
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Digital Asset Domain]]
  - bridges-to:: [[Decentralised Finance Domain]], [[Regulatory Domain]]
  - requires:: [[Blockchain]], [[Reserve Backing]]
  - enables:: [[Stablecoin]], [[Crypto Trading]]

- ### Content
  - Tether's USDT aims to track the dollar by holding reserves against the tokens in circulation. The peg is maintained through issuance and redemption with authorised counterparties, who can mint new tokens by depositing dollars and redeem tokens for dollars, with arbitrage keeping the secondary-market price close to par.
  - USDT is issued across multiple chains, which makes it a common unit of account and settlement asset across centralised exchanges and DeFi protocols. Its liquidity and ubiquity mean that disruptions to its peg can have wide effects on cryptocurrency markets.
  - The composition and auditing of Tether's reserves have attracted regulatory attention and legal settlements, with disclosures over time shifting toward higher proportions of cash and short-term government securities. These questions sit within a broader debate about stablecoin regulation and systemic risk.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
