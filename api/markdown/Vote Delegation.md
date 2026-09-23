
Vote delegation is a governance mechanism by which a token holder assigns their voting power to another address that votes on their behalf, without transferring ownership of the underlying assets. It is central to on-chain DAO governance, enabling passive holders to entrust active, informed delegates and improving participation rates. Delegation can be revoked or reassigned, and may be liquid, allowing chained or topic-specific delegation.

- ### Content
  - In ERC20Votes-style contracts, delegation is recorded as a checkpointed mapping so that voting weight at any block height can be queried for snapshot-based proposals. Liquid democracy extends this with transitive delegation and per-issue overrides, trading off accountability and expertise concentration against the risk of delegate cartels and low independent scrutiny.

