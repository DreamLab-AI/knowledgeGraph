public:: true

# User Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:user-control",
  "@type": "Page",
  "vc:slug": "user-control",
  "title": "User Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-control",
  "@type": "Class",
  "label": "User Control",
  "definition": "User control is the principle and set of mechanisms that give individuals meaningful authority over how their data, identity and experience are managed, including the ability to grant, review and revoke permissions. It is central to data-protection and consent frameworks, embodying user autonomy and self-determination over personal information. Strong user control is a prerequisite for trustworthy, ethically governed digital systems.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:consent-management", "label": "Consent Management"}, {"@id": "urn:ngm:class:etsi-domain-data-management-ethics", "label": "ETSI Domain Data Management Ethics"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - User control gives people authority over their data and experience, enabling [[Consent Management]] and aligning with frameworks such as [[ETSI Domain Data Management Ethics]].
- ### Content
  - Implementations expose granular permission toggles, data-access dashboards, portability and deletion rights. User control operationalises principles found in data-protection regulation, ensuring choices are informed, revocable and respected throughout the data lifecycle.
