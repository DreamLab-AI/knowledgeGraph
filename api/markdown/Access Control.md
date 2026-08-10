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
  "definition": "Access control is a fundamental security mechanism that regulates which users, systems, or processes can view, use, or modify resources within a computing environment. It encompasses the policies, procedures, and technologies that govern the granting and restricting of access rights, ensuring that only authorised entities can perform specific actions on protected resources based on their identity, role, or attributes.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:infra-security-and-identity",
    "label": "Security and Identity"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Permission Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "System Security"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:least-privilege",
        "label": "Least Privilege"
      },
      {
        "@id": "urn:ngm:class:separation-of-duties",
        "label": "Separation of Duties"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:role-based-access-control",
        "label": "Role-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:attribute-based-access-control",
        "label": "Attribute-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:mandatory-access-control",
        "label": "Mandatory Access Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:privileged-access-management",
        "label": "Privileged Access Management"
      },
      {
        "@id": "urn:ngm:class:access-control-list",
        "label": "Access Control List"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Security"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-sp-800-53",
        "label": "NIST SP 800-53"
      },
      {
        "@id": "urn:ngm:class:iso-iec-27001",
        "label": "ISO/IEC 27001"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:open-access",
        "label": "Open Access"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Security Mechanism"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:logical-access-control",
      "label": "Logical Access Control"
    },
    {
      "@id": "urn:ngm:class:authorisation-control",
      "label": "Authorisation Control"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
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

- ### Current Landscape (2026)
  - NIST finalised SP 1800-35 "Implementing a Zero Trust Architecture" in June 2025, offering 19 example zero-trust architectures built with commercial tools from 24 vendors, cementing dynamic per-session, attribute-based access decisions over static network perimeters; it augments the conceptual SP 800-207 (2020).
  - The NSA's Zero Trust Implementation Guideline Phase Two (January 2026) pushed agencies toward Attribute-Based Access Control (ABAC), specifying policy engines that evaluate subject, resource and environment attributes for each request.
  - Authorisation is externalising and standardising: the OpenID Foundation's AuthZEN standard (featured in Gartner's 2025 Hype Cycle for Digital Identity) defines a common protocol between policy enforcement and decision points, while OID4VC advances verifiable-credential-based access.
  - "Agent Identity" emerged as a critical new sub-category in 2025-2026 as organisations grapple with authorising AI agents; the Model Context Protocol (MCP) added OAuth, Dynamic Client Registration and scope-based access control to constrain agent access to tools and data.
  - Zero Standing Privilege (ZSP) and just-in-time access moved from best practice to a de facto requirement, with cyber insurers beginning to demand JIT privileged access as a condition of coverage (Gartner IAM Summit, December 2025).
  - Passwordless, phishing-resistant access is the new baseline: Gartner projects over 90% of MFA transactions will use FIDO authentication by 2027, passkey adoption roughly tripled in banking through 2025-2026, and Microsoft was named a Leader in the November 2025 Gartner Magic Quadrant for Access Management for the ninth consecutive year.
  - Heavy market consolidation reshaped the vendor landscape: Palo Alto Networks agreed to acquire CyberArk for around 25 billion US dollars (July 2025), Delinea moved to acquire just-in-time access vendor StrongDM, and CrowdStrike announced the acquisition of SGNL for 740 million US dollars in January 2026.
  - Open challenges as of 2026 include governing exploding machine and non-human identities, real-time identity threat detection and response (ITDR) against session-hijacking and deepfake-enabled attacks, post-quantum readiness of authentication credentials, and the absence of a single agreed zero-trust implementation standard across the many competing frameworks.

- ### References
  - 1. NIST NCCoE (2025). Implementing a Zero Trust Architecture: SP 1800-35 (Final, June 2025). https://csrc.nist.gov/pubs/sp/1800/35/final
  - 2. National Security Agency (2026). Zero Trust Implementation Guideline Phase Two. https://media.defense.gov/2026/Jan/30/2003868302/-1/-1/0/CTR_ZIG_PHASE_TWO.PDF
  - 3. CSO Online (2026). 6 key trends reshaping the IAM market. https://www.csoonline.com/article/4148282/6-key-trends-reshaping-the-iam-market.html
  - 4. Idenhaus (2025). Gartner IAM Summit 2025: Key Themes and Takeaways. https://idenhaus.com/gartner-iam-summit-2025-recap/
  - 5. Microsoft Security Blog (2025). Microsoft named a Leader in the Gartner Magic Quadrant for Access Management for the ninth consecutive year. https://www.microsoft.com/en-us/security/blog/2025/11/21/microsoft-named-a-leader-in-the-gartner-magic-quadrant-for-access-management-for-the-ninth-consecutive-year/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
