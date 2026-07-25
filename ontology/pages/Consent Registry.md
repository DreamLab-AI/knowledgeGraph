public:: true

# Consent Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:consent-registry",
  "@type": "Page",
  "vc:slug": "consent-registry",
  "title": "Consent Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:consent-registry",
  "@type": "Class",
  "label": "Consent Registry",
  "definition": "A consent registry is a system of record that stores, versions, and serves the consent decisions data subjects have granted or withdrawn for processing their personal data. It provides an auditable, queryable source of truth that data controllers and processors consult before performing a processing activity. It is a central component of privacy-compliance and consent-management architectures.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:consent-management", "label": "Consent Management"}, {"@id": "urn:ngm:class:user-consent-token", "label": "User Consent Token"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A consent registry is the auditable system of record for granted and withdrawn consent, forming the core of [[Consent Management]] and validating each [[User Consent Token]].
- ### Content
  - The registry records purpose, scope, timestamp, and version of each consent event, supporting withdrawal, expiry, and proof-of-consent queries demanded by regulations such as GDPR. Downstream services check the registry before processing, and consent tokens or receipts can reference registry entries to bind a transaction to a verified permission.
