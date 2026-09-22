public:: true

# Bittorrent
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:bittorrent", "@type":"Page", "title":"Bittorrent", "vc:slug":"bittorrent", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:bittorrent",
  "@type":"Class",
  "label":"Bittorrent",
  "definition":"BitTorrent is a peer-to-peer protocol for distributing files by splitting them into pieces that participants download from and upload to one another rather than from a single server. Each participant who holds the complete file can seed it, while downloaders simultaneously share the pieces they already have, so aggregate capacity grows with demand. The protocol uses content hashing to verify pieces and a tracker or distributed hash table to help peers discover one another.",
  "domain":"distributed-systems",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer To Peer Network"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:distributed-hash-table","label":"Distributed Hash Table"},
      {"@id":"urn:ngm:class:content-addressing","label":"Content Addressing"},
      {"@id":"urn:ngm:class:overlay-network","label":"Overlay Network"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:file-sharing","label":"File Sharing"},
      {"@id":"urn:ngm:class:data-distribution","label":"Data Distribution"},
      {"@id":"urn:ngm:class:distributed-storage","label":"Distributed Storage"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"},
      {"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:decentralized-storage","label":"Decentralized Storage"},
      {"@id":"urn:ngm:class:replication","label":"Replication"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:content-delivery-network","label":"Content Delivery Network"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:ipfs","label":"IPFS"},
      {"@id":"urn:ngm:class:gossip-protocol","label":"Gossip Protocol"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- BitTorrent distributes files by exchanging pieces directly between peers across a [[Peer To Peer Network]].
	- It uses [[Content Addressing]] to verify each piece and a [[Distributed Hash Table]] to discover peers.
	- It contrasts with a [[Content Delivery Network]] by spreading load across downloaders rather than central servers.
- ### Overview
	- A file is divided into fixed-size pieces, each identified and verified by a cryptographic hash.
	- A torrent descriptor lists the piece hashes and the means of locating other participants.
	- Peers that hold the whole file seed it; those still downloading leech while also uploading what they have.
	- Capacity scales with the swarm size, so popular content distributes faster as more peers join.
- ### Mechanisms
	- Tit-for-tat choking rewards peers that reciprocate upload bandwidth, discouraging free-riding.
	- Rarest-first piece selection prioritises scarce pieces to keep the swarm healthy.
	- A [[Distributed Hash Table]] provides trackerless peer discovery over an [[Overlay Network]].
	- Hash verification rejects corrupt or malicious pieces before they propagate.
- ### Applications
	- Efficient [[File Sharing]] and bulk [[Data Distribution]] for large datasets and software images.
	- Backing layers for [[Decentralized Storage]] and content-addressed systems like [[IPFS]].
	- Game and operating-system update delivery that offloads bandwidth from origin servers.
	- Resilient [[Replication]] of archives across volunteer or institutional peers.
- ### Relationships
	- subClassOf:: [[Peer To Peer Network]]
	- uses:: [[Distributed Hash Table]]
	- uses:: [[Content Addressing]]
	- uses:: [[Overlay Network]]
	- supports:: [[File Sharing]]
	- supports:: [[Data Distribution]]
	- supports:: [[Distributed Storage]]
	- requires:: [[Bandwidth]]
	- requires:: [[Network Protocol]]
	- enables:: [[Decentralized Storage]]
	- enables:: [[Replication]]
	- contrastsWith:: [[Content Delivery Network]]
	- relatedTo:: [[IPFS]]
	- relatedTo:: [[Gossip Protocol]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
