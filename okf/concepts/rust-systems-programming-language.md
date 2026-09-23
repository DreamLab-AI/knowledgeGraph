---
okf_version: "0.2"
type: Class
title: Rust Systems Programming Language
resource: urn:ngm:class:rust-systems-programming-language
domain: infrastructure
description: Rust is a compiled, statically typed systems programming language created at Mozilla Research and first released in 2015, designed to provide C-like performance and low-level memory control without the memory safety vulnerabilities that plague C and C++. Its defining innovation is the ownership-and-borrowing type system, which enforces at compile time that each value has exactly one owner, referen
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:programming-language
enables:
  - urn:ngm:class:web-assembly
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:high-performance-computing
uses:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:runtime-environment
---

# Rust Systems Programming Language

Rust is a compiled, statically typed systems programming language created at Mozilla Research and first released in 2015, designed to provide C-like performance and low-level memory control without the memory safety vulnerabilities that plague C and C++. Its defining innovation is the ownership-and-borrowing type system, which enforces at compile time that each value has exactly one owner, references obey strict lifetime rules, and data races are structurally impossible — all without a garbage collector. Rust has rapidly become the preferred language for writing safe, high-performance systems software, blockchain runtimes, WebAssembly modules, embedded firmware, and operating system kernels.
