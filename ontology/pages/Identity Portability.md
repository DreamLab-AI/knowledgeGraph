public:: true

# Identity Portability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:identity-portability",
  "@type": "Page",
  "vc:slug": "identity-portability",
  "title": "Identity Portability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-portability",
  "@type": "Class",
  "label": "Identity Portability",
  "definition": "Identity portability is the capacity for a user to move their digital identity, credentials, and associated reputation across platforms, services, or virtual worlds without re-establishing them from scratch. It relies on interoperable identity standards and user-controlled wallets so that authentication and verified attributes remain valid across boundaries. Portability is a cornerstone of self-sovereign identity and an open metaverse.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:avatar-interoperability", "label": "Avatar Interoperability"}],
    "relatedTo": [{"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Identity portability lets users carry credentials and reputation between platforms, building on a [[Credential Format Standard]] and enabling [[Avatar Interoperability]] across virtual worlds.
- ### Content
  - Portability depends on decentralised identifiers, verifiable credentials, and wallets that the user rather than a platform controls. By decoupling identity from any single provider it reduces lock-in and lets verified attributes such as age, membership, or ownership travel with the user across the open web and immersive environments.
