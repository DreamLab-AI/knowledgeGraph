- ### Definition
  - A gasless governance platform that records votes off-chain by having participants sign messages, using token balances captured at a chosen block as voting weight. It avoids transaction fees while preserving a verifiable tally tied to on-chain holdings.

- ### Semantic Classification
  - owl-class:: blockchain:SnapshotOffChainVoting
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Decentralized Governance]]
  - bridges-to:: [[Governance]], [[Quadratic Voting]]
  - requires:: [[Digital Signature]], [[Token]]
  - enables:: [[DAOGovernance]]

- ### Content
  - Snapshot lets organisations run governance votes without paying transaction fees by collecting signed messages rather than on-chain transactions. Voting power is determined from a snapshot of token balances at a specified block, so holdings cannot be borrowed for a vote after that point.
  - Because the votes are stored off-chain, the results are advisory unless paired with an on-chain execution step, but the signatures remain independently verifiable. The platform supports several voting schemes, including weighted and quadratic methods.

- ### Provenance
  - sources:: [[https://snapshot.org/]]
  - migration-date:: 2026-05-29T00:00:00Z