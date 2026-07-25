public:: true

# Monolithic Architecture
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:monolithic-architecture", "@type":"Page", "title":"Monolithic Architecture", "vc:slug":"monolithic-architecture", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:monolithic-architecture",
  "@type": "Class",
  "label": "Monolithic Architecture",
  "definition": "Monolithic architecture is a software design style in which an application is built and deployed as a single, self-contained unit where the user interface, business logic, and data-access layers are tightly coupled within one codebase and process. Components communicate through in-process function calls rather than network protocols, simplifying development, testing, and deployment for small to medium systems. As applications grow, the monolith can become difficult to scale selectively, evolve independently, or deploy without full redeployment, which motivates migration toward modular or microservices architectures.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    { "@id": "urn:ngm:class:system-architecture", "label": "System Architecture" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:business-logic-layer", "label": "Business Logic Layer" },
      { "@id": "urn:ngm:class:data-access-layer", "label": "Data Access Layer" },
      { "@id": "urn:ngm:class:presentation-layer", "label": "Presentation Layer" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:software-architecture", "label": "Software Architecture" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture" },
      { "@id": "urn:ngm:class:service-oriented-architecture", "label": "Service-Oriented Architecture" },
      { "@id": "urn:ngm:class:distributed-architecture", "label": "Distributed Architecture" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:in-process-communication", "label": "In-Process Communication" },
      { "@id": "urn:ngm:class:shared-database", "label": "Shared Database" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:simplified-deployment", "label": "Simplified Deployment" },
      { "@id": "urn:ngm:class:atomic-refactoring", "label": "Atomic Refactoring" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:single-codebase", "label": "Single Codebase" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:vertical-scaling", "label": "Vertical Scaling" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:rapid-prototyping", "label": "Rapid Prototyping" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:modular-monolith", "label": "Modular Monolith" },
      { "@id": "urn:ngm:class:strangler-fig-pattern", "label": "Strangler Fig Pattern" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:n-tier-architecture", "label": "N-Tier Architecture" },
      { "@id": "urn:ngm:class:deployment-unit", "label": "Deployment Unit" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:monolith", "label": "Monolith" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - [[Monolithic Architecture]] is a [[System Architecture]] style in which an application is packaged and deployed as one cohesive unit with tightly coupled layers communicating via [[In-Process Communication]]. It is simple to build and deploy but contrasts with [[Microservices Architecture]] when independent scaling and evolution are required.

- ### Overview
  - A monolith combines all functional concerns — presentation, business logic, and persistence — inside a single executable or deployment artefact. Internal modules invoke one another directly through function or method calls, avoiding the latency, serialisation, and partial-failure complexity of network communication.
  - This style offers strong developer ergonomics for new projects: a single build pipeline, end-to-end transactions across a shared database, straightforward debugging, and no distributed-systems overhead. The trade-offs emerge at scale, where the entire application must be redeployed for any change, resource scaling is coarse-grained, and a fault in one module can compromise the whole process.

- ### Key aspects
  - Single deployable artefact and shared runtime process.
  - Tight coupling between layers with in-process calls.
  - Shared database and unified data model.
  - Coarse-grained, typically vertical, scaling.

- ### Applications
  - Early-stage products and minimum viable products where speed matters most.
  - Internal line-of-business applications with bounded scope.
  - Foundations later refactored into a modular monolith or decomposed via the strangler fig pattern.

- ### Relationships
  - subClassOf:: [[System Architecture]]
  - hasPart:: [[Business Logic Layer]]
  - hasPart:: [[Data Access Layer]]
  - partOf:: [[Software Architecture]]
  - contrastsWith:: [[Microservices Architecture]]
  - contrastsWith:: [[Service-Oriented Architecture]]
  - uses:: [[Shared Database]]
  - enables:: [[Simplified Deployment]]
  - dependsOn:: [[Vertical Scaling]]
  - bridgesTo:: [[Modular Monolith]]
  - bridgesTo:: [[Strangler Fig Pattern]]
  - relatedTo:: [[N-Tier Architecture]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
