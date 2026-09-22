public:: true

# Probabilistic Risk Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:probabilistic-risk-assessment",
  "@type": "Page",
  "title": "Probabilistic Risk Assessment",
  "vc:slug": "probabilistic-risk-assessment",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:probabilistic-risk-assessment",
  "@type": "Class",
  "label": "Probabilistic Risk Assessment",
  "definition": "Probabilistic Risk Assessment (PRA) is a systematic methodology for quantifying the likelihood and consequences of adverse events in complex engineered systems. It enumerates accident scenarios, estimates the probability of each contributing failure and combines them to produce numeric risk measures and confidence bounds. PRA underpins safety-critical decision-making in domains such as nuclear, aerospace and critical infrastructure where rare, high-consequence failures must be rigorously characterised.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:risk-assessment",
      "label": "Risk Assessment"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      },
      {
        "@id": "urn:ngm:class:hazard-analysis",
        "label": "Hazard Analysis"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:safety-engineering",
        "label": "Safety Engineering"
      },
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:safety-engineering",
        "label": "Safety Engineering"
      },
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hazard-analysis",
        "label": "Hazard Analysis"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
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
  - Probabilistic Risk Assessment (PRA) is a systematic methodology for quantifying the likelihood and consequences of adverse events in complex engineered systems. It enumerates accident scenarios, estimates the probability of each contributing failure and combines them to produce numeric risk measures and confidence bounds. PRA underpins safety-critical decision-making in domains such as nuclear, aerospace and critical infrastructure where rare, high-consequence failures must be rigorously characterised.
  - Related core concepts: [[Risk Assessment]] [[Reliability Engineering]] [[Fault Tree Analysis]] [[Statistics]] [[Safety Engineering]]
- ### Overview
  - PRA answers three questions: what can go wrong, how likely is it, and what are the consequences. Analysts decompose systems with event trees and fault trees, assign component failure probabilities and propagate uncertainty to bound the resulting risk estimates. The output guides where to invest in redundancy, inspection and design changes for the greatest safety return.
- ### Mechanisms
  - Scenario enumeration: event trees mapping initiating events to consequence outcomes.
  - Failure logic: fault trees decomposing top-level failures into basic component faults.
  - Probability estimation: assigning failure rates from data, testing and expert judgement.
  - Uncertainty quantification: propagating parameter and model uncertainty to confidence bounds.
  - Importance ranking: identifying which components and scenarios dominate overall risk.
- ### Applications
  - Nuclear plant safety cases and licensing.
  - Aerospace and spacecraft mission risk evaluation.
  - Critical infrastructure resilience and reliability engineering.
  - Prioritising redundancy and inspection investment under budget constraints.
- ### Relationships
  - subClassOf:: [[Risk Assessment]]
  - requires:: [[Statistics]]
  - requires:: [[Fault Tree Analysis]]
  - enables:: [[Risk Assessment]]
  - enables:: [[Reliability Engineering]]
  - uses:: [[Fault Tree Analysis]]
  - uses:: [[Hazard Analysis]]
  - uses:: [[Uncertainty Quantification]]
  - relatedTo:: [[Safety Engineering]]
  - relatedTo:: [[Reliability Engineering]]
  - relatedTo:: [[Fault Tolerance]]
  - dependsOn:: [[Statistics]]
  - supports:: [[Safety Engineering]]
  - supports:: [[Reliability Engineering]]
  - partOf:: [[Risk Assessment]]
  - implements:: [[Uncertainty Quantification]]
  - contrastsWith:: [[Hazard Analysis]]
  - bridgesTo:: [[Reliability Engineering]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
