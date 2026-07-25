public:: true

# Asyncapi

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:asyncapi", "@type":"Page", "title":"Asyncapi", "vc:slug":"asyncapi", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:asyncapi",
  "@type":"Class",
  "label":"Asyncapi",
  "definition":"AsyncAPI is an open specification for describing event-driven and message-based APIs in a machine-readable document, analogous to how OpenAPI describes request-response REST APIs. It defines channels, messages, payloads and the protocols and brokers used to exchange them, enabling documentation, code generation, validation and tooling for asynchronous systems. AsyncAPI standardises contracts for publish-subscribe and streaming architectures.",
  "domain":"infrastructure",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:api-specification","label":"API Specification"}],
  "relations":{
    "standardizedBy":[
      {"@id":"urn:ngm:class:interoperability-standard","label":"Interoperability Standard"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"},
      {"@id":"urn:ngm:class:asynchronous-messaging","label":"Asynchronous Messaging"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:openapi","label":"OpenAPI"},
      {"@id":"urn:ngm:class:rest-api","label":"REST API"}
    ],
    "describes":[
      {"@id":"urn:ngm:class:message-broker","label":"Message Broker"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:json-schema","label":"JSON Schema"},
      {"@id":"urn:ngm:class:schema-validation","label":"Schema Validation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:streaming-data","label":"Streaming Data"},
      {"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:message-broker","label":"Message Broker"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:json-schema","label":"JSON Schema"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:api-gateway","label":"API Gateway"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:openapi","label":"OpenAPI"},
      {"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Asyncapi]] is an open specification for describing event-driven and message-based APIs in a machine-readable document.
	- It is an [[API Specification]] that defines channels, messages and protocols, using [[JSON Schema]] for payloads.
	- It supports [[Event Driven Architecture]] and contrasts with the request-response focus of [[OpenAPI]].
- ### Overview
	- Where OpenAPI documents synchronous REST endpoints, AsyncAPI documents the asynchronous interactions of publish-subscribe, streaming and queue-based systems.
	- An AsyncAPI document declares channels (topics or queues), the messages that flow over them, their payload schemas, and the servers and protocols (such as Kafka, MQTT or AMQP) that carry them.
	- From this single contract, tooling can generate documentation, client and server stubs, and validation, reducing integration drift between producers and consumers.
	- AsyncAPI brings the design-first discipline of REST API tooling to the event-driven world, improving discoverability and governance of message contracts.
- ### Key aspects
	- Channels and operations describing where and how messages are exchanged.
	- Message and payload definitions reusing JSON Schema.
	- Protocol and server bindings for brokers and transports.
	- Tooling for documentation, code generation and validation.
	- Versioning and reuse via components and references.
- ### Applications
	- Documenting Kafka and message-queue topologies.
	- Generating producer and consumer stubs from a shared contract.
	- Validating event payloads against declared schemas.
	- Governing microservice event interfaces.
- ### Relationships
	- standardizedBy:: [[Interoperability Standard]]
	- supports:: [[Event Driven Architecture]]
	- supports:: [[Asynchronous Messaging]]
	- contrastsWith:: [[OpenAPI]]
	- contrastsWith:: [[REST API]]
	- describes:: [[Message Broker]]
	- uses:: [[JSON Schema]]
	- uses:: [[Schema Validation]]
	- enables:: [[Streaming Data]]
	- enables:: [[Event Driven Architecture]]
	- requires:: [[Message Broker]]
	- dependsOn:: [[JSON Schema]]
	- bridgesTo:: [[API Gateway]]
	- relatedTo:: [[OpenAPI]]
	- relatedTo:: [[Event Driven Architecture]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
