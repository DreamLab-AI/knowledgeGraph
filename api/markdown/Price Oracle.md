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
  "definition": "A price oracle is an on-chain or hybrid data feed that supplies decentralised protocols with reliable, manipulation-resistant market prices for tokens, synthetic assets, and other financial instruments. On-chain price oracles—such as time-weighted average price (TWAP) feeds derived from automated market maker pool reserves—are fully decentralised but lag real-time prices. Off-chain oracle networks aggregate prices from multiple centralised and decentralised exchanges before committing them on-chain, offering fresher data at the cost of additional trust assumptions on node operators. Price oracles are foundational to DeFi lending protocols (collateral valuation), synthetic asset minting, perpetual futures settlement, and insurance claim adjudication.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:oracle-network", "label": "Oracle Network"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-oracle", "label": "Blockchain Oracle"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A price oracle is an on-chain or hybrid data feed that supplies decentralised protocols with reliable, manipulation-resistant market prices for tokens, synthetic assets, and other financial instruments. On-chain price oracles—such as time-weighted average price (TWAP) feeds derived from automated market maker pool reserves—are fully decentralised but lag real-time prices. Off-chain oracle networks aggregate prices from multiple centralised and decentralised exchanges before committing them on-chain, offering fresher data at the cost of additional trust assumptions on node operators. Price oracles are foundational to DeFi lending protocols (collateral valuation), synthetic asset minting, perpetual futures settlement, and insurance claim adjudication.

- ### Semantic Classification
  - owl-class:: price-oracle:Price Oracle
  - owl-role:: Concept

- ### Relationships
  - dependsOn [[Oracle Network]]
  - supports [[Decentralised Finance]]
  - supports [[Liquidity Pool]]
  - relatedTo [[Blockchain Oracle]]
  - relatedTo [[Automated Market Maker]]

- ### Content
  - Price oracles are among the highest-value attack surfaces in DeFi because incorrect prices can trigger unjust liquidations, enable flash-loan price manipulation attacks, or allow minting of unbacked synthetic assets. The two primary categories differ in their trust and freshness trade-offs: on-chain TWAP oracles compute the time-averaged price of an asset pair from an automated market maker's historical reserves, making spot manipulation impractical but introducing latency; off-chain oracle networks report near-real-time prices from centralised exchanges but rely on node operator honesty backed by cryptoeconomic staking.
  - In a collateralised lending protocol, the price oracle determines whether a borrower's collateral position is solvent: when the collateral price falls below the protocol's liquidation threshold, liquidators are incentivised to repay the borrower's debt in exchange for discounted collateral. Price oracle failure—whether through manipulation, stale data, or node downtime—therefore directly threatens protocol solvency and has been the vector for several significant DeFi exploits.
  - Robust price oracle design typically combines multiple independent data sources with circuit breakers that halt operations if price deviations exceed plausible bounds. Deviation thresholds trigger updates to minimise gas costs while maintaining price freshness. Proof-of-reserve price oracles extend this concept to real-world asset-backed tokens, attesting that the off-chain asset quantity matches the on-chain token supply—a critical component of RWA tokenisation infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
