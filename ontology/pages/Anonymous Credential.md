public:: true

# Anonymous Credential
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:anonymous-credential", "@type":"Page", "title":"Anonymous Credential", "vc:slug":"anonymous-credential", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anonymous-credential",
  "@type": "Class",
  "label": "Anonymous Credential",
  "definition": "An anonymous credential is a cryptographic attestation that lets a holder prove possession of certified attributes to a verifier without revealing their identity or allowing their presentations to be linked. Built on techniques such as blind signatures and zero-knowledge proofs, it supports selective disclosure of individual attributes while keeping the rest private. Anonymous credentials are a core privacy-enhancing primitive for authentication and access control.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:unlinkability",
        "label": "Unlinkability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-primitive",
        "label": "Cryptographic Primitive"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - An anonymous credential is a [[Cryptographic Primitive]] that proves certified attributes without revealing the holder's identity.
  - It enables [[Selective Disclosure]] of individual attributes and [[Unlinkability]] across presentations.
  - It is a foundational privacy-enhancing technology supporting [[Privacy]] in authentication.
- ### Overview
  - Issuers certify attributes to a holder; the holder later proves statements about those attributes to verifiers without exposing the underlying certificate.
  - Constructions typically combine blind or randomisable signatures (such as CL, BBS, or BBS+ signatures) with [[Zero-Knowledge Proof]] techniques.
  - Unlinkability ensures that multiple uses of the same credential cannot be correlated, and selective disclosure reveals only the attributes a context requires.
  - Optional accountability features, such as revocation and conditional de-anonymisation, balance privacy against abuse prevention.
- ### Mechanisms
  - Issuance: an issuer blind-signs the holder's attributes, producing a credential the issuer never sees in full.
  - Presentation: the holder generates a zero-knowledge proof attesting to a predicate over the attributes.
  - Selective disclosure: only chosen attributes (or derived predicates such as age over 18) are revealed.
  - Revocation: accumulators or status lists let verifiers check that a credential is still valid without identifying the holder.
- ### Applications
  - Privacy-preserving login and access control without trackable identifiers.
  - Age or eligibility verification revealing only the necessary predicate.
  - Self-sovereign and decentralised identity wallets issuing and presenting credentials.
- ### Relationships
  - enables:: [[Selective Disclosure]]
  - enables:: [[Unlinkability]]
  - contrastsWith:: [[Digital Identity]]
  - uses:: [[Zero-Knowledge Proof]]
  - supports:: [[Privacy]]
  - supports:: [[Pseudonymity]]
  - implements:: [[Verifiable Credential]]
  - requires:: [[Cryptographic Primitive]]
  - relatedTo:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Verifiable Credential]]
  - bridgesTo:: [[Self-Sovereign Identity]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
