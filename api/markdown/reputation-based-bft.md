- ### Definition
  Reputation-Based BFT is a variant of Byzantine Fault Tolerance in which each consensus participant is assigned a dynamic reputation score derived from its historical behaviour—vote accuracy, uptime, and honest message propagation—so that nodes with strong track records carry greater weight in the consensus outcome. This design allows the protocol to tolerate Byzantine actors more efficiently than pure stake-weighted schemes by penalising misbehaving validators through reputation decay rather than requiring slashing of locked collateral. It is commonly deployed in permissioned or consortium blockchain networks where participants are identified and accountable.

- ### Relationships
  - requires:: [[Byzantine Fault Tolerance]], [[Consensus Mechanism]]
  - enables:: [[Fault Tolerance]], [[Blockchain Governance]]
  - uses:: [[Validator Node]], [[Consensus Algorithm]]
  - relatedTo:: [[Proof of Authority]], [[Validator Set]], [[Blockchain Protocol]]
  - contrastsWith:: [[Proof of Stake]]

- ### Content
  Classical BFT protocols—such as PBFT—require 3f+1 total replicas to tolerate f Byzantine faults and provide liveness guarantees only in partially-synchronous networks. These protocols treat all non-faulty validators as equivalent, which means a newly admitted node has the same consensus influence as one with years of verified uptime. Reputation-Based BFT addresses this by continuously scoring validators and adjusting their voting weights accordingly.

  Reputation accumulation typically considers message latency (nodes that consistently respond within timeout windows receive positive scores), vote agreement with the eventual commit (nodes that vote for blocks that are later confirmed accumulate credit), and absence of equivocation (sending conflicting votes is heavily penalised). Some implementations add external attestations—governance bodies, identity oracles, or staking mechanisms that serve as initial reputation bootstraps.

  The practical advantage over pure Proof of Stake is that reputation decay can marginalise a validator without requiring on-chain slashing of collateral, which may be legally or operationally problematic in regulated consortium networks such as those used in supply-chain finance or central-bank-backed digital currencies. The disadvantage is that reputation models must guard against Sybil attacks where an actor accumulates multiple high-reputation identities before acting maliciously.

  Reputation-Based BFT is closely related to Proof of Authority in that both rely on identified, accountable validators, but differs in that PoA grants authority through a fixed whitelist whereas reputation scores are dynamic and continuously earned or lost.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z