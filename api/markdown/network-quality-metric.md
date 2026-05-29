- ### Definition
  - A quantitative measure used to characterise the performance and reliability of a network connection for real-time interactive applications, encompassing parameters such as latency (round-trip time), jitter, packet loss rate, available bandwidth, and connection stability. These metrics directly determine the feasibility of synchronised multi-user experiences in spatial computing environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:NetworkQualityMetric
  - owl-role:: concept

- ### Relationships
  - **requires** [[Networking Technology]] — network quality metrics are measured over the underlying networking stack
  - **supports** [[Multi User Systems]] — quality metrics determine whether multi-user sessions can sustain coherent shared presence
  - **supports** [[Real Time]] — real-time interaction constraints define the acceptable thresholds for each metric
  - **partOf** [[Distributed System]] — NQMs are diagnostic outputs of distributed system operation
  - **relatedTo** [[Latency]] — latency (round-trip time) is the most critical individual network quality metric
  - **relatedTo** [[Edge Computing]] — edge deployment is a primary strategy for meeting NQM thresholds

- ### Content

  ## Overview

  Network Quality Metric represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z