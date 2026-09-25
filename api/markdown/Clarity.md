Clarity is a decidable smart contract language designed so that contract behaviour can be analysed before execution, with no compilation step and explicit handling of conditions that could otherwise fail silently.

### Semantic Classification

### Content

- Clarity is interpreted rather than compiled, so the deployed source is exactly what executes, and its design avoids unbounded loops and reentrancy by construction. This makes static analysis of cost and outcome tractable before a contract runs.
- The language targets blockchain settings where mistakes are costly and irreversible, prioritising predictability over expressive shortcuts. It connects to verifiable computation and to decentralised finance use cases that demand auditable logic.

### Provenance

