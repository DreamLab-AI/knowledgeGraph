public:: true

# Caching
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:caching", "@type":"Page", "title":"Caching", "vc:slug":"caching", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:caching",
  "@type":"Class",
  "label":"Caching",
  "definition":"Caching is the technique of storing copies of frequently accessed data or computed results in a faster, closer storage tier so that subsequent requests can be served without repeating the expensive original operation. It trades additional memory or storage for reduced latency and lower load on backend systems, governed by policies for placement, expiry and invalidation. Caches appear at every layer of a system, from CPU registers and operating systems to content delivery networks and application-level stores.",
  "vc:plainGloss":"Keeping a ready copy of something you have already fetched or worked out, so the next time it is asked for you can hand it over instantly instead of doing the slow work again — like keeping your most-used files on the desk rather than in the archive.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:performance-optimization","label":"Performance Optimization"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:performance-optimization","label":"Performance Optimization"}],
    "supports":[{"@id":"urn:ngm:class:scalability","label":"Scalability"},{"@id":"urn:ngm:class:throughput","label":"Throughput"}],
    "enables":[{"@id":"urn:ngm:class:latency","label":"Latency"}],
    "uses":[{"@id":"urn:ngm:class:memory-management","label":"Memory Management"},{"@id":"urn:ngm:class:state-management","label":"State Management"}],
    "hasPart":[{"@id":"urn:ngm:class:content-delivery-network","label":"Content Delivery Network"}],
    "relatedTo":[{"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"},{"@id":"urn:ngm:class:load-balancing","label":"Load Balancing"},{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"},{"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"}],
    "dependsOn":[{"@id":"urn:ngm:class:memory-management","label":"Memory Management"}],
    "contrastsWith":[{"@id":"urn:ngm:class:in-memory-computing","label":"In-Memory Computing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:content-delivery-network","label":"Content Delivery Network"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Caching stores copies of frequently used data in a faster tier so repeat requests avoid the original expensive operation. It is a foundational element of [[Performance Optimization]], reducing [[Latency]] and improving [[Throughput]] while supporting [[Scalability]] across [[Distributed Systems]].
- ### In Plain Terms
- Keeping a ready copy of something you have already fetched or worked out, so the next time it is asked for you can hand it over instantly instead of doing the slow work again — like keeping your most-used files on the desk rather than in the archive.
- ### Overview
- A cache sits between a consumer and an authoritative data source, intercepting reads and serving them from local fast storage when a copy is present (a cache hit). When the data is absent (a cache miss) the request falls through to the source and the result is typically stored for future use.
- The effectiveness of a cache is measured by its hit ratio: the fraction of requests satisfied from the cache. High hit ratios are achieved by exploiting temporal and spatial locality in access patterns.
- Caches exist at many layers: hardware caches in CPUs, page caches in operating systems, in-process application caches, distributed in-memory stores, reverse proxies, and globally distributed content delivery networks.
- The central engineering challenge is invalidation: keeping cached copies consistent with the source as the underlying data changes. Famously, naming things and cache invalidation are considered two of the hard problems in computing.
- ### Mechanisms
- Eviction policies decide which entries to discard when capacity is reached, including least-recently-used (LRU), least-frequently-used (LFU) and first-in-first-out (FIFO).
- Expiry strategies use time-to-live (TTL) values or explicit invalidation events to bound staleness.
- Write strategies include write-through (update cache and source together), write-back (defer source updates) and write-around (bypass the cache on writes).
- Cache placement may be local to a process, shared across a node, or distributed across a cluster with consistent hashing to spread keys.
- Stampede protection, such as request coalescing and probabilistic early expiration, prevents many simultaneous misses from overwhelming the source.
- ### Applications
- Web acceleration via reverse proxies and [[Content Delivery Network]] edges that cache static and dynamic responses near users.
- Database query result and object caching to relieve load on relational and document stores.
- Session and computed-result caching in application servers to avoid recomputation.
- API response caching to reduce upstream calls and improve perceived responsiveness.
- Edge caching combined with [[Edge Computing]] to bring data and compute closer to consumers.
- ### Key aspects
- Consistency models range from strong (always fresh) to eventual (bounded staleness), chosen per use case.
- Observability of hit ratio, eviction rate and latency is essential for tuning cache size and policy.
- Memory pressure interacts with [[Memory Management]] and garbage collection in hosting runtimes.
- ### Relationships
- partOf:: [[Performance Optimization]]
- supports:: [[Scalability]]
- supports:: [[Throughput]]
- enables:: [[Latency]]
- uses:: [[Memory Management]]
- uses:: [[State Management]]
- hasPart:: [[Content Delivery Network]]
- relatedTo:: [[Edge Computing]]
- relatedTo:: [[Load Balancing]]
- relatedTo:: [[Distributed Systems]]
- relatedTo:: [[Data Pipeline]]
- dependsOn:: [[Memory Management]]
- contrastsWith:: [[In-Memory Computing]]
- bridgesTo:: [[Content Delivery Network]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
