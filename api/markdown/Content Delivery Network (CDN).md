public:: true

# Content Delivery Network (CDN)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff5effa6442e4ed2ba51af2bc9215b3ca9a8dc0474a7aa787378736a2d5f0d4a",
  "@type": "Page",
  "vc:slug": "content-delivery-network-cdn",
  "title": "Content Delivery Network (CDN)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cache-system",
      "vc:label": "Cache System"
    },
    {
      "@id": "urn:visionflow:linked:data-center",
      "vc:label": "Data Center"
    },
    {
      "@id": "urn:visionflow:linked:ddo-s-protection",
      "vc:label": "DDoS Protection"
    },
    {
      "@id": "urn:visionflow:linked:dns-service",
      "vc:label": "DNS Service"
    },
    {
      "@id": "urn:visionflow:linked:edge-server",
      "vc:label": "Edge Server"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:ewg-msf-taxonomy",
      "vc:label": "EWG/MSF taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:geographic-redundancy",
      "vc:label": "Geographic Redundancy"
    },
    {
      "@id": "urn:visionflow:linked:internet-service-provider",
      "vc:label": "Internet Service Provider"
    },
    {
      "@id": "urn:visionflow:linked:load-balancer",
      "vc:label": "Load Balancer"
    },
    {
      "@id": "urn:visionflow:linked:low-latency-content-delivery",
      "vc:label": "Low-Latency Content Delivery"
    },
    {
      "@id": "urn:visionflow:linked:origin-server",
      "vc:label": "Origin Server"
    },
    {
      "@id": "urn:visionflow:linked:routing-protocol",
      "vc:label": "Routing Protocol"
    },
    {
      "@id": "urn:visionflow:linked:scalable-distribution",
      "vc:label": "Scalable Distribution"
    },
    {
      "@id": "urn:visionflow:linked:storage-system",
      "vc:label": "Storage System"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "Network Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:network-layer",
      "vc:label": "Network Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "Physical Layer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20103"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Content Delivery Network (CDN)"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:content-delivery-network-cdn",
  "@type": "Class",
  "label": "Content Delivery Network (CDN)",
  "definition": "A geographically distributed network of proxy servers and data centers designed to provide high availability, high performance, and low latency content delivery by caching content closer to end-users.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    },
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:cache-layer",
        "label": "Cache System"
      },
      {
        "@id": "urn:ngm:class:edge-server",
        "label": "Edge Server"
      },
      {
        "@id": "urn:ngm:class:load-balancer",
        "label": "Load Balancer"
      },
      {
        "@id": "urn:ngm:class:origin-server",
        "label": "Origin Server"
      },
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS Service"
      },
      {
        "@id": "urn:ngm:class:storage-systems",
        "label": "Storage Systems"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:content-delivery-network-cdn:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff5effa6442e4ed2ba51af2bc9215b3ca9a8dc0474a7aa787378736a2d5f0d4a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cache System]]",
      "resolved": "urn:visionflow:linked:cache-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Center]]",
      "resolved": "urn:visionflow:linked:data-center",
      "kind": "StubLink"
    },
    {
      "raw": "[[DDoS Protection]]",
      "resolved": "urn:visionflow:linked:ddo-s-protection",
      "kind": "StubLink"
    },
    {
      "raw": "[[DNS Service]]",
      "resolved": "urn:visionflow:linked:dns-service",
      "kind": "StubLink"
    },
    {
      "raw": "[[Edge Server]]",
      "resolved": "urn:visionflow:linked:edge-server",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[EWG/MSF taxonomy]]",
      "resolved": "urn:visionflow:linked:ewg-msf-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Geographic Redundancy]]",
      "resolved": "urn:visionflow:linked:geographic-redundancy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Internet Service Provider]]",
      "resolved": "urn:visionflow:linked:internet-service-provider",
      "kind": "StubLink"
    },
    {
      "raw": "[[Load Balancer]]",
      "resolved": "urn:visionflow:linked:load-balancer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Low-Latency Content Delivery]]",
      "resolved": "urn:visionflow:linked:low-latency-content-delivery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Origin Server]]",
      "resolved": "urn:visionflow:linked:origin-server",
      "kind": "StubLink"
    },
    {
      "raw": "[[Routing Protocol]]",
      "resolved": "urn:visionflow:linked:routing-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scalable Distribution]]",
      "resolved": "urn:visionflow:linked:scalable-distribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Storage System]]",
      "resolved": "urn:visionflow:linked:storage-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Infrastructure Domain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:network-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Layer]]",
      "resolved": "urn:visionflow:owl:class:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:owl:class:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physical Layer]]",
      "resolved": "urn:visionflow:owl:class:physical-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A geographically distributed network of proxy servers and data centers designed to provide high availability, high performance, and low latency content delivery by caching content closer to end-users.

- ### Semantic Classification
  - owl-class:: infrastructure:ContentDeliveryNetwork
  - owl-role:: Object
  - owl-inferred:: infrastructure:PhysicalObject
  - belongs-to-domain:: [[Infrastructure Domain]]
  - implemented-in-layer:: [[Physical Layer]], [[Network Layer]]

- ### Relationships
  - bridges-to:: [[Computer Vision]]
  - has-part:: [[Edge Server]], [[Cache System]], [[Load Balancer]], [[Origin Server]], [[Routing Protocol]]
  - is-part-of:: [[Network Infrastructure]]
  - requires:: [[Network Infrastructure]], [[Storage System]], [[DNS Service]]
  - enables:: [[Low-Latency Content Delivery]], [[Scalable Distribution]], [[Geographic Redundancy]], [[DDoS Protection]]
  - depends-on:: [[Internet Service Provider]], [[Data Center]], [[Network Protocol]]

- ### Content
  Content Delivery Network (CDN) — content pending enrichment.

- ### Provenance
  - sources:: [[EWG/MSF taxonomy]], [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
