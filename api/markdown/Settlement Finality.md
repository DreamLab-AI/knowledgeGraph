
Settlement finality is the point at which a transfer of value or assets becomes irrevocable and unconditional, such that it can no longer be reversed, unwound, or repudiated even in the event of a participant's insolvency. In traditional finance it is defined by legal frameworks governing payment and securities systems, while in blockchain systems it emerges from consensus guarantees that may be deterministic or probabilistic. Finality is essential to systemic stability because it eliminates settlement risk once the defined threshold is reached.

- ### Overview
  - In legal terms, finality is conferred by statute and the rules of the payment or securities system, protecting completed transfers from being unwound.
  - Deterministic finality, common in BFT-style consensus, makes a transaction irreversible the instant it is committed by the validator set.
  - Probabilistic finality, characteristic of proof-of-work, strengthens over time as additional blocks are appended, never reaching absolute certainty.
  - Clear finality rules are a prerequisite for connecting on-chain settlement to regulated market infrastructure.
- ### Key aspects
  - Deterministic finality — irrevocability achieved at commit time under Byzantine-fault-tolerant consensus.
  - Probabilistic finality — confidence that grows with block depth in longest-chain protocols.
  - Economic finality — reversal made prohibitively costly through slashing of staked capital.
  - Legal finality — statutory protection of settled transfers against insolvency clawback.
  - Reorg resistance — the difficulty of reorganising the ledger to undo a settled transaction.
- ### Applications
  - Real-time gross settlement systems for interbank payments.
  - On-chain securities settlement and tokenised asset transfers.
  - Cross-border payment rails requiring legal certainty of completion.
  - Bridging protocols that depend on source-chain finality before minting.
- ### Provenance

