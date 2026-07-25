public:: true

# Saga Pattern
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:saga-pattern", "@type":"Page", "title":"Saga Pattern", "vc:slug":"saga-pattern", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:saga-pattern",
  "@type":"Class",
  "label":"Saga Pattern",
  "definition":"The saga pattern is a distributed-systems design for managing long-lived business transactions that span multiple services without a global lock or two-phase commit. A saga is a sequence of local transactions, each of which has an associated compensating transaction that semantically undoes its effect if a later step fails. Coordination is achieved either through orchestration, where a central coordinator drives the steps, or choreography, where services react to events, trading strong atomicity for eventual consistency and availability.",
  "domain":"distributed-systems",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:microservices-architecture","label":"Microservices Architecture"}],
    "implements":[{"@id":"urn:ngm:class:eventual-consistency","label":"Eventual Consistency"}],
    "uses":[{"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"},{"@id":"urn:ngm:class:orchestration","label":"Orchestration"}],
    "requires":[{"@id":"urn:ngm:class:microservices","label":"Microservices"}],
    "supports":[{"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"},{"@id":"urn:ngm:class:reliability","label":"Reliability"}],
    "enables":[{"@id":"urn:ngm:class:eventual-consistency","label":"Eventual Consistency"}],
    "contrastsWith":[{"@id":"urn:ngm:class:two-phase-commit","label":"Two-Phase Commit"}],
    "relatedTo":[{"@id":"urn:ngm:class:transaction","label":"Transaction"},{"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"},{"@id":"urn:ngm:class:microservices","label":"Microservices"}],
    "bridgesTo":[{"@id":"urn:ngm:class:orchestration","label":"Orchestration"}],
    "dependsOn":[{"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - The [[Saga Pattern]] coordinates a [[Transaction]] that spans multiple services as a sequence of local transactions with compensating actions.
  - It avoids distributed locking, instead achieving [[Eventual Consistency]] across a [[Microservices]] system.
  - It is a foundational construct in [[Event Driven Architecture]] and [[Microservices Architecture]].
- ### Overview
  - Holding a database lock across many services for the lifetime of a business process is impractical and harms availability.
  - A saga splits the process into steps, each a local atomic transaction committed in its own service.
  - If a downstream step fails, the saga runs compensating transactions for the already-committed steps, semantically rolling back the process.
  - The result is reliability and progress under partial failure, at the cost of giving up strict global atomicity.
- ### Mechanisms
  - Orchestration: a central coordinator issues commands to each service and decides when to compensate.
  - Choreography: services emit and react to events, with no central coordinator, keeping coupling loose.
  - Compensating transactions: business-level inverse operations that undo prior steps rather than rolling back storage.
  - Idempotency and retry: steps must tolerate repeated delivery so the saga is resilient to message duplication.
- ### Applications
  - E-commerce order processing across payment, inventory and shipping services.
  - Travel booking that reserves flights, hotels and cars as separate compensable steps.
  - Financial workflows requiring auditable, recoverable multi-service operations.
  - Any microservices system needing consistency without distributed two-phase commit.
- ### Relationships
  - partOf:: [[Microservices Architecture]]
  - implements:: [[Eventual Consistency]]
  - uses:: [[Event Driven Architecture]]
  - uses:: [[Orchestration]]
  - requires:: [[Microservices]]
  - supports:: [[Fault Tolerance]]
  - supports:: [[Reliability]]
  - contrastsWith:: [[Two-Phase Commit]]
  - relatedTo:: [[Transaction]]
  - bridgesTo:: [[Orchestration]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
