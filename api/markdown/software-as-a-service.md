- ### Definition
  - [[Software As A Service]] (SaaS) is the uppermost layer of the [[cloud computing]] service stack, delivering fully managed applications to end users via web browsers with no local installation required.
  - Providers handle all infrastructure, runtime, application updates, and security; users access functionality through subscription licences.
  - SaaS contrasts with [[Platform As A Service]] and [[Infrastructure As A Service]] by providing zero customer responsibility for underlying technology.

- ### Overview
  - Salesforce.com (1999) pioneered on-demand CRM as the first major SaaS company, establishing the subscription-per-seat business model.
  - Google Apps (2006) and Microsoft Office 365 (2011) extended SaaS to productivity suites previously dominated by installed software.
  - Modern SaaS products integrate via APIs and webhooks, forming ecosystems of interconnected services.
  - Identity federation (SSO, SAML, OIDC) enables enterprise access control across SaaS portfolios.
  - Data portability and vendor lock-in are persistent concerns requiring contractual and technical mitigation.

- ### Key aspects
  - Multi-tenant architecture: multiple customer organisations share infrastructure with logical data isolation.
  - Automatic updates: provider deploys new versions transparently; users always access current version.
  - Usage-based and seat-based pricing models predominate.
  - SLA-backed uptime guarantees with transparent status pages.
  - Integration platforms (Zapier, MuleSoft) connect SaaS products into business workflows.

- ### Mechanisms
  - Tenant isolation via database-per-tenant, schema-per-tenant, or row-level security in shared databases.
  - Continuous deployment pipelines enable frequent feature releases without customer action.
  - CDN and edge caching reduce latency for globally distributed user bases.
  - RBAC and attribute-based access control manage authorisation within multi-tenant environments.

- ### Applications
  - CRM systems (Salesforce, HubSpot) for sales pipeline and customer data management.
  - Communication platforms (Slack, Microsoft Teams, Zoom) for collaboration.
  - ERP systems (SAP S/4HANA Cloud, NetSuite) for financial and operational processes.
  - Security tools (Okta, CrowdStrike) delivered as managed services.
  - AI writing assistants and code completion tools delivered via browser or IDE plugin.

- ### Relationships
  - hasPart:: [[Web Application]]
  - hasPart:: [[Multi-Tenancy]]
  - enables:: [[Collaboration]]
  - enables:: [[Digital Transformation]]
  - contrastsWith:: [[Infrastructure As A Service]]
  - contrastsWith:: [[Platform As A Service]]
  - dependsOn:: [[Platform As A Service]]
  - dependsOn:: [[Cloud Computing]]
  - partOf:: [[Cloud Computing]]
  - supports:: [[Remote Work]]
  - relatedTo:: [[Distributed Collaboration]]
  - relatedTo:: [[Identity and Access Management]]
  - uses:: [[Encryption]]
  - uses:: [[Single Sign-On]]

- ### Provenance
  - updated:: 2026-06-15