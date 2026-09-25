A protocol for issuing and transferring assets and running smart contracts on Bitcoin using client-side validation and single-use seals anchored to the chain.

### Semantic Classification

### Content

- RGB keeps contract state and validation off-chain, with peers checking the history of an asset themselves rather than relying on global consensus. Bitcoin transactions act as single-use seals that commit to state transitions without publishing the data.
- This design keeps asset data private and off the base layer while still anchoring ownership to Bitcoin. RGB contracts can also operate over Lightning channels, extending fast off-chain transfer to issued assets.

### Provenance

