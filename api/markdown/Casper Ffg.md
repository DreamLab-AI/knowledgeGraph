
Casper FFG (the Friendly Finality Gadget) is a proof-of-stake finality mechanism that overlays a checkpoint-based voting protocol on an underlying block proposal chain. Validators stake deposits and vote in two rounds to justify and then finalise checkpoints, after which reverting them would require destroying at least one third of the total stake. It introduces economic finality with slashing penalties for equivocation, providing strong accountability without requiring a full consensus overhaul.

- ### Overview
  - Casper FFG, the Friendly Finality Gadget, finalises checkpoints rather than every block, sitting atop a separate fork-choice rule.
  - Validators cast votes that justify a checkpoint and then finalise it once a supermajority links two consecutive justified checkpoints.
  - Reverting a finalised checkpoint would require an attacker controlling at least one third of total stake to be provably destroyed.
  - This delivers economic finality: dishonest validators that equivocate lose their deposits through slashing.
- ### Mechanisms
  - Checkpoint epochs: the chain is partitioned into epochs whose boundary blocks are checkpoints.
  - Two-phase voting: justification followed by finalisation across linked supermajority votes.
  - Stake-weighted thresholds: a two-thirds supermajority of staked value drives decisions.
  - Slashing conditions: penalties for double voting and surround votes that violate the protocol.
  - Accountable safety: violations are attributable to specific validators and their deposits.
- ### Applications
  - Providing economic finality for proof-of-stake blockchains such as Ethereum.
  - Strengthening the security guarantees of validator-driven consensus systems.
  - Discouraging equivocation through slashing-backed accountability.
  - Serving as a reference design for hybrid finality gadgets over existing chains.
- ### Provenance

