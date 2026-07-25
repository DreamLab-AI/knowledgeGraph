public:: true

# Overlay Network

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:overlay-network", "@type":"Page", "title":"Overlay Network", "vc:slug":"overlay-network", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:overlay-network",
  "@type":"Class",
  "label":"Overlay Network",
  "definition":"An overlay network is a logical network built on top of an existing physical or underlay network, where nodes are connected by virtual links that may each traverse many underlying hops. By abstracting away the physical topology, overlays implement custom routing, addressing and services such as peer-to-peer file sharing, content delivery and encrypted tunnelling. They trade some efficiency for flexibility, resilience and the ability to deploy new network behaviour without changing the underlay.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
    "implements":[{"@id":"urn:ngm:class:virtual-network","label":"Virtual Network"}],
    "supports":[{"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"},{"@id":"urn:ngm:class:content-delivery-network","label":"Content Delivery Network"}],
    "uses":[{"@id":"urn:ngm:class:distributed-hash-table","label":"Distributed Hash Table"},{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "enables":[{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
    "dependsOn":[{"@id":"urn:ngm:class:application-layer","label":"Application Layer"}],
    "contrastsWith":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "relatedTo":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"},{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - An **Overlay Network** is a logical network layered over an existing [[Infrastructure]] underlay, where each virtual link can span many physical hops.
  - It abstracts the physical topology so designers can implement custom routing, addressing and services in software.
  - Overlays power [[Peer-to-Peer Network]] systems, content distribution, and encrypted tunnels without requiring changes to the underlying network.
  - This is a [[Virtual Network]] construct: connectivity is defined by participants rather than by the cables between them.
- ### Overview
  - The underlay (typically the Internet) provides basic packet delivery; the overlay defines a richer structure of nodes and virtual links on top.
  - Because the overlay lives largely at the [[Application Layer]], new network behaviour can be deployed by updating software rather than hardware.
  - This flexibility comes at a cost: an overlay link mapped onto a long physical path can add latency and duplicate traffic versus native routing.
  - Overlays are central to [[Distributed Systems]] that need self-organising, fault-tolerant connectivity across administrative boundaries.
- ### Key aspects
  - **Logical topology** — nodes choose their own neighbours, forming structures (rings, trees, meshes) tuned to the application.
  - **Custom routing** — the overlay implements its own forwarding logic, independent of underlay routing tables.
  - **Resilience** — redundant virtual paths let overlays route around failures and censorship in the underlay.
  - **Service deployment** — caching, anonymity, multicast and pub/sub can be added without ISP cooperation.
  - **Self-organisation** — protocols such as a [[Distributed Hash Table]] let nodes locate data and peers without central coordination.
- ### Mechanisms
  - Structured overlays use a [[Distributed Hash Table]] to map keys to responsible nodes deterministically.
  - Unstructured overlays rely on gossip and flooding to discover peers and resources.
  - Tunnelling protocols carry overlay traffic inside underlay packets, optionally with [[Encryption]] for confidentiality.
  - Bootstrap nodes and peer-discovery mechanisms help new participants join the overlay.
- ### Applications
  - [[Peer-to-Peer Network]] file sharing and decentralised storage.
  - [[Content Delivery Network]] meshes that distribute and cache popular content close to users.
  - Virtual private networks and encrypted overlays that secure traffic across untrusted underlays.
  - Blockchain and distributed-ledger gossip layers that propagate transactions and blocks.
- ### Relationships
  - partOf:: [[Distributed Systems]]
  - implements:: [[Virtual Network]]
  - supports:: [[Peer-to-Peer Network]]
  - supports:: [[Content Delivery Network]]
  - uses:: [[Distributed Hash Table]]
  - uses:: [[Network Protocol]]
  - enables:: [[Encryption]]
  - dependsOn:: [[Application Layer]]
  - contrastsWith:: [[Network Protocol]]
  - relatedTo:: [[Infrastructure]]
  - relatedTo:: [[Distributed Systems]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
