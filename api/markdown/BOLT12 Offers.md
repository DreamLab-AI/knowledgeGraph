
BOLT12 Offers is a Lightning Network specification defining reusable, static payment requests called offers, improving on single-use BOLT11 invoices. An offer is a long-lived, shareable code from which payers fetch a fresh invoice on demand via onion messages, enabling recurring payments, refunds, and donation links without a server issuing each invoice. It also improves privacy through blinded paths that hide the recipient's node identity.

- ### Content
  - Unlike BOLT11 invoices, an offer is a durable code that payers use to request a fresh invoice through onion messages, supporting recurring and refundable payments. Blinded paths conceal the destination node, so offers can be published openly without revealing where funds ultimately settle.

