
Least privilege is a security principle stating that every user, process or component should be granted only the minimum access rights necessary to perform its function, and no more. By limiting permissions to what is strictly required, the principle reduces the attack surface and confines the damage that a compromised account or faulty component can cause. It is a cornerstone of access control and underpins modern approaches such as zero-trust architecture and defence in depth.

- ### Overview
  - The least-privilege principle treats every additional permission as a liability: the fewer rights an account holds, the less an attacker gains by compromising it and the less damage a buggy process can do.
  - Applying it well means granting access narrowly and temporarily, revoking rights when no longer needed, and separating duties so that no single identity accumulates excessive power.
  - It is foundational to defence in depth and zero-trust models, where access is never assumed and is continually scoped to the specific operation being performed.

- ### Key aspects
  - Permissions are scoped to the minimum required for a defined function.
  - Just-in-time and time-bounded access reduce standing privileges.
  - Separation of duties prevents concentration of powerful rights in one identity.
  - Regular review and revocation counter privilege creep over time.

- ### Applications
  - Designing role-based and attribute-based access-control policies.
  - Hardening service accounts and automated processes in cloud and CI/CD systems.
  - Implementing zero-trust access where each request is authorised narrowly.
  - Limiting administrative rights on endpoints to contain malware impact.

- ### Provenance

