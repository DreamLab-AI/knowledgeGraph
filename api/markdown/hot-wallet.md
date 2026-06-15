- ### Definition
  - A hot wallet is a [[Crypto Wallet]] that keeps its [[Private Key]] material on an internet-connected device or hosted service, allowing transactions to be signed and broadcast quickly. It sits within the broader practice of [[Digital Asset Custody]] and contrasts sharply with [[Cold Storage]].
  - The trade-off is convenience versus exposure: connectivity that enables instant transfers is also the channel through which keys can be stolen.

- ### Overview
  - Hot wallets are the workhorses of everyday crypto activity, powering exchange order flow, payment acceptance, and interaction with decentralised applications. They are optimised for availability rather than maximum security.
  - **Why it matters:** the placement of funds between hot and cold tiers is the central operational-security decision in custody. Misjudging it has led to significant exchange losses.
  - **How it works:**
    - Keys are generated from a [[Seed Phrase]] and stored on a connected host, server, or HSM.
    - When a transfer is needed, the wallet signs the transaction locally and broadcasts it to the network.
    - [[Key Management]] controls, rate limits, and withdrawal allow-lists constrain abuse.
    - Surplus balances are periodically swept to [[Cold Storage]] to cap exposure.

- ### Key aspects
  - **Connectivity** — keys reside online, enabling automated, low-latency signing.
  - **Exposure profile** — vulnerable to malware, server compromise, and supply-chain attacks; mitigated by hardware security modules and segregation.
  - **Balance policy** — only operationally necessary funds are held; the remainder is moved to cold tiers.
  - **Operational tooling** — withdrawal allow-lists, multi-approval workflows, and anomaly monitoring reduce risk.
  - **Recoverability** — backup of seed material and disciplined [[Key Management]] are essential.

- ### Applications
  - Exchange hot wallets that settle customer withdrawals and internal transfers.
  - Merchant and payment-processor wallets accepting crypto in real time.
  - User wallets interacting with [[DeFi]] protocols and decentralised applications.
  - Treasury operations holding a working balance separate from long-term reserves.

- ### Relationships
  - subClassOf:: [[Crypto Wallet]]
  - partOf:: [[Digital Asset Custody]]
  - hasPart:: [[Private Key]]
  - hasPart:: [[Key Management]]
  - contrastsWith:: [[Cold Storage]]
  - contrastsWith:: [[Hardware Wallet]]
  - uses:: [[Seed Phrase]]
  - supports:: [[Cryptocurrency Exchange]]
  - supports:: [[DeFi]]
  - requires:: [[Key Management]]
  - relatedTo:: [[Custodial Wallet]]
  - relatedTo:: [[Multisig Wallet]]
  - relatedTo:: [[Digital Wallet]]

- ### Provenance
  - updated:: 2026-06-15