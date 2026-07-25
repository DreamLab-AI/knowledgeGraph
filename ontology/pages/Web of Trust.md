public:: true

# Web of Trust

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:web-of-trust",
  "@type": "Page",
  "title": "Web of Trust",
  "vc:slug": "web-of-trust",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-of-trust",
  "@type": "Class",
  "label": "Web of Trust",
  "definition": "A web of trust is a decentralised trust model in which participants vouch for the authenticity of one another's public keys by signing them, building confidence through chains of peer endorsements rather than a central authority. Trust is transitive and weighted: a key gains credibility as more trusted parties attest to it. Originating with PGP, the model contrasts with the hierarchical certificate-authority approach of public-key infrastructure.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:trust-establishment",
      "label": "Trust Establishment"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
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
    "uses": [
      {
        "@id": "urn:ngm:class:trust-anchor",
        "label": "Trust Anchor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifiers",
        "label": "Decentralised Identifiers"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      },
      {
        "@id": "urn:ngm:class:trust-establishment",
        "label": "Trust Establishment"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
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
  - A decentralised approach to [[Trust Establishment]] built from peer key endorsements.
  - Participants sign each other's keys with a [[Digital Signature]] to vouch for authenticity.
  - Contrasts with the hierarchical [[Certificate Authority]] model.
- ### Overview
  - Trust accumulates transitively as more trusted parties attest to a key.
  - There is no single point of failure or central authority to compromise.
  - PGP popularised the model for email and file signing.
  - Concepts re-emerge in decentralised identity and verifiable credentials.
- ### Mechanisms
  - Each user maintains a keyring of others' public keys.
  - Signing another's key publishes an attestation of belief in its ownership.
  - Trust levels and chain length determine computed confidence.
  - Key servers and introducers help propagate signatures.
- ### Applications
  - Authenticating PGP/GPG public keys for secure messaging.
  - Bootstrapping trust in decentralised identity systems.
  - Reputation and endorsement networks.
- ### Relationships
  - implements:: [[Digital Signature]]
  - requires:: [[Cryptographic Key]]
  - requires:: [[Key Management]]
  - uses:: [[Trust Anchor]]
  - enables:: [[Identity Verification]]
  - supports:: [[Decentralised Identity]]
  - contrastsWith:: [[Certificate Authority]]
  - bridgesTo:: [[Verifiable Credentials]]
  - bridgesTo:: [[Decentralised Identifiers]]
  - relatedTo:: [[Reputation System]]
  - relatedTo:: [[Trust Establishment]]
  - relatedTo:: [[Security]]
- ### Provenance
  - updated:: 2026-06-15
