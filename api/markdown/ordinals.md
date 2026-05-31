- ### Definition
  - A scheme for numbering individual satoshis by order of issuance and transfer, allowing arbitrary data to be inscribed onto specific satoshis on the Bitcoin blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:Ordinals
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin]]
  - bridges-to:: [[Bitcoin Script]]
  - requires:: [[Taproot]], [[UTXO]]
  - enables:: [[BRC-20]]

- ### Content
  - Ordinal theory assigns a sequential number to each satoshi based on the order in which it was mined, and tracks it through transactions using a first-in-first-out rule. This gives individual satoshis a stable identity that can be referenced and transferred.
  - Inscriptions attach content such as images or text to a numbered satoshi by storing the data in the witness portion of a Taproot transaction. Ordinals provided the foundation for later experiments including the BRC-20 token convention.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z