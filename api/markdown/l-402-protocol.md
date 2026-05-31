- ### Definition
  - The specification defining how HTTP 402 responses, Lightning invoices, and macaroon tokens combine to authorise paid access to web resources.

- ### Semantic Classification
  - owl-class:: blockchain:L402Protocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[L402]]
  - bridges-to:: [[Authentication]]
  - requires:: [[Lightning Network]]
  - enables:: [[Micropayment]]

- ### Content
  - The protocol formalises the exchange in which a server returns a 402 status alongside an invoice and an incomplete authorisation token. After the client pays the invoice and obtains the payment preimage, it presents the completed token to gain access.
  - By binding access rights to a settled Lightning payment, the specification supports pay-per-request services and metered APIs. Macaroon caveats let issuers constrain the scope and lifetime of each token.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z