public:: true

# Verification Method
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:verification-method", "@type":"Page", "title":"Verification Method", "vc:slug":"verification-method", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:verification-method",
  "@type": "Class",
  "label": "Verification Method",
  "definition": "A verification method is an entry in a decentralised identifier document that specifies the cryptographic material and parameters used to authenticate or authorise actions on behalf of the identifier subject. It typically expresses a public key, key type and controller, and is referenced by verification relationships such as authentication, assertion and key agreement. Verification methods are the mechanism by which proofs presented by a subject are checked against the published DID document.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:did-document",
      "label": "DID Document"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key",
        "label": "Cryptographic Key"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-key",
        "label": "Cryptographic Key"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:verification",
        "label": "Verification"
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
- A verification method is a [[DID Document]] entry declaring the [[Cryptographic Key]] material used to authenticate a subject. It carries a [[Public Key]] and is referenced by relationships such as [[Authentication]] to validate a [[Digital Signature]].
- ### Overview
- Decentralised identifiers separate the identifier from the keys that control it; verification methods are the named, published bindings between the two.
- A DID document can list multiple verification methods, each with a distinct key type and purpose, allowing rotation and separation of authentication from assertion or key agreement.
- Verifiers resolve the DID, retrieve the relevant verification method and check a presented proof against the declared key material.
- ### Mechanisms
- Key declaration: public key, key type and controller embedded in the DID document.
- Verification relationships: authentication, assertionMethod, keyAgreement and others reference methods by id.
- Proof checking: signatures and credential proofs validated against the referenced key.
- Rotation: outdated methods removed and replaced without changing the identifier.
- ### Applications
- Authenticating control of a decentralised identifier.
- Verifying verifiable credentials and presentations.
- Establishing secure channels via key agreement.
- ### Relationships
- partOf:: [[DID Document]]
- hasPart:: [[Public Key]]
- hasPart:: [[Cryptographic Key]]
- requires:: [[Cryptographic Key]]
- requires:: [[Key Management]]
- implements:: [[Authentication]]
- enables:: [[Credential Verification]]
- enables:: [[Identity Verification]]
- uses:: [[Digital Signature]]
- uses:: [[Cryptographic Proof]]
- supports:: [[Verifiable Credential]]
- dependsOn:: [[Self-Sovereign Identity]]
- standardizedBy:: [[Decentralized Identifier]]
- relatedTo:: [[Zero-Knowledge Proof]]
- relatedTo:: [[Verification]]
- ### Provenance
- updated:: 2026-06-15
