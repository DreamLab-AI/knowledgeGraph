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
  "definition": "Identity and Access Management (IAM) is a security discipline comprising the frameworks, policies, technologies, and processes that govern how digital identities are created, authenticated, authorised, and governed throughout their lifecycle within an organisation. IAM systems enforce the principle of least privilege by ensuring that subjects—users, applications, and service accounts—can access only the resources required for their legitimate purpose. Modern IAM encompasses directory services, multi-factor authentication, role-based and attribute-based access control, privileged access management, and federated identity across organisational boundaries.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:oauth-2-0", "label": "OAuth 2.0"},
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"},
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Identity and Access Management (IAM) is a security discipline comprising the frameworks, policies, technologies, and processes that govern how digital identities are created, authenticated, authorised, and governed throughout their lifecycle within an organisation. IAM systems enforce the principle of least privilege by ensuring that subjects—users, applications, and service accounts—can access only the resources required for their legitimate purpose. Modern IAM encompasses directory services, multi-factor authentication, role-based and attribute-based access control, privileged access management, and federated identity across organisational boundaries.

- ### Semantic Classification
  - owl-class:: identity-and-access-management:Identity and Access Management
  - owl-role:: Concept

- ### Relationships
  - uses [[OAuth 2.0]]
  - uses [[Authentication]]
  - enables [[Access Control]]
  - enables [[Zero Trust Architecture]]
  - relatedTo [[Identity Management]]
  - relatedTo [[Single Sign-On]]

- ### Content
  - IAM systems are built around a core identity store—typically an LDAP directory (Active Directory, OpenLDAP) or a cloud-native directory service—that holds subject attributes, group memberships, and credential hashes. Authentication mechanisms range from password-based verification through multi-factor authentication (MFA) using TOTP or hardware security keys (FIDO2/WebAuthn) to passwordless methods based on biometrics or cryptographic challenge-response.
  - Authorisation models include Role-Based Access Control (RBAC), where permissions are assigned to roles that subjects inherit, and Attribute-Based Access Control (ABAC), where policies evaluate attributes of subjects, resources, and environment at access time. Policy languages such as XACML and OPA (Open Policy Agent) express fine-grained ABAC rules. Privileged Access Management (PAM) solutions such as CyberArk and HashiCorp Vault apply just-in-time, time-limited privileged credentials to administrative accounts.
  - Federation standards—SAML 2.0, OAuth 2.0, and OpenID Connect—extend IAM across organisational boundaries and cloud service providers, enabling Single Sign-On without propagating credentials. IAM is a central pillar of Zero Trust Architecture, where every access request is continuously verified regardless of network location. ISO/IEC 27001 Annex A includes access control (A.9) as a mandatory control domain, making IAM implementation inseparable from information security certification obligations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
