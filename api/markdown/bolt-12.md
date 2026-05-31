- ### Definition
  - BOLT12 is a Lightning Network specification that defines offers, a reusable payment request format that improves on single-use invoices. It supports recurring and static payment requests.

- ### Semantic Classification
  - owl-class:: blockchain:BOLT12
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[BOLT]]
  - bridges-to:: [[BOLT11]]
  - requires:: [[BOLT]]
  - enables:: [[Phoenix]]

- ### Content
  - BOLT12 introduces offers, which are reusable payment requests that a payer can fetch an invoice from at the time of payment. This avoids the single-use limitation of BOLT11 invoices and supports static codes for receiving payments.
  - The format also enables features such as recurring payments and improved privacy in how invoices are requested. It is supported by some Lightning implementations and wallets as the protocol adopts it.

- ### Provenance
  - sources:: [[https://github.com/lightning/bolts/blob/master/12-offer-encoding.md]], [[https://bolt12.org]]
  - migration-date:: 2026-05-29T00:00:00Z