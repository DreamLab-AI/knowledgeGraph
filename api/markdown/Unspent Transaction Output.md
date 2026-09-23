
An Unspent Transaction Output (UTXO) is a discrete amount of cryptocurrency that has been received by an address and not yet spent, forming the fundamental accounting unit in UTXO-based blockchains such as Bitcoin. Each transaction consumes one or more existing UTXOs as inputs and creates new UTXOs as outputs, with the global set of all UTXOs representing the current ledger state. Validating a transaction requires confirming that its referenced inputs exist in the UTXO set and have not already been spent, which is central to preventing double spending.

- ### Overview
  - The UTXO set is the authoritative record of who owns what on the chain.
  - Inputs reference prior outputs; outputs become new spendable UTXOs.
  - Nodes maintain the UTXO set in memory for fast validation.
  - UTXOs contrast with the account-balance model used by chains like Ethereum.
- ### Mechanisms
  - Each UTXO carries a value and a locking script defining spend conditions.
  - Inputs unlock UTXOs by satisfying their script with signatures.
  - Change is returned as a new UTXO back to the spender.
  - Coin selection algorithms choose which UTXOs to consume.
  - Validation rejects transactions referencing non-existent or spent outputs.
- ### Applications
  - Bitcoin and Bitcoin-derived ledger accounting.
  - Lightweight wallet balance computation.
  - Privacy techniques such as coin mixing operating over discrete outputs.
  - Parallel transaction validation enabled by independent UTXOs.
- ### Provenance

