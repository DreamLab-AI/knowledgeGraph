- ### Definition
  - A Bitcoin sidechain that supports Ethereum-compatible smart contracts, secured by merged mining with Bitcoin and connected through a two-way peg.

- ### Semantic Classification
  - owl-class:: blockchain:Rootstock
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sidechain]]
  - bridges-to:: [[Ethereum Virtual Machine]]
  - requires:: [[Sidechain]], [[Bitcoin Proof-of-Work Protocol]]
  - enables:: [[Smart Contract]]

- ### Content
  - Rootstock runs a smart contract platform compatible with the Ethereum Virtual Machine while pegging its asset to Bitcoin. Coins move between Bitcoin and the sidechain through a two-way peg controlled by a federation and related mechanisms.
  - The sidechain is secured by merged mining, allowing Bitcoin miners to also produce Rootstock blocks at little extra cost. This brings programmable contracts to Bitcoin-denominated value without changing the Bitcoin protocol.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z