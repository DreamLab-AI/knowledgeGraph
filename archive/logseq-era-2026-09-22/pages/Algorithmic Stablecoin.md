public:: true

# Algorithmic Stablecoin

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:algorithmic-stablecoin",
  "@type": "Page",
  "title": "Algorithmic Stablecoin",
  "vc:slug": "algorithmic-stablecoin",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:algorithmic-stablecoin",
  "@type": "Class",
  "label": "Algorithmic Stablecoin",
  "definition": "An algorithmic stablecoin is a cryptocurrency that seeks to maintain a stable peg, typically to a fiat unit, through on-chain algorithmic supply adjustments and incentive mechanisms rather than full reserves of external collateral. Smart contracts expand or contract token supply, often using a companion volatility-absorbing token, to push the market price toward target. The model contrasts with fiat- and crypto-collateralised stablecoins and has proven fragile, with several high-profile de-peg failures.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stablecoin",
      "label": "Stablecoin"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tether",
        "label": "Tether"
      },
      {
        "@id": "urn:ngm:class:dai",
        "label": "DAI"
      },
      {
        "@id": "urn:ngm:class:terra",
        "label": "Terra"
      },
      {
        "@id": "urn:ngm:class:usd-coin",
        "label": "USD Coin"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:peg",
        "label": "Peg"
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
  - An [[Algorithmic Stablecoin]] targets a stable [[Peg]] through programmatic supply control and incentives rather than holding full external reserves.
  - It is a variety of [[Stablecoin]] whose stability rests on [[Smart Contract]] logic and market arbitrage.
  - It contrasts sharply with reserve-backed designs and has a record of severe de-peg events.
- ### Overview
  - When price exceeds the peg the protocol mints new supply; when it falls below, it contracts supply or rewards burning, nudging price toward target.
  - Many designs pair the stable asset with an absorber/governance token that soaks up volatility, an arrangement vulnerable to reflexive collapse.
  - It relies on a [[Price Oracle]] for market price and on continuous arbitrage demand to enforce the [[Peg]].
- ### Key aspects
  - Under-collateralised or fully algorithmic backing.
  - Supply expansion and contraction driven by [[Smart Contract]] rules.
  - A companion volatility token absorbing demand shocks.
  - Fragility under loss-of-confidence and reflexive death spirals.
- ### Mechanisms
  - Mint/burn rebasing or bond-and-coupon incentive schemes.
  - Seigniorage distribution to absorber-token holders.
  - Oracle-driven price feedback loops.
  - Arbitrage incentives to restore the [[Peg]].
- ### Applications
  - Capital-efficient stable units within [[Decentralised Finance]].
  - Censorship-resistant on-chain settlement assets.
  - Experimental monetary designs studied against [[Tether]] and [[DAI]].
  - Yield and liquidity strategies built on protocol incentives.
- ### Relationships
  - contrastsWith:: [[Stablecoin]]
  - implements:: [[Smart Contract]]
  - enables:: [[Decentralised Finance]]
  - uses:: [[Price Oracle]]
  - dependsOn:: [[Price Oracle]]
  - requires:: [[Smart Contract]]
  - partOf:: [[Decentralised Finance]]
  - relatedTo:: [[Tether]]
  - relatedTo:: [[DAI]]
  - relatedTo:: [[Terra]]
  - relatedTo:: [[USD Coin]]
  - supports:: [[Peg]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
