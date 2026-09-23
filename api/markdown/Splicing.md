
Splicing is a Lightning Network operation that resizes an existing payment channel by adding or removing on-chain funds without closing and reopening it, preserving the channel's state and routing history. A splice-in increases capacity by committing additional bitcoin, while a splice-out withdraws funds to an on-chain address, both executed through a single funding transaction. This keeps the channel continuously available and reduces the on-chain cost and downtime of channel management.

- ### Overview
  - Splicing improves Lightning channel liquidity management by allowing capacity changes in place. Without it, a node operator wanting more or less capacity must close a channel and open a new one, incurring two on-chain transactions and a period of unavailability. Splicing merges the change into one transaction while the channel remains usable, smoothing the boundary between on-chain and off-chain funds.
- ### Mechanisms
  - Splice-in commits additional on-chain bitcoin to expand channel capacity
  - Splice-out withdraws channel funds to an on-chain address
  - A single funding transaction replaces the close-and-reopen cycle
  - Channel state and routing history are preserved across the resize
  - The channel remains usable while the splice transaction confirms
- ### Applications
  - Rebalancing and resizing Lightning channels without downtime
  - Moving funds between on-chain and channel liquidity efficiently
  - Reducing on-chain fees and disruption of channel management
  - Supporting flexible liquidity provision for routing nodes
- ### Provenance

