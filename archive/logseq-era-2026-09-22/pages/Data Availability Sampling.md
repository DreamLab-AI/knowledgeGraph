public:: true

# Data Availability Sampling
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-availability-sampling", "@type":"Page", "title":"Data Availability Sampling", "vc:slug":"data-availability-sampling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-availability-sampling",
  "@type":"Class",
  "label":"Data Availability Sampling",
  "definition":"Data availability sampling (DAS) is a technique that lets resource-limited clients gain high statistical confidence that all the data behind a block has been published, without downloading the whole block. Each client requests a few random fragments of an erasure-coded dataset; if enough randomly chosen fragments are returned across many clients, the full data can be reconstructed, so withholding it becomes detectable. DAS is a foundational primitive for scalable, modular blockchains and rollup-centric architectures.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:data-availability","label":"Data Availability"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-availability","label":"Data Availability"}],
    "implements":[{"@id":"urn:ngm:class:data-availability","label":"Data Availability"}],
    "uses":[{"@id":"urn:ngm:class:erasure-coding","label":"Erasure Coding"}],
    "enables":[{"@id":"urn:ngm:class:scalability","label":"Scalability"},{"@id":"urn:ngm:class:light-client","label":"Light Client"}],
    "hasPart":[{"@id":"urn:ngm:class:erasure-coding","label":"Erasure Coding"}],
    "requires":[{"@id":"urn:ngm:class:erasure-coding","label":"Erasure Coding"}],
    "dependsOn":[{"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"}],
    "supports":[{"@id":"urn:ngm:class:rollup","label":"Rollup"},{"@id":"urn:ngm:class:sharding","label":"Sharding"}],
    "relatedTo":[{"@id":"urn:ngm:class:celestia","label":"Celestia"},{"@id":"urn:ngm:class:fraud-proof","label":"Fraud Proof"},{"@id":"urn:ngm:class:ethereum","label":"Ethereum"},{"@id":"urn:ngm:class:light-client","label":"Light Client"}],
    "bridgesTo":[{"@id":"urn:ngm:class:rollup","label":"Rollup"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Data availability sampling lets a light client gain near-certainty that a block's data has been fully published without downloading all of it, by requesting random fragments of an [[Erasure Coding|erasure-coded]] dataset. It implements [[Data Availability]] guarantees and is a key enabler of [[Scalability]] for [[Rollup]] and [[Sharding]] designs.
- ### Overview
- For a blockchain to be safely verified, the data behind each block must be available so that anyone can check its validity. A block producer who publishes a header but withholds the data could hide invalid state.
- Downloading every block in full does not scale to high throughput. Data availability sampling breaks this trade-off by allowing many small clients to collectively verify availability.
- The block data is first erasure-coded, so the original can be reconstructed from any sufficiently large subset of fragments. This makes withholding all-or-nothing: hiding even a little data requires hiding a large fraction.
- Each client samples a few random fragments. If a producer withholds data, most clients will, with high probability, request at least one missing fragment and detect the fault.
- ### Mechanisms
- Erasure coding, often Reed-Solomon over a two-dimensional layout, expands the data with redundancy so any large-enough subset suffices for reconstruction.
- Polynomial commitments such as KZG bind the encoding so that fragments can be verified against the block header without trusting the producer.
- Random sampling across many independent clients drives the probability of undetected withholding exponentially toward zero.
- Networked retrieval and reconstruction allow honest participants to recover the full data once enough fragments circulate.
- ### Applications
- Light-client verification of large blocks on modular and sharded chains.
- Dedicated data availability layers such as [[Celestia]] that sell verifiable availability to rollups.
- Scaling [[Ethereum]] through danksharding-style blob data verified by sampling.
- Underpinning [[Rollup]] security where execution is off-chain but data must remain available.
- ### Key aspects
- DAS gives probabilistic, not absolute, guarantees, but the confidence approaches certainty with modest sampling.
- It depends on a healthy peer-to-peer network to serve and reconstruct fragments.
- It pairs with fraud or validity proofs to deliver full verification of off-chain execution.
- ### Relationships
- partOf:: [[Data Availability]]
- implements:: [[Data Availability]]
- uses:: [[Erasure Coding]]
- enables:: [[Scalability]]
- enables:: [[Light Client]]
- hasPart:: [[Erasure Coding]]
- requires:: [[Erasure Coding]]
- dependsOn:: [[Peer-to-Peer Network]]
- supports:: [[Rollup]]
- supports:: [[Sharding]]
- relatedTo:: [[Celestia]]
- relatedTo:: [[Fraud Proof]]
- relatedTo:: [[Ethereum]]
- relatedTo:: [[Light Client]]
- bridgesTo:: [[Rollup]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
