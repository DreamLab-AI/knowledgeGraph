public:: true

# Consistent Hashing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:consistent-hashing",
  "@type": "Page",
  "title": "Consistent Hashing",
  "vc:slug": "consistent-hashing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:consistent-hashing",
  "@type": "Class",
  "label": "Consistent Hashing",
  "definition": "Consistent hashing is a distribution technique that maps both data keys and storage nodes onto the same circular hash space, so that each key is assigned to the next node encountered clockwise on the ring. When a node joins or leaves, only the keys in its immediate neighbourhood are remapped rather than the entire key space, minimising data movement. Virtual nodes are commonly used to smooth load distribution across heterogeneous servers.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-hash-table",
      "label": "Distributed Hash Table"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:data-partitioning",
        "label": "Data Partitioning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-partitioning",
        "label": "Data Partitioning"
      },
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-hash-table",
        "label": "Distributed Hash Table"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:node",
        "label": "Node"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Consistent hashing is a distribution technique that maps both data keys and storage nodes onto the same circular hash space, so that each key is assigned to the next node encountered clockwise on the ring. When a node joins or leaves, only the keys in its immediate neighbourhood are remapped rather than the entire key space, minimising data movement. Virtual nodes are commonly used to smooth load distribution across heterogeneous servers.
  - Related core concepts: [[Distributed Hash Table]] [[Hash Function]] [[Load Balancing]] [[Sharding]] [[Distributed Systems]]
- ### Overview
  - Consistent hashing solves the rehashing problem of naive modulo-based partitioning, where changing the number of nodes forces almost every key to move. By placing nodes and keys on a shared ring, the scheme localises disruption to the segment adjacent to the changed node. It underpins distributed caches, key-value stores, and peer-to-peer overlays.
- ### Mechanisms
  - Keys and nodes are hashed onto a fixed-size circular identifier space
  - Each key is owned by the first node clockwise from its position on the ring
  - Node addition or removal remaps only O(keys/nodes) keys on average
  - Virtual nodes assign multiple ring positions per physical node to balance load
  - Replication is achieved by walking to the next several distinct nodes on the ring
- ### Applications
  - Partitioning data across distributed key-value stores and databases
  - Routing requests in distributed caches such as content delivery layers
  - Locating data in peer-to-peer distributed hash tables
  - Sharding stateful services while keeping rebalancing cheap
- ### Relationships
  - uses:: [[Hash Function]]
  - uses:: [[Data Partitioning]]
  - requires:: [[Hash Function]]
  - implements:: [[Data Partitioning]]
  - implements:: [[Load Balancing]]
  - enables:: [[Scalability]]
  - enables:: [[Fault Tolerance]]
  - enables:: [[Sharding]]
  - supports:: [[Caching]]
  - supports:: [[Load Balancing]]
  - partOf:: [[Distributed Hash Table]]
  - relatedTo:: [[Distributed Systems]]
  - relatedTo:: [[Peer-to-Peer Network]]
  - relatedTo:: [[Node]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
