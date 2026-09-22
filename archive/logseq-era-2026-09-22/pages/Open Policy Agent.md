public:: true

# Open Policy Agent
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:open-policy-agent", "@type":"Page", "title":"Open Policy Agent", "vc:slug":"open-policy-agent", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-policy-agent",
  "@type": "Class",
  "label": "Open Policy Agent",
  "definition": "Open Policy Agent (OPA) is an open-source, general-purpose policy engine that decouples authorisation and policy decisions from application code by evaluating declarative policies against structured input. Policies are written in its purpose-built language, Rego, and OPA returns decisions that calling services enforce. As a graduated Cloud Native Computing Foundation project, it is widely used to implement policy-as-code across Kubernetes admission control, microservice authorisation, and API gateways. OPA acts as a policy decision point, leaving enforcement to integrated policy enforcement points.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:policy-engine", "label": "Policy Engine" }
  ],
  "relations": {
    "implements": [
      { "@id": "urn:ngm:class:policy-as-code", "label": "Policy as Code" },
      { "@id": "urn:ngm:class:policy-decision-point", "label": "Policy Decision Point" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:policy-as-code", "label": "Policy as Code" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:authorization", "label": "Authorization" },
      { "@id": "urn:ngm:class:access-control", "label": "Access Control" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:attribute-based-access-control", "label": "Attribute-Based Access Control" },
      { "@id": "urn:ngm:class:role-based-access-control", "label": "Role-Based Access Control" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:policy-enforcement-point", "label": "Policy Enforcement Point" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:security-policy", "label": "Security Policy" }
    ],
    "standardizedBy": [
      { "@id": "urn:ngm:class:open-source", "label": "Open Source" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:kubernetes", "label": "Kubernetes" },
      { "@id": "urn:ngm:class:api-gateway", "label": "API Gateway" },
      { "@id": "urn:ngm:class:microservices", "label": "Microservices" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - Open Policy Agent (OPA) is an open-source [[Policy Engine]] that separates policy decisions from application logic. Services send structured input to OPA, which evaluates declarative policies and returns a decision the caller enforces.
  - It implements [[Policy as Code]] and serves as a [[Policy Decision Point]], with enforcement delegated to a [[Policy Enforcement Point]] in the integrating system.

- ### Overview
  - OPA gives organisations a single, consistent way to express and evaluate authorisation and admission policy across heterogeneous systems, rather than scattering rules through each codebase.
  - **Why it matters:** as cloud-native stacks fragment into many services, centralising policy logic in a uniform engine improves auditability, testability, and consistency of [[Access Control]].
  - **How it works:**
    - Policies are authored in OPA's declarative language, Rego, and loaded into the engine.
    - A service sends a query with structured input (request attributes, user, resource, context).
    - OPA evaluates the relevant rules and returns a decision, optionally with supporting data.
    - The calling service enforces the decision; policy bundles can be distributed and versioned centrally.

- ### Key aspects
  - **Declarative policy** — rules are expressed as data-driven logic rather than imperative code.
  - **Decision/enforcement split** — OPA decides; the host enforces, cleanly separating concerns.
  - **Context-rich evaluation** — supports [[Attribute-Based Access Control]] as well as [[Role-Based Access Control]].
  - **Bundle distribution** — policies and reference data are packaged and pushed to running agents.
  - **Decision logging** — every decision can be recorded for audit and debugging.

- ### Applications
  - [[Kubernetes]] admission control enforcing security and configuration guardrails.
  - Fine-grained authorisation in [[Microservices]] and at the [[API Gateway]].
  - Infrastructure-as-code and CI/CD policy checks before deployment.
  - Enterprise [[Authorization]] services centralising entitlement decisions.

- ### Relationships
  - subClassOf:: [[Policy Engine]]
  - implements:: [[Policy as Code]]
  - implements:: [[Policy Decision Point]]
  - uses:: [[Policy as Code]]
  - uses:: [[Security Policy]]
  - enables:: [[Authorization]]
  - enables:: [[Access Control]]
  - supports:: [[Attribute-Based Access Control]]
  - supports:: [[Role-Based Access Control]]
  - requires:: [[Policy Enforcement Point]]
  - standardizedBy:: [[Open Source]]
  - relatedTo:: [[Kubernetes]]
  - relatedTo:: [[API Gateway]]
  - relatedTo:: [[Microservices]]

- ### Provenance
  - updated:: 2026-06-15
