---
okf_version: "0.2"
type: Class
title: ABI Encoding
resource: urn:ngm:class:abi-encoding
domain: blockchain
description: ABI encoding is the Application Binary Interface encoding scheme used by the Ethereum Virtual Machine to serialise function calls and their arguments into the byte layout that smart contracts expect on-chain. It defines fixed rules for encoding primitive types, dynamic types such as strings and arrays, and nested structures, so that a compiled contract can decode calldata deterministically regardl
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:smart-contract
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ABI Encoding

ABI encoding is the Application Binary Interface encoding scheme used by the Ethereum Virtual Machine to serialise function calls and their arguments into the byte layout that smart contracts expect on-chain. It defines fixed rules for encoding primitive types, dynamic types such as strings and arrays, and nested structures, so that a compiled contract can decode calldata deterministically regardless of the source language or tool that produced it. Development toolchains such as Foundry and compilers such as Vyper generate ABI-encoded calldata automatically from a contract's interface definition.
