
An enterprise service bus is a middleware backbone that connects disparate applications by mediating, routing and transforming messages between them through a common integration layer. It centralises concerns such as protocol bridging, data transformation, message routing and orchestration so that services need not know about each other directly. The pattern is associated with service-oriented architecture and contrasts with lighter, decentralised integration styles.

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

- ### Provenance

