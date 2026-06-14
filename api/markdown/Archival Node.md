public:: true

# Archival Node
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b603e6f1694bf09b170bdc247d2e27061c8b329d518f34274ac0d7ce3c03f340",
  "@type": "Page",
  "vc:slug": "archival-node",
  "title": "Archival Node",
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
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-component",
      "vc:label": "NetworkComponent"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0093"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Archival Node"
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
  "@id": "urn:ngm:class:archival-node",
  "@type": "Class",
  "label": "Archival Node",
  "definition": "An Archival Node is a blockchain network participant that stores the complete historical state of the ledger—every block, transaction, and state root from genesis to the current tip—without pruning older data. Unlike pruned nodes or light nodes, an archival node can respond to queries about any historical state at any block height, making it essential for block explorers, analytics services, and smart contract developers who need point-in-time state access.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:network-component",
      "label": "NetworkComponent"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:light-node", "label": "Light Node"},
      {"@id": "urn:ngm:class:pruned-node", "label": "Pruned Node"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:full-node", "label": "Full Node"},
      {"@id": "urn:ngm:class:chain-state", "label": "Chain State"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:blockchain-infrastructure", "label": "Blockchain Infrastructure"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"},
      {"@id": "urn:ngm:class:long-term-archival", "label": "Long Term Archival"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:state-machine-replication", "label": "State Machine Replication"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:archival-node:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b603e6f1694bf09b170bdc247d2e27061c8b329d518f34274ac0d7ce3c03f340"
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
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkComponent]]",
      "resolved": "urn:visionflow:owl:class:network-component",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
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
  An Archival Node is a blockchain network participant that stores the complete historical state of the ledger—every block, transaction, and state root from genesis to the current tip—without pruning older data. Unlike pruned nodes or light nodes, an archival node can respond to queries about any historical state at any block height, making it essential for block explorers, analytics services, and smart contract developers who need point-in-time state access.

- ### Semantic Classification
  - owl-class:: blockchain:ArchivalNode
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - contrastsWith:: [[Light Node]], [[Pruned Node]]
  - relatedTo:: [[Full Node]], [[Chain State]], [[Blockchain Network]], [[Blockchain Infrastructure]]
  - requires:: [[Blockchain Protocol]], [[Peer-to-Peer Network]]
  - enables:: [[Blockchain Transaction]], [[Blockchain Compliance]], [[Long Term Archival]]
  - supports:: [[State Machine Replication]]

- ### Content
  An Archival Node retains the full history of a blockchain from the genesis block to the present, including every intermediate state trie snapshot. On account-based chains such as Ethereum, this means the node can reconstruct the complete world state—all account balances, contract storage slots, and code hashes—at any historical block number. This capability is essential for decentralised applications that invoke eth_call or debug_traceTransaction at historical heights, and for analytics platforms that compute metrics retroactively.

  The operational cost of running an archival node is significantly higher than a full (pruned) node. Storage requirements scale with the full history of the chain: Ethereum's archival state exceeded several terabytes by 2024, requiring high-capacity NVMe storage arrays. Synchronisation from genesis using the default fast-sync or snap-sync modes does not produce an archival node; operators must use full archive sync modes or restore from purpose-built archival snapshots. Bandwidth and I/O throughput are also bottlenecks during initial sync and during state query peaks.

  Archival nodes are a critical piece of blockchain infrastructure despite their operational cost. Block explorers (Etherscan, Subscan), DeFi analytics platforms, MEV searchers that replay historical blocks, and smart contract security auditors that need to reproduce past execution traces all depend on archival nodes as their data source. In enterprise blockchain deployments, archival nodes serve compliance and audit functions by providing immutable, queryable records of all historical transactions and state transitions.

  The distinction between archival nodes and full nodes is architectural: a full (pruned) node validates new blocks and maintains the current state trie but discards historical state data beyond a configurable lookback window. This pruning reduces storage requirements by orders of magnitude but prevents historical state queries. Hybrid approaches such as partial archive nodes retain archival state only for a trailing window (e.g., the last 128 blocks on Ethereum), balancing storage costs against the most common historical query patterns.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
