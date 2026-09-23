
A Streaming Payment is a continuous, real-time value transfer mechanism enabled by programmable money protocols — particularly Layer 2 payment channel networks such as the Bitcoin Lightning Network — whereby funds flow incrementally over time in proportion to ongoing service consumption rather than in discrete lump-sum transactions. Streaming payments enable pay-per-second, pay-per-byte, or pay-per-computation billing models that align payment precisely with value delivered, eliminating invoicing cycles and reducing counterparty risk. They are foundational to micropayment-based business models for media, APIs, AI inference, bandwidth, and real-time data feeds.

- ### Overview
  - Streaming payments emerged from the Bitcoin Lightning Network's ability to hold open payment channels and route arbitrary sub-satoshi value flows.
  - Interledger Protocol (ILP) generalised the concept across currencies and blockchains for web monetisation.
  - Projects such as Sablier and Superfluid implemented streaming payments on EVM chains using time-weighted token streams.
  - The Web Monetization API (W3C proposal) aimed to integrate streaming payments natively into browsers for creator monetisation.
  - Machine-to-machine (M2M) payment scenarios — IoT sensors paying for data or compute — represent a long-term application horizon.

- ### Key aspects
  - Payment channels lock funds in a 2-of-2 multisig; balances update off-chain in real time without blockchain settlement per transaction.
  - Hash Time-Locked Contracts (HTLCs) secure routed payments across multi-hop channel paths.
  - Granularity: Lightning enables millisatoshi-level precision (1 satoshi = 1,000 millisatoshis).
  - Channel liquidity management is a practical constraint — inbound and outbound capacity must be maintained.
  - EVM streaming protocols (Superfluid) use super-token wrappers with continuously updated balances stored on-chain.

- ### Mechanisms
  - Lightning channel: Alice and Bob sign commitment transactions off-chain; only open and close transactions hit the blockchain.
  - Routing: payments traverse multi-hop paths via HTLC chains; nodes earn routing fees.
  - Superfluid: real-time balance = initial_balance + (flow_rate × elapsed_time); any party can settle on-chain at any moment.
  - ILP: packet-based value transfer using conditional payments with cryptographic fulfilment.

- ### Applications
  - Pay-per-minute podcast and video streaming replacing monthly subscriptions.
  - API metering where callers pay per request to AI inference or data endpoints.
  - Bandwidth markets where routers receive streaming micropayments for relayed traffic.
  - Salary streaming: employees receive wages proportional to hours worked in real time.
  - IoT device-to-device payments for sensor data and compute resources.

- ### Provenance

