- ### Definition
  - The W3C specification that defines a standard data model and format for expressing cryptographically verifiable claims about subjects, enabling portable, privacy-preserving digital credentials for identity and attribute verification.

- ### Semantic Classification
  - owl-class:: spatial-computing:VerifiableCredentialStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Standards]]
  - **requires**: [[Decentralized Identifiers]], [[Cryptography]] — DIDs provide the subject identifier and cryptographic proofs authenticate the credential
  - **enables**: [[Identity Verification]], [[Digital Identity]] — VCs are the primary mechanism for portable, privacy-preserving identity claims
  - **standardizedBy**: [[Standards]] — the W3C VC Data Model 1.1 is the normative specification
  - **relatedTo**: [[Digital Signature]], [[Interoperability Standard]] — credentials rely on signature schemes and enable cross-platform identity interoperability

- ### Content

  - ## Overview
  - The W3C Verifiable Credentials Data Model defines a standard way to express credentials that are cryptographically verifiable, privacy-respecting, and machine-readable. This enables interoperable digital identity across metaverse platforms.
  - ## Technical Details
  - ### Core Components
		- **Credential Subject**: Entity the credential is about
		- **Issuer**: Entity that creates and signs the credential
		- **Claim**: Assertion about the subject
		- **Proof**: Cryptographic verification mechanism
  - ### Key Standards
		- **W3C VC Data Model 1.1**: Core specification (2022)
		- **W3C DID Core**: Decentralized Identifier specification
		- **JSON-LD**: Linked data serialization format
		- **JWT-VC**: JSON Web Token encoding
  - ### Verification Process
		- Check cryptographic signature validity
		- Verify issuer DID resolution
		- Confirm credential not revoked
		- Validate credential schema conformance
  - ## Applications
  - Metaverse identity verification
  - Age and access control credentials
  - Educational and professional certifications
  - Event tickets and memberships
  - Digital asset provenance attestations

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z