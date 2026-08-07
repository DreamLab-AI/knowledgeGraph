public:: true

# ZooKeeper
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:456831beef3fc1500939995d7369695f48642664a02d5eab9d807592a08b2384",
  "@type": "Page",
  "vc:slug": "zookeeper",
  "title": "ZooKeeper",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:etcd",
      "vc:label": "Etcd"
    },
    {
      "@id": "urn:visionflow:linked:leader-election",
      "vc:label": "Leader Election"
    },
    {
      "@id": "urn:visionflow:linked:paxos",
      "vc:label": "Paxos"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zookeeper",
  "@type": "Class",
  "label": "ZooKeeper",
  "definition": "An Apache open-source coordination service for distributed systems that exposes a replicated, hierarchical key-value namespace of 'znodes' with strict ordering guarantees, ephemeral nodes, and watches, over which applications build leader election, distributed locks, configuration management, and group membership; consistency across the ensemble is maintained by the ZAB atomic-broadcast protocol, a Paxos-influenced consensus design.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-systems",
    "label": "Distributed Systems"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:leader-election",
        "label": "Leader Election"
      },
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      },
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:etcd",
        "label": "etcd"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:paxos",
        "label": "Paxos"
      },
      {
        "@id": "urn:ngm:class:apache-kafka",
        "label": "Apache Kafka"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "An Apache open-source coordination service for distributed systems that exposes a replicated, hierarchical key-value namespace of 'znodes' with strict ordering guarantees, ephemeral nodes, and watches, over which applications build leader election, distributed locks, configuration management, and group membership; consistency across the ensemble is maintained by the ZAB atomic-broadcast protocol, a Paxos-influenced consensus design."

- ### Semantic Classification
  - owl-class:: distributed-systems:ZooKeeper
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - enables:: [[Leader Election]]
  - contrasts-with:: [[Etcd]]
  - related-to:: [[Paxos]]

- ### Content

  ## Definition

  **Apache ZooKeeper** is a centralised coordination service for distributed applications, originating at Yahoo! Research (Hunt et al., USENIX ATC 2010) and long serving as the reference implementation of the "coordination kernel" pattern. Rather than shipping specific primitives, ZooKeeper exposes a small, sharp abstraction: a replicated, in-memory, hierarchical namespace of **znodes**, resembling a filesystem, with total ordering of updates, per-session **ephemeral nodes** that vanish when a client's session dies, **sequential nodes** with server-assigned monotonic suffixes, and one-shot **watches** notifying clients of changes. From these building blocks, client recipes construct [[Leader Election]], distributed locks and barriers, group membership, and dynamic configuration distribution — the Curator library packages the standard recipes for the JVM ecosystem.

  Consistency across the replica ensemble comes from **ZAB** (ZooKeeper Atomic Broadcast), a leader-based atomic-broadcast protocol in the [[Paxos]] family: a quorum elects a leader, all writes funnel through it, and updates commit once a majority acknowledges, giving linearisable writes and sequentially consistent, locally served reads. An ensemble of 2f+1 servers tolerates f failures; typical deployments use three or five nodes. This read-optimised design — every server answers reads from local state — made ZooKeeper the workhorse behind Hadoop's HDFS NameNode failover, HBase, SolrCloud, Storm, and, most famously, [[Apache Kafka]]'s controller and metadata management.

  ZooKeeper's main modern comparison is [[Etcd]], which offers a flat key space, the Raft protocol, gRPC APIs, and multi-version concurrency with range watches, and which won the cloud-native generation as Kubernetes' backing store. The broader trend is towards embedding consensus directly into systems: Kafka's KRaft mode (default since Kafka 4.0) removed the ZooKeeper dependency entirely, a pattern repeated across projects that once relied on an external coordinator.

  ## Technical Details

  - **Data model**: hierarchical znodes holding small payloads (1 MB default cap); versioned with compare-and-set semantics; persistent, ephemeral, sequential, and (since 3.5) TTL and container node types
  - **Session semantics**: client liveness via heartbeats; session expiry cascades to ephemeral nodes, which is the mechanism underlying failure detection in locks and elections
  - **Guarantees**: sequential consistency, atomicity, single system image, durability of committed updates; `sync` allows read-your-writes across replicas
  - **ZAB phases**: leader election (fast leader election), discovery/synchronisation of follower state, then broadcast with zxid-ordered proposals and majority commit
  - **Operations**: quorum sizing (odd ensembles), observer nodes for read scaling without vote overhead, snapshots plus transaction logs for recovery; dynamic reconfiguration since 3.5
  - **Trade-offs vs. etcd**: ZooKeeper offers mature JVM integration and battle-tested recipes; etcd offers simpler operational surface, Raft's more accessible correctness story, and first-class Kubernetes ecosystem placement
