public:: true

# nostr relay list
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3006ff436222da04129b9a33b51c6f085ea4baea7856de77e5f0358fbe718080",
  "@type": "Page",
  "vc:slug": "nostr-relay-list",
  "title": "nostr relay list",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "nostr relay list"
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
  "@id": "urn:ngm:class:nostr-relay-list",
  "@type": "Class",
  "label": "nostr relay list",
  "definition": "A Nostr relay list is a curated or automatically discovered list of WebSocket relay server endpoints that a Nostr client uses to publish and subscribe to signed events. Because Nostr has no centralised routing, a client's relay list determines its social graph reach: events are broadcast to all listed relays, and the client pulls its feed from the same set. Relay lists are stored as NIP-65 kind:10002 events on the network itself, enabling portable relay preferences that travel with the user's public key across clients.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    }
  ],
  "quality": 0.7,
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:nostr-protocol", "label": "Nostr Protocol"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:web-socket", "label": "WebSocket"},
      {"@id": "urn:ngm:class:gossip-protocol", "label": "Gossip Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:did-nostr-identity", "label": "DID Nostr Identity"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:decentralized-storage", "label": "Decentralized Storage"},
      {"@id": "urn:ngm:class:relayer", "label": "Relayer"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:nostr-relay-list:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3006ff436222da04129b9a33b51c6f085ea4baea7856de77e5f0358fbe718080"
  },
  "vc:resolutions": [],
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
  - A Nostr relay list is a curated set of WebSocket relay server endpoints that a Nostr client uses to publish and retrieve signed events. In the Nostr protocol, there is no central server: instead, clients broadcast events (notes, reactions, metadata) to a chosen set of relays and subscribe to feeds by connecting to the same relays where their contacts post. Because relay connectivity is the sole routing mechanism, the relay list directly governs a user's social-graph reach and censorship-resistance posture.
  - Relay lists are themselves portable: under NIP-65, clients store their preferred relay configuration as a signed kind:10002 event on the network, allowing any compatible client to discover and adopt a user's relay preferences from their public key alone. The list above represents a latency-sorted selection of public relays, providing a snapshot useful for bootstrapping a new Nostr identity or evaluating network coverage.

- ### Semantic Classification
  - owl-class:: blockchain:NostrRelayList
  - owl-role:: Concept

- ### Relationships
  - Part of the Nostr Protocol; relies on WebSocket transport and gossip-style propagation for event delivery across the decentralised relay network.

- ### Content
  - 1. wss://[nostr.oxtr.dev/](https://nostr.oxtr.dev/) - 40ms
    2. wss://[relay.chorus.community/](https://relay.chorus.community/) - 58ms
    3. wss://[relay.nostr.net/](https://relay.nostr.net/) - 66ms
    4. wss://[relay.exit.pub/](https://relay.exit.pub/) - 69ms
    5. wss://nostr.mom/ - 98ms
    6. wss://[nostr.vulpem.com/](https://nostr.vulpem.com/) - 103ms
    7. wss://[relay.degmods.com/](https://relay.degmods.com/) - 103ms
    8. wss://[relay.agora.social/](https://relay.agora.social/) - 119ms
    9. wss://a.nos.lol/ - 125ms
    10. wss://[relay.primal.net/](https://relay.primal.net/) - 130ms
    11. wss://[nostr.data.haus/](https://nostr.data.haus/) - 137ms
    12. wss://[relays.land/spatianostra](https://relays.land/spatianostra) - 145ms
    13. wss://[nostr.sathoarder.com/](https://nostr.sathoarder.com/) - 156ms
    14. wss://[relay.nostromo.social/](https://relay.nostromo.social/) - 163ms
    15. wss://[sendit.nosflare.com/](https://sendit.nosflare.com/) - 166ms
    16. wss://[nostr.yael.at/](https://nostr.yael.at/) - 182ms
    17. wss://orangesync.tech/ - 184ms
    18. wss://[nostr.einundzwanzig.space/](https://nostr.einundzwanzig.space/) - 192ms
    19. wss://[soloco.nl/](https://soloco.nl/) - 194ms
    20. wss://[nostr.chaima.info/](https://nostr.chaima.info/) - 195ms
    21. wss://[relay1.nostrchat.io/](https://relay1.nostrchat.io/) - 199ms
    22. wss://[relay.noswhere.com/](https://relay.noswhere.com/) - 226ms
    23. wss://[relay.nostr.band/wss://cobrafuma.com/relay](https://relay.nostr.band/wss://cobrafuma.com/relay) - 239ms
    24. wss://[relay.seq1.net/outbox](https://relay.seq1.net/outbox) - 248ms
    25. wss://nos.lol/ - 249ms
    26. wss://[nostr.azzamo.net/](https://nostr.azzamo.net/) - 269ms
    27. wss://[feeds.nostr.band/popular](https://feeds.nostr.band/popular) - 286ms
    28. wss://purpura.cloud/ - 337ms
    29. wss://[ithurtswhenip.ee/](https://ithurtswhenip.ee/) - 340ms
    30. wss://[relay.davidebtc.me/](https://relay.davidebtc.me/) - 348ms
    31. wss://[feeds.nostr.band/lang/zh](https://feeds.nostr.band/lang/zh) - 371ms
    32. wss://[nostrue.com/](https://nostrue.com/) - 436ms
    33. wss://[nostr.roundrockbitcoiners.com/](https://nostr.roundrockbitcoiners.com/) - 440ms
    34. wss://[multiplexer.huszonegy.world/](https://multiplexer.huszonegy.world/) - 442ms
    35. wss://[relay.agorist.space/](https://relay.agorist.space/) - 463ms
    36. wss://[relay.damus.io/](https://relay.damus.io/) - 475ms
    37. wss://[relay.nostr.band/](https://relay.nostr.band/) - 481ms
    38. wss://[relay.nostriot.com/](https://relay.nostriot.com/) - 497ms
    39. wss://[relay.nos.social/](https://relay.nos.social/) - 507ms
    40. wss://[feeds.nostr.band/nostrhispano](https://feeds.nostr.band/nostrhispano) - 510ms
  - <!--EndFragment-->

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
