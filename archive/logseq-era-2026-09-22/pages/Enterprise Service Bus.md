public:: true

# Enterprise Service Bus
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:enterprise-service-bus", "@type":"Page", "title":"Enterprise Service Bus", "vc:slug":"enterprise-service-bus", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:enterprise-service-bus",
  "@type":"Class",
  "label":"Enterprise Service Bus",
  "definition":"An enterprise service bus is a middleware backbone that connects disparate applications by mediating, routing and transforming messages between them through a common integration layer. It centralises concerns such as protocol bridging, data transformation, message routing and orchestration so that services need not know about each other directly. The pattern is associated with service-oriented architecture and contrasts with lighter, decentralised integration styles.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:middleware","label":"Middleware"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:message-broker","label":"Message Broker"},
      {"@id":"urn:ngm:class:data-transformation","label":"Data Transformation"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:enterprise-integration","label":"Enterprise Integration"},
      {"@id":"urn:ngm:class:service-oriented-architecture","label":"Service-Oriented Architecture"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:message-broker","label":"Message Broker"},
      {"@id":"urn:ngm:class:middleware","label":"Middleware"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:enterprise-integration","label":"Enterprise Integration"},
      {"@id":"urn:ngm:class:service-oriented-architecture","label":"Service-Oriented Architecture"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:message-queue","label":"Message Queue"},
      {"@id":"urn:ngm:class:data-transformation","label":"Data Transformation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:event-driven-architecture","label":"Event-Driven Architecture"},
      {"@id":"urn:ngm:class:api-management","label":"API Management"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:microservices","label":"Microservices"},
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:soap","label":"SOAP"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:message-broker","label":"Message Broker"},
      {"@id":"urn:ngm:class:event-driven-architecture","label":"Event-Driven Architecture"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - An enterprise service bus is a [[Middleware]] backbone that connects applications through a shared integration layer performing [[Data Transformation]] and message routing.
  - It centralises mediation so services communicate without direct coupling, a cornerstone of classic [[Service-Oriented Architecture]].

- ### Overview
  - The ESB acts as a hub through which messages flow, decoupling producers from consumers and bridging incompatible protocols and formats.
  - It provides routing rules, transformation pipelines, orchestration and monitoring within [[Enterprise Integration]] estates.
  - Critics note that a heavyweight central bus can become a bottleneck, motivating lighter decentralised styles built on [[Microservices]] and an [[API Gateway]].

- ### Key aspects
  - Protocol bridging across SOAP, JMS, HTTP and proprietary connectors.
  - Content-based routing and message [[Data Transformation]].
  - Orchestration of multi-step business processes.
  - Centralised governance, logging and management of integrations.

- ### Applications
  - Integrating legacy and packaged enterprise systems.
  - Mediating between an [[Event-Driven Architecture]] and request-reply services.
  - Exposing internal capabilities for reuse via [[API Management]].

- ### Relationships
  - subClassOf:: [[Middleware]]
  - hasPart:: [[Message Broker]]
  - hasPart:: [[Data Transformation]]
  - partOf:: [[Enterprise Integration]]
  - partOf:: [[Service-Oriented Architecture]]
  - requires:: [[Message Broker]]
  - enables:: [[Enterprise Integration]]
  - uses:: [[Message Queue]]
  - supports:: [[Event-Driven Architecture]]
  - supports:: [[API Management]]
  - contrastsWith:: [[Microservices]]
  - contrastsWith:: [[API Gateway]]
  - bridgesTo:: [[SOAP]]
  - relatedTo:: [[Event-Driven Architecture]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
