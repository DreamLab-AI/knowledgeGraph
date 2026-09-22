public:: true

# XACML

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:xacml",
  "@type": "Page",
  "title": "XACML",
  "vc:slug": "xacml",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:xacml",
  "@type": "Class",
  "label": "XACML",
  "definition": "XACML (eXtensible Access Control Markup Language) is an OASIS standard that defines a declarative, XML-based language for expressing access-control policies and the requests and responses used to evaluate them. It specifies a reference architecture separating policy decision, enforcement, administration and information points, enabling fine-grained, attribute-based authorisation across heterogeneous systems. XACML lets organisations externalise authorisation logic from applications into centrally managed policies.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:attribute-based-access-control",
      "label": "Attribute-Based Access Control"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:attribute-based-access-control",
        "label": "Attribute-Based Access Control"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oasis",
        "label": "OASIS"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:access-control-system",
        "label": "Access Control System"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:policy-decision-point",
        "label": "Policy Decision Point"
      },
      {
        "@id": "urn:ngm:class:policy-enforcement-point",
        "label": "Policy Enforcement Point"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rbac",
        "label": "Role-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:policy-engine",
        "label": "Policy Engine"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - XACML (eXtensible Access Control Markup Language) is an OASIS standard that defines a declarative, XML-based language for expressing access-control policies and the requests and responses used to evaluate them. It specifies a reference architecture separating policy decision, enforcement, administration and information points, enabling fine-grained, attribute-based authorisation across heterogeneous systems. XACML lets organisations externalise authorisation logic from applications into centrally managed policies.
  - Related concepts: [[Attribute-Based Access Control]] [[Policy Decision Point]] [[Policy Enforcement Point]] [[OASIS]] [[Authorization]]
- ### Overview
  - XACML provides a vendor-neutral way to define and enforce authorisation policies based on attributes of the subject, resource, action and environment. Its architecture cleanly separates the policy enforcement point, which intercepts requests, from the policy decision point, which evaluates applicable rules and returns permit, deny or not-applicable results. This externalisation lets security teams manage authorisation centrally and consistently rather than embedding logic in every application.
- ### Key aspects
  - Declarative XML policy language with rules, policies and policy sets
  - Reference architecture of PEP, PDP, PAP and PIP components
  - Attribute-based evaluation over subject, resource, action and environment
  - Combining algorithms that resolve conflicting rule outcomes
  - Obligations and advice attached to access decisions
- ### Applications
  - Enterprise fine-grained authorisation across applications
  - Externalised access control for service-oriented architectures
  - Healthcare and finance regulatory access policies
  - Federated authorisation in multi-domain environments
  - API and microservice authorisation gateways
- ### Relationships
  - subClassOf:: [[Attribute-Based Access Control]]
  - implements:: [[Attribute-Based Access Control]]
  - standardizedBy:: [[OASIS]]
  - uses:: [[XML]]
  - partOf:: [[Access Control System]]
  - hasPart:: [[Policy Decision Point]]
  - hasPart:: [[Policy Enforcement Point]]
  - enables:: [[Authorization]]
  - enables:: [[Access Control]]
  - relatedTo:: [[Role-Based Access Control]]
  - relatedTo:: [[Policy Engine]]
  - relatedTo:: [[Identity and Access Management]]
  - relatedTo:: [[Authentication]]
  - supports:: [[Security]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
