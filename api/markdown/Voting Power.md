Voting power is the quantified influence a participant can exert over a collective decision, expressed as the weight their ballot carries relative to all eligible ballots. In token-based governance systems it is typically proportional to the number of governance tokens held, delegated, or staked at a given snapshot block, though alternative schemes such as quadratic voting, reputation weighting, and one-person-one-vote deliberately decouple influence from raw holdings to resist plutocratic capture.

### Semantic Classification

### Content

## Definition

**Voting power** measures how much weight a participant's ballot carries in a collective decision. In decentralised governance it is the central unit of account: proposals in a [[DAO]] pass or fail according to the aggregate voting power cast for each option, and thresholds such as [[Quorum]] are defined over total voting power rather than the number of voters. The concept therefore sits at the join between token economics and political design — it converts an asset position into decision-making authority.

The dominant model is token-weighted voting, where one governance token confers one vote. Because tokens are transferable, this makes voting power a market-priced commodity: it can be bought, borrowed, or delegated. [[Snapshot Governance]] systems record balances at a specific block height so that voting power cannot be inflated mid-vote by flash-loaned tokens, while [[On-chain Governance]] frameworks such as Compound's Governor contracts read delegated balances directly from the token contract at proposal creation.

Token weighting concentrates influence in large holders, so a rich design space of correctives has emerged. Quadratic voting prices the *n*-th vote at *n²* credits, flattening whale dominance; vote-escrowed models (veTokens) weight ballots by both stake and lock-up duration, aligning influence with long-term commitment; delegation lets passive holders route their power to active stewards; and reputation-based systems allocate non-transferable weight earned through contribution. Each scheme trades off sybil resistance, capital efficiency, and egalitarian legitimacy differently.

## Current Landscape

- **Concentration is empirically severe**: a 2025 study of DAO governance finds top-decile voters controlling 76.2% of realised voting power, the single largest voter holding 37.5%, and a per-proposal Gini coefficient for voting-power distribution of roughly 0.8 — with abnormal trading and insider activity clustering around proposals.
- **Delegation frequently misaligns with holders**: an October 2025 empirical study across 14 DAO forums (arXiv 2510.05830) links forum participants to on-chain addresses and shows that ranking-based delegate interfaces exacerbate power concentration and that delegations often diverge from token holders' expressed priorities.
- **Anti-plutocratic mechanisms face a formal limit**: recent work argues that no voting rule deriving power solely from wallet balance can escape plutocracy on a permissionless chain — under a rational Sybil attacker who splits tokens across wallets, even concave rules such as quadratic voting yield power that grows asymptotically linearly in holdings.
- **Scoping reviews (June 2025)** confirm delegated voting improves turnout but can deepen centralisation when whales or influential delegate networks dominate; quadratic voting, weighted-delegation constraints, and reputation-based governance are the leading correctives, each exposed to gaming, collusion, and implementation complexity.
- Vote markets and token-control governance attacks — accumulating cheap voting power to pass a self-serving proposal — remain the core threat model, keeping the measurement, snapshotting, and auditability of voting power a live engineering concern rather than a settled convention.

  **Sources**:

- https://arxiv.org/html/2510.05830v2
- https://www.frontiersin.org/journals/blockchain/articles/10.3389/fbloc.2025.1598283/full

