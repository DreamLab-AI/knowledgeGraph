- ### Definition
  - The Nakamoto Coefficient is a quantitative metric for blockchain decentralisation, defined as the minimum number of independent entities in a given subsystem (such as mining pool concentration, validator set, or client software diversity) whose collusion or failure would be sufficient to compromise network security, liveness, or integrity. A higher Nakamoto Coefficient indicates a more resilient, decentralised network; a coefficient of one denotes a single point of failure. The metric is applicable across multiple dimensions of a network simultaneously, yielding a multi-dimensional decentralisation profile rather than a single scalar.

- ### Semantic Classification
  - owl-class:: nakamoto-coefficient:Nakamoto Coefficient
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[51% Attack]]
  - relatedTo [[Sybil Resistance]]
  - relatedTo [[Blockchain Governance]]
  - supports [[Proof of Stake]]
  - supports [[Validator Set]]

- ### Content
  - The Nakamoto Coefficient was proposed by Balaji Srinivasan and Leland Lee as a single-number summary of how concentrated control is within a specific subsystem of a blockchain network. For a proof-of-work network, the relevant subsystem is the mining hashrate distribution across pools; for a proof-of-stake network, it is the distribution of staked tokens across validators. The coefficient is computed by ranking entities in descending order of control and finding the smallest prefix of that list whose combined share exceeds 33% (for Byzantine agreement) or 50% (for a simple majority attack).
  - Different subsystems of the same network can exhibit very different Nakamoto Coefficients. A network might have a hashrate coefficient of eight (requiring eight mining pools to collude) but a client software coefficient of two (if two client implementations dominate, as occurred during Ethereum's early history). A full decentralisation audit therefore reports a vector of coefficients across subsystems including block production, client diversity, geographical distribution, exchange custody, and governance token concentration.
  - The concept is closely related to the security threshold of Byzantine fault-tolerant consensus protocols, which can tolerate at most ⌊(n−1)/3⌋ Byzantine failures in a network of n validators. In practice, Nakamoto Coefficient analysis informs protocol design decisions such as minimum validator set sizes, stake decentralisation incentives, and client diversity programmes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z