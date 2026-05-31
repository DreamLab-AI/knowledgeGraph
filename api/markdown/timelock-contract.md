- ### Definition
  - A smart contract or transaction condition that prevents funds or actions from being executed until a specified time or block height is reached. It is used to enforce delays and to coordinate conditional payments.

- ### Semantic Classification
  - owl-class:: blockchain:TimelockContract
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Smart Contract]]
  - enables:: [[Hash Time-Locked Contract]]

- ### Content
  - A timelock restricts when a transaction or contract action can take effect, either until an absolute time or block height or for a relative period after an earlier event. Bitcoin provides this through opcodes such as CheckLockTimeVerify and CheckSequenceVerify.
  - Timelocks are building blocks for protocols such as hash time-locked contracts and payment channels, where a delay gives parties a window to respond before funds become spendable.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z