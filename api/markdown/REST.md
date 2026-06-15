public:: true

# REST
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:093c0f25e6cde6eae904d9f701e66595ee46f9db57aff86ff5bc81dba38c56d6",
  "@type": "Page",
  "vc:slug": "rest",
  "title": "REST",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:http",
      "vc:label": "HTTP"
    },
    {
      "@id": "urn:visionflow:linked:payment-protocol",
      "vc:label": "Payment Protocol"
    },
    {
      "@id": "urn:visionflow:linked:microservices",
      "vc:label": "Microservices"
    },
    {
      "@id": "urn:visionflow:linked:web-standards",
      "vc:label": "Web Standards"
    },
    {
      "@id": "urn:visionflow:linked:https-www-ics-uci-edu-fielding-pubs-dissertation-rest-arch-style-htm",
      "vc:label": "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm"
    },
    {
      "@id": "urn:visionflow:linked:https-developer-mozilla-org-en-us-docs-glossary-rest",
      "vc:label": "https://developer.mozilla.org/en-US/docs/Glossary/REST"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "REST"
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
  "@id": "urn:ngm:class:rest",
  "@type": "Class",
  "label": "REST",
  "definition": "REST (Representational State Transfer) is an architectural style for distributed hypermedia systems, defined by Roy Fielding, that uses stateless client-server communication over HTTP with a uniform resource-based interface, cacheable responses, and layered system constraints.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:web-standards",
      "label": "Web Standards"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:url",
        "label": "URL"
      },
      {
        "@id": "urn:ngm:class:stateless-communication",
        "label": "Stateless Communication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:payment-protocol",
        "label": "Payment Protocol"
      },
      {
        "@id": "urn:ngm:class:web-api",
        "label": "Web API"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:client-server-architecture",
        "label": "Client-Server Architecture"
      },
      {
        "@id": "urn:ngm:class:uniform-interface",
        "label": "Uniform Interface"
      },
      {
        "@id": "urn:ngm:class:resource-oriented-architecture",
        "label": "Resource-Oriented Architecture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json",
        "label": "JSON"
      },
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      },
      {
        "@id": "urn:ngm:class:http-status-codes",
        "label": "HTTP Status Codes"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:content-negotiation",
        "label": "Content Negotiation"
      },
      {
        "@id": "urn:ngm:class:hateoas",
        "label": "HATEOAS"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:graphql",
        "label": "GraphQL"
      },
      {
        "@id": "urn:ngm:class:grpc",
        "label": "gRPC"
      },
      {
        "@id": "urn:ngm:class:soap",
        "label": "SOAP"
      },
      {
        "@id": "urn:ngm:class:rpc",
        "label": "RPC"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:openapi",
        "label": "OpenAPI"
      },
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      },
      {
        "@id": "urn:ngm:class:service-oriented-architecture",
        "label": "Service-Oriented Architecture"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:representational-state-transfer",
      "label": "Representational State Transfer"
    },
    {
      "@id": "urn:ngm:class:restful-api",
      "label": "RESTful API"
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
  "@id": "urn:visionflow:annotation:link-resolutions:rest:2e09d5210db8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:093c0f25e6cde6eae904d9f701e66595ee46f9db57aff86ff5bc81dba38c56d6"
  },
  "vc:resolutions": [
    {
      "raw": "[[HTTP]]",
      "resolved": "urn:visionflow:linked:http",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Protocol]]",
      "resolved": "urn:visionflow:linked:payment-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Microservices]]",
      "resolved": "urn:visionflow:linked:microservices",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web Standards]]",
      "resolved": "urn:visionflow:linked:web-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm]]",
      "resolved": "urn:visionflow:linked:https-www-ics-uci-edu-fielding-pubs-dissertation-rest-arch-style-htm",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://developer.mozilla.org/en-US/docs/Glossary/REST]]",
      "resolved": "urn:visionflow:linked:https-developer-mozilla-org-en-us-docs-glossary-rest",
      "kind": "StubLink"
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
  - REST is an architectural style for distributed systems that uses stateless requests over HTTP and a uniform interface based on resources and standard methods.

- ### Semantic Classification
  - owl-class:: distributed-systems:REST
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Web Standards]]
  - bridges-to:: [[Microservices]]
  - requires:: [[HTTP]]
  - enables:: [[Payment Protocol]]

- ### Content
  - REST, short for Representational State Transfer, was described by Roy Fielding and defines constraints such as statelessness, a uniform interface and resource-based addressing. Resources are identified by URLs and manipulated using standard HTTP methods.
  - RESTful APIs are a common integration mechanism for web and cloud services. They exchange representations of resources, frequently encoded as JSON, and rely on HTTP status codes to communicate outcomes.

- ### Provenance
  - sources:: [[https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm]], [[https://developer.mozilla.org/en-US/docs/Glossary/REST]]
  - migration-date:: 2026-05-29T00:00:00Z
