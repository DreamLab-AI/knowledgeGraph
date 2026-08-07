public:: true

# Content Identifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:content-identifier",
  "@type": "Page",
  "vc:slug": "content-identifier",
  "title": "Content Identifier",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:content-identifier",
  "@type": "Class",
  "label": "Content Identifier",
  "definition": "A Content Identifier (CID) is a self-describing, cryptographically derived label used in the InterPlanetary File System and IPLD ecosystem to uniquely identify and verify content through its hash, encoding the hash function used, the hash digest, and a multicodec descriptor for the serialised data format into a compact, version-aware multihash structure.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:content-addressing",
      "label": "Content Addressing"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:multihash",
        "label": "Multihash"
      },
      {
        "@id": "urn:ngm:class:ipld",
        "label": "IPLD"
      },
      {
        "@id": "urn:ngm:class:merkle-dag",
        "label": "Merkle DAG"
      },
      {
        "@id": "urn:ngm:class:multicodec",
        "label": "Multicodec"
      },
      {
        "@id": "urn:ngm:class:multibase",
        "label": "Multibase"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deduplication",
        "label": "Content Deduplication"
      },
      {
        "@id": "urn:ngm:class:tamper-detection",
        "label": "Tamper Detection"
      },
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:ipld",
        "label": "IPLD"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ipfs-content-addressing",
        "label": "IPFS Content Addressing"
      },
      {
        "@id": "urn:ngm:class:filecoin",
        "label": "Filecoin"
      },
      {
        "@id": "urn:ngm:class:nft-metadata",
        "label": "NFT Metadata"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cid",
      "label": "CID"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Content Identifier]] (CID) is a self-describing cryptographic label in the [[IPFS]] and [[IPLD]] ecosystems that encodes a [[Multihash]] digest alongside codec and version metadata, enabling any party to retrieve and verify content from any source without trusting the delivery channel, because the identifier itself certifies content integrity.

- ### Relationships
  - [[Content Identifier]] is a concrete implementation of [[Content Addressing]], using [[Multihash]] to encode hash function selection and digest. CIDs are the primary addressing primitive of the [[IPLD]] data model and locate data within [[IPFS]] distributed storage. They can reference nodes within a [[Merkle DAG]], enabling CIDs to link to other CIDs, forming authenticated data structures. [[IPFS Content Addressing]] relies on CIDs as its link layer.

- ### Content
  - The Content Identifier was designed by Juan Benet and the Protocol Labs team as part of the IPFS project, first specified around 2015–2016. IPFS's foundational insight was that location-addressed URLs (http://server/path) are fragile and censor-able, whereas content-addressed identifiers that encode the hash of the data itself are permanent and verifiable regardless of where the data is stored. CID formalised this by creating a single compact binary structure that is self-describing: it encodes which version of the CID format is being used, which codec serialises the data, and which hash function produced the digest.

  - A CID is constructed as a concatenation of four components: a version byte (CIDv0 or CIDv1), a multicodec varint identifying the data format (dag-pb for legacy protobuf trees, dag-cbor for CBOR-encoded IPLD, raw for unstructured bytes, etc.), a multihash prefix identifying the hash algorithm (SHA2-256, BLAKE2b, etc.), and the hash digest itself. CIDv0 is a legacy format compatible with original IPFS addresses and is always a base58-encoded SHA2-256 multihash of a dag-pb block. CIDv1 introduces multibase encoding (base32, base64url) and codec flexibility. Human-readable CIDs begin with "bafy..." (base32, dag-cbor) or "QmY..." (base58, dag-pb) prefixes recognisable in practice.

  - CIDs enable a powerful set of properties in distributed systems. Content deduplication is automatic: identical data always produces the same CID regardless of origin. Tamper detection is unconditional: any modification to content changes the hash and thus the CID, making inconsistency immediately detectable without trusting the server. Permanent links are achievable when content is pinned by storage providers: a CID published today remains valid and retrievable years later even if the original publisher goes offline. These properties have made CIDs the addressing mechanism of choice for NFT metadata storage, decentralised web applications, and verifiable dataset archiving.

  - By 2024–2025, CIDs are embedded in a wide range of Web3 infrastructure. The Ethereum ecosystem uses CIDs in ERC-721 NFT token URIs pointing to IPFS-stored metadata, and ERC-4973 and related standards are deepening on-chain CID verification. The W3C Verifiable Credentials Data Model 2.0 uses IPLD and CIDs for content-addressing credential schemas. Filecoin's storage deals are indexed by CID, and the IPNI (InterPlanetary Network Indexer) provides a scalable lookup service mapping CIDs to providers. Research into CID caching, provider reputation, and content routing at scale is active, as IPFS networks have grown to hundreds of millions of stored CIDs.

