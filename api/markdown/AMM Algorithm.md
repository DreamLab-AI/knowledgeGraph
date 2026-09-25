An AMM Algorithm is the pricing rule of an Automated Market Maker that algorithmically sets exchange rates from the reserves held in a liquidity pool, removing the need for a traditional order book. The canonical form is the constant-product invariant x*y=k, with variants such as constant-sum, stableswap, and concentrated-liquidity curves tuned for different asset pairs. It determines slippage, price impact, and the impermanent loss that liquidity providers bear.

### Content

- The constant-product rule keeps the product of reserves invariant, so each trade moves price along a hyperbola, producing slippage proportional to trade size relative to depth. Specialized invariants reduce slippage for correlated assets (stableswap) or concentrate capital in a price band (concentrated liquidity), trading simplicity for capital efficiency and more complex risk profiles.

