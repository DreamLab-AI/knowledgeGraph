EVM compatibility is the property of a blockchain or execution environment that allows it to run smart contracts compiled for the Ethereum Virtual Machine without modification, supporting the same bytecode, opcodes and account model. Compatible chains can reuse Ethereum tooling, wallets, contracts and developer skills, which lowers the cost of porting applications and bootstrapping liquidity. It is the foundation of the wider EVM ecosystem spanning Layer-2 rollups, sidechains and alternative Layer-1 networks.

### Overview

- The Ethereum Virtual Machine defines a stack-based instruction set that contracts compile to; compatibility means faithfully reproducing that machine.
- Chains range from fully equivalent (bytecode-identical) to merely compatible (same source language, slightly different runtime behaviour).
- Compatibility is the dominant strategy for [[Layer 2 Scaling]] solutions and alternative Layer-1s seeking developer adoption.
- It underpins composability across the [[Cross-Chain Bridge]] ecosystem by keeping execution semantics aligned.

### Mechanisms

- Bytecode-level equivalence executes the exact opcode set so existing compiled contracts deploy unchanged.
- Language-level compatibility supports the same high-level languages while permitting a different underlying virtual machine.
- Precompiles and gas schedules are mirrored to preserve contract economics and cryptographic operations.
- Tooling parity (RPC API, wallet standards, indexers) ensures the developer experience transfers across chains.

### Applications

- Layer-2 rollups such as [[Optimistic Rollup]] and [[zkSync]] inherit the contract base of mainnet.
- Alternative Layer-1 chains like [[BNB Chain]] attract applications by promising drop-in deployment.
- Scaling networks such as [[Arbitrum]] and [[Polygon]] reuse the entire Ethereum developer stack.
- Bridges and messaging layers like [[Connext]] route assets between compatible execution environments.

### Provenance

