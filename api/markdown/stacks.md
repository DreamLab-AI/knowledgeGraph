- ### Definition
  - A Bitcoin Layer that enables smart contracts and applications whose state is anchored to the Bitcoin blockchain through its proof-of-transfer consensus.

- ### Semantic Classification
  - owl-class:: blockchain:Stacks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Proof-of-Work Protocol]]
  - bridges-to:: [[Bitcoin Protocol]]
  - requires:: [[Consensus Protocol]], [[Bitcoin Proof-of-Work Protocol]]
  - enables:: [[Smart Contract]]

- ### Content
  - Stacks runs a separate chain whose blocks are anchored to Bitcoin, settling its history against the Bitcoin ledger. Its proof-of-transfer mechanism recycles Bitcoin to secure the production of Stacks blocks.
  - Contracts on Stacks are written in the Clarity language, which is interpreted rather than compiled. The design aims to add programmability while inheriting settlement assurances from Bitcoin.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z