public:: true

# Digital Onboarding

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:digital-onboarding", "@type": "Page", "title": "Digital Onboarding", "vc:slug": "digital-onboarding", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-onboarding",
  "@type": "Class",
  "label": "Digital Onboarding",
  "definition": "Digital onboarding is the remote, self-service process by which an organisation enrols a new customer or user, capturing and verifying their identity entirely through digital channels rather than in person. It typically combines document capture, biometric checks, liveness detection and database lookups to satisfy regulatory know-your-customer obligations while minimising friction. The aim is to convert a prospect into a verified, account-holding user quickly and securely.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-verification",
      "label": "Identity Verification"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:kyc",
        "label": "KYC"
      },
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
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
  - Digital onboarding is the remote, self-service process by which an organisation enrols a new customer or user, capturing and verifying their identity entirely through digital channels rather than in person. It typically combines document capture, biometric checks, liveness detection and database lookups to satisfy regulatory know-your-customer obligations while minimising friction. The aim is to convert a prospect into a verified, account-holding user quickly and securely.
  - Related concepts: [[Identity Verification]], [[KYC]], [[Biometric Authentication]], [[Authentication]], [[Digital Identity]], [[Anti-Money Laundering]]
- ### Overview
  - Digital onboarding emerged as financial services, telecoms and other regulated sectors moved customer acquisition online. It compresses what was once an in-branch, paper-driven ritual into a guided mobile or web flow, balancing regulatory rigour against the conversion-killing friction of identity checks.
- ### Mechanisms
  - Document capture and optical character recognition of identity documents
  - Liveness detection and biometric face matching against the document portrait
  - Sanctions, politically-exposed-person and watchlist screening
  - Risk-based step-up checks for higher-value or higher-risk relationships
  - Audit logging of each verification step for regulatory evidence
- ### Applications
  - Bank and neobank account opening
  - Mobile network SIM registration
  - Crypto-exchange and brokerage enrolment
  - Gig-economy and marketplace worker verification
- ### Relationships
  - subClassOf:: [[Identity Verification]]
  - requires:: [[Identity Verification]]
  - requires:: [[KYC]]
  - requires:: [[Biometric Authentication]]
  - enables:: [[Authentication]]
  - enables:: [[Digital Identity]]
  - supports:: [[Anti-Money Laundering]]
  - supports:: [[User Experience]]
  - dependsOn:: [[Identity Verification]]
  - dependsOn:: [[Compliance]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Authentication]]
  - relatedTo:: [[Compliance]]
  - bridgesTo:: [[Self-Sovereign Identity]]
  - contrastsWith:: [[Biometric Authentication]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
