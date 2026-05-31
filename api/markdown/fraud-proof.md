- ### Definition
  - A succinct piece of evidence demonstrating that a proposed off-chain state transition was invalid, used by optimistic rollups to challenge incorrect results.

- ### Semantic Classification
  - owl-class:: blockchain:FraudProof
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Data Availability]]
  - enables:: [[Scalability]]

- ### Content
  - A fraud proof allows any observer to show that a published state transition does not follow the protocol rules. If the proof is accepted on the base chain, the invalid state is rejected and the dishonest party is penalised.
  - This mechanism underpins optimistic rollups, which assume posted results are correct unless challenged within a dispute window. It depends on transaction data being available so challengers can reconstruct and re-check the disputed step.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z