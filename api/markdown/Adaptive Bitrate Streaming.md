Adaptive bitrate streaming (ABR) is a media delivery technique that encodes content at multiple quality levels and dynamically switches between them in response to measured network throughput and client buffer state. The player requests short segments at the highest sustainable bitrate, smoothing playback over variable connections. It underpins modern over-the-top video via protocols such as HLS and MPEG-DASH delivered over HTTP and content delivery networks.

### Overview

- The source is encoded into a ladder of bitrate/resolution renditions and split into short, independently decodable segments.
- A manifest describes the available renditions; the client picks segments to maximise quality without rebuffering.
- ABR shifts adaptation logic to the client, allowing plain HTTP caching across a [[Content Delivery Network]].

### Key aspects

- A bitrate ladder of multiple quality renditions of the same content.
- Short segments enabling fast switching and HTTP cacheability.
- Client-driven rate adaptation from throughput and buffer estimates.
- Protocol families HLS and MPEG-DASH over standard HTTP.

### Mechanisms

- Segment-aligned encoding with keyframe boundaries per rendition.
- Manifest/playlist signalling of available variants.
- Throughput and buffer-occupancy estimation feeding rate-selection heuristics.
- Edge caching of segments via a [[Content Delivery Network]].

### Applications

- Over-the-top and live [[Video Streaming]] to heterogeneous devices.
- Low-latency event broadcasting over best-effort networks.
- Mobile playback resilient to fluctuating connectivity.
- Large-scale media distribution leveraging HTTP caches.

### Provenance

