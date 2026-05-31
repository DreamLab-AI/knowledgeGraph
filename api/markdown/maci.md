- ### Definition
  - Minimal Anti-Collusion Infrastructure, a set of smart contracts and zero-knowledge techniques designed to reduce bribery and collusion in on-chain voting. It hides individual votes from coercers while allowing public verification of results.

- ### Semantic Classification
  - owl-class:: blockchain:MACI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Quadratic Voting]]
  - bridges-to:: [[Quadratic Voting]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[Decentralized Autonomous Organization]]

- ### Content
  - MACI was proposed within the Ethereum community to make collusion in voting difficult. It allows voters to change their keys and re-vote in ways that a briber cannot verify, so a promised vote cannot be proven to a coercer.
  - A trusted coordinator processes encrypted votes and produces a tally together with zero-knowledge proofs that the tally was computed correctly, which observers can verify without seeing individual votes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z