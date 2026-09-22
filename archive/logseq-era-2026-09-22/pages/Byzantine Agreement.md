public:: true

# Byzantine Agreement

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:byzantine-agreement",
  "@type": "Page",
  "title": "Byzantine Agreement",
  "vc:slug": "byzantine-agreement",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:byzantine-agreement",
  "@type": "Class",
  "label": "Byzantine Agreement",
  "definition": "Byzantine Agreement is a class of distributed consensus protocols that guarantee correct operation even when a subset of participating nodes behave arbitrarily — sending conflicting, malicious, or unpredictable messages. Originating from the Byzantine Generals Problem formalised by Lamport, Shostak, and Pease in 1982, these protocols ensure that all honest nodes reach the same decision provided the number of faulty nodes does not exceed one-third of the total. Byzantine Agreement is foundational to blockchain consensus mechanisms and safety-critical distributed systems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-signature", "label": "Cryptographic Signature"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-data", "label": "Blockchain Data"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:crash-fault-tolerance", "label": "Crash Fault Tolerance"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:voting-round", "label": "Voting Round"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:security", "label": "Security"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:distributed-computing-research", "label": "Distributed Computing Research"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Byzantine Agreement]] is a family of [[Consensus Mechanism]] protocols designed to reach a common decision in [[Distributed Systems]] where nodes may fail arbitrarily or behave maliciously.
  - Safety is guaranteed when fewer than one-third of nodes are faulty, as proven by Lamport, Shostak, and Pease.
  - Practical Byzantine Fault Tolerance (PBFT) was a landmark implementation; Tendermint, HotStuff, and Casper are modern derivatives used in [[Blockchain]] platforms.

- ### Overview
  - The Byzantine Generals Problem illustrates the difficulty of reaching agreement when some participants may be traitors sending contradictory information.
  - Classical solutions require at least 3f+1 nodes to tolerate f faulty nodes, and typically involve multi-round message exchange.
  - Modern BFT protocols optimise for partial synchrony, reducing communication overhead while maintaining safety.

- ### Key Aspects
  - **Safety**: All honest nodes agree on the same value.
  - **Liveness**: Eventually a decision is reached under sufficient network conditions.
  - **Threshold**: Tolerates up to f < n/3 Byzantine faults.
  - **Message complexity**: Classical PBFT is O(n²); newer protocols use threshold signatures to reduce this.

- ### Mechanisms
  - Pre-prepare, prepare, and commit phases ensure that a consistent value is agreed upon across honest replicas.
  - [[Cryptographic Signature]] schemes prevent faulty nodes from forging messages.
  - Leader-based variants elect a proposer, with view-change protocols for leader failure.

- ### Applications
  - Tendermint consensus powers Cosmos Hub and many IBC-connected chains.
  - HotStuff is the basis for Diem (Libra) and several enterprise blockchains.
  - Safety-critical aerospace and automotive systems use BFT variants for sensor fusion voting.

- ### Relationships
  - uses:: [[Cryptographic Signature]]
  - uses:: [[Peer-to-Peer Network]]
  - relatedTo:: [[Distributed Systems]]
  - relatedTo:: [[Fault Tolerance]]
  - relatedTo:: [[Blockchain]]
  - implements:: [[Consensus Mechanism]]
  - enables:: [[Blockchain Data]]
  - enables:: [[Smart Contract]]
  - dependsOn:: [[Cryptographic Hash]]
  - contrastsWith:: [[Crash Fault Tolerance]]
  - bridgesTo:: [[Security]]

- ### Provenance
  - updated:: 2026-06-15
