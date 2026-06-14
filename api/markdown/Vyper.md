public:: true

# Vyper
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cea62728ab88a73fce42295d4e991cb035cde6ff143390c504cfcdae2ab4b3e6",
  "@type": "Page",
  "vc:slug": "vyper",
  "title": "Vyper",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum-virtual-machine",
      "vc:label": "Ethereum Virtual Machine"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:solidity",
      "vc:label": "Solidity"
    },
    {
      "@id": "urn:visionflow:linked:programming-language",
      "vc:label": "Programming Language"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vyper"
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
  "@id": "urn:ngm:class:vyper",
  "@type": "Class",
  "label": "Vyper",
  "definition": "Vyper is a contract-oriented, statically typed programming language for the Ethereum Virtual Machine (EVM) that prioritises security, simplicity, and auditability over expressive power. Inspired by Python syntax, it deliberately omits class inheritance, function overloading, recursive calling, and inline assembly to eliminate entire categories of smart-contract vulnerabilities. The language enforces bounds checking, explicit integer overflow handling, and strong typing so that the compiled EVM bytecode is tractable for formal verification and manual code review. Vyper was initially specified by Vitalik Buterin and the Ethereum Foundation team as a safer companion language to Solidity.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-language",
      "label": "Programming Language"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:fe-language",
        "label": "Fe Language"
      },
      {
        "@id": "urn:ngm:class:yul",
        "label": "Yul"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:evm-bytecode",
        "label": "EVM Bytecode"
      },
      {
        "@id": "urn:ngm:class:static-typing",
        "label": "Static Typing"
      },
      {
        "@id": "urn:ngm:class:abi-encoding",
        "label": "ABI Encoding"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:curve-finance",
        "label": "Curve Finance"
      },
      {
        "@id": "urn:ngm:class:compound-protocol",
        "label": "Compound Protocol"
      },
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:formal-methods",
        "label": "Formal Methods"
      },
      {
        "@id": "urn:ngm:class:program-analysis",
        "label": "Program Analysis"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:vyper-language",
      "label": "Vyper Language"
    }
  ],
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:vyper:4c50d0fcb0a5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cea62728ab88a73fce42295d4e991cb035cde6ff143390c504cfcdae2ab4b3e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:ethereum-virtual-machine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Solidity]]",
      "resolved": "urn:visionflow:linked:solidity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Programming Language]]",
      "resolved": "urn:visionflow:linked:programming-language",
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
  - Vyper is a contract-oriented [[Programming Language]] targeting the [[Ethereum Virtual Machine]] that places security and auditability at the centre of its design philosophy. By adopting a Python-inspired syntax while deliberately excluding features such as class inheritance, recursive calls, operator overloading, and inline assembly, Vyper makes it structurally harder to introduce the classes of bugs — reentrancy, integer overflow, ambiguous precedence — that have resulted in major losses in [[Decentralised Finance]] ecosystems. Its design makes [[Smart Contract]] code simpler to read, reason about, and subject to [[Formal Verification]] or manual [[Security Audit]].

- ### Overview
  - Vyper emerged from the Ethereum community's recognition that [[Solidity]], while expressive, exposes developers to a wide attack surface through its C/Java-style feature set. The language was initially prototyped by Vitalik Buterin around 2017 and has since been maintained as a community open-source project under the Ethereum Foundation umbrella.
  - Rather than maximising developer convenience, Vyper optimises for reader comprehension: the principle is that smart contracts are read far more often than they are written, and by auditors, not just the original authors. This philosophy has made Vyper the preferred language for high-value, security-critical protocols.
  - Key adoption examples include [[Curve Finance]], which uses Vyper for its core liquidity pool contracts, and portions of the [[Compound Protocol]]. These deployments demonstrate that the language is production-ready for demanding financial applications.
  - Vyper compiles to [[EVM Bytecode]] and is therefore fully interoperable with contracts written in [[Solidity]] or [[Yul]]; the two languages share the same [[ABI Encoding]] standard and can call each other through standard interface mechanisms.

- ### Key Design Principles
  - **Security by omission**: Features retained are justified by necessity; features absent are absent by deliberate choice.
    - No class inheritance — eliminates complex method resolution order bugs.
    - No function overloading — each function name unambiguously maps to one implementation.
    - No recursive calling — prevents stack-depth exploits and makes gas cost estimation tractable.
    - No infinite loops — all loops must have a bounded integer range, making gas upper bounds calculable at compile time.
    - No inline assembly — removes the ability to bypass Vyper's safety checks using raw [[EVM Bytecode]].
  - **Strong and explicit typing**
    - All [[Static Typing]] is enforced at compile time; implicit type coercion is disallowed.
    - Integer arithmetic uses checked semantics by default: overflow and underflow revert the transaction rather than wrapping silently.
    - Decimal literals use a fixed-point type (`decimal`) to avoid floating-point pitfalls in financial calculations.
  - **Auditability and readability**
    - One function per name, one way to do each thing — code paths are linear and easy to trace.
    - The compiler emits natural-language NatSpec documentation compatible with the [[ABI Encoding]] standard.
    - Built-in overflow protections, bounds-checked array access, and range-checked integer operations reduce the reviewer's cognitive load.
  - **Python-inspired syntax**
    - Indentation-delimited blocks, colon-terminated compound statements, and familiar keyword choices (`def`, `for`, `if`, `return`) lower the barrier for developers from scientific or data-engineering backgrounds who are already familiar with [[Python]].
    - This makes Vyper particularly relevant in communities where [[Data Science]] skills overlap with blockchain development.

- ### Core Language Features
  - **State variables and storage layout**
    - Contract state is declared at module level with explicit types; the storage slot assignments are deterministic and documented in the ABI output.
    - Supports mappings, fixed-size arrays, structs, and bounded dynamic arrays (`DynArray`).
  - **External and internal functions**
    - Functions decorated `@external` are callable from outside; `@internal` functions are inlined or called only within the contract.
    - `@view` and `@pure` decorators enforce read-only and stateless semantics respectively, matching [[ERC-20]] and [[ERC-721]] interface conventions.
  - **Events**
    - Vyper supports Ethereum log events with typed parameters, compatible with the same [[ABI Encoding]] that [[Solidity]] uses, enabling seamless indexing by tools like The Graph.
  - **Built-in functions and constants**
    - Rich builtins: `convert`, `extract32`, `slice`, `concat`, `keccak256`, `sha256`, `ecrecover`, `create_minimal_proxy_to` (EIP-1167).
    - `block`, `chain`, `msg`, `tx` environment variables provide access to [[Ethereum]] context.
  - **Interfaces**
    - Named interface blocks allow Vyper contracts to call external [[Smart Contract]] ABI methods in a type-safe manner without requiring the full source.

- ### Applications and Use Cases
  - **DeFi liquidity pools and AMMs**
    - [[Curve Finance]] pools are the canonical Vyper production deployment; the stable-swap invariant logic benefits from Vyper's deterministic gas model and auditability.
  - **Token contracts**
    - [[ERC-20]] and [[ERC-721]] token implementations in Vyper are popular for projects wanting auditor-friendly code.
  - **Governance contracts**
    - [[Decentralised Autonomous Organisation]] voting contracts written in Vyper are simpler to formally reason about, reducing governance exploit risk.
  - **Staking and escrow**
    - Time-locked escrow, vesting schedules, and staking mechanisms benefit from Vyper's explicit bounds and overflow protection.
  - **Protocol safety upgrades**
    - Teams migrating from [[Solidity]] to Vyper do so specifically to qualify for simpler [[Security Audit]] and lower bug bounty risk.
  - **Teaching and education**
    - Vyper's Python-like syntax and restricted feature set make it effective for onboarding developers into [[Smart Contract]] programming without immediately exposing them to the full complexity of EVM edge cases.

- ### Compiler and Toolchain
  - **vyper compiler** (`vyper` CLI, installable via pip) — the reference implementation, written in [[Python]].
  - **Titanoboa** — a fast, pure-Python EVM interpreter and Vyper testing framework that allows contracts to be tested interactively in Jupyter notebooks without a full node.
  - **ApeWorX (Ape)** — a modular [[Smart Contract]] development framework with first-class Vyper support, analogous to Hardhat or Foundry for [[Solidity]].
  - **Foundry (forge)** — supports Vyper compilation via the `vyper` backend, enabling mixed Vyper/Solidity projects to use Foundry's fast test runner.
  - **Slither and Manticore** — static analysis and [[Formal Verification]] tools with Vyper plugins for automated vulnerability detection.
  - **Etherscan verification** — Vyper contracts can be source-verified on Etherscan and Blockscout using the standard contract verification workflow.

- ### Security Properties and Known Limitations
  - **Re-entrancy guard**
    - Vyper has a built-in `@nonreentrant` decorator that applies a storage-based mutex, making reentrancy protection a one-line annotation rather than a manually implemented pattern.
  - **2023 reentrancy vulnerability**
    - A significant compiler bug was disclosed in August 2023 affecting versions 0.2.15, 0.2.16, and 0.3.0: the `@nonreentrant` guard was not correctly applied in certain code paths, leading to exploits of several Curve Finance pools. This incident highlighted that language-level safety guarantees depend on compiler correctness, reinforcing the importance of [[Formal Verification]] of the compiler itself.
  - **Limited expressiveness as a feature**
    - Developers who require assembly-level optimisation, complex inheritance hierarchies, or metaprogramming must use [[Solidity]] or [[Yul]]. Vyper is not designed to replace Solidity for all use cases.
  - **Smaller ecosystem**
    - Library availability, IDE integration, and community tooling are more limited compared to [[Solidity]], though the gap has narrowed since 2022.

- ### Relationships
  - requires:: [[Ethereum Virtual Machine]]
  - requires:: [[Ethereum]]
  - enables:: [[Smart Contract]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Formal Verification]]
  - contrastsWith:: [[Solidity]]
  - contrastsWith:: [[Yul]]
  - uses:: [[EVM Bytecode]]
  - uses:: [[Static Typing]]
  - uses:: [[ABI Encoding]]
  - implements:: [[ERC-20]]
  - implements:: [[ERC-721]]
  - supports:: [[Security Audit]]
  - supports:: [[Decentralised Autonomous Organisation]]
  - relatedTo:: [[Curve Finance]]
  - relatedTo:: [[Compound Protocol]]
  - relatedTo:: [[Open Source Software]]
  - relatedTo:: [[Python]]
  - bridges-to:: [[Formal Methods]]
  - bridges-to:: [[Program Analysis]]

- ### Standards and Context
  - Vyper targets the [[Ethereum Virtual Machine]] specification as defined in the Yellow Paper and subsequent EIPs.
  - Its [[ABI Encoding]] output conforms to the Ethereum Contract ABI Specification, ensuring interoperability with all standard [[Ethereum]] tooling.
  - The language supports a range of EIPs as built-ins: EIP-1167 (minimal proxy), EIP-712 (structured data hashing), EIP-2612 (permit extensions for [[ERC-20]]).
  - Vyper's `@nonreentrant` pattern aligns with the Checks-Effects-Interactions security pattern recommended by the Ethereum Smart Contract Best Practices guide.
  - The compiler is governed through community governance on GitHub under the `vyperlang/vyper` repository, with major releases subject to community review and audit.
  - [[Decentralised Finance]] security frameworks such as DeFi Safety and protocols following the Trail of Bits security checklist often recommend Vyper for high-value, low-complexity contracts.

- ### Provenance
  - sources:: Ethereum Foundation documentation, vyperlang/vyper GitHub repository, Curve Finance technical docs, Trail of Bits audit reports
  - updated:: 2026-06-13
