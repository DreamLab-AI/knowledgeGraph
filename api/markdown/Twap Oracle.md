
A TWAP oracle is a price oracle that reports the time-weighted average price of an asset over a chosen window rather than its instantaneous spot price. By accumulating price-time observations and dividing by elapsed time, it produces a smoothed figure that is expensive to manipulate within a single block or short interval. TWAP oracles are widely deployed by on-chain automated market makers to supply manipulation-resistant price feeds to lending, derivatives, and liquidation systems.

- ### Overview
  - A TWAP oracle resists manipulation because moving the average meaningfully requires sustaining a distorted price across many blocks, which arbitrageurs counteract and which incurs large capital cost.
  - It is typically computed from a cumulative price accumulator stored by an automated market maker, sampled at the start and end of the averaging window.
  - The choice of window length trades responsiveness for robustness: longer windows resist manipulation but lag genuine price moves.
- ### Mechanisms
  - Cumulative price accumulator that records price multiplied by elapsed time each block.
  - Window-based sampling: difference of two accumulator readings divided by the time delta.
  - Manipulation resistance derived from the capital cost of sustaining off-market prices.
  - Integration with smart contracts that consume the averaged price for collateral valuation.
- ### Applications
  - Collateral valuation and liquidation thresholds in DeFi lending protocols.
  - Settlement and mark pricing for on-chain derivatives.
  - Reference pricing for automated market makers and decentralised exchanges resistant to flash-loan attacks.
- ### Provenance

