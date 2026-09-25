Over-collateralisation is a risk-management practice in which the value of assets pledged as collateral exceeds the value of the obligation they secure. In decentralised finance it is the standard requirement for permissionless lending and for backing stablecoins, where borrowers must deposit more value than they draw to absorb price volatility. The surplus margin protects lenders and protocols against default by ensuring that collateral can be liquidated for at least the amount owed even when prices move adversely.

### Overview

- In trustless on-chain systems there is no credit scoring or legal recourse, so protocols compensate by demanding excess collateral.
- A borrower deposits assets and may draw a fraction of their value, leaving a buffer that absorbs volatility before the position becomes unsafe.
- The required ratio, often expressed as a loan-to-value or collateralisation ratio, is enforced automatically by smart contracts and updated against external price feeds.
- If collateral value falls toward the debt, the position is liquidated to recover funds, preserving solvency for the wider system.

### Key aspects

- Collateral buffer: pledged value deliberately exceeds borrowed value to cushion price swings.
- Collateralisation ratio: a parameter defining how much can be borrowed against deposited assets.
- Liquidation threshold: the point at which a falling position is sold to protect the protocol.
- Oracle dependence: accurate, timely price data is essential to evaluate positions correctly.
- Capital inefficiency: locking surplus value is the cost of trustless, permissionless credit.

### Mechanisms

- Smart contracts continuously evaluate each position's health using oracle-supplied prices.
- When a position breaches its threshold, a liquidation mechanism auctions or seizes collateral to repay debt.
- Risk parameters are governed and tuned to balance capital efficiency against systemic safety.

### Applications

- Backing decentralised [[Stablecoin]] systems with crypto collateral.
- Enabling permissionless borrowing in a [[Lending Protocol]] such as [[Aave]].
- Supporting leveraged strategies, [[Yield Farming]], and trading on a [[Decentralised Exchange]].
- Providing a trustless alternative to credit-based lending in [[Risk Management]].

### Provenance

