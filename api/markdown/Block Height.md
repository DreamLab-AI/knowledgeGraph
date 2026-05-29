public:: true

# Block Height
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9e104112e8993e1f4a847cc2a584e677fea8c1342506f4a0bff580c4a179c2e8",
  "@type": "Page",
  "vc:slug": "block-height",
  "title": "Block Height",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-energy-optimisation",
      "vc:label": "AI Energy Optimisation"
    },
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
      "@id": "urn:visionflow:owl:class:blockchain-domain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-data-structure",
      "vc:label": "DistributedDataStructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0011"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Block Height"
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
  "@id": "urn:ngm:class:block-height",
  "@type": "Class",
  "label": "Block Height",
  "definition": "Block Height is a monotonically increasing integer representing the position of a specific block in a blockchain, defined as the count of confirmed blocks preceding it in the canonical chain (the genesis block has height 0). Block height serves as the primary temporal reference for blockchain state: smart contracts use it for time-locked operations, miners use it to calculate block rewards and halving events, and consensus rules use it to enforce protocol upgrade activation thresholds. In the presence of forks, two competing chains may share block height values; the canonical chain is determined by the fork choice rule applied at the point of divergence.",
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
      "@id": "urn:ngm:class:distributed-data-structure",
      "label": "DistributedDataStructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:block", "label": "Block"},
      {"@id": "urn:ngm:class:genesis-block", "label": "Genesis Block"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:fork-choice-rule", "label": "Fork Choice Rule"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:block-time", "label": "Block Time"},
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:mining-reward", "label": "Mining Reward"},
      {"@id": "urn:ngm:class:chain-reorganization", "label": "Chain Reorganization"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:block-height:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9e104112e8993e1f4a847cc2a584e677fea8c1342506f4a0bff580c4a179c2e8"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Energy Optimisation]]",
      "resolved": "urn:visionflow:linked:ai-energy-optimisation",
      "kind": "StubLink"
    },
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
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DistributedDataStructure]]",
      "resolved": "urn:visionflow:owl:class:distributed-data-structure",
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


- ### Definition
  Block Height is a monotonically increasing integer representing the position of a specific block in a blockchain, defined as the count of confirmed blocks preceding it in the canonical chain (genesis block has height 0). It serves as the primary temporal reference for blockchain state, used by smart contracts for time-locked operations and by consensus rules for protocol upgrade activation. In the presence of forks, competing chains may share height values; the canonical chain is selected by the fork choice rule.

- ### Relationships
  - hasPart:: [[Block]], [[Genesis Block]]
  - partOf:: [[Blockchain]], [[Blockchain Protocol]]
  - requires:: [[Consensus Mechanism]]
  - enables:: [[Smart Contract]], [[Blockchain Governance]], [[Fork Choice Rule]]
  - relatedTo:: [[Block Time]], [[Block Reward]], [[Mining Reward]], [[Chain Reorganization]]
  - dependsOn:: [[Proof Of Work]]
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

- ### Content
  Block height provides the canonical chronological index of a blockchain's transaction history. Because block production in proof-of-work systems is probabilistic, height is not equivalent to elapsed wall-clock time—Bitcoin's 10-minute target means a height of 840,000 (reached April 2024) corresponds to approximately 16 years of operation, but individual block intervals vary from seconds to hours. Protocol designers therefore use height rather than timestamps for consensus-critical time references, since timestamps are self-reported by miners and can be manipulated within the two-hour tolerance window.

  A common use of block height in Bitcoin is the halving schedule: the block subsidy is halved every 210,000 blocks (approximately four years). Smart contract platforms such as Ethereum use block height (or its timestamp equivalent) for time-lock constraints in DeFi protocols—position liquidations, options expiry, governance proposal voting periods, and vesting schedules all encode height or time thresholds that trigger on-chain actions automatically when reached.

  Block height also plays a central role in fork detection and resolution. When a network experiences a chain split—whether from a natural orphan race or a deliberate consensus parameter change—different nodes may temporarily assign the same height to different blocks. The fork choice rule (longest chain by cumulative work in Bitcoin; LMD-GHOST in Ethereum) resolves which block at a given height belongs to the canonical chain. Chain reorganisation events, where a node switches from a shorter to a longer chain, cause blocks at affected heights to be re-evaluated: transactions in orphaned blocks may be re-broadcast or may permanently fail if their inputs were consumed in the canonical chain.

  Checkpoint mechanisms and SPV security both reference block height: older blocks at low heights are generally considered more secure because an attacker would need to re-mine all subsequent blocks to rewrite them, giving each confirmation additional irreversibility weight proportional to the difficulty work accumulated above it.

  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies



  <!-- Merged from Block Height.md: Singularity -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
