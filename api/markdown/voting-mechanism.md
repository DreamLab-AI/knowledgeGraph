- ### Definition
  - A voting mechanism is a formalised procedure by which token holders or other stakeholders express preferences or binding decisions on protocol upgrades, parameter changes, treasury allocation, or dispute resolution in a decentralised network. The design of a voting mechanism determines the balance between participation breadth, sybil resistance, plutocracy risk, and voter apathy; common variants include token-weighted voting, quadratic voting, conviction voting, and delegated representation through liquid democracy. The mechanism's properties directly shape the security and legitimacy of on-chain governance outcomes.

- ### Semantic Classification
  - owl-class:: voting-mechanism:Voting Mechanism
  - owl-role:: Concept

- ### Relationships
  - hasPart [[On Chain Voting]]
  - hasPart [[Token-Weighted Voting]]
  - relatedTo [[DAO Governance]]
  - relatedTo [[Governance Token]]
  - relatedTo [[Quadratic Voting]]
  - enables [[On-chain Governance]]

- ### Content
  Voting mechanisms are the principal means by which decentralised protocols manage collective decision-making without a central authority. The simplest variant is token-weighted voting (also called plutocratic voting), where each token confers one vote; whilst straightforward to implement, it risks concentrating governance power among large token holders. Quadratic voting addresses this by charging for votes quadratically—k votes cost k² tokens—reducing the marginal influence of large holders and amplifying the aggregate preference of many small stakeholders.

  Conviction voting, used in protocols such as Gardens and 1Hive, requires voters to commit tokens to a proposal over time, with voting weight accumulating as a function of commitment duration. This mechanism rewards sustained community preferences and discourages governance attacks that acquire voting power transiently. Snapshot voting uses off-chain signature aggregation over a block-height-anchored token snapshot, avoiding on-chain gas costs whilst retaining verifiability.

  Governance participation rates in DAO voting are typically low, raising questions about the legitimacy of decisions taken by a small active minority. Liquid democracy approaches—where token holders can delegate their vote to trusted representatives who vote on their behalf—attempt to improve effective participation without requiring all stakeholders to engage directly with each proposal. The design of quorum requirements, voting periods, timelock delays for execution, and veto mechanisms are all governance parameters that must be calibrated to balance security, responsiveness, and legitimacy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z