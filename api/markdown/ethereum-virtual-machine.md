- ### Definition
  - The deterministic stack-based virtual machine that executes Ethereum smart contract bytecode and updates the shared world state.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumVirtualMachine
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Virtual Machine]]
  - bridges-to:: [[Gas]]
  - requires:: [[Smart Contract Platform]]
  - enables:: [[Ethereum Smart Contracts]]

- ### Content
  - The Ethereum Virtual Machine is a sandboxed execution environment that runs compiled contract bytecode. Every node executes the same instructions deterministically so that all reach an identical resulting state.
  - Each operation consumes gas, which bounds computation and prices resource use. Compatibility with this instruction set has become a common target, with several other chains implementing equivalent virtual machines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z