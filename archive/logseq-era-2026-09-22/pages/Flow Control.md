public:: true

# Flow Control
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:flow-control", "@type":"Page", "title":"Flow Control", "vc:slug":"flow-control", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:flow-control",
  "@type":"Class",
  "label":"Flow Control",
  "definition":"Flow control is the mechanism by which a data communication protocol prevents a fast sender from overwhelming a slower receiver. It regulates the rate or volume of data in transit using techniques such as sliding windows, credit schemes and backpressure, so that the receiver's buffers are not exceeded. Distinct from congestion control, which protects the shared network, flow control is an end-to-end concern that protects the individual receiving endpoint.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:transport-layer","label":"Transport Layer"},
      {"@id":"urn:ngm:class:network-transport","label":"Network Transport"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:reliability","label":"Reliability"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:congestion-control","label":"Congestion Control"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:communication-protocols","label":"Communication Protocols"},
      {"@id":"urn:ngm:class:rate-limiting","label":"Rate Limiting"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:quic","label":"QUIC"},
      {"@id":"urn:ngm:class:reliability","label":"Reliability"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:network-transport","label":"Network Transport"},
      {"@id":"urn:ngm:class:reliability","label":"Reliability"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:concurrency","label":"Concurrency"},
      {"@id":"urn:ngm:class:congestion-control","label":"Congestion Control"},
      {"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Flow control is a [[Network Protocol]] mechanism that stops a fast sender from overrunning a slow receiver.
	- It regulates in-flight data so the receiver's buffers are never exceeded, a core duty of the [[Transport Layer]].
	- It is distinct from [[Congestion Control]]: flow control protects the endpoint, congestion control protects the shared network.
- ### Overview
	- Without flow control, a sender could discard a receiver's data simply by transmitting faster than it can be consumed.
	- The receiver advertises how much it can accept, and the sender limits outstanding data accordingly.
	- It operates end-to-end and is a key part of [[Network Transport]] reliability guarantees.
	- Modern protocols apply flow control at both connection and stream granularity to multiplex fairly.
- ### Mechanisms
	- Sliding-window schemes let the receiver advertise a window of acceptable bytes that moves as data is consumed.
	- Credit-based control grants the sender explicit permission units before more data may be sent.
	- Backpressure propagates fullness signals upstream so producers slow when consumers fall behind.
	- Stream-level windows in multiplexed protocols prevent one stream from starving others.
- ### Applications
	- TCP receive-window management that paces bulk transfers to the receiver's capacity.
	- Per-stream flow control in [[QUIC]] and HTTP/2 to keep multiplexed streams fair.
	- Message-broker and queue systems applying backpressure to balance producers and consumers.
	- Reactive streaming frameworks coordinating [[Concurrency]] between asynchronous stages.
- ### Relationships
	- subClassOf:: [[Network Protocol]]
	- partOf:: [[Transport Layer]]
	- partOf:: [[Network Transport]]
	- hasPart:: [[Reliability]]
	- contrastsWith:: [[Congestion Control]]
	- uses:: [[Communication Protocols]]
	- uses:: [[Rate Limiting]]
	- supports:: [[QUIC]]
	- supports:: [[Reliability]]
	- enables:: [[Network Transport]]
	- enables:: [[Reliability]]
	- relatedTo:: [[Concurrency]]
	- relatedTo:: [[Congestion Control]]
	- relatedTo:: [[Network Protocol]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
