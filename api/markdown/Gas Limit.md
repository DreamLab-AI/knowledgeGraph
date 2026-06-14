public:: true

# Gas Limit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57bc0a296181389878b1a7b3074f5349a55da138c7eb1adc0e7d14109c1799b8",
  "@type": "Page",
  "vc:slug": "gas-limit",
  "title": "Gas Limit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-layer",
      "vc:label": "EconomicLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-mechanism",
      "vc:label": "EconomicMechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:token-economics",
      "vc:label": "TokenEconomicsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0107"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Gas Limit"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gas-limit",
  "@type": "Class",
  "label": "Gas Limit",
  "definition": "A Gas Limit is the maximum amount of gas — the unit measuring computational effort — that a sender authorises for a blockchain transaction or that a block may contain in aggregate. It serves as a hard cap preventing unbounded resource consumption, protecting network nodes from denial-of-service attacks and ensuring predictable block processing times. On Ethereum, each transaction carries a user-set gas limit and each block carries a protocol-enforced block gas limit that validators adjust over time.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:economic-mechanism",
      "label": "Economic Mechanism"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:smart-contract-execution", "label": "Smart Contract Execution"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:base-fee", "label": "Base Fee"},
      {"@id": "urn:ngm:class:fee-market", "label": "Fee Market"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gas-price", "label": "Gas Price"},
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"},
      {"@id": "urn:ngm:class:mev", "label": "MEV"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"},
      {"@id": "urn:ngm:class:block-size", "label": "Block Size"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gas-limit:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57bc0a296181389878b1a7b3074f5349a55da138c7eb1adc0e7d14109c1799b8"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicLayer]]",
      "resolved": "urn:visionflow:owl:class:economic-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicMechanism]]",
      "resolved": "urn:visionflow:owl:class:economic-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TokenEconomicsDomain]]",
      "resolved": "urn:visionflow:owl:class:token-economics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


### Definition

A Gas Limit is the maximum amount of gas — the unit measuring computational effort — that a sender authorises for a blockchain transaction or that a block may contain in aggregate. It serves as a hard cap preventing unbounded resource consumption, protecting network nodes from denial-of-service attacks and ensuring predictable block processing times. On Ethereum, each transaction carries a user-set gas limit and each block carries a protocol-enforced block gas limit that validators adjust over time.

### Relationships

Gas Limit **requires** Blockchain Transaction (as the entity to which limits apply) and a Consensus Mechanism (to enforce block-level limits across all nodes). It **enables** Smart Contract Execution by bounding the computational cost of arbitrary code and contributes to Blockchain Scalability by controlling how many transactions fit in a block. It **depends on** Base Fee (EIP-1559's protocol-calculated per-unit cost) and the Fee Market (the broader mechanism that balances supply and demand for block space). Gas Limit is closely **related to** Gas Price (the per-unit fee multiplier), Transaction Fee (the product of gas used and gas price), MEV (miners/validators exploit gas ordering), Blockchain Economics (resource pricing signals), Validator Node (which proposes block gas limits), Mempool (where transactions queue waiting for inclusion), and Block Size (the byte-level analogue to gas-level resource caps). It **contrasts with** pure Proof of Work and Proof of Stake as those describe the sybil-resistance mechanism, whereas gas limit describes the resource-metering layer that sits above consensus.

### Content

Gas as a concept was introduced by Ethereum to decouple the cost of computation from the volatile market price of Ether. Every EVM opcode carries a fixed gas cost reflecting its relative computational and storage burden; the sum of opcode costs for a transaction must not exceed the sender's stated gas limit. If a transaction runs out of gas mid-execution, all state changes revert and the sender still pays for gas consumed — a design that discourages spam while preventing loss of miner/validator work.

The block gas limit governs throughput at the network layer. In Ethereum's pre-EIP-1559 model miners could vote to adjust the block gas limit by ±0.1% per block, giving a slow but responsive feedback loop between demand and capacity. EIP-1559, deployed in the London upgrade (2021), introduced a target block size of half the gas limit and a protocol-calculated base fee that rises when blocks are fuller than target, providing more predictable fees while preserving the outer block gas limit as an absolute cap.

The interaction between Gas Limit and the Fee Market is critical for Blockchain Economics. When network congestion is high, the Mempool fills with pending transactions and users raise gas prices (or priority fees post-EIP-1559) to increase the probability of inclusion. MEV actors, including block builders under proposer-builder separation, optimise transaction ordering within gas-limit constraints to capture arbitrage and liquidation revenue. Validator Nodes on proof-of-stake Ethereum now vote on the gas limit through a similar gradual-adjustment mechanism, balancing demand for block space against the hardware requirements of running full nodes.

Blockchain Scalability is directly constrained by block gas limits. Layer-2 solutions — optimistic rollups and ZK-rollups — batch many L2 transactions into a single L1 transaction that consumes a bounded amount of gas, effectively multiplying throughput without raising the L1 gas limit. Adjusting the gas limit involves a trade-off: higher limits increase throughput but raise the computational and storage burden on every Validator Node, risking centralisation as only high-performance nodes can keep up.

- ### Semantic Classification
  - owl-class:: blockchain:GasLimit
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
