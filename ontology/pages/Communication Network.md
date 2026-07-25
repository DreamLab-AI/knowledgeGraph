public:: true

# Communication Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:communication-network",
  "@type": "Page",
  "vc:slug": "communication-network",
  "title": "Communication Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:communication-network",
  "@type": "Class",
  "label": "Communication Network",
  "definition": "A communication network is an interconnected collection of nodes and links that transports information between endpoints according to shared protocols. Networks are characterised by their topology, switching method, transmission media, and the protocol stack that governs addressing, routing, and error control. They span scales from local wireless links to global packet-switched internetworks, and they provide the substrate on which distributed systems, decentralised ledgers, and immersive media depend. Performance is described by metrics including bandwidth, latency, jitter, and reliability.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:communication-infrastructure", "label": "Communication Infrastructure"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:transport-layer", "label": "Transport Layer"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:network-performance-metrics", "label": "Network Performance Metrics"}
    ]
  },
  "quality": 0.76
}
```

- ### Definition
  - A [[Communication Network]] is an interconnected set of nodes and links that transports information between endpoints under shared protocols. It is a concrete instance of [[Communication Infrastructure]], defined by its topology, transmission media, and governing protocol stack.
- ### Relationships
  - A communication network operates through a layered [[Communication Protocol]] stack and incorporates a [[Transport Layer]] responsible for end-to-end delivery. Its quality of service is characterised by [[Network Performance Metrics]] such as throughput, latency, and packet loss.
- ### Content
  - Networks are classified by scale — personal, local, metropolitan, and wide-area — and by switching discipline, with packet switching dominating modern data networks. The layered protocol model separates concerns so that physical media, link framing, routing, transport, and application semantics can evolve independently.

  - Contemporary communication networks increasingly blend wired fibre backbones with high-density wireless access such as 5G, and they form the indispensable substrate for cloud computing, blockchain peer-to-peer overlays, and real-time immersive applications whose viability depends on bounded latency and jitter.
