Parameter governance is the on-chain process by which a decentralised protocol's tunable configuration values — such as fees, collateral ratios, interest-rate curves, and reward emissions — are proposed, deliberated, voted upon, and enacted without altering the underlying contract code. By exposing safe adjustment levers to token-holder governance, it lets protocols adapt to market conditions while preserving the immutability of core logic. It is a foundational pattern in DeFi and DAO management, distinct from full code upgrades.

### Overview

- Decentralised protocols expose levers — fees, collateralisation ratios, liquidation penalties, interest-rate models, emission schedules — that must occasionally change as markets evolve.
- Parameter governance routes these adjustments through an on-chain proposal and voting workflow, so changes are transparent, auditable, and community-authorised rather than admin-imposed.
- Crucially it is bounded: only pre-declared, range-constrained parameters are mutable, while the contract's executable logic stays immutable. This separates routine tuning from risky code upgrades.
- Timelocks and quorum thresholds give the community time to react and prevent capture by a transient majority.

### Mechanisms

- A proposal encodes the target parameter and new value as an executable governance action.
- Token-holders cast votes, typically weighted by stake, over a defined voting window.
- A quorum and approval threshold determine whether the proposal passes.
- A timelock delays execution before a governance module applies the change to the protocol's contracts.

### Applications

- Adjusting lending-market collateral factors and interest-rate curves.
- Tuning AMM fee tiers and liquidity-incentive emissions.
- Setting stablecoin stability fees and debt ceilings.
- Calibrating staking rewards and treasury allocations under [[Decentralised Governance]].

### Provenance

