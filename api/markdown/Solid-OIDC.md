public:: true

# Solid-OIDC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:solid-oidc",
  "@type": "Page",
  "vc:slug": "solid-oidc",
  "title": "Solid-OIDC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:solid-oidc",
  "@type": "Class",
  "label": "Solid-OIDC",
  "definition": "Solid-OIDC is the authentication specification for the Solid ecosystem, extending OpenID Connect with decentralised identity so a user authenticates with their own WebID and identity provider rather than a centralised platform. It issues DPoP-bound access tokens that resource servers (Solid Pods) verify, enabling a user to control which applications access their personal data store. It is the identity layer that makes Solid's separation of identity, data, and application possible.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:authentication", "label": "Authentication"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:solid", "label": "Solid"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Solid-OIDC is the [[Authentication]] specification of the Solid ecosystem, layering decentralised WebID-based identity over OpenID Connect so users sign in with their own identity provider instead of a platform account.
- ### Content
  - It issues DPoP-bound access tokens that Solid Pods verify, letting users grant or revoke application access to their personal data stores. As a core component of [[Solid]], it realises the architecture's separation of [[Digital Identity]], data storage, and application logic, ensuring that authentication does not bind a user to any single vendor.
