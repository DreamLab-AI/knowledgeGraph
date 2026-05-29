public:: true

# Celestia
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:celestia",
  "@type": "Page",
  "vc:slug": "celestia",
  "title": "Celestia",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:celestia",
  "@type": "Class",
  "label": "Celestia",
  "definition": "Celestia is a modular blockchain network that decouples data availability from execution and consensus, functioning as a dedicated data availability layer that rollups and sovereign chains can use to publish and order transaction data without requiring a monolithic execution environment. It employs data availability sampling (DAS) via erasure coding so that light nodes can probabilistically verify that block data has been published without downloading it in full, enabling Celestia nodes to scale with the number of light clients rather than validators. Celestia introduced the concept of sovereign rollups, in which chains publish data to Celestia for ordering and availability whilst handling their own execution and settlement independently.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:data-availability", "label": "Data Availability"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:erasure-coding", "label": "Erasure Coding"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:tendermint-consensus", "label": "Tendermint Consensus"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cosmos", "label": "Cosmos"},
      {"@id": "urn:ngm:class:reed-solomon-erasure-coding", "label": "Reed-Solomon Erasure Coding"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Celestia is a purpose-built [[Data Availability]] blockchain that separates the data availability and ordering functions from transaction execution and settlement. Traditional monolithic blockchains such as Ethereum handle all four functions (execution, settlement, consensus, data availability) on a single layer, constraining throughput and creating scaling bottlenecks. Celestia's architecture allows rollup chains to publish transaction data blobs to Celestia, which orders and makes them available using [[Erasure Coding]] and data availability sampling, whilst the rollup itself handles execution. This separation enables a modular stack where each function can be optimised independently, supporting [[Layer 2 Scaling]] without requiring trust in a centralised sequencer.

- ### Relationships
  - Celestia uses [[Erasure Coding]] (specifically 2D [[Reed-Solomon Erasure Coding]]) to allow light nodes to probabilistically verify block availability by sampling random chunks. Its consensus layer builds on [[Tendermint Consensus]], inheriting fast finality and Byzantine fault tolerance. The network enables [[Layer 2 Scaling]] and broader [[Blockchain Scalability]] by providing cheap, abundant data space for rollups. Celestia is architecturally related to the [[Cosmos]] ecosystem and uses the IBC protocol for interoperability, though sovereign rollups on Celestia are not bound to the Cosmos hub for settlement.

- ### Content
  - Celestia was conceived by Mustafa Al-Bassam, who co-authored the foundational paper "Fraud and Data Availability Proofs" (2018) and the subsequent modular blockchain thesis. The project was formally incorporated and developed through 2021–2023, raising significant venture funding and attracting a community of protocol researchers. Mainnet launched in October 2023 with the TIA token, making Celestia the first live modular data availability network. The project popularised the term "modular blockchain" and catalysed a wave of projects — Avail, EigenDA, Near DA — competing in the data availability layer market.

  - Celestia's core technical innovation is 2D data availability sampling. Block data is arranged into a 2D matrix and erasure-coded using Reed-Solomon codes so that 50% of the extended data is sufficient to reconstruct the full block. Light nodes sample random cells of the matrix; if they successfully download a threshold of samples, they can conclude with high probability that the full block is available. This scheme allows the network's data throughput to scale with the number of light nodes participating, because each additional light client increases sampling coverage. Block producers must commit to the erasure-coded data root in the block header, and fraud proofs alert the network if the commitment is invalid.

  - Rollup teams building on Celestia publish their transaction data as blobs — namespaced data segments — to Celestia's block space. The rollup's sequencer orders transactions, but data availability is guaranteed by Celestia rather than the rollup itself. This reduces the security trust assumption: users need only verify that data is available (a statistical guarantee from DAS) rather than trusting the sequencer's honesty. Sovereign rollups on Celestia define their own settlement rules, enabling customisable state machine logic. Rollup-as-a-service platforms (Caldera, Conduit, AltLayer) have integrated Celestia as a data availability backend, making deployment of modular rollups accessible to application developers.

  - By 2025, Celestia has processed significant volumes of blob data from dozens of rollups including Manta Pacific, Dymension RollApps, and various OP Stack and Arbitrum Orbit deployments. Throughput capacity has grown with protocol upgrades increasing block size limits. The modular thesis has been validated by Ethereum's own EIP-4844 (proto-danksharding), which introduced blob transactions on Ethereum to reduce rollup data costs — directly inspired by Celestia's design. Competing data availability layers (EigenDA backed by EigenLayer, Avail by Polygon co-founder) have entered production, making the DA layer a competitive, commoditising infrastructure segment. Celestia continues to push the research frontier with full danksharding designs and SNARK-based validity proofs for data availability.

