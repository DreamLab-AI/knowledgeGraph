A liquidation mechanism is the automated process by which a decentralised finance protocol seizes and sells a borrower's collateral once the value of that collateral falls below a defined threshold relative to the outstanding debt. It protects lenders and the protocol from undercollateralised positions by ensuring debt is repaid before collateral becomes insufficient. Liquidations are typically triggered by oracle price updates and executed by liquidators who are incentivised with a discount or bonus on the seized assets.

### Overview

- On-chain lending relies on [[Over Collateralisation]] to absorb volatility, but buffers can be exhausted when prices fall sharply.
- The liquidation mechanism is the safety valve that restores solvency by closing risky positions before they become undercollateralised.
- It is implemented entirely in smart contracts, so enforcement is automatic, transparent, and permissionless.
- Third-party liquidators monitor positions and compete to execute liquidations, earning an incentive that funds the service without protocol intervention.

### Key aspects

- Health factor: a continuously computed measure of how close a position is to liquidation.
- Liquidation threshold: the collateralisation ratio at which a position becomes eligible to be closed.
- Liquidation bonus: the discount or premium that rewards liquidators for repaying debt.
- Oracle trigger: price feeds determine when positions cross their thresholds.
- Partial vs full liquidation: protocols may close part or all of a position to restore safety.

### Mechanisms

- Smart contracts evaluate each position against oracle prices on every relevant interaction.
- When a position is unhealthy, anyone may call the liquidation function, repaying debt and claiming collateral.
- Incentive design balances rapid liquidation with minimising losses to borrowers and the protocol.

### Applications

- Maintaining solvency in a [[Lending Protocol]] such as [[Aave]].
- Backing crypto-collateralised [[Stablecoin]] systems by enforcing redemption guarantees.
- Sourcing collateral for sale through a [[Decentralised Exchange]] during liquidations.
- Forming a core component of on-chain [[Risk Management]].

### Provenance

