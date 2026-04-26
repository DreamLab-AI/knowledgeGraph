iri:: http://narrativegoldmine.com/blockchain#MultiPartyTransactions
uri:: urn:visionclaw:concept:blockchain:multi-party-transactions
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:multi-party-transactions
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Multi Party Transactions
content-hash:: sha256-12-638f1f315206
legacy-term-id:: MV-9976
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
bridges-to:: [[Virtual Economy]], [[AI Agent System]]
public:: true

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
