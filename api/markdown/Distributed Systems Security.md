
Distributed systems security is the discipline of protecting confidentiality, integrity and availability across systems whose components run on separate machines and communicate over untrusted networks. It addresses threats unique to distribution, including partial failure, Byzantine participants, replay and partition attacks, and the absence of a single trusted authority. Techniques span authenticated and encrypted channels, fault-tolerant consensus, access control and threat modelling tailored to the multi-node setting.

- Distributed systems security protects confidentiality, integrity and availability across components spread over untrusted networks, where there is no single trusted authority. It combines [[Cryptography]], [[Authentication]] and fault-tolerant [[Consensus Algorithm]] design to withstand attacks unique to distribution.
- ### Overview
- Distribution multiplies the attack surface: messages can be intercepted, replayed or dropped, clocks drift, and individual nodes may fail or behave maliciously.
- Unlike a monolithic system, a distributed deployment must assume partial failure and adversarial participants, so security guarantees are framed against an explicit [[Threat Model]].
- The field draws on [[Byzantine Fault Tolerance]] to keep systems correct even when some nodes are compromised, and on [[Zero Trust Architecture]] to remove implicit trust between components.
- ### Key aspects
- Authenticated, encrypted channels between every pair of communicating nodes.
- Consensus that tolerates crash and Byzantine faults without a central coordinator.
- Fine-grained [[Access Control]] enforced consistently across replicas.
- Defence against replay, partition and Sybil attacks.
- Continuous [[Intrusion Detection]] across heterogeneous services.
- ### Applications
- Securing microservice meshes and cloud platforms end to end.
- Hardening replicated databases and [[Replication]] protocols.
- Underpinning [[Blockchain Security]] and decentralised ledgers.
- Implementing [[Zero Trust Architecture]] across multi-region deployments.
- ### Provenance

