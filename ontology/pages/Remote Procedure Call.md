public:: true

# Remote Procedure Call
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:remote-procedure-call", "@type":"Page", "title":"Remote Procedure Call", "vc:slug":"remote-procedure-call", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:remote-procedure-call",
  "@type":"Class",
  "label":"Remote Procedure Call",
  "definition":"A remote procedure call (RPC) is a communication paradigm in which a program invokes a procedure that executes on a different address space, typically another machine on a network, as if it were a local call. The runtime marshals arguments, transmits them over a transport, executes the procedure remotely, and returns the result, hiding the underlying network mechanics from the caller. RPC underpins distributed systems and service-to-service communication, with modern frameworks adding streaming, code generation, and efficient binary serialisation.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"},
      {"@id":"urn:ngm:class:networking","label":"Networking"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:protocol","label":"Protocol"},
      {"@id":"urn:ngm:class:service-discovery","label":"Service Discovery"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:synchronous-communication","label":"Synchronous Communication"},
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing Protocol"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:microservices","label":"Microservices"},
      {"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:http","label":"HTTP"},
      {"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:api-design","label":"API Design"},
      {"@id":"urn:ngm:class:service-mesh","label":"Service Mesh"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:asynchronous-communication","label":"Asynchronous Communication"},
      {"@id":"urn:ngm:class:rest-api","label":"REST API"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:distributed-protocol","label":"Distributed Protocol"},
      {"@id":"urn:ngm:class:api","label":"API"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A remote procedure call lets a program invoke a procedure on another machine as if it were local.
	- It is a kind of [[Network Protocol]] central to [[Distributed Systems]] and [[Microservices]].
	- The runtime marshals arguments, transmits them over [[HTTP]] or another transport, and returns the result.
- ### Overview
	- RPC raises the level of abstraction above raw sockets so developers think in terms of function calls, not byte streams.
	- A stub on the caller serialises arguments; a skeleton on the callee deserialises, executes, and replies.
	- Modern frameworks generate this glue from an interface definition and use compact binary encodings.
	- Because the network can fail, RPC must handle timeouts, retries, and partial failure that local calls never face.
- ### Mechanisms
	- Interface definition languages specify procedures and message schemas.
	- Marshalling and unmarshalling translate between in-memory objects and wire formats.
	- Transports carry requests and responses, with optional streaming in either direction.
	- Service discovery and load balancing route calls to healthy instances.
- ### Applications
	- Internal service-to-service communication in microservice architectures.
	- High-throughput backend APIs using binary RPC frameworks.
	- Distributed consensus and coordination protocols built on request-reply.
	- Cross-language integration where clients and servers are written in different stacks.
- ### Relationships
	- subClassOf:: [[Network Protocol]]
	- partOf:: [[Distributed Systems]]
	- partOf:: [[Networking]]
	- requires:: [[Protocol]]
	- requires:: [[Service Discovery]]
	- implements:: [[Synchronous Communication]]
	- implements:: [[Message Passing Protocol]]
	- enables:: [[Microservices]]
	- enables:: [[Distributed Computing]]
	- uses:: [[HTTP]]
	- uses:: [[Network Protocol]]
	- supports:: [[API Design]]
	- supports:: [[Service Mesh]]
	- contrastsWith:: [[Asynchronous Communication]]
	- contrastsWith:: [[REST API]]
	- relatedTo:: [[Distributed Protocol]]
	- relatedTo:: [[API]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
