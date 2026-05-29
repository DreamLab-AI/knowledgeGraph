public:: true

# Flash Loan
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:flash-loan",
  "@type": "Page",
  "vc:slug": "flash-loan",
  "title": "Flash Loan",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:flash-loan",
  "@type": "Class",
  "label": "Flash Loan",
  "definition": "A flash loan is an uncollateralised loan mechanism in decentralised finance that exists entirely within a single blockchain transaction: the borrower receives an arbitrary amount of an asset, executes arbitrary on-chain operations with it, and repays the loan plus a fee within the same atomic transaction, with the entire sequence reverting if repayment fails. Because atomicity guarantees that funds never leave the lending pool without being returned, no collateral is needed; default is technically impossible since a failed repayment causes the transaction to revert as if the loan never occurred. Flash loans enable capital-efficient arbitrage, liquidation, collateral swaps, and self-liquidation operations that would otherwise require significant upfront capital.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:de-fi", "label": "DeFi"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:atomic-settlement", "label": "Atomic Settlement"},
      {"@id": "urn:ngm:class:smart-contract-execution", "label": "Smart Contract Execution"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mev", "label": "MEV"},
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"},
      {"@id": "urn:ngm:class:digital-asset-lending", "label": "Digital Asset Lending"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:decentralized-exchange", "label": "Decentralized Exchange"},
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Flash Loan]] is an uncollateralised [[Decentralised Finance]] lending primitive that borrows funds from a [[Liquidity Pool]] via [[Smart Contract]], executes arbitrary operations, and repays within a single [[Atomic Settlement]] transaction — reverting entirely if repayment fails — enabling capital-efficient arbitrage, liquidations, and collateral management without counterparty risk.

- ### Relationships
  - Flash loans utilise [[Smart Contract]] logic for both loan dispatch and repayment enforcement, draw liquidity from [[Liquidity Pool]] reserves, and depend on [[Atomic Settlement]] guarantees to ensure no-default semantics. They are a mechanism that enables [[MEV]] extraction strategies, supports [[Liquidity Provision]] efficiency, and underpins [[Digital Asset Lending]] use cases in the broader [[Decentralised Finance]] ecosystem, often interacting with [[Decentralized Exchange]] protocols during execution.

- ### Content
  - Flash loans were first introduced by Marble Protocol in 2018 and popularised by Aave in 2020 as a formal DeFi primitive. The concept relies on a property unique to smart contract platforms: within a single transaction, a contract can call out to other contracts, receive callbacks, and enforce post-conditions atomically. Traditional finance has no equivalent because physical settlement processes are sequential and asynchronous — a borrower must receive funds before using them, and repayment occurs at a later time, creating the window for default. On a smart contract platform like Ethereum, the entire loan lifecycle executes in one block and the lender's smart contract can verify repayment before committing the transaction state.

  - Mechanically, a flash loan transaction calls the lending pool's `flashLoan` function, specifying the asset and amount. The pool transfers the requested amount to the borrower's contract and calls a user-defined callback function. Inside this callback, the borrower's contract can execute arbitrary on-chain logic — swapping assets across DEXes, liquidating undercollateralised positions on lending protocols, or swapping collateral types. After the callback returns, the lending pool checks that the borrowed amount plus fee has been returned; if not, the entire transaction is reverted, restoring all state to its pre-transaction values.

  - Flash loans have proven double-edged. Their legitimate uses — cross-DEX arbitrage (which improves price efficiency), self-liquidation (which allows borrowers to unwind positions without external liquidators), and collateral swaps — provide genuine economic benefits. Their illegitimate uses involve manipulating price oracles within the same transaction: a borrower takes a large flash loan, uses it to distort an asset's price on a DEX that a lending protocol uses as its price oracle, borrows against the artificially inflated collateral value, then repays the flash loan while retaining the borrowed funds. Several major DeFi exploits in 2020–2022, including attacks on bZx, Harvest Finance, and Cream Finance, used this vector.

  - As of 2024–2025, flash loans are considered a mature DeFi primitive. Aave v3, Uniswap v3, and Balancer all support flash loan interfaces, with accumulated flash loan volume in the hundreds of billions of dollars. Oracle manipulation attacks have declined following the widespread adoption of time-weighted average price (TWAP) oracles and multi-source oracle aggregators that are resistant to single-block price manipulation. Research into cross-chain flash loans — which would extend the mechanism across bridged assets — remains active, with atomicity guarantees across heterogeneous chains representing the principal unresolved challenge.

