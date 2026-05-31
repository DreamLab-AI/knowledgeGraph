- ### Definition
  - The category of protocols that move assets and data between distinct blockchains, treated collectively as connective infrastructure between ledgers.

- ### Semantic Classification
  - owl-class:: blockchain:CrossChainBridges
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Interoperability]]
  - bridges-to:: [[Cross-Chain Bridge]], [[Bridge]]
  - requires:: [[Smart Contract]]
  - enables:: [[Cross Chain Asset Transfer]]

- ### Content
  - Cross-chain bridges describe the set of protocols that interconnect separate ledgers, enabling assets and messages to pass between ecosystems that have no shared consensus. They underpin multi-chain applications by letting liquidity and state move across network boundaries.
  - Designs vary in how they verify events on a source chain, spanning external validator committees, optimistic schemes with challenge periods, and light-client approaches that verify source-chain consensus directly. The concentration of locked value and the difficulty of securing cross-domain verification make this category a recurring source of large exploits.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z