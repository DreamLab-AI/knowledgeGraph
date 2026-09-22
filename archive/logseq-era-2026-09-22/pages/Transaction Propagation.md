public:: true

# Transaction Propagation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:transaction-propagation", "@type":"Page", "title":"Transaction Propagation", "vc:slug":"transaction-propagation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:transaction-propagation",
  "@type":"Class",
  "label":"Transaction Propagation",
  "definition":"Transaction propagation is the process by which a newly broadcast transaction spreads across a peer-to-peer blockchain network from its originating node to the rest of the participants. Nodes relay valid transactions to their peers using a gossip protocol, typically announcing availability before transferring full data, so that the transaction reaches miners and validators for inclusion in a block while resisting spam through validation and fee policies.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:gossip-protocol","label":"Gossip Protocol"}],
  "relations":{
    "requires":[
      {"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:node","label":"Node"},
      {"@id":"urn:ngm:class:gossip-protocol","label":"Gossip Protocol"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:mempool","label":"Mempool"},
      {"@id":"urn:ngm:class:block-propagation","label":"Block Propagation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:network-topology","label":"Network Topology"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:transaction","label":"Transaction"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:mempool","label":"Mempool"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:block-propagation","label":"Block Propagation"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:gossip-protocol","label":"Gossip Protocol"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:mempool","label":"Mempool"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- [[Transaction Propagation]] is how a broadcast transaction spreads across a [[Peer-to-Peer Network]]. Nodes relay valid transactions via a [[Gossip Protocol]], populating each [[Node]]'s [[Mempool]] until the transaction reaches miners for inclusion.
- ### Overview
- When a wallet broadcasts a transaction, it submits it to one or a few connected nodes. Those nodes validate it and forward it onward, so that within seconds it floods most of the network without any central coordinator.
- Efficient propagation matters for confirmation latency and fairness: faster, wider spread gives a transaction more chance of timely inclusion and reduces the advantage of privileged network positions.
- ### Mechanisms
- A node announces a transaction identifier to peers, who request the full data only if they have not seen it, reducing redundant bandwidth.
- Each relaying node re-validates the transaction against consensus and policy rules before forwarding.
- Fee and standardness policies, plus mempool limits, throttle spam and prioritise economically rational transactions.
- Network topology and peer selection shape how quickly the transaction reaches the wider graph.
- ### Applications
- Delivering user transactions to miners across [[Bitcoin]]-style networks.
- Maintaining a consistent [[Mempool]] view among nodes.
- Studying network health and censorship resistance via propagation metrics.
- ### Relationships
- subClassOf:: [[Gossip Protocol]]
- requires:: [[Peer-to-Peer Network]]
- dependsOn:: [[Node]]
- dependsOn:: [[Gossip Protocol]]
- relatedTo:: [[Mempool]]
- relatedTo:: [[Block Propagation]]
- uses:: [[Network Topology]]
- enables:: [[Transaction]]
- supports:: [[Mempool]]
- partOf:: [[Peer-to-Peer Network]]
- contrastsWith:: [[Block Propagation]]
- implements:: [[Gossip Protocol]]
- bridgesTo:: [[Mempool]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
