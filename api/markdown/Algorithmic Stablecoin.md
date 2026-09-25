An algorithmic stablecoin is a cryptocurrency that seeks to maintain a stable peg, typically to a fiat unit, through on-chain algorithmic supply adjustments and incentive mechanisms rather than full reserves of external collateral. Smart contracts expand or contract token supply, often using a companion volatility-absorbing token, to push the market price toward target. The model contrasts with fiat- and crypto-collateralised stablecoins and has proven fragile, with several high-profile de-peg failures.

### Overview

- When price exceeds the peg the protocol mints new supply; when it falls below, it contracts supply or rewards burning, nudging price toward target.
- Many designs pair the stable asset with an absorber/governance token that soaks up volatility, an arrangement vulnerable to reflexive collapse.
- It relies on a [[Price Oracle]] for market price and on continuous arbitrage demand to enforce the [[Peg]].

### Key aspects

- Under-collateralised or fully algorithmic backing.
- Supply expansion and contraction driven by [[Smart Contract]] rules.
- A companion volatility token absorbing demand shocks.
- Fragility under loss-of-confidence and reflexive death spirals.

### Mechanisms

- Mint/burn rebasing or bond-and-coupon incentive schemes.
- Seigniorage distribution to absorber-token holders.
- Oracle-driven price feedback loops.
- Arbitrage incentives to restore the [[Peg]].

### Applications

- Capital-efficient stable units within [[Decentralised Finance]].
- Censorship-resistant on-chain settlement assets.
- Experimental monetary designs studied against [[Tether]] and [[DAI]].
- Yield and liquidity strategies built on protocol incentives.

### Provenance

