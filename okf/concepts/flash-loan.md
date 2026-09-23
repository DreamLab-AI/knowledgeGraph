---
okf_version: "0.2"
type: Class
title: Flash Loan
resource: urn:ngm:class:flash-loan
domain: blockchain
description: "A flash loan is an uncollateralised loan mechanism in decentralised finance that exists entirely within a single blockchain transaction: the borrower receives an arbitrary amount of an asset, executes arbitrary on-chain operations with it, and repays the loan plus a fee within the same atomic transaction, with the entire sequence reverting if repayment fails. Because atomicity guarantees that fund"
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:de-fi
requires:
  - urn:ngm:class:evm-compatible-blockchain
enables:
  - urn:ngm:class:mev
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:digital-asset-lending
  - urn:ngm:class:arbitrage
  - urn:ngm:class:self-liquidation
dependsOn:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:lending-protocol
bridgesTo:
  - urn:ngm:class:financial-derivatives
  - urn:ngm:class:algorithmic-trading
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:smart-contract-execution
relatedTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:transaction
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:twap-oracle
---

# Flash Loan

A flash loan is an uncollateralised loan mechanism in decentralised finance that exists entirely within a single blockchain transaction: the borrower receives an arbitrary amount of an asset, executes arbitrary on-chain operations with it, and repays the loan plus a fee within the same atomic transaction, with the entire sequence reverting if repayment fails. Because atomicity guarantees that funds never leave the lending pool without being returned, no collateral is needed; default is technically impossible since a failed repayment causes the transaction to revert as if the loan never occurred. Flash loans enable capital-efficient arbitrage, liquidation, collateral swaps, and self-liquidation operations that would otherwise require significant upfront capital.
