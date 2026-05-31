- ### Definition
  - Multisig, or multi-signature, is a scheme requiring more than one cryptographic signature to authorise a transaction or action. It is widely used in cryptocurrency wallets and custody to distribute control.

- ### Semantic Classification
  - owl-class:: blockchain:Multisig
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Wallet]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Cryptography]]
  - enables:: [[Custody]], [[DAO Governance]]

- ### Content
  - Multisig requires a threshold number of signatures from a set of keyholders before a transaction is valid, for example two of three or three of five. By spreading signing authority across multiple keys and parties, it removes single points of failure and reduces the risk from a single compromised key.
  - In cryptocurrency it is used to secure treasuries, exchange reserves and shared wallets, and smart-contract implementations such as multisig Safes also enable on-chain governance execution. The approach underlies many institutional custody and DAO management arrangements.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z