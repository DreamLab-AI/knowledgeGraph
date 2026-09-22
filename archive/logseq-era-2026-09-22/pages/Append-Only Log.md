public:: true

# Append-Only Log
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:append-only-log",
  "@type": "Page",
  "title": "Append-Only Log",
  "vc:slug": "append-only-log",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:append-only-log",
  "@type": "Class",
  "label": "Append-Only Log",
  "definition": "An append-only log is a data structure in which records can only be added to the end and never modified or deleted in place, producing an immutable, totally ordered sequence of events. Each entry is durably persisted before subsequent entries, giving a tamper-evident history that consumers can replay deterministically from any offset. Append-only logs underpin event sourcing, distributed ledgers, write-ahead logging and certificate transparency, where verifiability and an authoritative ordering of changes are required.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-structure",
      "label": "Data Structure"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:event-sourcing",
        "label": "Event Sourcing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audit-log",
        "label": "Audit Log"
      },
      {
        "@id": "urn:ngm:class:certificate-transparency",
        "label": "Certificate Transparency"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:blockchain-ledger",
        "label": "Blockchain Ledger"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-replication",
        "label": "Data Replication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - An [[Append-Only Log]] is a [[Data Structure]] that enforces [[Immutability]] by allowing writes only at the tail, using a [[Cryptographic Hash]] chain to guarantee [[Data Integrity]].
- ### Overview
  - The append-only log treats history as a first-class, immutable artefact. Because records are never overwritten, the log doubles as both the system of record and a complete audit trail, and any consumer can rebuild derived state by replaying entries in order.
  - This pattern recurs across databases, messaging systems and ledgers. Write-ahead logs guarantee durability; event-sourced systems treat the log as the canonical state; distributed ledgers and certificate-transparency logs add cryptographic linkage to make tampering detectable.
- ### Key aspects
  - Total ordering: every entry has a monotonic offset establishing an authoritative sequence.
  - Tamper evidence: hash chaining or Merkle structures detect any retroactive alteration.
  - Replayability: deterministic consumers reconstruct state from any starting offset.
  - Retention: compaction or segment expiry bounds storage while preserving recent history.
- ### Mechanisms
  - New records are framed, optionally hash-linked to the previous entry, and fsynced to durable storage.
  - Readers track an offset cursor and consume forward, enabling multiple independent consumers.
  - Periodic checkpoints or snapshots accelerate recovery without discarding the log.
- ### Applications
  - Event sourcing, message brokers, blockchain ledgers, certificate transparency, database write-ahead logging and audit trails.
- ### Relationships
  - implements:: [[Immutability]]
  - implements:: [[Event Sourcing]]
  - uses:: [[Cryptographic Hash]]
  - uses:: [[Hash Function]]
  - requires:: [[Data Integrity]]
  - enables:: [[Audit Log]]
  - enables:: [[Certificate Transparency]]
  - enables:: [[Non-Repudiation]]
  - partOf:: [[Distributed Ledger]]
  - relatedTo:: [[Merkle Tree]]
  - relatedTo:: [[Blockchain Ledger]]
  - supports:: [[Data Replication]]
  - bridgesTo:: [[Blockchain]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - maturity:: mature
