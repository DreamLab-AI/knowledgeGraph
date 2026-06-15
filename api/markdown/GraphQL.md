public:: true

# GraphQL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:graph-ql",
  "@type": "Page",
  "vc:slug": "graph-ql",
  "title": "GraphQL",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graph-ql",
  "@type": "Class",
  "label": "GraphQL",
  "definition": "GraphQL is a query language and runtime for APIs, developed by Facebook and open-sourced in 2015, that allows clients to specify precisely the data they need in a single request rather than consuming fixed-shape REST endpoints. It is defined by a strongly typed schema that describes the graph of types and fields the API exposes, and a runtime that resolves client queries against that schema by executing resolver functions. GraphQL eliminates the over-fetching and under-fetching problems inherent in REST by shifting data shape control to the client, and its introspection capability enables rich developer tooling and automatic documentation generation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:api-standard",
    "label": "API Standard"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:api-management",
        "label": "API Management"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:grpc",
        "label": "gRPC"
      },
      {
        "@id": "urn:ngm:class:openapi-specification",
        "label": "OpenAPI Specification"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON Data Interchange Format"
      },
      {
        "@id": "urn:ngm:class:schema-definition",
        "label": "Schema Definition"
      },
      {
        "@id": "urn:ngm:class:http-protocol",
        "label": "HTTP Protocol"
      },
      {
        "@id": "urn:ngm:class:type-system",
        "label": "Type System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:api-integration",
        "label": "API Integration"
      },
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:type-system",
        "label": "Type System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:federation",
        "label": "Federation Pattern"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:grpc",
        "label": "gRPC"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:linux-foundation",
        "label": "Linux Foundation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:graph-query-language",
      "label": "Graph Query Language"
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

- ### Definition
  - [[GraphQL]] is an [[API Standard]] and runtime in which clients declare exactly what data they need via a typed [[Schema Definition]], receiving a [[JSON Data Interchange Format]] response of precisely that shape over [[HTTP Protocol]], eliminating the over-fetching and under-fetching inherent in [[REST API]] endpoints and enabling unified data fetching across [[Microservices Architecture]] backends.

- ### Relationships
  - [[GraphQL]] is positioned as an alternative and complement to [[REST API]] within the broader [[API Management]] and [[API Integration]] landscape, often fronted by an [[API Gateway]] that handles authentication and rate-limiting before proxying to GraphQL resolvers. It uses [[Schema Definition]] as its type system contract between client and server, serialises responses as [[JSON]] transported over [[HTTP Protocol]], and provides a single endpoint through which clients can traverse arbitrarily complex data graphs. In [[Microservices Architecture]] contexts, GraphQL federation patterns allow a single gateway schema to stitch together multiple downstream service schemas, enabling [[API Integration]] without coupling clients to individual service endpoints.

- ### Content
  - GraphQL was developed internally at Facebook beginning in 2012 to solve a specific engineering problem: the existing REST APIs designed for web clients were ill-suited to the heterogeneous data requirements of the Facebook iOS and Android apps, which needed to fetch complex social graphs while minimising round trips over constrained mobile networks. The team built a query language that allowed the mobile app to specify precisely which fields of which objects to retrieve in a single request. After extensive internal use, Facebook open-sourced GraphQL in 2015 alongside a reference implementation in JavaScript, and formed the GraphQL Foundation (now under the Linux Foundation) in 2018 to govern further specification development.

  - The GraphQL execution model defines three operation types: queries (read), mutations (write), and subscriptions (real-time event streams). The schema—written in the GraphQL Schema Definition Language (SDL)—declares every type, field, and their relationships, forming a self-describing contract that enables introspection: a GraphQL server can answer queries about its own schema, powering IDE autocompletion, documentation generators like GraphiQL, and client code generation tools. Each field in the schema maps to a resolver function responsible for fetching the required data from databases, microservices, or other sources. The DataLoader pattern is used to batch and cache downstream data fetches, solving the N+1 query problem where naive resolver implementations make one database call per list item.

  - GraphQL adoption grew rapidly through major deployments at GitHub (2016), Twitter, Shopify, and Airbnb. The GitHub GraphQL API demonstrated the pattern of API versioning through schema evolution rather than URL versioning, and the richness of querying across interconnected resources such as repositories, pull requests, and users without separate endpoint calls. The Apollo Platform emerged as the leading commercial ecosystem around GraphQL, offering client libraries (Apollo Client for React, iOS, Android), server middleware, and federation tooling that became the de-facto standard for enterprise GraphQL deployments.

  - In 2024-2025, GraphQL federation—the approach of composing a supergraph from multiple subgraph services—has become the standard architecture for platform-scale GraphQL deployments. Apollo Federation and Hive are competing platforms for managing federated schemas across dozens of service teams. GraphQL is increasingly used as the unified data access layer for AI applications: LLM agents use GraphQL APIs to query structured business data in a typed, introspectable way that is more amenable to code generation than free-form REST. Persisted queries and APQ (Automatic Persisted Queries) are standard performance optimisations, and edge-executed GraphQL via Cloudflare Workers and similar runtimes is reducing response latency for globally distributed clients.

- ### See Also
  - [[REST API]] | [[API Management]] | [[Schema Definition]] | [[Microservices Architecture]] | [[API Gateway]]
