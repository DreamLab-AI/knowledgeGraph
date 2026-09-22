public:: true

# Mental Model

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:mental-model", "@type":"Page", "title":"Mental Model", "vc:slug":"mental-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mental-model",
  "@type": "Class",
  "label": "Mental Model",
  "definition": "A mental model is an internal cognitive representation that a person holds of how a system, interface, or environment works and behaves. In interaction design it explains how users predict outcomes, form expectations, and interpret feedback, so designs that match users' existing mental models are easier to learn and less error-prone. Mismatches between the designer's conceptual model and the user's mental model are a primary source of usability problems.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-computer-interaction",
      "label": "Human-Computer Interaction"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      },
      {
        "@id": "urn:ngm:class:world-model",
        "label": "World Model"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:usability",
        "label": "Usability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:affordance",
        "label": "Affordance"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:usability",
        "label": "Usability"
      },
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:world-model",
        "label": "World Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
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
- A [[Mental Model]] is a user's internal account of how a system works, drawn from [[Perception]] and [[Cognitive Science]]; aligning it with a design improves [[Usability]] and [[User Experience]].
- ### Overview
- Mental models are simplified, often incomplete representations that let people reason about and predict system behaviour.
- They are built from prior experience, metaphors, and feedback, and they evolve as the user interacts with a system.
- Good design surfaces a conceptual model that the user can adopt as an accurate mental model.
- Discrepancies between expectation and behaviour cause confusion, errors, and loss of trust.
- ### Key aspects
- Conceptual model: the intended model the designer communicates through the interface.
- System image: the visible behaviour and signifiers from which users infer the model.
- Affordances and feedback shape and correct the evolving mental model.
- Transfer: models from familiar systems are reused, for better or worse, on new ones.
- Robustness: accurate models support recovery from errors and exploration.
- ### Applications
- Designing interfaces whose behaviour matches user expectations.
- Conducting usability evaluation and heuristic review.
- Onboarding and instructional design that builds correct models quickly.
- Spatial and XR interaction where physical metaphors guide expectations.
- ### Relationships
- relatedTo:: [[Perception]]
- relatedTo:: [[World Model]]
- relatedTo:: [[Cognitive Science]]
- relatedTo:: [[Usability]]
- uses:: [[Affordance]]
- uses:: [[Perception]]
- enables:: [[Usability]]
- enables:: [[Interaction Design]]
- supports:: [[User Experience]]
- dependsOn:: [[Cognitive Science]]
- contrastsWith:: [[World Model]]
- bridgesTo:: [[Human-Computer Interaction]]
- requires:: [[Perception]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
