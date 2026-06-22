- ### Definition
  - The Interoperability Domain classifies concepts that allow distinct systems, ledgers, or networks to exchange data and value and to act on it consistently. It covers bridges, messaging protocols, common data formats, and the standards that define shared semantics. As a top-level subject classification, it scopes the connective mechanisms between systems rather than the systems themselves.

- ### Semantic Classification
  - owl-class:: interop:InteroperabilityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Networking Domain]], [[Blockchain Domain]], [[Enterprise Software Domain]]
  - has-part:: [[Cross-Chain Bridge]], [[Messaging Protocol]], [[Data Format Standard]], [[Atomic Swap]], [[Interoperability Protocol]]
  - requires:: [[Cryptographic Primitive]], [[Consensus Mechanism]], [[Semantic Standard]]
  - enables:: [[Cross-Chain Transfer]], [[System Integration]], [[Composable Networks]]

- ### Content
  - The Interoperability Domain describes how separate systems are connected so that information and value can cross boundaries. Cross-chain bridges and atomic swaps move assets between ledgers, messaging protocols carry instructions, and shared data formats and semantic standards ensure that a message means the same thing on both sides. Without agreed semantics, syntactic exchange alone does not produce reliable behaviour.
  - Interoperability mechanisms must reconcile differences in trust, finality, and timing between systems. A bridge, for example, has to prove that an event occurred on a source chain before releasing value on a destination chain, which introduces its own security assumptions and historically its own vulnerabilities. Standards reduce this fragility by constraining how proofs and messages are formed.
  - As a top-level domain, interoperability sits alongside networking and connects blockchain and enterprise systems. It bridges to the Networking Domain, which provides transport, and to the Blockchain Domain, whose ledgers are frequent endpoints. Keeping connective mechanisms in their own classification lets the ontology describe integration concerns independently of any single platform.

- ### Provenance
  - sources:: [[ISO 20022]]
  - migration-date:: 2026-05-29T00:00:00Z