public:: true

# Scarcity

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:scarcity", "@type": "Page", "title": "Scarcity", "vc:slug": "scarcity", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scarcity",
  "@type": "Class",
  "label": "Scarcity",
  "definition": "Scarcity is the economic condition in which a resource is limited relative to demand for it, giving rise to value, price and the need for allocation choices. In monetary and token economics scarcity is often engineered through fixed or capped supply, issuance schedules or burning mechanisms to support a store-of-value proposition. It is the foundational premise from which supply-and-demand pricing dynamics emerge.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:monetary-policy",
      "label": "Monetary Policy"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:market-maker",
        "label": "Market Maker"
      },
      {
        "@id": "urn:ngm:class:collateral",
        "label": "Collateral"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Scarcity is the economic condition in which a resource is limited relative to demand for it, giving rise to value, price and the need for allocation choices. In monetary and token economics scarcity is often engineered through fixed or capped supply, issuance schedules or burning mechanisms to support a store-of-value proposition. It is the foundational premise from which supply-and-demand pricing dynamics emerge.
  - Related concepts: [[Monetary Policy]], [[Inflation]], [[Market Microstructure]], [[Liquidity]], [[Token]], [[Tokenomics]]
- ### Overview
  - Scarcity underlies all of economics: without it there would be no trade-offs and no prices. In digital asset design scarcity is deliberately constructed, since bits are trivially copyable, by capping supply or destroying tokens to mimic the limited availability of precious commodities.
- ### Key aspects
  - Absolute scarcity from a hard supply cap versus relative scarcity from controlled issuance
  - Engineered scarcity via token burning and disinflationary emission schedules
  - The relationship between scarcity, demand and equilibrium price
  - Perceived scarcity and its influence on speculative behaviour
- ### Applications
  - Fixed-supply cryptocurrency monetary policy
  - Deflationary token burn mechanisms
  - Non-fungible asset uniqueness and provenance
  - Commodity and resource pricing
- ### Relationships
  - subClassOf:: [[Monetary Policy]]
  - requires:: [[Monetary Policy]]
  - hasPart:: [[Inflation]]
  - enables:: [[Market Microstructure]]
  - enables:: [[Liquidity]]
  - dependsOn:: [[Monetary Policy]]
  - contrastsWith:: [[Inflation]]
  - relatedTo:: [[Monetary Policy]]
  - relatedTo:: [[Token]]
  - relatedTo:: [[Tokenomics]]
  - bridgesTo:: [[Tokenomics]]
  - supports:: [[Market Maker]]
  - supports:: [[Collateral]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
