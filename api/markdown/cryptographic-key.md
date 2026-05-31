- ### Definition
  - A piece of secret or public information that parameterises a cryptographic algorithm, determining how data is encrypted, decrypted or signed. Keys are the inputs that make cryptographic operations specific and reversible only to authorised parties.

- ### Semantic Classification
  - owl-class:: cryptographic:CryptographicKey
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Private Key]], [[Key Management]]
  - requires:: [[Encryption]]
  - enables:: [[Digital Signature]], [[Public Key Infrastructure]]

- ### Content
  - A cryptographic key controls the behaviour of an algorithm so that the same operation produces different results for different keys. Symmetric schemes use one shared key for both encryption and decryption, while asymmetric schemes use a paired public and private key.
  - The security of a cryptographic system depends on the secrecy of private or symmetric keys and on sufficient key length to resist exhaustive search. Generation, storage, distribution and revocation of keys are handled by key management processes and supporting infrastructure.

- ### Provenance
  - sources:: [[https://csrc.nist.gov/glossary/term/cryptographic_key]]
  - migration-date:: 2026-05-29T00:00:00Z