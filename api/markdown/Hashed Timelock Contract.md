A Hashed Timelock Contract (HTLC) is a conditional payment construct that locks funds until either a recipient reveals a preimage matching a published hash, or a timeout elapses and the funds revert to the sender. By combining a hashlock with a timelock, it enables trustless, atomic transfers without a central intermediary. HTLCs are the foundational primitive behind Lightning Network payment routing and cross-chain atomic swaps.

- A [[Hashed Timelock Contract]] locks funds behind a hashlock and a timelock: a payee claims by revealing a preimage that matches a [[Hash Function]] output, otherwise the payer reclaims after the timeout. It is the routing primitive of the [[Lightning Network]] and underlies the [[Atomic Swap]].

### Overview

- The contract encodes two escape conditions. The first releases funds to the recipient on disclosure of a secret; the second returns funds to the sender once a deadline passes, guaranteeing no money is stranded.
- Because revealing the preimage on one hop necessarily exposes it to the previous hop, a chain of HTLCs lets a multi-hop payment settle atomically: either every hop completes or the whole route unwinds.
- The same hashlock can be deployed on two different blockchains, allowing parties to swap assets across chains without trusting an intermediary, the basis of cross-chain atomic swaps.

### Mechanisms

- Hashlock: funds are released only against a preimage matching the committed hash.
- Timelock: an absolute or relative deadline returns funds to the payer if unclaimed.
- Atomic chaining: cascading preimage revelation settles a [[Payment Channel]] route end to end.
- Scripting: implemented as a [[Smart Contract]] or Bitcoin script enforcing the conditions on-chain.

### Applications

- Routing payments across the [[Lightning Network]] and the [[Core Lightning]] implementation.
- Executing trustless cross-chain swaps supporting [[Cross-Chain Interoperability]].
- Conditional escrow where settlement depends on revealing a secret.
- Layered atop [[Bitcoin]] and other UTXO chains as a payment-channel building block.

### Provenance

