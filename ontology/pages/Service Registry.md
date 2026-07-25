public:: true

# Service Registry

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:service-registry",
  "@type": "Page",
  "title": "Service Registry",
  "vc:slug": "service-registry",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:service-registry",
  "@type": "Class",
  "label": "Service Registry",
  "definition": "A Service Registry is a database of available service instances and their network locations that underpins dynamic service discovery in distributed and microservice architectures. Instances register on startup and deregister on shutdown, while clients or load balancers query the registry to resolve a logical service name to a healthy endpoint. Health checks expire stale entries, keeping the registry an accurate view of live topology in elastic, frequently changing deployments.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:service-discovery",
      "label": "Service Discovery"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      },
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:orchestration",
        "label": "Orchestration"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
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
  - A Service Registry is a database of available service instances and their network locations that underpins dynamic service discovery in distributed and microservice architectures. Instances register on startup and deregister on shutdown, while clients or load balancers query the registry to resolve a logical service name to a healthy endpoint. Health checks expire stale entries, keeping the registry an accurate view of live topology in elastic, frequently changing deployments.
  - Core concepts: [[Service Discovery]], [[Load Balancing]], [[Microservices]], [[API Gateway]]
- ### Overview
  - **Service Registry** sits within the [[Service Discovery]] area of the distributed systems domain.
  - It is referenced by existing classes in the knowledge graph and is materialised here as a defined, rooted node so those edges resolve.
- ### Key aspects
  - Establishes a precise, shared meaning for service registry usable across coordinating components.
  - Integrates with neighbouring concepts through the relations enumerated below.
  - Maturity assessed as established based on established practice and literature.
- ### Mechanisms
  - Operates through the dependencies and components captured in its `requires`, `uses`, and `hasPart` relations.
  - Produces the capabilities captured in its `enables` and `supports` relations.
- ### Applications
  - Applied wherever distributed systems systems need the function described above.
  - Connects to broader workflows via the bridging relations listed below.
- ### Relationships
  - subClassOf:: [[Service Discovery]]
  - hasPart:: [[API Gateway]]
  - requires:: [[Service Discovery]]
  - enables:: [[Service Discovery]]
  - enables:: [[Load Balancing]]
  - uses:: [[Network Protocol]]
  - supports:: [[Microservices]]
  - dependsOn:: [[High Availability]]
  - partOf:: [[Distributed Systems]]
  - relatedTo:: [[Load Balancing]]
  - relatedTo:: [[API Gateway]]
  - relatedTo:: [[Orchestration]]
  - bridgesTo:: [[Kubernetes]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
