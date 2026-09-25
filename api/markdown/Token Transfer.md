A token transfer is the operation of moving ownership of a fungible or non-fungible blockchain token from one account to another, recorded as a state change on a distributed ledger. On smart-contract platforms it is typically realised by invoking a transfer function defined by a token standard such as ERC-20, which debits the sender's balance, credits the recipient, and emits an event. Token transfers are the elementary settlement primitive underlying payments, trading, and decentralised finance.

### Overview

- Expresses value movement as a deterministic, atomic state transition on the ledger.
- Inherits the security and finality guarantees of the underlying consensus mechanism.
- Standardised interfaces make transfers composable across wallets, exchanges, and protocols.

### Mechanisms

- Balance bookkeeping: a contract decrements the sender and increments the recipient.
- Allowance and approval flows enabling third-party transfers on a holder's behalf.
- Event emission so off-chain indexers and applications can observe transfers.
- Gas accounting that meters and prices the computation and storage involved.
- Atomicity ensuring a transfer either fully succeeds or reverts with no partial state.

### Applications

- Peer-to-peer payments and remittances in cryptocurrency.
- Order settlement on decentralised exchanges and automated market makers.
- Collateral movement and liquidations in DeFi lending protocols.
- Distribution of governance and reward tokens to participants.

### Provenance

