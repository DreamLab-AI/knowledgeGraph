public:: true

# Foundry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a4e5f01bdc81e5fb3c737c79f714dfcfe7082e9395b74164f60e1956ebf70a37",
  "@type": "Page",
  "vc:slug": "foundry",
  "title": "Foundry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:solidity",
      "vc:label": "Solidity"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Foundry"
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
  "@id": "urn:ngm:class:foundry",
  "@type": "Class",
  "label": "Foundry",
  "definition": "Foundry is a fast, modular, and portable Ethereum application development toolkit written in Rust, comprising four core tools: Forge (test framework), Cast (EVM interaction CLI), Anvil (local testnet node), and Chisel (Solidity REPL). It enables developers to write, compile, fuzz-test, and deploy Solidity and Vyper smart contracts entirely from the command line, with tests written directly in Solidity rather than JavaScript. Foundry has become the dominant professional-grade smart-contract development environment on Ethereum-compatible chains, replacing earlier JavaScript-based toolchains such as Hardhat and Truffle for many teams. Its architecture emphasises speed through native compilation and parallelised test execution, deterministic reproducibility via pinned dependencies, and deep EVM-level inspection through cheatcodes and traces.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:forge",
        "label": "Forge"
      },
      {
        "@id": "urn:ngm:class:cast",
        "label": "Cast"
      },
      {
        "@id": "urn:ngm:class:anvil",
        "label": "Anvil"
      },
      {
        "@id": "urn:ngm:class:chisel",
        "label": "Chisel"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:evm",
        "label": "EVM"
      },
      {
        "@id": "urn:ngm:class:rust",
        "label": "Rust"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:fuzz-testing",
        "label": "Fuzz Testing"
      },
      {
        "@id": "urn:ngm:class:property-based-testing",
        "label": "Property-Based Testing"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:deployment-scripting",
        "label": "Deployment Scripting"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:evm-bytecode",
        "label": "EVM Bytecode"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cheatcodes",
        "label": "Cheatcodes"
      },
      {
        "@id": "urn:ngm:class:abi-encoding",
        "label": "ABI Encoding"
      },
      {
        "@id": "urn:ngm:class:json-rpc",
        "label": "JSON-RPC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hardhat",
        "label": "Hardhat"
      },
      {
        "@id": "urn:ngm:class:truffle",
        "label": "Truffle"
      },
      {
        "@id": "urn:ngm:class:brownie",
        "label": "Brownie"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      },
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:evm-compatible-chain",
        "label": "EVM-Compatible Chain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:static-analysis",
        "label": "Static Analysis"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-contract-development-framework",
        "label": "Smart Contract Development Framework"
      },
      {
        "@id": "urn:ngm:class:vyper",
        "label": "Vyper"
      },
      {
        "@id": "urn:ngm:class:openzeppelin",
        "label": "OpenZeppelin"
      },
      {
        "@id": "urn:ngm:class:remappings",
        "label": "Remappings"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:foundry-rs",
      "label": "Foundry-rs"
    }
  ],
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:foundry:dfb316701857",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a4e5f01bdc81e5fb3c737c79f714dfcfe7082e9395b74164f60e1956ebf70a37"
  },
  "vc:resolutions": [
    {
      "raw": "[[Solidity]]",
      "resolved": "urn:visionflow:linked:solidity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - Foundry is a fast, portable, and modular [[Smart Contract Development Framework]] for [[Ethereum]] and [[EVM-Compatible Chain]]s, written in [[Rust]]. It bundles four tightly integrated tools — [[Forge]] (testing and build), [[Cast]] (EVM interaction), [[Anvil]] (local blockchain node), and [[Chisel]] ([[Solidity]] REPL) — into a single CLI-driven workflow. Unlike JavaScript-based predecessors such as [[Hardhat]] and [[Truffle]], Foundry lets developers write tests and deployment scripts entirely in [[Solidity]], eliminating context-switching and enabling near-native compilation speeds. Its built-in [[Fuzz Testing]] engine and [[Cheatcodes]] API give teams deep [[EVM]] introspection that was previously only available through bespoke scripts or external tooling.

- ### Overview
  - Foundry was created by Georgios Konstantopoulos and the Paradigm research team and first released as open-source in 2021 under the MIT licence. It is hosted at `github.com/foundry-rs/foundry`.
  - The toolkit targets professional [[Smart Contract]] engineering workflows on [[Ethereum]] and any [[EVM-Compatible Chain]] (Polygon, Optimism, Arbitrum, Base, Avalanche C-Chain, etc.).
  - Its core design principles are:
    - **Speed**: parallel test execution and native [[Rust]] compilation make test suites run orders of magnitude faster than equivalent [[JavaScript]] toolchains.
    - **Solidity-native testing**: test contracts extend `forge-std/Test.sol` and use assertion helpers identical to popular Solidity idioms, removing the need for [[JavaScript]] or [[TypeScript]] test wrappers.
    - **Reproducibility**: `foundry.toml` pins compiler versions, optimiser settings, and remappings, ensuring deterministic builds across machines and CI environments.
    - **Composability**: modular architecture allows individual sub-tools to be used standalone or integrated with external workflows.
  - Foundry has displaced [[Hardhat]] as the most popular Ethereum development framework among professional and protocol teams, according to developer surveys from 2023 onwards.

- ### Key Components
  - **[[Forge]]**
    - The build system and [[Property-Based Testing]] framework at the heart of Foundry.
    - Compiles [[Solidity]] (and [[Vyper]]) source files using `solc` or compatible compilers.
    - Runs unit tests, fuzz tests, and invariant tests written as Solidity functions prefixed with `test`.
    - Generates gas snapshots (`forge snapshot`) for regression tracking of [[Gas Optimisation]].
    - Produces coverage reports (`forge coverage`) integrated with LCOV-compatible tools.
    - Supports script-based [[Deployment Scripting]] via `forge script`, which simulates transactions before broadcasting to a live network.
  - **[[Cast]]**
    - A Swiss-army-knife CLI for interacting with [[Ethereum]] nodes via [[JSON-RPC]].
    - Encodes and decodes [[ABI Encoding]] calldata, events, and return values.
    - Queries on-chain state (balances, storage slots, bytecode) without a full framework.
    - Sends transactions and signs messages from a local or hardware wallet keystore.
    - Used heavily in debugging and quick on-chain inspection workflows.
  - **[[Anvil]]**
    - A local [[Ethereum]] test node (analogous to [[Ganache]] and [[Hardhat Network]]).
    - Forks mainnet or any EVM network at a specified block height, enabling realistic integration tests against production state.
    - Supports instant mining, time-travel (`evm_increaseTime`), and state snapshot/revert cycles.
    - Exposes a full [[JSON-RPC]] interface compatible with [[MetaMask]] and other wallet tooling.
  - **[[Chisel]]**
    - An interactive [[Solidity]] REPL for rapid prototyping and experimentation.
    - Evaluates Solidity expressions incrementally without compiling a full contract project.
    - Useful for debugging [[ABI Encoding]] edge cases and quickly validating arithmetic.
  - **`forge-std`**
    - The standard library shipped with Foundry, providing `Test.sol`, assertion helpers (`assertEq`, `assertApproxEqAbs`), console logging (`console.log`), and the full [[Cheatcodes]] interface (`vm.*`).
  - **[[Cheatcodes]]**
    - A privileged set of EVM opcodes exposed by Forge's in-process EVM that allow tests to manipulate blockchain state: set block timestamp/number, prank caller address, deal ETH/ERC-20, expect reverts/events, and mock external calls.
    - Central to Foundry's power as a testing framework — equivalent functionality in [[Hardhat]] requires custom plugins.

- ### Mechanisms
  - **[[Fuzz Testing]]**
    - Forge automatically generates randomised inputs for any test function accepting arguments.
    - The fuzzer (based on a coverage-guided approach) shrinks failing inputs to minimal counterexamples.
    - Configurable seed, number of runs, and dictionary via `foundry.toml`.
  - **Invariant Testing**
    - A class of [[Property-Based Testing]] where Forge calls arbitrary sequences of contract functions and checks that declared invariants hold after every call.
    - Models adversarial interaction patterns and is especially powerful for [[DeFi Protocol]] security.
  - **Gas Optimisation Tracking**
    - `forge snapshot` records per-test gas usage; CI can diff against a baseline to detect regressions.
    - Integrates with [[Gas Optimisation]] workflows and auditor reports.
  - **Mainnet Forking**
    - Anvil's `--fork-url` flag creates a live snapshot of mainnet, allowing tests to interact with real [[Uniswap]], [[Aave]], [[Compound]], and other [[DeFi Protocol]] contracts without deploying mock versions.
  - **Remappings and Dependency Management**
    - `foundry.toml` `[dependencies]` section (via `forge install`) pins [[OpenZeppelin]], `forge-std`, and other [[Solidity]] libraries as git submodules.
    - `remappings.txt` maps import paths to local directories, making contract dependencies portable.

- ### Applications / Use Cases
  - **Protocol Auditing and [[Security]] Reviews**
    - Auditors use Forge invariant tests and [[Fuzz Testing]] to surface edge-case vulnerabilities in [[DeFi Protocol]] codebases before deployment.
    - [[Formal Verification]] tools such as Halmos and Certora integrate with Foundry's test harness.
  - **[[DeFi Protocol]] Development**
    - Major protocols (Uniswap v4, Aave v3, MakerDAO, Euler Finance) maintain Foundry-based test suites as part of their standard development process.
  - **[[NFT]] and Token Contract Deployment**
    - ERC-20, ERC-721, and ERC-1155 contracts are routinely scaffolded, tested, and deployed via `forge script`.
  - **Cross-Chain Development**
    - Teams building on [[EVM-Compatible Chain]]s (Optimism, Arbitrum, Base, zkSync Era) use Foundry with chain-specific RPC endpoints and fork tests to validate behaviour across networks.
  - **[[Continuous Integration]] Pipelines**
    - `forge test --ci` integrates cleanly into GitHub Actions, GitLab CI, and similar [[DevOps]] pipelines, providing deterministic pass/fail outcomes.
  - **Education and Prototyping**
    - Chisel and `forge script` are used in hackathons and educational workshops as low-friction on-ramps to [[Solidity]] development.

- ### Relationships
  - hasPart:: [[Forge]]
  - hasPart:: [[Cast]]
  - hasPart:: [[Anvil]]
  - hasPart:: [[Chisel]]
  - requires:: [[Solidity]]
  - requires:: [[EVM]]
  - requires:: [[Rust]]
  - enables:: [[Smart Contract]]
  - enables:: [[Fuzz Testing]]
  - enables:: [[Property-Based Testing]]
  - enables:: [[Formal Verification]]
  - enables:: [[Deployment Scripting]]
  - dependsOn:: [[Ethereum]]
  - dependsOn:: [[EVM Bytecode]]
  - uses:: [[Cheatcodes]]
  - uses:: [[ABI Encoding]]
  - uses:: [[JSON-RPC]]
  - contrastsWith:: [[Hardhat]]
  - contrastsWith:: [[Truffle]]
  - contrastsWith:: [[Brownie]]
  - supports:: [[DeFi Protocol]]
  - supports:: [[NFT]]
  - supports:: [[EVM-Compatible Chain]]
  - bridges-to:: [[Continuous Integration]]
  - bridges-to:: [[Static Analysis]]
  - bridges-to:: [[DevOps]]
  - relatedTo:: [[Vyper]]
  - relatedTo:: [[OpenZeppelin]]

- ### Standards & Context
  - Foundry targets the [[Ethereum]] [[JSON-RPC]] specification (as codified in execution-layer client implementations such as Geth and Reth).
  - Contract compilation follows the [[Solidity]] compiler (`solc`) ABI and bytecode specification; [[ABI Encoding]] is per the official Ethereum ABI specification.
  - `forge script` deployment scripting is compatible with [[EIP-1559]] fee markets and hardware wallet signers (Ledger, Trezor).
  - The `forge-std` library and cheatcode API are informally standardised across the Foundry ecosystem and referenced by auditing firms (Trail of Bits, OpenZeppelin, Spearbit) as a baseline for test quality.
  - Foundry's invariant testing model informs emerging community standards for [[DeFi Protocol]] security assurance, influencing how audit scopes are scoped and reported.
  - [[Static Analysis]] tools (Slither, Mythril) have built Foundry integration layers, enabling combined static + dynamic analysis pipelines.

- ### Provenance
  - sources:: Foundry Book (book.getfoundry.sh), GitHub foundry-rs/foundry, Paradigm Engineering blog, community developer surveys 2022–2025
  - updated:: 2026-06-13
