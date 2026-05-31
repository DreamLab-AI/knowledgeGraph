- ### Definition
  - UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the locking script attached to an output, typically by providing a valid signature. The model contrasts with the account-based approach used by Ethereum and supports straightforward parallel validation and privacy techniques.

- ### Semantic Classification
  - owl-class:: bc:UTXO
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Cardano]]
  - requires:: [[Cryptographic Hash Function]], [[Digital Signature]]
  - enables:: [[Bitcoin]]

- ### Content
  - In the UTXO model the global state is the set of all outputs that have been created but not yet spent. A wallet's balance is not stored directly; it is the sum of the unspent outputs that the wallet can unlock. Spending consumes whole outputs as inputs and produces new outputs, with any difference returned as change to the spender.
  - Each output carries a locking condition, often a script requiring a signature from a particular key, and an input must supply data that satisfies it. Because outputs are independent, transactions that touch disjoint sets of outputs can be validated in parallel, and the model avoids certain ordering issues present in account-based systems.
  - The UTXO approach originates with Bitcoin and is also used, in extended forms, by chains such as Cardano, whose EUTXO model attaches arbitrary data and scripts to outputs. It contrasts with the account and balance model of Ethereum, and the two designs imply different trade-offs in programmability, concurrency and privacy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z