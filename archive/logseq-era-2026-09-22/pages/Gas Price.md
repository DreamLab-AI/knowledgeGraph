public:: true

# Gas Price
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3425eaab98b977e46d7a19a817d7d245bf4efdc34b1bfe838d99f27d33bf74c5",
  "@type": "Page",
  "vc:slug": "gas-price",
  "title": "Gas Price",
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
      "vc:value": "BC-0106"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Gas Price"
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
  "@id": "urn:ngm:class:gas-price",
  "@type": "Class",
  "label": "Gas Price",
  "definition": "Gas Price is the amount of cryptocurrency (denominated in gwei on Ethereum) that a transaction sender is willing to pay per unit of gas consumed during execution. It serves as the primary market mechanism for prioritising transactions within a block and compensating validators or miners for computational work. Gas price interacts with the gas limit and base fee to determine total transaction cost, and is subject to dynamic adjustment under fee-market protocols such as EIP-1559.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
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
    "hasPart": [
      {"@id": "urn:ngm:class:base-fee", "label": "Base Fee"},
      {"@id": "urn:ngm:class:priority-fee", "label": "Priority Fee"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:gas", "label": "Gas"},
      {"@id": "urn:ngm:class:gas-limit", "label": "Gas Limit"},
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fee-market", "label": "Fee Market"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:eip-1559", "label": "EIP-1559"},
      {"@id": "urn:ngm:class:miner", "label": "Miner"},
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:gas-price:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3425eaab98b977e46d7a19a817d7d245bf4efdc34b1bfe838d99f27d33bf74c5"
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

Gas Price is the amount of cryptocurrency (denominated in gwei on Ethereum) that a transaction sender is willing to pay per unit of gas consumed during execution. It serves as the primary market mechanism for prioritising transactions within a block and compensating validators or miners for computational work. Gas price interacts with the gas limit and base fee to determine total transaction cost, and is subject to dynamic adjustment under fee-market protocols such as EIP-1559.

### Relationships

Gas Price **hasPart** [[Base Fee]] and [[Priority Fee]], the two components that constitute a gas price bid under EIP-1559. It **requires** [[Gas]] (the unit of computational work), [[Gas Limit]] (the maximum units a transaction may consume), and [[Transaction]] (the carrier object). Gas Price **enables** the [[Fee Market]] that governs block inclusion ordering and **enables** [[Smart Contract]] execution by funding the EVM's computational steps. It **dependsOn** [[Blockchain]] (the execution environment) and [[Mempool]] (the pending-transaction pool where gas-price competition takes place). It is **relatedTo** [[EIP-1559]] (the fee-reform protocol), [[Miner]] (recipient of fees under PoW), [[Transaction Fee]] (the total payment derived from gas price × gas used), [[Token Economics]], [[Proof Of Work]], [[Proof of Stake]], and [[Mechanism Design]].

### Content

Gas Price emerged as the primary resource-allocation instrument for smart-contract platforms. On Ethereum, every byte of bytecode interpretation and every arithmetic operation performed by the EVM consumes a defined number of gas units; the gas price converts that unit count into a monetary cost paid in ether. Early Ethereum used a simple first-price auction: senders set their own gas prices and miners selected the highest-paying transactions. This created volatile and often unpredictable fee dynamics, particularly during periods of network congestion.

EIP-1559, activated in the London hard fork (August 2021), restructured the gas-price mechanism by splitting it into a protocol-determined [[Base Fee]] and an optional [[Priority Fee]] (tip). The base fee is burned, removing ether from circulation and creating deflationary pressure during high-activity periods. The priority fee goes to the block proposer as an incentive. Senders specify a max-fee-per-gas cap; any difference between the cap and the base fee plus tip is refunded, simplifying cost estimation significantly.

Gas price acts as a real-time signal of demand for blockspace. When the [[Mempool]] is congested, senders raise their gas prices to ensure timely inclusion; when demand drops, prices fall toward the base fee. This feedback loop influences user behaviour, DeFi protocol design, layer-2 scaling decisions, and validator economics under both [[Proof Of Work]] and [[Proof of Stake]] consensus. Layer-2 solutions such as [[Layer2]] rollups batch transactions to amortise gas costs, reducing the effective gas price per user operation.

Understanding gas price is foundational to [[Token Economics]] and [[Mechanism Design]] in blockchain systems. Protocols must balance miner/validator incentives, user affordability, and Sybil resistance when designing fee models. Gas-price dynamics also affect smart-contract design: gas-expensive operations may be restructured or moved off-chain, and protocols must account for worst-case gas costs in security audits and formal analyses.

### Provenance
- sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
- migration-date:: 2026-04-26T00:00:00Z
