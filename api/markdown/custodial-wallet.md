- ### Definition
  - A [[Custodial Wallet]] is a [[Digital Wallet]] in which a [[Trusted Third Party]] holds the user's private keys, trading self-sovereignty for convenience and [[Account Recovery]]. It is common at a [[Centralised Exchange]] and contrasts with the [[Non-Custodial Wallet]].

- ### Overview
  - In a custodial arrangement the user interacts with an account abstraction — a balance recorded in the custodian's internal ledger — rather than signing transactions with keys they control. The custodian aggregates many users' assets, often in omnibus accounts spanning hot wallets for liquidity and cold storage for the bulk of reserves, and executes on-chain movements on the user's behalf.
  - This model lowers the barrier to entry: passwords can be reset, support can assist with mistakes, and integration with fiat on-ramps and trading is seamless. The cost is counterparty risk — captured by the maxim "not your keys, not your coins" — since users depend entirely on the custodian's security practices, solvency, and integrity.

- ### Key aspects
  - Private keys held and controlled by a third party.
  - Account-based access with recoverable credentials.
  - Pooled storage across hot and cold infrastructure.
  - Subject to KYC, asset-segregation, and proof-of-reserves expectations.

- ### Applications
  - Centralised exchange accounts holding user trading balances.
  - Institutional custody services for funds and corporations.
  - Consumer apps abstracting key management for mainstream users.

- ### Relationships
  - subClassOf:: [[Digital Wallet]]
  - hasPart:: [[Omnibus Account]]
  - partOf:: [[Centralised Exchange]]
  - uses:: [[Hot Wallet]]
  - uses:: [[Cold Storage]]
  - dependsOn:: [[Trusted Third Party]]
  - requires:: [[Know Your Customer]]
  - enables:: [[Account Recovery]]
  - supports:: [[Institutional Custody]]
  - implements:: [[Proof of Reserves]]
  - contrastsWith:: [[Non-Custodial Wallet]]
  - contrastsWith:: [[Multi-Signature Wallet]]
  - relatedTo:: [[Counterparty Risk]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation