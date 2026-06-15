public:: true

# Policy Decision Point
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:policy-decision-point",
  "@type": "Page",
  "vc:slug": "policy-decision-point",
  "title": "Policy Decision Point",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:policy-decision-point",
  "@type": "Class",
  "label": "Policy Decision Point",
  "definition": "A Policy Decision Point (PDP) is the logical component in an attribute-based or policy-based access control architecture that evaluates access requests against a set of authorisation policies and returns a permit, deny, or indeterminate decision. The PDP receives a request context—including subject attributes, resource attributes, action, and environment conditions—from a Policy Enforcement Point (PEP), retrieves applicable policies from a Policy Information Point (PIP) or Policy Administration Point (PAP), and applies the XACML combining algorithms or equivalent logic to reach a binding decision. PDPs are the computational core of fine-grained, dynamic authorisation systems used in zero-trust security architectures, identity federation, API gateways, and cloud IAM platforms.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:access-control-system", "label": "Access Control System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:policy-enforcement-point", "label": "Policy Enforcement Point"},
      {"@id": "urn:ngm:class:policy-enforcement", "label": "Policy Enforcement"},
      {"@id": "urn:ngm:class:policy-engine", "label": "Policy Engine"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:policy-administration-point", "label": "Policy Administration Point"},
      {"@id": "urn:ngm:class:policy-information-point", "label": "Policy Information Point"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:policy-framework", "label": "Policy Framework"},
      {"@id": "urn:ngm:class:fine-grained-authorization", "label": "Fine-Grained Authorization"},
      {"@id": "urn:ngm:class:continuous-authorization", "label": "Continuous Authorization"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:authorization-policy", "label": "Authorization Policy"},
      {"@id": "urn:ngm:class:attribute-based-access-control", "label": "Attribute-Based Access Control"},
      {"@id": "urn:ngm:class:xacml", "label": "XACML"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:open-policy-agent", "label": "Open Policy Agent"},
      {"@id": "urn:ngm:class:json-web-token", "label": "JSON Web Token"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"},
      {"@id": "urn:ngm:class:cloud-iam", "label": "Cloud IAM"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:oasis", "label": "OASIS"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:network-perimeter-security", "label": "Network Perimeter Security"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:service-mesh", "label": "Service Mesh"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:pdp", "label": "PDP"},
    {"@id": "urn:ngm:class:authorization-decision-engine", "label": "Authorization Decision Engine"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Policy Decision Point]] (PDP) is the [[Access Control System]] component that evaluates incoming authorisation requests against machine-readable policies and returns a binding permit or deny decision, serving as the computational arbiter between the requesting [[Policy Enforcement Point]] and the policies stored in the [[Policy Engine]].

- ### Relationships
  - The PDP is architecturally inseparable from its partner components: the [[Policy Enforcement Point]] intercepts resource access attempts and forwards request contexts to the PDP, while the [[Policy Engine]] or Policy Administration Point holds the policy rules the PDP evaluates. Together they realise [[Policy Enforcement]] across distributed services and form the foundation of [[Policy Framework]] implementations. PDPs are a cornerstone of [[Zero Trust Architecture]], where every access decision is evaluated dynamically based on identity, device posture, and context rather than network perimeter. The PDP relies on strong [[Authentication]] and [[Cryptographic Verification]] to ensure request context integrity.

- ### Content
  - The Policy Decision Point concept was formalised by OASIS in the XACML (eXtensible Access Control Markup Language) specification, first published in 2003, which introduced the four-component architecture: PAP (administration), PDP (decision), PEP (enforcement), and PIP (information). XACML 3.0 (2013) extended the model with multiple combining algorithms, obligations, and advice. The PDP model was subsequently adopted beyond XACML into OPA (Open Policy Agent), Cedar (AWS), and Rego-based policy engines, which replaced XML-heavy notation with more developer-friendly policy languages.

  - The PDP operates by receiving a structured request from the PEP containing subject attributes (user identity, roles, group memberships, authentication strength), resource attributes (resource type, classification, owner), action attributes (read, write, execute, delete), and environmental attributes (time, network location, device trust level). The PDP retrieves applicable policies—often via cached PAP bundles—and applies a hierarchical combining algorithm (deny-overrides, permit-overrides, first-applicable) to resolve conflicts between individual rules and policy sets, returning a decision with optional obligations (e.g., log this access) and advice.

  - PDPs are significant because they decouple authorisation logic from application code, enabling policy changes without software redeployment and supporting audit and compliance requirements. In microservices architectures, a centralised or distributed PDP fleet enforces consistent access policies across hundreds of services. In API gateways, the PDP evaluates JWT claims and OAuth scopes against fine-grained resource permissions. In cloud IAM systems (AWS IAM, Azure AD Conditional Access, Google Cloud IAM), PDP-equivalent evaluation engines underpin billions of authorisation decisions per day.

  - In 2024–2025 PDP implementations have evolved to support continuous authorisation (re-evaluating decisions during a session rather than only at session start), integration with verifiable credentials via OpenID4VP for attribute assertion, and AI-assisted policy authoring tools that generate Rego or Cedar rules from natural language descriptions. Performance-optimised PDPs using WASM-compiled policies are deployed within service meshes (Envoy, Istio) at sub-millisecond latencies, enabling zero-trust enforcement without meaningful request latency overhead.