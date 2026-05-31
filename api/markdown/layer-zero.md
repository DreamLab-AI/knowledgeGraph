- ### Definition
  - LayerZero is a cross-chain interoperability protocol that allows smart contracts on different blockchains to send messages to one another. It uses a configurable security model in which an oracle delivers block headers and an independent relayer delivers transaction proofs, with a message accepted only when the two agree. This separation is intended to avoid reliance on a single intermediary chain for verifying cross-chain communication.

- ### Semantic Classification
  - owl-class:: blockchain:LayerZero
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Bridge]], [[Interoperability]]
  - requires:: [[Oracle]], [[Relayer]], [[Smart Contract]]
  - enables:: [[Cross-Chain Messaging]], [[Omnichain Application]]

- ### Content
  - LayerZero defines lightweight endpoint contracts on each connected chain that applications use to send and receive arbitrary messages. Rather than running a full light client of every chain, it relies on two independent parties, an oracle and a relayer, to supply complementary pieces of evidence about the source-chain transaction.
  - A message is delivered only when the block header reported by the oracle matches the proof supplied by the relayer, so a successful attack would require both parties to collude. Applications can choose their own oracle and relayer, giving them control over the trust assumptions of their cross-chain messaging.
  - The protocol underpins omnichain applications, where a single application maintains consistent state across multiple networks, as well as token bridges and cross-chain governance. Its security model has been the subject of ongoing analysis given the high value typically routed through interoperability infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z