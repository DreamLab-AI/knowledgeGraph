- ### Definition
  - Cardano is a public proof-of-stake blockchain platform launched in 2017 by IOHK, with Charles Hoskinson, a co-founder of Ethereum, among its founders. It is distinctive for its emphasis on peer-reviewed academic research and formal methods, and its consensus protocol Ouroboros was the first proof-of-stake protocol with published security proofs. The platform separates a settlement layer for its ADA cryptocurrency from a computation layer for smart contracts, which were enabled through the Alonzo upgrade in 2021. Cardano uses an extended UTXO accounting model and the functional language Plutus for on-chain logic.

- ### Semantic Classification
  - owl-class:: bc:Cardano
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Proof of Stake]], [[UTXO]]
  - enables:: [[Smart Contract]]

- ### Content
  - Cardano's defining feature is its research-driven development process, in which protocol designs are published and peer reviewed before implementation. The Ouroboros family of proof-of-stake consensus protocols underpins the network, selecting block producers in proportion to staked ADA and providing formal arguments about safety and liveness.
  - Accounting on Cardano uses the extended unspent transaction output (EUTXO) model, which generalises Bitcoin's UTXO scheme to carry arbitrary data and scripts. Smart contracts are written in Plutus, a language based on Haskell, with the aim of enabling formal verification of on-chain logic.
  - Development has proceeded through named eras such as Byron, Shelley, Goguen and later upgrades that progressively introduced decentralised block production, smart contracts and scaling work. The project positions careful engineering and governance over rapid feature delivery, which has shaped both its reputation and its pace of change.

- ### Provenance
  - sources:: [[Kiayias et al. 2017, Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol]]
  - migration-date:: 2026-05-29T00:00:00Z