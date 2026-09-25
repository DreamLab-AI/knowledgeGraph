GoQuorum is an open-source, enterprise-focused Ethereum client originally developed by J.P. Morgan and forked from go-ethereum to support permissioned consortium networks. It adds private transactions and contracts, permissioning, and pluggable consensus algorithms such as IBFT, QBFT, and Raft suited to known-validator settings. It is widely used to build private and consortium blockchains for financial and supply-chain applications.

### Content

- GoQuorum extends go-ethereum with a privacy manager (Tessera) that keeps the payloads of private transactions off the public state, sharing only hashes on-chain. It replaces proof-of-work with Byzantine-fault-tolerant consensus such as QBFT/IBFT or crash-fault-tolerant Raft, appropriate for vetted validator sets. Account- and node-level permissioning controls who may join the network and submit transactions.

