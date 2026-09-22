public:: true

# Organisational Resilience
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:organisational-resilience",
  "@type": "Page",
  "title": "Organisational Resilience",
  "vc:slug": "organisational-resilience",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:organisational-resilience",
  "@type": "Class",
  "label": "Organisational Resilience",
  "definition": "Organisational resilience is the capacity of an organisation to anticipate, prepare for, respond to and adapt to incremental change and sudden disruptions in order to survive and prosper. It integrates risk management, business continuity, crisis response and adaptive capacity into a coherent governance posture. Unlike narrow continuity planning, it emphasises learning, flexibility and the ability to emerge stronger from adversity.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:resilience",
      "label": "Resilience"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:business-continuity",
        "label": "Business Continuity"
      },
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:operational-resilience",
        "label": "Operational Resilience"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:change-management",
        "label": "Change Management"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:business-continuity",
        "label": "Business Continuity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:operational-resilience",
        "label": "Operational Resilience"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
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
  - [[Organisational Resilience]] is a [[Governance]] capability spanning [[Risk Management]], [[Business Continuity]], [[Incident Response]] and [[Change Management]] that lets an organisation absorb shocks and adapt.
- ### Overview
  - It reframes survival as an ongoing capability rather than a one-off plan, aligning strategy, culture, leadership and operations so the organisation can withstand and learn from disruption.
  - Standards such as ISO 22316 codify principles including shared vision, situational awareness, adaptive capacity and effective governance.
- ### Key aspects
  - Anticipation: horizon-scanning and risk assessment to detect emerging threats early.
  - Coping capacity: business continuity, disaster recovery and crisis management to respond under stress.
  - Adaptive capacity: governance, culture and learning loops that reshape the organisation after events.
- ### Applications
  - Board-level governance frameworks ensuring continuity of critical services.
  - Regulatory operational-resilience regimes in finance and critical infrastructure.
  - Post-incident learning programmes that convert disruptions into structural improvement.
- ### Relationships
  - supports:: [[Business Continuity]]
  - supports:: [[Disaster Recovery]]
  - supports:: [[Operational Resilience]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[Change Management]]
  - relatedTo:: [[Governance Framework]]
  - relatedTo:: [[Compliance]]
  - requires:: [[Risk Management]]
  - requires:: [[Incident Response]]
  - enables:: [[Business Continuity]]
  - dependsOn:: [[Governance Framework]]
  - hasPart:: [[Disaster Recovery]]
  - hasPart:: [[Operational Resilience]]
  - uses:: [[Incident Response]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
