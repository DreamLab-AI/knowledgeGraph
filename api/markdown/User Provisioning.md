public:: true

# User Provisioning

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:user-provisioning",
  "@type": "Page",
  "title": "User Provisioning",
  "vc:slug": "user-provisioning",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-provisioning",
  "@type": "Class",
  "label": "User Provisioning",
  "definition": "User provisioning is the identity-and-access-management process of creating, configuring, maintaining and eventually removing user accounts and their associated access entitlements across systems and applications. It encompasses the full account lifecycle — from initial onboarding through entitlement changes to deprovisioning at offboarding — and is increasingly automated through directory services and standards such as SCIM. Effective provisioning ensures that each identity holds exactly the access required, supporting least-privilege and timely revocation.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-and-access-management",
      "label": "Identity and Access Management"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:lifecycle-management",
        "label": "Lifecycle Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:role-based-access-control",
        "label": "Role-Based Access Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Service"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:scim",
        "label": "SCIM"
      },
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Service"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:scim",
        "label": "SCIM"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-federation",
        "label": "Identity Federation"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
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
  - [[Identity and Access Management]]
  - [[Access Control]]
  - [[Authentication]]
  - [[SCIM]]
  - User Provisioning is defined within the [[Identity and Access Management]] area of the security domain.
- ### Overview
  - User provisioning sits at the operational core of identity governance: it translates organisational roles, joiner-mover-leaver events and policy into concrete account states. Modern implementations push provisioning toward automation, where a change in an authoritative source (for example an HR system) cascades to downstream applications through connectors or the SCIM protocol, eliminating manual account creation and the orphaned accounts that follow inconsistent offboarding.
- ### Key aspects
  - Account lifecycle: creation, modification, suspension and deletion tracked against an authoritative source of identity.
  - Entitlement assignment driven by role-based access control so that access derives from job function rather than ad-hoc grants.
  - Deprovisioning discipline that revokes access promptly at offboarding to close the orphaned-account attack surface.
  - Standardisation through SCIM, enabling consistent cross-application provisioning over a common schema and REST API.
  - Auditability so that every grant and revocation is logged for compliance review.
- ### Applications
  - Enterprise onboarding workflows that grant new employees their full toolset on day one.
  - Contractor and partner access with time-bounded, automatically expiring entitlements.
  - Cloud SaaS administration where SCIM connectors keep application directories in sync with the identity provider.
  - Regulated environments requiring demonstrable least-privilege and timely revocation.
- ### Relationships
  - subClassOf:: [[Identity and Access Management]]
  - partOf:: [[Identity and Access Management]]
  - partOf:: [[Lifecycle Management]]
  - supports:: [[Access Control]]
  - supports:: [[Authorization]]
  - supports:: [[Compliance]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Role-Based Access Control]]
  - requires:: [[Authentication]]
  - requires:: [[Directory Service]]
  - uses:: [[SCIM]]
  - uses:: [[Directory Service]]
  - dependsOn:: [[Identity Verification]]
  - standardizedBy:: [[SCIM]]
  - relatedTo:: [[Identity Federation]]
  - relatedTo:: [[Audit Trail]]
  - contrastsWith:: [[Access Control]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
