---
okf_version: "0.2"
type: Class
title: WebAssembly
resource: urn:ngm:class:web-assembly
domain: infrastructure
description: WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine, standardised by the W3C, that provides a portable compilation target for high-level languages such as C, C++, Rust, and Go, enabling near-native execution speed inside Web Browser sandboxes and server-side ru...
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:binary-instruction-format
  - urn:ngm:class:portable-execution-environment
hasPart:
  - urn:ngm:class:wasm-module
  - urn:ngm:class:wasm-linear-memory
  - urn:ngm:class:wasm-table
  - urn:ngm:class:wasm-import-object
  - urn:ngm:class:wasi-interface
requires:
  - urn:ngm:class:binary-encoding
  - urn:ngm:class:runtime-environment
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:binary-encoding
  - urn:ngm:class:runtime-environment
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:edge-inference
  - urn:ngm:class:sandboxed-agent-execution
  - urn:ngm:class:interoperability
  - urn:ngm:class:deterministic-replay
dependsOn:
  - urn:ngm:class:llvm-compiler-toolchain
  - urn:ngm:class:wasmtime-runtime
  - urn:ngm:class:wasmer-runtime
implements:
  - urn:ngm:class:w3c-webassembly-specification
  - urn:ngm:class:wasi-standard
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:blockchain
  - urn:ngm:class:ros
  - urn:ngm:class:open-xr
  - urn:ngm:class:model-context-protocol
uses:
  - urn:ngm:class:rust-systems-programming-language
  - urn:ngm:class:java-script
supports:
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:web-contracts
partOf:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:vision-claw-agentic-container
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:runtime-environment
---

# WebAssembly

WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine, standardised by the W3C, that provides a portable compilation target for high-level languages such as C, C++, Rust, and Go, enabling near-native execution speed inside Web Browser sandboxes and server-side ru...
