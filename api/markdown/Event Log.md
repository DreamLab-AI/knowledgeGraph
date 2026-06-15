public:: true

# Event Log
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:event-log",
  "@type": "Page",
  "title": "Event Log",
  "vc:slug": "event-log",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:event-log",
  "@type": "Class",
  "label": "Event Log",
  "definition": "An Event Log is an append-only record of discrete events emitted by a system, used to capture state changes for auditing, indexing and downstream processing. On blockchains, smart contracts emit events that are written to transaction receipts and stored in the log structure of each block, where they can be efficiently queried by off-chain services. Event logs provide an immutable, ordered history that decentralised applications use to reconstruct state and trigger reactions.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:append-only-log",
      "label": "Append-Only Log"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:append-only-log",
        "label": "Append-Only Log"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:event-emission",
        "label": "Event Emission"
      },
      {
        "@id": "urn:ngm:class:state-change",
        "label": "State Change"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:event-emission",
        "label": "Event Emission"
      },
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:audit-log",
        "label": "Audit Log"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:blockchain-data",
        "label": "Blockchain Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:audit-log",
        "label": "Audit Log"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:state-change",
        "label": "State Change"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:blockchain-data",
        "label": "Blockchain Data"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - An Event Log is an append-only record of discrete events emitted by a system, used to capture state changes for auditing, indexing and downstream processing. On blockchains, smart contracts emit events that are written to transaction receipts and stored in the log structure of each block, where they can be efficiently queried by off-chain services. Event logs provide an immutable, ordered history that decentralised applications use to reconstruct state and trigger reactions.
  - Related concepts: [[Append-Only Log]] [[Smart Contract]] [[Event Emission]] [[Observability]] [[Immutability]]
- ### Overview
  - Event logs decouple producers of state changes from consumers that react to them. A smart contract emits an event with indexed and non-indexed parameters; the event is recorded in the transaction receipt and the block's logs. Indexing services and decentralised applications subscribe to or query these logs to build searchable views and trigger workflows, all while the underlying records remain immutable and ordered.
- ### Key aspects
  - **Append-only structure** — events are added in order and never modified.
  - **Event emission** — contracts log indexed and data parameters for querying.
  - **Immutability** — recorded events form a tamper-evident history.
  - **Indexing** — off-chain services build searchable views from logs.
  - **Reactivity** — applications subscribe to events to trigger workflows.
- ### Applications
  - Indexing on-chain activity for decentralised applications.
  - Auditing and compliance over immutable event histories.
  - Driving off-chain notifications and automation.
  - Reconstructing contract state from emitted events.
- ### Relationships
  - subClassOf:: [[Append-Only Log]]
  - partOf:: [[Append-Only Log]]
  - hasPart:: [[Event Emission]]
  - hasPart:: [[State Change]]
  - requires:: [[Smart Contract]]
  - requires:: [[Immutability]]
  - uses:: [[Event Emission]]
  - uses:: [[Ethereum Virtual Machine]]
  - enables:: [[Observability]]
  - enables:: [[Audit Log]]
  - supports:: [[Decentralised Application]]
  - supports:: [[Blockchain Data]]
  - dependsOn:: [[Solidity]]
  - implements:: [[Audit Log]]
  - relatedTo:: [[State Change]]
  - relatedTo:: [[Immutability]]
  - relatedTo:: [[Blockchain Data]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
