public:: true

# UDP
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:udp", "@type":"Page", "title":"UDP", "vc:slug":"udp", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:udp",
  "@type":"Class",
  "label":"UDP",
  "definition":"The User Datagram Protocol (UDP) is a connectionless transport-layer protocol that sends discrete datagrams without establishing a session, handshaking, ordering or guaranteed delivery. By omitting the reliability and congestion-control machinery of connection-oriented protocols, UDP achieves low latency and minimal overhead, leaving any required reliability to the application layer. It is the foundation for real-time and high-throughput workloads such as voice, video, gaming, DNS and modern transport protocols built atop it.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:transport-protocol","label":"Transport Protocol"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"},
      {"@id":"urn:ngm:class:internet-protocol","label":"Internet Protocol"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:internet-protocol","label":"Internet Protocol"},
      {"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:real-time-communication","label":"Real-Time Communication"},
      {"@id":"urn:ngm:class:dns","label":"DNS"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:quic","label":"QUIC"},
      {"@id":"urn:ngm:class:gaming","label":"Gaming"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:congestion-control","label":"Congestion Control"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:network-layer","label":"Network Layer"},
      {"@id":"urn:ngm:class:latency","label":"Latency"},
      {"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"},
      {"@id":"urn:ngm:class:http","label":"HTTP"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[UDP]] is a connectionless [[Transport Protocol]] that sends datagrams without handshakes, ordering or guaranteed delivery.
	- It runs over the [[Internet Protocol]] and relies on [[Packet Switching]] to deliver best-effort messages.
	- By minimising overhead it achieves low [[Latency]], making it the substrate for [[Real-Time Communication]] and [[QUIC]].
- ### Overview
	- UDP exposes a thin interface over IP: a source and destination port, length and checksum, then the payload.
	- It is described as fire-and-forget: there is no acknowledgement, retransmission or flow control built in.
	- Applications that need reliability implement it themselves, choosing exactly which guarantees to pay for.
	- Its simplicity makes it ideal for request-response queries and for streaming media where late data is useless.
- ### Key aspects
	- **Connectionless**: each datagram is independent, with no session state on either end.
	- **Low overhead**: an 8-byte header and no handshake minimise per-message cost and round trips.
	- **No congestion control**: applications or higher protocols must avoid overwhelming the network.
	- **Datagram boundaries**: message framing is preserved, unlike byte-stream transports.
- ### Applications
	- [[DNS]] lookups and other lightweight request-response queries.
	- Voice and video conferencing and live streaming, where [[Latency]] matters more than perfect reliability.
	- Online [[Gaming]] requiring rapid state updates.
	- Modern transports such as [[QUIC]] that build reliability and security on top of UDP.
- ### Relationships
	- partOf:: [[Network Protocol]]
	- partOf:: [[Internet Protocol]]
	- requires:: [[Internet Protocol]]
	- requires:: [[Packet Switching]]
	- enables:: [[Real-Time Communication]]
	- enables:: [[DNS]]
	- uses:: [[Packet Switching]]
	- supports:: [[QUIC]]
	- supports:: [[Gaming]]
	- contrastsWith:: [[Congestion Control]]
	- relatedTo:: [[Network Layer]]
	- relatedTo:: [[Latency]]
	- relatedTo:: [[Bandwidth]]
	- relatedTo:: [[HTTP]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
