public:: true

# RTCP Feedback
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rtcp-feedback",
  "@type": "Page",
  "vc:slug": "rtcp-feedback",
  "title": "RTCP Feedback",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rtcp-feedback",
  "@type": "Class",
  "label": "RTCP Feedback",
  "definition": "RTCP feedback is the control-channel mechanism of the RTP Control Protocol by which receivers report reception quality, such as packet loss, jitter, and round-trip time, back to senders during real-time media streaming. Senders use these reports, along with extensions like NACK, PLI, and REMB, to adapt encoding bitrate and recover from loss. It is the feedback loop that enables congestion-aware, resilient audiovisual transport.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:bandwidth-adaptation", "label": "Bandwidth Adaptation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - RTCP feedback reports reception quality from receivers to senders during real-time streaming, a control mechanism required by [[Bandwidth Adaptation]].
- ### Content
  - Receiver reports carry loss, jitter, and timing statistics, while feedback messages such as NACK, PLI, and REMB signal retransmission and rate hints. Senders use this to tune bitrate, request keyframes, and respond to congestion, keeping interactive media smooth under changing network conditions.
