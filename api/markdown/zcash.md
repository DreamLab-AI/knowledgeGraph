- ### Definition
  - Zcash is a privacy-oriented cryptocurrency launched in 2016 that uses zero-knowledge proofs to allow transactions to be verified without revealing the sender, recipient or amount. It was the first widespread deployment of zk-SNARKs, succinct non-interactive arguments of knowledge, in a public blockchain. Zcash supports both transparent addresses, similar to Bitcoin, and shielded addresses that conceal transaction details, giving users a choice of privacy level. The protocol derives from the Zerocash academic proposal and is developed by the Electric Coin Company.

- ### Semantic Classification
  - owl-class:: bc:Zcash
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Monero]], [[zkSync]]
  - requires:: [[Zero Knowledge Proof]], [[Proof of Work]]

- ### Content
  - Zcash applies zero-knowledge cryptography to payments, allowing a prover to demonstrate that a transaction is valid (inputs cover outputs, no double spending) without disclosing the values or parties involved. This was a notable step beyond mixing or decoy techniques because it provides cryptographic confidentiality rather than statistical obfuscation.
  - The system offers transparent transactions that behave like Bitcoin and shielded transactions that use the zk-SNARK machinery. Early versions required a trusted setup ceremony to generate public parameters, and successive upgrades such as Sapling and later Orchard improved performance and reduced or removed reliance on that setup.
  - Built on the Zerocash research from academics including those who founded the Electric Coin Company, Zcash is frequently cited as a practical demonstration of zero-knowledge proofs at scale. Its design has influenced privacy and scaling work across the wider blockchain field, including zk-rollups.

- ### Provenance
  - sources:: [[Ben-Sasson et al. 2014, Zerocash: Decentralized Anonymous Payments from Bitcoin]]
  - migration-date:: 2026-05-29T00:00:00Z