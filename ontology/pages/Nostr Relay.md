public:: true

# Nostr Relay
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:nostr-relay",
  "@type": "Page",
  "vc:slug": "nostr-relay",
  "title": "Nostr Relay",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nostr-relay",
  "@type": "Class",
  "label": "Nostr Relay",
  "definition": "A Nostr Relay is a server that implements the Nostr protocol, accepting signed event objects from clients, storing them, and forwarding them to subscribed clients according to filter criteria. Relays are the infrastructure backbone of the Nostr decentralised social network: because there is no central server or consensus chain, the network's availability and censorship-resistance derive entirely from the federated mesh of independently operated relays. Relays communicate with clients over persistent WebSocket connections using a simple JSON message format.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:nostr-protocol",
      "label": "Nostr Protocol"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nostr",
        "label": "Nostr"
      },
      {
        "@id": "urn:ngm:class:relayer",
        "label": "Relayer"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:web-socket-protocol",
        "label": "WebSocket Protocol"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:did-nostr-identity",
        "label": "DID Nostr Identity"
      }
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Nostr Relay]] is a server node in the [[Nostr]] protocol ecosystem that persists and routes cryptographically signed event messages over [[WebSocket Protocol]] connections, functioning as a censorship-resistant store-and-forward infrastructure without requiring coordination with other relays.

- ### Relationships
  - Nostr Relay is a core component of the [[Nostr Protocol]] and shares the general [[Relayer]] architectural pattern. It uses [[WebSocket Protocol]] for client communication and [[Public-Key Cryptography]] for event signature verification. Operating a relay is the primary mechanism for supporting [[Decentralized Identity]] and [[DID Nostr Identity]] integration, and relay diversity directly realises [[Federated Identity]] guarantees across the network.

- ### Content
  - The Nostr protocol (Notes and Other Stuff Transmitted by Relays) was created by fiatjaf and published in 2020 as a minimalist alternative to federated protocols like ActivityPub. The design philosophy rejected both blockchain consensus and federated server agreements, instead making individual relays autonomous: any relay can accept or reject any event, and clients choose which relays to trust and publish to. The simplicity of the protocol — essentially a publish-subscribe system over WebSockets with secp256k1 signatures — enabled rapid implementation across dozens of languages.

  - A relay implements a small set of message types: EVENT (publish or receive), REQ (subscribe with filter), CLOSE (cancel subscription), and NOTICE (relay-to-client messages). Filters can match on event kinds (text notes, metadata, reactions, zaps), author public keys, referenced event IDs, and time ranges. Relays store events in local databases (SQLite, PostgreSQL) and may apply policies: paid relays require Lightning micropayments to write, curated relays whitelist specific pubkeys, and ephemeral relays discard events after delivery.

  - Nostr relays are the infrastructure layer for a growing ecosystem including Damus and Prism (Twitter-like clients), Zap.stream (live video), and Snort (web client). Lightning Network integration via NIP-57 zaps enables direct micropayments attached to any event, creating economic incentives for both relay operators and content creators. The protocol's NIP-05 identifier standard maps human-readable names to pubkeys via DNS, enabling discoverable identities without centralised registries.

  - By 2024-2025, the Nostr relay ecosystem has fragmented productively into specialised niches: Strfry and Nostream are high-performance open-source implementations handling millions of events per day, while relay.tools and Nostrich.house offer managed hosting. Relay-side spam filtering using proof-of-work (NIP-13) and reputation scoring is an active area. Integration with W3C DIDs positions Nostr relays as infrastructure for verifiable credential exchange across decentralised social and identity systems.

