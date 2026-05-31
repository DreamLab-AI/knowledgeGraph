public:: true

# Identity Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:identity-service",
  "@type": "Page",
  "vc:slug": "identity-service",
  "title": "Identity Service",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-service",
  "@type": "Class",
  "label": "Identity Service",
  "definition": "An identity service is a system component that manages the lifecycle of digital identities, providing authentication, authorisation, and identity data to other services within a platform architecture. It centralises functions such as user registration, credential issuance, session management, and federation so that applications can delegate trust decisions. Identity services are typically exposed via standard protocols such as OAuth 2.0, OpenID Connect, and SAML.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}],
  "relations": {
    "partOf": [{"@id": "urn:ngm:class:service-layer", "label": "Service Layer"}],
    "relatedTo": [{"@id": "urn:ngm:class:platform-layer", "label": "Platform Layer"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An identity service provides authentication and authorisation to applications, operating within the [[Service Layer]] and exposing identity capabilities to the [[Platform Layer]].
- ### Content
  - By centralising identity logic the service enables single sign-on, role- and attribute-based access control, and federation with external identity providers. It maintains the user directory, issues and validates tokens, and enforces policies, letting downstream services remain agnostic to the mechanics of identity.
