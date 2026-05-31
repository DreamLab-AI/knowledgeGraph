public:: true

# Transport Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:transport-protocol",
  "@type": "Page",
  "vc:slug": "transport-protocol",
  "title": "Transport Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transport-protocol",
  "@type": "Class",
  "label": "Transport Protocol",
  "definition": "A transport protocol is a network-layer specification that governs end-to-end delivery of data between processes, handling concerns such as multiplexing, reliability, ordering, and flow and congestion control. Examples including TCP, UDP, and QUIC sit above the network layer and provide the communication substrate over which higher-level application and agent protocols operate.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model-control-protocols-like-mcp", "label": "Model Control Protocols like MCP"}, {"@id": "urn:ngm:class:networking-domain", "label": "Networking Domain"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A specification governing end-to-end data delivery between processes, covering reliability, ordering, multiplexing, and congestion control. It provides the communication substrate required by higher-level protocols such as [[Model Control Protocols like MCP]] within the [[Networking Domain]].
- ### Content
  - TCP offers reliable, ordered byte streams; UDP offers lightweight connectionless datagrams; and QUIC layers multiplexed, encrypted streams over UDP to reduce latency. The choice of transport shapes the latency, reliability, and security characteristics available to the protocols and applications built on top of it.
