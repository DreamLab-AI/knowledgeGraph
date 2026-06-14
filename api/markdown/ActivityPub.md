public:: true

# ActivityPub
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:activity-pub",
  "@type": "Page",
  "vc:slug": "activity-pub",
  "title": "ActivityPub",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:activity-pub",
  "@type": "Class",
  "label": "ActivityPub",
  "definition": "ActivityPub is a W3C-standardised decentralised social networking protocol that defines two layers: a server-to-server federation protocol enabling independent server instances to share content with one another, and a client-to-server protocol allowing applications to interact with a user's social data. Based on the ActivityStreams 2.0 vocabulary and JSON-LD serialisation, it enables interoperable federated social networks where users on different server instances can follow, reply to, and interact with each other across instance boundaries.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:distributed-protocol", "label": "Distributed Protocol"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:activity-streams-2", "label": "ActivityStreams 2.0"},
      {"@id": "urn:ngm:class:http-signatures", "label": "HTTP Signatures"},
      {"@id": "urn:ngm:class:webfinger", "label": "WebFinger"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:federated-social-networks", "label": "Federated Social Networks"},
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:server-to-server-federation", "label": "Server-to-Server Federation"},
      {"@id": "urn:ngm:class:content-moderation", "label": "Content Moderation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:web-standard", "label": "Web Standard"},
      {"@id": "urn:ngm:class:interoperability-protocol", "label": "Interoperability Protocol"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:world-wide-web-consortium", "label": "W3C"},
      {"@id": "urn:ngm:class:fediverse-enhancement-proposal", "label": "Fediverse Enhancement Proposal"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:https-transport", "label": "HTTPS Transport"},
      {"@id": "urn:ngm:class:actor-inbox-outbox", "label": "Actor Inbox/Outbox"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:client-to-server-protocol", "label": "Client-to-Server Protocol"},
      {"@id": "urn:ngm:class:server-to-server-protocol", "label": "Server-to-Server Protocol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ostatus", "label": "OStatus"},
      {"@id": "urn:ngm:class:at-protocol", "label": "AT Protocol"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web Linked Data Standard"},
      {"@id": "urn:ngm:class:mastodon", "label": "Mastodon"},
      {"@id": "urn:ngm:class:fediverse", "label": "Fediverse"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:w3c-activity-pub-recommendation", "label": "W3C ActivityPub Recommendation"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - ActivityPub is a [[Web Standard]] published by the W3C in 2018 that defines the federation protocol underpinning the Fediverse. It uses the ActivityStreams 2.0 vocabulary serialised as [[JSON-LD]] to represent social objects—notes, images, follows, likes—and defines how servers exchange these objects over HTTPS to create a [[Decentralised Web]] of interoperable [[Federated Social Networks]]. Its [[Linked Data]] foundation makes ActivityPub extensible and machine-readable beyond social networking into general content distribution use cases.

- ### Relationships
  - ActivityPub is a specialisation of [[Distributed Protocol]] and is standardised as a [[Web Standard]] by the W3C. It uses [[JSON-LD]] for its data model and [[Linked Data]] principles for extensibility, connecting it to the [[Semantic Web Linked Data Standard]] ecosystem. It enables [[Federated Social Networks]] and contributes to the broader [[Decentralised Web]] vision. It is an [[Interoperability Protocol]] in practice, allowing heterogeneous social software—Mastodon, Misskey, PeerTube, Pixelfed—to interoperate.

- ### Content
  - ActivityPub evolved from earlier decentralised social networking experiments, most notably OStatus—a protocol stack combining Atom, WebSub, Salmon, and WebFinger used by GNU Social and StatusNet. The Social Web Working Group at the W3C, formed in 2014, produced ActivityPub as a cleaner, JSON-LD-based replacement. Its specification, authored principally by Christine Lemmer Webber and Jessica Tallon, reached Recommendation status in January 2018. The ActivityStreams 2.0 vocabulary, a companion W3C Recommendation, provides the core object and activity types that ActivityPub exchanges.

  - Technically, ActivityPub distinguishes actors (users, groups, services), objects (notes, articles, images, videos), and activities (Create, Follow, Like, Announce, Delete). Each actor has an inbox and an outbox as HTTP endpoints. Delivering an activity to a remote actor's followers involves POSTing a JSON-LD document to each follower server's shared inbox. HTTP Signatures are used for request authentication, verifying that a delivery originates from the claimed actor's server. Webfinger (RFC 7033) resolves human-readable addresses (user@instance.example) to actor profile URLs, providing the directory function.

  - The Fediverse—the federated universe of ActivityPub-connected servers—grew dramatically following Elon Musk's acquisition of Twitter in late 2022, with Mastodon alone adding over one million accounts in a single week. By 2024, the ecosystem included over 10,000 active server instances across Mastodon, Misskey/Calckey, Pleroma/Akkoma, PeerTube (video), Pixelfed (photos), and Bookwyrm (books). Meta launched Threads with ActivityPub federation in late 2024, bringing a major commercial actor into the protocol and raising questions about power asymmetry in federated networks.

  - In 2024–2025, ActivityPub faces both maturation and fragmentation pressures. Extensions such as FEP (Fediverse Enhancement Proposals) are adding capabilities—content warnings, quote posts, interaction controls—that the base specification does not address. The integration of ActivityPub with the [[Decentralised Web]] ecosystem (IPFS, ATProto, DID/VC standards) is being explored to extend the protocol's identity and content-addressing capabilities. Moderation tooling remains a central challenge: federated moderation requires coordination across server operators without a central authority, and both technical tools (instance-level block lists, content moderation APIs) and social norms are evolving rapidly.