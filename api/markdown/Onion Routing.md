public:: true
alias:: OnionRouting, onion-routing

# Onion Routing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:onion-routing",
  "@type": "Page",
  "vc:slug": "onion-routing",
  "title": "Onion Routing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:onion-routing",
  "@type": "Class",
  "label": "Onion Routing",
  "definition": "Onion routing is an anonymous-communication technique in which messages are wrapped in successive layers of encryption and relayed through a sequence of intermediary nodes, each of which removes one layer to learn only the next hop. Because no single relay knows both the source and destination, onion routing conceals the network path and protects communication metadata. It is the basis of the Tor network and is adapted in systems such as the Lightning Network for private multi-hop payment forwarding.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:relay-node", "label": "Relay Node"},
      {"@id": "urn:ngm:class:circuit", "label": "Circuit"},
      {"@id": "urn:ngm:class:exit-node", "label": "Exit Node"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:key-exchange", "label": "Key Exchange"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:anonymous-communication", "label": "Anonymous Communication"},
      {"@id": "urn:ngm:class:hidden-services", "label": "Hidden Services"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-trust", "label": "Distributed Trust"},
      {"@id": "urn:ngm:class:network-routing", "label": "Network Routing"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:tor-network", "label": "Tor Network"},
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"},
      {"@id": "urn:ngm:class:diffie-hellman-key-exchange", "label": "Diffie-Hellman Key Exchange"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:metadata-privacy", "label": "Metadata Privacy"},
      {"@id": "urn:ngm:class:traffic-analysis-resistance", "label": "Traffic Analysis Resistance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:vpn", "label": "VPN"},
      {"@id": "urn:ngm:class:proxy-server", "label": "Proxy Server"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:payment-channel-network", "label": "Payment Channel Network"},
      {"@id": "urn:ngm:class:source-routing", "label": "Source Routing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
      {"@id": "urn:ngm:class:mix-network", "label": "Mix Network"},
      {"@id": "urn:ngm:class:traffic-correlation-attack", "label": "Traffic Correlation Attack"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:onion-routing-protocol", "label": "Onion Routing Protocol"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Onion routing wraps messages in layers of encryption relayed through a sequence of nodes, each peeling one layer to learn only the next hop, so no single relay knows both source and destination.

- ### Relationships
  - Onion Routing is a subclass of [[Network Protocol]] and uses [[Encryption]] and [[Public-Key Cryptography]] to build its nested layers. It enables [[Censorship Resistance]] and [[Privacy]] by concealing communication metadata, and relates to the broader family of [[Communication Protocol]]s whose routing it anonymises.

- ### Content
  - Onion routing attacks a problem that ordinary encryption leaves unsolved: even when message contents are encrypted, the metadata of who is talking to whom, when, and how much remains exposed and is often more revealing than the content itself. By routing traffic through a chain of relays and ensuring no single relay sees the whole path, onion routing breaks the linkage between sender and receiver that traffic analysis depends on.

  - The construction is layered like an onion. The sender selects a path of relays and encrypts the message in nested layers, one per relay, using each relay's public key. As the packet travels, each relay decrypts its outermost layer, revealing only the address of the next hop and an inner ciphertext it cannot read, then forwards it. The first relay knows the sender but not the destination; the last knows the destination but not the sender; and the middle relays know neither endpoint.

  - Tor is the most prominent deployment, building circuits of three relays — entry, middle, and exit — to give millions of users anonymous access to the internet and to host hidden services reachable only within the network. Onion routing provides strong protection against local and single-relay adversaries, though it is not a panacea: a global adversary able to observe both ends of a circuit can attempt traffic-correlation attacks, and exit nodes see unencrypted destination traffic unless end-to-end encryption is also used.

  - The technique generalises well beyond web browsing. The Lightning Network adapts onion routing so that a multi-hop payment's intermediary nodes each learn only their adjacent hops, preserving the privacy of who is paying whom across the payment graph. In both anonymity networks and private payments, onion routing embodies a powerful principle: distributing knowledge across mutually distrusting relays so that privacy and censorship resistance emerge from the structure of the protocol rather than from trusting any single party.
