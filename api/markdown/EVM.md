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
  "definition": "The Ethereum Virtual Machine (EVM) is a stack-based, sandboxed, quasi-Turing-complete virtual machine that executes smart contract bytecode on the Ethereum network and EVM-compatible blockchains. It defines a deterministic computation environment in which all nodes independently execute the same transactions to reach identical state transitions, using a gas metering system to bound computation and prevent denial-of-service attacks. The EVM specification encompasses opcodes, memory model, call semantics, and the gas cost schedule governing the economic cost of each computational step. As an open industry standard maintained by the Enterprise Ethereum Alliance, the EVM has been adopted by hundreds of alternative blockchain networks, establishing it as the dominant cross-chain execution environment.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:virtual-machine",
      "label": "Virtual Machine"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
      "label": "Ethereum Virtual Machine"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract-execution",
        "label": "Smart Contract Execution"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:opcodes",
        "label": "Opcodes"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:bytecode",
        "label": "Bytecode"
      },
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      },
      {
        "@id": "urn:ngm:class:merkle-patricia-trie",
        "label": "Merkle Patricia Trie"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-node",
        "label": "Ethereum Node"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:evm-stack",
        "label": "EVM Stack"
      },
      {
        "@id": "urn:ngm:class:evm-memory",
        "label": "EVM Memory"
      },
      {
        "@id": "urn:ngm:class:gas-metering",
        "label": "Gas Metering"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ethereum-yellow-paper",
        "label": "Ethereum Yellow Paper"
      },
      {
        "@id": "urn:ngm:class:eip",
        "label": "EIP"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Layer 2 Rollup"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:enterprise-ethereum-alliance",
        "label": "Enterprise Ethereum Alliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gas-optimization",
        "label": "Gas Optimization"
      },
      {
        "@id": "urn:ngm:class:vyper",
        "label": "Vyper"
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
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The Ethereum Virtual Machine (EVM) is a stack-based, sandboxed, quasi-[[Turing Complete|Turing-complete]] [[Virtual Machine]] that serves as the deterministic execution environment for [[Smart Contract]] bytecode on [[Ethereum]] and EVM-compatible [[Blockchain]] networks. All nodes in the network independently execute the same [[Bytecode]] instructions to produce identical state transitions, enforcing consensus through computational determinism. The [[Gas]] metering system bounds every computation, ensuring that programs cannot loop infinitely and that resource usage carries an economic cost, preventing denial-of-service attacks. Maintained as an open standard by the [[Enterprise Ethereum Alliance]], the EVM has become the dominant cross-chain execution runtime, adopted across hundreds of alternative networks.

- ### Overview
  - The EVM was conceptualised by Gavin Wood and formalised in the Ethereum Yellow Paper (2014) as a programmable execution layer for [[Blockchain]] state transitions. Unlike [[Bitcoin Script]], which is intentionally limited and non-Turing-complete, the EVM was designed to express arbitrary computation while remaining safe through [[Gas Metering]].
  - The EVM is central to the entire [[Decentralised Finance]] and [[NFT]] ecosystem. Any computation that changes Ethereum state—from token transfers to complex multi-protocol interactions—runs inside the EVM.
  - Every Ethereum [[Full Node]] maintains a copy of the EVM and replays every transaction to independently verify the canonical chain state. This independent re-execution is what makes [[Decentralised Trust]] possible without a central authority.
  - The EVM's design influenced or was directly adopted by dozens of alternative Layer 1 networks (Binance Smart Chain, Avalanche, Fantom, Celo) and all major [[Layer 2 Rollup]] solutions (Arbitrum, Optimism, Polygon), creating the "EVM-compatible" standard that enables smart contracts to be ported across networks with minimal changes.

- ### Key Components
  - **Stack**
    - 32-byte (256-bit) word size; maximum depth of 1,024 items.
    - All arithmetic, comparison, and logic [[Opcodes]] operate on stack items.
    - Chosen for simplicity of cross-platform implementation.
  - **Memory**
    - Byte-addressable, linear, and ephemeral (cleared at the end of each call).
    - Expands in 32-byte word increments; gas cost grows quadratically with size to discourage large allocations.
    - Used for intermediate computation and call data encoding.
  - **Storage**
    - Persistent key-value mapping from 256-bit keys to 256-bit values.
    - Stored in the [[Merkle Patricia Trie]] world state; the most expensive EVM resource (SSTORE opcode).
    - Persists across transactions and blocks; forms the on-chain state of a [[Smart Contract]].
  - **Calldata**
    - Read-only input data passed to a contract invocation; cheap to include but cannot be written.
    - [[Solidity ABI]] encoding dictates how function selectors and arguments are packed into calldata.
  - **Program Counter**
    - Tracks the current opcode position in the deployed [[Bytecode]].
    - JUMP and JUMPI opcodes redirect execution; restricted to valid JUMPDEST positions only to prevent arbitrary control-flow hijacking.
  - **Gas Counter**
    - Decremented with each opcode executed; if it reaches zero, an out-of-gas exception is thrown, all state changes in the current call are reverted, and the consumed gas is forfeited.
    - The [[Gas]] mechanism aligns miner/validator incentives with execution cost, creating an economic layer around computation.
  - **Return Data Buffer**
    - Holds the return value of the most recent sub-call; accessible via RETURNDATACOPY.
    - Critical for composability—contracts read other contracts' return values through this buffer.

- ### Opcode Set
  - The EVM defines approximately 150 opcodes covering: arithmetic (ADD, MUL, DIV, MOD, EXP), comparison (LT, GT, EQ, ISZERO), bitwise logic (AND, OR, XOR, NOT, SHL, SHR), cryptographic hashing (SHA3/KECCAK256), environment queries (ADDRESS, CALLER, CALLVALUE, BLOCKHASH, TIMESTAMP), stack manipulation (PUSH1–PUSH32, DUP1–DUP16, SWAP1–SWAP16), memory ops (MLOAD, MSTORE, MSTORE8), storage ops (SLOAD, SSTORE), control flow (JUMP, JUMPI, JUMPDEST, PC, STOP, RETURN, REVERT, INVALID), and inter-contract calls (CALL, STATICCALL, DELEGATECALL, CREATE, CREATE2).
  - [[Opcodes]] are specified in the [[Ethereum Yellow Paper]] and updated through the [[EIP]] process; gas costs have been adjusted multiple times (e.g., EIP-150, EIP-2929) as real-world attack patterns emerged.
  - SELFDESTRUCT has been progressively restricted; post-EIP-6780 it can only self-destruct in the same transaction that created the contract, neutralising historical griefing attacks.

- ### Source Languages and Compilation
  - [[Solidity]] is the dominant high-level language; compiled by `solc` to EVM [[Bytecode]] and an ABI descriptor.
  - [[Vyper]] is a Pythonic alternative prioritising auditability and security over expressiveness; used by Curve Finance and other security-critical protocols.
  - Yul is an intermediate representation language used as a compilation target by Solidity's optimiser and for writing hand-optimised assembly-adjacent code.
  - Fe (Iron) is a Rust-inspired EVM language emerging as a third option.
  - All source languages ultimately compile to the same EVM bytecode ISA, enabling tooling interoperability.

- ### Gas and Economic Model
  - Every opcode has a fixed or dynamic gas cost set by the [[Ethereum Yellow Paper]] and amended by [[EIP]]s. Arithmetic is cheap (3 gas for ADD); storage writes are expensive (20,000 gas for a cold SSTORE).
  - [[Gas Optimization]] is the discipline of writing [[Smart Contract]] code that minimises opcode and storage costs. Techniques include packing storage slots, using calldata over memory, using immutables, and loop unrolling.
  - EIP-1559 introduced a base fee (burned) plus a priority tip, making gas pricing more predictable while reducing miner extractable value from pure fee auctions.
  - Layer 2 rollups dramatically reduce effective gas costs by batching many EVM executions off-chain and posting only compressed state diffs or proofs to Ethereum mainnet.

- ### EVM-Compatible Networks
  - The EVM specification has been adopted verbatim or with minor extensions by numerous alternative networks, creating the "EVM-compatible" label.
  - Major examples: Binance Smart Chain (BSC), Polygon PoS, Avalanche C-Chain, Fantom, Celo, Gnosis Chain, Moonbeam, and all major [[Layer 2 Rollup]] networks.
  - [[Optimistic Rollup]] networks (Arbitrum, Optimism) execute EVM bytecode off-chain identically to mainnet and post transaction data to Ethereum; disputes are resolved via on-chain fraud proofs.
  - [[ZK-Rollup]] networks (zkSync Era, Polygon zkEVM, Scroll, Linea) generate cryptographic validity proofs that an EVM computation was executed correctly, using [[Zero-Knowledge Proof]] technology to compress verification.
  - This cross-chain compatibility is economically significant: existing [[Solidity]] codebases, testing frameworks (Hardhat, Foundry), auditing tools, and developer expertise transfer across networks.

- ### Evolution and Upgrades
  - The EVM evolves through the [[EIP]] (Ethereum Improvement Proposal) governance process. Hard forks bundle batches of EIPs into protocol upgrades.
  - Key historical upgrades: Homestead (2016) — initial opcode cost corrections; Tangerine Whistle / Spurious Dragon (2016) — gas repricing after the DoS attacks; Istanbul (2019) — further repricing and new precompiles; Berlin / London (2021) — EIP-2929 cold/warm storage distinction + EIP-1559; Shanghai (2023) — withdrawal opcodes; Cancun (2024) — EIP-4844 blob data for [[Layer 2 Rollup]] cost reduction.
  - EVM Object Format (EOF) is a proposed restructuring of the bytecode container format, separating code and data sections and eliminating dynamic jumps in favour of static function calls. EOF would enable better static analysis, dead code elimination, and versioned future extensions.
  - Verkle Trees are replacing [[Merkle Patricia Trie]] structures to reduce witness sizes, enabling stateless clients that do not need to store the full state to validate blocks.

- ### Applications and Use Cases
  - **[[Decentralised Finance]] (DeFi)** — Automated Market Makers (Uniswap, Curve), lending protocols (Aave, Compound), derivatives (dYdX), stablecoins (MakerDAO, Frax) are all EVM [[Smart Contract]] deployments.
  - **[[NFT]] Ecosystems** — ERC-721 and ERC-1155 token standards implemented as EVM contracts power digital art markets, gaming assets, and identity tokens.
  - **DAOs and Governance** — Decentralised autonomous organisations use EVM contracts to codify voting, treasury management, and protocol parameter changes.
  - **Cross-Chain Bridges** — Many bridge protocols deploy locking/minting contracts on multiple EVM networks, enabling token transfers; EVM compatibility reduces the integration surface.
  - **Tokenisation of Real-World Assets** — Financial institutions exploring on-chain bond issuance, trade finance, and securities settlement use EVM networks due to mature tooling and regulatory familiarity.
  - **Enterprise Blockchain** — The [[Enterprise Ethereum Alliance]] certification enables private EVM networks (Hyperledger Besu, Quorum) for consortium use in finance, supply chain, and identity.
  - **[[Formal Verification]]** — Tools such as the K Framework and Certora Prover model the EVM semantics to formally verify smart contract correctness, a growing practice in high-value DeFi protocols.

- ### Relationships
  - enables:: [[Smart Contract Execution]]
  - enables:: [[Smart Contract]]
  - enables:: [[Smart Contract Platform]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[NFT]]
  - uses:: [[Opcodes]]
  - uses:: [[Solidity]]
  - uses:: [[Bytecode]]
  - uses:: [[Gas]]
  - uses:: [[Merkle Patricia Trie]]
  - requires:: [[Ethereum Node]]
  - requires:: [[Consensus Mechanism]]
  - hasPart:: [[Gas Metering]]
  - implements:: [[Ethereum Yellow Paper]]
  - implements:: [[EIP]]
  - supports:: [[Layer 2 Rollup]]
  - supports:: [[ZK-Rollup]]
  - supports:: [[Optimistic Rollup]]
  - standardizedBy:: [[Enterprise Ethereum Alliance]]
  - contrastsWith:: [[WASM]]
  - contrastsWith:: [[Bitcoin Script]]
  - contrastsWith:: [[Move VM]]
  - relatedTo:: [[Gas Optimization]]
  - relatedTo:: [[Vyper]]
  - relatedTo:: [[EVM Object Format]]
  - relatedTo:: [[Solidity ABI]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Formal Verification]]

- ### Standards & Context
  - The canonical specification is the **Ethereum Yellow Paper** (Gavin Wood, 2014; continuously updated), which formally defines the EVM state transition function, opcode semantics, and gas schedule.
  - The **[[Enterprise Ethereum Alliance]]** (EEA) publishes the EVM-compatible client specification, enabling certified interoperability between public Ethereum, L2 networks, and private consortium deployments.
  - **[[EIP]]s** (Ethereum Improvement Proposals) are the governance mechanism for evolving the EVM. Core EIPs are reviewed by Ethereum core developers and implemented through hard forks agreed by the validator community.
  - The EVM ISA (instruction set architecture) has informal equivalence to a register machine despite its stack-based presentation; this enables [[Formal Verification]] tooling to represent it in mathematical logics (K Framework, Isabelle/HOL).
  - **ERC standards** (EIP sub-category for application-layer standards) such as ERC-20 (fungible tokens), ERC-721 (NFTs), ERC-1155 (multi-tokens), and ERC-4626 (vaults) are not EVM-level features but define standardised [[Smart Contract]] interfaces compiled to EVM bytecode.

- ### Provenance
  - sources:: Ethereum Yellow Paper (Gavin Wood, 2014); EIP repository (github.com/ethereum/EIPs); Enterprise Ethereum Alliance specification; Ethereum documentation (ethereum.org)
  - updated:: 2026-06-13
