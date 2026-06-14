public:: true

# identity and access management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ad4a0fead59633fe898ddf4318a77d9a8f2c08ee8f8e30e6e8eb451cb196cf87",
  "@type": "Page",
  "vc:slug": "identity-and-access-management",
  "title": "identity and access management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-and-access-management",
  "@type": "Class",
  "label": "Identity and Access Management",
  "definition": "Identity and Access Management (IAM) is a security discipline comprising the frameworks, policies, technologies, and processes that govern how digital identities are created, authenticated, authorised, and managed throughout their lifecycle within and across organisational boundaries. IAM systems enforce the principle of least privilege by ensuring that subjects—users, applications, devices, and service accounts—can access only the resources required for their legitimate purpose at the appropriate time. The discipline spans directory services, multi-factor authentication, role-based and attribute-based access control, privileged access management, identity governance and administration, and federated identity protocols that extend trust across cloud and partner environments. IAM is a foundational control domain within information security frameworks such as ISO/IEC 27001, NIST SP 800-53, and Zero Trust architecture models.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:authorisation", "label": "Authorisation"},
      {"@id": "urn:ngm:class:privileged-access-management", "label": "Privileged Access Management"},
      {"@id": "urn:ngm:class:identity-governance-and-administration", "label": "Identity Governance and Administration"},
      {"@id": "urn:ngm:class:directory-services", "label": "Directory Services"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:oauth-2-0", "label": "OAuth 2.0"},
      {"@id": "urn:ngm:class:openid-connect", "label": "OpenID Connect"},
      {"@id": "urn:ngm:class:saml", "label": "SAML"},
      {"@id": "urn:ngm:class:ldap", "label": "LDAP"},
      {"@id": "urn:ngm:class:multi-factor-authentication", "label": "Multi-Factor Authentication"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"},
      {"@id": "urn:ngm:class:least-privilege", "label": "Least Privilege"},
      {"@id": "urn:ngm:class:audit-and-compliance", "label": "Audit and Compliance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:digital-certificates", "label": "Digital Certificates"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:role-based-access-control", "label": "Role-Based Access Control"},
      {"@id": "urn:ngm:class:attribute-based-access-control", "label": "Attribute-Based Access Control"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-iec-27001", "label": "ISO/IEC 27001"},
      {"@id": "urn:ngm:class:nist-sp-800-53", "label": "NIST SP 800-53"},
      {"@id": "urn:ngm:class:scim", "label": "SCIM"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:network-access-control", "label": "Network Access Control"},
      {"@id": "urn:ngm:class:perimeter-security", "label": "Perimeter Security"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:iam", "label": "IAM"},
    {"@id": "urn:ngm:class:identity-access-management", "label": "Identity Access Management"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Identity and Access Management (IAM) is a security discipline comprising the frameworks, policies, technologies, and processes that govern how [[Digital Identity]] is created, authenticated, authorised, and managed throughout its lifecycle within and across organisational boundaries. IAM enforces the [[Least Privilege]] principle, ensuring that users, applications, devices, and service accounts access only the resources required for their legitimate purpose at the appropriate time. The discipline integrates [[Directory Services]], [[Multi-Factor Authentication]], [[Role-Based Access Control]], [[Privileged Access Management]], and federated identity protocols to provide unified control over who can access what, when, and under what conditions. IAM is a foundational control domain within [[Zero Trust Architecture]] and information security certification frameworks such as [[ISO/IEC 27001]] and [[NIST SP 800-53]].

- ### Overview
  - IAM solves the fundamental security problem of ensuring that the right entities gain access to the right resources at the right times, and that wrong entities are denied access. In practice, this requires solving three distinct sub-problems: (1) establishing and verifying identity (who or what is the subject?), (2) controlling what that subject is permitted to do (authorisation), and (3) governing the full lifecycle of identities from provisioning through deprovisioning.
  - The discipline emerged from mainframe-era access control lists and Unix permission models, matured through the proliferation of enterprise directories and Kerberos-based authentication in the 1990s, and expanded dramatically with cloud computing, mobile workforces, and API-driven architectures. Modern IAM must handle human users, non-human identities (service accounts, bots, IoT devices), and machine-to-machine API access at scale.
  - IAM failures are among the most consequential security events — credential compromise, privilege escalation, and insider threat scenarios all exploit weaknesses in identity controls. The shift to [[Zero Trust Architecture]] has elevated IAM from a supporting function to the primary security perimeter, replacing network-centric trust with identity-centric verification.
  - Key drivers of contemporary IAM investment include cloud adoption, remote work at scale, regulatory compliance obligations, the rise of API ecosystems requiring OAuth-based delegation, and supply chain security concerns that demand rigorous control over third-party and machine identities.

- ### Key Components
  - #### Identity Store and Directory Services
    - [[Directory Services]] (e.g., [[Active Directory]], [[OpenLDAP]], cloud-native directories) act as the authoritative repository for subject attributes, group memberships, and credential hashes. LDAP (Lightweight Directory Access Protocol) is the dominant query protocol for directory lookups.
    - Cloud Identity Providers (IdPs) such as Azure Active Directory (now Entra ID), Okta, and Google Workspace provide directory services with built-in federation and conditional access policies.
  - #### Authentication
    - [[Authentication]] mechanisms range from password-based verification through [[Multi-Factor Authentication]] (MFA) using time-based one-time passwords (TOTP), SMS OTP, or hardware security keys compliant with [[FIDO2]] and [[WebAuthn]] standards.
    - [[Passwordless Authentication]] approaches — biometrics, hardware keys, magic links — are increasingly adopted to eliminate credential-theft vectors while improving user experience.
    - [[Adaptive Authentication]] (risk-based authentication) evaluates contextual signals (device posture, geolocation, behaviour) at login time to step up authentication requirements dynamically.
  - #### Authorisation Models
    - [[Role-Based Access Control]] (RBAC): permissions are assigned to roles, and subjects inherit permissions through role membership. Widely deployed in enterprise applications and cloud IAM platforms (AWS IAM, Azure RBAC, GCP IAM).
    - [[Attribute-Based Access Control]] (ABAC): policies evaluate attributes of subjects, resources, and environmental context at access time, enabling fine-grained and dynamic authorisation decisions. XACML (eXtensible Access Control Markup Language) is the dominant policy language for ABAC.
    - [[Policy-Based Access Control]] and [[Open Policy Agent]] (OPA) provide cloud-native policy-as-code evaluation for microservice and Kubernetes environments.
    - [[Relationship-Based Access Control]] (ReBAC): pioneered by Google Zanzibar, models access based on object relationship graphs — used by Google Drive, GitHub, and similar multi-tenant SaaS products.
  - #### Privileged Access Management
    - [[Privileged Access Management]] (PAM) solutions (CyberArk, BeyondTrust, HashiCorp Vault) apply just-in-time, time-limited credential issuance for administrative and service accounts, reducing standing privilege and credential exposure windows.
    - Secrets management platforms extend PAM to non-human identities, dynamically issuing database credentials, API keys, and TLS certificates with short validity periods (secrets rotation).
  - #### Federation and Single Sign-On
    - [[SAML]] 2.0 (Security Assertion Markup Language) enables identity federation for enterprise web SSO by passing XML-encoded assertions between IdPs and Service Providers (SPs).
    - [[OAuth 2.0]] provides a delegation framework enabling third-party applications to access resources on behalf of resource owners without sharing credentials.
    - [[OpenID Connect]] (OIDC) layers an identity layer on top of OAuth 2.0, providing ID tokens that carry authenticated user identity claims in JWT format.
    - [[Single Sign-On]] consolidates authentication across multiple applications, reducing password fatigue and credential sprawl while centralising session management.
  - #### Identity Governance and Administration
    - [[Identity Governance and Administration]] (IGA) encompasses automated provisioning and deprovisioning of accounts, access request workflows, access certification campaigns (periodic reviews to remove stale access), segregation of duties enforcement, and audit trail generation.
    - [[SCIM]] (System for Cross-domain Identity Management) is the standard protocol for automating user provisioning between identity providers and cloud applications.
  - #### Public Key Infrastructure Integration
    - [[Public Key Infrastructure]] (PKI) underpins certificate-based authentication (client TLS mutual authentication, smart card logon) and code signing. IAM platforms integrate with enterprise Certificate Authorities for device certificate issuance and lifecycle management.

- ### Applications and Use Cases
  - **Enterprise Workforce IAM**: Onboarding, offboarding, and role-change workflows for employees and contractors; MFA enforcement; SSO across SaaS and on-premises applications; compliance reporting for SOX, GDPR, and HIPAA audit requirements.
  - **Customer Identity and Access Management (CIAM)**: User registration, social login (OAuth-based), consent management, and fraud detection for consumer-facing applications. CIAM platforms (Auth0, Ping Identity, Cognito) handle high-volume, low-friction identity at internet scale.
  - **Machine and Service Identity**: IAM for non-human entities including CI/CD pipelines, microservices, IoT devices, and robotic process automation (RPA) bots. Workload identity federation (e.g., GitHub Actions OIDC, AWS IRSA) eliminates long-lived service credentials.
  - **Cloud IAM**: AWS IAM, Azure Entra ID, and GCP IAM provide fine-grained resource-level access control for cloud infrastructure. Misconfigured cloud IAM policies are a leading cause of cloud data breaches.
  - **API Security**: OAuth 2.0 with scoped access tokens controls API access between microservices and third-party integrations. API gateways enforce token validation and scope-based authorisation.
  - **Privileged User Management**: PAM controls over domain administrators, database administrators, and cloud root accounts; session recording for forensic accountability; just-in-time privilege elevation for break-glass scenarios.
  - **Decentralised and Self-Sovereign Identity**: Emerging deployments using [[Verifiable Credentials]], [[Decentralised Identifiers]] (DIDs), and blockchain-anchored attestations for user-controlled identity portability across organisations and jurisdictions.
  - **Zero Trust Network Access**: IAM as the policy enforcement engine for ZTNA solutions — every connection request is evaluated against identity posture, device health, and resource sensitivity before access is granted.

- ### Relationships
  - hasPart:: [[Authentication]]
  - hasPart:: [[Authorisation]]
  - hasPart:: [[Privileged Access Management]]
  - hasPart:: [[Identity Governance and Administration]]
  - hasPart:: [[Directory Services]]
  - uses:: [[OAuth 2.0]]
  - uses:: [[OpenID Connect]]
  - uses:: [[SAML]]
  - uses:: [[LDAP]]
  - uses:: [[Multi-Factor Authentication]]
  - uses:: [[Public Key Infrastructure]]
  - enables:: [[Access Control]]
  - enables:: [[Zero Trust Architecture]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Least Privilege]]
  - enables:: [[Audit and Compliance]]
  - requires:: [[Cryptography]]
  - requires:: [[Digital Certificates]]
  - implements:: [[Role-Based Access Control]]
  - implements:: [[Attribute-Based Access Control]]
  - standardizedBy:: [[ISO/IEC 27001]]
  - standardizedBy:: [[NIST SP 800-53]]
  - standardizedBy:: [[SCIM]]
  - contrastsWith:: [[Network Access Control]]
  - contrastsWith:: [[Perimeter Security]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Cybersecurity]]
  - relatedTo:: [[Data Governance]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[Decentralised Identity]]

- ### Standards and Context
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

- ### Provenance
  - sources:: ISO/IEC 27001:2022; NIST SP 800-53 Rev 5; NIST SP 800-63-3; RFC 6749 (OAuth 2.0); OASIS SAML 2.0; W3C WebAuthn Level 2; SCIM RFC 7642-7644; Gartner IAM Magic Quadrant research; FIDO Alliance specifications
  - updated:: 2026-06-13
