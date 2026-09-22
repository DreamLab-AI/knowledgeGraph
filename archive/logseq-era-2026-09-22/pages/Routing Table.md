public:: true

# Routing Table

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:routing-table", "@type":"Page", "title":"Routing Table", "vc:slug":"routing-table", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:routing-table",
  "@type":"Class",
  "label":"Routing Table",
  "definition":"A routing table is a data structure, held in a router, switch or networked host, that stores the mappings between destination network addresses and the next hop or outgoing interface used to forward packets toward them. Each entry typically records a destination prefix, a next-hop address, an interface, and a metric or administrative cost used to select among competing routes. Routing tables are populated by static configuration and by dynamic routing protocols, and are consulted on every forwarding decision.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:data-structure","label":"Data Structure"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "hasPart":[{"@id":"urn:ngm:class:ip-address","label":"IP Address"}],
    "requires":[{"@id":"urn:ngm:class:routing-protocol","label":"Routing Protocol"}],
    "enables":[{"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"}],
    "uses":[{"@id":"urn:ngm:class:routing-protocol","label":"Routing Protocol"}],
    "dependsOn":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "supports":[{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
    "implements":[{"@id":"urn:ngm:class:routing-protocol","label":"Routing Protocol"}],
    "relatedTo":[{"@id":"urn:ngm:class:kademlia-dht","label":"Kademlia DHT"},{"@id":"urn:ngm:class:distributed-hash-table","label":"Distributed Hash Table"}],
    "bridgesTo":[{"@id":"urn:ngm:class:payment-routing","label":"Payment Routing"}],
    "contrastsWith":[{"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"}],
    "standardizedBy":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A routing table is a [[Data Structure]] used to determine where to forward network packets, mapping destination prefixes to next hops and interfaces.
  - It is consulted by every routing decision in a [[Network Protocol]] stack and underpins reachability across [[Distributed Systems]].
  - Entries are maintained statically or by a dynamic [[Routing Protocol]], and the same abstraction appears in overlay networks such as a [[Distributed Hash Table]].
- ### Overview
  - The routing table is the forwarding brain of any router or routed host. When a packet arrives, the router extracts the destination address and performs a longest-prefix match against the table to choose the most specific applicable entry.
  - In overlay and peer-to-peer systems, an analogous structure maps node identifiers to contact information, allowing a request to be routed toward a key's responsible node in a logarithmic number of hops.
  - The same conceptual mechanism — a lookup keyed by destination that yields a next hop — recurs across IP networks, blockchain gossip layers, and content-addressed storage.
- ### Key aspects
  - Entry structure: destination prefix, next-hop address, outgoing interface, metric and route source.
  - Longest-prefix matching: selection of the most specific matching route rather than the first match.
  - Population sources: directly connected routes, static routes, and dynamically learned routes from a [[Routing Protocol]].
  - Convergence: the process by which all tables in a network reach a consistent view after a topology change.
  - Scale: forwarding tables in core routers may hold hundreds of thousands of entries, demanding efficient lookup structures such as tries.
- ### Mechanisms
  - Static configuration writes fixed entries that never expire unless removed by an operator.
  - Dynamic routing protocols exchange reachability information and recompute entries as links rise and fall.
  - The control plane computes the routing information base while the data plane uses a compiled forwarding information base for line-rate lookup.
  - Overlay routing tables in a [[Kademlia DHT]] organise contacts into buckets by XOR distance to bound lookup latency.
- ### Applications
  - Internet packet forwarding across routers and layer-3 switches.
  - Overlay routing in peer-to-peer and content-addressed networks.
  - Next-hop selection in [[Payment Routing]] graphs and blockchain relay layers.
  - Path selection within [[Distributed Systems]] service meshes and load balancers.
- ### Relationships
  - partOf:: [[Network Protocol]]
  - hasPart:: [[IP Address]]
  - requires:: [[Routing Protocol]]
  - enables:: [[Peer-to-Peer Network]]
  - uses:: [[Routing Protocol]]
  - dependsOn:: [[Network Protocol]]
  - supports:: [[Distributed Systems]]
  - implements:: [[Routing Protocol]]
  - relatedTo:: [[Kademlia DHT]]
  - relatedTo:: [[Distributed Hash Table]]
  - bridgesTo:: [[Payment Routing]]
  - contrastsWith:: [[Peer-to-Peer Network]]
  - standardizedBy:: [[Network Protocol]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
