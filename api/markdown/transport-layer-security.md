- ### Definition
  - A cryptographic protocol that provides authentication, confidentiality and integrity for communications over a computer network, succeeding the earlier Secure Sockets Layer.

- ### Semantic Classification
  - owl-class:: cryptographic:TransportLayerSecurity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Protocol]]
  - bridges-to:: [[TLS]]
  - requires:: [[Public Key Infrastructure]], [[Certificate Authority]]
  - enables:: [[Encryption]], [[Authentication]]

- ### Content
  - Transport Layer Security secures data in transit by establishing an encrypted channel between communicating parties. It uses a handshake to authenticate at least one party, negotiate cryptographic parameters and derive session keys.
  - The protocol relies on public key infrastructure and X.509 certificates to bind identities to keys. It is widely used to protect web traffic, email and other application protocols, and has evolved through successive versions to remove weak algorithms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z