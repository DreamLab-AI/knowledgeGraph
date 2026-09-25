An origin server is the authoritative source of truth for web content, hosting the original, canonical version of resources that a content delivery network and its edge caches replicate and serve to end users. When an edge node lacks a requested resource or its cached copy has expired, it fetches the content from the origin server. By concentrating authoritative content and offloading repeat delivery to caches, the origin-edge model improves performance, scalability, and resilience.

### Overview

- The origin server holds the canonical, up-to-date copy of every resource the service publishes.
- Edge caches serve most requests directly, falling back to the origin only on cache misses or expiry.
- Cache-control headers from the origin govern how long edges may serve content before revalidating.
- Offloading repeat delivery to the edge protects the origin from load spikes and reduces latency.

### Key aspects

- Authoritative content — the single source of truth for canonical resources.
- Cache-miss fill — supplying content to edge nodes when caches lack it.
- Cache-control directives — instructing edges on freshness and revalidation.
- Origin shielding — an intermediate tier reducing direct origin requests.
- Resilience — origin protection through caching, rate limiting, and failover.

### Applications

- Static and dynamic website delivery behind a CDN.
- Media and software distribution offloaded to edge caches.
- API back-ends fronted by edge caching and reverse proxies.
- Origin shielding to withstand traffic surges and attacks.

### Provenance

