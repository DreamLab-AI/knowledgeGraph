public:: true

# Transaction Throughput

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:transaction-throughput",
  "@type": "Page",
  "title": "Transaction Throughput",
  "vc:slug": "transaction-throughput",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transaction-throughput",
  "@type": "Class",
  "label": "Transaction Throughput",
  "definition": "Transaction throughput is the rate at which a system processes and finalises transactions, commonly expressed as transactions per second, and is a primary measure of a blockchain network's capacity and scalability. It is shaped by block size, block interval, consensus mechanism, and execution efficiency, and it trades off against decentralisation and security in protocol design. Improving throughput is a central goal of layer-2 solutions and sharding.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:scalability",
      "label": "Scalability"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:block-size",
        "label": "Block Size"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:performance",
        "label": "Performance"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transaction-finality",
        "label": "Transaction Finality"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
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
  - [[Transaction Throughput]] is the rate at which a system finalises transactions, often measured in transactions per second.
  - It is a primary measure of a blockchain's capacity and a core dimension of [[Scalability]].
  - It is shaped by [[Block Size]], block interval, and the [[Consensus Mechanism]].
- ### Overview
  - Throughput captures how many [[Blockchain Transaction]] units a network can confirm in a given time window.
  - In the blockchain trilemma, raising throughput often pressures decentralisation or security, forcing design trade-offs.
  - Base-layer throughput is bounded by block size and block production rate; layer-2 designs offload work to raise effective capacity.
  - Throughput is distinct from [[Latency]], which measures the time for a single transaction to confirm.
- ### Key aspects
  - **Block parameters**: block size and interval set the base-layer ceiling.
  - **Consensus efficiency**: the mechanism determines how fast blocks are agreed.
  - **Parallelism**: sharding partitions work to scale horizontally.
  - **Off-chain execution**: rollups and channels batch or move computation off the base layer.
- ### Applications
  - Scaling payment and settlement networks.
  - Supporting high-frequency decentralised applications.
  - Benchmarking competing blockchain protocols.
  - Sizing layer-2 and sharding strategies.
- ### Relationships
  - enables:: [[Scalability]]
  - enables:: [[Blockchain Transaction]]
  - dependsOn:: [[Consensus Mechanism]]
  - dependsOn:: [[Block Size]]
  - partOf:: [[Performance]]
  - partOf:: [[Scalability]]
  - supports:: [[Optimistic Rollup]]
  - supports:: [[ZK-Rollup]]
  - supports:: [[Sharding]]
  - contrastsWith:: [[Latency]]
  - relatedTo:: [[Transaction Finality]]
  - relatedTo:: [[State Channel]]
  - relatedTo:: [[Sidechain]]
- ### Provenance
  - updated:: 2026-06-15
