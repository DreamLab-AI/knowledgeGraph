public:: true

# Etcd
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:etcd",
  "@type": "Page",
  "title": "Etcd",
  "vc:slug": "etcd",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:etcd",
  "@type": "Class",
  "label": "Etcd",
  "definition": "etcd is a strongly consistent, distributed key-value store used to hold the critical configuration and coordination data of distributed systems. It uses the Raft consensus algorithm to replicate data across a cluster, providing linearisable reads and writes with reliable failover. etcd is best known as the primary datastore for Kubernetes cluster state, and is also used for service discovery, distributed locking, leader election, and configuration management in many cloud-native platforms.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      },
      {
        "@id": "urn:ngm:class:key-value-store",
        "label": "Key-Value Store"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:zookeeper",
        "label": "ZooKeeper"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:consul",
        "label": "Consul"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
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
  - etcd is a strongly consistent, distributed key-value store used to hold the critical configuration and coordination data of distributed systems. It uses the Raft consensus algorithm to replicate data across a cluster, providing linearisable reads and writes with reliable failover. etcd is best known as the primary datastore for Kubernetes cluster state, and is also used for service discovery, distributed locking, leader election, and configuration management in many cloud-native platforms.
  - Core related concepts: [[Key-Value Store]], [[Consensus Algorithm]], [[Kubernetes]], [[Service Discovery]], [[Configuration Management]].

- ### Overview
  - etcd provides the small but critical store of authoritative state on which larger distributed systems depend. By building on Raft, it gives operators a simple consistency model, linearisable operations and a clear quorum requirement, while tolerating the failure of a minority of nodes. Its watch and lease primitives make it convenient for coordination tasks such as leader election and distributed locking, beyond plain storage.

- ### Key aspects
  - Raft-backed consistency: writes are committed only after a majority quorum acknowledges, yielding linearisable, fault-tolerant state.
  - Watch and lease primitives: clients subscribe to key changes and attach time-to-live leases, enabling coordination patterns like locks and elections.
  - Operational model: an odd-sized cluster (typically three or five members) tolerates the loss of a minority while remaining available.
  - Kubernetes role: etcd stores the entire desired and observed state of a Kubernetes cluster, making its availability mission-critical.

- ### Applications
  - Kubernetes control-plane state storage and reconciliation.
  - Service discovery and dynamic configuration in cloud-native platforms.
  - Distributed locking and leader election for coordinated workloads.
  - Feature-flag and configuration distribution across microservice fleets.

- ### Relationships
  - subClassOf:: [[Infrastructure]]
  - partOf:: [[Distributed Systems]]
  - uses:: [[Consensus Algorithm]]
  - uses:: [[Key-Value Store]]
  - implements:: [[Service Discovery]]
  - enables:: [[Configuration Management]]
  - enables:: [[Kubernetes]]
  - enables:: [[High Availability]]
  - supports:: [[Kubernetes]]
  - supports:: [[Microservices]]
  - dependsOn:: [[Consensus Algorithm]]
  - requires:: [[Fault Tolerance]]
  - contrastsWith:: [[ZooKeeper]]
  - relatedTo:: [[Consul]]
  - relatedTo:: [[Distributed Systems]]
  - relatedTo:: [[Service Discovery]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
