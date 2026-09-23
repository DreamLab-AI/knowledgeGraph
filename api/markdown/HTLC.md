
A Hashed Time-Locked Contract is a conditional payment construct that releases funds when a preimage is revealed before a deadline, otherwise refunding the sender. It combines a cryptographic hash commitment with an on-chain timeout to achieve trustless conditional transfer across untrusted intermediaries.

- ### Semantic Classification

- ### Content
  - An HTLC locks an output behind two conditions: knowledge of a value whose hash matches a stored commitment, and a time limit. The recipient claims the funds by revealing the preimage, while the sender can reclaim them once the timeout elapses.
  - Because the same hash preimage can unlock contracts across multiple hops, HTLCs enable atomic routing of payments through chains of intermediaries. They are a building block of the Lightning Network and of cross-chain atomic swaps.

- ### Provenance

