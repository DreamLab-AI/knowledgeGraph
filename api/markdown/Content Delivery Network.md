public:: true

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
  "definition": "A Content Delivery Network (CDN) is a geographically distributed system of edge servers and Points of Presence (PoPs) that cache, replicate, and serve web assets — static files, media streams, and increasingly dynamic API responses — from locations physically near end users, thereby reducing round-trip latency and offloading origin infrastructure. CDNs employ anycast routing and DNS-based request steering to direct clients to the nearest healthy PoP. Beyond caching, modern CDNs provide TLS termination, DDoS mitigation, Web Application Firewall (WAF) services, and edge compute runtimes.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Infra Network and Comms"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:latency", "label": "Latency"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:scalability-pattern", "label": "Scalability Pattern"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A Content Delivery Network (CDN) is a geographically distributed system of edge servers and Points of Presence (PoPs) that cache, replicate, and serve web assets — static files, media streams, and increasingly dynamic API responses — from locations physically near end users, thereby reducing round-trip latency and offloading origin infrastructure. CDNs employ anycast routing and DNS-based request steering to direct clients to the nearest healthy PoP. Beyond caching, modern CDNs provide TLS termination, DDoS mitigation, Web Application Firewall (WAF) services, and edge compute runtimes.

- ### Semantic Classification
  - owl-class:: content-delivery-network:Content Delivery Network
  - owl-role:: Concept

- ### Relationships
  - enables [[Latency]] reduction
  - enables [[Edge Computing]]
  - uses [[Network Infrastructure]]
  - uses [[Encryption]]
  - supports [[Scalability Pattern]]
  - supports [[Cloud Infrastructure]]

- ### Content
  - A CDN's architecture is built around geographically dispersed PoPs, each containing clusters of caching servers. When a user requests a resource, the CDN's DNS resolver or anycast routing layer directs the request to the nearest PoP. If the asset is cached and fresh (validated via cache-control headers and ETags per HTTP/1.1 and HTTP/2 semantics), it is served immediately; otherwise, the PoP fetches from the origin, caches the response, and serves the client. This origin-offload pattern reduces egress bandwidth costs and shields origin servers from traffic spikes.
  - Modern CDNs have expanded well beyond static asset caching. Edge computing runtimes — such as Cloudflare Workers, Fastly Compute, and AWS Lambda@Edge — allow execution of JavaScript or WebAssembly at PoPs, enabling personalisation, A/B testing, authentication, and API routing without round-trips to the origin. HTTP/3 (QUIC) support at edge PoPs further reduces connection establishment latency, particularly for mobile clients on lossy networks. TLS termination at the edge also means that Encryption is centralised at PoPs, simplifying certificate management for origin infrastructure.
  - CDNs interact with Cloud Infrastructure for origin hosting and with Microservices Architecture for API delivery. DDoS mitigation capabilities — traffic scrubbing, rate limiting, IP reputation filtering — make CDNs an integral layer of the security perimeter. Standards bodies such as the IETF define the HTTP caching semantics (RFC 9111) and QUIC transport (RFC 9000) that CDNs implement. Network Latency reduction remains the core value proposition, with Edge Computing an increasingly strategic differentiation vector.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
