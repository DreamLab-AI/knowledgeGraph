public:: true

# Authorization
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:authorization",
  "@type": "Page",
  "vc:slug": "authorization",
  "title": "Authorization",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:authorization",
  "@type": "Class",
  "label": "Authorization",
  "definition": "The security process that determines what actions an authenticated principal is permitted to perform on specific resources within a system. Authorization evaluates the subject's identity, role, attributes, and contextual factors against a policy to produce an access decision, operating as a distinct layer from authentication and separate from audit.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:access-control", "label": "Access Control"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:identity-and-access-management", "label": "Identity and Access Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:policy-decision-point", "label": "Policy Decision Point"},
      {"@id": "urn:ngm:class:role-based-access-control", "label": "Role-Based Access Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:audit", "label": "Audit"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Authorization]] is the security control that, following successful [[Authentication]], determines whether a given principal (user, service, or device) has the right to perform a requested operation on a specified resource. It operates by evaluating a request against a policy — which may encode roles, attributes, relationships, or contextual constraints — and producing a permit or deny decision, often accompanied by applicable obligations or advice. Authorization is logically distinct from authentication (which establishes identity) and from [[Audit]] (which records what occurred).

- ### Relationships
  - Authorization requires prior [[Authentication]] and is a core component of [[Identity and Access Management]] systems. The access decision is computed by a [[Policy Decision Point]] that evaluates policies encoding [[Role-Based Access Control]] rules or attribute-based conditions. Effective authorization enables [[Privacy]] by preventing unauthorised data access and supports [[Compliance]] with regulations such as GDPR and HIPAA. It is a foundational control in [[Zero Trust Architecture]] and its decisions are recorded in [[Audit]] logs for accountability.

- ### Content
  - The conceptual separation of authentication from authorisation was formalised in early multi-user operating systems of the 1960s and 1970s, where distinct mechanisms controlled who could log in and what files they could access. Unix file-permission bits (owner/group/other read/write/execute) represented one of the first widely deployed discretionary access-control (DAC) models. The Trusted Computer System Evaluation Criteria (1985) introduced mandatory access-control (MAC) requirements for high-assurance systems, in which a central security policy overrode user discretion.

  - Modern authorisation models fall into several paradigms. Role-Based Access Control (RBAC), standardised by NIST in the 1990s and formalised as ANSI INCITS 359-2004, assigns permissions to roles rather than individuals, simplifying administration at scale. Attribute-Based Access Control (ABAC) evaluates arbitrary subject, resource, and environmental attributes against fine-grained policies expressed in XACML or OPA (Open Policy Agent) Rego. Relationship-Based Access Control (ReBAC), popularised by Google's Zanzibar paper (2019), derives permissions from object-relationship graphs, enabling scalable fine-grained sharing. OAuth 2.0 and OpenID Connect provide delegation and federation for distributed web and API ecosystems.

  - Authorisation infrastructure in enterprise environments includes centralised [[Policy Decision Point]] services (OPA, AWS Verified Access, Azure AD Conditional Access), privilege access management (PAM) platforms for just-in-time elevated access, and API gateways enforcing token-scoped permissions. Microservices architectures introduce service-to-service authorisation challenges addressed by service meshes with mTLS and sidecar policy enforcement. Identity governance and administration (IGA) platforms manage the lifecycle of authorisation entitlements, detecting and remediating excessive or conflicting privileges.

  - In 2024–2025, authorisation is evolving to accommodate AI agents acting on behalf of users, requiring capability-scoped tokens that constrain the blast radius of compromised or misbehaving agents. Zero Trust principles mandate continuous authorisation re-evaluation based on real-time risk signals (device posture, anomalous behaviour) rather than session-level grants. Regulatory frameworks increasingly require fine-grained authorisation controls over personal data processing, and data-mesh architectures are driving domain-oriented policy management to keep authorisation close to the data it governs.