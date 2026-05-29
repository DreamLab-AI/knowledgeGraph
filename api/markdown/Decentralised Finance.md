public:: true

# decentralised finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f51916bf4d8e4ed3890511c1b7eeb2b9c50d14df87f76f8e338a53c13fa8aecd",
  "@type": "Page",
  "vc:slug": "decentralised-finance",
  "title": "decentralised finance",
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
  "@id": "urn:ngm:class:decentralised-finance",
  "@type": "Class",
  "label": "Decentralised Finance",
  "definition": "Decentralised Finance (DeFi) encompasses financial services and instruments—including lending, borrowing, trading, and yield generation—implemented as permissionless, non-custodial smart contracts on public blockchains, eliminating the need for traditional financial intermediaries such as banks, brokers, and clearinghouses. Protocol logic is encoded directly in on-chain code that executes deterministically and transparently, allowing any party to verify the rules governing their funds. DeFi protocols compose with one another through shared liquidity pools and token standards, enabling complex financial strategies from interoperable building blocks.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "BC DeFi and Economics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"},
      {"@id": "urn:ngm:class:tokenization", "label": "Tokenization"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cross-border-payments", "label": "Cross-Border Payments"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Decentralised Finance (DeFi) encompasses financial services and instruments—including lending, borrowing, trading, and yield generation—implemented as permissionless, non-custodial smart contracts on public blockchains, eliminating the need for traditional financial intermediaries such as banks, brokers, and clearinghouses. Protocol logic is encoded directly in on-chain code that executes deterministically and transparently, allowing any party to verify the rules governing their funds. DeFi protocols compose with one another through shared liquidity pools and token standards, enabling complex financial strategies from interoperable building blocks.

- ### Semantic Classification
  - owl-class:: decentralised-finance:Decentralised Finance
  - owl-role:: Concept

- ### Relationships
  - requires [[Smart Contract]]
  - requires [[Consensus Mechanism]]
  - uses [[Stablecoin]]
  - uses [[Tokenization]]
  - relatedTo [[Cross-Border Payments]]

- ### Content
  - DeFi protocols replicate the core functions of traditional finance without central authorities. Automated market makers (AMMs) replace order-book exchanges using mathematical pricing functions that determine swap rates from liquidity pool reserves. Lending protocols allow users to deposit collateral and borrow against it at algorithmically adjusted interest rates, with liquidation bots maintaining solvency when collateral values fall below thresholds.
  - Stablecoins play a critical role in DeFi as a unit of account and medium of exchange that avoids the volatility of native blockchain assets. Algorithmic, overcollateralised, and fiat-backed stablecoins each carry distinct risk profiles that users must evaluate. Tokenization of real-world assets—equities, bonds, commodities—extends DeFi's reach into traditional markets, though it introduces custodian trust dependencies that partially reintroduce intermediary risk.
  - Regulatory clarity for DeFi remains fragmented across jurisdictions. Key questions concern how to attribute legal responsibility for protocol-defined outcomes when no identifiable operator exists, how AML/KYC requirements apply to pseudonymous on-chain interactions, and whether governance token holders constitute a regulated entity. The composability that makes DeFi powerful also amplifies systemic risk, as a smart-contract vulnerability or oracle failure in one protocol can cascade through interconnected liquidity pools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
