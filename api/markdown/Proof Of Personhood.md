public:: true

# Proof Of Personhood

```json
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:proof-of-personhood", "@type": "Page", "title": "Proof Of Personhood", "vc:slug": "proof-of-personhood", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proof-of-personhood",
  "@type": "Class",
  "label": "Proof Of Personhood",
  "definition": "Proof of personhood is a mechanism for establishing that a participant in a digital system is a unique, real human being without necessarily revealing their full identity. It addresses Sybil resistance by ensuring one person cannot cheaply masquerade as many, which is critical for fair voting, airdrops and universal-basic-income style distributions. Approaches range from biometric uniqueness checks to social-graph and in-person verification protocols.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
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
  - Proof of personhood is a mechanism for establishing that a participant in a digital system is a unique, real human being without necessarily revealing their full identity. It addresses Sybil resistance by ensuring one person cannot cheaply masquerade as many, which is critical for fair voting, airdrops and universal-basic-income style distributions. Approaches range from biometric uniqueness checks to social-graph and in-person verification protocols.
  - Related concepts: [[Digital Identity]], [[Self-Sovereign Identity]], [[Verifiable Credentials]], [[Biometric Authentication]], [[Identity Verification]], [[Zero-Knowledge Proof]]
- ### Overview
  - Proof of personhood has become central to decentralised governance and fair token distribution, where one-person-one-vote and Sybil resistance matter more than verifying a legal identity. Designs trade off privacy, decentralisation and resistance to collusion, often combining zero-knowledge proofs with biometric or social uniqueness signals.
- ### Mechanisms
  - Uniqueness verification ensuring one credential per human
  - Privacy-preserving proofs that reveal humanity without identity
  - Biometric, social-graph and pseudonymous-party protocol approaches
  - Sybil resistance for fair distribution and governance
- ### Applications
  - Sybil-resistant airdrops and quadratic funding
  - One-person-one-vote decentralised governance
  - Universal-basic-income token distribution
  - Bot-resistant online communities
- ### Relationships
  - subClassOf:: [[Digital Identity]]
  - partOf:: [[Digital Identity]]
  - enables:: [[Self-Sovereign Identity]]
  - enables:: [[Verifiable Credentials]]
  - requires:: [[Biometric Authentication]]
  - requires:: [[Identity Verification]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Cryptography]]
  - dependsOn:: [[Identity]]
  - implements:: [[Digital Identity]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Biometric Authentication]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - contrastsWith:: [[Authentication]]
  - bridgesTo:: [[Verifiable Credentials]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
