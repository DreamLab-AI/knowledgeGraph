public:: true

# Bounded Rationality

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bounded-rationality",
  "@type": "Page",
  "title": "Bounded Rationality",
  "vc:slug": "bounded-rationality",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bounded-rationality",
  "@type": "Class",
  "label": "Bounded Rationality",
  "definition": "Bounded rationality is the principle that decision-makers are constrained by limited information, finite cognitive resources and time pressure, and therefore seek satisfactory rather than optimal outcomes. It contrasts with the idealised fully rational agent of classical economics and informs models of human and artificial decision behaviour. The concept grounds heuristics, satisficing and resource-rational approaches to reasoning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decision-making",
      "label": "Decision Making"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
      },
      {
        "@id": "urn:ngm:class:decision-support",
        "label": "Decision Support"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:information-asymmetry",
        "label": "Information Asymmetry"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
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
  - Bounded rationality is the principle that decision-makers are constrained by limited information, finite cognitive resources and time pressure, and therefore seek satisfactory rather than optimal outcomes. It contrasts with the idealised fully rational agent of classical economics and informs models of human and artificial decision behaviour. The concept grounds heuristics, satisficing and resource-rational approaches to reasoning.
  - Related: [[Decision Making]] [[Behavioural Economics]] [[Cognitive Science]] [[Reasoning]]
- ### Overview
  - Bounded rationality reframes rationality as adaptive use of limited cognitive resources. Rather than computing globally optimal solutions, agents apply heuristics that perform well under realistic constraints, accepting outcomes that are good enough.
- ### Key aspects
  - Cognitive and computational limits on information processing
  - Satisficing: accepting options above an aspiration threshold
  - Heuristics that trade accuracy for tractability
  - Sensitivity to how choices are framed and presented
  - Influence of incomplete and asymmetric information
- ### Applications
  - Behavioural economics models of consumer and market behaviour
  - Design of decision-support and recommendation systems
  - Resource-rational models in cognitive science and AI
  - Agent-based simulations of markets and organisations
- ### Relationships
  - subClassOf:: [[Decision Making]]
  - contrastsWith:: [[Optimisation]]
  - supports:: [[Behavioural Economics]]
  - supports:: [[Decision Support]]
  - requires:: [[Reasoning]]
  - hasPart:: [[Information Asymmetry]]
  - partOf:: [[Decision Making]]
  - enables:: [[Agent-Based Modelling]]
  - uses:: [[Reasoning]]
  - uses:: [[Game Theory]]
  - relatedTo:: [[Cognitive Science]]
  - relatedTo:: [[Economics]]
  - relatedTo:: [[Artificial Intelligence]]
  - bridgesTo:: [[Behavioural Economics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
