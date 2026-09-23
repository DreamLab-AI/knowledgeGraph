
A Bitcoin transaction is a signed data structure that transfers value on the Bitcoin network by consuming unspent transaction outputs (UTXOs) and creating new ones. Each transaction references prior outputs, provides cryptographic signatures satisfying their spending conditions, and specifies new outputs locked to recipient scripts. Validated transactions are broadcast to the mempool and ultimately confirmed when included in a mined block.

- ### Overview
  - A Bitcoin transaction expresses value transfer through the UTXO model rather than account balances. Inputs reference and unlock previous outputs using script-satisfying signatures, and outputs encumber funds with new locking scripts that future spenders must satisfy. Fees are the difference between input and output value and incentivise miners to include the transaction. Once confirmed in a block and buried under further blocks, the transfer becomes economically irreversible.
- ### Key aspects
  - UTXO model of inputs consuming and outputs creating spendable value
  - Locking and unlocking scripts enforcing spending conditions
  - Digital signatures proving ownership of referenced outputs
  - Transaction fees prioritising mempool inclusion
  - Confirmation and finality through proof-of-work mining
- ### Applications
  - Peer-to-peer value transfer and payments
  - Layer-2 channel funding for the Lightning Network
  - Asset issuance via protocols such as RGB and Runes
  - Multisignature custody and treasury operations
  - Timestamping and data anchoring
- ### Provenance

