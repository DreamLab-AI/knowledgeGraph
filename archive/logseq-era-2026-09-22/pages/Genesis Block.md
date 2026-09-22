public:: true

# Genesis Block
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:58a33f1bc9a75da1e66c62d917ec52f200af01ba3bd0a14db2e5589373c33e38",
  "@type": "Page",
  "vc:slug": "genesis-block",
  "title": "Genesis Block",
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
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
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
      "vc:value": "BC-0005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Genesis Block"
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
  "@id": "urn:ngm:class:genesis-block",
  "@type": "Class",
  "label": "Genesis Block",
  "definition": "The genesis block is the first block in a blockchain, hardcoded into the client software and serving as the immutable anchor from which the entire chain of subsequent blocks descends. It establishes the initial chain state, encodes the founding parameters of the network, and contains no reference to a previous block hash. Because it cannot be altered without invalidating all subsequent blocks, the genesis block is the ultimate root of trust for the distributed ledger.",
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
      "label": "Distributed Data Structure"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"},
      {"@id": "urn:ngm:class:merkle-root", "label": "Merkle Root"},
      {"@id": "urn:ngm:class:timestamp", "label": "Timestamp"},
      {"@id": "urn:ngm:class:nonce", "label": "Nonce"},
      {"@id": "urn:ngm:class:coinbase-transaction", "label": "Coinbase Transaction"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"},
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:block-height", "label": "Block Height"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:genesis-block:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:58a33f1bc9a75da1e66c62d917ec52f200af01ba3bd0a14db2e5589373c33e38"
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
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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


### Definition

The genesis block is the first block in a [[Blockchain]], hardcoded into client software and serving as the immutable anchor from which the entire chain descends. It establishes the initial chain state, encodes the founding parameters of the network, and contains no reference to a previous block hash. Because it cannot be altered without invalidating all subsequent blocks, the genesis block is the ultimate root of trust for the [[Distributed Ledger]].

### Relationships

The genesis block is a structural component (`partOf`) both [[Blockchain]] and [[Distributed Ledger]]. It compositionally contains (`hasPart`) a [[Block Header]], [[Merkle Root]], [[Timestamp]], [[Nonce]], and a [[Coinbase Transaction]] — the special first transaction awarding the initial block reward. Its structural integrity `requires` [[Cryptographic Hash]] functions and the property of [[Immutability]]. The existence of a valid genesis block `enables` the bootstrapping of a [[Blockchain Network]] and defines block zero for [[Block Height]] accounting. It is governed by the network's [[Consensus Mechanism]] and [[Blockchain Protocol]], and its internal data structure is organised around a [[Merkle Tree]].

### Content

The genesis block occupies a unique position in blockchain architecture: it is the only block that has no parent. Every other block in the chain references the hash of its predecessor, creating the chain of custody that gives blockchains their tamper-evident property. The genesis block instead carries a zero or null value in its "previous hash" field, making it self-referential and defining the chain's starting height of zero.

In Bitcoin, the genesis block (block 0) was mined by Satoshi Nakamoto on 3 January 2009. It famously embeds a newspaper headline in its coinbase transaction — "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" — providing an unforgeable timestamp proof and a statement of intent about the motivation for the technology. Its [[Block Reward]] of 50 BTC is permanently unspendable due to an anomaly in how the coinbase transaction was encoded, making it one of the few supply-reducing artefacts in Bitcoin history.

From a protocol standpoint, the genesis block hardcodes the initial [[Difficulty]] target and any network-specific configuration parameters. When a node first connects to a network, it verifies incoming blocks by tracing the chain back to the genesis block hash embedded in its software. A different genesis block hash means a different network entirely — this is why Bitcoin and Bitcoin Cash, despite sharing history up to a point, are fundamentally separate chains. The genesis block thus functions as a species identifier for the chain.

In proof-of-work systems the genesis block's [[Nonce]] and [[Timestamp]] establish the baseline from which the [[Difficulty Adjustment]] algorithm begins operating. In proof-of-stake and other consensus families the genesis block additionally may record initial validator allocations and staking parameters. Regardless of consensus mechanism, the genesis block's immutability is guaranteed by the same [[Cryptographic Hash Function]] that secures all subsequent blocks — any retroactive modification produces a hash mismatch that the [[Blockchain Network]] immediately rejects.

### Provenance
- sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
- migration-date:: 2026-04-26T00:00:00Z
