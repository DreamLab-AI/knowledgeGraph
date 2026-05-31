- ### Definition
  - A digital signature scheme based on the discrete logarithm problem, producing compact signatures with linear key and signature aggregation properties.

- ### Semantic Classification
  - owl-class:: cryptographic:SchnorrSignatures
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Signature]]
  - bridges-to:: [[Schnorr Signature]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[MuSig2]], [[Taproot]]

- ### Content
  - Schnorr signatures derive their security from the hardness of the discrete logarithm problem over an elliptic curve group. They produce a fixed-size signature consisting of a commitment value and a response scalar, and verification checks a single group equation.
  - A defining property is linearity, which permits signatures and public keys to be added together. This supports key aggregation and multi-signature constructions such as MuSig2, and underpins the signature scheme standardised in Bitcoin through BIP-340 and the Taproot upgrade.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z