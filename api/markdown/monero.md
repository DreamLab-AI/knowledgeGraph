- ### Definition
  - Monero is a privacy-focused cryptocurrency launched in 2014 that obscures the sender, recipient and amount of every transaction by default. It uses ring signatures to hide the true spender among decoys, stealth addresses to conceal the recipient, and a confidential transaction scheme called RingCT to hide amounts. The protocol uses a proof-of-work algorithm designed to favour general-purpose hardware over specialised mining equipment. Monero is among the most widely used privacy coins and is governed by an open community development process.

- ### Semantic Classification
  - owl-class:: bc:Monero
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Zcash]]
  - requires:: [[Proof of Work]], [[Ring Signature]]

- ### Content
  - Monero is built around mandatory privacy, in contrast to chains where transaction details are public by default. Every transaction combines ring signatures, which mix a user's output with chosen decoys so observers cannot tell which input was actually spent, with stealth addresses that generate a unique one-time destination for each payment.
  - Amounts are concealed using Ring Confidential Transactions, a commitment scheme that lets the network verify a transaction balances without revealing the values involved. The combination makes the transaction graph far harder to analyse than that of transparent ledgers.
  - The project uses a proof-of-work algorithm intended to resist specialised mining hardware and to keep mining accessible to ordinary computers, and it has periodically changed the algorithm to maintain this property. Monero is maintained by a decentralised community and is frequently studied in discussions of financial privacy and regulation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z