public:: true

# Proof Of Spacetime

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:proof-of-spacetime", "@type":"Page", "title":"Proof Of Spacetime", "vc:slug":"proof-of-spacetime", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:proof-of-spacetime",
  "@type":"Class",
  "label":"Proof Of Spacetime",
  "definition":"Proof of Spacetime (PoSt) is a cryptographic consensus mechanism in which a participant repeatedly proves that it has continuously stored a specific set of data over a period of time, rather than expending computation as in proof of work. Used by decentralised storage networks such as Filecoin, it combines storage proofs with time-based challenges so that providers cannot reclaim space without losing the ability to answer. This ties block production and rewards to verifiable, useful storage capacity.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
    "hasPart":[{"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"}],
    "uses":[{"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"},{"@id":"urn:ngm:class:verifiable-computation","label":"Verifiable Computation"}],
    "implements":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"},{"@id":"urn:ngm:class:decentralized-storage","label":"Decentralized Storage"}],
    "enables":[{"@id":"urn:ngm:class:decentralized-storage","label":"Decentralized Storage"},{"@id":"urn:ngm:class:file-storage","label":"File Storage"}],
    "supports":[{"@id":"urn:ngm:class:filecoin","label":"Filecoin"},{"@id":"urn:ngm:class:block-reward","label":"Block Reward"}],
    "requires":[{"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"}],
    "dependsOn":[{"@id":"urn:ngm:class:decentralized-storage","label":"Decentralized Storage"}],
    "relatedTo":[{"@id":"urn:ngm:class:ipfs","label":"IPFS"},{"@id":"urn:ngm:class:replication","label":"Replication"},{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
    "contrastsWith":[{"@id":"urn:ngm:class:proof-of-work","label":"Proof Of Work"},{"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"}],
    "bridgesTo":[{"@id":"urn:ngm:class:proof-of-reserves","label":"Proof of Reserves"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Proof Of Spacetime is a [[Consensus Mechanism]] that uses [[Cryptographic Proof]] and [[Verifiable Computation]] to demonstrate that data has been stored continuously over time, powering [[Decentralized Storage]] networks like [[Filecoin]].
- It binds rewards to ongoing, verifiable storage rather than raw computation.
- ### Overview
- Proof of Spacetime answers a question that proof of work cannot: not just that a participant did work once, but that it has held a specific dataset intact across a span of time. It builds on proof of replication, which establishes that a unique physical copy of the data exists, and adds repeated time-based challenges that a provider can only answer while still storing the data.
- In storage blockchains, providers periodically generate compact proofs in response to unpredictable challenges. Failing or being slow to respond signals that the data was discarded, triggering penalties. Because the proofs are succinct and verifiable on-chain, the network can trust storage commitments without re-downloading the underlying data.
- This reorients consensus economics around a useful resource, durable storage, in contrast to the otherwise unproductive hashing of proof of work.
- ### Mechanisms
- Proof of replication establishes that a distinct encoded copy of the data exists at a provider.
- Time-bound challenges force providers to prove possession repeatedly across epochs.
- Succinct proofs let verifiers confirm storage cheaply without holding the data themselves.
- Slashing penalises providers that fail or delay their spacetime proofs.
- Sector-based accounting groups stored data into units that are proven and tracked together.
- ### Applications
- Block production and rewards in decentralised storage networks such as Filecoin.
- Verifiable long-term archival where durability must be cryptographically demonstrated.
- Markets that pay providers for committed, provable storage capacity.
- Integration with content-addressed systems like IPFS for retrievable, persistent data.
- ### Relationships
- partOf:: [[Consensus Mechanism]]
- hasPart:: [[Cryptographic Proof]]
- uses:: [[Cryptographic Proof]]
- uses:: [[Verifiable Computation]]
- implements:: [[Consensus Mechanism]]
- implements:: [[Decentralized Storage]]
- enables:: [[Decentralized Storage]]
- enables:: [[File Storage]]
- supports:: [[Filecoin]]
- supports:: [[Block Reward]]
- requires:: [[Cryptographic Proof]]
- dependsOn:: [[Decentralized Storage]]
- relatedTo:: [[IPFS]]
- relatedTo:: [[Replication]]
- relatedTo:: [[Consensus]]
- contrastsWith:: [[Proof Of Work]]
- contrastsWith:: [[Proof of Stake]]
- bridgesTo:: [[Proof of Reserves]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
