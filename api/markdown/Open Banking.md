Open Banking is a regulatory and technical framework that allows authorised third-party providers to access customer banking data and initiate payments through secure application programming interfaces, subject to explicit customer consent. It shifts control of financial data from incumbent banks to the account holder, who may grant fine-grained, revocable permissions. The model underpins regulated data sharing regimes such as the EU's PSD2 and the UK's Open Banking Standard, fostering competition and new financial products.

### Overview

- Open Banking emerged from regulatory mandates designed to break the data monopoly of incumbent banks and stimulate competition.
- The EU Revised Payment Services Directive (PSD2) and the UK Open Banking Standard are the canonical regimes, each defining authorisation, security, and data-sharing obligations.
- Banks expose standardised programmatic interfaces; licensed Account Information Service Providers and Payment Initiation Service Providers consume them.
- The architecture decouples the service layer from the data layer, allowing aggregators and budgeting tools to operate across multiple institutions.

### Key aspects

- Strong Customer Authentication binds every sensitive action to a verified identity, typically via multi-factor methods.
- Consent is explicit, scoped, time-limited, and auditable, with the holder able to revoke access at any time.
- API standardisation ensures that a third party can integrate once and reach many banks consistently.
- Liability and dispute-resolution rules are defined by the governing regulator rather than bilateral contracts.

### Applications

- Account aggregation dashboards that consolidate balances across providers.
- Payment initiation that bypasses card networks for lower-cost transfers.
- Affordability and credit-decisioning tools that read transaction history with consent.
- Embedded finance, where non-bank platforms offer banking features through licensed partners.

### Provenance

