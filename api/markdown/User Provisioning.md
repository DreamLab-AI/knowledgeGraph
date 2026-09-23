
User provisioning is the identity-and-access-management process of creating, configuring, maintaining and eventually removing user accounts and their associated access entitlements across systems and applications. It encompasses the full account lifecycle — from initial onboarding through entitlement changes to deprovisioning at offboarding — and is increasingly automated through directory services and standards such as SCIM. Effective provisioning ensures that each identity holds exactly the access required, supporting least-privilege and timely revocation.

- ### Overview
  - User provisioning sits at the operational core of identity governance: it translates organisational roles, joiner-mover-leaver events and policy into concrete account states. Modern implementations push provisioning toward automation, where a change in an authoritative source (for example an HR system) cascades to downstream applications through connectors or the SCIM protocol, eliminating manual account creation and the orphaned accounts that follow inconsistent offboarding.
- ### Key aspects
  - Account lifecycle: creation, modification, suspension and deletion tracked against an authoritative source of identity.
  - Entitlement assignment driven by role-based access control so that access derives from job function rather than ad-hoc grants.
  - Deprovisioning discipline that revokes access promptly at offboarding to close the orphaned-account attack surface.
  - Standardisation through SCIM, enabling consistent cross-application provisioning over a common schema and REST API.
  - Auditability so that every grant and revocation is logged for compliance review.
- ### Applications
  - Enterprise onboarding workflows that grant new employees their full toolset on day one.
  - Contractor and partner access with time-bounded, automatically expiring entitlements.
  - Cloud SaaS administration where SCIM connectors keep application directories in sync with the identity provider.
  - Regulated environments requiring demonstrable least-privilege and timely revocation.
- ### Provenance

