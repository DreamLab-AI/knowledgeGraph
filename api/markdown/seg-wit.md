- ### Definition
  - Segregated Witness is a Bitcoin protocol upgrade that moves signature data into a separate witness structure, fixing transaction malleability and increasing block capacity.

- ### Semantic Classification
  - owl-class:: blockchain:SegWit
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Protocol]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[Bitcoin Script]]
  - enables:: [[Lightning Network]], [[Taproot]]

- ### Content
  - SegWit separates the witness, which holds signatures, from the rest of a transaction. Because the transaction identifier no longer depends on the signature data, third parties can no longer alter it in ways that change the identifier.
  - Removing this malleability made reliable off-chain protocols such as the Lightning Network practical. SegWit also introduced a weight-based accounting that effectively raised block capacity and prepared the ground for the later Taproot upgrade.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z