- ### Definition
  - A defined sequence of exchanges through which one party proves its identity to another over a communication channel.

- ### Semantic Classification
  - owl-class:: cryptographic:AuthenticationProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Protocol]]
  - bridges-to:: [[OAuth]]
  - requires:: [[Cryptography]], [[Authentication]]
  - enables:: [[Access Control]], [[Multi-Factor Authentication]]

- ### Content
  - An authentication protocol specifies the messages and cryptographic operations by which a claimant demonstrates possession of a credential to a verifier. Protocols may use shared secrets, public key cryptography or challenge-response mechanisms.
  - Well-designed protocols resist replay, interception and impersonation. Examples in use include those underpinning network access, web sessions and federated sign-on, with public key based schemes increasingly favoured for phishing resistance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z