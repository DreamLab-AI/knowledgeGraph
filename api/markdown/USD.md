public:: true

# USD
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9ed502365827686d514aa52ce992b07e9f2d44d2815eb01066a947c94b2f5b42",
  "@type": "Page",
  "vc:slug": "usd",
  "title": "USD",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:usdc",
      "vc:label": "USDC"
    },
    {
      "@id": "urn:visionflow:linked:usdt",
      "vc:label": "USDT"
    },
    {
      "@id": "urn:visionflow:linked:store-of-value",
      "vc:label": "Store of Value"
    },
    {
      "@id": "urn:visionflow:linked:digital-currency",
      "vc:label": "Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:money",
      "vc:label": "Money"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "USD"
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
  "@id": "urn:ngm:class:usd",
  "@type": "Class",
  "label": "USD",
  "definition": "The United States dollar, the fiat currency issued by the United States and the dominant unit against which most digital assets and stablecoins are quoted and redeemed.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:money",
      "label": "Money"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:usdc",
        "label": "USDC"
      },
      {
        "@id": "urn:ngm:class:usdt",
        "label": "USDT"
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
  "@id": "urn:visionflow:annotation:link-resolutions:usd:d60fbd8718ec",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9ed502365827686d514aa52ce992b07e9f2d44d2815eb01066a947c94b2f5b42"
  },
  "vc:resolutions": [
    {
      "raw": "[[USDC]]",
      "resolved": "urn:visionflow:linked:usdc",
      "kind": "StubLink"
    },
    {
      "raw": "[[USDT]]",
      "resolved": "urn:visionflow:linked:usdt",
      "kind": "StubLink"
    },
    {
      "raw": "[[Store of Value]]",
      "resolved": "urn:visionflow:linked:store-of-value",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Currency]]",
      "resolved": "urn:visionflow:linked:digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Money]]",
      "resolved": "urn:visionflow:linked:money",
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
  - The United States dollar, the fiat currency issued by the United States and the dominant unit against which most digital assets and stablecoins are quoted and redeemed.

- ### Semantic Classification
  - owl-class:: blockchain:USD
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Money]]
  - bridges-to:: [[Store of Value]], [[Digital Currency]]
  - enables:: [[USDC]], [[USDT]]

- ### Content
  - USD is the standard three-letter code for the United States dollar. In digital asset markets it serves as the primary quote currency and unit of account, with most trading pairs and price references denominated in dollars or in dollar-pegged tokens.
  - Fiat-backed stablecoins such as USDC and USDT exist to represent claims on US dollar value on public ledgers. The dollar therefore acts as the off-chain reserve asset that anchors a large share of on-chain settlement, lending collateral, and exchange liquidity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
