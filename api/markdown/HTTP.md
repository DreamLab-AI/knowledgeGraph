public:: true

# HTTP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:863f56516448fcb5392faaf6e769fcc8fe564fbd3eca3b6807dafcd5bdfdf09c",
  "@type": "Page",
  "vc:slug": "http",
  "title": "HTTP",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transport-layer",
      "vc:label": "Transport Layer"
    },
    {
      "@id": "urn:visionflow:linked:api",
      "vc:label": "API"
    },
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocols",
      "vc:label": "Communication Protocols"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HTTP"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:http",
  "@type": "Class",
  "label": "HTTP",
  "definition": "The Hypertext Transfer Protocol, a stateless application-layer protocol for transferring hypertext and other resources between clients and servers that underpins the World Wide Web.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:application-layer",
    "label": "Application Layer"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      },
      {
        "@id": "urn:ngm:class:tcp",
        "label": "TCP"
      },
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      },
      {
        "@id": "urn:ngm:class:restful-api",
        "label": "RESTful API"
      },
      {
        "@id": "urn:ngm:class:web-browser",
        "label": "Web Browser"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:request-response-pattern",
        "label": "Request-Response Pattern"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:http-header",
        "label": "HTTP Header"
      },
      {
        "@id": "urn:ngm:class:http-status-code",
        "label": "HTTP Status Code"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:websocket",
        "label": "WebSocket"
      },
      {
        "@id": "urn:ngm:class:server-sent-events",
        "label": "Server-Sent Events"
      },
      {
        "@id": "urn:ngm:class:graph-ql",
        "label": "GraphQL"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:websocket",
        "label": "WebSocket"
      },
      {
        "@id": "urn:ngm:class:g-rpc",
        "label": "gRPC"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:communication-protocols",
        "label": "Communication Protocols"
      },
      {
        "@id": "urn:ngm:class:http2",
        "label": "HTTP/2"
      },
      {
        "@id": "urn:ngm:class:http3",
        "label": "HTTP/3"
      },
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:hypertext-transfer-protocol",
      "label": "Hypertext Transfer Protocol"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:http:e0603c499aae",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:863f56516448fcb5392faaf6e769fcc8fe564fbd3eca3b6807dafcd5bdfdf09c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transport Layer]]",
      "resolved": "urn:visionflow:linked:transport-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[API]]",
      "resolved": "urn:visionflow:linked:api",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocols]]",
      "resolved": "urn:visionflow:linked:communication-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Hypertext Transfer Protocol, a stateless application-layer protocol for transferring hypertext and other resources between clients and servers that underpins the World Wide Web.

- ### Semantic Classification
  - owl-class:: general:HTTP
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Application Layer]]
  - bridges-to:: [[Network Protocol]], [[Communication Protocols]]
  - requires:: [[Transport Layer]]
  - enables:: [[API]]

- ### Content
  - HTTP is a request-response application-layer protocol in which a client sends a request specifying a method, target resource and headers, and a server returns a status code, headers and an optional body. It is stateless by design, with each request handled independently, and forms the foundation of communication on the World Wide Web.
  - Successive versions have improved performance and security: HTTP/1.1 introduced persistent connections, HTTP/2 added multiplexing over a single connection, and HTTP/3 runs over QUIC to reduce latency. HTTP underpins RESTful APIs and most web traffic.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
