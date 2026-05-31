- ### Definition
  - A standardised digital certificate format that binds a public key to an identity and is signed by a certificate authority within a public key infrastructure.

- ### Semantic Classification
  - owl-class:: cryptographic:X509Certificate
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Certificate]]
  - bridges-to:: [[Digital Signature]]
  - requires:: [[Public Key Infrastructure]], [[Certificate Authority]]
  - enables:: [[Authentication]], [[Transport Layer Security]]

- ### Content
  - An X.509 certificate is a structured data record that associates a public key with a subject identity, together with metadata such as validity period and intended usage. It is signed by a trusted certificate authority so that relying parties can verify its authenticity.
  - The format is foundational to public key infrastructure and is used in Transport Layer Security, secure email and code signing. Certificate chains link an end-entity certificate to a trusted root through one or more intermediate authorities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z