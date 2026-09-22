public:: true

# Danksharding
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:danksharding", "@type":"Page", "title":"Danksharding", "vc:slug":"danksharding", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:danksharding",
  "@type":"Class",
  "label":"Danksharding",
  "definition":"Danksharding is a data-availability scaling design for Ethereum that scales the blockchain by providing large amounts of cheap data space for rollups rather than sharding execution. It uses a unified fee market and a merged block-building process in which a single proposer commits to a block containing many data blobs, the availability of which is verified through data-availability sampling and erasure coding. Danksharding is the long-term target architecture that proto-danksharding incrementally builds towards.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:sharding","label":"Sharding"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:data-availability-sampling","label":"Data Availability Sampling"},
      {"@id":"urn:ngm:class:erasure-coding","label":"Erasure Coding"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:scalability","label":"Scalability"},
      {"@id":"urn:ngm:class:rollup","label":"Rollup"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:zk-rollup","label":"ZK-Rollup"},
      {"@id":"urn:ngm:class:optimistic-rollup","label":"Optimistic Rollup"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:kzg-commitment","label":"KZG Commitment"},
      {"@id":"urn:ngm:class:blob-transaction","label":"Blob Transaction"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:data-availability","label":"Data Availability"},
      {"@id":"urn:ngm:class:beacon-chain","label":"Beacon Chain"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:polynomial-commitment","label":"Polynomial Commitment"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:validator","label":"Validator"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:proto-danksharding","label":"Proto-Danksharding"},
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"},
      {"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Danksharding is the long-term data-availability scaling design for [[Ethereum]], a form of [[Sharding]] that supplies cheap blob space for a [[Rollup]] rather than sharding execution. It verifies blob availability with [[Data Availability Sampling]] and [[Erasure Coding]], and is approached incrementally through [[Proto-Danksharding]].

- ### Overview
  - Where traditional sharding splits execution across many chains, danksharding instead scales the data layer so that rollups, which already move computation off-chain, can post their compressed data cheaply and verifiably.
  - A central idea is a single merged proposer who commits to one block containing many data blobs, paired with a unified fee market. This avoids the coordination complexity of many independent shard proposers.
  - Light clients and validators do not need to download every blob; instead they sample small random pieces, relying on erasure coding so that withholding data becomes statistically detectable.

- ### Mechanisms
  - Erasure coding expands blob data with redundancy so that the full content can be reconstructed from a subset, making selective withholding detectable.
  - Data-availability sampling lets nodes confirm with high probability that all data is published by checking only a few random samples.
  - KZG polynomial commitments bind each blob to a succinct commitment that supports efficient sampling proofs.
  - Proposer-builder separation decouples the resource-intensive task of building large blocks from the act of proposing them.

- ### Applications
  - Drastically reducing the data-posting cost for ZK-rollups and optimistic rollups on Ethereum.
  - Increasing aggregate Layer-2 throughput without raising the burden on individual validators.
  - Supporting data-heavy applications such as cross-rollup interoperability and decentralised storage proofs.

- ### Relationships
  - subClassOf:: [[Sharding]]
  - implements:: [[Data Availability Sampling]]
  - implements:: [[Erasure Coding]]
  - enables:: [[Scalability]]
  - enables:: [[Rollup]]
  - bridgesTo:: [[ZK-Rollup]]
  - bridgesTo:: [[Optimistic Rollup]]
  - requires:: [[KZG Commitment]]
  - requires:: [[Blob Transaction]]
  - dependsOn:: [[Data Availability]]
  - dependsOn:: [[Beacon Chain]]
  - uses:: [[Polynomial Commitment]]
  - supports:: [[Validator]]
  - relatedTo:: [[Proto-Danksharding]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Proof of Stake]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
