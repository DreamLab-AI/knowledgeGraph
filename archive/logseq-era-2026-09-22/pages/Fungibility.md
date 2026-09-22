public:: true

# Fungibility

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:fungibility",
  "@type": "Page",
  "title": "Fungibility",
  "vc:slug": "fungibility",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fungibility",
  "@type": "Class",
  "label": "Fungibility",
  "definition": "Fungibility is the property of a good or asset whereby individual units are mutually interchangeable, each unit being indistinguishable from and equal in value to any other. It is a defining characteristic of money and of fungible blockchain tokens, in which any one token of a given type can substitute for another. Fungibility contrasts with non-fungibility, where each unit is unique and not interchangeable, as in non-fungible tokens.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:tokenization",
      "label": "Tokenization"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:value-transfer",
        "label": "Value Transfer"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:money",
        "label": "Money"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
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
  - [[Tokenization]]
  - [[Token Standard]]
  - [[Cryptocurrency]]
  - [[Non-Fungible Token]]
  - Fungibility is defined within the [[Tokenization]] area of the blockchain domain.
- ### Overview
  - Fungibility is what allows a unit of value to function as money or as a liquid traded asset: because units are interchangeable, they can be pooled, divided and exchanged without tracking individual provenance. On blockchains, the distinction between fungible and non-fungible tokens is encoded directly in token standards — fungible standards such as ERC-20 treat balances as undifferentiated quantities, while non-fungible standards assign each token a unique identifier. Fungibility can be weakened in practice when tokens carry traceable transaction history, prompting privacy-preserving designs.
- ### Key aspects
  - Interchangeability: any unit substitutes for any other of the same type.
  - Divisibility and aggregation, allowing units to be split and pooled freely.
  - Uniformity of value, with each unit equal to every other.
  - Encoding in token standards such as ERC-20 for fungible tokens.
  - Practical erosion through traceability, motivating privacy-enhancing techniques.
- ### Applications
  - Cryptocurrencies and stablecoins functioning as interchangeable media of exchange.
  - Fungible token standards underpinning decentralized-finance liquidity pools.
  - Commodity and currency markets where units trade as equivalents.
  - Contrast with non-fungible tokens for unique digital assets and collectibles.
- ### Relationships
  - subClassOf:: [[Tokenization]]
  - partOf:: [[Tokenization]]
  - enables:: [[Value Transfer]]
  - enables:: [[Liquidity]]
  - implements:: [[Token Standard]]
  - supports:: [[Cryptocurrency]]
  - supports:: [[Liquidity]]
  - uses:: [[Token Standard]]
  - requires:: [[Token Standard]]
  - dependsOn:: [[Tokenization]]
  - relatedTo:: [[Money]]
  - relatedTo:: [[Stablecoin]]
  - contrastsWith:: [[Non-Fungible Token]]
  - bridgesTo:: [[ERC-20]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
