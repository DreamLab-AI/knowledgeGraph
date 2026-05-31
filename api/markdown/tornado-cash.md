- ### Definition
  - Tornado Cash is a set of non-custodial smart contracts on Ethereum and compatible networks that obscure the on-chain link between a deposit and a withdrawal. Users deposit a fixed denomination of a token into a pool and later withdraw the same amount to a different address, using a zero-knowledge proof to demonstrate ownership of a valid deposit without revealing which one. It became widely known both as a privacy tool and as the subject of sanctions by the United States Office of Foreign Assets Control in 2022.

- ### Semantic Classification
  - owl-class:: crypto:TornadoCash
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Cryptographic Domain]]
  - bridges-to:: [[zk-SNARK]], [[Regulatory Domain]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum]]
  - enables:: [[Transaction Privacy]]

- ### Content
  - The protocol pools deposits of equal value so that, after a withdrawal, an observer cannot determine which deposit funded which withdrawal beyond the size of the anonymity set. Privacy strengthens as more users participate, because each withdrawal could correspond to any of the deposits in the pool.
  - Withdrawals rely on zero-knowledge proofs, specifically zk-SNARKs, which let a user prove that they hold a secret note corresponding to a prior deposit without disclosing the note itself. The contracts are immutable and non-custodial, meaning no operator holds user funds or can reverse transactions.
  - Tornado Cash has been central to legal and policy debates about privacy-preserving technology on public blockchains. Its sanctioning raised questions about the regulation of autonomous code and the liability of contributors, distinguishing the immutable protocol from the front-end and governance activity built around it.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z