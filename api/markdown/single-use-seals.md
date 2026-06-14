- ### Definition
  - A single-use seal is a unique object that can be closed over a message exactly once, by analogy with the physical numbered seals used to secure shipping containers. Closing the seal yields a publicly verifiable witness that *this* message — and only this message — was sealed. Proposed by Dr Peter Todd (2016), it is one of the two pillars of [[Client-Side Validation]], the other being [[Proof of Publication]].

- ### Overview
  - The defining property is *single use*: a seal can be opened (closed-over) at most once, so it cannot equivocate between two conflicting messages. This is exactly the guarantee Bitcoin already provides for [[UTXO Model|UTXOs]] — the [[Bitcoin Network]] consensus enforces that each output is spent once — which is why a UTXO makes a natural seal medium.
  - To seal a message to a UTXO, the holder commits to the message in the transaction that spends the UTXO (for example via a [[Taproot]] tweak or an `OP_RETURN`). Anyone watching the chain can later verify the seal was closed over precisely that commitment.

- ### Why it matters
  - Single-use seals let a smart-contract system move *validation* off-chain while keeping *uniqueness* on-chain. The blockchain only orders and de-duplicates seal closures; the semantic correctness of each state is checked by the recipient. This is the architecture behind [[RGB Protocol]], [[Block Trails]], and [[RGB and Client Side Validation]], and it is what makes those systems private and scalable relative to global on-chain execution.

- ### Components
  - **Seal definition** — an unambiguous identifier of the object to be sealed (e.g. a specific UTXO outpoint).
  - **Closing operation** — the act that binds a message to the seal (spending the UTXO with a commitment).
  - **Witness / proof** — the on-chain evidence that the seal was closed over the message, verifiable by any client.
  - **Medium** — the [[Proof of Publication]] layer (Bitcoin, or another append-only medium) guaranteeing the closure is visible and ordered.

- ### Relationships
  - is-subclass-of:: [[Cryptographic Commitment]]
  - enables:: [[Client-Side Validation]]
  - enables:: [[RGB Protocol]]
  - enables:: [[Block Trails]]
  - uses:: [[UTXO Model]]
  - uses:: [[Bitcoin Network]]
  - depends-on:: [[Proof of Publication]]
  - bridges-to:: [[Taproot]]
  - related-to:: [[Provenance Tracking]]
  - related-to:: [[Lightning Network]]

- ### Provenance
  - sources:: Peter Todd, "Single-Use Seals" (2016); RGB Black Paper §3.2; Bitcoin Optech topic "Client-side validation"
  - updated:: 2026-06-14