- ### Definition
  - The set of rules governing how Bitcoin transactions are formed, validated, and ordered into blocks by proof-of-work consensus.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin]]
  - bridges-to:: [[Block Reward]]
  - requires:: [[Consensus Protocol]], [[UTXO]]
  - enables:: [[Bitcoin Script]]

- ### Content
  - The Bitcoin protocol specifies the structure of transactions and blocks, the unspent transaction output model for tracking ownership, and the proof-of-work rule by which nodes agree on a single transaction history.
  - Validation rules are enforced independently by every full node, and the longest valid chain by accumulated work is treated as canonical. The protocol also defines issuance through the block reward and its periodic halving.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z