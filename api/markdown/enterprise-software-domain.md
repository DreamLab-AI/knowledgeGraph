- ### Definition
  - The Enterprise Software Domain classifies concepts for applications and platforms that support the operations of organisations at scale, including resource planning, customer management, and integration middleware. It covers architecture patterns, data management, and the governance that large deployments require. As a top-level subject classification, it scopes business-grade software systems rather than the underlying infrastructure or the networks they run on.

- ### Semantic Classification
  - owl-class:: ent:EnterpriseSoftwareDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Interoperability Domain]], [[Information Security Domain]], [[Accessibility Domain]]
  - has-part:: [[Enterprise Resource Planning]], [[Integration Middleware]], [[Workflow Engine]], [[Master Data Management]], [[Identity and Access Management]]
  - requires:: [[Infrastructure Domain]], [[Data Management]], [[Identity Management]]
  - enables:: [[Business Process Automation]], [[Data Integration]], [[Operational Reporting]]

- ### Content
  - The Enterprise Software Domain organises the systems that run organisational operations. Resource planning suites coordinate finance, supply, and human resources, integration middleware connects disparate applications, and workflow engines automate the processes that span them. Master data management keeps shared reference data consistent so that connected systems agree on customers, products, and accounts.
  - Enterprise deployments are defined by scale, longevity, and the need for governance. They must integrate with existing systems, enforce access control across many roles, and remain auditable over years of operation. These requirements drive architecture choices toward modularity, well-defined interfaces, and strong identity and access management.
  - As a top-level domain, enterprise software depends on infrastructure for compute and storage and on identity management for access. It bridges to interoperability, which connects its applications, to information security, which protects its data, and to accessibility, which governs its interfaces. Keeping business-grade software distinct from infrastructure lets the ontology describe organisational systems without conflating them with the platforms beneath them.

- ### Provenance
  - sources:: [[TOGAF]], [[ISO/IEC 25010]]
  - migration-date:: 2026-05-29T00:00:00Z