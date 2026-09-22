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
  "definition": "Data availability is the property of a distributed system—most critically blockchain networks and rollup scaling architectures—that guarantees all data necessary to verify and reconstruct network state is published and retrievable by any participant. The core data availability problem arises when a block producer publishes a block header without releasing the underlying transaction data, making it impossible for validators or light clients to verify the block's correctness without downloading all data. Modern solutions combine erasure coding (expanding data such that any sufficient subset allows full reconstruction) with data availability sampling (DAS), enabling light nodes to probabilistically confirm full publication by checking only a small random subset of encoded chunks. Data availability is a foundational primitive in modular blockchain architectures, separating the data publication concern from execution, consensus, and settlement layers.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      },
      {
        "@id": "urn:ngm:class:data-availability-sampling",
        "label": "Data Availability Sampling"
      },
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:kzg-polynomial-commitment",
        "label": "KZG Polynomial Commitment"
      },
      {
        "@id": "urn:ngm:class:reed-solomon-codes",
        "label": "Reed-Solomon Code"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:blockchain-scalability",
        "label": "Blockchain Scalability"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:light-client",
        "label": "Light Client"
      },
      {
        "@id": "urn:ngm:class:modular-blockchain",
        "label": "Modular Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:danksharding",
        "label": "Danksharding"
      },
      {
        "@id": "urn:ngm:class:proto-danksharding",
        "label": "Proto-Danksharding"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:block-propagation",
        "label": "Block Propagation"
      },
      {
        "@id": "urn:ngm:class:distributed-hash-table",
        "label": "Distributed Hash Table"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-withholding-attack",
        "label": "Data Withholding Attack"
      },
      {
        "@id": "urn:ngm:class:state-availability",
        "label": "State Availability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:content-addressed-storage",
        "label": "Content-Addressed Storage"
      },
      {
        "@id": "urn:ngm:class:data-availability-committee",
        "label": "Data Availability Committee"
      },
      {
        "@id": "urn:ngm:class:validity-proof",
        "label": "Validity Proof"
      },
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:da-layer",
      "label": "DA Layer"
    },
    {
      "@id": "urn:ngm:class:data-publication",
      "label": "Data Publication"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Data availability is the blockchain and distributed systems property ensuring that all data required to verify network state is retrievably published by block producers and accessible to any participant. The problem was formally characterised in the 2018 work on fraud and data availability proofs, exposing a gap in [[Light Client]] security: a malicious block producer can publish a valid-looking block header whilst withholding the underlying transaction data, preventing anyone from detecting fraud without full-node participation. The canonical solution combines [[Erasure Coding]] with [[Data Availability Sampling]] so that light nodes can probabilistically audit full data publication by checking only a small random subset of encoded chunks. Data availability now anchors the entire modular [[Blockchain Scalability]] stack, serving as a dedicated primitive that [[Rollup]] architectures, [[Sharding]] designs, and [[Modular Blockchain]] frameworks all depend upon.

- ### Overview
  - Data availability addresses a fundamental security challenge in scalable blockchain design: how to guarantee that block data is publicly accessible without requiring every node to download every byte.
  - The problem becomes acute in settings where execution is separated from data publication—for example, an optimistic rollup posts compressed transaction batches to a parent chain and relies on the parent network's data availability guarantee to enable fraud proofs.
  - Without guaranteed data availability, a sequencer or block producer can commit a hash of data it never publishes, making it impossible for verifiers to detect incorrect state transitions.
  - **Why it matters**
    - Enables trust-minimised [[Light Client]] operation without full block download
    - Is the primary bottleneck for [[Layer 2 Scaling]] throughput—rollup cost scales with DA cost
    - Determines whether [[Fraud Proof]] and [[Validity Proof]] systems are actually enforceable
    - Underpins decentralisation: nodes can participate in consensus without storing all history
  - **The data availability problem**
    - A block producer publishes a header committing to block data via a [[Merkle Tree]] root or [[KZG Polynomial Commitment]]
    - If the producer withholds chunks of the underlying data, no third party can reconstruct and verify the block
    - [[Light Client]] nodes that only check headers cannot detect the withholding without downloading all data
    - A [[Data Withholding Attack]] exploits this to commit invalid state transitions undetected

- ### Key Mechanisms
  - **Erasure Coding**
    - The original block data is encoded using [[Erasure Coding]] (typically [[Reed-Solomon Code]]) to expand it by a redundancy factor (commonly 2×)
    - Any sufficient fraction of the encoded chunks (e.g. any 50% of a 2× expansion) allows full reconstruction
    - This transforms a binary "data available or not" question into a probabilistic sampling problem
  - **Data Availability Sampling (DAS)**
    - [[Data Availability Sampling]] allows each [[Light Client]] to request a small random set of coded chunks from the network
    - If any requested chunk is unavailable, the node rejects the block
    - Statistical argument: a withholding attacker must hide more than half the chunks, but random sampling across many nodes makes this detectable with exponentially high probability
    - Approximately 75 random samples per light node achieves very high confidence of detecting a 50%-withholding attacker
  - **Cryptographic Commitments**
    - [[Cryptographic Commitment]] schemes bind block headers to their underlying data
    - [[Merkle Tree]] roots provide chunk-level inclusion proofs, allowing sampled chunks to be verified against the committed root
    - [[KZG Polynomial Commitment]] (as used in Ethereum's EIP-4844 and full danksharding) provides efficient opening proofs and enables 2D sampling schemes with stronger security guarantees
  - **Data Availability Committees (DACs)**
    - An alternative trust model uses a [[Data Availability Committee]]—a designated set of signatories that attest to having stored data off-chain
    - DACs trade trust assumptions for lower cost and latency, used in systems like Arbitrum AnyTrust and Validium rollups
    - Security depends on honest-majority or threshold assumptions within the committee
  - **Blob Transactions and EIP-4844**
    - [[Proto-Danksharding]] (Ethereum EIP-4844) introduced blob-carrying transactions: large data fields attached to transactions at lower cost than equivalent calldata
    - KZG commitments to blob data are verified on-chain; blobs themselves are pruned after a retention window (~18 days)
    - This separated DA cost from execution cost, immediately reducing rollup transaction fees

- ### Architectural Contexts
  - **Monolithic blockchains**
    - All nodes download and store all data; DA is trivially satisfied but limits scalability
    - Full nodes can verify everything but bandwidth costs restrict participation
  - **Modular blockchains**
    - [[Modular Blockchain]] architectures explicitly separate execution, consensus, settlement, and data availability layers
    - Dedicated DA layers (Celestia, EigenDA, Avail) handle data publication as their primary function
    - Rollups post batches to the DA layer and inherit its availability guarantees, settling on a separate chain
  - **Rollup architectures**
    - Optimistic [[Rollup]] systems depend on data availability to make transaction data accessible to fraud proof challengers
    - ZK [[Rollup]] systems use [[Validity Proof]] (ZK-SNARKs/STARKs) to prove correct execution, but still require data publication so users can reconstruct state and exit
    - Validium systems move data off-chain to a [[Data Availability Committee]], accepting a trust tradeoff for higher throughput

- ### Dedicated Data Availability Layers
  - **Celestia**
    - Purpose-built DA layer implementing DAS over a Cosmos-based network
    - Nodes perform random sampling over 2D erasure-coded data squares
    - Rollups (rollups using Celestia as DA) post data blobs and receive inclusion proofs
  - **EigenDA**
    - Ethereum-restaked DA network using EigenLayer; validators restake ETH to participate in DA attestation
    - Provides high throughput and inherits Ethereum economic security through restaking
  - **Avail**
    - Polygon-ecosystem DA layer also using DAS with KZG commitments
    - Targeting interoperability across multiple rollup ecosystems
  - **Ethereum Danksharding roadmap**
    - Full [[Danksharding]] extends EIP-4844 to provide 2D DAS over a large number of blobs
    - Aims to scale Ethereum's DA capacity by orders of magnitude, enabling light clients to perform DAS natively

- ### Applications and Use Cases
  - **Rollup data posting**: Optimistic and ZK rollups post compressed transaction batches to a DA layer as the prerequisite for fraud or validity proof enforcement
  - **Light client security**: Mobile and browser-based [[Light Client]] nodes use DAS to participate in consensus-level verification without running a full node
  - **Cross-chain bridges**: [[Blockchain Interoperability]] protocols rely on data availability proofs to verify source chain state in a trust-minimised way
  - **Decentralised sequencers**: Shared sequencer networks post ordering data to a DA layer to allow permissionless proof of sequencing
  - **Data blobs for NFTs and on-chain storage**: EIP-4844 blobs are used for cost-effective publication of large binary data (images, calldata) with a defined expiry window
  - **Volitions**: Hybrid systems allowing per-transaction choice between on-chain DA and off-chain DAC, optimising cost versus trust

- ### Relationships
  - uses:: [[Erasure Coding]]
  - uses:: [[Data Availability Sampling]]
  - uses:: [[Cryptographic Commitment]]
  - uses:: [[Merkle Tree]]
  - uses:: [[KZG Polynomial Commitment]]
  - uses:: [[Reed-Solomon Code]]
  - enables:: [[Layer 2 Scaling]]
  - enables:: [[Blockchain Scalability]]
  - enables:: [[Rollup]]
  - enables:: [[Light Client]]
  - enables:: [[Modular Blockchain]]
  - requires:: [[Peer-to-Peer Network]]
  - requires:: [[Consensus Mechanism]]
  - implements:: [[Danksharding]]
  - implements:: [[Proto-Danksharding]]
  - dependsOn:: [[Block Propagation]]
  - dependsOn:: [[Distributed Hash Table]]
  - contrastsWith:: [[Data Withholding Attack]]
  - contrastsWith:: [[State Availability]]
  - relatedTo:: [[Sharding]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - relatedTo:: [[Content-Addressed Storage]]
  - relatedTo:: [[Data Availability Committee]]
  - relatedTo:: [[Validity Proof]]
  - relatedTo:: [[Fraud Proof]]
  - bridges-to:: [[Distributed Storage]]
  - bridges-to:: [[Content Delivery Network]]

- ### Standards & Context
  - **EIP-4844 (Proto-Danksharding)**: Ethereum Improvement Proposal introducing blob transactions with KZG commitments; activated on Ethereum mainnet in March 2024 (Dencun upgrade). Blobs are 128 KB each, with a target of three and maximum of six per block.
  - **Full Danksharding (EIP-7594 / PeerDAS)**: Research-stage proposal extending EIP-4844 with peer-based DAS, enabling light clients to sample across many blobs without downloading all of them. Under active specification by the Ethereum Foundation.
  - **Celestia specification**: Open specification for 2D erasure coding and DAS published by Celestia Labs; influences design of other DA layers.
  - **IETF considerations**: No formal IETF standard yet; the concept is de facto standardised through EIP processes and independent protocol specifications.
  - **Modular blockchain taxonomy**: The Celestia and Eclipse ecosystems use a layered taxonomy distinguishing execution, settlement, consensus, and data availability layers as discrete protocol components.
  - Related standards and cryptographic primitives: [[Reed-Solomon Code]], [[KZG Polynomial Commitment]], [[Merkle Tree]] (all have independent formal specifications)

- ### Provenance
  - sources:: Formal literature on fraud and data availability proofs (Al-Bassam et al. 2018); Ethereum EIP-4844 specification; Celestia whitepaper; Ethereum Foundation danksharding research blog posts; EigenDA and Avail documentation
  - updated:: 2026-06-13
