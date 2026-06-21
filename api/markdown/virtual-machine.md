- ### Definition
  - A virtual machine in blockchain contexts is a runtime environment executing [[SmartContract|smart contracts]] deterministically, translating high-level contract code into low-level operations whilst enforcing resource limits and preventing unauthorised state modifications. The [[EVM|Ethereum Virtual Machine]] dominates as the reference implementation, executing [[Solidity|Solidity]] bytecode across thousands of nodes globally, with alternatives including [[WASM|WebAssembly]]-based [[SolanaSVM|Solana's Sealevel VM]], [[MoveVM|Move VM]], and [[CairoVM|Cairo VM]] providing specialised optimisations for specific use cases. Deterministic execution is paramount—identical contract invocations across decentralised networks must produce identical results, enabling consensus formation without relying on centralised authorities.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualMachine
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - Enables: [[Smart Contract]]
  - Uses: [[Blockchain]], [[Cryptography]]
  - Supports: [[Distributed System]]
  - Related To: [[Smart Contract Execution]]

- ### Content
  - Runtime environment executing [[SmartContract|smart contracts]] deterministically, translating high-level contract code into low-level operations whilst enforcing resource limits and preventing unauthorised state modifications. The [[EVM|Ethereum Virtual Machine]] dominates as the reference implementation executing [[Solidity|Solidity]] bytecode across thousands of nodes globally, with alternatives including [[WASM|WebAssembly]]-based [[SolanaSVM|Solana's Sealevel VM]], [[MoveVM|Move VM]], and [[CairoVM|Cairo VM]] providing specialised optimisations. Deterministic execution is paramount—identical contract invocations across decentralised networks must produce identical results, enabling consensus formation without relying on centralised authorities.
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z