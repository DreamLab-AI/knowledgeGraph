A transaction output is a component of a blockchain transaction that specifies an amount of value and the conditions under which it can later be spent. In UTXO-based systems each output records a value and a locking script that defines who may consume it, and an unspent output becomes the input to a future transaction. Transaction outputs are the fundamental units of ownership and value transfer in such ledgers, and the set of all unspent outputs constitutes the current state of holdings.

### Overview

- In UTXO-based blockchains such as [[Bitcoin]], value is not tracked as account balances but as a collection of discrete outputs.
- Each transaction consumes existing unspent outputs as inputs and creates new outputs, transferring ownership in the process.
- The set of all unspent transaction outputs at any moment represents the entire spendable state of the ledger.
- Outputs encode spending conditions through scripts, allowing simple payments as well as more complex conditional transfers.

### Key aspects

- Value field: the precise amount of the asset assigned to the output.
- Locking script: the predicate that must be satisfied to spend the output.
- Indivisibility on spend: an output is consumed in full, with change returned as a new output.
- Unspent set: outputs not yet consumed form the UTXO set used to validate new transactions.
- Statelessness: ownership is derived from outputs rather than stored balances.

### Mechanisms

- A spender provides an unlocking script that satisfies a referenced output's locking script.
- Nodes verify that referenced outputs exist, are unspent, and that scripts validate, preventing double spending.
- Newly created outputs are added to the unspent set once the containing transaction is confirmed.

### Applications

- Recording value transfer in [[Bitcoin]] and other UTXO ledgers.
- Maintaining the [[UTXO]] set used for fast, parallelisable validation.
- Encoding conditional payments and contracts through scripting.
- Preventing [[Double Spending]] by enforcing single consumption of each output.

### Provenance

