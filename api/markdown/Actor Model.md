public:: true

# Actor Model
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:actor-model", "@type":"Page", "title":"Actor Model", "vc:slug":"actor-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:actor-model",
  "@type":"Class",
  "label":"Actor Model",
  "definition":"The actor model is a mathematical model of concurrent computation in which the universal primitive is the actor, an independent entity that has private state and communicates only by sending asynchronous messages. In response to a message an actor can update its state, send messages to other actors and create new actors. Because actors share nothing and process one message at a time, the model avoids shared-memory data races and provides a foundation for scalable, fault-tolerant distributed systems.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:concurrency","label":"Concurrency"},{"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"},
      {"@id":"urn:ngm:class:asynchronous-messaging","label":"Asynchronous Messaging"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:concurrency-model","label":"Concurrency Model"},
      {"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"},
      {"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"},
      {"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:parallel-computing","label":"Parallel Computing"},
      {"@id":"urn:ngm:class:load-balancing","label":"Load Balancing"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:shared-nothing-architecture","label":"Shared Nothing Architecture"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:reactive-systems","label":"Reactive Systems"},
      {"@id":"urn:ngm:class:flow-control","label":"Flow Control"},
      {"@id":"urn:ngm:class:distributed-system","label":"Distributed System"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- The actor model treats the actor as the universal unit of concurrent computation, communicating only by [[Message Passing]].
	- It is a model of [[Concurrency]] in which each actor holds private state and processes one message at a time.
	- Sharing nothing, actors sidestep the data races of shared-memory concurrency.
- ### Overview
	- On receiving a message an actor may update state, send further messages and spawn new actors.
	- Asynchronous, location-transparent messaging lets actors run on the same core or across a cluster.
	- One-message-at-a-time processing serialises access to an actor's state without locks.
	- Hierarchies of supervising actors restart failed children to contain and recover from faults.
- ### Mechanisms
	- Mailboxes queue incoming messages for sequential, isolated handling.
	- [[Asynchronous Messaging]] decouples senders from receivers in time and space.
	- Supervision strategies localise failure and define restart policies.
	- Address-based references allow transparent routing across nodes.
- ### Applications
	- Telecommunications and messaging platforms requiring high [[Fault Tolerance]].
	- Scalable backends built on [[Distributed Computing]] frameworks.
	- [[Reactive Systems]] that must remain responsive under variable load.
	- Workload distribution combined with [[Load Balancing]] across actor clusters.
- ### Relationships
	- subClassOf:: [[Concurrency]]
	- subClassOf:: [[Distributed Computing]]
	- implements:: [[Message Passing]]
	- implements:: [[Asynchronous Messaging]]
	- enables:: [[Concurrency Model]]
	- enables:: [[Fault Tolerance]]
	- enables:: [[Distributed Computing]]
	- uses:: [[Message Passing]]
	- uses:: [[Event Driven Architecture]]
	- supports:: [[Parallel Computing]]
	- supports:: [[Load Balancing]]
	- contrastsWith:: [[Shared Nothing Architecture]]
	- relatedTo:: [[Reactive Systems]]
	- relatedTo:: [[Flow Control]]
	- relatedTo:: [[Distributed System]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
