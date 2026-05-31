- ### Definition
  - Techniques that let a party outsource a computation and receive a proof that the result is correct, allowing efficient verification without redoing the work.

- ### Semantic Classification
  - owl-class:: cryptographic:VerifiableComputation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Proof]]
  - bridges-to:: [[Trusted Execution Environments]]
  - requires:: [[Cryptographic Proof]], [[Zero-Knowledge Proof]]
  - enables:: [[Scalability]]

- ### Content
  - Verifiable computation allows a client to delegate a computation to an untrusted server and then check, using a succinct proof, that the returned result is correct without re-executing the computation. Proof systems such as succinct non-interactive arguments make verification far cheaper than the original work.
  - The technique underpins scaling approaches that move computation off-chain while proving its integrity, as well as privacy-preserving applications where a result can be verified without revealing the inputs. Hardware-based attestation through trusted execution environments offers a complementary trust model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z