Identity and Access Management (IAM) is a security discipline comprising the frameworks, policies, technologies, and processes that govern how digital identities are created, authenticated, authorised, and managed throughout their lifecycle within and across organisational boundaries. IAM systems enforce the principle of least privilege by ensuring that subjects—users, applications, devices, and service accounts—can access only the resources required for their legitimate purpose at the appropriate time. The discipline spans directory services, multi-factor authentication, role-based and attribute-based access control, privileged access management, identity governance and administration, and federated identity protocols that extend trust across cloud and partner environments. IAM is a foundational control domain within information security frameworks such as ISO/IEC 27001, NIST SP 800-53, and Zero Trust architecture models.

### Overview

- IAM solves the fundamental security problem of ensuring that the right entities gain access to the right resources at the right times, and that wrong entities are denied access. In practice, this requires solving three distinct sub-problems: (1) establishing and verifying identity (who or what is the subject?), (2) controlling what that subject is permitted to do (authorisation), and (3) governing the full lifecycle of identities from provisioning through deprovisioning.
- The discipline emerged from mainframe-era access control lists and Unix permission models, matured through the proliferation of enterprise directories and Kerberos-based authentication in the 1990s, and expanded dramatically with cloud computing, mobile workforces, and API-driven architectures. Modern IAM must handle human users, non-human identities (service accounts, bots, IoT devices), and machine-to-machine API access at scale.
- IAM failures are among the most consequential security events — credential compromise, privilege escalation, and insider threat scenarios all exploit weaknesses in identity controls. The shift to [[Zero Trust Architecture]] has elevated IAM from a supporting function to the primary security perimeter, replacing network-centric trust with identity-centric verification.
- Key drivers of contemporary IAM investment include cloud adoption, remote work at scale, regulatory compliance obligations, the rise of API ecosystems requiring OAuth-based delegation, and supply chain security concerns that demand rigorous control over third-party and machine identities.

### Key Components

#### Identity Store and Directory Services

- [[Directory Services]] (e.g., [[Active Directory]], [[OpenLDAP]], cloud-native directories) act as the authoritative repository for subject attributes, group memberships, and credential hashes. LDAP (Lightweight Directory Access Protocol) is the dominant query protocol for directory lookups.
- Cloud Identity Providers (IdPs) such as Azure Active Directory (now Entra ID), Okta, and Google Workspace provide directory services with built-in federation and conditional access policies.

#### Authentication

- [[Authentication]] mechanisms range from password-based verification through [[Multi-Factor Authentication]] (MFA) using time-based one-time passwords (TOTP), SMS OTP, or hardware security keys compliant with [[FIDO2]] and [[WebAuthn]] standards.
- [[Passwordless Authentication]] approaches — biometrics, hardware keys, magic links — are increasingly adopted to eliminate credential-theft vectors while improving user experience.
- [[Adaptive Authentication]] (risk-based authentication) evaluates contextual signals (device posture, geolocation, behaviour) at login time to step up authentication requirements dynamically.

#### Authorisation Models

- [[Role-Based Access Control]] (RBAC): permissions are assigned to roles, and subjects inherit permissions through role membership. Widely deployed in enterprise applications and cloud IAM platforms (AWS IAM, Azure RBAC, GCP IAM).
- [[Attribute-Based Access Control]] (ABAC): policies evaluate attributes of subjects, resources, and environmental context at access time, enabling fine-grained and dynamic authorisation decisions. XACML (eXtensible Access Control Markup Language) is the dominant policy language for ABAC.
- [[Policy-Based Access Control]] and [[Open Policy Agent]] (OPA) provide cloud-native policy-as-code evaluation for microservice and Kubernetes environments.
- [[Relationship-Based Access Control]] (ReBAC): pioneered by Google Zanzibar, models access based on object relationship graphs — used by Google Drive, GitHub, and similar multi-tenant SaaS products.

#### Privileged Access Management

- [[Privileged Access Management]] (PAM) solutions (CyberArk, BeyondTrust, HashiCorp Vault) apply just-in-time, time-limited credential issuance for administrative and service accounts, reducing standing privilege and credential exposure windows.
- Secrets management platforms extend PAM to non-human identities, dynamically issuing database credentials, API keys, and TLS certificates with short validity periods (secrets rotation).

#### Federation and Single Sign-On

- [[SAML]] 2.0 (Security Assertion Markup Language) enables identity federation for enterprise web SSO by passing XML-encoded assertions between IdPs and Service Providers (SPs).
- [[OAuth 2.0]] provides a delegation framework enabling third-party applications to access resources on behalf of resource owners without sharing credentials.
- [[OpenID Connect]] (OIDC) layers an identity layer on top of OAuth 2.0, providing ID tokens that carry authenticated user identity claims in JWT format.
- [[Single Sign-On]] consolidates authentication across multiple applications, reducing password fatigue and credential sprawl while centralising session management.

#### Identity Governance and Administration

- [[Identity Governance and Administration]] (IGA) encompasses automated provisioning and deprovisioning of accounts, access request workflows, access certification campaigns (periodic reviews to remove stale access), segregation of duties enforcement, and audit trail generation.
- [[SCIM]] (System for Cross-domain Identity Management) is the standard protocol for automating user provisioning between identity providers and cloud applications.

#### Public Key Infrastructure Integration

- [[Public Key Infrastructure]] (PKI) underpins certificate-based authentication (client TLS mutual authentication, smart card logon) and code signing. IAM platforms integrate with enterprise Certificate Authorities for device certificate issuance and lifecycle management.

### Applications and Use Cases

- **Enterprise Workforce IAM**: Onboarding, offboarding, and role-change workflows for employees and contractors; MFA enforcement; SSO across SaaS and on-premises applications; compliance reporting for SOX, GDPR, and HIPAA audit requirements.
- **Customer Identity and Access Management (CIAM)**: User registration, social login (OAuth-based), consent management, and fraud detection for consumer-facing applications. CIAM platforms (Auth0, Ping Identity, Cognito) handle high-volume, low-friction identity at internet scale.
- **Machine and Service Identity**: IAM for non-human entities including CI/CD pipelines, microservices, IoT devices, and robotic process automation (RPA) bots. Workload identity federation (e.g., GitHub Actions OIDC, AWS IRSA) eliminates long-lived service credentials.
- **Cloud IAM**: AWS IAM, Azure Entra ID, and GCP IAM provide fine-grained resource-level access control for cloud infrastructure. Misconfigured cloud IAM policies are a leading cause of cloud data breaches.
- **API Security**: OAuth 2.0 with scoped access tokens controls API access between microservices and third-party integrations. API gateways enforce token validation and scope-based authorisation.
- **Privileged User Management**: PAM controls over domain administrators, database administrators, and cloud root accounts; session recording for forensic accountability; just-in-time privilege elevation for break-glass scenarios.
- **Decentralised and Self-Sovereign Identity**: Emerging deployments using [[Verifiable Credentials]], [[Decentralised Identifiers]] (DIDs), and blockchain-anchored attestations for user-controlled identity portability across organisations and jurisdictions.
- **Zero Trust Network Access**: IAM as the policy enforcement engine for ZTNA solutions — every connection request is evaluated against identity posture, device health, and resource sensitivity before access is granted.

### Standards and Context

- **ISO/IEC 27001 Annex A.9** — Access Control is a mandatory control domain covering user access management, user responsibilities, system and application access, and privileged access management.
- **NIST SP 800-53 Rev 5 (AC family)** — Access Control control family defines requirements for account management, access enforcement, information flow enforcement, and least privilege across federal information systems.
- **NIST SP 800-63 (Digital Identity Guidelines)** — Three-volume guideline defining Identity Assurance Levels (IAL), Authenticator Assurance Levels (AAL), and Federation Assurance Levels (FAL) for digital identity programmes.
- **OAuth 2.0 (RFC 6749) and OAuth 2.1** — The authorisation delegation framework underpinning modern API access control, with security best practice updates consolidated in OAuth 2.1.
- **OpenID Connect 1.0** — Identity layer built on OAuth 2.0, providing standardised ID tokens and UserInfo endpoints for federated authentication.
- **SAML 2.0 (OASIS)** — XML-based federation standard dominant in enterprise SSO and public sector identity federation scenarios.
- **FIDO2 / WebAuthn (W3C)** — Passwordless and phishing-resistant authentication standard for browser and native application clients using public-key cryptography and hardware-bound authenticators.
- **SCIM 2.0 (RFC 7642–7644)** — RESTful protocol for automated provisioning of user and group objects between IdPs and cloud applications.
- **XACML 3.0 (OASIS)** — Declarative policy language and evaluation framework for attribute-based access control decisions.
- **Kantara Initiative and OpenID Foundation** — Industry consortia driving interoperability profiles and conformance certification for identity standards.
- **EU eIDAS Regulation** — European legal framework establishing recognised electronic identification and trust services, increasingly relevant for cross-border identity federation in public sector and regulated industries.
- **GDPR and CCPA** — Data protection regulations that impose consent management, data minimisation, and right-to-erasure obligations on identity systems, especially CIAM platforms.
- **SOC 2 Type II** — Audit framework requiring evidence of access control design and operating effectiveness, making IAM audit trails a compliance deliverable for SaaS providers.

### Current Landscape (2026)

- NIST finalised SP 800-63-4 Digital Identity Guidelines on 31 July 2025, integrating FIDO2 and passkeys into the federal standard; it mandates a phishing-resistant option at AAL2 and a non-exportable private key at AAL3, with syncable (cloud-following) passkeys qualifying only at AAL2.
- Passwordless authentication has crossed into the mainstream: passkey support now spans over 80% of enterprise applications (up from ~35% in 2024), Apple, Google and Microsoft have collectively enabled passkeys for over 4 billion accounts, and HYPR's 2026 report finds roughly 43% of enterprises have deployed passwordless in some form.
- Non-human identity (NHI) management became a distinct discipline as service accounts, API keys, workloads and autonomous AI agents now vastly outnumber human users, driving a shift to short-lived, just-in-time credentials and dedicated tooling (CyberArk/Venafi, Astrix, Oasis, Aembit, Silverfort, Token Security).
- Identity Threat Detection and Response (ITDR) matured from a Gartner concept into a standard architecture component, converging with core IAM platforms to detect token theft, session hijacking and lateral movement in real time.
- Heavy market consolidation reshaped the vendor field: Palo Alto Networks agreed to acquire CyberArk for around $25 billion, Delinea moved to acquire StrongDM, and in early 2026 CrowdStrike announced deals for SGNL ($740m) and Seraphic ($420m) while Zscaler acquired SquareX.
- Established leaders hold the core segments: Microsoft Entra ID and Okta lead workforce IAM (Gartner named Microsoft, Okta and Ping Identity Access Management Leaders for a ninth consecutive year), SailPoint and Saviynt lead IGA, and CyberArk, BeyondTrust and Delinea lead PAM; Okta reported $2.919bn FY2026 revenue, CyberArk $1.44bn ARR and SailPoint $1.163bn ARR.
- European regulation is differentiating the market, with NIS2, DORA and eIDAS 2.0 pushing adoption of the EU Digital Identity Wallet and W3C Verifiable Credentials/decentralised identifiers, which are moving from pilots toward workforce credentialing and supply-chain verification.
- Open frontiers as of 2026 include governing agentic-AI identities, post-quantum "harvest now, decrypt later" readiness for identity tokens, the shift from RBAC to attribute- and policy-based access control (ABAC/PBAC) with continuous verification, and modular "Identity Fabric" architectures replacing monolithic stacks.

### References

- 1. StartWithIdentity (2026). Top 10 IAM Trends for 2026: From Passwordless to Autonomous Identity. https://startwithidentity.com/news/2026-01-08-top-10-iam-trends-2026/
- 2. Analysis Atlas (2026). IAM Market 2026: Machine Identity and the Agent Wave. https://analysis-atlas.com/research/identity-access-management-iam-market/
- 3. CSO Online (2026). 6 key trends reshaping the IAM market. https://www.csoonline.com/article/4148282/6-key-trends-reshaping-the-iam-market.html
- 4. KuppingerCole (2026). Research Compass Identity and Access Management 2026. https://www.kuppingercole.com/research/an82012/research-compass-identity-and-access-management-2026
- 5. ALM Corp (2026). 12 Best Identity and Access Management Tools in 2026. https://almcorp.com/blog/best-identity-and-access-management-tools/

### Provenance

