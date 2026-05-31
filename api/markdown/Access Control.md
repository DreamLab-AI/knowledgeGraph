public:: true
alias:: AccessControl

# Access Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7671efc514c975326ef19499b3ebc0308fdab9c6ec78ee95fc861f030f7332f6",
  "@type": "Page",
  "vc:slug": "access-control",
  "title": "Access Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authorisation",
      "vc:label": "Authorisation"
    },
    {
      "@id": "urn:visionflow:linked:compliance",
      "vc:label": "Compliance"
    },
    {
      "@id": "urn:visionflow:linked:core-technology",
      "vc:label": "Core Technology"
    },
    {
      "@id": "urn:visionflow:linked:permission-management",
      "vc:label": "Permission Management"
    },
    {
      "@id": "urn:visionflow:linked:security-mechanism",
      "vc:label": "Security Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:system-security",
      "vc:label": "System Security"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:owl:class:data-protection",
      "vc:label": "Data Protection"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Access Control"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:access-control",
  "@type": "Class",
  "label": "Access Control",
  "definition": "Access control is a fundamental security mechanism that regulates which users, systems, or processes can view, use, or modify resources within a computing environment.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    },
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Infra Security And Identity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:system-security",
        "label": "System Security"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:permission-management",
        "label": "Permission Management"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:access-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7671efc514c975326ef19499b3ebc0308fdab9c6ec78ee95fc861f030f7332f6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authorisation]]",
      "resolved": "urn:visionflow:linked:authorisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance]]",
      "resolved": "urn:visionflow:linked:compliance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Core Technology]]",
      "resolved": "urn:visionflow:linked:core-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Permission Management]]",
      "resolved": "urn:visionflow:linked:permission-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Security Mechanism]]",
      "resolved": "urn:visionflow:linked:security-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[System Security]]",
      "resolved": "urn:visionflow:linked:system-security",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:owl:class:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Protection]]",
      "resolved": "urn:visionflow:owl:class:data-protection",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


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
