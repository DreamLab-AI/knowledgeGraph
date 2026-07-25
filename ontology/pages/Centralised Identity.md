public:: true

# Centralised Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:centralised-identity",
  "@type": "Page",
  "title": "Centralised Identity",
  "vc:slug": "centralised-identity",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:centralised-identity",
  "@type": "Class",
  "label": "Centralised Identity",
  "definition": "Centralised identity is a digital identity model in which a single authority — such as a government, enterprise, or platform identity provider — issues, stores, and controls users' identity credentials and authenticates them on behalf of relying parties. Users authenticate against the central provider, which holds the authoritative record of their attributes and mediates access to connected services. The model is operationally simple and widely deployed, but concentrates control, data, and risk in one party, creating single points of failure, surveillance potential, and vendor lock-in that decentralised and self-sovereign identity approaches are designed to counter.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:centralized-identity",
      "label": "Centralized Identity"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Centralised identity is a digital identity model in which a single [[Identity Provider]] issues, stores, and controls user credentials and performs [[Authentication]] on behalf of relying parties. It typically delivers [[Single Sign-On]] and [[Access Control]] through protocols such as [[OAuth]] and OpenID Connect. It is a long-established form of [[Identity Management]] and stands in deliberate contrast to [[Decentralised Identity]] and [[Self-Sovereign Identity]] models that return control to the user.

- ### Overview
  - Centralised identity is the dominant model on the consumer and enterprise web, exemplified by corporate directories, government identity systems, and social login from large platforms.
  - A single authority maintains the authoritative account record and mediates every authentication, simplifying administration and account recovery.
  - The model underpins federated arrangements where a central provider vouches for a user across many relying parties, reducing credential sprawl.
  - Its concentration of control is also its principal weakness: breaches, outages, censorship, and surveillance all scale with the centrality of the provider.

- ### Key aspects
  - #### Provider control
    - The [[Identity Provider]] owns the credential lifecycle — issuance, rotation, suspension, and revocation — and holds the canonical attribute store.
  - #### Authentication flow
    - Users prove identity to the central provider, which then issues tokens or assertions consumed by relying parties via [[OAuth]]/OIDC or SAML.
  - #### Single sign-on
    - One authentication grants access to many connected services, the chief usability advantage of the centralised model.
  - #### Trust concentration
    - All relying parties extend trust to one authority, making it both a convenience and a single point of failure.

- ### Mechanisms
  - #### Directory and account store
    - A central directory (e.g. an enterprise IdP or platform account system) holds identities, groups, and entitlements feeding [[Access Control]].
  - #### Token issuance
    - On successful [[Authentication]] the provider mints signed assertions that relying parties validate without contacting the user store directly.
  - #### Federation
    - Trust agreements let the central provider extend [[Federated Identity]] across organisational boundaries.

- ### Applications
  - **Enterprise SSO** — corporate identity providers grant employees one credential across internal and SaaS applications.
  - **Social login** — large platforms act as central providers for third-party sites via OAuth/OIDC.
  - **Government digital identity** — national identity schemes centrally issue and verify citizen credentials for public services.
  - **Consumer platform accounts** — a single platform account governs access to its ecosystem of services.
  - **Comparison baseline** — centralised identity is the reference point against which [[Verifiable Credentials]] and decentralised models articulate their privacy and resilience benefits.

- ### Relationships
  - hasPart:: [[Identity Provider]]
  - hasPart:: [[Authentication]]
  - uses:: [[Single Sign-On]]
  - uses:: [[OAuth]]
  - uses:: [[Access Control]]
  - enables:: [[Federated Identity]]
  - requires:: [[Identity Provider]]
  - contrastsWith:: [[Decentralised Identity]]
  - contrastsWith:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Identity Management]]
  - supports:: [[Access Control]]
  - bridgesTo:: [[Verifiable Credentials]]
  - dependsOn:: [[Authentication]]

- ### Provenance
  - sources:: NIST SP 800-63 Digital Identity Guidelines; OpenID Connect Core specification; W3C Decentralized Identifiers (DID) context for contrast
  - updated:: 2026-06-15
