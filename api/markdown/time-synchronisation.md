- ### Definition
  - Time synchronisation is the process of aligning the clocks of networked devices to a common reference so that distributed computations, transactions, and logs share a consistent temporal frame. It is achieved through hierarchical protocols such as the Network Time Protocol (NTP), which provides millisecond-level accuracy over the internet, and the Precision Time Protocol (PTP / IEEE 1588), which achieves sub-microsecond accuracy within local networks using hardware timestamping. Accurate time synchronisation is foundational to consensus algorithms, cryptographic certificate validation, distributed transaction ordering, and real-time control systems.

- ### Semantic Classification
  - owl-class:: time-synchronisation:Time Synchronisation
  - owl-role:: Concept

- ### Relationships
  - enables [[Consensus Protocol]]
  - enables [[Distributed System]]
  - relatedTo [[Network Synchronization]]
  - relatedTo [[Timestamp]]
  - dependsOn [[Network Protocol]]

- ### Content
  - Clock agreement across networked nodes is a prerequisite for ordering events in distributed systems without relying solely on message-passing causality. NTP operates in a client-server hierarchy where stratum-0 devices (atomic clocks, GPS receivers) synchronise stratum-1 servers, which in turn serve stratum-2 clients, and so on. The protocol compensates for network round-trip delay and achieves typical accuracy of 1–50 ms over the internet and better than 1 ms on local area networks.
  - PTP (IEEE 1588) improves on NTP by using hardware-assisted timestamping at the network interface, eliminating software jitter. Boundary clocks and transparent clocks in PTP-aware switches distribute the master clock signal across the LAN with sub-microsecond precision, which is essential for industrial automation, telecommunications (ITU-T G.8275), and financial trading infrastructure.
  - In blockchain and distributed ledger systems, time synchronisation is critical for validating certificate expiry in TLS, ordering transaction mempool entries, and some consensus mechanisms that include time-bound voting windows. Edge computing and IoT deployments face challenges maintaining synchronisation under intermittent connectivity, leading to the use of resilient protocols and local reference hardware to minimise clock drift during outages.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z