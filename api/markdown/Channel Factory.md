A channel factory is a Bitcoin Lightning Network scaling construction in which multiple participants share a single on-chain funding transaction (a multiparty channel) from which many off-chain payment channels can be opened, closed, and rebalanced without further on-chain transactions. By amortising one on-chain output across many channels, it reduces the on-chain footprint and cost of channel management. It matters because it improves the capital efficiency and scalability of layer-2 payments.

### Content

- Participants jointly fund a multisig output and use off-chain allocation transactions to create and adjust subchannels, settling on-chain only when the factory disbands or disputes arise. The design lowers per-channel on-chain cost and reduces blockchain load, at the cost of greater coordination and liveness requirements among members.

