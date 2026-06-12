- ### Definition
  - Payment channels are off-chain constructs that let two parties exchange many bitcoin transactions while only recording opening and closing balances on the blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:PaymentChannels
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Payment Channel]]
  - bridges-to:: [[Lightning Network]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]], [[Smart Contract]]
  - enables:: [[Lightning Network]]

- ### Content
  - A payment channel locks funds in a multisignature output on the blockchain, after which the two parties update their respective balances by exchanging signed transactions off-chain. Only the final state is settled on the chain when the channel closes.
  - Linking many channels into a network allows payments to be routed between parties who do not share a direct channel, which is the basis of the Lightning Network.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z