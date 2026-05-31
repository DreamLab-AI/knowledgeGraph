- ### Definition
  - The Smart Contract Layer is the stratum that holds self-executing programmes whose logic runs deterministically against agreed state. In the canonical stack it sits above the Middleware Layer and below the Application Layer, turning a shared ledger into a programmable platform. It contains contract code, virtual machine execution semantics, and the state these contracts read and write.

- ### Semantic Classification
  - owl-class:: arch:SmartContractLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Ethereum Virtual Machine]], [[Decentralised Finance]]
  - requires:: [[Middleware Layer]], [[Consensus Layer]]
  - enables:: [[Application Layer]]

- ### Content
  - The Smart Contract Layer executes deterministic programmes whose outputs every participant can independently verify. Typical members include contract bytecode, a deterministic virtual machine, gas accounting, and the persistent contract storage that records balances and rules. Execution is replicated so that all honest nodes reach the same result.
  - It requires the Middleware Layer to expose ledger access and the Consensus Layer to agree on the ordering of the transactions it processes. It enables the Application Layer above, where user-facing products compose these contracts into services.
  - The layer bridges to execution environments such as the Ethereum Virtual Machine and to application domains such as decentralised finance. Determinism and replicated execution are the properties that make its outputs trustworthy without a central operator.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z