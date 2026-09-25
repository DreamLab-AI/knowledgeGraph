The stable swap invariant is an automated market maker pricing formula, introduced by Curve Finance, that blends the constant-sum and constant-product curves to provide very low slippage for trades between assets expected to hold near-equal value, such as stablecoins or pegged tokens. Near the balanced point it behaves like a constant-sum market for tight pricing, while curving toward constant-product behaviour as reserves diverge to preserve liquidity. It is the core mechanism enabling efficient stablecoin exchange on-chain.

### Content

- Near the balanced reserve point the curve approximates constant-sum behaviour for near-1:1 pricing, then bends toward constant-product as reserves skew, protecting the pool from depletion. It is the foundation of stablecoin-focused [[Decentralized Exchange]] pools and shapes the returns and risk profile of [[Liquidity Provision]] in low-volatility asset markets.

