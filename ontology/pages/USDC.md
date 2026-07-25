public:: true

# USDC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79cd6843be580ccd1e98d85095e3280d9dfb8bbddc860326fea54cd83ca7998c",
  "@type": "Page",
  "vc:slug": "usdc",
  "title": "USDC",
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
      "@id": "urn:visionflow:linked:usdt",
      "vc:label": "USDT"
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
      "vc:value": "USDC"
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
  "@id": "urn:ngm:class:usdc",
  "@type": "Class",
  "label": "USDC",
  "definition": "A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:stablecoin",
    "label": "Stablecoin"
  },
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
        "@id": "urn:ngm:class:reserve-attestation",
        "label": "Reserve Attestation"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin Ecosystem"
      },
      {
        "@id": "urn:ngm:class:defi-infrastructure",
        "label": "DeFi Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:erc-20-tokens",
        "label": "ERC-20 Token"
      },
      {
        "@id": "urn:ngm:class:redemption-mechanism",
        "label": "Redemption Mechanism"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-20-token-standard",
        "label": "ERC-20 Standard"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:solana",
        "label": "Solana"
      },
      {
        "@id": "urn:ngm:class:proof-of-reserves",
        "label": "Proof of Reserves"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:on-chain-settlement",
        "label": "On-Chain Settlement"
      },
      {
        "@id": "urn:ngm:class:collateral-management",
        "label": "DeFi Collateral"
      },
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:usdt",
        "label": "USDT"
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
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:centre-consortium",
        "label": "Centre Consortium"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:traditional-finance",
        "label": "Traditional Finance"
      },
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:money-market-fund",
        "label": "Money Market Fund"
      },
      {
        "@id": "urn:ngm:class:circle",
        "label": "Circle Financial"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:usd-coin",
      "label": "USD Coin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:usdc:a34645ceb35b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79cd6843be580ccd1e98d85095e3280d9dfb8bbddc860326fea54cd83ca7998c"
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
      "raw": "[[USDT]]",
      "resolved": "urn:visionflow:linked:usdt",
      "kind": "StubLink"
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
  - A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.

- ### Semantic Classification
  - owl-class:: blockchain:USDC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Stablecoin]]
  - bridges-to:: [[USDT]], [[Payment System]]
  - requires:: [[USD]], [[Custody Infrastructure]]

- ### Content
  - USDC is a stablecoin designed to hold a value of one US dollar. Each token in circulation is intended to be matched by reserves held off-chain, principally cash and short-dated government securities, with periodic attestations of those reserves published by the issuer.
  - On public ledgers USDC functions as a settlement and unit-of-account token, widely used as collateral in lending markets, as a quote asset on exchanges, and as a medium for transfers. Its peg depends on the reliability of the reserve backing and on the issuer's ability to honour redemptions for dollars.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
