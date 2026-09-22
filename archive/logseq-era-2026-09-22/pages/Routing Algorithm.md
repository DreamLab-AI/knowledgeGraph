public:: true

# Routing Algorithm
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:routing-algorithm", "@type":"Page", "title":"Routing Algorithm", "vc:slug":"routing-algorithm", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:routing-algorithm",
  "@type":"Class",
  "label":"Routing Algorithm",
  "definition":"A routing algorithm is a procedure that determines the path along which data, messages, or value should travel from a source to a destination across a network of interconnected nodes. It typically models the network as a graph and selects routes by optimising criteria such as shortest path, lowest cost, available capacity, or reliability, while adapting to changing topology and link state. In blockchain payment networks such as the Lightning Network, routing algorithms find viable multi-hop paths across payment channels, balancing fees, liquidity, and privacy through techniques like source routing and onion encryption.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:network-topology","label":"Network Topology"},
      {"@id":"urn:ngm:class:graph-theory","label":"Graph Theory"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:payment-routing","label":"Payment Routing"},
      {"@id":"urn:ngm:class:dijkstra-algorithm","label":"Dijkstra Algorithm"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:gossip-protocol","label":"Gossip Protocol"},
      {"@id":"urn:ngm:class:onion-routing","label":"Onion Routing"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:payment-channel","label":"Payment Channel"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:hashed-timelock-contract","label":"Hashed Timelock Contract"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:mesh-network","label":"Mesh Network"},
      {"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"},
      {"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A routing algorithm chooses the path data or value takes from source to destination across a network.
	- It is a procedure within a [[Network Protocol]] that operates over a graph model of the topology.
	- It draws on [[Graph Theory]] and shortest-path methods such as the [[Dijkstra Algorithm]].
	- In payment networks it enables multi-hop transfers across the [[Lightning Network]].
- ### Overview
	- Routing turns a connectivity graph into concrete forwarding decisions under cost, capacity, and reliability constraints.
	- Algorithms differ in whether routes are computed at the source or hop-by-hop, and in how they react to topology change.
	- In blockchain channel networks, source routing with onion encryption preserves payer privacy while finding liquid paths.
	- Fee, liquidity, and timelock constraints make payment routing a constrained path-finding problem.
- ### Mechanisms
	- Graph models with weighted edges representing cost, latency, or fee.
	- Shortest-path and least-cost search such as Dijkstra and Bellman-Ford variants.
	- [[Gossip Protocol]] dissemination to share channel and link-state information.
	- [[Onion Routing]] layering to hide the full path from intermediate hops.
- ### Applications
	- Multi-hop payment routing across [[Payment Channel]] networks.
	- Internet and overlay packet forwarding.
	- Mesh and peer-to-peer message delivery.
	- Liquidity-aware path selection bridged to [[Hashed Timelock Contract]] settlement.
- ### Relationships
	- subClassOf:: [[Network Protocol]]
	- partOf:: [[Network Protocol]]
	- dependsOn:: [[Network Topology]]
	- dependsOn:: [[Graph Theory]]
	- implements:: [[Payment Routing]]
	- implements:: [[Dijkstra Algorithm]]
	- uses:: [[Gossip Protocol]]
	- uses:: [[Onion Routing]]
	- enables:: [[Lightning Network]]
	- supports:: [[Payment Channel]]
	- bridgesTo:: [[Hashed Timelock Contract]]
	- relatedTo:: [[Mesh Network]]
	- relatedTo:: [[Peer-to-Peer Network]]
	- relatedTo:: [[Distributed Systems]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
