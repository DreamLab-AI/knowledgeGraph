
Strict encoding is a deterministic binary serialisation scheme used in the RGB protocol that guarantees a single canonical byte representation for any given data structure. By forbidding ambiguous orderings and optional layout choices, it ensures that independently computed commitments and hashes match exactly, which is essential for client-side validation. It pairs with strict types to give RGB its reproducible, consensus-free verification.

- ### Content
  - Determinism is the defining property: every structure maps to exactly one encoding with fixed field order and no padding ambiguity, so two implementations always derive identical hashes. This reproducibility lets RGB clients validate state transitions locally against on-chain commitments without a global consensus over the data itself. Strict encoding is implemented alongside strict types, which define the schemas that the encoder serialises.

