- ### Definition
  - A Hashed Time-Locked Contract is a conditional payment construct that releases funds when a preimage is revealed before a deadline, otherwise refunding the sender.

- ### Semantic Classification
  - owl-class:: blockchain:HTLC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Bitcoin Script]]
  - requires:: [[Hash Function]]
  - enables:: [[Lightning Network]], [[Payment Channel]]

- ### Content
  - An HTLC locks an output behind two conditions: knowledge of a value whose hash matches a stored commitment, and a time limit. The recipient claims the funds by revealing the preimage, while the sender can reclaim them once the timeout elapses.
  - Because the same hash preimage can unlock contracts across multiple hops, HTLCs enable atomic routing of payments through chains of intermediaries. They are a building block of the Lightning Network and of cross-chain atomic swaps.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z