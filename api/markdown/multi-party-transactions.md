- ### Definition
  - Blockchain transactions involving more than two participants that use atomic swap protocols, adaptor signatures, and hash timelock contracts (HTLCs) to ensure all parties complete their exchanges simultaneously or the entire transaction is reversed, preventing partial completion losses.

- ### Semantic Classification
  - owl-class:: blockchain:MultiPartyTransactions
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Transactions]]
  - enables:: [[Cross Chain Trading]]

- ### Content

  ### Technical Details
  - Uses universal adaptor signature secrets to prevent malicious dropouts
  - ParaSwap framework reduces exchange time complexity from O(n) to O(1)
  - Can operate almost entirely off-chain with single on-chain finalization
  - Implemented across Bitcoin, Ethereum, Avalanche, and Binance Smart Chain
  - Reduces gas costs by 26.2x to 46.8x compared to serial swap methods

  ### Security Features
  - Cryptographic hash functions ensure transaction integrity
  - Time-lock constraints return funds if deadlines are missed
  - Atomic execution prevents partial transaction completion
  - No trusted third parties or centralized exchanges required

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z