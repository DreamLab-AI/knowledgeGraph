- ### Definition
  - A contract-oriented programming language for the Ethereum Virtual Machine that emphasises simplicity, auditability, and security. It uses Python-like syntax and deliberately omits features that can make contracts hard to reason about.

- ### Semantic Classification
  - owl-class:: blockchain:Vyper
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Programming Language]]
  - bridges-to:: [[Solidity]]
  - requires:: [[Ethereum Virtual Machine]]
  - enables:: [[Smart Contract]]

- ### Content
  - Vyper is designed as an alternative to Solidity for writing smart contracts. It restricts language constructs such as modifiers, inheritance, and inline assembly to reduce the surface for subtle bugs and to make contracts easier to audit.
  - The compiler targets EVM bytecode, so Vyper contracts interoperate with Solidity contracts and existing tooling. Its design favours strong typing, bounds checking, and explicit behaviour over flexibility.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z