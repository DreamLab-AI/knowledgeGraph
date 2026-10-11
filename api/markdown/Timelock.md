A timelock is a cryptographic or smart-contract mechanism that prevents a transaction, function call, or asset transfer from executing until a specified block height or Unix timestamp has been reached. Timelocks enforce temporal constraints on blockchain operations, separating the proposal of an action from its execution to allow inspection, challenge, or cancellation during a mandatory delay window.

### Content

- The timelock concept predates blockchain, appearing in cryptography literature as time-release encryption and in traditional finance as lock-up periods. Bitcoin's `nLockTime` field (enabled from genesis, 2009) and `OP_CHECKLOCKTIMEVERIFY` opcode (BIP 65, 2015) formalised block-height and timestamp-based locking at the protocol level. Ethereum's smart contract model allowed arbitrary timelock logic, and OpenZeppelin's `TimelockController` contract (introduced circa 2020) became a widely audited reference implementation used by dozens of DeFi protocols.
- A timelock operates by maintaining a queue of pending operations, each identified by a hash of its target, calldata, value, and scheduled execution timestamp. The `schedule` function places an operation in the queue with a `minDelay` added to the current block timestamp. The `execute` function only succeeds once `block.timestamp >= operation.timestamp`. An `cancel` function allows authorised roles to remove operations before execution. The delay window is the period during which token holders, security researchers, or governance participants can scrutinise an impending change and, if necessary, exit the system or coordinate a veto.
- Timelocks matter because on-chain protocols are immutable once deployed; an unreviewed upgrade could introduce exploits or rug mechanisms. By mandating a delay — often 24 hours to 14 days for major DeFi protocols — timelocks transform governance from a single-block surprise into a transparent, auditable process. They are used in DAO treasuries, protocol upgrade pipelines, token vesting contracts, and cross-chain atomic swaps. The 2022 Tornado Cash sanctions debate highlighted how timelocks also interact with legal and regulatory timelines.
- As of 2024–2025, timelocks are considered mandatory security hygiene for any protocol managing significant value. EIP-6372 standardised clock modes for timelocks in governance tokens. Optimistic governance designs now layer timelocks with veto mechanisms so that a supermajority can accelerate or cancel delays. Multi-party timelocks with threshold signatures are emerging to distribute cancellation authority and reduce single-admin risk, while layer-2 rollups adopt timelocks for fraud-proof windows (the 7-day Arbitrum and Optimism challenge periods are a canonical example).

## Merged from Time Lock (needs reconciliation)
A time lock is a cryptographic and protocol-level constraint that prevents the spending or execution of funds, transactions, or governance actions until a specified time or block height has been reached. Implemented on blockchains through absolute and relative locktime fields and dedicated script opcodes, time locks enforce delayed settlement, contestation windows, and staged execution without trusting a third party. They are foundational to payment channels, atomic swaps, vesting schedules, and the safety delays in DAO governance, where they give participants time to react before irreversible actions occur.

### Overview

- Time locks make time a first-class condition in spending rules: a transaction or branch becomes valid only once a deadline, expressed as a timestamp or block count, has passed.
- Absolute locks fix a point in chain time; relative locks specify a delay measured from when an output was confirmed, enabling per-output maturation rules.
- Because enforcement is by [[Consensus]] rather than by any custodian, time locks provide trust-minimised guarantees that contracts cannot be unwound prematurely.
- They compose with hashlocks and signatures to build conditional, multi-party protocols whose safety depends on giving honest parties a window to respond.

### Mechanisms

#### Absolute and relative locktime

- Transaction-level locktime and sequence fields gate validity against block height or median time.
- Relative locks (sequence-based) mature outputs a fixed interval after confirmation.

#### Script opcodes

- Output-level opcodes assert that the spending transaction's locktime meets a threshold, embedding the constraint in [[Bitcoin Script]] conditions.
- These let a single output offer alternative spend paths active at different times.

#### Hashed timelock contracts

- Combining a hashlock with a [[Time Lock]] yields a [[Hashed Timelock Contract]]: redeem with a preimage before expiry, or refund after.
- This primitive powers conditional, cross-party transfers in payment channels.

#### Governance timelocks

- Delaying execution of passed [[Decentralised Autonomous Organisation]] proposals gives stakeholders a window to exit or contest before changes take effect, contrasting with the keys-only control of [[Multisignature]].

### Applications

#### Payment channels

- The [[Lightning Network]] uses relative timelocks to enforce dispute windows for revoked channel states.

#### Atomic swaps

- [[Atomic Swap]]s rely on hashed timelocks so each party can reclaim funds if the counterparty aborts.

#### Vesting and governance safety

- Token vesting cliffs and governance execution delays protect against rushed or malicious actions.

### Provenance

