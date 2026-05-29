- ### Definition
  - Aave is a decentralised, non-custodial liquidity protocol deployed on Ethereum and several EVM-compatible networks that enables users to supply crypto assets to earn yield and borrow against collateral at algorithmically determined variable or stable interest rates. It is governed by holders of its AAVE token through an on-chain governance process, and pioneered the flash loan — an uncollateralised loan that must be borrowed and repaid within a single transaction block — as a primitive for arbitrage and self-liquidation.

- ### Semantic Classification
  - owl-class:: aave:Aave
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contracts]]
  - uses [[Liquidity Pool]]
  - relatedTo [[Decentralised Finance]]
  - relatedTo [[Stablecoin]]
  - enables [[Yield Farming]]

- ### Content
  - Aave operates through a system of lending pools, each holding a reserve of a specific asset. Suppliers deposit tokens and receive aTokens — interest-accruing derivative tokens pegged 1:1 to the supplied asset — that represent their claim on the pool plus accumulated interest. Borrowers must post collateral exceeding the loan value, with the allowable loan-to-value ratio and liquidation thresholds set per asset by governance. If a borrower's health factor (collateral value relative to debt) drops below 1, liquidators can repay a portion of the debt and receive the collateral at a discount, maintaining protocol solvency.
  - Interest rates in Aave V3 are determined by utilisation ratio: as the fraction of pooled assets being borrowed increases, rates rise algorithmically to attract more supply and discourage further borrowing. Risk parameters — including supply caps, borrow caps, and isolation mode for new or volatile assets — are managed through the Aave governance process, where AAVE token holders vote on Aave Improvement Proposals (AIPs).
  - Flash loans are Aave's most technically novel contribution to DeFi primitives: they allow a contract to borrow any amount from a pool within a single transaction without collateral, provided the loan plus fee is returned before the transaction finalises. They are widely used for liquidations, arbitrage between decentralised exchanges, and collateral swaps. Aave V3 also introduced portals, enabling cross-chain liquidity movement across supported networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z