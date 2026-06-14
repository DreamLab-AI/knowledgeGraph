public:: true

# Sharding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sharding",
  "@type": "Page",
  "vc:slug": "sharding",
  "title": "Sharding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sharding",
  "@type": "Class",
  "label": "Sharding",
  "definition": "Sharding is a horizontal partitioning technique for distributed databases and blockchain networks in which a dataset or workload is divided into disjoint subsets called shards, each maintained by a distinct subset of nodes, so that the total system throughput scales with the number of shards rather than being bounded by the capacity of a single node. In databases, sharding routes queries to the appropriate shard by a sharding key. In blockchain, each shard processes its own subset of transactions and stores its own portion of the state, with cross-shard communication handled by a coordination layer. Sharding dramatically increases transaction throughput and reduces storage requirements per node at the cost of increased architectural complexity and cross-shard coordination overhead.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:shard", "label": "Shard"},
      {"@id": "urn:ngm:class:shard-committee", "label": "Shard Committee"},
      {"@id": "urn:ngm:class:cross-shard-communication", "label": "Cross-Shard Communication"},
      {"@id": "urn:ngm:class:beacon-chain", "label": "Beacon Chain"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"},
      {"@id": "urn:ngm:class:sharding-key", "label": "Sharding Key"},
      {"@id": "urn:ngm:class:validator-set", "label": "Validator Set"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:horizontal-scalability", "label": "Horizontal Scalability"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-hash-table", "label": "Distributed Hash Table"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:horizontal-partitioning", "label": "Horizontal Partitioning"},
      {"@id": "urn:ngm:class:data-partitioning", "label": "Data Partitioning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"},
      {"@id": "urn:ngm:class:distributed-hash-table", "label": "Distributed Hash Table"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"},
      {"@id": "urn:ngm:class:replication", "label": "Replication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-data-structure", "label": "Distributed Data Structure"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:danksharding", "label": "Danksharding"},
      {"@id": "urn:ngm:class:rollup", "label": "Rollup"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:database-partitioning", "label": "Database Partitioning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:horizontal-partitioning", "label": "Horizontal Partitioning"},
    {"@id": "urn:ngm:class:database-sharding", "label": "Database Sharding"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Sharding]] is a horizontal partitioning strategy applied to [[Distributed System|distributed systems]] and blockchain networks that divides state and transaction processing across multiple independent shard subsets, allowing total network throughput to scale linearly with shard count while requiring each participating node to store and process only a fraction of the global dataset.

- ### Relationships
  - [[Sharding]] is a subclass of [[Blockchain Scalability]] strategies and relates closely to general [[Distributed System]] design and [[Distributed Data Structure]] techniques. Each shard requires its own [[Consensus Protocol]] and often uses a [[Distributed Hash Table]] to route transactions to the correct shard. Cross-shard communication requires careful architectural design to prevent double-spending and ensure atomicity. Sharding is often compared with [[Layer 2 Scaling]] as an alternative or complementary scaling approach. It directly enables larger [[Blockchain Network]] and [[Distributed Computing]] deployments that would be impractical with every node processing all transactions.

- ### Content
  - Sharding as a database concept dates to large-scale web systems in the late 1990s and 2000s, when companies such as eBay, Google, and Facebook horizontally partitioned relational databases across multiple servers to handle growth beyond what a single machine could sustain. The sharding key — a value such as user ID or geographic region — determines which shard stores and processes each record, ensuring that related data co-locates for efficient query processing. MongoDB, Cassandra, and Vitess popularised database sharding in the 2010s.

  - In blockchain, sharding attempts to solve the scalability trilemma: the observation that it is difficult to simultaneously achieve decentralisation, security, and high throughput. A traditional blockchain requires every full node to process every transaction, bounding throughput to what a single node can handle (approximately 15–30 TPS for Ethereum pre-Merge). In a sharded blockchain, the validator set is divided into committees, each responsible for one shard. Transactions are routed to the appropriate shard based on the sender's or contract's address. The beacon chain or coordination layer maintains cross-shard state roots and handles finality. Cross-shard transactions require a receipt-based protocol: the originating shard creates a receipt that the destination shard can redeem in a subsequent block.

  - Ethereum's roadmap has included database sharding (originally "state sharding") since 2016. The execution sharding plan was substantially revised after the rise of Layer 2 rollups: rather than sharding execution on Layer 1, Ethereum now pursues "danksharding" — providing large-scale blob data availability to L2 rollups via a data sharding layer, without sharding execution itself. Proto-danksharding (EIP-4844, activated March 2024) introduced "blob" data types providing L2s with cheap temporary data storage, a stepping stone toward full danksharding. Near Protocol, Zilliqa, and Harmony implement transaction-level sharding. The Ethereum Beacon Chain uses committee-based sharding for attestations.

  - In 2024–2025, EIP-4844 has substantially reduced the cost of posting rollup proofs to Ethereum L1, validating the data sharding approach. Full danksharding with 64 data shards is targeted for a future Ethereum upgrade. Academic research continues on the security of sharded systems — particularly the one-percent attack and cross-shard MEV — and on ZK-rollup-based sharding where validity proofs eliminate the need for fraud-proof windows. In databases, distributed OLTP systems such as CockroachDB and Google Spanner provide automatic sharding with global transactions, influencing the design of Web3 storage systems.