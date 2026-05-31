- ### Definition
  - The Edge Computing Layer is the stratum that places computation and storage near the source of data, away from centralised facilities. It sits above the Hardware and Network strata at the periphery and below the application and inference workloads it hosts locally. It contains edge nodes, local schedulers, and the synchronisation logic that links edge to core.

- ### Semantic Classification
  - owl-class:: edge:EdgeComputingLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Latency]], [[Distributed Computing]]
  - requires:: [[Hardware Layer]], [[Network Layer]]
  - enables:: [[Inference Layer]], [[Application Layer]]

- ### Content
  - The Edge Computing Layer runs workloads close to where data originates to reduce latency, bandwidth, and dependence on a central site. Typical members include edge servers and gateways, local schedulers, on-device inference runtimes, and store-and-forward synchronisation with the core. It trades centralised scale for proximity.
  - It requires the Hardware Layer at the periphery and the Network Layer that links edge sites to one another and to the core. It enables low-latency Inference and Application workloads that cannot tolerate a round trip to a distant data centre.
  - The layer bridges to latency and distributed computing, concerns that justify and constrain edge placement. Consistency and resource limits at the edge determine which workloads can responsibly be pushed outward.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z