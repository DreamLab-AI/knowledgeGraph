public:: true

elevatedFrom:: [[webid]]
# WebID Decentralised Identity URI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c1c3d346cfa4774f69aa539187bda2c5750f25efe935b98245219b389f881b1d",
  "@type": "Page",
  "vc:slug": "webid-decentralised-identity-uri",
  "title": "WebID Decentralised Identity URI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:solid",
      "vc:label": "Solid"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "webid"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:webid-decentralised-identity-uri-decentralised-identity-uri",
  "@type": "Class",
  "label": "WebID Decentralised Identity URI",
  "definition": "A WebID is a URI that uniquely identifies an agent (person, organisation, or software) on the web and dereferences to an RDF profile document containing structured data about that agent. It underpins decentralised identity and access control across the Solid ecosystem and linked-data applications, allowing any service to authenticate and authorise users without a central identity provider.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:solid", "label": "Solid"},
      {"@id": "urn:ngm:class:solid-pod", "label": "Solid Pod"},
      {"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:data-sovereignty", "label": "Data Sovereignty"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:webid:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c1c3d346cfa4774f69aa539187bda2c5750f25efe935b98245219b389f881b1d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Solid]]",
      "resolved": "urn:visionflow:owl:class:solid",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - webid is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: blockchain:Webid
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - **Identification**: A WebID points to a document (usually an RDF document) that describes the WebID owner. This document is called a WebID Profile, and it contains structured data (in formats like Turtle, RDF/XML, or JSON-LD) about the user. This data can include names, social links, contact information, and more.
  - **Dereferencing a WebID**: When a WebID is accessed (dereferenced), it returns the WebID Profile document. This process allows applications and services to fetch and understand the public information that the user has chosen to share.
  - **Authentication and Authorization**:
		- **Authentication**: WebID can be used as part of a secure authentication process, where a user proves ownership of a WebID by responding to a challenge. This can be done through various mechanisms, such as TLS (Transport Layer Security) certificates, OAuth, or other token-based methods.
		- **Authorization**: After authentication, applications can use the information in a WebID Profile to determine what resources or data the user can access. This makes it possible to implement fine-grained access control policies that respect the user’s privacy and data sharing preferences.
  - **Decentralized Identity**: Unlike centralized identity providers (e.g., social media logins), WebID promotes a decentralized approach to identity management. Users are not tied to a single service provider, reducing the risk of censorship, outages, or privacy breaches.
  - **Interoperability**: WebID and its reliance on standard web protocols and data formats ensure that it can be used across different platforms and services without vendor lock-in.
  - **Privacy and Control**: Users have greater control over their personal information, including who has access to what data. This aligns with global privacy standards and regulations.
  - **Solid Project**: WebID is a cornerstone of the [[Solid]] project, which aims to reshape the web into a user-centric space where individuals control their own data.
  - **Access Control**: WebID can be used to manage access to resources, documents, and data across the web, enabling more secure and personalized web experiences.
  - **Social Networking and Collaboration**: By linking data across platforms without centralizing control, WebID facilitates new models for social networking, collaboration, and data sharing.

  ### How Does a WebID Work?
  - ### Benefits of Using WebID
  - ### Applications and Use Cases

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
