id:: bc-0462-on-chain-voting-ontology

- ### OntologyBlock
  id:: BC-0462-on-chain-voting
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0462
  - preferred-term:: On Chain Voting
  - source-domain:: bc
  - owl:class:: bc:OnChainVoting
  - status:: active
  - definition:: On-Chain Voting records governance decisions permanently on the blockchain, providing full transparency, immutable voting history, sybil-resistance through token-based identity, and automatic execution of approved proposals through smart contracts, though at the cost of transaction fees and potentially lower participation compared to off-chain alternatives.
  - is-subclass-of:: [[Decentralized Autonomous Organization]]
  - enables:: [[Transparent Governance]], [[Immutable Voting Records]], [[Automatic Proposal Execution]]
  - requires:: [[Governance Token]], [[Smart Contracts]], [[Gas Fees]]

### Technical Details
Key characteristics include:
- **Permanent Record**: All votes recorded immutably on blockchain for transparent history
- **Sybil Resistance**: Token-based voting prevents duplicate voting through cryptographic identity
- **Smart Contract Execution**: Approved proposals automatically execute when vote thresholds reached
- **Decentralization**: No central authority can manipulate voting results

### On-Chain vs Off-Chain
- **On-chain voting**: Guarantees full decentralization and transparency but requires gas fees and may reduce participation
- **Off-chain voting**: More flexible, no transaction fees, but less decentralized and requires trust in vote aggregation

### Major Platforms
- **Tally**: Uses OpenZeppelin Governor contracts as gold standard for on-chain voting
- **Aragon**: Deploys DAOs with on-chain governance and ERC20Votes token minting
- **Snapshot X (2024)**: Uses storage proofs on Starknet enabling cross-chain voting without token transfers
- **DAOHaus**: Executes governance on EVM chains including cross-chain capabilities

### Voting Mechanisms
- **Token-weighted**: Voting power proportional to token holdings
- **Liquid Democracy**: Flexible delegation of voting power to trusted representatives
- **Multisig**: Multiple signatures required for proposal approval
- **Quadratic Voting**: Cost of votes increases quadratically to reduce plutocracy

### Funding Impact
Research shows DAOs with off-chain voting raise 87% less funding, suggesting investors prefer on-chain governance for its security and transparency.

