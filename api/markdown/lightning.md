- ### Definition
  - Lightning is a layer-two payment protocol built on Bitcoin that uses payment channels to enable fast, low-cost transactions off the main chain. It settles to the Bitcoin blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:Lightning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Layer 2 Scaling]]
  - requires:: [[Payment Channel]], [[Bitcoin Network]]
  - enables:: [[BOLT]]

- ### Content
  - Lightning enables two parties to open a payment channel funded by an on-chain transaction, then exchange many payments off-chain by updating the channel balance. Channels connect into a network so that payments can route between parties who lack a direct channel.
  - Only the opening and closing of channels are recorded on the Bitcoin blockchain, which keeps fees low and confirmation fast for the payments in between. The protocol is specified through the BOLT documents.

- ### Provenance
  - sources:: [[https://lightning.network]], [[https://github.com/lightning/bolts]]
  - migration-date:: 2026-05-29T00:00:00Z