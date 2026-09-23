
A locking script (also called scriptPubKey or an output script) is the predicate attached to a transaction output in UTXO-based blockchains that specifies the conditions under which that output may later be spent. To redeem the output, a spending transaction must supply an unlocking script whose combination with the locking script evaluates to true. Locking scripts encode spending policies ranging from a single signature to multi-signature, time locks and arbitrary smart-contract logic.

- ### Overview
  - In the UTXO model every coin is held in an unspent output guarded by a locking script. When a wallet wishes to spend it, the new transaction references that output and provides an unlocking script; the network concatenates the two and runs them on a stack-based virtual machine. If evaluation leaves a true value on the stack and no failure occurs, the spend is authorised. Locking scripts thereby decouple the conditions of ownership from the act of spending, enabling everything from simple pay-to-public-key-hash to escrow and conditional payments.
- ### Mechanisms
  - Predicate semantics: the script defines a boolean condition over the supplied unlocking data.
  - Standard templates such as pay-to-public-key-hash and pay-to-script-hash for common spending policies.
  - Multi-signature and threshold conditions requiring several keys to authorise a spend.
  - Time locks and hash locks enabling conditional and atomic-swap style payments.
  - Stack-based evaluation against a deliberately constrained, non-Turing-complete scripting language.
- ### Applications
  - Securing bitcoin outputs with single- and multi-signature ownership.
  - Escrow and dispute-resolution arrangements via multi-party scripts.
  - Payment channels and atomic swaps built on hash-time-locked contracts.
  - Constraining custody policies for institutional wallets and treasuries.
- ### Provenance

