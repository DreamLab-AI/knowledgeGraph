- ### Definition
  - The Data Governance Domain classifies concepts concerning the policies, roles and controls that govern data as an organisational asset. It covers ownership, quality, lineage and the rules for access, retention and use. As a top-level subject axis it establishes how data is managed responsibly across systems and throughout its lifecycle.

- ### Semantic Classification
  - owl-class:: dgov:DataGovernanceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Privacy Domain]], [[Regulatory Compliance Domain]]
  - has-part:: [[Data Ownership]], [[Data Quality]], [[Data Lineage]], [[Data Catalogue]], [[Retention Policy]]
  - requires:: [[Governance Domain]], [[Data Management Domain]]
  - enables:: [[Trusted Data]], [[Regulatory Reporting]]

- ### Content
  - Data governance establishes accountability for data, assigning ownership and stewardship so that decisions about data have a responsible party. It defines policies for classification, access, retention and disposal, and the controls that enforce them. The objective is data that is trustworthy, consistent and used in accordance with obligations.
  - The domain depends on visibility into where data originates, how it is transformed and where it flows, captured as lineage and recorded in catalogues. Quality management sets measurable expectations for accuracy, completeness and timeliness and monitors conformance. Policies link data handling to legal and contractual requirements.
  - Data governance bridges to privacy and regulatory compliance, which impose specific constraints on personal and regulated data. It requires the wider Governance Domain for legitimate policy-making and the Data Management Domain for the technical means of enforcement.

- ### Provenance
  - sources:: [[DAMA-DMBOK]]
  - migration-date:: 2026-05-29T00:00:00Z