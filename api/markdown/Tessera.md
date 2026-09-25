Tessera is a private-transaction manager used with the Quorum enterprise Ethereum client to store and exchange encrypted payloads between authorised parties off the main chain. It enables confidential smart-contract state by keeping private data outside public blocks while anchoring only encrypted hashes on-chain. Tessera is a key component for enterprises that need permissioned, privacy-preserving distributed-ledger deployments.

### Content

- Each Quorum node pairs with a Tessera instance that encrypts private transaction payloads, distributes them only to the relevant participants, and stores them off-chain, while the public ledger records just a hash. This separation lets a consortium share a common chain yet keep sensitive contract data visible only to authorised members. Tessera supports pluggable key vaults and enclave-based encryption, succeeding the earlier Constellation manager in production permissioned networks.

