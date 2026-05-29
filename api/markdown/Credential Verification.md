public:: true

# Credential Verification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:credential-verification",
  "@type": "Page",
  "vc:slug": "credential-verification",
  "title": "Credential Verification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-verification",
  "@type": "Class",
  "label": "Credential Verification",
  "definition": "Credential verification is the process of cryptographically or institutionally confirming the authenticity, integrity, and validity of a credential — such as a digital certificate, verifiable credential, or identity assertion — issued by a trusted authority to a subject, so that a relying party can grant access or trust without contacting the original issuer. In decentralised identity systems it relies on public-key cryptography and distributed ledgers to enable privacy-preserving, tamper-evident verification. The process must also check revocation status to ensure credentials that have been invalidated cannot be fraudulently reused.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:authentication", "label": "Authentication"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"},
      {"@id": "urn:ngm:class:credential-schema", "label": "Credential Schema"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"},
      {"@id": "urn:ngm:class:cryptographic-signature", "label": "Cryptographic Signature"},
      {"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:digital-identity-management", "label": "Digital Identity Management"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Credential Verification]] is the cryptographic or institutional process of confirming that a credential presented by a subject is authentic, unaltered, and currently valid, using [[Cryptographic Verification]] and [[Cryptographic Signature]] techniques, enabling a relying party to grant [[Access Control]] without real-time contact with the issuer.

- ### Relationships
  - [[Credential Verification]] is a specialisation of [[Authentication]] that focuses on asserting properties about a subject through claims made by a trusted issuer rather than secrets the subject holds. It depends on [[Cryptographic Signature]] schemes and [[Cryptographic Verification]] algorithms to provide tamper evidence, and on [[Decentralized Identity (DID)]] infrastructure to resolve issuer keys in a decentralised trust model. The [[Credential Schema]] constrains the semantics of what is being verified. Successful verification gates [[Access Control]] decisions and feeds into [[Digital Identity Management]] workflows.

- ### Content
  - Credential verification is as old as written documentation — kings' seals and notarised instruments served this purpose for centuries. Digital equivalents began with X.509 public-key certificates in the 1990s, which underpinned SSL/TLS and became the backbone of internet trust. These centralised, hierarchy-based systems worked well for web servers but proved cumbersome for personal identity use cases where individuals needed to selectively disclose attributes without revealing unnecessary information.

  - Modern credential verification follows a three-party model: an issuer signs a structured credential (e.g., a W3C Verifiable Credential) about a subject using a private key; the subject presents the credential (possibly after deriving a zero-knowledge proof to avoid full disclosure); the verifier checks the cryptographic signature against the issuer's public key, validates the credential schema, and queries a revocation registry (on-chain or via OCSP/CRL) to confirm the credential has not been revoked. Selective disclosure schemes allow subjects to prove specific attributes — "I am over 18" — without revealing their full date of birth.

  - The practical significance of robust credential verification spans professional licensing, academic qualification checking, age-gating of services, cross-border identity for travel, healthcare record access, and decentralised finance KYC compliance. Self-sovereign identity architectures that leverage DIDs aim to return control of credential presentation to individuals, reducing reliance on centralised identity providers who aggregate personal data.

  - Between 2024 and 2025 the EU Digital Identity Wallet (EUDI) has driven significant standardisation around OpenID4VC and SD-JWT formats, bringing verifiable credentials into mainstream government services. AI-powered forgery detection augments cryptographic verification for documents that lack digital signatures, while mobile driving licences (mDL, ISO 18013-5) demonstrate mass-market deployment of device-bound credential verification.