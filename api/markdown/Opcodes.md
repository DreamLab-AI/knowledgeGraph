public:: true

# Opcodes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82b2bc35863a155800c1247a470dde790a3db0d3b9f57559892de0a12bd42ab0",
  "@type": "Page",
  "vc:slug": "opcodes",
  "title": "Opcodes",
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
      "vc:value": "BC-0024"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Opcodes"
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
  "@id": "urn:ngm:class:opcodes",
  "@type": "Class",
  "label": "Opcodes",
  "definition": "Opcodes (operation codes) are the atomic instruction primitives of a blockchain scripting language that define permissible computations within transaction scripts, smart contracts, or virtual machine execution environments. Each opcode specifies an operation — such as hash computation, signature verification, stack manipulation, or conditional branching — and the set of valid opcodes for a given blockchain determines its scripting expressiveness and security surface. In Bitcoin, a deliberately restricted opcode set enforces non-Turing-completeness and predictable resource consumption, whereas Ethereum's EVM opcode set supports general computation within gas-metered bounds.",
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
      {"@id": "urn:ngm:class:script", "label": "Script"},
      {"@id": "urn:ngm:class:scripting-language", "label": "Scripting Language"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"},
      {"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:smart-contract-execution", "label": "Smart Contract Execution"},
      {"@id": "urn:ngm:class:programmable-money", "label": "Programmable Money"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:opcodes:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:82b2bc35863a155800c1247a470dde790a3db0d3b9f57559892de0a12bd42ab0"
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
  Opcodes (operation codes) are the atomic instruction primitives of a blockchain scripting language that define permissible computations within transaction scripts, smart contracts, or virtual machine execution environments. Each opcode specifies an operation — such as hash computation, signature verification, stack manipulation, or conditional branching — and the set of valid opcodes for a given blockchain determines its scripting expressiveness and security surface. In Bitcoin, a deliberately restricted opcode set enforces non-Turing-completeness and predictable resource consumption, whereas Ethereum's EVM opcode set supports general computation within gas-metered bounds.

- ### Relationships
  - hasPart:: [[Script]], [[Scripting Language]]
  - partOf:: [[Blockchain Protocol]], [[Virtual Machine]]
  - requires:: [[Consensus Mechanism]], [[Blockchain Transaction]]
  - enables:: [[Smart Contract]], [[Smart Contract Execution]], [[Programmable Money]]
  - relatedTo:: [[Cryptography]], [[Blockchain Network]], [[Consensus Protocol]]

- ### Content
  Opcodes are the lowest-level building blocks of blockchain programmability, functioning as a bytecode instruction set that nodes execute when validating transactions. The Bitcoin scripting language includes opcodes for arithmetic, bitwise operations, stack manipulation (OP_DUP, OP_SWAP), cryptographic functions (OP_HASH160, OP_CHECKSIG), and flow control (OP_IF, OP_ELSE). Certain opcodes (notably OP_CAT and others) were disabled in Bitcoin after 2010 to reduce the attack surface; proposals such as Tapscript and various soft fork drafts seek to restore or extend the opcode set with stricter resource accounting.

  The Ethereum Virtual Machine defines a richer opcode set — over 140 instructions — covering arithmetic, memory access, storage reads/writes (SLOAD, SSTORE), contract invocation (CALL, DELEGATECALL), and environment queries (BLOCKHASH, CHAINID). Each EVM opcode has an associated gas cost that reflects its computational and storage demands, enabling the network to bound execution time and prevent denial-of-service through resource exhaustion. The gas metering model makes EVM opcodes cost-visible in a way that Bitcoin script opcodes are not, supporting general-purpose smart contract development.

  Opcode design is a critical security concern: ambiguous or underspecified opcode semantics create exploitable edge cases, as demonstrated by the 2016 Ethereum DAO re-entrancy vulnerability facilitated partly by DELEGATECALL's inherited storage context. Formal verification tools model opcode semantics as transition functions over an abstract machine state, enabling mechanised proofs of contract correctness.

  Blockchain protocol upgrades frequently involve adding, removing, or repricing opcodes. Soft forks (backward-compatible changes) can introduce new opcodes by repurposing previously disabled ones (NOP opcodes in Bitcoin), while hard forks may extend the opcode namespace without backward compatibility constraints.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
