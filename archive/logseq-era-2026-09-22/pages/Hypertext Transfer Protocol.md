public:: true

# Hypertext Transfer Protocol

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:hypertext-transfer-protocol",
  "@type": "Page",
  "title": "Hypertext Transfer Protocol",
  "vc:slug": "hypertext-transfer-protocol",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hypertext-transfer-protocol",
  "@type": "Class",
  "label": "Hypertext Transfer Protocol",
  "definition": "The Hypertext Transfer Protocol (HTTP) is an application-layer, request-response protocol for exchanging hypermedia documents and data across the web. Clients issue requests with methods and headers, and servers return responses with status codes and content. HTTP is the foundational protocol of the World Wide Web and of most modern web APIs.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:application-layer",
      "label": "Application Layer"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transmission-control-protocol",
        "label": "Transmission Control Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:transmission-control-protocol",
        "label": "Transmission Control Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transmission-control-protocol",
        "label": "Transmission Control Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:http2",
        "label": "HTTP2"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:http",
      "label": "HTTP"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The [[Hypertext Transfer Protocol]] is the request-response protocol that powers the web.
  - It is an [[Application Layer]] protocol that traditionally runs over [[Transmission Control Protocol]].
  - It underlies the [[REST API]] style and most web [[API]] interactions, and is secured by [[TLS]].
- ### Overview
  - HTTP defines how clients ask for resources and how servers respond, using a small set of methods and a rich header model.
  - It is stateless by design: each request is independent, with state layered on top via cookies and tokens.
  - Successive versions improved performance through persistent connections, multiplexing, and header compression.
  - HTTPS adds confidentiality and integrity by running HTTP over a [[TLS]] channel.
- ### Mechanisms
  - Methods such as GET, POST, PUT, and DELETE express the intended operation on a resource.
  - Status codes communicate the outcome of each request to the client.
  - Headers carry metadata for content negotiation, caching, and authentication.
  - Connection reuse and multiplexing reduce latency for multiple resources.
- ### Key aspects
  - Statelessness: requests are self-contained for scalability.
  - Uniform interface: a consistent method and resource model.
  - Extensibility: headers and methods allow evolution without breaking clients.
  - Cacheability: responses can be cached to reduce load and latency.
- ### Applications
  - Serving web pages and hypermedia across the [[Application Layer]].
  - Backing [[REST API]] and other web service architectures.
  - Delivering content for single-page and mobile applications.
  - Carrying machine-to-machine [[API]] traffic in distributed systems.
- ### Relationships
  - partOf:: [[Application Layer]]
  - requires:: [[Transmission Control Protocol]]
  - contrastsWith:: [[Transmission Control Protocol]]
  - uses:: [[TLS]]
  - enables:: [[REST API]]
  - enables:: [[API]]
  - implements:: [[Network Protocol]]
  - supports:: [[REST API]]
  - standardizedBy:: [[Standards]]
  - dependsOn:: [[Transmission Control Protocol]]
  - relatedTo:: [[HTTP2]]
  - relatedTo:: [[Network Protocol]]
  - bridgesTo:: [[REST API]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
