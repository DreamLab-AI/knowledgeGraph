- ### Definition
  Nominated Proof of Stake (NPoS) is a consensus mechanism variant in which token holders nominate a set of validator candidates; an election algorithm selects the active validator set to maximise stake distribution while satisfying security constraints. Elected validators produce and finalise blocks, while nominators share both block rewards and slashing penalties, aligning incentives across the broader token holder community.

- ### Semantic Classification
  - owl-class:: blockchain:NominatedProofOfStake
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - requires:: [[Validator Node]], [[Validator Set]], [[Consensus Mechanism]]
  - enables:: [[Blockchain Governance]], [[Block Reward]], [[Deterministic Finality]]
  - relatedTo:: [[Delegated Proof of Stake]], [[Liquid Proof of Stake]], [[Polkadot Parachains]], [[Blockchain Protocol]]
  - contrastsWith:: [[Pure Proof of Stake]]
  - uses:: [[Consensus Algorithm]]

- ### Content
  Nominated Proof of Stake was introduced as the consensus design for the Polkadot relay chain, with the goal of combining the security benefits of a large, distributed nominator base with the operational efficiency of a bounded active validator set. Token holders act as nominators by staking tokens behind up to a fixed number of validator candidates; the protocol then applies a sequential Phragmén election algorithm to select which validators become active and how stake is distributed across them to minimise the maximum stake deviation.

  The key design property is that both validators and their nominators share economic outcomes: block production rewards are distributed proportionally, but any slashing penalty for misbehaviour (equivocation, downtime) is also shared. This creates a principal-agent alignment in which nominators are incentivised to carefully evaluate validator track records, commission rates, and uptime before delegating stake. The nominator therefore acts as a distributed due-diligence mechanism rather than a passive observer.

  NPoS differs from Delegated Proof of Stake (DPoS) primarily in its election algorithm and stake distribution goals. DPoS typically uses simple coin-weighted voting, which can concentrate stake in a small set of supernodes. NPoS's Phragmén election actively redistributes backing to achieve a more balanced distribution across the validator set, increasing the cost of attacking a single validator by preventing a single large nominator from concentrating all weight on one candidate.

  In practice, NPoS enables deterministic finality through the GRANDPA gadget running alongside BABE block production on Polkadot-based chains. This layered design separates liveness (block production) from safety (finality), allowing blocks to be produced optimistically and finalised in batches, achieving high throughput without sacrificing the security guarantees required for cross-chain messaging via parachains.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z