public:: true

# Selective Forwarding Unit
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-selective-forwarding-unit",
  "@type": "Page",
  "vc:slug": "selective-forwarding-unit",
  "title": "Selective Forwarding Unit",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:selective-forwarding-unit",
  "@type": "Class",
  "label": "Selective Forwarding Unit",
  "definition": "A Selective Forwarding Unit (SFU) is a media server architecture used in multi-party real-time communication that receives media streams from each participant and selectively forwards them to other participants without mixing or decoding the content. This approach reduces server-side computational cost compared to Multipoint Control Units (MCUs) while still enabling scalable group video and audio sessions. SFUs allow clients to subscribe to individual streams, supporting adaptive bitrate and simulcast strategies.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-protocol-and-infra", "label": "Protocol and Infrastructure"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:webrtc", "label": "WebRTC"},
      {"@id": "urn:ngm:class:real-time-synchronisation", "label": "Real-Time Synchronisation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:signaling-server", "label": "Signaling Server"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A Selective Forwarding Unit is a media server that routes individual participant streams in multi-party real-time sessions without decoding or mixing them, enabling scalable group video and audio collaboration.
