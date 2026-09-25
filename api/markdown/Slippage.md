Slippage is the difference between the expected price of a trade and the price at which it actually executes, arising from price movement and limited liquidity between order submission and settlement. On automated-market-maker decentralised exchanges slippage is a direct function of trade size relative to pool depth, and traders set a slippage tolerance to bound acceptable execution price. Excessive slippage can be exploited through front-running and other maximal-extractable-value strategies.

### Overview

- Slippage is a core trading concern that becomes especially visible on decentralised exchanges, where automated-market-maker curves make the price impact of a swap mechanically predictable. Traders manage it with slippage-tolerance settings, routing across pools, and splitting large orders.

### Mechanisms

- Price impact from moving along an automated-market-maker bonding curve
- Slippage tolerance as a user-set bound that reverts the swap if exceeded
- Liquidity depth as the primary determinant of realised slippage
- Sandwich and front-running attacks that deliberately widen slippage

### Applications

- Configuring swap tolerance on decentralised exchanges
- Routing large orders to minimise price impact
- Modelling execution cost in trading strategies
- Designing maximal-extractable-value protections

### Provenance

