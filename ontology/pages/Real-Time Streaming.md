public:: true

# Real-Time Streaming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:real-time-streaming",
  "@type": "Page",
  "vc:slug": "real-time-streaming",
  "title": "Real-Time Streaming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-streaming",
  "@type": "Class",
  "label": "Real-Time Streaming",
  "definition": "Real-time streaming is the continuous delivery of data, audio, or video as an ongoing flow consumed incrementally with minimal latency rather than downloaded in full beforehand. It uses low-latency transport protocols and buffering strategies to balance smoothness against delay. It underpins live media, event streams, and interactive low-latency experiences.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agent-event-stream", "label": "Agent Event Stream"},
      {"@id": "urn:ngm:class:virtual-performance-space", "label": "Virtual Performance Space"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Real-time streaming delivers continuous data or media incrementally with minimal latency. It is a constituent part of an [[Agent Event Stream]] and is required by a [[Virtual Performance Space]] for live experiences.
- ### Content
  - Protocols range from chunked HTTP adaptive streaming (HLS, DASH) for media to WebRTC and RTP for sub-second interactivity, and Kafka/SSE for event data. Engineering trade-offs centre on the latency-versus-resilience balance: smaller buffers cut delay but increase sensitivity to jitter and packet loss.
