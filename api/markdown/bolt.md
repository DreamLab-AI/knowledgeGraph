- ### Definition
  - BOLT, the Basis of Lightning Technology, is the set of specifications that define how Lightning Network implementations interoperate. The documents cover channels, routing, and messaging.

- ### Semantic Classification
  - owl-class:: blockchain:BOLT
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Payment Channel]]
  - requires:: [[Lightning]]
  - enables:: [[BOLT11]], [[BOLT12]]

- ### Content
  - BOLT is the collection of specification documents that describe the Lightning Network protocol, including how nodes open and close channels, route payments, and format messages. They allow independent implementations to work together.
  - The specifications are maintained as open documents and revised as the protocol evolves. They define the wire formats and procedures that implementations must follow to remain compatible, including the invoice formats BOLT11 and BOLT12.

- ### Provenance
  - sources:: [[https://github.com/lightning/bolts]], [[https://github.com/lightning/bolts/blob/master/00-introduction.md]]
  - migration-date:: 2026-05-29T00:00:00Z