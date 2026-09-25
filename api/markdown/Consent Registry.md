A consent registry is a system of record that stores, versions, and serves the consent decisions data subjects have granted or withdrawn for processing their personal data. It provides an auditable, queryable source of truth that data controllers and processors consult before performing a processing activity. It is a central component of privacy-compliance and consent-management architectures.

### Content

- The registry records purpose, scope, timestamp, and version of each consent event, supporting withdrawal, expiry, and proof-of-consent queries demanded by regulations such as GDPR. Downstream services check the registry before processing, and consent tokens or receipts can reference registry entries to bind a transaction to a verified permission.

