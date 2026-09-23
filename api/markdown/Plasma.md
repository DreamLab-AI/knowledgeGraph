
Plasma is a blockchain scaling framework that builds hierarchical chains of child ledgers anchored to a root chain, processing transactions off the main chain while periodically committing compact state commitments to it. Users retain the ability to exit a child chain back to the root chain by submitting fraud proofs, which preserves the security guarantees of the underlying ledger even if a child chain operator misbehaves. It was an early Layer 2 design that influenced later optimistic and rollup-based scaling approaches.

- [[Plasma]] is a [[Blockchain]] scaling framework that creates child chains anchored to a root chain, executing transactions off-chain and committing periodic state roots back to the main ledger. It enables [[Scalability]] while preserving exit guarantees, and is often compared with [[Rollup]] and [[Sidechain]] designs on [[Ethereum]].
- ### Overview
- Plasma organises ledgers as a tree, with a root chain at the top and child (Plasma) chains beneath it.
- Child chains process the bulk of transactions and submit succinct commitments, reducing load on the root chain.
- Security derives from the root chain: users can withdraw funds by proving fraud or by exiting if an operator censors or withholds data.
- The design predated and informed the development of optimistic rollups, which moved transaction data on-chain to address Plasma's data availability limitations.
- ### Key aspects
- Hierarchical chains: a root chain coordinates many child chains arranged in a tree.
- Fraud proofs: invalid state transitions can be challenged and reverted on the root chain.
- Mass exits: users can collectively withdraw to the root chain if a child chain becomes unsafe.
- Data availability: a known limitation is reliance on operators to publish child-chain data.
- ### Applications
- High-throughput payment networks settling on a secure base layer.
- Application-specific child chains for games or marketplaces with frequent transactions.
- Historical reference design for evaluating modern Layer 2 trade-offs.
- ### Provenance

