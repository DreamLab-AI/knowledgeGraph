public:: true

# EVM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:evm",
  "@type": "Page",
  "vc:slug": "evm",
  "title": "EVM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:evm",
  "@type": "Class",
  "label": "EVM",
  "definition": "The Ethereum Virtual Machine (EVM) is a stack-based, sandboxed, quasi-Turing-complete virtual machine that executes smart contract bytecode on the Ethereum network and EVM-compatible blockchains. It defines a deterministic computation environment in which all nodes independently execute the same transactions to reach identical state transitions, using a gas metering system to bound computation and prevent denial-of-service attacks. The EVM specification encompasses opcodes, memory model, call semantics, and the gas cost schedule that governs the economic cost of each computational step.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:smart-contract-execution", "label": "Smart Contract Execution"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:smart-contract-platform", "label": "Smart Contract Platform"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:opcodes", "label": "Opcodes"},
      {"@id": "urn:ngm:class:solidity", "label": "Solidity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gas-optimization", "label": "Gas Optimization"},
      {"@id": "urn:ngm:class:enterprise-ethereum-alliance", "label": "Enterprise Ethereum Alliance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The EVM is a stack-based deterministic execution environment that runs [[Smart Contract]] bytecode on Ethereum and compatible chains, metering computation via gas to enforce bounded resource usage, with [[Solidity]] as its primary source-language target.

- ### Relationships
  - The EVM is the runtime that makes [[Smart Contract Execution]] possible, providing the sandboxed determinism that all Ethereum nodes must agree upon. It operates on [[Opcodes]]—a defined instruction set covering arithmetic, cryptographic hashing, storage access, and inter-contract calls—and accepts bytecode compiled from [[Solidity]] and other high-level languages (Vyper, Yul). It defines the [[Smart Contract Platform]] that underpins DeFi, NFTs, and decentralised governance. [[Gas Optimization]] is the practice of writing contracts that consume fewer EVM operations, reducing transaction fees. The [[Enterprise Ethereum Alliance]] maintains the EVM specification as an open standard, enabling the ecosystem of EVM-compatible chains.

- ### Content
  - The EVM was designed by Gavin Wood and described in the Ethereum Yellow Paper (2014) as a novel programmable blockchain execution layer. Unlike Bitcoin's limited script language, the EVM was intentionally designed to be quasi-Turing-complete—capable of expressing arbitrary computation while bounded by gas to prevent infinite loops. The stack-based architecture (32-byte word size, 1024-depth stack) was chosen for simplicity of implementation across diverse node platforms. Ethereum mainnet launched in 2015 with the EVM as its core execution component.

  - The EVM's execution model is a state machine: each transaction invokes a contract at a specific entry point, consuming gas for each opcode executed. Memory is a byte-addressable linear space expanded on demand (with quadratic cost growth to discourage large allocations). Storage is a persistent key-value mapping (256-bit to 256-bit) on the world state trie. Calls between contracts can pass value (ETH), data, and gas; the call depth is limited to 1024 to prevent stack overflow attacks. The SELFDESTRUCT and CREATE2 opcodes have been progressively restricted as attack vectors were discovered and network design evolved.

  - The EVM's significance extends far beyond Ethereum itself: it has become an industry standard execution environment adopted by Binance Smart Chain, Polygon, Avalanche, Arbitrum, Optimism, and hundreds of other networks, creating a massive ecosystem of compatible tooling, libraries, and developer expertise. This cross-chain compatibility enables smart contracts to be deployed across multiple EVM-compatible networks with minimal modification, driving the multi-chain DeFi and NFT ecosystem.

  - By 2024–2025 the EVM continues to evolve through Ethereum Improvement Proposals (EIPs): the EOF (EVM Object Format) upgrade restructures bytecode to separate code and data, enabling better static analysis and native function calls without dynamic jumps. Verkle trees are replacing Merkle Patricia tries in the state structure to reduce witness sizes for statelessness. Layer 2 rollups (Optimistic and ZK-rollups) execute EVM computation off-chain and post proofs or compressed state diffs to Ethereum, scaling throughput while inheriting EVM compatibility and Ethereum's security guarantees.