public:: true

# Hazard Identification

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:hazard-identification",
  "@type": "Page",
  "title": "Hazard Identification",
  "vc:slug": "hazard-identification",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hazard-identification",
  "@type": "Class",
  "label": "Hazard Identification",
  "definition": "Hazard identification is the systematic process of recognising and cataloguing sources of potential harm within a system, task, or environment before they cause injury, damage, or loss. It is the first and enabling stage of risk assessment, producing the list of hazards that downstream analysis, evaluation, and mitigation depend on. In robotics it underpins functional-safety compliance by exposing mechanical, electrical, control, and human-interaction hazards.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:risk-assessment",
      "label": "Risk Assessment"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:hazard-analysis",
        "label": "Hazard Analysis"
      },
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      },
      {
        "@id": "urn:ngm:class:fmea",
        "label": "Failure Mode and Effects Analysis"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:risk-mitigation",
        "label": "Risk Mitigation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:safety-engineering",
        "label": "Safety Engineering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:functional-safety",
        "label": "Functional Safety"
      },
      {
        "@id": "urn:ngm:class:safety-case",
        "label": "Safety Case"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-13482",
        "label": "ISO 13482"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:collision-avoidance",
        "label": "Collision Avoidance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:safety",
        "label": "Safety"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Reliability"
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
  - [[Risk Assessment]]
  - [[Safety]]
  - [[Functional Safety]]
  - [[Hazard Analysis]]
  - [[ISO 13482]]
- ### Overview
  - Establishes the foundational inventory of harms that every later risk decision references.
  - Combines structured techniques with operational and historical evidence to avoid blind spots.
  - Is iterative: new hazards surface as designs, environments, and use cases evolve.
- ### Mechanisms
  - Checklist, HAZOP, and what-if reviews to provoke systematic discovery of hazards.
  - Fault-tree and FMEA decomposition to trace causes and failure modes.
  - Task and use-case analysis covering foreseeable misuse and human-robot contact.
  - Severity and exposure tagging to feed quantitative risk evaluation.
  - Traceability linking each hazard to required mitigations and verification evidence.
- ### Applications
  - Compliance assessment for personal-care and collaborative robots under ISO 13482.
  - Machinery and industrial automation safety reviews.
  - Process-safety studies in chemical and energy plants.
  - Pre-deployment safety cases for autonomous and mobile systems.
- ### Relationships
  - partOf:: [[Risk Assessment]]
  - hasPart:: [[Hazard Analysis]]
  - hasPart:: [[Fault Tree Analysis]]
  - hasPart:: [[Failure Mode and Effects Analysis]]
  - enables:: [[Risk Mitigation]]
  - requires:: [[Safety Engineering]]
  - supports:: [[Functional Safety]]
  - supports:: [[Safety Case]]
  - standardizedBy:: [[ISO 13482]]
  - uses:: [[Collision Avoidance]]
  - relatedTo:: [[Safety]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[Reliability]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
