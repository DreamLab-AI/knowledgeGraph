id:: timestamp-ontology

- ### OntologyBlock
  id:: BC-0017-timestamp
  - ontology:: true
  - public-access:: true
  - owl:class:: bc:Timestamp
  - term-id:: BC-0017
  - preferred-term:: Timestamp
  - source-domain:: bc
  - status:: complete
  - definition:: A timestamp is a record of the approximate time when a block was created, typically represented as Unix epoch time (seconds since January 1, 1970). Timestamps are critical for ordering blocks chronologically, calculating difficulty adjustments, and enabling time-based smart contract logic. They must fall within acceptable bounds relative to network time to prevent manipulation.

### Relationships
- is:: [[BlockchainEntity]]
- is-subclass-of:: [[Block]]
- is-subclass-of:: [[Distributeddatastructure]]
- is-subclass-of:: [[BlockchainEntity]]
- bridges-from:: [[UserConsentToken]]
