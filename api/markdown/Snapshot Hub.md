
Snapshot Hub is the backend service of the Snapshot off-chain governance platform that stores proposals, collects signed votes, and computes results using token balances read at a chosen block height. Votes are signed messages that incur no gas, while the hub indexes and tallies them according to a configurable voting strategy. It lets DAOs run gasless, verifiable governance while final execution remains optional and off-chain.

- ### Content
  - The hub reads token balances at a designated [[Snapshot Block]], applies a configurable voting strategy, and tallies cryptographically signed off-chain messages so participation costs no gas. Results are verifiable by anyone, but execution of a passed proposal is not automatic and typically requires a separate on-chain transaction or a bridge such as an execution module.

