A sandboxed runtime environment that executes smart contract bytecode deterministically across distributed nodes, translating high-level contract code into low-level operations whilst metering computational resource consumption and enforcing state-transition rules. The Ethereum Virtual Machine is the canonical reference implementation, with alternatives including WebAssembly-based runtimes for improved performance.

### Semantic Classification

### Content

- Runtime environment executing [[SmartContract|smart contracts]] deterministically, translating high-level contract code into low-level operations whilst enforcing resource limits and preventing unauthorised state modifications. The [[EVM|Ethereum Virtual Machine]] dominates as the reference implementation executing [[Solidity|Solidity]] bytecode across thousands of nodes globally, with alternatives including [[WASM|WebAssembly]]-based [[SolanaSVM|Solana's Sealevel VM]], [[MoveVM|Move VM]], and [[CairoVM|Cairo VM]] providing specialised optimisations. Deterministic execution is paramount—identical contract invocations across decentralised networks must produce identical results, enabling consensus formation without relying on centralised authorities.

### Provenance

