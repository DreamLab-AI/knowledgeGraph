- ### Definition
  - A ring signature is a digital signature produced by one member of a group such that verifiers learn the signature came from the group but cannot identify which member signed. It provides signer anonymity within an ad hoc set.

- ### Semantic Classification
  - owl-class:: cryptography:RingSignature
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - requires:: [[Cryptography]]
  - enables:: [[Pseudonymity]]

- ### Content
  - A ring signature lets a signer combine their own key with the public keys of others to form a ring, producing a signature that any verifier can check as valid for the ring without learning the actual signer. No setup or cooperation from the other members is required.
  - The construction provides anonymity and is used in privacy-focused cryptocurrencies such as Monero to obscure which input authorises a transaction. It is one of several cryptographic tools for unlinkability alongside zero-knowledge proofs and mixing techniques.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z