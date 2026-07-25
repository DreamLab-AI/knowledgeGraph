public:: true

# IPLD
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ipld",
  "@type": "Page",
  "vc:slug": "ipld",
  "title": "IPLD",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ipld",
  "@type": "Class",
  "label": "IPLD",
  "definition": "IPLD (InterPlanetary Linked Data) is a data model and set of specifications for building content-addressed, hash-linked data structures that interoperate across distributed systems. It defines how to represent linked data as directed acyclic graphs whose edges are content identifiers (CIDs), allowing any hash-linked structure — Git commits, blockchain blocks, IPFS files — to be traversed through a common addressing scheme. IPLD provides the data layer beneath IPFS and Filecoin, decoupling the logical structure of data from the protocol used to store or transport it.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:content-addressing", "label": "Content Addressing"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:merkle-dag", "label": "Merkle DAG"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-availability", "label": "Data Availability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - IPLD is a content-addressed data model that represents linked data as hash-linked directed acyclic graphs, providing a common addressing scheme that unifies distributed data structures.

- ### Relationships
  - IPLD is a subclass of [[Content Addressing]] and uses [[Merkle DAG]] and [[Merkle Tree]] structures to build verifiable, deduplicated graphs. It enables robust [[Data Availability]] in distributed networks and relates closely to [[IPFS]], for which it is the underlying data layer, and to [[Linked Data]] traditions from the semantic web.

- ### Content
  - IPLD generalises the insight that powers Git, Bitcoin, and IPFS alike: if you address data by the cryptographic hash of its content rather than by location, you obtain immutability, automatic deduplication, and tamper-evidence for free. IPLD formalises this into a single data model where every piece of data has a content identifier (CID) and where links between data are simply CIDs embedded in other data, forming hash-linked graphs that can span systems and protocols.

  - The model is deliberately codec-agnostic. The same logical graph can be encoded as DAG-CBOR, DAG-JSON, or raw bytes, and the CID carries a multicodec prefix declaring how to interpret what it points to. This means IPLD can describe and traverse heterogeneous structures uniformly — a CID can resolve into a Git tree, an Ethereum block header, or an IPFS directory — turning previously siloed content-addressed systems into a single navigable information space.

  - Because links are content hashes, IPLD graphs are necessarily directed and acyclic: you cannot reference data whose hash you do not yet know, so cycles are impossible by construction. This Merkle-DAG structure gives strong integrity guarantees — verifying the root CID transitively verifies the entire reachable graph — and enables efficient partial replication, since a consumer can fetch and validate only the subgraph it needs rather than an entire dataset.

  - IPLD serves as the foundational data layer for the IPFS and Filecoin ecosystems, and its addressing model supports data availability in decentralised storage by making content location-independent and verifiable regardless of which node serves it. Its schemas and pathing conventions let applications define structured, versioned, self-verifying data formats, positioning IPLD as connective tissue for a web of interoperable, content-addressed distributed systems.
