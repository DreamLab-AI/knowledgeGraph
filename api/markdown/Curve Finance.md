
Curve Finance is a decentralised exchange protocol operating across Ethereum and multiple EVM-compatible chains, specialising in low-slippage swaps between assets expected to maintain near-parity in value, such as stablecoins and liquid staking tokens. It employs a hybrid invariant automated market maker that blends constant-sum and constant-product behaviour, concentrating liquidity near the peg to dramatically reduce trading costs for correlated assets. The protocol's CRV governance token is distributed to liquidity providers and can be locked in a vote-escrow mechanism (veCRV) that grants voting power over pool incentive allocation, creating a flywheel dynamic known as the Curve Wars. Curve v2 extended the model to volatile asset pairs using a price-repegging invariant, broadening the protocol's scope from stablecoin-only pools to general concentrated-liquidity trading.

- ### Overview
  - Curve Finance launched in January 2020, founded by Michael Egorov, initially as a StableSwap protocol targeting stablecoin-to-stablecoin swaps on [[Ethereum]].
  - The protocol addressed a fundamental limitation of general [[Automated Market Maker]] designs: constant-product AMMs like [[Uniswap]] spread liquidity uniformly across all prices, creating substantial slippage even for assets that rarely deviate far from parity.
  - Curve's StableSwap invariant blends a constant-sum curve (zero slippage at equal balances) with a constant-product fallback (preserving solvency at extreme imbalance), producing a hybrid that behaves nearly like a constant-sum market near equilibrium.
  - In August 2020, Curve launched the CRV [[Governance Token]] and transitioned governance to [[Decentralised Autonomous Organisation]] (DAO) control.
  - Curve v2 (2021) introduced a repegging mechanism for volatile asset pairs, allowing the protocol to serve markets beyond stablecoin-only pools while maintaining concentrated-liquidity efficiency.
  - The protocol expanded to [[EVM Compatible Blockchain]] networks including Polygon, Avalanche, Arbitrum, Optimism, and Fantom, becoming multi-chain infrastructure.
  - Curve's [[Liquidity Pool]] design and veCRV mechanics became a widely imitated template across [[Decentralised Finance Domain]] protocols.

- ### Key Mechanisms
  - **StableSwap Invariant**
    - The core pricing formula blends constant-sum (x + y = k) and constant-product (x · y = k) behaviour via an amplification coefficient A.
    - High A values concentrate liquidity near parity, enabling near-zero slippage on correlated assets; the protocol falls back to constant-product behaviour if pool balance diverges significantly.
    - The invariant is applied within [[Liquidity Pool]] contracts written as [[Smart Contract]] on [[Ethereum]].
  - **Curve v2 Invariant**
    - Introduced an internal oracle-based price feed to define a repegging target for volatile pairs (e.g., ETH/BTC, CRV/ETH).
    - The pool continuously adjusts its internal price reference as the market moves, concentrating liquidity around the current price rather than a fixed peg.
    - This makes Curve v2 a form of [[Concentrated Liquidity]] AMM, similar in intent to Uniswap v3 but managed automatically.
  - **CRV Token and Vote-Escrow**
    - The CRV [[Governance Token]] is distributed as [[Liquidity Mining]] rewards to depositors in Curve pools, incentivising liquidity provision.
    - Holders can lock CRV for up to four years in the [[Vote-Escrow Mechanism]] to receive veCRV, which grants voting power and boosted (up to 2.5×) rewards.
    - veCRV holders vote weekly in gauge weight votes to direct CRV emissions to specific pools, creating strong economic incentives for protocols to accumulate veCRV.
  - **Gauge System**
    - Each [[Liquidity Pool]] on Curve can be assigned a gauge that receives a share of CRV emissions proportional to its gauge weight, as determined by veCRV holders.
    - Third-party protocols accumulate veCRV (or bribe veCRV holders via platforms like [[Convex Finance]]) to attract emissions to pools that use their own tokens.
  - **The Curve Wars**
    - The competition among [[Decentralised Finance Domain]] protocols to control veCRV voting power became known as the "Curve Wars".
    - Convex Finance aggregated veCRV on behalf of CRV holders, becoming the dominant force in gauge weight allocation and exemplifying [[DeFi Composability]].
    - This dynamic influenced [[Token Incentive Design]] across numerous subsequent protocols.
  - **Metapools**
    - Curve supports metapools that pair a custom token against a base pool LP token (e.g., 3pool: DAI/USDC/USDT), providing deep liquidity for new stablecoins without fragmenting existing liquidity.
    - Metapools rely on the compositional properties of [[Liquidity Pool]] tokens and [[DeFi Composability]].

- ### Applications and Use Cases
  - **Stablecoin Swaps**: Primary use case — swapping between DAI, USDC, USDT, FRAX, and other [[Stablecoin]] assets with minimal cost; widely used by other DeFi protocols and trading bots.
  - **Liquid Staking Token Pairs**: Pools for stETH/ETH, rETH/ETH, and similar pairs allow efficient arbitrage and hedging between staked and unstaked assets.
  - **Cross-chain Stablecoin Liquidity**: Deployment on multiple [[EVM Compatible Blockchain]] networks makes Curve a backbone for stablecoin liquidity on L2s and sidechains.
  - **Protocol-Owned Liquidity**: Projects acquire veCRV or bribe gauge voters to direct CRV emissions to pools holding their native stablecoin or token.
  - **Yield Farming**: Liquidity providers earn trading fees plus CRV rewards and often deposit LP tokens into [[Convex Finance]] or other yield aggregators for compounded returns, enabling [[Yield Farming]] strategies.
  - **Flash Loans**: Curve pools expose interfaces compatible with [[Flash Loan]] patterns, enabling atomic arbitrage and liquidation bots.
  - **crvUSD**: Curve launched its own native stablecoin, crvUSD, using a Lending-Liquidating AMM Protocol (LLAMMA) that uniquely uses a Curve-style AMM as the collateral management engine, integrating with [[Oracle]] price feeds for soft liquidations.

- ### Standards and Context
  - Curve smart contracts are audited open-source code deployed on public [[Ethereum]] and EVM networks; the protocol does not rely on any formal technical standard beyond the ERC-20 token interface.
  - The protocol operates under DAO governance via veCRV votes; parameter changes (amplification coefficients, fee rates, gauge additions) are executed through on-chain proposals.
  - Regulatory context: Curve pools are non-custodial and permissionless; liquidity providers bear exposure to [[Impermanent Loss]] and [[Smart Contract]] risk without recourse to a central operator.
  - The protocol's gauge mechanism and veCRV model have been forked or adapted by many protocols including Balancer (veBAL), Frax Finance, and Velodrome, establishing a de facto incentive design pattern in [[Decentralised Finance Domain]].
  - Curve's crvUSD stablecoin introduced a novel soft-liquidation mechanism distinct from prevailing CDP designs (MakerDAO) and algorithmic models, representing an innovation in on-chain [[Oracle]]-integrated lending.

- ### Architecture Notes
  - Curve pool contracts are written in Vyper, not Solidity, for auditability and reduced attack surface.
  - The DAO and gauge controller are separate contracts; the gauge controller is a single authoritative on-chain registry updated by veCRV governance votes.
  - Cross-chain deployments use bridged representations of CRV and rely on chain-specific bridge infrastructure rather than a unified cross-chain governance mechanism.
  - The StableSwap invariant requires iterative numerical solving (Newton's method) within on-chain contract execution, making it more gas-intensive than constant-product AMMs.

- ### Provenance

