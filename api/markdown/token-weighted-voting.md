- ### Definition
  - Token-weighted voting is an on-chain governance mechanism in which each participant's voting power is directly proportional to the quantity of governance tokens they hold, lock, or stake. It is the most common decision-making primitive in decentralised autonomous organisations and DeFi protocols, enabling transparent, programmable, and censorship-resistant governance of parameter changes, treasury allocations, and protocol upgrades. The mechanism is criticised for plutocratic tendencies — large token holders disproportionately control outcomes — motivating research into alternative weighting schemes such as quadratic voting and conviction voting.

- ### Semantic Classification
  - owl-class:: token-weighted-voting:Token-Weighted Voting
  - owl-role:: Concept

- ### Relationships
  - uses [[Governance Token]]
  - uses [[On Chain Voting]]
  - contrastsWith [[Quadratic Voting]]
  - contrastsWith [[Conviction Voting]]
  - relatedTo [[DAO Governance]]
  - relatedTo [[Snapshot Voting]]

- ### Content
  Token-weighted voting implements plutocratic governance: one token, one vote. Proposals are submitted on-chain with a defined voting period, quorum threshold, and approval threshold. Token holders vote directly or through delegates in a liquid democracy model where voting power can be delegated to trusted representatives. Smart contracts tally votes and automatically execute approved proposals once the threshold is reached, eliminating the need for trusted intermediaries to implement decisions.

  Snapshot, an off-chain gasless voting platform, and Governor Bravo/OpenZeppelin Governor, the canonical on-chain governance frameworks, are the dominant implementations. Token locking (vote-escrow) schemes — popularised by Curve Finance's veCRV — extend the model by weighting votes by both token quantity and lock duration, incentivising long-term alignment between voters and the protocol.

  The primary criticism of token-weighted voting is its vulnerability to plutocracy: large token holders, whether early investors, venture capital funds, or centralised exchanges using customer deposits, can unilaterally control governance outcomes. Low voter turnout exacerbates this, as proposals can pass with a small fraction of the token supply voting. Quadratic voting offers a partial remedy by diminishing the marginal voting power of additional tokens, but is vulnerable to sybil attacks without robust identity primitives. Conviction voting accumulates preference over time, reducing the impact of last-minute whale interventions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z