
SCIM (System for Cross-domain Identity Management) is an open standard that defines a common schema and a RESTful protocol for automating the exchange of user and group identity information between identity providers and service providers. It lets organisations create, update, deactivate and deprovision accounts across applications without bespoke integrations. SCIM is widely used to automate user lifecycle management in enterprise single sign-on and cloud deployments.

- ### Overview
  - Before SCIM, connecting an identity source to each application required bespoke, brittle integrations; SCIM replaces these with a uniform interface.
  - The standard specifies resource types (notably User and Group), a JSON representation, and HTTP operations for create, read, update, delete and search.
  - Identity providers act as SCIM clients, pushing changes to service providers that expose SCIM endpoints.
  - SCIM underpins automated user lifecycle management in enterprise [[Single Sign-On]] and cloud estates.
- ### Key aspects
  - **Common schema** — a standard set of attributes for users and groups, extensible for organisation-specific needs.
  - **RESTful protocol** — predictable HTTP verbs over a [[REST API]] make implementation and debugging straightforward.
  - **Lifecycle automation** — joiner, mover and leaver events flow automatically, closing the gap that leaves orphaned accounts after departures.
  - **Interoperability** — being a published standard, SCIM is implemented across many identity providers and SaaS applications.
  - **Security alignment** — automated deprovisioning reduces the attack surface left by stale credentials, reinforcing [[Access Control]].
- ### Mechanisms
  - A SCIM client authenticates to a SCIM service provider, often using [[OAuth]] bearer tokens.
  - Identity changes detected in a [[Directory Service]] are translated into SCIM operations against each connected application.
  - Group membership changes propagate to keep entitlements consistent, supporting [[Authorisation]] decisions downstream.
  - Idempotent operations and filtering allow reliable reconciliation of large user populations.
- ### Applications
  - Automated onboarding and offboarding of employees across SaaS portfolios.
  - Synchronising entitlements with [[Identity Federation]] and [[Single Sign-On]] deployments.
  - Reducing manual administration and audit risk in large organisations.
  - Closing security gaps by ensuring leavers lose access promptly.
- ### Provenance

