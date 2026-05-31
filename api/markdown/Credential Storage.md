public:: true

# Credential Storage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:credential-storage",
  "@type": "Page",
  "vc:slug": "credential-storage",
  "title": "Credential Storage",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-storage",
  "@type": "Class",
  "label": "Credential Storage",
  "definition": "Credential storage is the secure persistence of authentication secrets and verifiable credentials—such as passwords, keys, tokens, and signed attestations—so they can be protected at rest and retrieved for verification. It employs encryption, hardware-backed enclaves, and access controls to resist theft and tampering. It is a required capability of any digital identity management system.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-identity-management", "label": "Digital Identity Management"}, {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Credential storage is the protected persistence of secrets and verifiable credentials at rest for later retrieval and verification. It is a requirement of [[Digital Identity Management]] and underpins reliable [[Digital Identity]] systems.
- ### Content
  - Robust storage layers credentials behind encryption, key-management hierarchies, and hardware security modules or secure enclaves, with strict access policies and audit logging. Design trade-offs balance recoverability against breach resistance, and increasingly favour user-held or device-bound storage over centralised credential databases.
