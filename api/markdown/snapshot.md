- ### Definition
  - Snapshot is an off-chain governance platform that lets token holders and decentralised autonomous organisations vote on proposals without paying on-chain transaction fees. Votes are signed cryptographically with a wallet and weighted according to token holdings recorded at a chosen block height, then aggregated and stored on the InterPlanetary File System. Because voting is gasless and non-binding at the protocol level, results are typically executed separately by multisignature wallets or on-chain modules.

- ### Semantic Classification
  - owl-class:: defi:Snapshot
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decentralised Finance Domain]]
  - bridges-to:: [[Gnosis Safe]], [[Governance Domain]]
  - requires:: [[IPFS]], [[Ethereum]]
  - enables:: [[Decentralised Autonomous Organisation]]

- ### Content
  - Snapshot decouples the act of expressing governance preferences from on-chain execution. Each proposal records the voting strategy, the snapshot block at which balances are read, and the available choices. Participants sign a message with their wallet to register a vote, and these signatures are verifiable without consuming gas, which removes a significant barrier to broad participation.
  - The platform supports a range of voting strategies, including single-choice, approval, quadratic, ranked-choice and weighted voting, and can read balances from ERC-20 tokens, ERC-721 collections, delegated balances and custom contracts. Voting power is computed at a fixed block to prevent vote-buying through transient balance changes during the voting window.
  - Because Snapshot is advisory rather than self-executing, organisations commonly pair it with a multisignature wallet or an execution module that enacts approved decisions on-chain. This separation keeps day-to-day signalling cheap while reserving costly settlement for decisions that have already reached consensus.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z