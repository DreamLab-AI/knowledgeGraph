public:: true

# Priority Fee
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2502d261538f10d6c0c880d90d68f5f4b504619afea7e8fc02937a4826455310",
  "@type": "Page",
  "vc:slug": "priority-fee",
  "title": "Priority Fee",
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
      "@id": "urn:visionflow:owl:class:token-economics-domain",
      "vc:label": "TokenEconomicsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0109"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Priority Fee"
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
  "@id": "urn:ngm:class:priority-fee",
  "@type": "Class",
  "label": "Priority Fee",
  "definition": "A Priority Fee (also called a miner tip or validator tip) is an optional, user-specified additional payment on top of the base fee in EIP-1559-compatible blockchains, paid directly to the block producer to incentivise preferential inclusion and ordering of a transaction within the next block. By offering a higher tip, users signal urgency and compete for limited block space during periods of network congestion, enabling a market-based transaction prioritisation mechanism. Priority fees are burned alongside the base fee under EIP-1559's fee model only partially — the base fee is burned while the priority fee flows to the validator, aligning incentives for prompt transaction confirmation.",
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
    "requires": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:gas-optimization", "label": "Gas Optimization"},
      {"@id": "urn:ngm:class:mev", "label": "MEV"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:eip-1559", "label": "EIP-1559"},
      {"@id": "urn:ngm:class:base-fee", "label": "Base Fee"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:gas", "label": "Gas"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:fee-market", "label": "Fee Market"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"},
      {"@id": "urn:ngm:class:gas-price", "label": "Gas Price"},
      {"@id": "urn:ngm:class:gas-fee-market", "label": "Gas Fee Market"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:burning-mechanism", "label": "Burning Mechanism"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:priority-fee:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2502d261538f10d6c0c880d90d68f5f4b504619afea7e8fc02937a4826455310"
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
      "resolved": "urn:visionflow:owl:class:token-economics-domain",
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
  A Priority Fee (also called a miner tip or validator tip) is an optional, user-specified additional payment on top of the base fee in EIP-1559-compatible blockchains, paid directly to the block producer to incentivise preferential inclusion and ordering of a transaction within the next block. By offering a higher tip, users signal urgency and compete for limited block space during periods of network congestion, enabling a market-based transaction prioritisation mechanism. Priority fees are burned alongside the base fee under EIP-1559's fee model only partially — the base fee is burned while the priority fee flows to the validator, aligning incentives for prompt transaction confirmation.

- ### Semantic Classification
  - owl-class:: blockchain:PriorityFee
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[Economic Mechanism]]
  - requires:: [[Blockchain Transaction]], [[Consensus Mechanism]]
  - enables:: [[Gas Optimization]], [[MEV]]
  - dependsOn:: [[EIP-1559]], [[Base Fee]]
  - hasPart:: [[Gas]]
  - partOf:: [[Fee Market]], [[Tokenomics]]
  - relatedTo:: [[Transaction Fee]], [[Gas Price]], [[Gas Fee Market]], [[Validator Node]]
  - contrastsWith:: [[Burning Mechanism]]

- ### Content
  The Priority Fee was formalised as a distinct component of Ethereum's fee structure by EIP-1559, activated in the London hard fork (August 2021). Before EIP-1559, users submitted a single gas price bid in a first-price auction; miners included the highest-bidding transactions, creating unpredictability and overpayment. EIP-1559 separated fees into an algorithmically determined base fee (burned permanently) and a discretionary priority fee (paid to the validator).

  From the user's perspective, setting a priority fee involves estimating the competitive tip level required to achieve inclusion within the desired number of blocks. Wallets typically query the mempool to surface recent percentile tip values (e.g., the 50th, 90th, and 99th percentile) and suggest appropriate values for slow, standard, or fast confirmation. During periods of extreme congestion — such as popular NFT mints — priority fees can spike by orders of magnitude as users compete for a fixed block capacity.

  Validators (formerly miners) rationally include transactions offering the highest priority fees first, up to the block gas limit. This creates a secondary market dynamic: MEV searchers use sophisticated strategies to insert their transactions at precise positions within a block's ordering, sometimes paying extremely high priority fees for front-running or arbitrage opportunities. The priority fee thus sits at the intersection of transaction economics, consensus incentives, and MEV extraction.

  In the context of Layer 2 scaling solutions and alternative blockchains with lower base fees, priority fees become less contested but remain structurally present as a validator-incentive mechanism. Cross-chain comparison of priority fee norms is relevant to tokenomics design, particularly when modelling user cost sensitivity and network congestion dynamics.

  <!-- Merged from Priority Fee.md: Blockchain, Transaction Fee -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
