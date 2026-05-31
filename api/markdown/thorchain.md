- ### Definition
  - A decentralised cross-chain liquidity protocol that lets users swap native assets across different blockchains without wrapping them or relying on a single custodian. It uses bonded validators and liquidity pools denominated in its native asset.

- ### Semantic Classification
  - owl-class:: blockchain:THORChain
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Cross-Chain Bridge]]
  - bridges-to:: [[Decentralized Exchange]], [[Automated Market Maker]]
  - requires:: [[Liquidity Pool]], [[Validator]]
  - enables:: [[Atomic Swap]], [[Interoperability]]

- ### Content
  - THORChain enables swaps between native assets on separate chains, such as exchanging Bitcoin for an Ethereum token, by routing through liquidity pools paired with its own asset. Liquidity providers deposit assets and earn fees, while bonded nodes secure the network and process settlements.
  - The protocol avoids issuing wrapped representations of foreign assets, instead holding native funds in vaults managed by a rotating validator set. Cross-chain transfers are coordinated by an automated market maker that prices each swap against pool depth.

- ### Provenance
  - sources:: [[https://thorchain.org/]]
  - migration-date:: 2026-05-29T00:00:00Z