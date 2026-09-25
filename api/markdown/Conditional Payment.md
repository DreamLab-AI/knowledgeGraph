A conditional payment is a transfer of value that is released only when one or more predefined conditions are met, rather than executing unconditionally on submission. On blockchains these conditions are enforced by smart contracts or scripts such as hash and time locks, removing the need for a trusted intermediary to adjudicate. Conditional payments are the foundation of escrow, payment channels and atomic cross-chain swaps.

### Overview

- Ordinary payments settle as soon as they are accepted. Conditional payments instead encode a predicate — a secret being revealed, a deadline passing, an oracle attestation — that must hold before funds move.
- On programmable ledgers the condition and the transfer are bound together in code, so settlement is trustless: no escrow agent decides whether to release the money. If the condition fails, the funds revert to the sender.
- This primitive composes upward into more elaborate financial flows, including streaming micropayments, cross-chain swaps and dispute-resistant channels.

### Key aspects

- Predicate enforcement: a machine-checkable condition gates the release of funds.
- Trustlessness: the contract, not a third party, adjudicates the outcome.
- Reversibility on failure: unmet conditions return funds to the payer.
- Composability: conditional payments nest to build channels and swaps.
- Time bounds: timelocks ensure funds are never permanently stuck.

### Mechanisms

- Hash locks: payment releases when a preimage matching a published hash is revealed.
- Time locks: payment can be reclaimed after a deadline if the condition is unmet.
- Oracle attestations: external data triggers release for real-world conditions.
- Channel updates: conditional transfers move balance off-chain until settlement.

### Applications

- Atomic cross-chain swaps without a trusted exchange.
- Lightning-style routed payments across payment channels.
- Escrow and milestone-based settlement.
- Streaming micropayments for metered services.

### Provenance

