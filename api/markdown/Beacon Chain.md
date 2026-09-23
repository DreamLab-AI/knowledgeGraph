
The Beacon Chain is the proof-of-stake consensus backbone introduced to Ethereum that coordinates validators, manages staking, and finalises blocks. It organises time into slots and epochs, assigns block-proposal and attestation duties, and applies a finality gadget that locks in the canonical chain. The Beacon Chain decouples consensus from execution, providing the security and randomness that the broader sharded and execution layers build upon.

- ### Overview
  - The Beacon Chain replaced Ethereum's original proof-of-work consensus with a proof-of-stake protocol driven by a large set of bonded validators.
  - It structures consensus around slots (fixed time windows for one block) and epochs (groups of slots) within which validators propose and attest.
  - A two-stage finality mechanism justifies and then finalises checkpoints, making reverting finalised blocks economically prohibitive through slashing.
- ### Key aspects
  - Validator registry and staking that bond capital as security against misbehaviour.
  - Slot and epoch scheduling that assigns proposal and attestation duties pseudo-randomly.
  - Attestation aggregation by which validators vote on the head and checkpoints of the chain.
  - Finality gadget that justifies and finalises checkpoints, backed by slashing penalties.
- ### Applications
  - Securing Ethereum's transition from proof-of-work to proof-of-stake.
  - Coordinating validator duties and rewards across the staking ecosystem.
  - Providing consensus and randomness for sharding and rollup-centric scaling roadmaps.
- ### Provenance

