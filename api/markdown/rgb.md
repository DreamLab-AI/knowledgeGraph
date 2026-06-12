- ### Definition
  - A protocol for issuing and transferring assets and running smart contracts on Bitcoin using client-side validation and single-use seals anchored to the chain.

- ### Semantic Classification
  - owl-class:: blockchain:RGB
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Proof-of-Work Protocol]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Client-Side Validation]], [[UTXO]]
  - enables:: [[Lightning Network]]

- ### Content
  - RGB keeps contract state and validation off-chain, with peers checking the history of an asset themselves rather than relying on global consensus. Bitcoin transactions act as single-use seals that commit to state transitions without publishing the data.
  - This design keeps asset data private and off the base layer while still anchoring ownership to Bitcoin. RGB contracts can also operate over Lightning channels, extending fast off-chain transfer to issued assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z