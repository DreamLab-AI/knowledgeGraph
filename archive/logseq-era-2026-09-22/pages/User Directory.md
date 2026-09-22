public:: true

# User Directory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:user-directory",
  "@type": "Page",
  "vc:slug": "user-directory",
  "title": "User Directory",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-directory",
  "@type": "Class",
  "label": "User Directory",
  "definition": "A user directory is a centralised repository that stores and organises identity records, attributes and credentials for the principals of a system, supporting authentication and authorisation queries. Common implementations include LDAP directories, Active Directory and cloud identity stores, which identity providers consume to validate and describe users. It is a core component of identity and access management infrastructure.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:identity-provider", "label": "Identity Provider"}, {"@id": "urn:ngm:class:identity-provider-id-p", "label": "Identity Provider (IdP)"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A user directory stores identity records and attributes that an [[Identity Provider]] queries to authenticate principals, forming a foundational part of an [[Identity Provider (IdP)]].
- ### Content
  - Directories expose standard query protocols such as LDAP and SCIM, manage group membership and policy attributes, and synchronise across federated systems. They underpin single sign-on, role-based access control and lifecycle provisioning of accounts.
