- ### Definition
  - The Identity Layer is the cross-cutting stratum that establishes, represents, and verifies the identities of participants and resources. It sits above the Cryptographic Layer, on which its proofs rest, and below access, policy, and governance strata that reason about who is acting. It contains identifiers, credentials, authentication mechanisms, and the bindings between them.

- ### Semantic Classification
  - owl-class:: id:IdentityLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Public Key Infrastructure]], [[Decentralised Identifiers]]
  - requires:: [[Cryptographic Layer]], [[Identifier Layer]]
  - enables:: [[Policy Layer]], [[Custody Layer]]

- ### Content
  - The Identity Layer answers who or what is making a request and how confident the system can be in that claim. Typical members include credential issuance, authentication protocols, key-to-subject bindings, and revocation mechanisms. It produces verified subjects that other layers can reference in their rules.
  - It requires the Cryptographic Layer for the signatures and proofs that make claims verifiable and the Identifier Layer for the names those claims attach to. It enables the Policy Layer, which scopes permissions to identities, and the Custody Layer, which binds control of assets to verified principals.
  - The layer bridges to public key infrastructure and decentralised identifiers, models that govern how trust in an identity is rooted and propagated. Authentication strength set here bounds the assurance of every authorisation decision above.

- ### Provenance
  - sources:: [[W3C (World Wide Web Consortium)]]
  - migration-date:: 2026-05-29T00:00:00Z