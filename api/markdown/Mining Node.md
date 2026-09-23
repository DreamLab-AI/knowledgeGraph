
A mining node is a blockchain participant that not only validates and relays transactions but also competes to produce new blocks by performing proof-of-work computation. It assembles pending transactions into candidate blocks and searches for a valid solution that allows the block to be added to the chain. Mining nodes secure proof-of-work networks and are rewarded for the blocks they successfully add.

- ### Overview
  - Like any [[Full Node]], a mining node holds the full ledger and independently verifies every transaction and block.
  - Beyond validation, it gathers unconfirmed transactions into a candidate block and searches for a valid proof.
  - Finding a valid solution is computationally expensive, which is what makes rewriting history costly and the chain secure.
  - Successful miners broadcast their block and collect the associated block reward and fees.
- ### Mechanisms
  - Candidate blocks are formed from the pool of pending transactions after [[Transaction Validation]].
  - The node repeatedly applies a [[Hash Function]] to find an input meeting the difficulty target.
  - On success it performs [[Block Validation]] and propagates the block across the [[Peer-to-Peer Network]].
  - Difficulty adjustment keeps block production rate roughly constant as total mining power changes.
- ### Key aspects
  - Work: producing a block requires demonstrable computational effort.
  - Reward: miners are incentivised by block subsidies and fees.
  - Security: honest majority hash power makes the chain tamper-resistant.
  - Decentralisation: open participation lets anyone run a mining node.
- ### Applications
  - Securing [[Bitcoin]] and other proof-of-work blockchains.
  - Ordering transactions and finalising the canonical chain.
  - Participating in the [[Consensus Mechanism]] that prevents double-spending.
  - Bootstrapping new coin issuance through block rewards.
- ### Provenance

