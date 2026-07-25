public:: true

# Portable Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:portable-identity",
  "@type": "Page",
  "vc:slug": "portable-identity",
  "title": "Portable Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:portable-identity",
  "@type": "Class",
  "label": "Portable Identity",
  "definition": "Portable identity is the property of a digital identity that allows it to be carried by its owner across services, platforms, and trust domains without being locked to any single provider. It relies on user-held credentials and identifiers that any relying party can verify cryptographically. Portability is a core goal of decentralised and self-sovereign identity systems.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Portable identity lets users carry their identity and credentials across services without provider lock-in. It is enabled by [[Self-Sovereign Identity]] models and [[Decentralized Identifiers]] that anchor user-controlled, verifiable identity data.
- ### Content
  - Portability is achieved by storing identifiers and verifiable credentials in user-controlled wallets rather than centralised account silos. Relying parties verify credentials against decentralised resolution methods (e.g. DID documents), enabling cross-platform login, reusable KYC, and reduced re-onboarding friction while keeping the user in control of disclosure.
