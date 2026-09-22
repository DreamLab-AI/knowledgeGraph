public:: true

# Credential Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:credential-store",
  "@type": "Page",
  "vc:slug": "credential-store",
  "title": "Credential Store",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-store",
  "@type": "Class",
  "label": "Credential Store",
  "definition": "A credential store is the component within an identity system that holds user identifiers, secrets, and account attributes used during authentication. Implemented as a directory, database, or secrets vault, it is queried by an identity provider to validate sign-in attempts and issue tokens. Its integrity and confidentiality are critical to the security of the surrounding identity infrastructure.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:identity-provider", "label": "Identity Provider"}, {"@id": "urn:ngm:class:authentication", "label": "Authentication"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A credential store is the backing repository of identifiers and secrets that an [[Identity Provider]] consults to perform [[Authentication]]. It is a structural part of identity provider deployments.
- ### Content
  - Credential stores range from LDAP directories and relational user tables to dedicated secrets vaults, often hashing passwords and isolating high-value secrets. Hardening focuses on encryption at rest, least-privilege access, rotation, and replication so that the store remains both highly available and resistant to compromise.
