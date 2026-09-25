Event emission is the act by which a smart contract or software component publishes a structured log entry recording that something notable occurred during execution. On blockchains, emitted events are written to transaction logs that off-chain applications and indexers subscribe to, since contracts cannot push data outward directly. Events provide a cheap, queryable record of state changes and are the primary bridge between on-chain logic and external systems.

### Content

- Because contracts cannot call external systems, emitted events written to transaction logs are the standard outbound channel. Indexers and dApps subscribe to these logs to track state changes cheaply and reconstruct application history.

