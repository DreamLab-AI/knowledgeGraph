public:: true

# Origin Server

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:origin-server",
  "@type": "Page",
  "title": "Origin Server",
  "vc:slug": "origin-server",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:origin-server",
  "@type": "Class",
  "label": "Origin Server",
  "definition": "An origin server is the authoritative source of truth for web content, hosting the original, canonical version of resources that a content delivery network and its edge caches replicate and serve to end users. When an edge node lacks a requested resource or its cached copy has expired, it fetches the content from the origin server. By concentrating authoritative content and offloading repeat delivery to caches, the origin-edge model improves performance, scalability, and resilience.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cdn",
      "label": "CDN"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:cdn",
      "label": "CDN"
    },
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:edge-server",
        "label": "Edge Server"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      }
    ],
    "dependsOn": {
      "@id": "urn:ngm:class:http",
      "label": "HTTP"
    },
    "enables": [
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:reverse-proxy",
        "label": "Reverse Proxy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cdn",
        "label": "CDN"
      },
      {
        "@id": "urn:ngm:class:load-balancer",
        "label": "Load Balancer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reverse-proxy",
        "label": "Reverse Proxy"
      },
      {
        "@id": "urn:ngm:class:edge-server",
        "label": "Edge Server"
      }
    ],
    "bridgesTo": {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
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
  - An [[Origin Server]] is the authoritative source behind a [[CDN]].
  - Edge caches fetch from it over [[HTTP]] when content is missing or stale.
  - It contrasts with the [[Edge Server]] that serves cached copies close to users.
- ### Overview
  - The origin server holds the canonical, up-to-date copy of every resource the service publishes.
  - Edge caches serve most requests directly, falling back to the origin only on cache misses or expiry.
  - Cache-control headers from the origin govern how long edges may serve content before revalidating.
  - Offloading repeat delivery to the edge protects the origin from load spikes and reduces latency.
- ### Key aspects
  - Authoritative content — the single source of truth for canonical resources.
  - Cache-miss fill — supplying content to edge nodes when caches lack it.
  - Cache-control directives — instructing edges on freshness and revalidation.
  - Origin shielding — an intermediate tier reducing direct origin requests.
  - Resilience — origin protection through caching, rate limiting, and failover.
- ### Applications
  - Static and dynamic website delivery behind a CDN.
  - Media and software distribution offloaded to edge caches.
  - API back-ends fronted by edge caching and reverse proxies.
  - Origin shielding to withstand traffic surges and attacks.
- ### Relationships
  - An origin server is part of a CDN and contrasts with the edge server that caches its content.
  - partOf:: [[CDN]]
  - contrastsWith:: [[Edge Server]]
  - requires:: [[HTTP]]
  - requires:: [[Infrastructure]]
  - hasPart:: [[Caching]]
  - dependsOn:: [[HTTP]]
  - enables:: [[Content Delivery Network]]
  - enables:: [[Caching]]
  - uses:: [[HTTP]]
  - uses:: [[Reverse Proxy]]
  - supports:: [[CDN]]
  - supports:: [[Load Balancer]]
  - relatedTo:: [[Reverse Proxy]]
  - relatedTo:: [[Edge Server]]
  - bridgesTo:: [[Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
