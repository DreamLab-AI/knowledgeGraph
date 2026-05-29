public:: true

# WebID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:web-id",
  "@type": "Page",
  "vc:slug": "web-id",
  "title": "WebID",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-id",
  "@type": "Class",
  "label": "WebID",
  "definition": "WebID is a decentralised identity mechanism in which a person or agent is identified by an HTTP(S) URI that dereferences to a machine-readable profile document describing them in RDF. Combined with authentication methods such as WebID-TLS or WebID-OIDC, it lets users prove control of their identifier without a central identity provider. WebID is a foundational building block of the Solid project and the broader linked-data web, enabling user-controlled identity, profiles, and access control across decentralised applications.",
  "domain": "identity",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:federated-identity", "label": "Federated Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"},
      {"@id": "urn:ngm:class:semantic-web", "label": "Semantic Web"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - WebID is a decentralised identity mechanism that identifies a person or agent by an HTTP URI dereferencing to a machine-readable RDF profile, enabling authentication and identity without a central provider.

- ### Relationships
  - WebID is a subclass of [[Decentralized Identity]] and uses [[RDF]] and [[Linked Data]] to express its profile documents. It enables [[Federated Identity]] across cooperating services and relates to [[Self-Sovereign Identity]] goals and the [[Semantic Web]] infrastructure on which it is built.

- ### Content
  - WebID applies the foundational idea of the web — that things are named by URIs — to identity itself. A person's WebID is simply an HTTP(S) URI, and dereferencing it returns a profile document, written in RDF, that describes who they are, what keys or accounts they control, and links to their data and relationships. Identity thus becomes a first-class, linkable resource on the web rather than an account locked inside a particular provider's database.

  - Authentication binds control of the identifier to a cryptographic proof. WebID-TLS uses a client certificate whose public key is published in the profile document, so a server can verify that whoever presents the certificate genuinely controls the WebID by comparing keys. WebID-OIDC layers the model over OpenID Connect, letting users authenticate through an identity provider of their own choosing while keeping the WebID URI as the stable, portable identifier — avoiding lock-in to any single provider.

  - Because the profile is linked data, a WebID is extensible and interoperable by design. It can reference contacts, group memberships, preferences, and the locations of a user's personal data stores, and other agents can follow those links to discover and verify information. This makes WebID a natural fit for access control: a resource can grant permission to a WebID or to a group defined by WebIDs, and the controlling user manages those relationships through their own profile rather than per-application account systems.

  - WebID is a cornerstone of Tim Berners-Lee's Solid project, which aims to give people personal data stores (Pods) and re-decentralise the web by separating identity and data from applications. In that architecture, a user logs in with their WebID, stores data in a Pod they control, and grants applications scoped access — inverting the dominant model in which platforms own both identity and data. While adoption remains early and the user experience of decentralised identity is still maturing, WebID embodies a coherent technical vision for self-controlled identity built directly on open web standards.
