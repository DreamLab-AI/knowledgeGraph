public:: true

# Security By Design

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:security-by-design",
  "@type": "Page",
  "title": "Security By Design",
  "vc:slug": "security-by-design",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:security-by-design",
  "@type": "Class",
  "label": "Security By Design",
  "definition": "Security by design is an engineering approach in which security is treated as a foundational requirement and built into systems from the earliest stages rather than bolted on retrospectively. It favours secure defaults, minimal attack surface, defence in depth and least-privilege access, supported by threat modelling and continuous verification across the development lifecycle. The principle is increasingly mandated by regulators and procurement frameworks for connected products and critical infrastructure.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      },
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      },
      {
        "@id": "urn:ngm:class:threat-model",
        "label": "Threat Model"
      },
      {
        "@id": "urn:ngm:class:threat-modelling",
        "label": "Threat Modelling"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:defense-in-depth",
        "label": "Defense In Depth"
      },
      {
        "@id": "urn:ngm:class:least-privilege",
        "label": "Least Privilege"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "partOf": [
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
  - [[Security By Design]] embeds [[Threat Modelling]], [[Defense In Depth]] and [[Least Privilege]] into [[Software Engineering]] from the outset, complementing [[Privacy By Design]] to deliver [[Resilience]].
- ### Overview
  - Security by design is an engineering approach in which security is treated as a foundational requirement and built into systems from the earliest stages rather than added retrospectively.
  - It favours secure defaults, minimal attack surface and continuous verification across the development lifecycle.
  - The principle is increasingly mandated by regulators and procurement frameworks for critical systems.
- ### Key aspects
  - Threat modelling and risk assessment from requirements onward.
  - Secure defaults and fail-safe configurations.
  - Defence in depth and least-privilege access.
  - Continuous testing, review and vulnerability management.
- ### Applications
  - Secure software development lifecycles in regulated industries.
  - Design of [[Zero Trust Architecture]] network and identity systems.
  - Hardening of connected products and critical infrastructure.
- ### Relationships
  - enables:: [[Resilience]]
  - enables:: [[Vulnerability Management]]
  - relatedTo:: [[Privacy By Design]]
  - relatedTo:: [[Threat Model]]
  - relatedTo:: [[Threat Modelling]]
  - uses:: [[Defense In Depth]]
  - uses:: [[Least Privilege]]
  - supports:: [[Zero Trust Architecture]]
  - supports:: [[Cybersecurity]]
  - requires:: [[Risk Management]]
  - requires:: [[Software Engineering]]
  - implements:: [[Encryption]]
  - implements:: [[Authentication]]
  - implements:: [[Access Control]]
  - partOf:: [[Security]]
- ### Provenance
  - updated:: 2026-06-15
