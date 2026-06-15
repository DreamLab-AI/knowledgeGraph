public:: true

# CDN
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdn",
  "@type": "Page",
  "vc:slug": "cdn",
  "title": "CDN",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cdn",
  "@type": "Class",
  "label": "CDN",
  "definition": "A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and data centres that caches and serves web content from locations physically close to end users, reducing latency, relieving origin server load, and improving resilience against traffic spikes and denial-of-service attacks. CDNs operate through anycast routing, edge caching policies, and real-time traffic steering algorithms to deliver optimal user experience across diverse network conditions.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:content-delivery-network", "label": "Content Delivery Network"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"},
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"},
      {"@id": "urn:ngm:class:anycast-routing", "label": "Anycast Routing"},
      {"@id": "urn:ngm:class:tls", "label": "TLS"},
      {"@id": "urn:ngm:class:dns", "label": "DNS"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:point-of-presence", "label": "Point of Presence"},
      {"@id": "urn:ngm:class:edge-cache", "label": "Edge Cache"},
      {"@id": "urn:ngm:class:web-application-firewall", "label": "Web Application Firewall"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:internet-infrastructure", "label": "Internet Infrastructure"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:origin-server", "label": "Origin Server"},
      {"@id": "urn:ngm:class:load-balancing", "label": "Load Balancing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bandwidth-optimization", "label": "Bandwidth Optimization"},
      {"@id": "urn:ngm:class:latency", "label": "Latency"},
      {"@id": "urn:ngm:class:ddos-mitigation", "label": "DDoS Mitigation"},
      {"@id": "urn:ngm:class:serverless-edge-compute", "label": "Serverless Edge Compute"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:border-gateway-protocol", "label": "Border Gateway Protocol"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:video-streaming", "label": "Video Streaming"},
      {"@id": "urn:ngm:class:adaptive-bitrate-streaming", "label": "Adaptive Bitrate Streaming"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:internet-infrastructure", "label": "Internet Infrastructure"},
      {"@id": "urn:ngm:class:content-delivery-network-cdn", "label": "Content Delivery Network (CDN)"},
      {"@id": "urn:ngm:class:http-caching", "label": "HTTP Caching"},
      {"@id": "urn:ngm:class:ddos-protection", "label": "DDoS Protection"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:content-delivery-network", "label": "Content Delivery Network"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A CDN is a distributed caching and delivery architecture in which static and increasingly dynamic content is served from [[Edge Computing]] nodes — termed points of presence (PoPs) — positioned at internet exchange points and metropolitan data centres worldwide. By reducing the number of network hops between a user and the responding server, CDNs minimise [[Latency]] and achieve [[Bandwidth Optimization]] at the origin. They implement [[Network Security]] functions including TLS termination, DDoS mitigation, and web application firewall (WAF) capabilities alongside content delivery, exploiting their network vantage point to absorb volumetric attack traffic before it reaches infrastructure.

- ### Relationships
  - CDNs are a specialisation of [[Content Delivery Network]] and a constituent component of the broader [[Internet Infrastructure]]. They rely on [[Edge Computing]] infrastructure for PoP deployment and [[Network Protocol]] standards (HTTP/2, HTTP/3, QUIC) to optimise transfer efficiency. Integration with [[Cloud Infrastructure]] platforms allows hybrid origin architectures. [[Bandwidth Optimization]] through compression, image format conversion, and connection multiplexing is a standard CDN feature, and [[Network Security]] is increasingly a primary value proposition for CDN operators competing against dedicated DDoS mitigation vendors.

- ### Content
  - The CDN concept originated at MIT in the late 1990s, with Akamai Technologies commercialising the first large-scale network in 1998 in response to the "flash crowd" problem — the tendency for popular web content to overwhelm origin servers during traffic spikes. Early CDNs focused on static asset delivery (images, JavaScript, CSS), using DNS-based load balancing to direct users to the nearest PoP. HTTP caching headers (Cache-Control, ETag, Vary) provided the mechanism for CDN edge nodes to determine which content to cache and for how long, while edge purge APIs allowed content publishers to invalidate cached objects on demand.

  - Technically, modern CDNs operate through several layers of intelligence: anycast BGP routing attracts user traffic to the topologically nearest PoP; request routing engines analyse user geolocation, real-user monitoring (RUM) latency data, and origin health to select the optimal edge node; content is fetched from the origin (or a shield layer) on cache miss and stored in tiered SSD and memory caches governed by TTL and LRU eviction policies; and dynamic content is accelerated through persistent TCP connections to the origin, optimised TLS session resumption, and route optimisation across CDN backbone links that bypass congested public internet paths. HTTP/3 and QUIC protocols, with their multiplexed streams and connection migration, are now default on major CDN platforms.

  - The CDN market is dominated by Cloudflare, Akamai, Fastly, AWS CloudFront, and Azure CDN, with Chinese operators including Alibaba Cloud CDN serving Asia-Pacific markets. CDN capabilities have expanded significantly beyond static caching: serverless edge compute platforms (Cloudflare Workers, Fastly Compute) execute JavaScript or WebAssembly at the PoP, enabling personalisation, A/B testing, and authentication without round-trips to origin. Edge streaming delivery for live and on-demand video is a high-value workload, with adaptive bitrate streaming and low-latency HLS/DASH delivery requiring specialised cache warming and manifest manipulation at the edge.

  - In 2024–2025, CDNs are integrating AI-driven caching prediction models that prefetch content before it is requested based on user behaviour patterns, and ML-based image optimisation pipelines that select format, resolution, and compression level per user device. Security capabilities have expanded to include bot management using behavioural signals, credential stuffing detection, and API security with schema validation at the edge. Private CDN deployments using enterprise PoP networks — operated by hyperscalers within their global backbone — are displacing public CDN for latency-sensitive enterprise applications, while CDN providers are extending to IoT and industrial edge workloads through their distributed PoP footprint.

