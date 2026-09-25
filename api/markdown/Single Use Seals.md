A single-use seal is a cryptographic primitive, proposed by Peter Todd in 2016, that is a uniquely identifiable object which can be closed over ('sealed to') a message exactly once, producing a publicly verifiable proof that the seal was closed over that specific message and no other. The canonical implementation uses a Bitcoin UTXO as the seal: because the consensus rules permit each UTXO to be spent only once, the transaction that spends it can commit to exactly one message, giving a tamper-evident, non-equivocable 'open once' guarantee. Single-use seals, combined with proof of publication, form the foundation of client-side validation and underpin Bitcoin smart-contract systems such as RGB and primitives such as Block Trails.

### Overview

- The defining property is *single use*: a seal can be opened (closed-over) at most once, so it cannot equivocate between two conflicting messages. This is exactly the guarantee Bitcoin already provides for [[UTXO Model|UTXOs]] — the [[Bitcoin Network]] consensus enforces that each output is spent once — which is why a UTXO makes a natural seal medium.
- To seal a message to a UTXO, the holder commits to the message in the transaction that spends the UTXO (for example via a [[Taproot]] tweak or an `OP_RETURN`). Anyone watching the chain can later verify the seal was closed over precisely that commitment.

### Why it matters

- Single-use seals let a smart-contract system move *validation* off-chain while keeping *uniqueness* on-chain. The blockchain only orders and de-duplicates seal closures; the semantic correctness of each state is checked by the recipient. This is the architecture behind [[RGB Protocol]], [[Block Trails]], and [[RGB and Client Side Validation]], and it is what makes those systems private and scalable relative to global on-chain execution.

### Components

- **Seal definition** — an unambiguous identifier of the object to be sealed (e.g. a specific UTXO outpoint).
- **Closing operation** — the act that binds a message to the seal (spending the UTXO with a commitment).
- **Witness / proof** — the on-chain evidence that the seal was closed over the message, verifiable by any client.
- **Medium** — the [[Proof of Publication]] layer (Bitcoin, or another append-only medium) guaranteeing the closure is visible and ordered.

### Provenance

