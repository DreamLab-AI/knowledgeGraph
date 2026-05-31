- ### Definition
  - A smart-contract system that lets users supply assets to earn interest and borrow against deposited collateral, with rates and liquidations governed by code.

- ### Semantic Classification
  - owl-class:: blockchain:LendingProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Liquidity Pool]]
  - requires:: [[Collateral Management]], [[Price Oracle]]
  - enables:: [[Yield Farming]]

- ### Content
  - A lending protocol pools supplied assets and lends them to borrowers who post collateral worth more than the amount borrowed. Interest rates typically adjust algorithmically with the ratio of borrowed to supplied funds, balancing demand for loans against available liquidity.
  - Loans are overcollateralised, and the protocol monitors collateral value through price feeds. If a borrower's collateral falls below a required threshold, the position is liquidated by third parties who repay part of the debt in exchange for discounted collateral. The mechanism relies on accurate oracles and timely liquidation to remain solvent.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z