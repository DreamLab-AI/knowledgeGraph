public:: true

# Proto-Danksharding
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:proto-danksharding",
  "@type": "Page",
  "title": "Proto-Danksharding",
  "vc:slug": "proto-danksharding",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proto-danksharding",
  "@type": "Class",
  "label": "Proto-Danksharding",
  "definition": "Proto-danksharding is an Ethereum scaling upgrade, specified in EIP-4844, that introduces blob-carrying transactions to provide cheap, temporary data availability for layer-2 rollups. It adds a new transaction type carrying large binary data blobs that are not accessible to the Ethereum Virtual Machine and are pruned after a short retention period, with KZG commitments proving their contents. It is an incremental step towards the full danksharding design.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-availability",
      "label": "Data Availability"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK Rollup"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eip-4844",
        "label": "EIP-4844"
      },
      {
        "@id": "urn:ngm:class:blob-transaction",
        "label": "Blob Transaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kzg-commitment",
        "label": "KZG Commitment"
      },
      {
        "@id": "urn:ngm:class:blob-transaction",
        "label": "Blob Transaction"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:danksharding",
        "label": "Danksharding"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
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
  - Proto-danksharding is an Ethereum scaling upgrade, specified in EIP-4844, that introduces blob-carrying transactions to provide cheap, temporary data availability for layer-2 rollups. It adds a new transaction type carrying large binary data blobs that are not accessible to the Ethereum Virtual Machine and are pruned after a short retention period, with KZG commitments proving their contents. It is an incremental step towards the full danksharding design.
  - Related concepts: [[Ethereum]] [[Rollup]] [[Data Availability]] [[EIP-4844]]
- ### Overview
  - Proto-danksharding addresses the dominant cost driver for Ethereum rollups: the price of posting compressed transaction data to the base layer. By introducing blobs, large data payloads that are committed to via KZG polynomial commitments but pruned after roughly a few weeks, it provides ample, low-cost data availability without bloating permanent state. The design deliberately establishes the transaction format and fee market that full danksharding will later scale across many blobs.
- ### Key aspects
  - Blob-carrying transactions add a new data lane separate from EVM-accessible calldata.
  - KZG polynomial commitments allow blob contents to be verified without storing the full data permanently.
  - Blobs are retained only briefly, keeping long-term storage requirements bounded.
  - A separate fee market for blob space decouples rollup data costs from execution-layer gas.
- ### Applications
  - Reducing the cost for rollups to post data to Ethereum.
  - Increasing layer-2 throughput and lowering end-user transaction fees.
  - Providing a stepping stone toward full danksharding and data-availability sampling.
  - Strengthening the security of rollups by anchoring data availability to the base layer.
- ### Relationships
  - subClassOf:: [[Data Availability]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Rollup]]
  - relatedTo:: [[Optimistic Rollup]]
  - relatedTo:: [[ZK Rollup]]
  - relatedTo:: [[Layer 2 Scaling]]
  - implements:: [[EIP-4844]]
  - implements:: [[Blob Transaction]]
  - enables:: [[Scalability]]
  - enables:: [[Data Availability]]
  - uses:: [[KZG Commitment]]
  - uses:: [[Blob Transaction]]
  - supports:: [[Rollup]]
  - supports:: [[Layer 2 Scaling]]
  - bridgesTo:: [[Danksharding]]
  - bridgesTo:: [[Sharding]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
