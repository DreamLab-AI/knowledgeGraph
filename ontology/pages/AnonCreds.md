public:: true

# AnonCreds
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:anon-creds",
  "@type": "Page",
  "vc:slug": "anon-creds",
  "title": "AnonCreds",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anon-creds",
  "@type": "Class",
  "label": "AnonCreds",
  "definition": "AnonCreds (Anonymous Credentials) is a verifiable credential format and specification originally developed by the Hyperledger Indy project that enables privacy-preserving identity verification. The scheme allows holders to prove possession of credentials without revealing the credential itself or the issuer's signature, using zero-knowledge proofs. AnonCreds supports selective disclosure, letting a holder share only specific attributes, and predicates that prove a claim (e.g. age over 18) without revealing the underlying value. The specification has been standardised via the AnonCreds Working Group under the Decentralized Identity Foundation.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:selective-disclosure", "label": "Selective Disclosure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"},
      {"@id": "urn:ngm:class:credential-schema", "label": "Credential Schema"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-technology", "label": "Privacy Preserving Technology"},
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - AnonCreds is a [[Credential Format Standard]] that uses [[Zero-Knowledge Proof]] cryptography to enable [[Selective Disclosure]] of identity attributes, allowing verifiers to confirm claims without learning unnecessary personal data.

- ### Relationships
  - AnonCreds sits within the broader [[Decentralised Identity]] ecosystem and is typically stored in a [[Digital Identity Wallet]]. It relies upon [[Zero-Knowledge Proof]] and [[Zero-Knowledge Proof (ZKP)]] primitives to generate unlinkable presentations, and interacts closely with [[Credential Schema]] definitions that describe which attributes a credential may contain. The approach underpins [[Privacy Preserving Technology]] deployments and contributes to the goals of [[Differential Privacy]] at the application layer, while providing a concrete mechanism for [[Authentication]] without password-based secrets.

- ### Content
  - AnonCreds emerged from the Hyperledger Indy project, which was designed to provide a public, permissioned ledger for decentralised identity. The credential format was purpose-built to address a key weakness in conventional verifiable credentials: when a holder presents a signed credential, the verifier can correlate that presentation with others made using the same signature, enabling tracking. AnonCreds resolves this through a cryptographic technique that derives a fresh, unlinkable proof for every presentation event.

  - The technical foundation rests on Camenisch-Lysyanskaya (CL) signatures, which support zero-knowledge proofs of possession. When an issuer grants a credential, the holder receives a CL-signed set of attributes. During a presentation, the holder uses a cryptographic blinding factor to generate a proof that satisfies the verifier's request without exposing the original signature or any attributes beyond those explicitly disclosed. Predicate proofs allow statements such as "this person's birth year is before 2006" to be proved without revealing the exact birth year.

  - The AnonCreds v1 specification was informally maintained as part of Hyperledger Aries, but in 2022 the AnonCreds Working Group at the Decentralized Identity Foundation took ownership of producing a formal, ledger-agnostic v2 specification. AnonCreds v2 is designed to support multiple signature schemes including BBS+ signatures, which offer better performance and compatibility with W3C Verifiable Credentials Data Model standards.

  - Practical deployments of AnonCreds include national identity pilots in several European countries, healthcare credentialing schemes, and workforce accreditation systems. The combination of selective disclosure and predicate proofs makes it particularly valuable in regulated sectors where minimum necessary disclosure is a legal requirement under frameworks such as GDPR. Integration with [[Digital Identity Wallet]] platforms is a current focus of standards development.

  - Challenges for AnonCreds include the computational overhead of CL signature proofs relative to simpler signature schemes, and the need for revocation mechanisms that do not compromise unlinkability. Cryptographic accumulators are typically used for revocation, allowing a verifier to check that a credential has not been revoked without learning which specific credential is being checked.
