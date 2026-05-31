- ### Definition
  - A network participant in a proof-of-stake system that proposes and attests to blocks, committing stake that can be slashed for misbehaviour.

- ### Semantic Classification
  - owl-class:: blockchain:Validator
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Consensus Protocol]]
  - bridges-to:: [[Block]]
  - requires:: [[Proof of Stake]]
  - enables:: [[Consensus Mechanism]]

- ### Content
  - A validator locks up stake and is selected to produce or vote on blocks according to the consensus rules. Honest participation earns rewards, while provable misbehaviour such as double-signing can result in part of the stake being slashed.
  - Validators collectively reach agreement on the canonical chain by attesting to blocks they consider valid. Their economic stake aligns incentives so that attacking the chain becomes costly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z