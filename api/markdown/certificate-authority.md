- ### Definition
  - A Certificate Authority (CA) is a trusted third-party organisation that issues, signs, and manages the lifecycle of X.509 digital certificates, cryptographically binding a public key to an entity's verified identity. CAs operate within a hierarchical Public Key Infrastructure (PKI) where root CAs sign intermediate CAs, which in turn issue end-entity certificates for servers, users, or devices. The CA's signing operations underpin the TLS handshake, code-signing pipelines, S/MIME email encryption, and document signing workflows across the internet.

- ### Semantic Classification
  - owl-class:: certificate-authority:Certificate Authority
  - owl-role:: Concept

- ### Relationships
  - enables [[Digital Certificate]]
  - enables [[Encryption]]
  - requires [[Cryptography]]
  - requires [[Digital Signature]]
  - supports [[Authentication]]
  - supports [[Identity Management]]

- ### Content
  - A Certificate Authority operates as the foundational trust anchor within a PKI hierarchy. Root CA certificates are distributed out-of-band, embedded in operating systems and browser trust stores, giving them implicit trust. Intermediate CAs are signed by the root and can in turn sign end-entity certificates, limiting exposure of the root private key. The X.509 standard, defined in ITU-T recommendation X.509 and profiled for the internet by RFC 5280, specifies the certificate structure including subject, issuer, validity period, public key, and extensions such as Subject Alternative Names and Key Usage constraints.
  - Certificate revocation is handled via Certificate Revocation Lists (CRLs) or the Online Certificate Status Protocol (OCSP), allowing a CA to invalidate a certificate before its stated expiry. The CA/Browser Forum Baseline Requirements govern public trust CAs and impose policies on domain validation (DV), organisation validation (OV), and extended validation (EV) issuance procedures. Let's Encrypt, operated by the Internet Security Research Group, popularised automated certificate issuance and renewal via the ACME protocol, dramatically lowering the barrier to HTTPS deployment.
  - Beyond web TLS, CAs are integral to Decentralised Identity systems, code signing for software supply chains, smart card authentication (e.g., PIV), and mutual TLS (mTLS) in service meshes. The concept of Cryptography underpinning CA operations includes asymmetric key pairs (RSA, ECDSA, EdDSA) and hash algorithms (SHA-256, SHA-384) for the signing operations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z