- ### Definition
  - Access control is a fundamental security mechanism that regulates which users, systems, or processes can view, use, or modify resources within a computing environment. It encompasses the policies, procedures, and technologies that govern the granting and restricting of access rights, ensuring that only authorised entities can perform specific actions on protected resources based on their identity, role, or attributes.

- ### Semantic Classification
  - owl-class:: infrastructure:AccessControl
  - owl-role:: Concept
  - belongs-to-domain:: [[Core Technology]]

- ### Relationships
  - bridges-to:: [[Cryptography]]
  - is-subclass-of:: [[Security Mechanism]]
  - enables:: [[Data Protection]], [[System Security]], [[Compliance]]
  - implements:: [[Authorisation]], [[Permission Management]]

- ### Content

  ## Components

  ### Core Elements
  - **Authentication**: Verifying the identity of users or systems before granting access
  - **Authorisation**: Determining what actions authenticated entities can perform
  - **Auditing**: Recording access attempts and actions for accountability and compliance
  - **Access Control Lists (ACLs)**: Data structures that specify permissions for resources

  ### Security Models

  #### Discretionary Access Control (DAC)
  Resource owners have discretion to decide who can access their resources. Commonly used in operating systems where file owners set permissions for other users and groups.

  #### Mandatory Access Control (MAC)
  Centralised security administration assigns security labels and classifications. Users cannot change access policies; ideal for high-security environments like defence systems.

  #### Role-Based Access Control (RBAC)
  Permissions are assigned to roles rather than individual users. Users are granted roles based on job functions, implementing the principle of least privilege effectively for large organisations.

  #### Attribute-Based Access Control (ABAC)
  Access decisions based on attributes of users, resources, and environmental conditions. Policies evaluate multiple attributes dynamically, enabling fine-grained, context-aware access control.

  #### Rule-Based Access Control (RuBAC)
  System-wide policies grant or deny access based on specific conditions such as time of day, location, or device type.

  ## Implementation

  ### Enterprise Deployment
  1. **Policy Definition**: Establish access control policies aligned with security requirements
  2. **Identity Integration**: Connect with identity providers and directory services
  3. **Role Engineering**: Define roles that map to organisational functions
  4. **Permission Assignment**: Map permissions to roles or attributes
  5. **Enforcement Points**: Deploy controls at network, application, and data layers

  ### Best Practices
  - Implement principle of least privilege
  - Regular access reviews and recertification
  - Separation of duties for sensitive operations
  - Multi-factor authentication for privileged access
  - Comprehensive audit logging

  ### Technology Components
  - Identity and Access Management (IAM) platforms
  - Privileged Access Management (PAM) solutions
  - Directory services (LDAP, Active Directory)
  - API gateways with access control
  - Network access control (NAC) systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z