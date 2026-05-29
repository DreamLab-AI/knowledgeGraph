- ### Definition
  - ERC20Votes extends the ERC-20 token standard with checkpointed historical balances and vote delegation, letting governance contracts query an account's voting power at a past block to enable secure on-chain voting.

- ### Relationships
  - ERC20Votes Standard is a subclass of the [[ERC-20 Standard]] and uses [[Smart Contract]] logic to checkpoint balances. It enables [[DAO]] governance by providing manipulation-resistant voting power, and relates to [[ERC-20 Votes]] tokens and the [[Ethereum]] ecosystem in which the pattern is standardised.

- ### Content
  - On-chain governance needs a trustworthy measure of voting power, and the naive approach — counting an account's current token balance at vote time — is dangerously exploitable. An attacker could borrow a large balance via a flash loan, cast a vote, and repay within the same transaction, or transfer the same tokens between accounts to vote multiple times. ERC20Votes closes these vectors by anchoring voting power to historical state rather than the live balance.

  - The mechanism is checkpointing. Every time an account's balance or delegation changes, the contract records a checkpoint pairing the block number with the new value, building an append-only history of voting weight over time. A governance contract that opens a proposal records the proposal's snapshot block, and all votes are weighed by each account's checkpointed balance at that block — fixed in the past and therefore immune to manipulation occurring after voting begins.

  - Delegation is the second pillar. ERC20Votes separates token ownership from voting power: holders can delegate their voting weight to themselves or to a representative without transferring the tokens. This supports both direct participation and representative models where passive holders delegate to active, accountable delegates, and it means voting power only counts once an account has explicitly delegated, an intentional design choice that the implementing libraries document carefully.

  - Because correct, secure implementation is subtle, the pattern is provided as audited, reusable components in libraries such as OpenZeppelin's, and it integrates directly with companion governor contracts that manage proposals, voting periods, quorums, and execution. This standardisation has made ERC20Votes the default substrate for DAO governance on Ethereum and compatible chains, underpinning the treasuries and protocol-parameter decisions of many of the largest decentralised organisations.