WebID is a decentralised identity mechanism in which a person or agent is identified by an HTTP(S) URI that dereferences to a machine-readable profile document describing them in RDF. Combined with authentication methods such as WebID-TLS or WebID-OIDC, it lets users prove control of their identifier without a central identity provider. WebID is a foundational building block of the Solid project and the broader linked-data web, enabling user-controlled identity, profiles, and access control across decentralised applications.

### Content

- WebID applies the foundational idea of the web — that things are named by URIs — to identity itself. A person's WebID is simply an HTTP(S) URI, and dereferencing it returns a profile document, written in RDF, that describes who they are, what keys or accounts they control, and links to their data and relationships. Identity thus becomes a first-class, linkable resource on the web rather than an account locked inside a particular provider's database.
- Authentication binds control of the identifier to a cryptographic proof. WebID-TLS uses a client certificate whose public key is published in the profile document, so a server can verify that whoever presents the certificate genuinely controls the WebID by comparing keys. WebID-OIDC layers the model over OpenID Connect, letting users authenticate through an identity provider of their own choosing while keeping the WebID URI as the stable, portable identifier — avoiding lock-in to any single provider.
- Because the profile is linked data, a WebID is extensible and interoperable by design. It can reference contacts, group memberships, preferences, and the locations of a user's personal data stores, and other agents can follow those links to discover and verify information. This makes WebID a natural fit for access control: a resource can grant permission to a WebID or to a group defined by WebIDs, and the controlling user manages those relationships through their own profile rather than per-application account systems.
- WebID is a cornerstone of Tim Berners-Lee's Solid project, which aims to give people personal data stores (Pods) and re-decentralise the web by separating identity and data from applications. In that architecture, a user logs in with their WebID, stores data in a Pod they control, and grants applications scoped access — inverting the dominant model in which platforms own both identity and data. While adoption remains early and the user experience of decentralised identity is still maturing, WebID embodies a coherent technical vision for self-controlled identity built directly on open web standards.

## Merged from WebID Decentralised Identity URI (needs reconciliation)
A WebID is a URI that uniquely identifies an agent (person, organisation, or software) on the web and dereferences to an RDF profile document containing structured data about that agent. It underpins decentralised identity and access control across the Solid ecosystem and linked-data applications, allowing any service to authenticate and authorise users without a central identity provider.

### Semantic Classification

### Content

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

### Benefits of Using WebID

### Applications and Use Cases

### Provenance

