public:: true

# Live Streaming
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:live-streaming",
  "@type": "Page",
  "title": "Live Streaming",
  "vc:slug": "live-streaming",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:live-streaming",
  "@type": "Class",
  "label": "Live Streaming",
  "definition": "Live Streaming is the real-time delivery of audio and video over a network as the content is captured, allowing audiences to view events with minimal delay rather than after recording. It relies on continuous encoding, packetisation, and adaptive distribution through content delivery networks to reach large, geographically dispersed audiences. Live streaming trades the buffering headroom of on-demand playback for low end-to-end latency, demanding careful management of bitrate adaptation, jitter, and edge caching.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:video-streaming",
      "label": "Video Streaming"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
      },
      {
        "@id": "urn:ngm:class:content-delivery",
        "label": "Content Delivery"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low Latency"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:cdn",
        "label": "CDN"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:user-engagement",
        "label": "User Engagement"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:content-delivery",
        "label": "Content Delivery"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Live Streaming is the real-time delivery of audio and video over a network as the content is captured, allowing audiences to view events with minimal delay rather than after recording. It relies on continuous encoding, packetisation, and adaptive distribution through content delivery networks to reach large, geographically dispersed audiences. Live streaming trades the buffering headroom of on-demand playback for low end-to-end latency, demanding careful management of bitrate adaptation, jitter, and edge caching.
  - Related concepts: [[Video Streaming]] [[Content Delivery Network]] [[Low Latency]] [[Edge Computing]] [[Real-Time Communication]]
- ### Overview
  - Live Streaming powers broadcasts, gaming, conferencing, and interactive media where immediacy is essential. A capture source feeds a continuous encoder that segments the stream for adaptive-bitrate delivery, after which a [[Content Delivery Network]] fans the content out to edge nodes close to viewers. Reducing glass-to-glass latency while preserving resilience under bandwidth fluctuation is the central engineering challenge, distinguishing it from on-demand [[Video Streaming]].
- ### Key aspects
  - Continuous real-time encoding and segmentation of source media.
  - Adaptive-bitrate distribution to handle heterogeneous [[Bandwidth]].
  - Low-latency protocols balancing immediacy against buffering safety.
  - Edge caching and [[Content Delivery Network]] fan-out for scale.
  - Interactivity layers such as chat and synchronised events.
- ### Applications
  - Sports and concert broadcasting to global audiences.
  - Game streaming and esports platforms.
  - Live commerce and interactive shopping events.
  - Webinars and real-time corporate communications.
- ### Relationships
  - partOf:: [[Video Streaming]]
  - partOf:: [[Content Delivery]]
  - hasPart:: [[Bandwidth]]
  - hasPart:: [[Network Protocol]]
  - requires:: [[Content Delivery Network]]
  - requires:: [[Low Latency]]
  - uses:: [[Edge Computing]]
  - uses:: [[CDN]]
  - enables:: [[User Engagement]]
  - supports:: [[Real-Time Communication]]
  - dependsOn:: [[Bandwidth]]
  - relatedTo:: [[Content Delivery]]
  - relatedTo:: [[Network Protocol]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
