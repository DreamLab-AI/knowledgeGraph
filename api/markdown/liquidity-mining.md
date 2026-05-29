- ### Definition
  - Liquidity mining is a decentralised finance incentive mechanism in which participants deposit token pairs into automated market maker pools or lending protocols and receive protocol-issued tokens as rewards proportional to their share of pooled liquidity. The reward tokens often confer governance rights and a share of trading fee revenue, creating compounding yield incentives. Liquidity mining bootstraps network liquidity for nascent protocols but introduces impermanent loss risk and token inflation dynamics that require careful mechanism design.

- ### Semantic Classification
  - owl-class:: liquidity-mining:Liquidity Mining
  - owl-role:: Concept

- ### Relationships
  - requires [[Liquidity Pool]]
  - requires [[Automated Market Maker]]
  - enables [[Yield Farming]]
  - enables [[Decentralized Exchange]]
  - relatedTo [[Governance Token]]
  - relatedTo [[Token Economics]]

- ### Content
  - Liquidity mining operates on automated market maker (AMM) protocols such as Uniswap, Curve, and Balancer, which use bonding curve mathematics to price token swaps without requiring an order book. Liquidity providers (LPs) deposit equal-value quantities of two tokens into a pool and receive LP tokens representing their proportional share; these LP tokens can be staked in reward contracts to earn additional protocol tokens.
  - A central risk in liquidity mining is impermanent loss (IL), which occurs when the price ratio of the two pooled assets diverges from the ratio at the time of deposit. The loss is "impermanent" because it is realised only upon withdrawal and can be partially or fully offset by accumulated trading fees and mining rewards. Concentrated liquidity designs (introduced by Uniswap v3) allow LPs to specify price ranges, increasing capital efficiency but also increasing IL exposure during volatile market conditions.
  - Yield farming generalises liquidity mining by composing multiple DeFi protocols: an LP token may be deposited into a yield aggregator such as Yearn Finance, which automatically routes rewards through the highest-yielding strategies. The resulting token inflation pressure from mining rewards requires protocols to design emission schedules (e.g., halving curves, vote-escrow mechanisms) to sustain token value over time. Governance tokens earned through liquidity mining typically grant holders influence over protocol parameters via DAO voting.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z