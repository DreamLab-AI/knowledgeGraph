public:: true

# Solidity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:solidity",
  "@type": "Page",
  "vc:slug": "solidity",
  "title": "Solidity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:solidity",
  "@type": "Class",
  "label": "Solidity",
  "definition": "Solidity is a statically-typed, curly-brace programming language designed specifically for writing smart contracts that execute on the Ethereum Virtual Machine (EVM) and compatible blockchain platforms. Developed by the Ethereum Foundation and released in 2014, it compiles to EVM bytecode and features contract-oriented constructs including inheritance, interfaces, libraries, events, modifiers, and custom error types. Solidity is the dominant language for decentralised finance (DeFi), non-fungible tokens (NFTs), and decentralised autonomous organisations (DAOs), though its complexity and historical vulnerability surface have prompted development of alternative contract languages.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:ethereum", "label": "Ethereum"},
      {"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"},
      {"@id": "urn:ngm:class:formal-verification", "label": "Formal Verification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:token", "label": "Token"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:gas", "label": "Gas"},
      {"@id": "urn:ngm:class:erc-20", "label": "ERC-20"},
      {"@id": "urn:ngm:class:erc-721", "label": "ERC-721"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:vulnerability", "label": "Vulnerability"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Solidity is the primary high-level language for writing [[Smart Contract]]s on [[Ethereum]] and EVM-compatible blockchains, compiling to bytecode that executes in the deterministic, sandboxed environment of the [[Virtual Machine]].

- ### Relationships
  - Solidity is a subclass of [[Programming Language]] and is the foundational tool for creating [[Smart Contract]]s on [[Ethereum]] and chains that share the EVM instruction set (Polygon, BNB Chain, Avalanche C-Chain, etc.). It enables the construction of [[Decentralised Finance]] protocols, [[DAO]] governance systems, [[NFT]] collections, and fungible [[Token]] standards including [[ERC-20]] and [[ERC-721]]. The [[Gas]] metering system of the EVM directly shapes Solidity programming patterns, incentivising storage minimisation and loop avoidance. Historical [[Vulnerability]] classes (reentrancy, integer overflow, unchecked external calls) drove both language evolution and the adoption of [[Formal Verification]] tooling.

- ### Content
  - Solidity was conceived in 2014 by Gavin Wood, Christian Reitwiessner, and others at the Ethereum project as a language whose syntax would feel familiar to JavaScript and C++ developers while mapping cleanly onto the EVM's stack-based execution model. Its first stable release appeared in 2016 and the language has undergone significant evolution since, with version 0.8.x (released 2020) introducing checked arithmetic by default, eliminating a major class of integer overflow bugs that had plagued earlier contracts.

  - The language's contract-oriented design directly mirrors the blockchain execution model. A Solidity contract is a collection of state variables (stored permanently on-chain), functions (callable by external accounts or other contracts), events (indexed log emissions), modifiers (reusable precondition guards), and constructor logic (run once at deployment). Inheritance and interface mechanisms allow code reuse and the definition of standard API shapes such as the ERC-20 fungible token interface and the ERC-721 NFT interface, which are the basis for billions of dollars of on-chain value.

  - Gas economics fundamentally constrain Solidity programming in ways alien to traditional software development. Every EVM opcode consumes a defined quantity of gas, and a transaction reverts if it runs out before completion. Storage writes are among the most expensive operations, so skilled Solidity developers pack data tightly into 32-byte slots, use events instead of storage where read access is not required on-chain, and carefully architect storage layouts to minimise cold-read penalties introduced in EIP-2929.

  - The security audit industry exists largely because Solidity smart contracts are immutable once deployed (absent explicit upgrade patterns) and control substantial financial assets. The 2016 DAO hack, exploiting a reentrancy vulnerability in Solidity code, led to the Ethereum hard fork and remains the canonical cautionary tale. Standard defensive patterns — checks-effects-interactions ordering, OpenZeppelin's audited libraries, pull-payment patterns, and re-entrancy guards — are now taught as baseline hygiene. Formal verification tools such as Certora Prover and the SMTChecker built into the Solidity compiler provide mathematical guarantees for critical invariants.

  - Alternative smart contract languages (Vyper, Fe, Yul) have emerged to address specific criticisms of Solidity: Vyper prioritises auditability by restricting the language to a smaller, more predictable subset; Yul is an intermediate representation used for gas-optimal low-level code. Despite this competition Solidity retains overwhelming ecosystem dominance measured by deployed contracts, developer tooling (Hardhat, Foundry, Remix), and educational resources, making it the de facto entry point for blockchain application development.
