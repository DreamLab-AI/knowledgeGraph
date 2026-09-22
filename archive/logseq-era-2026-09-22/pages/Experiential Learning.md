public:: true

# Experiential Learning

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:experiential-learning", "@type": "Page", "title": "Experiential Learning", "vc:slug": "experiential-learning", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:experiential-learning",
  "@type": "Class",
  "label": "Experiential Learning",
  "definition": "Experiential learning is an approach in which knowledge and skills are acquired through direct activity and reflection on concrete experience rather than passive instruction. In spatial computing it is realised through immersive simulations where learners act, observe outcomes and iterate. The cycle of acting, reflecting and conceptualising makes it well suited to embodied, situated training.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:immersive-learning",
      "label": "Immersive Learning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:immersive-learning",
        "label": "Immersive Learning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:embodied-cognition",
        "label": "Embodied Cognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-transfer",
        "label": "Knowledge Transfer"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:active-learning",
        "label": "Active Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:active-learning",
        "label": "Active Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:embodied-cognition",
        "label": "Embodied Cognition"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:immersive-learning",
        "label": "Immersive Learning"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Learning through direct activity and reflection, realised in [[Immersive Learning]] environments.
  - Grounded in [[Embodied Cognition]] and situated practice.
  - Supports skill transfer in [[Virtual Reality]] and [[Augmented Reality]].
- ### Overview
  - Frames learning as a cycle of concrete experience, reflection, abstraction and active experimentation.
  - Immersive media let learners safely rehearse high-stakes or rare scenarios.
  - Complements [[Active Learning]] by privileging doing over receiving information.
- ### Key aspects
  - Concrete, first-person experience drives engagement and retention.
  - Reflection consolidates tacit insight into transferable understanding.
  - Feedback loops let learners adjust action toward mastery.
  - Embodiment leverages spatial and motor memory.
- ### Applications
  - Procedural and safety training in immersive simulators.
  - Soft-skill and scenario rehearsal in virtual environments.
  - STEM education through interactive spatial visualisation.
- ### Relationships
  - subClassOf:: [[Immersive Learning]]
  - partOf:: [[Immersive Learning]]
  - requires:: [[Embodied Cognition]]
  - enables:: [[Knowledge Transfer]]
  - supports:: [[Active Learning]]
  - uses:: [[Virtual Reality]]
  - uses:: [[Augmented Reality]]
  - bridgesTo:: [[Human-Computer Interaction]]
  - implements:: [[Active Learning]]
  - dependsOn:: [[Embodied Cognition]]
  - relatedTo:: [[Immersive Learning]]
  - relatedTo:: [[Virtual Reality]]
  - relatedTo:: [[Augmented Reality]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
