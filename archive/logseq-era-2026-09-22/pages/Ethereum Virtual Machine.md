public:: true

# Ethereum Virtual Machine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91cf97b859c05a1a1522e6cdaa051f0564bf8b26581f2bbf1b95a0604f2e4480",
  "@type": "Page",
  "vc:slug": "ethereum-virtual-machine",
  "title": "Ethereum Virtual Machine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    },
    {
      "@id": "urn:visionflow:linked:ethereum-smart-contracts",
      "vc:label": "Ethereum Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:gas",
      "vc:label": "Gas"
    },
    {
      "@id": "urn:visionflow:linked:virtual-machine",
      "vc:label": "Virtual Machine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Virtual Machine"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
  "@type": "Class",
  "label": "Ethereum Virtual Machine",
  "definition": "The Ethereum Virtual Machine (EVM) is a deterministic, quasi-Turing-complete, stack-based virtual machine that serves as the sandboxed runtime environment for executing compiled smart contract bytecode on the Ethereum blockchain. Every full node in the network independently executes the same sequence of EVM opcodes and must converge to an identical post-execution world state, enforcing global consensus over account balances, contract storage, and transaction receipts. Execution is metered by a resource-accounting unit called Gas, which prevents denial-of-service attacks and prices computational work proportionally to its cost. The EVM's instruction set and state transition function have become a de-facto industry standard, with dozens of EVM-compatible chains and Layer 2 networks implementing the same specification to enable cross-chain portability of smart contracts.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:virtual-machine",
      "label": "Virtual Machine"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:evm-stack",
        "label": "EVM Stack"
      },
      {
        "@id": "urn:ngm:class:evm-memory",
        "label": "EVM Memory"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      },
      {
        "@id": "urn:ngm:class:ethereum-account",
        "label": "Ethereum Account"
      },
      {
        "@id": "urn:ngm:class:merkle-patricia-trie",
        "label": "Merkle Patricia Trie"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-smart-contracts",
        "label": "Ethereum Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:ethereum-yellow-paper",
        "label": "Ethereum Yellow Paper"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:keccak-256",
        "label": "Keccak-256"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum-consensus",
        "label": "Ethereum Consensus"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:web-assembly",
        "label": "WebAssembly"
      },
      {
        "@id": "urn:ngm:class:move-virtual-machine",
        "label": "Move Virtual Machine"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:evm-compatible-blockchain",
        "label": "EVM-Compatible Chain"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:evm",
      "label": "EVM"
    }
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-virtual-machine:875442a21c00",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:91cf97b859c05a1a1522e6cdaa051f0564bf8b26581f2bbf1b95a0604f2e4480"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:smart-contract-platform",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contracts]]",
      "resolved": "urn:visionflow:linked:ethereum-smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gas]]",
      "resolved": "urn:visionflow:linked:gas",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Machine]]",
      "resolved": "urn:visionflow:linked:virtual-machine",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The Ethereum Virtual Machine (EVM) is a deterministic, quasi-Turing-complete, stack-based [[Virtual Machine]] that serves as the sandboxed runtime environment for executing compiled [[Ethereum Smart Contracts]] bytecode. Every full node independently executes the same EVM opcodes and must converge to an identical post-execution [[World State]], enforcing consensus over account balances and contract storage. Execution is metered by [[Gas]], preventing denial-of-service and pricing computation proportionally. The EVM's instruction set has become an industry-wide standard, underpinning [[EVM-Compatible Chain]]s, [[Layer 2 Scaling]] networks, and the broader [[Smart Contract Platform]] ecosystem.

- ### Overview
  - The EVM was introduced with the Ethereum mainnet genesis block in July 2015 and specified formally in the [[Ethereum Yellow Paper]] by Gavin Wood.
  - Its central purpose is to allow untrusted, arbitrary code to execute in a fully reproducible and verifiable manner across a decentralised peer-to-peer network without any trusted intermediary.
  - The machine is described as "quasi-Turing-complete" because, although it can express any computation, the [[Gas]] limit on each transaction bounds total execution steps, guaranteeing termination.
  - Before the Merge (September 2022), the EVM ran atop a [[Proof of Work]] consensus layer; it now operates atop [[Proof of Stake]] via the Beacon Chain, but the execution environment itself remained unchanged.
  - The EVM defines a single global state transition function: given a pre-state and a signed transaction, it produces a deterministic post-state that all honest nodes must accept.

- ### Key Components
  - #### Stack
    - The EVM uses a last-in-first-out word stack with a maximum depth of 1,024 items.
    - Each item is a 256-bit (32-byte) word, matching the [[Keccak-256]] hash size and Ethereum's native integer width.
    - All arithmetic, logical, and comparison opcodes consume and produce stack items.
  - #### Memory
    - Byte-addressable, volatile memory that is zeroed at the start of each call frame.
    - Expanded on demand in 32-byte chunks; expansion cost (in [[Gas]]) grows quadratically with size to discourage unbounded use.
  - #### Storage
    - Persistent key-value store (256-bit → 256-bit mappings) associated with each [[Ethereum Account]] (contract address).
    - Reads and writes are among the most expensive EVM operations; storage layout is managed by compilers such as [[Solidity]] and Vyper.
  - #### Program Counter
    - A pointer into the deployed [[Ethereum Bytecode]] that advances through opcodes; altered by JUMP and JUMPI instructions (conditional jumps).
  - #### Gas Counter
    - Tracks remaining gas for the current execution context; depletes with each opcode; triggers an out-of-gas exception (reverting state changes) when exhausted.
  - #### Call Depth
    - Supports nested calls (CALL, DELEGATECALL, STATICCALL) up to a depth of 1,024 frames, enabling composable contract interaction.
  - #### EVM Opcodes
    - Around 140 distinct opcodes cover arithmetic (ADD, MUL, DIV), bitwise ops, SHA3 hashing, environmental queries (CALLER, TIMESTAMP), control flow, memory/storage access, and system-level operations (CALL, CREATE, SELFDESTRUCT).
    - The opcode set is extended through hard forks (e.g. EIP-1559 introduced fee-market changes; EIP-3855 added PUSH0).
  - #### World State
    - A [[Merkle Patricia Trie]] mapping account addresses to account objects (nonce, balance, code hash, storage root).
    - After each transaction the trie root is updated, with the new state root committed into the block header.

- ### Execution Model
  - When a transaction targets a contract address, the EVM initialises a new execution context: it loads the contract's bytecode, zeroes memory, copies calldata, and sets gas to the supplied limit minus intrinsic cost.
  - Opcodes are fetched and dispatched one at a time in a tight interpreter loop (all major clients also implement JIT/AOT compilation for performance).
  - Precompiled contracts (addresses 0x01–0x0a on mainnet) implement computationally expensive operations — elliptic curve arithmetic, [[Keccak-256]], SHA-256 — in native host code callable from the EVM at fixed gas costs.
  - A call may succeed (RETURN/STOP), revert (REVERT — returns data, rolls back state changes but consumes gas up to the revert point), or abort (invalid opcode, stack overflow, out-of-gas).
  - Contract creation uses the CREATE or CREATE2 opcodes; the initialisation bytecode runs in the EVM and its RETURN value becomes the deployed runtime bytecode.

- ### Applications / Use Cases
  - #### Decentralised Finance (DeFi)
    - Automated market makers ([[Decentralised Finance]] protocols such as Uniswap and Curve), lending platforms (Aave, Compound), and derivatives protocols all execute on the EVM, managing billions in on-chain value.
  - #### Non-Fungible Tokens
    - ERC-721 and ERC-1155 standards for [[Non-Fungible Token]]s are implemented as EVM smart contracts, enabling digital ownership of art, collectibles, and in-game assets.
  - #### Decentralised Autonomous Organisations
    - DAO governance contracts, voting mechanisms, and treasury management are EVM programs that encode organisational rules on-chain.
  - #### Stablecoins
    - Algorithmic and collateral-backed stablecoins (DAI, USDC issued via Circle's contracts) rely on EVM execution for minting, burning, and stability mechanisms.
  - #### Layer 2 Networks
    - Optimistic rollups (Optimism, Arbitrum) and ZK-rollups (zkSync Era, Polygon zkEVM) execute transactions using EVM-compatible environments and post compressed proofs or fraud proofs to Ethereum mainnet, inheriting its security while scaling throughput.
  - #### Cross-Chain Bridges
    - Bridge contracts run on the EVM to lock assets on one chain and signal minting on another, connecting Ethereum to alternative ecosystems.
  - #### Formal Verification
    - The well-specified EVM semantics (K-EVM, EVM-Dafny) enable [[Formal Verification]] of contract correctness, a niche but growing application domain.

- ### EVM-Compatible Ecosystems
  - A large number of independent chains implement the EVM specification to attract Ethereum developers and tooling:
    - **Polygon PoS** — a commit-chain with native bridging to Ethereum mainnet.
    - **BNB Smart Chain** — a high-throughput EVM chain operated by Binance.
    - **Avalanche C-Chain** — the contract chain within the Avalanche multi-chain platform.
    - **Fantom** — a DAG-based network with an EVM execution layer.
    - **Gnosis Chain** — community-operated EVM chain focused on stability and low fees.
  - This broad adoption validates the EVM's role as a de-facto [[Smart Contract Platform]] standard and creates a shared toolchain ecosystem (Hardhat, Foundry, Remix, Etherscan).

- ### Gas Mechanism
  - [[Gas]] is the unit of computational work in the EVM; each opcode has a fixed or dynamic gas cost specified in the Ethereum Yellow Paper and updated via EIPs.
  - Users set a gas limit (maximum gas they will spend) and, post EIP-1559, a base fee plus priority tip. The base fee is burned; the tip goes to the block proposer.
  - Gas costs were significantly restructured in EIP-2929 (Berlin hard fork) to better reflect actual I/O costs for cold storage access.
  - This metering mechanism separates the cost of execution from ETH price and provides a spam-resistance layer analogous to postage on communications.

- ### Security Considerations
  - Common EVM vulnerability classes: reentrancy attacks (the DAO hack, 2016), integer overflow/underflow (mitigated by Solidity 0.8+ checked arithmetic), delegatecall injection, front-running, and gas griefing.
  - The isolated execution model (sandboxed memory, no filesystem access, no network access) is a foundational security property.
  - [[Formal Verification]] tooling (Certora Prover, Echidna fuzzer, Mythril) targets EVM bytecode directly, independent of the source language.
  - Static analysis and bytecode decompilation tools (Panoramix, Heimdall) help audit deployed contracts whose source is unavailable.

- ### Evolution and Hard Forks
  - The EVM instruction set evolves via Ethereum Improvement Proposals (EIPs) activated at hard forks. Notable changes:
    - **Byzantium (2017)**: added REVERT, RETURNDATASIZE/COPY, and precompiles for pairing checks (enabling [[Zero-Knowledge Proof]] verification on-chain).
    - **Constantinople (2019)**: added EXTCODEHASH and cheaper bitshift opcodes.
    - **Istanbul (2019)**: EIP-1108 reduced gas for alt-BN128 precompiles; EIP-152 added Blake2F precompile.
    - **Berlin (2021)**: EIP-2929 increased cold SLOAD/CALL costs; EIP-2930 introduced access lists.
    - **London (2021)**: EIP-1559 fee market reform; EIP-3198 added BASEFEE opcode.
    - **Shanghai/Capella (2023)**: EIP-3855 added PUSH0; EIP-4895 enabled staking withdrawals.
    - **Cancun/Deneb (2024)**: EIP-4844 (proto-danksharding) added BLOBHASH opcode for blob transaction support, dramatically reducing [[Layer 2 Scaling]] costs.

- ### Relationships
  - subClassOf:: [[Virtual Machine]]
  - hasPart:: [[EVM Stack]]
  - hasPart:: [[EVM Memory]]
  - hasPart:: [[World State]]
  - requires:: [[Gas]]
  - requires:: [[Ethereum Account]]
  - requires:: [[Merkle Patricia Trie]]
  - enables:: [[Ethereum Smart Contracts]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Non-Fungible Token]]
  - enables:: [[Decentralised Application]]
  - implements:: [[Smart Contract Platform]]
  - implements:: [[Ethereum Yellow Paper]]
  - uses:: [[Solidity]]
  - uses:: [[Ethereum Bytecode]]
  - uses:: [[Keccak-256]]
  - dependsOn:: [[Ethereum Consensus]]
  - dependsOn:: [[Proof of Stake]]
  - contrastsWith:: [[WebAssembly]]
  - contrastsWith:: [[Move Virtual Machine]]
  - contrastsWith:: [[Solana Sealevel]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Formal Verification]]
  - relatedTo:: [[Layer 2 Scaling]]
  - relatedTo:: [[EVM-Compatible Chain]]

- ### Standards & Context
  - The canonical specification is the **Ethereum Yellow Paper** (Gavin Wood, 2014–present), a formal mathematical document defining the EVM state transition function.
  - The **Ethereum Execution Specification** (EELS) is a Python reference implementation maintained by the Ethereum Foundation and used for client testing.
  - **EIP (Ethereum Improvement Proposal)** is the standards process for all EVM changes; core EIPs go through CFI (Considered for Inclusion) and CFI-accepted states before hard fork activation.
  - Major client implementations of the EVM: go-ethereum (Geth) in Go, Nethermind in C#, Besu in Java, Erigon in Go, Reth in Rust.
  - The **EVM Object Format (EOF)** (a suite of EIPs including EIP-3540, EIP-3670) proposes structured bytecode containers with validated code sections, improving static analysis and future upgrade paths.
  - **Ethereum Enterprise Alliance (EEA)** publishes interoperability specifications for permissioned EVM networks used in enterprise blockchain deployments.

- ### Provenance
  - sources:: Ethereum Yellow Paper (Gavin Wood); ethereum.org EVM documentation; EIP repository (eips.ethereum.org); Ethereum Execution Specifications (EELS)
  - updated:: 2026-06-13
