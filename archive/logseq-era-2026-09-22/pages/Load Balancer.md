public:: true

# Load Balancer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f47577df72766e2f59542c4ea99a1c6c4e0737e4e8bf5c86ab34b1db5db8b612",
  "@type": "Page",
  "vc:slug": "load-balancer",
  "title": "Load Balancer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-architecture",
      "vc:label": "Network Architecture"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:high-availability",
      "vc:label": "High Availability"
    },
    {
      "@id": "urn:visionflow:linked:microservices",
      "vc:label": "Microservices"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Load Balancer"
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
  "@id": "urn:ngm:class:load-balancer",
  "@type": "Class",
  "label": "Load Balancer",
  "definition": "A component that distributes incoming network or application traffic across multiple backend servers to improve throughput, reliability, and resource utilisation, preventing any single server from becoming a bottleneck.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:network-architecture",
    "label": "Network Architecture"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:health-check",
        "label": "Health Check"
      },
      {
        "@id": "urn:ngm:class:session-persistence",
        "label": "Session Persistence"
      },
      {
        "@id": "urn:ngm:class:planning-and-scheduling",
        "label": "Scheduling Algorithm"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      },
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Cloud Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:horizontal-scalability",
        "label": "Horizontal Scaling"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      },
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:round-robin-scheduling",
        "label": "Round Robin Scheduling"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ssl-termination",
        "label": "SSL Termination"
      },
      {
        "@id": "urn:ngm:class:reverse-proxy",
        "label": "Reverse Proxy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:containerisation",
        "label": "Containerisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:traffic-management",
        "label": "Traffic Management"
      },
      {
        "@id": "urn:ngm:class:ingress-controller",
        "label": "Ingress Controller"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:traffic-distributor",
      "label": "Traffic Distributor"
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
  "@id": "urn:visionflow:annotation:link-resolutions:load-balancer:e1977f0263b9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f47577df72766e2f59542c4ea99a1c6c4e0737e4e8bf5c86ab34b1db5db8b612"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Architecture]]",
      "resolved": "urn:visionflow:linked:network-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[High Availability]]",
      "resolved": "urn:visionflow:linked:high-availability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microservices]]",
      "resolved": "urn:visionflow:linked:microservices",
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
  - A component that distributes incoming network or application traffic across multiple servers to improve throughput, reliability and resource utilisation.

- ### Semantic Classification
  - owl-class:: distributed-systems:LoadBalancer
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Architecture]]
  - bridges-to:: [[Microservices]]
  - requires:: [[Network Architecture]]
  - enables:: [[Scalability]], [[High Availability]]

- ### Content
  - A load balancer sits in front of a pool of backend servers and routes client requests according to a scheduling policy such as round robin, least connections or hashing. By spreading load it prevents any single server from becoming a bottleneck and can remove failed instances from rotation.
  - Load balancers operate at the transport layer or the application layer, support health checks and session persistence, and are fundamental to scalable, highly available services and microservice deployments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
