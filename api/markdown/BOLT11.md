
BOLT11 is the Lightning Network specification for the invoice format used to request a single payment. It encodes payment amount, payment hash, description, expiry, and optional routing hints into a bech32-encoded string that the payer scans or pastes to initiate an off-chain payment.

- ### Semantic Classification

- ### Content
  - BOLT11 defines how a Lightning invoice is encoded, including the amount, a payment hash, a description, and routing hints. The invoice is typically a single-use request that the payer uses to send a specific payment.
  - Wallets generate and parse BOLT11 invoices to receive and send payments. The format is widely supported across implementations, and its single-use nature led to the later BOLT12 offers format for reusable requests.

- ### Provenance

