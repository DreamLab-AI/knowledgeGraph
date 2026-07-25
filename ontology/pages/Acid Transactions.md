public:: true

# Acid Transactions

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:acid-transactions",
  "@type": "Page",
  "title": "Acid Transactions",
  "vc:slug": "acid-transactions",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:acid-transactions",
  "@type": "Class",
  "label": "Acid Transactions",
  "definition": "ACID transactions are units of database work that uphold four guarantees: atomicity, consistency, isolation and durability. Atomicity ensures a transaction either fully completes or has no effect; consistency keeps the database in a valid state; isolation prevents concurrent transactions from interfering; and durability guarantees committed changes survive failures. Together these properties allow reliable, predictable updates to shared data and form the bedrock of relational database systems.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:database-management-system",
      "label": "Database Management System"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:two-phase-commit",
        "label": "Two-Phase Commit"
      },
      {
        "@id": "urn:ngm:class:write-ahead-logging",
        "label": "Write-Ahead Logging"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      },
      {
        "@id": "urn:ngm:class:write-ahead-logging",
        "label": "Write-Ahead Logging"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:database",
        "label": "Database"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:two-phase-commit",
        "label": "Two-Phase Commit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:centralised-database",
        "label": "Centralised Database"
      },
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
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
- ACID transactions provide atomicity, consistency, isolation and durability guarantees over a unit of [[Database]] work, implementing [[Data Integrity]] in a [[Database Management System]].
- They are the reliability foundation of [[Relational Database]] systems.
- ### Overview
- A transaction groups multiple operations so they take effect as an indivisible whole; if any part fails, the entire transaction is rolled back to its prior state.
- Isolation levels govern how concurrent transactions observe one another, trading strictness against throughput, while durability is secured through techniques such as write-ahead logging.
- These guarantees free application developers from reasoning about partial failures and races in shared data.
- ### Key aspects
- Atomicity: all-or-nothing execution with rollback on failure.
- Consistency: transitions only between valid database states.
- Isolation: concurrent transactions appear to run serially.
- Durability: committed effects persist through crashes.
- ### Mechanisms
- Logging and recovery (write-ahead logs), concurrency control (locking or multiversioning), and commit protocols such as two-phase commit for distributed cases.
- ### Applications
- Financial ledgers and payment processing requiring exactness.
- Inventory and order management with concurrent updates.
- Any [[SQL]]-driven system needing reliable multi-step updates.
- Distributed transactions coordinated via [[Two-Phase Commit]].
- ### Relationships
- implements:: [[Data Integrity]]
- uses:: [[Two-Phase Commit]]
- uses:: [[Write-Ahead Logging]]
- dependsOn:: [[Database Management System]]
- dependsOn:: [[Write-Ahead Logging]]
- requires:: [[Database]]
- hasPart:: [[Two-Phase Commit]]
- enables:: [[Relational Database]]
- supports:: [[SQL]]
- relatedTo:: [[Centralised Database]]
- relatedTo:: [[Data]]
- ### Provenance
- updated:: 2026-06-15
