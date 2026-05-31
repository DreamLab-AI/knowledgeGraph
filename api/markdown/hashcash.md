- ### Definition
  - A proof-of-work scheme that requires a sender to compute a partial hash collision, originally proposed to limit email spam and later adapted for Bitcoin mining.

- ### Semantic Classification
  - owl-class:: cryptographic:Hashcash
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Hash Function]]
  - bridges-to:: [[Mining]]
  - requires:: [[Hash Function]]
  - enables:: [[Bitcoin Protocol]]

- ### Content
  - Hashcash asks a participant to find an input whose hash begins with a required number of zero bits. Finding such an input is computationally expensive but verifying it is cheap, imposing an asymmetric cost on the sender.
  - Originally intended to make bulk email costly, the scheme was adopted by Bitcoin as the basis of its mining proof-of-work, where the difficulty target adjusts the number of leading zeros required.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z