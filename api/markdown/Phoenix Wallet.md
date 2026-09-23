
Phoenix is a non-custodial Bitcoin Lightning wallet developed by ACINQ, the team behind the Eclair implementation, that automates channel management so that users experience Lightning payments without manually opening or balancing channels. It keeps users in self-custody of their keys while abstracting liquidity provisioning, on-the-fly channel creation, and fee handling, making the Lightning Network accessible to non-technical mobile users.

- [[Phoenix Wallet]] is a non-custodial Bitcoin [[Lightning Network]] wallet by [[ACINQ]] that automates channel management. Built on the [[Eclair]] implementation, it keeps users in [[Self-Custody]] while abstracting away Lightning's operational complexity for [[Bitcoin]] payments.
- ### Overview
- Phoenix targets the usability gap that has historically kept Lightning out of reach for ordinary users. Rather than asking users to open, fund, and rebalance channels, it provisions liquidity automatically and creates channels on the fly when a payment requires it.
- Because it is a [[Non-Custodial Wallet]], the user always controls the private keys; the wallet handles the Lightning mechanics but never takes custody of funds.
- ### Key aspects
- Automated channel opening and liquidity management remove manual node operation.
- Self-custodial key handling keeps funds under user control.
- Native [[Lightning Network]] payments with on-chain fallback for funding and closing.
- Built and maintained by [[ACINQ]] using their [[Eclair]] node software.
- ### Applications
- Everyday low-value Bitcoin payments over Lightning from a mobile device.
- Onboarding non-technical users to self-custodial Lightning.
- Receiving Lightning payments without running a personal node.
- ### Provenance

