
etcd is a strongly consistent, distributed key-value store used to hold the critical configuration and coordination data of distributed systems. It uses the Raft consensus algorithm to replicate data across a cluster, providing linearisable reads and writes with reliable failover. etcd is best known as the primary datastore for Kubernetes cluster state, and is also used for service discovery, distributed locking, leader election, and configuration management in many cloud-native platforms.

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

- ### Provenance

