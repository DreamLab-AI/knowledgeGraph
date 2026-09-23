
On-chain data indexing is the process of extracting, transforming, and organising raw blockchain events and state into queryable structures suited to application access patterns. Because base-layer data is optimised for consensus rather than retrieval, indexers ingest blocks and logs, decode them, and serve them through APIs such as GraphQL. It is the data backbone for analytics dashboards and decentralised applications.

- ### Content
  - Indexers (such as The Graph's subgraphs) subscribe to chain events, decode contract logs against ABIs, and materialise entities into databases that applications query efficiently. Key challenges include handling chain reorganisations, keeping indexes consistent with finalised state, and decentralising the indexing layer so applications are not dependent on a single trusted provider.

