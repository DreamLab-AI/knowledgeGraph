- ### Definition
  - Hash functions are algorithms that map data of arbitrary size to a fixed-size output, with cryptographic hash functions designed to be one-way and collision resistant. They are central to security and blockchains.

- ### Semantic Classification
  - owl-class:: general:HashFunctions
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Hash Function]]
  - enables:: [[Merkle Tree]], [[Transaction Validation]]

- ### Content
  - A hash function takes an input of any length and produces a fixed-length digest. Cryptographic hash functions are designed so that it is infeasible to reverse the output or to find two inputs with the same digest.
  - Hash functions underpin digital signatures, data integrity checks, password storage, and the linking of blocks in a blockchain. The SHA-256 function, for example, is used in Bitcoin's proof of work and block structure.

- ### Provenance
  - sources:: [[https://csrc.nist.gov/projects/hash-functions]], [[https://en.wikipedia.org/wiki/Cryptographic_hash_function]]
  - migration-date:: 2026-05-29T00:00:00Z