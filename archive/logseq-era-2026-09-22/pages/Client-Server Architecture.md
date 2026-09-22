public:: true

# Client-Server Architecture

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:client-server-architecture",
  "@type": "Page",
  "title": "Client-Server Architecture",
  "vc:slug": "client-server-architecture",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:client-server-architecture",
  "@type": "Class",
  "label": "Client-Server Architecture",
  "definition": "Client-server architecture is a distributed computing model in which client processes request services or resources and dedicated server processes provide them, typically over a network. The model centralises shared resources, data and logic on servers while distributing presentation and interaction to many clients. It is the foundational pattern for the web, networked applications and most online services, and it contrasts with peer-to-peer architectures where every node is both provider and consumer.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-architecture",
      "label": "Distributed Architecture"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-architecture",
        "label": "Distributed Architecture"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rest",
        "label": "REST"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stateless-protocol",
        "label": "Stateless Protocol"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
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
  - Client-server architecture is a distributed computing model in which client processes request services or resources and dedicated server processes provide them, typically over a network. The model centralises shared resources, data and logic on servers while distributing presentation and interaction to many clients. It is the foundational pattern for the web, networked applications and most online services, and it contrasts with peer-to-peer architectures where every node is both provider and consumer.
  - Related core concepts: [[Distributed Architecture]] [[API]] [[HTTP]] [[REST]] [[Scalability]]
- ### Overview
  - In the client-server model, responsibilities are partitioned: servers own authoritative state and enforce shared logic, while clients drive interaction and presentation. Communication follows a request-response discipline over defined protocols and interfaces. The model scales by replicating and load-balancing servers, and it underpins layered (multi-tier) designs that separate presentation, application and data concerns. It remains the dominant pattern even as microservices and edge deployments refine how the server side is structured.
- ### Key aspects
  - Clear separation of client (consumer) and server (provider) roles.
  - Request-response communication over network protocols.
  - Centralised authoritative state and shared business logic on servers.
  - Well-defined interfaces and APIs decouple clients from servers.
  - Horizontal scaling via replication and load balancing of servers.
- ### Applications
  - Web applications served over HTTP to browser and mobile clients.
  - Database and file servers shared across an organisation.
  - Email, messaging and API backends for online services.
  - Multi-tier enterprise systems separating presentation and data.
- ### Relationships
  - subClassOf:: [[Distributed Architecture]]
  - partOf:: [[Distributed Architecture]]
  - hasPart:: [[API]]
  - requires:: [[Network Protocol]]
  - requires:: [[HTTP]]
  - implements:: [[REST]]
  - uses:: [[HTTP]]
  - uses:: [[API]]
  - enables:: [[Scalability]]
  - supports:: [[Load Balancing]]
  - contrastsWith:: [[Microservices]]
  - relatedTo:: [[Stateless Protocol]]
  - relatedTo:: [[Distributed Systems]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
