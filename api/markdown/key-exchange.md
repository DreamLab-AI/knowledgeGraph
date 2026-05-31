- ### Definition
  - Key exchange is a cryptographic procedure by which two parties establish a shared secret over an insecure channel for use in subsequent encrypted communication.

- ### Semantic Classification
  - owl-class:: cryptography:KeyExchange
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Cryptographic Protocol]]
  - requires:: [[Cryptography]]
  - enables:: [[Symmetric Encryption]]

- ### Content
  - Key exchange protocols allow two parties to agree on a shared key without transmitting the key itself. The Diffie-Hellman protocol does this using modular exponentiation, and elliptic curve variants achieve the same with smaller keys.
  - The agreed key is typically used for symmetric encryption of the session. Authenticated key exchange combines this with identity verification to resist interception by an active attacker.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z