public:: true

# Role-Based Access Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:role-based-access-control",
  "@type": "Page",
  "vc:slug": "role-based-access-control",
  "title": "Role-Based Access Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:role-based-access-control",
  "@type": "Class",
  "label": "Role-Based Access Control",
  "definition": "Role-Based Access Control (RBAC) is an access control paradigm in which permissions to perform operations on system resources are assigned to roles rather than to individual users, and users acquire those permissions by being assigned to one or more roles that reflect their organisational function. It enforces the principle of least privilege and separation of duties by decoupling user identity from resource authorisation through an intermediate role abstraction.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:role-hierarchy", "label": "Role Hierarchy"},
      {"@id": "urn:ngm:class:permission-assignment", "label": "Permission Assignment"},
      {"@id": "urn:ngm:class:separation-of-duties", "label": "Separation of Duties"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:identity-and-access-management", "label": "Identity and Access Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:authorisation", "label": "Authorisation"},
      {"@id": "urn:ngm:class:access-control-decisions", "label": "Access Control Decisions"},
      {"@id": "urn:ngm:class:least-privilege", "label": "Least Privilege"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:access-control-policy", "label": "Access Control Policy"},
      {"@id": "urn:ngm:class:ansi-incits-359", "label": "ANSI/INCITS 359"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:directory-service", "label": "Directory Service"},
      {"@id": "urn:ngm:class:scim-provisioning", "label": "SCIM Provisioning"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:multi-tenancy", "label": "Multi-Tenancy"},
      {"@id": "urn:ngm:class:audit-logging", "label": "Audit Logging"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:attribute-based-access-control", "label": "Attribute-Based Access Control"},
      {"@id": "urn:ngm:class:discretionary-access-control", "label": "Discretionary Access Control"},
      {"@id": "urn:ngm:class:mandatory-access-control", "label": "Mandatory Access Control"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:policy-enforcement", "label": "Policy Enforcement"},
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"},
      {"@id": "urn:ngm:class:open-policy-agent", "label": "Open Policy Agent"},
      {"@id": "urn:ngm:class:kubernetes-rbac", "label": "Kubernetes RBAC"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:rbac", "label": "RBAC"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Role-Based Access Control is a mature [[Access Control]] model in which system permissions are bundled into named roles corresponding to job functions — such as administrator, auditor, or developer — and users are assigned to roles rather than receiving direct resource grants. [[Authentication]] verifies user identity, after which [[Authorisation]] is resolved by consulting the role-to-permission mappings managed within an [[Identity and Access Management]] system. RBAC simplifies administration by allowing permissions to be updated at the role level, automatically propagating to all role members.

- ### Relationships
  - RBAC sits within the broader [[Identity and Access Management]] landscape and produces [[Access Control Decisions]] consumed by application and infrastructure enforcement points. It is complemented by [[Zero Trust Architecture]], which treats role assignment as one signal among many rather than a sufficient proof of authorisation. [[Policy Enforcement]] components translate role-permission rules into runtime allow/deny decisions, and the overall model is typically codified within a [[Governance Framework]] that documents role definitions, assignment procedures, and periodic access reviews.

- ### Content
  - Role-based access control was formalised by Ferraiolo and Kuhn at NIST in 1992 and standardised as ANSI/INCITS 359-2004. The model arose in response to the administrative complexity of discretionary access control (DAC), in which each resource owner managed their own access lists, and mandatory access control (MAC), which was too rigid for commercial environments. RBAC's innovation was the role as a first-class object: by assigning permissions to roles and users to roles, organisations could administer access through job function rather than individual identity, reducing administrative burden by orders of magnitude in large enterprises.

  - The NIST model defines four levels of RBAC: flat (core role assignment), hierarchical (role inheritance allowing senior roles to subsume junior permissions), constrained (introducing separation-of-duty rules that prevent any single user from holding mutually exclusive roles), and symmetric (bidirectional constraints). Modern implementations extend flat RBAC with attribute-based enrichment (ABAC) to express context-sensitive policies — for instance, permitting a role's permissions only during business hours or from corporate network addresses. Policy engines such as Open Policy Agent (OPA) and XACML enforce these composite policies across distributed microservice architectures.

  - In cloud and Kubernetes environments, RBAC has become the default authorisation mechanism: AWS IAM roles, GCP service accounts, and Kubernetes RBAC all implement variants of the model, binding computational workloads to scoped permission sets rather than granting blanket access. Service meshes and API gateways enforce RBAC at the network layer, while identity providers synchronise role assignments from HR systems through SCIM provisioning. Fine-grained RBAC in databases allows row- and column-level access filtering, enabling multi-tenant SaaS architectures to isolate customer data within shared schemas.

  - In 2024–2025, RBAC implementations are being extended for AI agent contexts, where autonomous agents must be assigned constrained roles with scoped tool-use permissions to prevent privilege escalation. Zero-standing-privilege models — in which roles are granted just-in-time for specific tasks and revoked immediately after — are gaining adoption in high-security environments. The intersection of RBAC with decentralised identity standards (verifiable credentials, DIDs) is enabling portable, user-controlled role claims that traverse organisational boundaries without centralised directory lookup.

