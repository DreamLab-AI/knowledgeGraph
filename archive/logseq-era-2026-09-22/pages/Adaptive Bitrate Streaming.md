public:: true

# Adaptive Bitrate Streaming

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:adaptive-bitrate-streaming",
  "@type": "Page",
  "title": "Adaptive Bitrate Streaming",
  "vc:slug": "adaptive-bitrate-streaming",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:adaptive-bitrate-streaming",
  "@type": "Class",
  "label": "Adaptive Bitrate Streaming",
  "definition": "Adaptive bitrate streaming (ABR) is a media delivery technique that encodes content at multiple quality levels and dynamically switches between them in response to measured network throughput and client buffer state. The player requests short segments at the highest sustainable bitrate, smoothing playback over variable connections. It underpins modern over-the-top video via protocols such as HLS and MPEG-DASH delivered over HTTP and content delivery networks.",
  "domain": "infrastructure",
  "maturity": "established",
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
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:codec",
        "label": "Codec"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lossy-compression",
        "label": "Lossy Compression"
      },
      {
        "@id": "urn:ngm:class:mpeg",
        "label": "MPEG"
      },
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lossless-compression",
        "label": "Lossless Compression"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Adaptive Bitrate Streaming]] encodes media at multiple quality renditions and switches between them based on real-time network and buffer conditions.
  - It is a delivery layer within [[Streaming Media]], built on [[Video Compression]] and HTTP segment transfer.
  - It depends on a [[Content Delivery Network]] to serve segments close to the viewer.
- ### Overview
  - The source is encoded into a ladder of bitrate/resolution renditions and split into short, independently decodable segments.
  - A manifest describes the available renditions; the client picks segments to maximise quality without rebuffering.
  - ABR shifts adaptation logic to the client, allowing plain HTTP caching across a [[Content Delivery Network]].
- ### Key aspects
  - A bitrate ladder of multiple quality renditions of the same content.
  - Short segments enabling fast switching and HTTP cacheability.
  - Client-driven rate adaptation from throughput and buffer estimates.
  - Protocol families HLS and MPEG-DASH over standard HTTP.
- ### Mechanisms
  - Segment-aligned encoding with keyframe boundaries per rendition.
  - Manifest/playlist signalling of available variants.
  - Throughput and buffer-occupancy estimation feeding rate-selection heuristics.
  - Edge caching of segments via a [[Content Delivery Network]].
- ### Applications
  - Over-the-top and live [[Video Streaming]] to heterogeneous devices.
  - Low-latency event broadcasting over best-effort networks.
  - Mobile playback resilient to fluctuating connectivity.
  - Large-scale media distribution leveraging HTTP caches.
- ### Relationships
  - partOf:: [[Video Streaming]]
  - implements:: [[Video Compression]]
  - hasPart:: [[Codec]]
  - uses:: [[Video Compression]]
  - uses:: [[Content Delivery Network]]
  - enables:: [[Video Streaming]]
  - supports:: [[Network Protocol]]
  - requires:: [[Data Compression]]
  - dependsOn:: [[Content Delivery Network]]
  - relatedTo:: [[Lossy Compression]]
  - relatedTo:: [[MPEG]]
  - relatedTo:: [[Bandwidth]]
  - contrastsWith:: [[Lossless Compression]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
