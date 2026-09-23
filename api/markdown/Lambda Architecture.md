
Lambda Architecture is a data-processing design pattern that handles massive quantities of data by combining a batch layer for comprehensive, accurate computation over the full dataset with a speed (or streaming) layer that processes recent data with low latency. A serving layer merges results from both layers so queries return a unified view that is eventually consistent yet responsive in near real time. The pattern accepts the operational cost of maintaining two parallel code paths in exchange for fault tolerance, reprocessing capability, and the reconciliation of historical accuracy with live freshness.

- ### Overview
  - Lambda Architecture sits within the broader category of [[Data Architecture]], which it specialises.
  - It connects to a network of 14 related classes across the knowledge graph, anchoring edges that previously pointed to an undefined node.
- ### Key aspects
  - hasPart: [[Batch Processing]]
  - hasPart: [[Stream Processing]]
  - hasPart: [[Data Pipeline]]
  - uses: [[Apache Spark]]
  - uses: [[Apache Kafka]]
  - uses: [[Data Lake]]
  - requires: [[Data Warehouse]]
  - requires: [[Scalability]]
- ### Mechanisms
  - Lambda Architecture operates through its constituent parts and dependencies, integrating with adjacent systems to deliver its function within infrastructure.
- ### Applications
  - Applied to advance [[Real-Time Analytics]].
  - Applied to advance [[Fault Tolerance]].
- ### Provenance

