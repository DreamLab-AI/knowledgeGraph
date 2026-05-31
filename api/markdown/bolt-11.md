- ### Definition
  - BOLT11 is the Lightning Network specification for the invoice format used to request a single payment. It encodes payment details into a string that the payer scans or pastes.

- ### Semantic Classification
  - owl-class:: blockchain:BOLT11
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[BOLT]]
  - bridges-to:: [[BOLT12]]
  - requires:: [[BOLT]]
  - enables:: [[Lightning]]

- ### Content
  - BOLT11 defines how a Lightning invoice is encoded, including the amount, a payment hash, a description, and routing hints. The invoice is typically a single-use request that the payer uses to send a specific payment.
  - Wallets generate and parse BOLT11 invoices to receive and send payments. The format is widely supported across implementations, and its single-use nature led to the later BOLT12 offers format for reusable requests.

- ### Provenance
  - sources:: [[https://github.com/lightning/bolts/blob/master/11-payment-encoding.md]], [[https://www.bolt11.org]]
  - migration-date:: 2026-05-29T00:00:00Z