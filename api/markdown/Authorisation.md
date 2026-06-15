public:: true

# Authorisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:authorisation",
  "@type": "Page",
  "vc:slug": "authorisation",
  "title": "Authorisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:authorisation",
  "@type": "Class",
  "label": "Authorisation",
  "definition": "Authorisation is the process of determining and enforcing whether an authenticated principal—user, service, or device—has the right to perform a requested action on a protected resource. It operates downstream of authentication, translating verified identity claims into permitted operations according to configured access policies. Modern authorisation frameworks encompass role-based, attribute-based, relationship-based, and policy-as-code access control models, each balancing expressiveness with enforcement performance. Robust authorisation design underpins regulatory compliance, auditability, and the principle of least privilege across distributed digital systems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:access-control",
      "label": "Access Control"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:policy-engine",
        "label": "Policy Engine"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:role-based-access-control",
        "label": "Role-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:attribute-based-access-control",
        "label": "Attribute-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Policy-Based Access Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:access-token",
        "label": "Access Token"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:oauth2",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-policy-agent",
        "label": "Open Policy Agent"
      },
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy-controls",
        "label": "Privacy Controls"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:compliance-monitoring",
        "label": "Compliance Monitoring"
      },
      {
        "@id": "urn:ngm:class:least-privilege",
        "label": "Least Privilege"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oauth2",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:xacml",
        "label": "XACML"
      },
      {
        "@id": "urn:ngm:class:iso-iec-27001",
        "label": "ISO/IEC 27001"
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
      },
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:privilege-escalation",
        "label": "Privilege Escalation"
      },
      {
        "@id": "urn:ngm:class:separation-of-duties",
        "label": "Separation of Duties"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:authorization",
      "label": "Authorization"
    },
    {
      "@id": "urn:ngm:class:access-authorisation",
      "label": "Access Authorisation"
    }
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
  - Authorisation is the security process by which a system determines whether a verified [[Authentication|authenticated]] principal—a user, service account, or device—has sufficient permission to execute a requested operation on a protected resource. It is a foundational pillar of [[Identity and Access Management]], sitting immediately downstream of [[Authentication]] and feeding its decisions into [[Access Control]] enforcement machinery. Authorisation policies encode the [[Least Privilege]] principle, ensuring principals receive only the rights strictly necessary for their role. The output of authorisation decisions feeds [[Audit Trail]] systems, enabling [[Compliance Monitoring]] and post-incident forensics. Correctly implemented, authorisation is the primary boundary between authorised activity and [[Privilege Escalation]] or data breach.

- ### Overview
  - #### What It Is
    - Authorisation (American English: "Authorization") answers the question "what are you allowed to do?" — in contrast to [[Authentication]], which answers "who are you?". The two concepts are orthogonal but complementary: a system must first authenticate a principal before it can authorise any action.
    - A decision to grant or deny a request is called an **authorisation decision** and is produced by a **Policy Decision Point (PDP)**. A separate **Policy Enforcement Point (PEP)** intercepts the request and queries the PDP, then enforces the verdict. This separation, popularised by [[XACML]] and inherited by modern systems, keeps enforcement logic decoupled from policy logic.
  - #### Why It Matters
    - Incorrect or absent authorisation is consistently cited as one of the most critical web-application security vulnerabilities in the OWASP Top 10 (historically as "Broken Access Control"). Failures allow attackers to read, modify, or delete resources belonging to other users, exfiltrate sensitive data, or escalate privileges to administrative levels.
    - Beyond security, authorisation is an operationally critical concern: misconfigured policies can lock legitimate users out of resources, impair service continuity, and trigger regulatory sanctions under frameworks such as [[ISO/IEC 27001]], GDPR, HIPAA, and SOC 2.
  - #### How It Works
    - At runtime, an authorisation flow typically proceeds as:
      - A principal presents credentials to an identity provider, receiving a signed [[Access Token]] (e.g. a [[JSON Web Token]]) encoding claims about identity, roles, and scopes.
      - When the principal requests a protected resource, the resource server or an interposing API gateway extracts and validates the token.
      - The validated claims are evaluated against the applicable policy, either locally (embedded policy enforcement) or by querying a centralised [[Policy Engine]] such as [[Open Policy Agent]].
      - The enforcement point allows or denies the request, and records the decision in an [[Audit Trail]].

- ### Key Models and Mechanisms
  - #### Role-Based Access Control (RBAC)
    - [[Role-Based Access Control]] assigns permissions to roles rather than individual principals. Users are assigned to roles, inheriting the associated permissions. RBAC is simple to administer and auditable, making it dominant in enterprise environments. It maps naturally onto [[Separation of Duties]] requirements.
    - Limitation: roles can proliferate ("role explosion"), and RBAC struggles to express context-dependent decisions (e.g. "allow only if the request originates from the corporate network during business hours").
  - #### Attribute-Based Access Control (ABAC)
    - [[Attribute-Based Access Control]] evaluates arbitrary attributes of the subject, resource, action, and environment at decision time. This enables fine-grained, context-sensitive policies ("a nurse may read patient records for patients assigned to their ward between 07:00 and 19:00"). ABAC is more expressive than RBAC but requires richer attribute infrastructure and more complex policy authoring.
    - [[XACML]] (eXtensible Access Control Markup Language) is the canonical XML-based standard for ABAC policy expression and the PDP/PEP/PAP/PIP architecture.
  - #### Relationship-Based Access Control (ReBAC)
    - [[Relationship-Based Access Control]] expresses permissions in terms of graph relationships between entities (e.g. "a user may edit a document if they are a member of the owning team"). Google Zanzibar and its open-source derivatives (OpenFGA, SpiceDB) implement ReBAC at scale, supporting billions of permission tuples with millisecond latency.
  - #### Policy-Based Access Control (PBAC) and Policy-as-Code
    - [[Policy-Based Access Control]] generalises ABAC by treating the policy itself as a first-class, versionable artefact expressed in a declarative language. [[Open Policy Agent]] (OPA) evaluates Rego policies and is widely deployed in Kubernetes admission control, API gateways, and microservice meshes.
    - Policy-as-code enables [[Infrastructure as Code]]-style workflows: policies are reviewed in pull requests, tested in CI/CD pipelines, and deployed alongside application code.
  - #### Token-Based and Delegated Authorisation
    - [[OAuth 2.0]] is the dominant delegation framework for the web, allowing resource owners to grant scoped access to third-party clients without sharing credentials. Access tokens encode scopes; refresh tokens enable long-lived delegated access.
    - [[OpenID Connect]] layers identity assertion (ID tokens) on top of OAuth 2.0, enabling combined authentication and authorisation flows.
    - [[JSON Web Token|JWTs]] are the prevalent token format, carrying signed claims that resource servers validate without contacting a central authority, enabling stateless, scalable authorisation.
    - SPIFFE/SPIRE issues [[Secure Token Service|SVIDs]] (X.509 certificates or JWTs) to workloads in zero-trust service meshes, providing workload identity underpinning machine-to-machine authorisation.

- ### Applications and Use Cases
  - #### Web and API Security
    - REST and GraphQL APIs use [[OAuth 2.0]] scopes and bearer tokens to restrict client access to specific resource types and operations. API gateways enforce authorisation before requests reach backend services.
  - #### Cloud and Kubernetes Environments
    - Cloud providers (AWS IAM, Azure RBAC, GCP IAM) implement RBAC and ABAC at scale to control access to cloud resources. Kubernetes admission webhooks integrate [[Open Policy Agent]] to authorise resource mutations at the control plane level.
  - #### Zero Trust Architectures
    - [[Zero Trust Architecture]] mandates continuous per-request authorisation rather than implicit trust based on network location. Every request from any principal—internal or external—is evaluated against policy, reducing blast radius from compromised credentials.
  - #### Healthcare and Finance
    - Health data ecosystems require fine-grained consent hierarchies: a patient may authorise a GP to read their records but not a pharmacist. SMART on FHIR extends [[OAuth 2.0]] for healthcare-specific authorisation scopes.
    - Financial services use authorisation to enforce [[Separation of Duties]] in payment processing and trading platforms, preventing any single individual from both initiating and approving high-value transactions.
  - #### AI Agents and Delegated AI
    - Emerging use cases involve [[AI Agent|AI agents]] acting on behalf of human users—scheduling meetings, accessing files, or executing transactions. These scenarios require scoped, revocable delegated authorisation to prevent over-privileged autonomous action. The IETF is developing extensions to [[OAuth 2.0]] (e.g. RFC 9396 Rich Authorisation Requests) to express fine-grained intent for AI-agent delegation.
  - #### Decentralised and Blockchain Contexts
    - [[Decentralised Identity]] (W3C DIDs and Verifiable Credentials) shifts credential issuance off centralised identity providers, enabling self-sovereign authorisation flows. [[Smart Contract|Smart contracts]] on blockchains can enforce resource-access rules autonomously, with authorisation logic encoded immutably on-chain.

- ### Relationships
  - requires:: [[Authentication]]
  - requires:: [[Identity Management]]
  - requires:: [[Policy Engine]]
  - hasPart:: [[Role-Based Access Control]]
  - hasPart:: [[Attribute-Based Access Control]]
  - hasPart:: [[Policy-Based Access Control]]
  - hasPart:: [[Relationship-Based Access Control]]
  - uses:: [[Access Token]]
  - uses:: [[JSON Web Token]]
  - uses:: [[OAuth 2.0]]
  - uses:: [[Open Policy Agent]]
  - uses:: [[Compliance Framework]]
  - enables:: [[Privacy Controls]]
  - enables:: [[Audit Trail]]
  - enables:: [[Compliance Monitoring]]
  - enables:: [[Least Privilege]]
  - enables:: [[Zero Trust Architecture]]
  - dependsOn:: [[Cryptography]]
  - dependsOn:: [[Digital Identity]]
  - dependsOn:: [[Secure Token Service]]
  - contrastsWith:: [[Authentication]]
  - contrastsWith:: [[Accountability]]
  - standardizedBy:: [[OAuth 2.0]]
  - standardizedBy:: [[OpenID Connect]]
  - standardizedBy:: [[XACML]]
  - standardizedBy:: [[ISO/IEC 27001]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[AI Agent]]
  - relatedTo:: [[Identity and Access Management]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Privilege Escalation]]
  - relatedTo:: [[Separation of Duties]]

- ### Standards and Context
  - #### Standards Bodies
    - **IETF OAuth Working Group** — maintains [[OAuth 2.0]] (RFC 6749), bearer tokens (RFC 6750), token introspection (RFC 7662), Rich Authorisation Requests (RFC 9396), and related extensions.
    - **W3C** — standardises [[Decentralised Identity|DIDs]] (Decentralised Identifiers) and Verifiable Credentials, which underpin emerging self-sovereign authorisation flows.
    - **OASIS** — publishes [[XACML]] (versions 2.0 and 3.0), the XML-based standard for attribute-based access control policy expression and the PDP/PEP reference architecture.
    - **NIST** — SP 800-162 ("Guide to ABAC Definition and Considerations") and SP 800-207 ("Zero Trust Architecture") provide authoritative guidance on modern authorisation design.
    - **OpenID Foundation** — maintains [[OpenID Connect]], the identity layer on [[OAuth 2.0]] enabling combined authentication and authorisation.
    - **SPIFFE** — specifies the Secure Production Identity Framework for Everyone (SPIFFE), enabling workload identity for machine-to-machine authorisation in cloud-native environments.
  - #### Regulatory Context
    - [[ISO/IEC 27001]] (Information Security Management) mandates documented access control policies, periodic access reviews, and timely revocation — all requiring sound authorisation infrastructure.
    - GDPR Article 25 (Data Protection by Design) and the principle of data minimisation require that authorisation systems enforce purpose-limited data access.
    - SOC 2 Trust Services Criteria (CC6) mandates logical access controls, which are implemented primarily through authorisation systems.
    - PCI DSS Requirement 7 ("Restrict access to system components and cardholder data by business need to know") is enforced through authorisation policies.

- ### Provenance
  - sources:: OWASP Top 10 (Broken Access Control); NIST SP 800-162; NIST SP 800-207; RFC 6749 (OAuth 2.0); RFC 9396 (Rich Authorisation Requests); XACML 3.0 OASIS Standard; Google Zanzibar paper (2019)
  - updated:: 2026-06-13
