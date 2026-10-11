A Streaming Payment is a continuous, real-time value transfer mechanism enabled by programmable money protocols — particularly Layer 2 payment channel networks such as the Bitcoin Lightning Network — whereby funds flow incrementally over time in proportion to ongoing service consumption rather than in discrete lump-sum transactions. Streaming payments enable pay-per-second, pay-per-byte, or pay-per-computation billing models that align payment precisely with value delivered, eliminating invoicing cycles and reducing counterparty risk. They are foundational to micropayment-based business models for media, APIs, AI inference, bandwidth, and real-time data feeds.

### Overview

- Streaming payments emerged from the Bitcoin Lightning Network's ability to hold open payment channels and route arbitrary sub-satoshi value flows.
- Interledger Protocol (ILP) generalised the concept across currencies and blockchains for web monetisation.
- Projects such as Sablier and Superfluid implemented streaming payments on EVM chains using time-weighted token streams.
- The Web Monetization API (W3C proposal) aimed to integrate streaming payments natively into browsers for creator monetisation.
- Machine-to-machine (M2M) payment scenarios — IoT sensors paying for data or compute — represent a long-term application horizon.

### Key aspects

- Payment channels lock funds in a 2-of-2 multisig; balances update off-chain in real time without blockchain settlement per transaction.
- Hash Time-Locked Contracts (HTLCs) secure routed payments across multi-hop channel paths.
- Granularity: Lightning enables millisatoshi-level precision (1 satoshi = 1,000 millisatoshis).
- Channel liquidity management is a practical constraint — inbound and outbound capacity must be maintained.
- EVM streaming protocols (Superfluid) use super-token wrappers with continuously updated balances stored on-chain.

### Mechanisms

- Lightning channel: Alice and Bob sign commitment transactions off-chain; only open and close transactions hit the blockchain.
- Routing: payments traverse multi-hop paths via HTLC chains; nodes earn routing fees.
- Superfluid: real-time balance = initial_balance + (flow_rate × elapsed_time); any party can settle on-chain at any moment.
- ILP: packet-based value transfer using conditional payments with cryptographic fulfilment.

### Applications

- Pay-per-minute podcast and video streaming replacing monthly subscriptions.
- API metering where callers pay per request to AI inference or data endpoints.
- Bandwidth markets where routers receive streaming micropayments for relayed traffic.
- Salary streaming: employees receive wages proportional to hours worked in real time.
- IoT device-to-device payments for sensor data and compute resources.

### Provenance

## Merged from Streaming Payments (needs reconciliation)
Streaming payments are a payment model in which value flows continuously from payer to payee in real time, accruing per second or per block rather than in discrete lump sums. On programmable ledgers and payment channels this is implemented by smart contracts or channel updates that let a recipient withdraw the proportion earned at any moment. The model suits salaries, subscriptions, rentals, and machine-to-machine billing where settlement should track elapsed time or usage.

- [[Streaming Payments]] let value flow continuously from payer to payee in real time, a continuous-settlement form of [[Programmable Money]].
- They are implemented by a [[Smart Contract]] or a [[Payment Channel]] that lets the recipient withdraw the amount earned at any instant.
- Protocols such as [[Superfluid]] and [[Sablier]] popularised the pattern on-chain, while the [[Lightning Network]] enables comparable streaming via channels.

### Overview

- Instead of paying a salary or subscription as a periodic lump sum, streaming payments accrue value second by second, aligning cash flow with elapsed time or usage.
- On programmable ledgers a stream contract records a flow rate and start time; the withdrawable balance is computed on demand, so funds settle without per-tick transactions.
- Off-chain channels achieve a similar effect by exchanging signed balance updates, enabling high-frequency micropayments without on-chain congestion.

### Mechanisms

- Flow rate accrual: a per-second or per-block rate determines the recipient's claimable balance over time.
- Continuous withdrawal: recipients can claim accrued value at any point without waiting for a payout cycle.
- Channel updates: off-chain signed states stream value with on-chain settlement only at open and close.
- Stablecoin denomination: streams are often denominated in stablecoins to avoid volatility in payroll and subscriptions.

### Applications

- Real-time payroll and continuous salaries.
- Usage-based subscriptions, rentals, and SaaS billing.
- Machine-to-machine and pay-per-use micropayments.
- Vesting and continuous distribution of tokens.

### Provenance

