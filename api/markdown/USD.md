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
  "definition": "The United States dollar, the sovereign fiat currency issued by the United States Federal Reserve, serving as the world's primary reserve currency and the dominant unit of account against which digital assets, stablecoins, commodities, and international trade flows are quoted and settled.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:fiat-currency",
    "label": "Fiat Currency"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:bretton-woods-system",
        "label": "Bretton Woods System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:usdc",
        "label": "USDC"
      },
      {
        "@id": "urn:ngm:class:usdt",
        "label": "USDT"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:federal-reserve",
        "label": "Federal Reserve"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:international-trade",
        "label": "International Trade"
      },
      {
        "@id": "urn:ngm:class:foreign-exchange-market",
        "label": "Foreign Exchange Market"
      },
      {
        "@id": "urn:ngm:class:store-of-value",
        "label": "Store of Value"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-4217",
        "label": "ISO 4217"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-currency",
        "label": "Digital Currency"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:money",
        "label": "Money"
      },
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:us-dollar",
      "label": "US Dollar"
    },
    {
      "@id": "urn:ngm:class:united-states-dollar",
      "label": "United States Dollar"
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
