public:: true

# Distributed Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:distributed-communication",
  "@type": "Page",
  "vc:slug": "distributed-communication",
  "title": "Distributed Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-communication",
  "@type": "Class",
  "label": "Distributed Communication",
  "definition": "Distributed communication is the exchange of messages between processes running on separate machines across a network, forming the substrate of distributed systems. It encompasses paradigms such as remote procedure calls, message queues, publish-subscribe, and streaming, each managing serialisation, addressing, ordering, and failure handling. Middleware abstracts these mechanics so application components can interact reliably despite network partitions and latency.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:middleware", "label": "Middleware"},
      {"@id": "urn:ngm:class:infra-network-and-comms", "label": "Network and Communication"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Distributed communication moves messages between processes on different machines, the basis of distributed systems. It is enabled by [[Middleware]] and built on the protocols of the [[Networking Domain]].
- ### Content
  - Common models include synchronous RPC/gRPC, asynchronous message queues, and pub-sub event buses, each trading latency, coupling, and delivery guarantees. Designers must address serialisation formats, idempotency, back-pressure, and partial-failure semantics, since the network is unreliable and messages can be lost, duplicated, or reordered.
