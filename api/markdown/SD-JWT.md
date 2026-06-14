public:: true

# SD-JWT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sd-jwt",
  "@type": "Page",
  "vc:slug": "sd-jwt",
  "title": "SD-JWT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sd-jwt",
  "@type": "Class",
  "label": "SD-JWT",
  "definition": "SD-JWT (Selective Disclosure JSON Web Token) is an IETF-specified extension to the JSON Web Token standard that allows an Issuer to create a signed token containing hashed claim values, from which the Holder can selectively reveal only the specific claims needed for a given presentation — without exposing other claims or enabling correlation across presentations. The mechanism uses SHA-256 salted disclosure objects appended to the base JWT; verifiers can validate revealed disclosures against the issuer signature whilst remaining blind to undisclosed claims. SD-JWT forms the primary credential format for the European Union's eIDAS 2.0 digital identity wallet system.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {"@id": "urn:ngm:class:selective-disclosure", "label": "Selective Disclosure"},
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format-web-token", "label": "JSON Web Token"},
      {"@id": "urn:ngm:class:cryptographic-proof", "label": "Cryptographic Proof"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:jose", "label": "JOSE"},
      {"@id": "urn:ngm:class:base64url-encoding", "label": "Base64url Encoding"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-identity", "label": "Privacy-Preserving Identity"},
      {"@id": "urn:ngm:class:credential-verification", "label": "Credential Verification"},
      {"@id": "urn:ngm:class:holder-binding", "label": "Holder Binding"},
      {"@id": "urn:ngm:class:minimal-disclosure", "label": "Minimal Disclosure"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:ietf-rfc", "label": "IETF RFC"},
      {"@id": "urn:ngm:class:oauth-working-group-specification", "label": "OAuth Working Group Specification"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:eidas-2-digital-identity-wallet", "label": "eIDAS 2 Digital Identity Wallet"},
      {"@id": "urn:ngm:class:open-id4-vci", "label": "OpenID4VCI"},
      {"@id": "urn:ngm:class:open-id4-vp", "label": "OpenID4VP"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:bbs-plus-signatures", "label": "BBS+ Signatures"},
      {"@id": "urn:ngm:class:iso-mdoc", "label": "ISO mdoc"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"},
      {"@id": "urn:ngm:class:w3c-verifiable-credential-data-model", "label": "W3C Verifiable Credential Data Model"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-identity-governance", "label": "Digital Identity Governance"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:selective-disclosure-json-web-token", "label": "Selective Disclosure JSON Web Token"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[SD-JWT]] is an IETF extension of the [[JSON Web Token]] standard that separates issuer signing from claim disclosure, allowing a credential Holder to present only the [[Selective Disclosure]] of specific claim values to a verifier while cryptographic hashes of undisclosed claims remain in the base token, enabling [[Privacy-Preserving Identity]] with existing JWT tooling infrastructure.

- ### Relationships
  - SD-JWT is a format-level extension that enriches the [[JSON Web Token]] standard with a selective disclosure mechanism without requiring the cryptographic complexity of full [[Zero-Knowledge Proof]] systems such as BBS+ signatures. The issuer produces a [[Cryptographic Proof]]-bearing JWT where each disclosable claim is replaced by a hash of a salted disclosure string; the holder appends only the disclosure strings for claims the verifier needs to see. This makes it directly usable with [[Verifiable Credentials]] issuance workflows, and it is the credential format natively supported by [[OpenID4VCI]] in Europe's eIDAS 2.0 wallet architecture. [[Credential Verification]] is straightforward using standard JWT libraries extended with hash-matching for disclosed claims. The [[Credential Format Standard]] ecosystem positions SD-JWT alongside ISO mdoc and W3C VCDM as the three primary formats.

- ### Content
  - The SD-JWT specification was initiated at the IETF OAuth Working Group in 2022 by Daniel Fett and Brian Campbell, motivated by a practical gap: W3C Verifiable Credentials supported selective disclosure via BBS+ signatures, but BBS+ requires new cryptographic libraries and is not universally hardware-supported, limiting deployment on constrained devices. SD-JWT reuses the ubiquitous JWT infrastructure — including JOSE (JSON Object Signing and Encryption) algorithms already supported by hardware security modules, mobile secure elements, and virtually every web framework — while adding selective disclosure through a hash-and-reveal mechanism that requires no new cryptographic primitives.

  - The mechanism works as follows: during issuance, each potentially disclosable claim is transformed into a disclosure string comprising a random salt, the claim name, and the claim value, encoded as base64url. The SHA-256 hash of this string is placed in the JWT payload under a `_sd` array. The issuer signs the JWT normally. The holder stores both the signed JWT and all disclosure strings. When presenting to a verifier, the holder appends only the disclosure strings for claims the verifier requires; the verifier recomputes the hash for each disclosure and checks it against the `_sd` array to confirm issuer signature coverage, without having any knowledge of undisclosed claims.

  - SD-JWT is the primary format specified for the European Digital Identity Wallet (EUDI Wallet) under eIDAS 2.0, covering credentials such as national identity cards, driving licences, professional qualifications, and healthcare data. It is supported in [[OpenID4VCI]] as a first-class issuance format and in [[OpenID4VP]] (OpenID for Verifiable Presentations) for presentation exchange. Major mobile operating system vendors and hardware security module vendors are adding native support, and open-source implementations in Python, Rust, Java, and TypeScript have proliferated to support the ecosystem.

  - In 2024-2025, SD-JWT VC (the binding of SD-JWT to W3C Verifiable Credential semantics) has achieved substantial standardisation momentum and is referenced in both NIST digital identity guidelines and the ARF (Architecture Reference Framework) for the EUDI Wallet. Active areas of development include key binding mechanisms that bind a credential cryptographically to the holder's device key (preventing credential sharing), and holder-binding proofs that demonstrate device possession during presentation. The specification is on track for RFC publication, after which it will transition from draft to normative standard status across the ecosystem.