public:: true

# Liquidation Engine
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:liquidation-engine", "@type":"Page", "title":"Liquidation Engine", "vc:slug":"liquidation-engine", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:liquidation-engine",
  "@type": "Class",
  "label": "Liquidation Engine",
  "definition": "A liquidation engine is the component of a decentralised lending or derivatives protocol that detects under-collateralised positions and forcibly closes or partially repays them to keep the system solvent. It continuously evaluates position health against collateral values supplied by price oracles, and when a position breaches its maintenance threshold it triggers liquidation, typically auctioning or selling collateral and rewarding external liquidators or keepers who execute the transaction. By enforcing collateralisation guarantees on-chain, the liquidation engine is central to risk management in DeFi lending, perpetual-futures, and collateralised-debt systems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lending-protocol",
      "label": "Lending Protocol"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:collateral",
        "label": "Collateral"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      },
      {
        "@id": "urn:ngm:class:collateral",
        "label": "Collateral"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:perpetual-futures",
        "label": "Perpetual Futures"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:perpetual-futures",
        "label": "Perpetual Futures"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:liquidation-mechanism",
      "label": "Liquidation Mechanism"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Liquidation Engine]] is the component of a decentralised [[Lending Protocol]] or derivatives system that detects under-collateralised positions and forcibly closes or partially repays them to keep the protocol solvent.
  - It continuously evaluates position health against collateral values from price [[Oracle]]s, triggering liquidation when a position breaches its maintenance threshold.
  - It is central to [[Risk Management]] in [[Decentralized Finance]] lending, [[Perpetual Futures]], and collateralised-debt systems.

- ### Overview
  - DeFi credit is over-collateralised: borrowers lock [[Collateral]] worth more than they borrow, and the liquidation engine enforces that buffer when prices move against them.
  - Position health is summarised by a factor comparing collateral value (often haircut by a liquidation ratio) to outstanding debt; below the threshold the position becomes liquidatable.
  - Execution is usually permissionless: external liquidators or keeper bots monitor positions and call the [[Smart Contract]] liquidation function, repaying debt in exchange for discounted collateral.
  - Design choices around liquidation penalties, auction mechanisms, and partial versus full liquidation balance liquidator incentives, borrower fairness, and systemic resilience under volatility.

- ### Mechanisms
  - #### Health monitoring
    - Per-position health computed from oracle-priced [[Collateral]] versus debt, updated on price changes and user actions.
    - Maintenance and liquidation thresholds defined per asset to reflect volatility and liquidity.
  - #### Trigger and execution
    - When health breaches the threshold the position is opened to liquidation by any caller.
    - The [[Liquidation Engine]] repays debt and transfers discounted collateral to the liquidator, or runs a collateral auction.
  - #### Liquidator incentives
    - A liquidation bonus or penalty spread compensates keepers for gas and price risk, ensuring positions are closed promptly.
    - Competitive keeper networks and MEV searchers race to capture this spread.
  - #### Oracle dependence and risk
    - Accurate, manipulation-resistant [[Oracle]] feeds are critical; stale or manipulated prices can cause wrongful or missed liquidations and bad debt.

- ### Applications
  - #### Money markets
    - Enforcing solvency in over-collateralised lending pools as collateral prices fluctuate.
  - #### Perpetual and margin trading
    - Closing under-margined [[Perpetual Futures]] positions, often interacting with an insurance fund to absorb residual losses.
  - #### Collateralised stable assets
    - Liquidating vaults backing collateralised-debt-position stablecoins to defend the peg.

- ### Relationships
  - subClassOf:: [[Lending Protocol]]
  - partOf:: [[Decentralized Finance]]
  - hasPart:: [[Collateral]]
  - uses:: [[Oracle]]
  - uses:: [[Smart Contract]]
  - requires:: [[Oracle]]
  - requires:: [[Collateral]]
  - implements:: [[Risk Management]]
  - enables:: [[Lending Protocol]]
  - supports:: [[Perpetual Futures]]
  - dependsOn:: [[Oracle]]
  - bridgesTo:: [[Automated Market Maker]]
  - bridgesTo:: [[Perpetual Futures]]
  - relatedTo:: [[DeFi]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[Smart Contract]]

- ### Provenance
  - sources::
  - updated:: 2026-06-15
