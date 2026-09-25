An oracle design in which proposed off-chain data is accepted by default and only verified on-chain if a participant disputes it within a challenge window. It reduces routine reporting costs by reserving full verification for contested values.

### Semantic Classification

### Content

- An optimistic oracle posts a value to a smart contract and treats it as correct unless a counterparty raises a dispute before a deadline. Reporters and disputers post bonds, so an incorrect value can be challenged and the dishonest party loses its bond.
- Because most reported values are uncontested, the model avoids the cost of continuous consensus on every data point. It is used for inputs that are objective but expensive to verify continuously, such as settlement prices, insurance triggers and cross-chain state assertions.

### Provenance

