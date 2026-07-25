public:: true

# price oracle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bda78201fe3f4313a1af0ed0f23eece33edb1c28f582cb670df9bb3ac2974c61",
  "@type": "Page",
  "vc:slug": "price-oracle",
  "title": "price oracle",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:price-oracle",
  "@type": "Class",
  "label": "Price Oracle",
  "definition": "A price oracle is an on-chain or hybrid data feed that supplies decentralised protocols with reliable, manipulation-resistant market prices for tokens, synthetic assets, and other financial instruments. On-chain price oracles — such as time-weighted average price (TWAP) feeds derived from automated market maker pool reserves — are fully decentralised but lag real-time prices. Off-chain oracle networks aggregate prices from multiple centralised and decentralised exchanges before committing them on-chain, offering fresher data at the cost of additional trust assumptions on node operators. Price oracles are foundational to DeFi lending protocols, synthetic asset minting, perpetual futures settlement, and insurance claim adjudication.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-oracle",
      "label": "Blockchain Oracle"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:defi-price-feed",
      "label": "DeFi Price Feed"
    },
    {
      "@id": "urn:ngm:class:on-chain-price-feed",
      "label": "On-Chain Price Feed"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:defi-infrastructure",
        "label": "DeFi Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:twap-oracle",
        "label": "TWAP Oracle"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:oracle-network",
        "label": "Oracle Network"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Cryptoeconomic Staking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Collateralised Lending"
      },
      {
        "@id": "urn:ngm:class:synthetic-asset",
        "label": "Synthetic Asset"
      },
      {
        "@id": "urn:ngm:class:perpetual-futures",
        "label": "Perpetual Futures"
      },
      {
        "@id": "urn:ngm:class:liquidation-mechanism",
        "label": "Liquidation Mechanism"
      },
      {
        "@id": "urn:ngm:class:real-world-asset-tokenisation",
        "label": "Real-World Asset Tokenisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-aggregation",
        "label": "Data Aggregation"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Spot Price"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:flash-loan",
        "label": "Flash Loan"
      },
      {
        "@id": "urn:ngm:class:mev",
        "label": "MEV Manipulation"
      },
      {
        "@id": "urn:ngm:class:proof-of-reserve",
        "label": "Proof of Reserve"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ]
  },
  "qualityScore": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **price oracle** is an on-chain or hybrid data feed that supplies [[Decentralised Finance]] protocols with reliable, manipulation-resistant market prices for tokens, [[Synthetic Asset]]s, and other financial instruments. [[Blockchain Oracle]] infrastructure divides into two major architectures: fully on-chain approaches that derive prices from [[Automated Market Maker]] pool reserve ratios and time-weighted averages, and off-chain [[Oracle Network]]s that aggregate data from multiple exchange venues before cryptographically attesting and committing it to chain. Price oracles sit at the security perimeter of the DeFi stack — incorrect or manipulated prices cascade directly into unjust [[Liquidation Mechanism]] triggers, minting of unbacked [[Synthetic Asset]]s, and under-collateralised lending positions.

- ### Overview
  - Price oracles solve the **oracle problem** for financial data: blockchains are deterministic, isolated systems that cannot natively fetch external information. Any [[Smart Contract]] that needs a current asset price — to check whether a borrower is solvent, to settle a derivative, or to mint a pegged asset — must rely on an external data source committed on-chain.
  - The fundamental design tension is between **decentralisation** (reducing trust in any single data provider) and **freshness** (how quickly price changes are reflected on-chain). These two properties often trade off:
    - On-chain TWAP oracles are trust-minimised but introduce latency of several blocks
    - Aggregated off-chain feeds offer near-real-time prices but add node operator trust assumptions
  - Price oracle security is a top concern for [[DeFi Protocol]]s. Oracle manipulation — often combined with [[Flash Loan]]s to temporarily distort [[Decentralised Exchange]] prices — has been the attack vector in several major protocol exploits. Circuit breakers, multi-source aggregation, and deviation thresholds are the standard defences.
  - As [[Real World Asset Tokenisation]] matures, price oracle scope is expanding beyond crypto-native assets to equities, commodities, forex rates, and physical asset valuations — requiring integration with off-chain [[Financial Data API]]s and attestation services.

- ### Key Mechanisms
  - #### Time-Weighted Average Price (TWAP)
    - Computes the arithmetic mean of an asset's price from an [[Automated Market Maker]] pool over a configurable lookback window (e.g., 30 minutes)
    - The time-weighting is achieved by accumulating a price-times-seconds sum; the TWAP is derived by differencing two cumulative observations and dividing by the elapsed time
    - Manipulation requires an attacker to hold a distorted pool price for the entire window duration, which is expensive on liquid pools
    - Trade-off: price lags real-time; during high volatility, the TWAP can be significantly stale
  - #### Off-Chain Aggregator Networks
    - [[Oracle Network]] nodes independently source prices from multiple [[Centralised Exchange Feed]]s and [[Decentralised Exchange]]s, sign observations with private keys, and submit them to an on-chain aggregator contract
    - The aggregator applies a consensus function (median, trimmed mean) to reduce the influence of outlier or malicious nodes
    - Chainlink and Pyth Network are the dominant implementations; both use [[Cryptoeconomic Staking]] (slashable collateral) to incentivise honest reporting
    - Deviation thresholds trigger updates only when price moves exceed a configurable percentage, reducing gas costs
  - #### Aggregator Feed Architecture
    - Individual price feeds are composed from multiple data sources via an [[Aggregator Feed]] contract pattern
    - Multiple rounds of price submission, deviation checking, and heartbeat updates ensure liveness even when price movement is minimal
    - Feed metadata includes round ID, timestamp, and the number of oracle nodes that contributed — enabling consumers to detect stale data programmatically
  - #### Proof of Reserve Oracles
    - A specialised variant that attests to the backing of asset-backed tokens (e.g., stablecoins, wrapped Bitcoin) by verifying that off-chain reserves match on-chain token supply
    - Used in [[Real World Asset Tokenisation]] pipelines to provide cryptographic guarantees about collateral holdings
    - Can leverage [[Trusted Execution Environment]]s or zk-proofs for attestation without exposing sensitive custodian data

- ### Applications and Use Cases
  - #### Collateralised Lending
    - [[Collateralised Lending]] protocols (Aave, Compound, MakerDAO) use price oracles to value borrower collateral and determine whether liquidation thresholds have been breached
    - The oracle price at the moment of liquidation determines the discount offered to liquidators via the [[Liquidation Mechanism]]
    - A single stale or manipulated price feed can trigger mass unjust liquidations or enable borrowing against inflated collateral — making oracle security a protocol-level existential risk
  - #### Synthetic Asset Minting
    - [[Synthetic Asset]] platforms peg the value of on-chain derivatives to real-world assets (gold, equities, forex) using price oracle feeds
    - The oracle is the sole link between the on-chain derivative and the off-chain reference asset; any divergence creates arbitrage opportunities and can de-peg the synthetic
  - #### Perpetual Futures Settlement
    - [[Perpetual Futures]] protocols use a price oracle as the **index price** against which funding rates are computed, preventing the contract price from diverging indefinitely from spot
    - Oracle failures can create one-sided funding cascades and liquidation spirals
  - #### Automated Market Maker Pricing
    - [[Automated Market Maker]] pools can serve as price oracles for low-liquidity assets lacking external coverage, though they are more vulnerable to spot manipulation in thin markets
    - The TWAP mechanism emerged specifically to make AMM-derived prices manipulation-resistant
  - #### Real World Asset Tokenisation
    - Bringing traditional financial assets on-chain requires price oracles that source data from regulated financial data providers, with [[Proof of Reserve]] attestations for tokenised funds and bonds
    - Integration with [[Financial Data API]]s and custodian reporting systems is an active development frontier

- ### Security Considerations
  - **Flash Loan Manipulation**: An attacker borrows a large sum via [[Flash Loan]], uses it to manipulate the spot price of a low-liquidity [[Liquidity Pool]], exploits a protocol that reads that spot price as its oracle, then repays the flash loan in a single transaction. TWAP oracles with sufficient lookback windows are resistant; real-time spot price oracles are not.
  - **[[MEV Manipulation]]**: Maximal extractable value strategies can include front-running oracle update transactions to exploit the lag between a price change and its on-chain commitment.
  - **Node Operator Collusion**: In [[Oracle Network]]s with insufficient decentralisation, a supermajority of nodes could collude to report false prices without being detected before damage occurs. [[Cryptoeconomic Staking]] raises the economic cost of such attacks.
  - **Stale Data and Downtime**: Oracle nodes may go offline or fail to update during periods of high network congestion. Protocols must check the timestamp of the latest round and revert or pause if data is too old.
  - **Circuit Breakers**: Many protocols implement maximum single-block price deviation checks — if the oracle reports a price more than X% different from the previous round, the update is rejected or the protocol is paused for manual review.

- ### Relationships
  - partOf:: [[Decentralised Finance]]
  - partOf:: [[DeFi Infrastructure]]
  - hasPart:: [[TWAP Oracle]]
  - hasPart:: [[Aggregator Feed]]
  - dependsOn:: [[Oracle Network]]
  - dependsOn:: [[Automated Market Maker]]
  - dependsOn:: [[Decentralised Exchange]]
  - dependsOn:: [[Cryptoeconomic Staking]]
  - enables:: [[Collateralised Lending]]
  - enables:: [[Synthetic Asset]]
  - enables:: [[Perpetual Futures]]
  - enables:: [[Liquidation Mechanism]]
  - enables:: [[Real World Asset Tokenisation]]
  - supports:: [[Liquidity Pool]]
  - supports:: [[Smart Contract]]
  - supports:: [[DeFi Protocol]]
  - requires:: [[Data Aggregation]]
  - requires:: [[Cryptographic Signature]]
  - contrastsWith:: [[Centralised Exchange Feed]]
  - contrastsWith:: [[Spot Price]]
  - relatedTo:: [[Flash Loan]]
  - relatedTo:: [[MEV Manipulation]]
  - relatedTo:: [[Proof of Reserve]]
  - bridges-to:: [[Financial Data API]]
  - bridges-to:: [[Trusted Execution Environment]]

- ### Standards and Context
  - No single cross-protocol standard governs price oracle interfaces, though the **Chainlink AggregatorV3Interface** has become a de facto standard: protocols query `latestRoundData()` to retrieve price, round ID, and timestamp, enabling portable integration across oracle providers.
  - The **Pyth Network** introduced a **pull-based** oracle model (vs Chainlink's push model), where price updates are published to a decentralised network and consumers pull and verify proofs on demand, reducing cost and increasing freshness for high-frequency applications.
  - **EIP-7XXX** proposals have explored standardising on-chain oracle consumer interfaces at the EVM level, though no finalised standard exists as of mid-2026.
  - [[Proof of Reserve]] oracles align with emerging regulatory expectations around [[Real World Asset Tokenisation]] and stablecoin collateral transparency, anticipated in MiCA (Markets in Crypto-Assets) implementation guidance and US stablecoin legislation frameworks.
  - The **DeFi Safety** project publishes oracle security reviews as part of its protocol risk scoring, providing an informal standardisation of oracle quality requirements.

- ### Provenance
  - sources:: Chainlink documentation; Uniswap V2/V3 TWAP Oracle design; Pyth Network whitepaper; MakerDAO oracle module documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
