public:: true
alias:: Data-Availability

# Data Availability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-availability",
  "@type": "Page",
  "vc:slug": "data-availability",
  "title": "Data Availability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-availability",
  "@type": "Class",
  "label": "Data Availability",
  "definition": "Data availability in the context of blockchain and distributed systems refers to the guarantee that all data necessary to verify and reconstruct the state of a network—particularly transaction data published by block producers—is accessible to any participant who wishes to retrieve it. The data availability problem arises when validators or light clients cannot verify that a block producer has published the full data backing a block header without downloading and checking every byte. Modern solutions to data availability employ erasure coding and data availability sampling (DAS), allowing light nodes to probabilistically verify full data availability by checking only a small random subset of encoded chunks. Data availability is a foundational property in modular blockchain architectures and rollup scaling systems.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:data-layer", "label": "Data Layer"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:erasure-coding", "label": "Erasure Coding"},
      {"@id": "urn:ngm:class:sampling", "label": "Sampling"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sharding", "label": "Sharding"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:content-addressed-storage", "label": "Content-Addressed Storage"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Data availability is the blockchain property ensuring that all data required to verify network state is retrievably published, solved through [[Erasure Coding]] and probabilistic [[Sampling]] that allow light nodes to confirm full publication without downloading every chunk, and foundational to [[Layer 2 Scaling]] rollup architectures.

- ### Relationships
  - Data availability relies on [[Erasure Coding]] to expand data such that any sufficient subset of chunks allows reconstruction, uses [[Cryptographic Commitment]] schemes (KZG polynomial commitments, Merkle roots) to bind block headers to their underlying data, and applies [[Sampling]] to let light clients probabilistically audit availability. It directly enables [[Layer 2 Scaling]] by providing the off-chain data publication layer rollups require, contributes to [[Blockchain Scalability]], and relates to [[Sharding]] as a technique for partitioning the problem across nodes. [[Content-Addressed Storage]] systems complement it by making retrieved data self-verifying.

- ### Content
  - The data availability problem was formally articulated by Mustafa Al-Bassam and colleagues in the 2018 paper "Fraud and Data Availability Proofs," which showed that existing light client designs could not detect block producers who published a valid header while withholding the underlying transaction data. This was identified as a fundamental security gap preventing trust-minimised scaling of blockchains without downloading all data.

  - The canonical solution combines two techniques: erasure coding expands the original data by a factor of two or more using a Reed-Solomon or similar code, so that any 50% of chunks suffices to reconstruct the whole; data availability sampling allows each light node to request a small random set of chunks (typically 75 samples suffice for high confidence) and reject the block if any chunk is unavailable. The statistical argument is that a withholding attacker would need to hide more than half the chunks to prevent reconstruction, but with random sampling, the probability of a dishonest block passing undetected drops exponentially with sample count.

  - Data availability is a defining concern of modular blockchain architectures, which separate execution, settlement, consensus, and data availability into distinct layers. Dedicated data availability layers—Celestia, EigenDA, Avail, and Ethereum's own danksharding roadmap—publish and prove data availability as their primary function, allowing rollups to post transaction batches and proofs without burdening the settlement layer.

  - In 2024–2025, Ethereum's EIP-4844 (proto-danksharding) introduced blob transactions carrying data at lower cost than calldata, with commitments verified by KZG polynomial proofs, representing the first production deployment of data availability separation on Ethereum mainnet. Full danksharding with DAS for light clients is in active research, and the ecosystem of dedicated DA layers is expanding, with rollups beginning to select between multiple DA providers based on cost, latency, and security assumptions.