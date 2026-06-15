- ### Definition
  - Segregated Witness (SegWit) is a backwards-compatible soft-fork upgrade to [[Bitcoin]] that moves the witness data — the [[Digital Signature]]s authorising spends — out of the main transaction body into a separate structure. As an approach to [[Blockchain Scalability]], it both fixes transaction malleability and effectively raises block capacity.
  - It depends on the network's [[Consensus Mechanism]] for activation and laid the groundwork for the [[Lightning Network]].

- ### Overview
  - Before SegWit, a transaction's signatures were part of the data hashed to produce its transaction identifier. Because signatures could be altered without changing their validity, the identifier was malleable, complicating any protocol that referenced unconfirmed transactions — including payment channels.
  - SegWit separates the witness data so that the transaction identifier is computed only from the non-witness portion. This makes identifiers stable, eliminating malleability and unblocking second-layer designs. The witness is still committed to the block, via a dedicated commitment, so security is preserved.
  - SegWit also introduced block weight, a new accounting unit that discounts witness data. This raised the effective number of transactions a block can hold without a contentious hard fork to the nominal block-size limit, making it a soft fork that older nodes still accept.

- ### Mechanisms
  - **Witness segregation** — Signature and script-witness data are placed in a separate transaction field, removed from the legacy transaction serialisation used for the identifier.
  - **Malleability fix** — Because identifiers no longer depend on mutable signatures, transactions become referentially stable, a prerequisite for reliable payment channels.
  - **Block weight accounting** — A weight metric counts witness bytes at a discount, increasing effective capacity while keeping legacy nodes compatible and contrasting with a simple [[Block Size]] increase.
  - **Witness commitment** — The block commits to witness data through an additional structure linked via the [[Merkle Tree]], preserving integrity and verifiability.
  - **Soft-fork activation** — Deployment occurred as a soft fork through the network's [[Consensus Mechanism]], so non-upgraded nodes continue to validate blocks.
  - **Script extensibility** — Versioned witness programs created a clean path for future upgrades, later used by subsequent improvements to [[Bitcoin]] scripting.

- ### Applications
  - **Layer-two payments** — SegWit's malleability fix made the [[Lightning Network]] and other channel-based systems practical, enabling fast, low-cost off-chain payments.
  - **Capacity improvement** — The block-weight scheme raised throughput, advancing [[Blockchain Scalability]] without a hard fork.
  - **Fee efficiency** — SegWit transactions receive a discount on witness data, lowering fees for users who adopt the format.
  - **Foundation for upgrades** — Versioned witness programs provided the mechanism for later script enhancements.
  - **Improved transaction handling** — Stable identifiers simplify wallets, exchanges, and any system that tracks unconfirmed [[Transaction]]s.

- ### Relationships
  - subClassOf:: [[Blockchain Scalability]]
  - implements:: [[Scalability]]
  - requires:: [[Bitcoin]]
  - requires:: [[Digital Signature]]
  - dependsOn:: [[Consensus Mechanism]]
  - enables:: [[Lightning Network]]
  - uses:: [[Merkle Tree]]
  - supports:: [[Lightning Network]]
  - contrastsWith:: [[Block Size]]
  - relatedTo:: [[Transaction]]
  - relatedTo:: [[Immutability]]
  - bridgesTo:: [[Lightning Network]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15