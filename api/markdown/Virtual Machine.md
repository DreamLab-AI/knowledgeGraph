public:: true

# Virtual Machine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b82f3c99fcb792e20f0350a58b8527b84b90fd44d91bdfa1ec838c4eb92226e1",
  "@type": "Page",
  "vc:slug": "virtual-machine",
  "title": "Virtual Machine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cairo-vm",
      "vc:label": "CairoVM"
    },
    {
      "@id": "urn:visionflow:linked:evm",
      "vc:label": "EVM"
    },
    {
      "@id": "urn:visionflow:linked:move-vm",
      "vc:label": "MoveVM"
    },
    {
      "@id": "urn:visionflow:linked:solana-svm",
      "vc:label": "SolanaSVM"
    },
    {
      "@id": "urn:visionflow:linked:solidity",
      "vc:label": "Solidity"
    },
    {
      "@id": "urn:visionflow:linked:wasm",
      "vc:label": "WASM"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "SmartContract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-3042"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Machine"
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
  "@id": "urn:ngm:class:virtual-machine",
  "@type": "Class",
  "label": "Virtual Machine",
  "definition": "A sandboxed runtime environment that executes smart contract bytecode deterministically across distributed nodes, translating high-level contract code into low-level operations whilst metering computational resource consumption and enforcing state-transition rules. The Ethereum Virtual Machine is the canonical reference implementation, with alternatives including WebAssembly-based runtimes for improved performance.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:computing-infrastructure",
    "label": "Computing Infrastructure"
  },
  "quality": 0.65,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:blockchain-runtime",
      "label": "Blockchain Runtime"
    },
    {
      "@id": "urn:ngm:class:contract-execution-environment",
      "label": "Contract Execution Environment"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Programmable Blockchain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:bytecode",
        "label": "Bytecode"
      },
      {
        "@id": "urn:ngm:class:opcodes",
        "label": "Opcode"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gas-metering",
        "label": "Gas Metering"
      },
      {
        "@id": "urn:ngm:class:deterministic-execution",
        "label": "Deterministic Execution"
      },
      {
        "@id": "urn:ngm:class:sandboxed-execution",
        "label": "Sandboxed Execution"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:architecture",
        "label": "Stack-Based Architecture"
      },
      {
        "@id": "urn:ngm:class:state-transition-function",
        "label": "State Transition Function"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-node",
        "label": "Blockchain Node"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hypervisor",
        "label": "Hypervisor"
      },
      {
        "@id": "urn:ngm:class:container-runtime",
        "label": "Container Runtime"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-contract-execution",
        "label": "Smart Contract Execution"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:web-assembly",
        "label": "WebAssembly"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-machine:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b82f3c99fcb792e20f0350a58b8527b84b90fd44d91bdfa1ec838c4eb92226e1"
  },
  "vc:resolutions": [
    {
      "raw": "[[CairoVM|Cairo VM]]",
      "resolved": "urn:visionflow:linked:cairo-vm",
      "kind": "StubLink"
    },
    {
      "raw": "[[EVM|Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:evm",
      "kind": "StubLink"
    },
    {
      "raw": "[[MoveVM|Move VM]]",
      "resolved": "urn:visionflow:linked:move-vm",
      "kind": "StubLink"
    },
    {
      "raw": "[[SolanaSVM|Solana's Sealevel VM]]",
      "resolved": "urn:visionflow:linked:solana-svm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solidity|Solidity]]",
      "resolved": "urn:visionflow:linked:solidity",
      "kind": "StubLink"
    },
    {
      "raw": "[[WASM|WebAssembly]]",
      "resolved": "urn:visionflow:linked:wasm",
      "kind": "StubLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SmartContract|smart contracts]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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
  - A virtual machine in blockchain contexts is a runtime environment executing [[SmartContract|smart contracts]] deterministically, translating high-level contract code into low-level operations whilst enforcing resource limits and preventing unauthorised state modifications. The [[EVM|Ethereum Virtual Machine]] dominates as the reference implementation, executing [[Solidity|Solidity]] bytecode across thousands of nodes globally, with alternatives including [[WASM|WebAssembly]]-based [[SolanaSVM|Solana's Sealevel VM]], [[MoveVM|Move VM]], and [[CairoVM|Cairo VM]] providing specialised optimisations for specific use cases. Deterministic execution is paramount—identical contract invocations across decentralised networks must produce identical results, enabling consensus formation without relying on centralised authorities.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualMachine
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - Enables: [[Smart Contract]]
  - Uses: [[Blockchain]], [[Cryptography]]
  - Supports: [[Distributed System]]
  - Related To: [[Smart Contract Execution]]

- ### Content
  - Runtime environment executing [[SmartContract|smart contracts]] deterministically, translating high-level contract code into low-level operations whilst enforcing resource limits and preventing unauthorised state modifications. The [[EVM|Ethereum Virtual Machine]] dominates as the reference implementation executing [[Solidity|Solidity]] bytecode across thousands of nodes globally, with alternatives including [[WASM|WebAssembly]]-based [[SolanaSVM|Solana's Sealevel VM]], [[MoveVM|Move VM]], and [[CairoVM|Cairo VM]] providing specialised optimisations. Deterministic execution is paramount—identical contract invocations across decentralised networks must produce identical results, enabling consensus formation without relying on centralised authorities.
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
