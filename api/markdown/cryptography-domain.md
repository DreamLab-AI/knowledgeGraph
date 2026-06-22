- ### Definition
  - The Cryptography Domain classifies concepts concerned with the mathematical and computational techniques that secure information and authenticate parties. It covers primitives (encryption, hashing, signatures), protocols built from those primitives, and the assumptions that underpin their security. As a subject classification under the Cryptographic Domain, it scopes the theory and algorithms rather than the wider security operations or governance that consume them.

- ### Semantic Classification
  - owl-class:: crypto:CryptographyDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Cryptographic Domain]]
  - bridges-to:: [[Information Security Domain]], [[Privacy Domain]], [[Blockchain Domain]]
  - has-part:: [[Public-Key Cryptography]], [[Hash Function]], [[Digital Signature]], [[Symmetric Encryption]], [[Zero-Knowledge Proof]]
  - requires:: [[Cryptographic Primitive]], [[Random Number Generation]]
  - enables:: [[Data Confidentiality]], [[Authentication]], [[Verifiable Computation]]

- ### Content
  - The Cryptography Domain organises the building blocks from which secure systems are assembled. Symmetric encryption and hash functions provide confidentiality and integrity, while public-key cryptography supports key exchange and the binding of identities to keys. Digital signatures allow a recipient to verify origin and detect tampering without sharing a secret. These primitives are selected and combined according to threat models and performance constraints.
  - Beyond classical primitives, the domain includes advanced constructions such as zero-knowledge proofs, threshold schemes, and homomorphic encryption that enable computation over protected data. Security rests on stated hardness assumptions, for example the difficulty of factoring or computing discrete logarithms, and on careful parameter selection. Standards bodies publish vetted algorithms and key lengths so that implementations can be assessed against a common baseline.
  - In knowledge-graph terms the Cryptography Domain sits beneath the Cryptographic Domain and feeds directly into blockchain, identity, and privacy work. Consensus mechanisms, addressing schemes, and tokenised assets all depend on the signatures and hashes catalogued here. Treating cryptography as a distinct subject axis keeps the underlying mathematics separable from the operational security and regulatory layers that apply it.

- ### Provenance
  - sources:: [[ISO/IEC 18033]], [[NIST FIPS 186]]
  - migration-date:: 2026-05-29T00:00:00Z