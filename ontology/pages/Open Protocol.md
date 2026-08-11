public:: true

# Open Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5f850169293aeb006cc8587f5ab5288c51604f5a65eb3efaa52f99fa34a65f6c",
  "@type": "Page",
  "vc:slug": "open-protocol",
  "title": "Open Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:protocol", "vc:label": "Protocol"},
    {"@id": "urn:visionflow:linked:interoperability", "vc:label": "Interoperability"},
    {"@id": "urn:visionflow:linked:nostr", "vc:label": "Nostr"},
    {"@id": "urn:visionflow:linked:farcaster", "vc:label": "Farcaster"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-protocol",
  "@type": "Class",
  "label": "Open Protocol",
  "definition": "A communication protocol whose specification is publicly documented, royalty-free, and implementable by anyone without permission from a controlling party, typically evolved through an open governance process; open protocols such as TCP/IP, HTTP, SMTP, ActivityPub, and Nostr enable permissionless interoperability between independent implementations, prevent single-vendor lock-in, and shift competition from control of the network to quality of the client — the architectural foundation of the open internet and of credible open-metaverse and decentralised social efforts.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:protocol",
    "label": "Protocol"
  },
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"},
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nostr", "label": "Nostr"},
      {"@id": "urn:ngm:class:farcaster", "label": "Farcaster"},
      {"@id": "urn:ngm:class:decentralisation", "label": "Decentralisation"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A communication protocol whose specification is publicly documented, royalty-free, and implementable by anyone without permission from a controlling party, typically evolved through an open governance process; open protocols such as TCP/IP, HTTP, SMTP, ActivityPub, and Nostr enable permissionless interoperability between independent implementations, prevent single-vendor lock-in, and shift competition from control of the network to quality of the client — the architectural foundation of the open internet and of credible open-metaverse and decentralised social efforts."

- ### Semantic Classification
  - owl-class:: standards:OpenProtocol
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Protocol]]
  - enables:: [[Interoperability]], [[Censorship Resistance]]
  - related-to:: [[Nostr]], [[Farcaster]]

- ### Content

  ## Definition

  An **open protocol** is a [[Protocol]] that anyone may read, implement, and extend without licence fees or gatekeeper approval. Openness here has three components: the *specification* is published and royalty-free (an [[Open Standard]]); *participation* is permissionless, so a new implementation can join the network without registration with a central authority; and *governance* is transparent, with changes debated in public processes such as IETF RFCs, W3C recommendations, or the NIP and FIP repositories of newer networks.

  The internet is the standing demonstration of the model: TCP/IP, DNS, HTTP, and SMTP outcompeted proprietary alternatives (SNA, X.400, closed online services) because openness let independent vendors interoperate and innovate at the edges without negotiating with an owner. The economic consequence is that value accrues to applications and services built *on* the protocol rather than to a network owner — which is also why platform companies periodically enclose open protocols behind proprietary APIs once network effects are secured, a pattern documented from XMPP-based messaging to social media APIs.

  In this graph, open protocols are the load-bearing layer of decentralised social networking and the open metaverse. [[Nostr]] and [[Farcaster]] both *implement* the open-protocol pattern for social media — publicly specified message formats and relay/hub behaviour, many interchangeable clients, user-held keys — while open-metaverse efforts depend on openly specified asset and scene formats so that identity and property can move between virtual worlds rather than being locked to one vendor's platform.

  ## Current Landscape

  - **Established layer**: IETF and W3C stewardship of TCP/IP, HTTP/3, TLS, DNS, and WebRTC continues; these remain the reference case for open governance at global scale.
  - **Decentralised social**: ActivityPub (W3C, powering Mastodon and the Fediverse), AT Protocol (Bluesky), Nostr, and Farcaster compete on the trade-off between simplicity, portability of identity, and operational decentralisation.
  - **Metaverse and 3D**: glTF, USD, and WebXR are the open-format front in the effort to keep virtual worlds interoperable; the alternative is asset lock-in to individual engines and platforms.
  - **Enclosure pressure**: the recurring risk is "open at the bottom, closed at the top" — open transport with proprietary discovery, moderation, or identity layers capturing the network effect; protocol designers increasingly treat exit costs and credible neutrality as explicit design goals.

  - **AT Protocol / Bluesky scale (2025)**: Bluesky grew ~60% in 2025, from 25.94M to 41.41M registered users by year-end (per its 2025 Transparency Report, Jan 2026), with users creating 1.41 billion posts in 2025 — 61% of all posts ever made on the network; the AT Protocol holds roughly 20 billion public records and supports a thousand-plus third-party apps.
  - **ActivityPub remains the largest by reach**: Meta's Threads, which federates over ActivityPub, passed 400 million monthly active users in August 2025, dwarfing native Fediverse activity (FediDB tracked ~12M registered but only ~2M monthly-active Fediverse users; Mastodon monthly actives slipped under 1M by late 2025).
  - **Funding signal**: Bluesky's $100M Series B (led by Bain Capital Crypto, closed April 2025, disclosed March 2026) valued the company around $700M while keeping atproto explicitly non-blockchain and distinct from ActivityPub.

  **Sources**:
  - https://bsky.social/about/blog/01-29-2026-transparency-report-2025
  - https://voxbooster.com/blog/bluesky-fediverse-statistics-2026/
