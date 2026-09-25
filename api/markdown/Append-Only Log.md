An append-only log is a data structure in which records can only be added to the end and never modified or deleted in place, producing an immutable, totally ordered sequence of events. Each entry is durably persisted before subsequent entries, giving a tamper-evident history that consumers can replay deterministically from any offset. Append-only logs underpin event sourcing, distributed ledgers, write-ahead logging and certificate transparency, where verifiability and an authoritative ordering of changes are required.

### Overview

- The append-only log treats history as a first-class, immutable artefact. Because records are never overwritten, the log doubles as both the system of record and a complete audit trail, and any consumer can rebuild derived state by replaying entries in order.
- This pattern recurs across databases, messaging systems and ledgers. Write-ahead logs guarantee durability; event-sourced systems treat the log as the canonical state; distributed ledgers and certificate-transparency logs add cryptographic linkage to make tampering detectable.

### Key aspects

- Total ordering: every entry has a monotonic offset establishing an authoritative sequence.
- Tamper evidence: hash chaining or Merkle structures detect any retroactive alteration.
- Replayability: deterministic consumers reconstruct state from any starting offset.
- Retention: compaction or segment expiry bounds storage while preserving recent history.

### Mechanisms

- New records are framed, optionally hash-linked to the previous entry, and fsynced to durable storage.
- Readers track an offset cursor and consume forward, enabling multiple independent consumers.
- Periodic checkpoints or snapshots accelerate recovery without discarding the log.

### Applications

- Event sourcing, message brokers, blockchain ledgers, certificate transparency, database write-ahead logging and audit trails.

### Provenance

