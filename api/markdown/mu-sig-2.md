- ### Definition
  - A two-round multi-signature scheme based on Schnorr signatures that lets several signers produce a single aggregate signature verifiable as one key.

- ### Semantic Classification
  - owl-class:: cryptographic:MuSig2
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Multisignature]]
  - bridges-to:: [[Schnorr Signature]]
  - requires:: [[Schnorr Signatures]]
  - enables:: [[Taproot]]

- ### Content
  - MuSig2 aggregates the keys and signatures of multiple participants into one Schnorr signature that verifies against a single combined public key. It completes signing in two communication rounds while resisting known attacks on naive aggregation.
  - Because the result looks like an ordinary single-key signature, a multi-party arrangement is indistinguishable on-chain from one signer. This improves privacy and reduces verification cost, and it fits naturally with the Taproot upgrade.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z