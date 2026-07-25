public:: true
alias:: ContentDeliveryNetwork

# content delivery network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:330a2473f89fde85807a0dc55b1c49dff249d255d83a762cce16adea2cabbf7a",
  "@type": "Page",
  "vc:slug": "content-delivery-network",
  "title": "content delivery network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:content-delivery-network",
  "@type": "Class",
  "label": "Content Delivery Network",
  "definition": "A Content Delivery Network (CDN) is a geographically distributed system of edge servers and Points of Presence (PoPs) that cache, replicate, and serve web assets — static files, media streams, and increasingly dynamic API responses — from locations physically near end users, substantially reducing round-trip latency and offloading origin-server load. CDNs use anycast routing, DNS-based request steering, and intelligent load balancing to direct each client request to the nearest healthy PoP, with cache coherence governed by HTTP cache-control semantics (RFC 9111) and conditional request mechanisms. Modern CDNs have evolved into full edge-compute platforms, offering TLS termination, DDoS mitigation, Web Application Firewall (WAF) services, and serverless edge runtimes (e.g. Cloudflare Workers, Fastly Compute) that execute application logic at PoPs without origin round-trips, blurring the boundary between network infrastructure and distributed application hosting.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:edge-server",
        "label": "Edge Server"
      },
      {
        "@id": "urn:ngm:class:point-of-presence",
        "label": "Point of Presence"
      },
      {
        "@id": "urn:ngm:class:web-application-firewall",
        "label": "Web Application Firewall"
      },
      {
        "@id": "urn:ngm:class:load-balancer",
        "label": "Load Balancer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:internet-infrastructure",
        "label": "Internet Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:anycast-routing",
        "label": "Anycast Routing"
      },
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low-Latency Delivery"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:ddos-mitigation",
        "label": "DDoS Mitigation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http-caching",
        "label": "HTTP Caching"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:quic",
        "label": "HTTP/3 QUIC"
      },
      {
        "@id": "urn:ngm:class:anycast-routing",
        "label": "Anycast Routing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:scalability-pattern",
        "label": "Scalability Pattern"
      },
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Cloud Infrastructure"
      },
      {
        "@id": "urn:ngm:class:streaming-media",
        "label": "Streaming Media"
      },
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:origin-server",
        "label": "Origin Server"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge AI Inference"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-latency",
        "label": "Network Latency"
      },
      {
        "@id": "urn:ngm:class:reverse-proxy",
        "label": "Reverse Proxy"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cdn",
      "label": "CDN"
    },
    {
      "@id": "urn:ngm:class:content-distribution-network",
      "label": "Content Distribution Network"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **Content Delivery Network** (CDN) is a geographically distributed system of [[Edge Server]]s and [[Point of Presence]] (PoP) nodes that cache, replicate, and serve web assets — static files, video streams, and dynamic [[API Gateway]] responses — from locations near end users, reducing [[Network Latency]] and protecting origin infrastructure from load spikes. CDNs use [[Anycast Routing]] and [[DNS]]-based request steering to direct clients to the nearest healthy PoP. Modern CDNs extend this model with [[Edge Computing]] runtimes, [[DDoS Mitigation]], [[Web Application Firewall]] (WAF), and serverless compute at the edge, blurring the boundary between network delivery and distributed application hosting.

- ### Overview
  - CDNs emerged in the late 1990s to solve the fundamental problem of internet geography: physical distance between a user and an [[Origin Server]] adds measurable round-trip latency, compounded by network congestion and the TCP slow-start behaviour that penalises long-distance connections. By replicating content at edge PoPs distributed across metropolitan areas and Internet Exchange Points (IXPs), CDNs place assets one or two network hops from the majority of end users.
  - The canonical CDN model operates as a [[Reverse Proxy]] layer in front of the origin. A DNS CNAME record for a customer's domain resolves to CDN infrastructure; anycast or latency-based DNS returns the IP of the nearest PoP. If the requested asset is cached and fresh, it is served with minimal processing; on a cache miss the PoP fetches from the origin, stores the response, and simultaneously serves the requesting client.
  - Why it matters:
    - [[Web Performance]] directly affects user engagement and conversion rates — even 100 ms of additional latency degrades measurable business outcomes.
    - [[Scalability Pattern]] — CDN offload can absorb the majority of traffic for popular assets, enabling origins sized for dynamic workloads rather than peak static traffic.
    - [[Security]] posture — DDoS scrubbing and WAF rules at edge PoPs absorb volumetric attacks before they reach the origin, shrinking the attack surface.
    - Cost efficiency — serving cached assets via CDN egress is typically cheaper than equivalent origin egress costs on [[Cloud Infrastructure]].

- ### Key Components
  - **Points of Presence (PoPs)**
    - Facilities housing clusters of [[Edge Server]]s, co-located at or near major IXPs.
    - Each PoP terminates user connections, applies [[TLS]] handshakes, and serves cached responses.
    - Larger CDN operators maintain hundreds of PoPs globally; smaller operators use fewer, strategically placed nodes.
  - **Anycast Routing**
    - CDNs advertise the same IP prefix from multiple PoPs via [[BGP]], so the internet's routing fabric steers users to the topologically nearest announcement.
    - Combined with DNS-based steering, this gives sub-millisecond PoP selection from the user's perspective.
  - **HTTP Caching Layer**
    - Governed by [[HTTP Caching]] semantics: `Cache-Control`, `Expires`, `ETag`, `Last-Modified`, and `Vary` headers per RFC 9111.
    - Supports byte-range caching, stale-while-revalidate patterns, and surrogate-key / cache-tag purging for precise invalidation.
  - **Edge Compute Runtime**
    - Serverless [[Edge Computing]] environments (e.g., Cloudflare Workers, Fastly Compute, AWS Lambda@Edge, Akamai EdgeWorkers) run JavaScript or [[WebAssembly]] at PoPs.
    - Enables personalisation, A/B testing, authentication, and [[API Gateway]] logic without origin round-trips.
  - **TLS Termination**
    - [[TLS]] is terminated at the PoP, enabling OCSP stapling, session resumption, and certificate lifecycle management across the fleet.
    - Reduces TLS handshake latency by eliminating the distance penalty; supports HTTP/2 and [[HTTP/3 QUIC]].
  - **Load Balancer**
    - [[Load Balancer]]s within each PoP distribute requests across local caching nodes, with health checking and consistent hashing for cache key locality.
  - **Web Application Firewall (WAF)**
    - [[Web Application Firewall]] rulesets at the edge inspect HTTP requests for injection, XSS, and bot signatures, blocking malicious traffic before it reaches the origin.
  - **DDoS Mitigation**
    - [[DDoS Mitigation]] via traffic scrubbing centres, rate limiting, IP reputation databases, and challenge pages (CAPTCHAs / proof-of-work) absorbs volumetric and application-layer attacks.
  - **Origin Shield / Mid-Tier Caching**
    - An additional caching tier between edge PoPs and the origin that collapses concurrent cache-miss requests into a single upstream fetch (request collapsing), protecting origins from cache-stampede events.

- ### Mechanisms
  - **Request Steering**
    - DNS-based: CDN nameservers return geo-IP-resolved A/AAAA records pointing to a nearby PoP cluster.
    - Anycast-based: A single IP routes to the BGP-closest PoP; no DNS latency overhead on subsequent requests.
    - Real User Monitoring (RUM) data feeds machine learning models for adaptive PoP selection.
  - **Cache Coherence and Invalidation**
    - Time-to-live (TTL) expiry is the simplest mechanism; surrogate-key tagging allows CDN operators to purge all assets tagged with a specific key (e.g., a product ID) instantly.
    - Stale-while-revalidate serves slightly stale content while asynchronously refreshing — preserving performance during invalidation waves.
  - **Protocol Optimisations**
    - [[HTTP/3 QUIC]] eliminates head-of-line blocking inherent in TCP and improves performance on lossy [[Mobile Network]]s.
    - TLS 1.3 with 0-RTT resumption reduces connection latency for returning visitors.
    - HTTP/2 server push (deprecated in practice) and early hints (`103 Early Hints`) allow browsers to pre-fetch critical subresources.
  - **Streaming Delivery**
    - Adaptive bitrate streaming protocols (HLS, MPEG-DASH) rely on CDN edge nodes to serve manifest files and small segment files with minimal latency, enabling [[Streaming Media]] at scale.
  - **Bot Management**
    - ML-based bot detection classifies traffic at the edge, separating legitimate crawlers from credential-stuffing bots, reducing fraudulent load on origins and backend [[Database]] systems.

- ### Applications / Use Cases
  - **Static Website and Asset Delivery**
    - CSS, JavaScript bundles, images, and font files served from CDN edge nodes; virtually all modern static site hosting platforms rely on CDN as the delivery layer.
  - **Video Streaming**
    - Over-the-top (OTT) platforms like streaming video services deliver petabytes of [[Streaming Media]] content daily via CDN, using segment caching and adaptive bitrate to reach heterogeneous devices.
  - **Software Distribution**
    - OS updates, game patches, and application installers are distributed via CDN to handle coordinated global release events without overwhelming origin servers.
  - **API Acceleration**
    - Dynamic API responses can be cached at the edge using cache-control headers or edge workers, reducing backend load for frequently requested, slowly changing data.
  - **Security-as-a-Service**
    - Enterprises route all web traffic through CDN PoPs for WAF inspection and [[DDoS Mitigation]], effectively externalising perimeter security to the CDN operator's global scrubbing capacity.
  - **XR / Spatial Computing Content**
    - High-fidelity 3D assets, photogrammetry point clouds, and volumetric video for [[Spatial Computing]] and [[Extended Reality]] applications require CDN delivery to meet latency budgets for interactive XR experiences.
  - **Edge AI Inference**
    - Emerging use case: running lightweight [[Machine Learning]] inference (image classification, NLP scoring) at CDN PoPs using [[Edge AI Inference]] runtimes, reducing inference latency for real-time personalisation.
  - **Financial Services**
    - Low-latency delivery of market data and trading interfaces; [[Finance]] platforms use CDN to reduce page load time for trading dashboards and compliance document delivery.
  - **E-commerce**
    - Product image delivery, personalised page assembly via edge workers, and bot protection during flash-sale traffic spikes.

- ### Relationships
  - hasPart:: [[Edge Server]]
  - hasPart:: [[Point of Presence]]
  - hasPart:: [[Web Application Firewall]]
  - hasPart:: [[Load Balancer]]
  - partOf:: [[Internet Infrastructure]]
  - requires:: [[Anycast Routing]]
  - requires:: [[DNS]]
  - requires:: [[TLS]]
  - enables:: [[Low-Latency Delivery]]
  - enables:: [[Edge Computing]]
  - enables:: [[DDoS Mitigation]]
  - enables:: [[Origin Offload]]
  - uses:: [[HTTP Caching]]
  - uses:: [[Encryption]]
  - uses:: [[HTTP/3 QUIC]]
  - supports:: [[Scalability Pattern]]
  - supports:: [[Cloud Infrastructure]]
  - supports:: [[Streaming Media]]
  - supports:: [[Microservices Architecture]]
  - contrastsWith:: [[Peer-to-Peer Network]]
  - contrastsWith:: [[Origin Server]]
  - relatedTo:: [[Network Latency]]
  - relatedTo:: [[Web Performance]]
  - relatedTo:: [[Reverse Proxy]]
  - relatedTo:: [[Caching]]
  - bridges-to:: [[Edge AI Inference]]
  - bridges-to:: [[Spatial Computing]]

- ### Standards & Context
  - **RFC 9111** — HTTP Semantics: Caching (2022, IETF). Defines `Cache-Control`, `Vary`, `ETag`, conditional requests, and stale-while-revalidate. Supersedes RFC 7234.
  - **RFC 9000 / RFC 9001** — QUIC Transport Protocol and TLS for QUIC (2021, IETF). Basis for [[HTTP/3 QUIC]] support at CDN edge nodes.
  - **RFC 9110** — HTTP Semantics (2022, IETF). Core HTTP method and header semantics that CDN caching layers implement.
  - **W3C Resource Timing API** — Browser-level instrumentation for CDN performance measurement, used in [[Web Performance]] monitoring.
  - **IETF CDNI Working Group** — CDN Interconnection (CDNI) protocols (RFC 7336, RFC 8006, RFC 8007) for federating CDNs, enabling a downstream CDN to delegate requests to an upstream CDN.
  - **ISO/IEC 27001** — Relevant when CDN operators certify their infrastructure for enterprise security compliance.
  - **OWASP** — The OWASP Core Rule Set (CRS) is widely deployed in CDN-hosted WAF products, standardising SQL injection and XSS detection rules.
  - Key vendors and operators: Akamai, Cloudflare, Fastly, AWS CloudFront, Azure CDN, Google Cloud CDN, Limelight (Edgio), Bunny.net.
  - CDN market is mature — Akamai launched the first commercial CDN service in 1998. [[Distributed Systems]] principles (consistent hashing, eventual consistency, distributed cache invalidation) underpin CDN design at scale.
  - Regulatory context: CDN operators who store user-request logs must comply with [[Data Governance]] frameworks such as GDPR (EU) and data residency requirements, influencing PoP placement strategies.

- ### Provenance
  - sources:: IETF RFC 9111 (HTTP Caching), RFC 9000 (QUIC), IETF CDNI WG (RFC 7336), W3C Resource Timing Level 2, vendor documentation (Cloudflare, Akamai, Fastly), OWASP CRS
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
