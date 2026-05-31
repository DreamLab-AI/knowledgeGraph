- ### Definition
  - A layer-two scaling design that posts transaction data to a base chain and assumes results are valid unless challenged within a dispute window through a fraud proof.

- ### Semantic Classification
  - owl-class:: blockchain:OptimisticRollup
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Rollup]]
  - bridges-to:: [[EVM]], [[Optimism]]
  - requires:: [[Smart Contract]]
  - enables:: [[Layer 2 Scaling]]

- ### Content
  - An optimistic rollup executes transactions off the base chain and publishes the resulting state together with the underlying transaction data back to it. Results are presumed correct, which is why the approach is called optimistic, and no validity proof is supplied at the time of posting.
  - Correctness is enforced through a challenge period during which any party can submit a fraud proof demonstrating an invalid state transition, causing the disputed result to be reverted. This dispute window delays final withdrawal to the base chain but allows the rollup to reuse the base chain's data availability and security while reducing execution costs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z