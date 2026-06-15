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