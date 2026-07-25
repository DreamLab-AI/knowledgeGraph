public:: true

# Synthetic Asset
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:synthetic-asset",
  "@type": "Page",
  "title": "Synthetic Asset",
  "vc:slug": "synthetic-asset",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:synthetic-asset",
  "@type": "Class",
  "label": "Synthetic Asset",
  "definition": "A Synthetic Asset is a tokenised financial instrument on a blockchain whose value tracks an underlying reference asset, such as a fiat currency, commodity, equity, or index, without requiring direct ownership or custody of that asset. Synthetic assets derive their price through collateralisation and price oracles rather than through a one-to-one backing of the underlying, distinguishing them from wrapped tokens. Protocols such as Synthetix mint synthetic exposures (synths) backed by over-collateralised pools, allowing on-chain trading of real-world price feeds. They enable permissionless access to traditional markets but carry oracle, liquidation, and collateral-risk dependencies.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency-token",
      "label": "Cryptocurrency Token"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:wrapped-token",
        "label": "Wrapped Token"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:derivatives-trading",
        "label": "Derivatives Trading"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance-de-fi",
        "label": "Decentralized Finance (DeFi)"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:peg-mechanism",
        "label": "Peg Mechanism"
      },
      {
        "@id": "urn:ngm:class:mint-burn-mechanism",
        "label": "Mint-Burn Mechanism"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:price-oracle",
        "label": "Price Oracle"
      },
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:synthetix",
        "label": "Synthetix"
      },
      {
        "@id": "urn:ngm:class:algorithmic-stablecoin",
        "label": "Algorithmic Stablecoin"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:hedging",
        "label": "Hedging"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Synthetic Asset]] is a tokenised instrument whose value tracks an underlying reference asset via [[Price Oracle]] feeds and collateral, distinct from a [[Wrapped Token]], and is the core primitive minted by protocols such as [[Synthetix]] within [[Decentralized Finance (DeFi)]] using a [[Smart Contract]] backed [[Peg Mechanism]].

- ### Overview
  - Synthetic assets emerged to bring exposure to off-chain markets — currencies, commodities, equities and indices — into permissionless on-chain trading. Rather than custodying the underlying, a synth is minted against on-chain collateral and its price is anchored to an external feed.
  - The defining contrast is with wrapped tokens: a wrapped token is a one-to-one claim on a locked underlying asset, whereas a synthetic asset is a collateral-backed derivative that merely mirrors price without any direct redemption of the reference asset.
  - Synthetix popularised the pooled-collateral model, in which stakers of the protocol token jointly back all synths and absorb the aggregate debt of the system, earning fees in return for taking on price risk.

- ### Mechanisms
  - Collateralisation: synths are typically over-collateralised, with stakers locking value well above the minted synthetic exposure to absorb volatility and protect solvency.
  - Price oracles: each synth references an external price feed; the integrity and latency of these oracles directly determines the fidelity and manipulation-resistance of the synthetic.
  - Mint and burn: users create synthetic exposure by minting against collateral and unwind it by burning, with the smart contract enforcing collateral ratios and liquidation thresholds.
  - Debt pools: in pooled designs, all minters share a common debt obligation denominated in the system's reference unit, distributing market risk across participants.

- ### Applications
  - On-chain trading of forex pairs, commodities such as gold, and equity indices without a centralised broker.
  - Hedging crypto-native portfolios against fiat or commodity price movements.
  - Composable derivatives building blocks for DeFi protocols offering perpetuals and structured products.

- ### Relationships
  - contrastsWith:: [[Wrapped Token]]
  - contrastsWith:: [[Stablecoin]]
  - enables:: [[Derivatives Trading]]
  - enables:: [[Decentralized Finance (DeFi)]]
  - enables:: [[Decentralized Exchange]]
  - hasPart:: [[Peg Mechanism]]
  - hasPart:: [[Mint-Burn Mechanism]]
  - dependsOn:: [[Price Oracle]]
  - dependsOn:: [[Oracle]]
  - uses:: [[Smart Contract]]
  - uses:: [[Liquidity Pool]]
  - requires:: [[Liquidity Pool]]
  - implements:: [[DeFi Protocol]]
  - relatedTo:: [[Synthetix]]
  - relatedTo:: [[Algorithmic Stablecoin]]
  - supports:: [[Hedging]]
  - supports:: [[Risk Management]]
  - bridgesTo:: [[Finance]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
