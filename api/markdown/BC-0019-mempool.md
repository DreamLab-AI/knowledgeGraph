id:: mempool-ontology

- ### OntologyBlock
  id:: BC-0019-mempool
  - ontology:: true
  - public-access:: true
  - owl:class:: bc:Mempool
  - term-id:: BC-0019
  - preferred-term:: Mempool
  - source-domain:: bc
  - status:: complete
  - definition:: The mempool (memory pool) is a waiting area for valid but unconfirmed transactions that have been broadcast to the network but not yet included in a block. Each node maintains its own mempool, which serves as a queue for miners/validators to select transactions for inclusion in the next block, typically prioritized by transaction fees and other criteria.

### Relationships
- is:: [[Distributeddatastructure]]
- is-subclass-of:: [[Transaction Pool]]
- is-subclass-of:: [[Distributeddatastructure]]
- is-subclass-of:: [[BlockchainEntity]]
- bridges-from:: [[Bitcoin]]
