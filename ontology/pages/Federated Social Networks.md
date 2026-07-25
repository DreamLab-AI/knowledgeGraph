public:: true

# Federated Social Networks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:federated-social-networks",
  "@type": "Page",
  "vc:slug": "federated-social-networks",
  "title": "Federated Social Networks",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:federated-social-networks",
  "@type": "Class",
  "label": "Federated Social Networks",
  "definition": "Federated social networks are distributed communication platforms composed of independently operated servers that interoperate via shared open protocols, allowing users on different instances to follow, mention, and exchange content across administrative boundaries without centralised ownership. The model contrasts with siloed proprietary networks by enabling user data portability, operator sovereignty, and community-driven moderation policies.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "uses": [{"@id": "urn:ngm:class:activity-pub", "label": "ActivityPub"}, {"@id": "urn:ngm:class:distributed-system-protocol", "label": "Distributed System Protocol"}],
    "enables": [{"@id": "urn:ngm:class:social-network-analysis", "label": "Social Network Analysis"}, {"@id": "urn:ngm:class:data-privacy", "label": "Data Privacy"}],
    "relatedTo": [{"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}, {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"}],
    "contrastsWith": [{"@id": "urn:ngm:class:social-network-graph", "label": "Social Network Graph"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Federated Social Networks]] are platforms in which independently hosted server instances communicate through open, standardised protocols, allowing accounts on separate servers to interact as seamlessly as email across providers. Unlike centralised social media, no single organisation controls the global graph; instead, server operators set their own rules whilst the protocol — chiefly [[ActivityPub]] — mediates cross-instance messaging, follow relationships, and content delivery.

- ### Relationships
  - [[ActivityPub]] is the primary [[Distributed System Protocol]] binding federated instances, whilst [[Decentralised Identity]] mechanisms such as WebFinger resolve cross-instance actor references. Federation enables emergent [[Social Network Analysis]] across a heterogeneous graph and supports [[Data Privacy]] by letting users choose instances with preferred data-handling policies. The model offers a principled contrast to the centralised [[Social Network Graph]] topology of proprietary platforms, and depends on [[Interoperability Standard]]s for long-term cohesion.

- ### Content
  - Federated social networking traces to OStatus (2010) and GNU Social, which demonstrated that Atom-feed-based federation could scale across hundreds of instances. The ActivityPub specification, published as a W3C Recommendation in 2018, superseded OStatus and became the de facto interoperability layer for the "Fediverse" — a portmanteau of federated universe — encompassing platforms such as Mastodon, PeerTube, Pixelfed, and Misskey.

  - Technically, each server exposes ActivityPub endpoints for actors (user accounts), their inboxes, and outboxes. When a user on instance A follows a user on instance B, server A delivers Activity objects (Create, Like, Announce) to server B's shared inbox. Servers maintain local copies of remote actors' public keys for HTTP Signature verification, providing spam resistance without centralised certificate authorities. WebFinger maps human-readable handles to actor URLs across domains.

  - The Fediverse ecosystem saw explosive growth following Twitter's acquisition in 2022, with Mastodon instances hosting millions of accounts. Platforms including Flipboard, Threads (Meta), and Ghost adopted ActivityPub federation, expanding the interoperable graph to include mainstream publishers. This brought pressure to address moderation at federation boundaries, spawning server-level blocklists and the FediBlock community coordination effort.

  - In 2024–2025, the Fediverse faces governance maturity challenges: how to coordinate safety policy across thousands of autonomous operators without replicating the power concentration of centralised platforms. The Social Web Working Group at W3C is iterating on ActivityPub 2.0 proposals covering group actors, better content warnings, and improved privacy. Simultaneously, the integration of AI-generated content moderation tools raises questions about algorithmic governance in a decentralised context.

