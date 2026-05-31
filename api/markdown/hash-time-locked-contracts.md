- ### Definition
  - A type of smart contract that conditions a payment on the recipient revealing a cryptographic preimage before a deadline, enabling trustless conditional and cross-chain transfers.

- ### Semantic Classification
  - owl-class:: blockchain:HashTimeLockedContracts
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contracts]]
  - bridges-to:: [[Lightning Network]]
  - requires:: [[Cryptographic Hash]], [[Timelock]]
  - enables:: [[Atomic Swap]]

- ### Content
  - A hash time-locked contract, or HTLC, locks funds so they can be claimed only by presenting a value whose hash matches a committed digest, and only before a specified time. If the secret is not revealed in time, the funds can be refunded to the sender.
  - This hashlock and timelock combination enables atomic swaps between parties or chains and is fundamental to payment routing on the Lightning Network, where intermediaries forward payments without being able to steal the funds.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z