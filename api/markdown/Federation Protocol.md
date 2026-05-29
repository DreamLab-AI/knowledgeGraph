public:: true

# Federation Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:federation-protocol",
  "@type": "Page",
  "vc:slug": "federation-protocol",
  "title": "Federation Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:federation-protocol",
  "@type": "Class",
  "label": "Federation Protocol",
  "definition": "A federation protocol is a formal specification for enabling independent, autonomously administered servers or identity domains to interoperate and exchange data, messages, or authentication credentials without centralised control, such that users of one domain can communicate with or access resources from another domain governed by different administrators. Federation protocols typically define message formats, authentication and authorisation mechanisms, actor representations, and the semantics of cross-domain identity references, enabling loosely coupled networks of independently operated services to collectively deliver the capabilities of a unified system. They underpin decentralised social networks, federated identity management, and distributed messaging systems that resist single-point control and censorship.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-protocol", "label": "Distributed Protocol"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:federated-identity", "label": "Federated Identity"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
      {"@id": "urn:ngm:class:gossip-protocol", "label": "Gossip Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"},
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Federation Protocol]] is a formal interoperability specification enabling independently operated servers to exchange messages, identities, and data under shared semantic rules without a central authority, forming the backbone of decentralised social networks, [[Federated Identity]] systems, and distributed [[Communication Protocol|communication infrastructures]].

- ### Relationships
  - Federation protocols operationalise [[Federated Identity]] by specifying how identity assertions from one domain are recognised and trusted by another, often using [[OAuth 2.0]] or [[OpenID Connect]] for authorisation and [[Decentralized Identity (DID)|decentralised identifiers]] for self-sovereign representations. They rely on [[Gossip Protocol|gossip protocols]] or HTTP-based delivery mechanisms for message propagation across the network of servers. W3C ActivityPub is the canonical federation protocol for social networking, while SAML, SCIM, and LDAP federation serve enterprise identity. The result is [[Interoperability]] across independently governed nodes, architecturally similar to [[Peer-to-Peer Network|peer-to-peer networks]] but with server-centric trust anchors.

- ### Content
  - Federation as an architectural pattern in distributed systems arose from the practical limitations of centralised service models: single points of failure, vendor lock-in, privacy risks, and censorship vulnerability. Early email's SMTP and DNS represent the archetypal federated infrastructure — any SMTP server can exchange mail with any other using open standards, without a central mail authority. XMPP (Jabber, 1999) brought this model to instant messaging through a client-server-federation architecture and remains deployed in enterprise environments. The Diaspora project (2010) applied federation to social networking, and OStatus then ActivityPub (W3C standard, 2018) emerged as the dominant federated social protocol.

  - ActivityPub defines an Actor model where entities (users, groups, services) are represented as JSON-LD objects at stable URIs, with an inbox and outbox for receiving and distributing Activities (JSON-LD event objects such as Create, Follow, Like, Announce). When server A's user follows server B's actor, server A subscribes to server B's outbound activities for that actor. Federation occurs via HTTP POST to inboxes, with HTTP Signatures providing sender authentication. The Fediverse — the network of ActivityPub-compatible servers (Mastodon, Pixelfed, Peertube, Misskey, etc.) — had reached over ten million active users by 2024, constituting the largest deployed decentralised social network.

  - In identity and access management, federation protocols enable single sign-on across organisational boundaries. SAML 2.0 (2005) established the assertion-based model for enterprise identity federation, allowing corporate users to authenticate with their own identity provider and access services at partner organisations. OIDC (OpenID Connect) modernised this for web and mobile using JSON Web Tokens and REST APIs. The emerging W3C DID and Verifiable Credentials standards enable self-sovereign identity where individuals hold cryptographic credentials issued by authorities and present them to verifiers without routing through the issuer, extending federation to a fully decentralised trust model.

  - By 2024-2025 federation protocols are central to debates about platform regulation, data portability, and the architecture of next-generation social infrastructure. Meta's Threads began selective ActivityPub federation in 2024, creating tension around whether large platforms can participate in the Fediverse without undermining its decentralisation ethos. AT Protocol (Bluesky's federated social layer) offers an alternative federation model with portable identities and a global event log. In AI, federation concepts are being extended to model serving, agent communication, and multi-party computation, with the [[Federated Learning]] paradigm applying federation protocol thinking to distributed model training without centralising training data.

