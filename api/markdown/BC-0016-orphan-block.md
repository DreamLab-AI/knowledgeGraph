id:: orphan-block-ontology

- ### OntologyBlock
  id:: BC-0016-orphan-block
  - ontology:: true
  - public-access:: true
  - owl:class:: bc:OrphanBlock
  - term-id:: BC-0016
  - preferred-term:: Orphan Block
  - source-domain:: bc
  - status:: complete
  - definition:: An orphan block is a valid block that is not part of the longest chain and is therefore excluded from the canonical blockchain history. Orphan blocks occur when two miners find valid blocks nearly simultaneously, but one chain becomes longer through subsequent blocks, causing the shorter chain's blocks to be abandoned. These blocks are still valid but do not contribute to the final ledger state.

### Relationships
- is-subclass-of:: [[Block]]
- is-subclass-of:: [[Distributeddatastructure]]
- is-subclass-of:: [[BlockchainEntity]]
