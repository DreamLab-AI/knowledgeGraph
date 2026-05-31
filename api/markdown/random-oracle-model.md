- ### Definition
  - A theoretical model in cryptography in which a hash function is idealised as a publicly accessible truly random function, used to analyse the security of cryptographic schemes.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:RandomOracleModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Cryptographic Hash Function]]
  - requires:: [[Hash Function]], [[Cryptographic Hash Function]]
  - enables:: [[Cryptography]]

- ### Content
  - In the random oracle model, all parties, including the adversary, have access to an oracle that returns an independent uniformly random value for each distinct query and the same value for repeated queries. Many efficient cryptographic schemes have security proofs in this model that are not known under standard assumptions.
  - The model is a proof heuristic rather than a statement about real systems, because no concrete hash function truly behaves as a random oracle. Schemes proven secure in this model are generally considered sound in practice, though there exist constructed counterexamples that are secure in the model yet insecure under any concrete instantiation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z