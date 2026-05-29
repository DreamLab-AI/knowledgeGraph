public:: true

# Output
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0661aa1ca7a812bbae34928750c041be9ec9865f7b74af95c61ecf77ca0e284",
  "@type": "Page",
  "vc:slug": "output",
  "title": "Output",
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
      "vc:value": "BC-0022"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Output"
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
  "@id": "urn:ngm:class:output",
  "@type": "Class",
  "label": "Output",
  "definition": "An Output is a component of a blockchain transaction that specifies a recipient address and an amount of value to be transferred, forming the fundamental unit through which cryptocurrency is allocated and ownership is recorded on a distributed ledger. In UTXO-based systems such as Bitcoin, unspent outputs serve as inputs to subsequent transactions, creating a directed graph of value flows secured by digital signatures.",
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
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:block", "label": "Block"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:address", "label": "Address"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:script", "label": "Script"},
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:output:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b0661aa1ca7a812bbae34928750c041be9ec9865f7b74af95c61ecf77ca0e284"
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
  An Output is a component of a blockchain transaction that specifies a recipient address and amount of value to be transferred, forming the fundamental unit through which cryptocurrency is allocated and ownership is recorded on a distributed ledger. In UTXO-based systems such as Bitcoin, unspent outputs serve as inputs to subsequent transactions, creating a directed graph of value flows secured by digital signatures.

- ### Relationships
  - partOf:: [[Blockchain Transaction]], [[Block]]
  - requires:: [[Address]], [[Digital Signature]]
  - uses:: [[Script]], [[Cryptographic Hash]]
  - enables:: [[Smart Contract]], [[Token Economics]]
  - relatedTo:: [[Blockchain Scalability]], [[Distributed Ledger Technology]], [[Audit Trail]]

- ### Content
  In UTXO-based blockchains, every transaction consumes one or more existing unspent transaction outputs (UTXOs) as inputs and produces one or more new outputs. Each output encodes a locking script (scriptPubKey in Bitcoin) that specifies the conditions under which the output can be spent—typically requiring a valid digital signature corresponding to the recipient address. The UTXO model's explicit accounting of unspent outputs enables efficient parallel validation and clear ownership semantics without requiring global state.

  Outputs are fundamental to the security model of distributed ledgers. The cryptographic binding between an output's locking script and the corresponding unlocking script presented in a spending transaction ensures that only the authorised holder of private key material can claim the value. This design eliminates double-spending without a central authority by making the entire UTXO set the canonical ownership ledger, verifiable by every full node.

  In account-model blockchains such as Ethereum, the output concept generalises to state transitions: a transaction specifies a recipient address and value, updating account balances in the world state. Smart contracts extend this further by allowing outputs to trigger arbitrary code execution, enabling programmable value transfer. The output therefore bridges simple cryptocurrency transfer and complex DeFi logic, making it a foundational primitive across blockchain architectures.

  Scalability considerations around outputs include UTXO set growth (each unspent output consumes node storage), output consolidation strategies, and the trade-offs between output granularity and transaction fee efficiency. Layer-2 protocols such as Lightning Network aggregate many off-chain value transfers into a single on-chain settlement output, dramatically increasing effective throughput while preserving the security guarantees of the base layer.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
