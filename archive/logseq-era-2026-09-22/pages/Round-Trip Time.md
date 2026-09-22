public:: true

# Round-Trip Time

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:round-trip-time", "@type":"Page", "title":"Round-Trip Time", "vc:slug":"round-trip-time", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:round-trip-time",
  "@type":"Class",
  "label":"Round-Trip Time",
  "definition":"Round-trip time is the duration measured from when a signal is sent to when its corresponding acknowledgement is received back at the origin, capturing the combined effect of propagation delay, processing delay, and queuing along the path. It is a standard diagnostic for network latency and is used to estimate achievable throughput, retransmission timers, and interactive responsiveness. Round-trip time grows with physical distance because of propagation delay but is also affected by congestion and routing.",
  "domain":"infrastructure",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:network-latency","label":"Network Latency"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Round-trip time is the duration measured from when a signal is sent to when its corresponding acknowledgement is received back at the origin, capturing the combined effect of propagation delay, processing delay, and queuing along the path. It is a standard diagnostic for network latency and is used to estimate achievable throughput, retransmission timers, and interactive responsiveness. Round-trip time grows with physical distance because of propagation delay but is also affected by congestion and routing.
- ### Relationships
	- subClassOf:: [[Network Latency]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
