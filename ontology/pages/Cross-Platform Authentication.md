public:: true

# Cross-Platform Authentication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-platform-authentication",
  "@type": "Page",
  "vc:slug": "cross-platform-authentication",
  "title": "Cross-Platform Authentication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-platform-authentication",
  "@type": "Class",
  "label": "Cross-Platform Authentication",
  "definition": "Cross-platform authentication is the verification of a user's identity in a way that is valid across multiple platforms, devices, or virtual worlds without re-registration. It uses federated identity, single sign-on, and portable credentials so that one verified identity unlocks access everywhere. It is a foundational requirement for interoperable avatars and multiverse experiences.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:authentication", "label": "Authentication"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:multiverse", "label": "Multiverse"}, {"@id": "urn:ngm:class:avatar-interoperability", "label": "Avatar Interoperability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cross-platform authentication establishes a user's identity across many platforms from a single verified credential. It is required by the [[Multiverse]] vision and is a structural part of [[Avatar Interoperability]].
- ### Content
  - Implementations build on federated protocols such as OAuth/OIDC, single sign-on, and increasingly decentralised identifiers and verifiable credentials that the user controls. The hard problems are trust establishment between independent platforms, consistent permission semantics, and preventing a shared identity from becoming a single point of compromise.
