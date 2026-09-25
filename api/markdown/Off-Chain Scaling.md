Off-chain scaling is a class of blockchain scalability techniques that move transaction execution and state off the main chain while retaining its security as a settlement and dispute-resolution layer. By processing many interactions outside the base layer and committing only summaries or final balances on-chain, it greatly increases throughput and lowers fees. Examples include payment and state channels and various layer-2 constructions.

### Content

- Parties transact by exchanging signed state updates off-chain and only settle on-chain to open, close, or dispute a channel, so the base layer arbitrates rather than processes every interaction. The approach trades constant-latency, low-cost interaction for capital lock-up in channels and the requirement that participants stay online or delegate watchtowers to contest fraud.

