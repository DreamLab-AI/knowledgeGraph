public:: true

# Mining Reward
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:751e139c632d3833fcb44b5253cc713ad29b0293c825739e02aaeec4689d4349",
  "@type": "Page",
  "vc:slug": "mining-reward",
  "title": "Mining Reward",
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
      "@id": "urn:visionflow:owl:class:consensus-domain",
      "vc:label": "ConsensusDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-protocol",
      "vc:label": "ConsensusProtocol"
    },
    {
      "@id": "urn:visionflow:owl:class:protocol-layer",
      "vc:label": "ProtocolLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0069"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mining Reward"
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
  "@id": "urn:ngm:class:mining-reward",
  "@type": "Class",
  "label": "Mining Reward",
  "definition": "A Mining Reward is the economic incentive awarded to the miner who successfully produces a valid block and appends it to the canonical blockchain, comprising a block subsidy of newly minted cryptocurrency plus the aggregate transaction fees of all transactions included in that block. The subsidy follows a pre-programmed halving schedule—in Bitcoin, halving every 210,000 blocks—gradually reducing issuance until the subsidy approaches zero and transaction fees become the sole miner compensation, aligning long-term network security incentives with user demand for block space.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:mining", "label": "Mining"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:bitcoin-mining", "label": "Bitcoin Mining"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"},
      {"@id": "urn:ngm:class:miner", "label": "Miner"},
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:high-energy-consumption", "label": "High Energy Consumption"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-entity", "label": "Blockchain Entity"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:mining-reward:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:751e139c632d3833fcb44b5253cc713ad29b0293c825739e02aaeec4689d4349"
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
      "raw": "[[ConsensusDomain]]",
      "resolved": "urn:visionflow:owl:class:consensus-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConsensusProtocol]]",
      "resolved": "urn:visionflow:owl:class:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ProtocolLayer]]",
      "resolved": "urn:visionflow:owl:class:protocol-layer",
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
  A Mining Reward is the economic incentive awarded to the miner who produces a valid block, comprising a block subsidy of newly minted cryptocurrency plus the aggregate transaction fees of all transactions included in that block. The subsidy follows a pre-programmed halving schedule until fees become the sole compensation.

- ### Relationships
  The Mining Reward requires Proof Of Work as the qualifying condition and is integral to the broader Mining process and Consensus Mechanism. It enables the Blockchain Network by making honest mining economically rational and is closely tied to Bitcoin Mining. The Block Reward is the subsidy component of the mining reward, while Transaction Fee represents the fee-revenue component. Miners and Mining Pools are the direct recipients. High Energy Consumption is a consequence of the competition for mining rewards in PoW networks. The economic logic of mining rewards is studied within Blockchain Economics.

- ### Content

  The mining reward serves a dual function in proof-of-work blockchains: it funds the initial distribution of the native currency—replacing the role that central banks play in fiat systems—and it provides the ongoing incentive for miners to expend energy securing the network against attacks. Without the reward, rational miners would have no economic reason to perform proof-of-work computation, and the security guarantees of the chain would collapse.

  In Bitcoin, the block subsidy started at 50 BTC per block at genesis in 2009. The halving mechanism, triggered every 210,000 blocks (approximately four years), reduced it to 25 BTC in 2012, 12.5 BTC in 2016, 6.25 BTC in 2020, and 3.125 BTC in 2024. The scheduled reduction continues until approximately 2140, when the total supply reaches 21 million BTC and the subsidy becomes negligible. This deflationary schedule contrasts with proof-of-stake networks, which typically set ongoing issuance rates rather than strict supply caps.

  The transition from subsidy-dominated to fee-dominated rewards is a major open research question in blockchain economics. Game-theoretic models suggest that in a fee-only regime, rational miners might selectively mine blocks with high-fee transactions, creating unpredictable block intervals and mempool dynamics. Proposed solutions include smooth fee market mechanisms (EIP-1559 in Ethereum, which burns a base fee and rewards miners only tips) and covenants that create predictable transaction demand.

  Mining pool coordination amplifies individual miners' rewards by aggregating hash power and distributing block rewards proportionally, smoothing what would otherwise be a highly variable Poisson-distributed income stream. The economics of mining reward sharing within pools—including variance, fee structures, and strategic withholding attacks—is a substantial sub-field of Blockchain Economics research.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
