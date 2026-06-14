public:: true
alias:: VirtualCurrency

# Virtual Currency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b16c2d65b485c5fcd5e0e697d9c5056202084664f65da71ed29c78e9d6e2bffa",
  "@type": "Page",
  "vc:slug": "virtual-currency",
  "title": "Virtual Currency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10115"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Currency"
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
  "@id": "urn:ngm:class:virtual-currency",
  "@type": "Class",
  "label": "Virtual Currency",
  "definition": "A digital representation of value issued and controlled by platform developers, used and accepted electronically within a specific virtual community. Virtual currencies include closed in-game currencies (e.g., World of Warcraft gold), hybrid purchasable tokens (e.g., Robux), and convertible currencies exchangeable for fiat money, each with distinct regulatory and economic implications.",
  "domain": "finance",
  "maturity": "emerging",
  "qualityScore": 0.70,
  "subClassOf": {
    "@id": "urn:ngm:class:digital-asset",
    "label": "Digital Asset"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:in-game-currency",
      "label": "In-Game Currency"
    },
    {
      "@id": "urn:ngm:class:platform-token",
      "label": "Platform Token"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:closed-loop-currency",
        "label": "Closed Loop Currency"
      },
      {
        "@id": "urn:ngm:class:convertible-virtual-currency",
        "label": "Convertible Virtual Currency"
      },
      {
        "@id": "urn:ngm:class:non-convertible-virtual-currency",
        "label": "Non-Convertible Virtual Currency"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      },
      {
        "@id": "urn:ngm:class:financial-system",
        "label": "Financial System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-metaverse-commerce",
        "label": "Cross Metaverse Commerce"
      },
      {
        "@id": "urn:ngm:class:microtransaction",
        "label": "Microtransaction"
      },
      {
        "@id": "urn:ngm:class:play-to-earn",
        "label": "Play To Earn"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:virtual-goods",
        "label": "Virtual Goods"
      },
      {
        "@id": "urn:ngm:class:digital-commerce",
        "label": "Digital Commerce"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:fiat-currency",
        "label": "Fiat Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-currency:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b16c2d65b485c5fcd5e0e697d9c5056202084664f65da71ed29c78e9d6e2bffa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:owl:class:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A digital representation of value that is typically unregulated, issued and controlled by its developers, used and accepted electronically among members of a specific virtual community, including in-game currencies, platform tokens, and convertible digital currencies.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualCurrency
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Asset]]
  - Enables [[Cross Metaverse Commerce]]
  - Uses [[Payment System]]
  - Contrasts With [[Cryptocurrency]]
  - Contrasts With [[Stablecoin]]
  - Related To [[Token Economics]]
  - Related To [[Financial System]]

- ### Content

  - ## Overview
  - Virtual currency is digital money used within virtual communities and economies. The European Banking Authority (2014) defined it as a digital representation of value not issued by central banks but accepted as payment and tradeable electronically. The global mobile gaming market using virtual currencies is projected to generate over $98 billion in 2024.
  - ## Technical Details
  - ### Currency Types
		- **Closed/Fictional Currency**: No real-world exchange (World of Warcraft gold, Simoleons)
		- **Hybrid Currency**: Purchasable but not cashable (Robux, V-Bucks)
		- **Convertible Currency**: Exchangeable for fiat (Linden Dollars, cryptocurrencies)
		- **Decentralized Currency**: Blockchain-based (Bitcoin, Ethereum)
  - ### Flow Systems
		- Closed flow: Internal use only, no external value
		- Hybrid flow: Purchasable but not redeemable
		- Open flow: Two-way exchange with fiat currency
  - ### Gaming Examples
		- V-Bucks (Fortnite)
		- Robux (Roblox)
		- Linden Dollars (Second Life)
		- MANA (Decentraland)
  - ## Applications
  - In-game purchases and upgrades
  - Virtual goods and cosmetics
  - Premium content access
  - Play-to-earn gaming economies
  - Metaverse commerce transactions

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
